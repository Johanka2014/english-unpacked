import { Link, useParams, Navigate, useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
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
import SpeakingCorporateCultureExercise from '@/components/business-benchmark/SpeakingCorporateCultureExercise';
import GrammarCorporateCultureExercise from '@/components/business-benchmark/GrammarCorporateCultureExercise';
import GettingStartedCompanyHistory from '@/components/business-benchmark/GettingStartedCompanyHistory';
import ReadingCompanyHistoryExercise from '@/components/business-benchmark/ReadingCompanyHistoryExercise';
import GrammarCompanyHistoryExercise from '@/components/business-benchmark/GrammarCompanyHistoryExercise';
import ReadingHongdouExercise from '@/components/business-benchmark/ReadingHongdouExercise';

const BusinessBenchmarkSkill = () => {
  const { moduleId, skillId } = useParams();
  const navigate = useNavigate();
  const mod = businessBenchmarkModules.find((m) => m.id === moduleId);
  const skill = mod?.skills.find((s) => s.id === skillId);

  if (!mod || !skill) return <Navigate to="/business-benchmark" replace />;

  const currentIndex = mod.skills.findIndex((s) => s.id === skillId);
  const prev = currentIndex > 0 ? mod.skills[currentIndex - 1] : null;
  const next = currentIndex < mod.skills.length - 1 ? mod.skills[currentIndex + 1] : null;

  const handleNavigate = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
    if (contentType === 'listening-corporate-culture') return <ListeningCorporateCultureExercise />;
    if (contentType === 'speaking-corporate-culture') return <SpeakingCorporateCultureExercise />;
    if (contentType === 'grammar-corporate-culture') return <GrammarCorporateCultureExercise />;
    if (contentType === 'getting-started-company-history') return <GettingStartedCompanyHistory />;
    if (contentType === 'reading-company-history') return <ReadingCompanyHistoryExercise />;
    if (contentType === 'grammar-company-history') return <GrammarCompanyHistoryExercise />;
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

        {/* Skill Navigation */}
        <div className="flex justify-between items-center mt-12 pt-6 border-t border-border">
          {prev ? (
            <Button variant="outline" className="gap-2" onClick={() => handleNavigate(`/business-benchmark/${mod.id}/${prev.id}`)}>
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">{prev.title}</span>
              <span className="sm:hidden">Previous</span>
            </Button>
          ) : (
            <div />
          )}
          {next ? (
            <Button className="gap-2 bg-primary hover:bg-primary/90" onClick={() => handleNavigate(`/business-benchmark/${mod.id}/${next.id}`)}>
              <span className="hidden sm:inline">{next.title}</span>
              <span className="sm:hidden">Next</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          ) : (
            <Button className="gap-2 bg-primary hover:bg-primary/90" onClick={() => handleNavigate(`/business-benchmark/${mod.id}`)}>
              Back to Module
              <ArrowRight className="h-4 w-4" />
            </Button>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BusinessBenchmarkSkill;
