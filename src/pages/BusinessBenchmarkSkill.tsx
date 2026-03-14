import { Link, useParams, Navigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { businessBenchmarkModules } from '@/data/businessBenchmarkData';
import SEO from '@/components/SEO';
import DepartmentMatchingExercise from '@/components/business-benchmark/DepartmentMatchingExercise';
import JobResponsibilitiesExercise from '@/components/business-benchmark/JobResponsibilitiesExercise';
import WorkPrepositionsExercise from '@/components/business-benchmark/WorkPrepositionsExercise';
import AdjectivesExercise from '@/components/business-benchmark/AdjectivesExercise';
import YourTurnExercise from '@/components/business-benchmark/YourTurnExercise';
import ListeningPAExercise from '@/components/business-benchmark/ListeningPAExercise';
import ReadingChangingPlacesExercise from '@/components/business-benchmark/ReadingChangingPlacesExercise';
import GrammarWorkshopExercise from '@/components/business-benchmark/GrammarWorkshopExercise';
import ReadingCorporateCultureExercise from '@/components/business-benchmark/ReadingCorporateCultureExercise';
import VocabCorporateCultureExercise from '@/components/business-benchmark/VocabCorporateCultureExercise';
import ListeningCorporateCultureExercise from '@/components/business-benchmark/ListeningCorporateCultureExercise';

const BusinessBenchmarkSkill = () => {
  const { moduleId, skillId } = useParams();
  const mod = businessBenchmarkModules.find((m) => m.id === moduleId);
  const skill = mod?.skills.find((s) => s.id === skillId);

  if (!mod || !skill) return <Navigate to="/business-benchmark" replace />;

  const renderContent = () => {
    const contentType = skill.content?.type;
    if (contentType === 'department-matching') return (
      <div className="space-y-8">
        <DepartmentMatchingExercise />
        <JobResponsibilitiesExercise />
        <WorkPrepositionsExercise />
        <AdjectivesExercise />
        <YourTurnExercise />
      </div>
    );
    if (contentType === 'listening-pa') return <ListeningPAExercise />;
    if (contentType === 'reading-changing-places') return <ReadingChangingPlacesExercise />;
    if (contentType === 'grammar-workshop') return <GrammarWorkshopExercise />;
    if (contentType === 'reading-corporate-culture') return <ReadingCorporateCultureExercise />;
    if (contentType === 'vocab-corporate-culture') return <VocabCorporateCultureExercise />;
    return (
      <div className="max-w-3xl mx-auto text-center py-16">
        <p className="text-lg text-muted-foreground">
          Content for this skill is coming soon. Check back later!
        </p>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${skill.title} — ${mod.title} | Business Benchmark`}
        description={skill.description}
      />
      <Navigation />

      <section className="bg-primary/10 py-16">
        <div className="container mx-auto px-4">
          <span className="text-sm font-medium text-muted-foreground">
            Module {mod.number}: {mod.title}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-1">{skill.title}</h1>
          <p className="text-muted-foreground mt-2">{skill.description}</p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link to={`/business-benchmark/${mod.id}`}>
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" /> Back to {mod.title}
            </Button>
          </Link>
        </div>

        {renderContent()}

        <div className="mt-12 mb-4">
          <Link to={`/business-benchmark/${mod.id}`}>
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" /> Back to {mod.title}
            </Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BusinessBenchmarkSkill;
