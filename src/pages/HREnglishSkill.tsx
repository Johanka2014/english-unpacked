import { Link, useParams, Navigate, useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { hrUnits } from '@/data/hrData';
import SEO from '@/components/SEO';
import StarterUnit1 from '@/components/hr/StarterUnit1';
import VocabularyUnit1 from '@/components/hr/VocabularyUnit1';
import ListeningUnit1 from '@/components/hr/ListeningUnit1';
import ReadingUnit1 from '@/components/hr/ReadingUnit1';
import SpeakingUnit1 from '@/components/hr/SpeakingUnit1';
import StarterUnit2 from '@/components/hr/StarterUnit2';
import VocabularyUnit2 from '@/components/hr/VocabularyUnit2';
import ListeningUnit2 from '@/components/hr/ListeningUnit2';
import ReadingUnit2 from '@/components/hr/ReadingUnit2';
import SpeakingUnit2 from '@/components/hr/SpeakingUnit2';
import StarterUnit3 from '@/components/hr/StarterUnit3';
import VocabularyUnit3 from '@/components/hr/VocabularyUnit3';
import ListeningUnit3 from '@/components/hr/ListeningUnit3';
import ReadingUnit3 from '@/components/hr/ReadingUnit3';
import SpeakingUnit3 from '@/components/hr/SpeakingUnit3';
import StarterUnit4 from '@/components/hr/StarterUnit4';
import VocabularyUnit4 from '@/components/hr/VocabularyUnit4';
import ListeningUnit4 from '@/components/hr/ListeningUnit4';
import ReadingUnit4 from '@/components/hr/ReadingUnit4';
import SpeakingUnit4 from '@/components/hr/SpeakingUnit4';
import StarterUnit5 from '@/components/hr/StarterUnit5';
import VocabularyUnit5 from '@/components/hr/VocabularyUnit5';
import ListeningUnit5 from '@/components/hr/ListeningUnit5';
import ReadingUnit5 from '@/components/hr/ReadingUnit5';
import SpeakingUnit5 from '@/components/hr/SpeakingUnit5';
import StarterUnit6 from '@/components/hr/StarterUnit6';
import VocabularyUnit6 from '@/components/hr/VocabularyUnit6';
import ListeningUnit6 from '@/components/hr/ListeningUnit6';
import ReadingUnit6 from '@/components/hr/ReadingUnit6';
import SpeakingUnit6 from '@/components/hr/SpeakingUnit6';

const HREnglishSkill = () => {
  const { unitId, skillId } = useParams();
  const navigate = useNavigate();
  const unit = hrUnits.find((u) => u.id === unitId);
  const skill = unit?.skills.find((s) => s.id === skillId);

  if (!unit || !skill) return <Navigate to="/hr-english" replace />;

  const currentIndex = unit.skills.findIndex((s) => s.id === skillId);
  const prev = currentIndex > 0 ? unit.skills[currentIndex - 1] : null;
  const next = currentIndex < unit.skills.length - 1 ? unit.skills[currentIndex + 1] : null;

  const handleNavigate = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    if (unitId === 'recruitment') {
      switch (skillId) {
        case 'starter': return <StarterUnit1 />;
        case 'vocabulary': return <VocabularyUnit1 />;
        case 'listening': return <ListeningUnit1 />;
        case 'reading': return <ReadingUnit1 />;
        case 'speaking': return <SpeakingUnit1 />;
      }
    }
    if (unitId === 'selection') {
      switch (skillId) {
        case 'starter': return <StarterUnit2 />;
        case 'vocabulary': return <VocabularyUnit2 />;
        case 'listening': return <ListeningUnit2 />;
        case 'reading': return <ReadingUnit2 />;
        case 'speaking': return <SpeakingUnit2 />;
      }
    }
    if (unitId === 'employee-relations') {
      switch (skillId) {
        case 'starter': return <StarterUnit3 />;
        case 'vocabulary': return <VocabularyUnit3 />;
        case 'listening': return <ListeningUnit3 />;
        case 'reading': return <ReadingUnit3 />;
        case 'speaking': return <SpeakingUnit3 />;
      }
    }
    if (unitId === 'hr-development') {
      switch (skillId) {
        case 'starter': return <StarterUnit4 />;
        case 'vocabulary': return <VocabularyUnit4 />;
        case 'listening': return <ListeningUnit4 />;
        case 'reading': return <ReadingUnit4 />;
        case 'speaking': return <SpeakingUnit4 />;
      }
    }
    if (unitId === 'reward-and-remuneration') {
      switch (skillId) {
        case 'starter': return <StarterUnit5 />;
        case 'vocabulary': return <VocabularyUnit5 />;
        case 'listening': return <ListeningUnit5 />;
        case 'reading': return <ReadingUnit5 />;
        case 'speaking': return <SpeakingUnit5 />;
      }
    }
    return (
      <div className="text-center py-16">
        <p className="text-muted-foreground text-lg">Content coming soon...</p>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${skill.title} — ${unit.title} | Oxford English for HR`}
        description={skill.description}
      />
      <Navigation />

      <section className="bg-primary/10 py-16">
        <div className="container mx-auto px-4">
          <span className="text-sm font-medium text-muted-foreground">
            Unit {unit.number}: {unit.title}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-1">{skill.title}</h1>
          <p className="text-muted-foreground mt-2">{skill.description}</p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link to={`/hr-english/${unit.id}`}>
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" /> Back to {unit.title}
            </Button>
          </Link>
        </div>

        {renderContent()}

        {/* Skill Navigation */}
        <div className="flex justify-between items-center mt-12 pt-6 border-t border-border">
          {prev ? (
            <Button variant="outline" className="gap-2" onClick={() => handleNavigate(`/hr-english/${unit.id}/${prev.id}`)}>
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">{prev.title}</span>
              <span className="sm:hidden">Previous</span>
            </Button>
          ) : (
            <div />
          )}
          {next ? (
            <Button className="gap-2 bg-primary hover:bg-primary/90" onClick={() => handleNavigate(`/hr-english/${unit.id}/${next.id}`)}>
              <span className="hidden sm:inline">{next.title}</span>
              <span className="sm:hidden">Next</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          ) : (
            <Button className="gap-2 bg-primary hover:bg-primary/90" onClick={() => handleNavigate(`/hr-english/${unit.id}`)}>
              Back to Unit
              <ArrowRight className="h-4 w-4" />
            </Button>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HREnglishSkill;
