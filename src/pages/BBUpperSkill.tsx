import { Link, useParams, Navigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { bbUpperModules } from '@/data/businessBenchmarkUpperData';
import SEO from '@/components/SEO';
import GettingStartedUnit2 from '@/components/bb-upper/GettingStartedUnit2';
import GettingStartedUnit10 from '@/components/bb-upper/GettingStartedUnit10';
import VocabularyUnit10 from '@/components/bb-upper/VocabularyUnit10';
import ListeningUnit10 from '@/components/bb-upper/ListeningUnit10';
import ReadingUnit10 from '@/components/bb-upper/ReadingUnit10';
import SpeakingUnit10 from '@/components/bb-upper/SpeakingUnit10';
import Listening2Unit10 from '@/components/bb-upper/Listening2Unit10';
import TalkingPointUnit10 from '@/components/bb-upper/TalkingPointUnit10';
import GrammarWorkshopUnit10 from '@/components/bb-upper/GrammarWorkshopUnit10';
import GettingStartedUnit11 from '@/components/bb-upper/GettingStartedUnit11';
import ListeningUnit11 from '@/components/bb-upper/ListeningUnit11';
import ReadingUnit11 from '@/components/bb-upper/ReadingUnit11';
import ReadingProposalUnit11 from '@/components/bb-upper/ReadingProposalUnit11';
import WritingUnit11 from '@/components/bb-upper/WritingUnit11';
import TalkingPointUnit11 from '@/components/bb-upper/TalkingPointUnit11';
import WritingProposalUnit11 from '@/components/bb-upper/WritingProposalUnit11';
import GrammarWorkshopUnit11 from '@/components/bb-upper/GrammarWorkshopUnit11';
import VocabularyUnit11 from '@/components/bb-upper/VocabularyUnit11';
import SkillNavigation from '@/components/bb-upper/SkillNavigation';

const BBUpperSkill = () => {
  const { moduleId, skillId } = useParams();
  const mod = bbUpperModules.find((m) => m.id === moduleId);
  const skill = mod?.skills.find((s) => s.id === skillId);

  if (!mod || !skill) return <Navigate to="/bb-upper" replace />;

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${skill.title} — ${mod.title} | Business Benchmark Upper Intermediate`}
        description={skill.description}
      />
      <Navigation />

      <section className="bg-primary/10 py-16">
        <div className="container mx-auto px-4">
          <span className="text-sm font-medium text-muted-foreground">
            {mod.isGrammarWorkshop ? mod.title : `Unit ${mod.number}: ${mod.title}`}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-1">{skill.title}</h1>
          <p className="text-muted-foreground mt-2">{skill.description}</p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12 bg-gradient-to-b from-blue-50/60 via-blue-50/30 to-white dark:from-blue-950/20 dark:via-blue-950/10 dark:to-background rounded-b-2xl">
        <div className="mb-8">
          <Link to={`/bb-upper/${mod.id}`}>
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" /> Back to {mod.title}
            </Button>
          </Link>
        </div>

        {moduleId === 'job-descriptions' && skillId === 'getting-started' ? (
          <GettingStartedUnit2 />
        ) : moduleId === 'financing-the-start-up' && skillId === 'getting-started' ? (
          <GettingStartedUnit10 />
        ) : moduleId === 'financing-the-start-up' && skillId === 'vocabulary' ? (
          <VocabularyUnit10 />
        ) : moduleId === 'financing-the-start-up' && skillId === 'listening-1' ? (
          <ListeningUnit10 />
        ) : moduleId === 'financing-the-start-up' && skillId === 'reading' ? (
          <ReadingUnit10 />
        ) : moduleId === 'financing-the-start-up' && skillId === 'speaking' ? (
          <SpeakingUnit10 />
        ) : moduleId === 'financing-the-start-up' && skillId === 'listening-2' ? (
          <Listening2Unit10 />
        ) : moduleId === 'financing-the-start-up' && skillId === 'talking-point' ? (
          <TalkingPointUnit10 />
        ) : moduleId === 'financing-the-start-up' && skillId === 'grammar-workshop' ? (
          <GrammarWorkshopUnit10 />
        ) : moduleId === 'starting-up-in-a-new-location' && skillId === 'getting-started' ? (
          <GettingStartedUnit11 />
        ) : moduleId === 'starting-up-in-a-new-location' && skillId === 'listening' ? (
          <ListeningUnit11 />
        ) : moduleId === 'starting-up-in-a-new-location' && skillId === 'reading' ? (
          <ReadingUnit11 />
        ) : moduleId === 'starting-up-in-a-new-location' && skillId === 'reading-proposal' ? (
          <ReadingProposalUnit11 />
        ) : moduleId === 'starting-up-in-a-new-location' && skillId === 'writing' ? (
          <WritingUnit11 />
        ) : moduleId === 'starting-up-in-a-new-location' && skillId === 'grammar-workshop' ? (
          <GrammarWorkshopUnit11 />
        ) : moduleId === 'starting-up-in-a-new-location' && skillId === 'talking-point' ? (
          <TalkingPointUnit11 />
        ) : moduleId === 'starting-up-in-a-new-location' && skillId === 'writing-proposal' ? (
          <WritingProposalUnit11 />
        ) : moduleId === 'starting-up-in-a-new-location' && skillId === 'vocabulary' ? (
          <VocabularyUnit11 />
        ) : (
          <div className="bg-muted/50 rounded-xl p-12 text-center">
            <p className="text-lg text-muted-foreground">
              Content for this section is being prepared. Check back soon!
            </p>
          </div>
        )}

        <SkillNavigation
          moduleId={mod.id}
          skills={mod.skills}
          currentSkillId={skill.id}
        />
      </main>

      <Footer />
    </div>
  );
};

export default BBUpperSkill;
