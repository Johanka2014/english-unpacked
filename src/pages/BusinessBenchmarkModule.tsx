import { Link, useParams, Navigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, BookOpen, Headphones, PenLine, MessageCircle, Languages, FileText, Lock } from 'lucide-react';
import { businessBenchmarkModules } from '@/data/businessBenchmarkData';
import SEO from '@/components/SEO';
import OrganigramExercise from '@/components/business-benchmark/OrganigramExercise';
import CorporateCultureGettingStarted from '@/components/business-benchmark/CorporateCultureGettingStarted';

const skillIcons: Record<string, React.ElementType> = {
  reading: BookOpen,
  listening: Headphones,
  writing: PenLine,
  speaking: MessageCircle,
  vocabulary: Languages,
  grammar: FileText,
};

const skillColors: Record<string, string> = {
  reading: 'from-blue-600/80 to-blue-400/60',
  listening: 'from-purple-600/80 to-purple-400/60',
  writing: 'from-emerald-600/80 to-emerald-400/60',
  speaking: 'from-orange-600/80 to-orange-400/60',
  vocabulary: 'from-rose-600/80 to-rose-400/60',
  grammar: 'from-indigo-600/80 to-indigo-400/60',
};

const BusinessBenchmarkModule = () => {
  const { moduleId } = useParams();
  const mod = businessBenchmarkModules.find((m) => m.id === moduleId);

  if (!mod) return <Navigate to="/business-benchmark" replace />;

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`Module ${mod.number}: ${mod.title} | Business Benchmark`}
        description={`Practice ${mod.title} with reading, listening, writing, speaking, vocabulary and grammar exercises.`}
      />
      <Navigation />

      {/* Header */}
      <section className="bg-primary/10 py-16">
        <div className="container mx-auto px-4">
          <span className="text-sm font-medium text-muted-foreground">Module {mod.number}</span>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-1">{mod.title}</h1>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link to="/business-benchmark">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" /> Back to All Modules
            </Button>
          </Link>
        </div>

        {moduleId === 'the-working-day' && <OrganigramExercise />}
        {moduleId === 'corporate-culture' && <CorporateCultureGettingStarted />}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mod.skills.map((skill) => {
            const Icon = skillIcons[skill.id] || FileText;
            const gradient = skillColors[skill.id] || 'from-gray-600/80 to-gray-400/60';
            const hasContent = !!skill.content;

            const card = (
              <div className="group relative rounded-xl overflow-hidden h-52 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} group-hover:opacity-90 transition-opacity duration-300`} />

                {!hasContent && (
                  <div className="absolute top-3 right-3 z-20 flex items-center gap-1 bg-black/30 text-white/80 text-xs px-2 py-1 rounded-full">
                    <Lock className="h-3 w-3" /> Coming soon
                  </div>
                )}

                <div className="relative z-10 h-full flex flex-col justify-end p-5">
                  <div className="p-2 rounded-lg bg-white/20 w-fit mb-3">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{skill.title}</h3>
                  <p className="text-white/80 text-sm mt-1 line-clamp-2">{skill.description}</p>
                </div>
              </div>
            );

            if (hasContent) {
              return (
                <Link key={skill.id} to={`/business-benchmark/${mod.id}/${skill.id}`}>
                  {card}
                </Link>
              );
            }

            return <div key={skill.id} className="opacity-75">{card}</div>;
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BusinessBenchmarkModule;
