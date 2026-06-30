import { Link, useParams, Navigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Headphones, BookOpen, Mic, PenLine, Wrench, GraduationCap } from 'lucide-react';
import { techTalkUnits } from '@/data/techTalkData';
import SEO from '@/components/SEO';

const typeIcons: Record<string, React.ElementType> = {
  language: PenLine,
  communication: Mic,
  writing: PenLine,
  reading: BookOpen,
  vocabulary: BookOpen,
  practice: GraduationCap,
};

const typeColors: Record<string, string> = {
  language: 'from-indigo-600/80 to-indigo-400/60',
  communication: 'from-orange-600/80 to-orange-400/60',
  writing: 'from-blue-600/80 to-blue-400/60',
  reading: 'from-teal-600/80 to-teal-400/60',
  vocabulary: 'from-rose-600/80 to-rose-400/60',
  practice: 'from-emerald-600/80 to-emerald-400/60',
};

const TechTalkUnit = () => {
  const { unitId } = useParams();
  const unit = techTalkUnits.find((u) => u.id === unitId);
  if (!unit) return <Navigate to="/tech-talk" replace />;

  return (
    <div className="min-h-screen bg-background">
      <SEO title={`Unit ${unit.number}: ${unit.title} | Tech Talk Intermediate`} description={unit.subtitle} />
      <Navigation />

      <section className="bg-primary/10 py-16">
        <div className="container mx-auto px-4">
          <span className="text-sm font-medium text-muted-foreground">Unit {unit.number}</span>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-1">{unit.title}</h1>
          <p className="text-muted-foreground mt-2">{unit.subtitle}</p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link to="/tech-talk">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" /> Back to All Units
            </Button>
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {unit.sections.map((section) => {
            const Icon = typeIcons[section.type] || Wrench;
            const gradient = typeColors[section.type] || 'from-gray-600/80 to-gray-400/60';
            return (
              <Link key={section.id} to={`/tech-talk/${unit.id}/${section.id}`}>
                <div className="group relative rounded-xl overflow-hidden h-52 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradient} group-hover:opacity-90 transition-opacity duration-300`} />
                  <div className="absolute top-3 left-3 z-20 flex items-center gap-2">
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${section.source === 'SB' ? 'bg-white/90 text-slate-800' : 'bg-emerald-500/90 text-white'}`}>
                      {section.source === 'SB' ? "Student's Book" : 'Workbook'}
                    </span>
                    {section.hasAudio && (
                      <span className="flex items-center gap-1 bg-black/30 text-white/90 text-xs px-2 py-1 rounded-full">
                        <Headphones className="h-3 w-3" /> Audio
                      </span>
                    )}
                  </div>
                  <div className="relative z-10 h-full flex flex-col justify-end p-5">
                    <div className="p-2 rounded-lg bg-white/20 w-fit mb-3">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white leading-tight">{section.title}</h3>
                    <p className="text-white/80 text-sm mt-1 line-clamp-2">{section.description}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TechTalkUnit;
