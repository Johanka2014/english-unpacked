import { Link, useParams, Navigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { bbUpperModules } from '@/data/businessBenchmarkUpperData';
import SEO from '@/components/SEO';
import GettingStartedUnit1 from '@/components/bb-upper/GettingStartedUnit1';
import VocabularyUnit1 from '@/components/bb-upper/VocabularyUnit1';
import GrammarUnit1 from '@/components/bb-upper/GrammarUnit1';
import GettingStartedUnit2 from '@/components/bb-upper/GettingStartedUnit2';
import ListeningUnit2 from '@/components/bb-upper/ListeningUnit2';
import GettingStartedUnit10 from '@/components/bb-upper/GettingStartedUnit10';
import VocabularyUnit10 from '@/components/bb-upper/VocabularyUnit10';
import ListeningUnit10 from '@/components/bb-upper/ListeningUnit10';
import ReadingUnit10 from '@/components/bb-upper/ReadingUnit10';
import SpeakingUnit10 from '@/components/bb-upper/SpeakingUnit10';
import Listening2Unit10 from '@/components/bb-upper/Listening2Unit10';
import TalkingPointUnit10 from '@/components/bb-upper/TalkingPointUnit10';
import GrammarWorkshopUnit10 from '@/components/bb-upper/GrammarWorkshopUnit10';
import GettingStartedUnit11 from '@/components/bb-upper/GettingStartedUnit11';
import GettingStartedUnit12 from '@/components/bb-upper/GettingStartedUnit12';
import VocabularyUnit12 from '@/components/bb-upper/VocabularyUnit12';
import ListeningUnit12 from '@/components/bb-upper/ListeningUnit12';
import ReadingUnit12 from '@/components/bb-upper/ReadingUnit12';
import SpeakingUnit12 from '@/components/bb-upper/SpeakingUnit12';
import GrammarUnit12 from '@/components/bb-upper/GrammarUnit12';
import ListeningUnit11 from '@/components/bb-upper/ListeningUnit11';
import ReadingUnit11 from '@/components/bb-upper/ReadingUnit11';
import ReadingProposalUnit11 from '@/components/bb-upper/ReadingProposalUnit11';
import WritingUnit11 from '@/components/bb-upper/WritingUnit11';
import TalkingPointUnit11 from '@/components/bb-upper/TalkingPointUnit11';
import WritingProposalUnit11 from '@/components/bb-upper/WritingProposalUnit11';
import GrammarWorkshopUnit11 from '@/components/bb-upper/GrammarWorkshopUnit11';
import VocabularyUnit11 from '@/components/bb-upper/VocabularyUnit11';
import ReadingUnit2 from '@/components/bb-upper/ReadingUnit2';
import Listening2Unit2 from '@/components/bb-upper/Listening2Unit2';
import VocabularyUnit2 from '@/components/bb-upper/VocabularyUnit2';
import SkillNavigation from '@/components/bb-upper/SkillNavigation';
import GettingStartedUnit3 from '@/components/bb-upper/GettingStartedUnit3';
import ReadingUnit3 from '@/components/bb-upper/ReadingUnit3';
import ListeningUnit3 from '@/components/bb-upper/ListeningUnit3';
import WritingLetterUnit3 from '@/components/bb-upper/WritingLetterUnit3';
import WritingEmailUnit3 from '@/components/bb-upper/WritingEmailUnit3';
import SpeakingUnit3 from '@/components/bb-upper/SpeakingUnit3';
import VocabularyUnit3 from '@/components/bb-upper/VocabularyUnit3';
import GettingStartedUnit8 from '@/components/bb-upper/GettingStartedUnit8';
import ListeningUnit8 from '@/components/bb-upper/ListeningUnit8';
import ReadingUnit8 from '@/components/bb-upper/ReadingUnit8';
import VocabularyUnit8 from '@/components/bb-upper/VocabularyUnit8';
import Listening2Unit8 from '@/components/bb-upper/Listening2Unit8';
import GrammarUnit8 from '@/components/bb-upper/GrammarUnit8';
import WritingUnit8 from '@/components/bb-upper/WritingUnit8';
import SpeakingUnit8 from '@/components/bb-upper/SpeakingUnit8';
import GettingStartedUnit4 from '@/components/bb-upper/GettingStartedUnit4';
import ListeningUnit4 from '@/components/bb-upper/ListeningUnit4';
import Listening2Unit4 from '@/components/bb-upper/Listening2Unit4';
import ReadingUnit4 from '@/components/bb-upper/ReadingUnit4';
import Reading2Unit4 from '@/components/bb-upper/Reading2Unit4';
import SpeakingUnit4 from '@/components/bb-upper/SpeakingUnit4';
import WorkbookUnit4 from '@/components/bb-upper/WorkbookUnit4';
import GettingStartedUnit13 from '@/components/bb-upper/GettingStartedUnit13';
import WritingUnit13 from '@/components/bb-upper/WritingUnit13';
import ReadingUnit13 from '@/components/bb-upper/ReadingUnit13';
import VocabularyUnit13 from '@/components/bb-upper/VocabularyUnit13';
import TalkingPoint1Unit13 from '@/components/bb-upper/TalkingPoint1Unit13';
import ListeningUnit13 from '@/components/bb-upper/ListeningUnit13';
import Reading2Unit13 from '@/components/bb-upper/Reading2Unit13';
import TalkingPoint2Unit13 from '@/components/bb-upper/TalkingPoint2Unit13';
import WorkbookUnit13 from '@/components/bb-upper/WorkbookUnit13';
import GrammarUnit13 from '@/components/bb-upper/GrammarUnit13';
import GettingStartedUnit5 from '@/components/bb-upper/GettingStartedUnit5';
import ReadingUnit5 from '@/components/bb-upper/ReadingUnit5';
import VocabularyUnit5 from '@/components/bb-upper/VocabularyUnit5';
import SpeakingUnit5 from '@/components/bb-upper/SpeakingUnit5';
import ListeningUnit5 from '@/components/bb-upper/ListeningUnit5';
import Reading2Unit5 from '@/components/bb-upper/Reading2Unit5';
import TalkingPointUnit5 from '@/components/bb-upper/TalkingPointUnit5';
import WorkbookUnit5 from '@/components/bb-upper/WorkbookUnit5';

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

        {moduleId === 'staff-development-and-training' && skillId === 'getting-started' ? (
          <GettingStartedUnit1 />
        ) : moduleId === 'staff-development-and-training' && skillId === 'vocabulary' ? (
          <VocabularyUnit1 />
        ) : moduleId === 'staff-development-and-training' && skillId === 'grammar' ? (
          <GrammarUnit1 />
        ) : moduleId === 'job-descriptions' && skillId === 'getting-started' ? (
          <GettingStartedUnit2 />
        ) : moduleId === 'job-descriptions' && skillId === 'reading' ? (
          <ReadingUnit2 />
        ) : moduleId === 'job-descriptions' && skillId === 'listening' ? (
          <ListeningUnit2 />
        ) : moduleId === 'job-descriptions' && skillId === 'listening-2' ? (
          <Listening2Unit2 />
        ) : moduleId === 'job-descriptions' && skillId === 'vocabulary' ? (
          <VocabularyUnit2 />
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
        ) : moduleId === 'presenting-your-business-idea' && skillId === 'getting-started' ? (
          <GettingStartedUnit12 />
        ) : moduleId === 'presenting-your-business-idea' && skillId === 'vocabulary' ? (
          <VocabularyUnit12 />
        ) : moduleId === 'presenting-your-business-idea' && skillId === 'listening' ? (
          <ListeningUnit12 />
        ) : moduleId === 'presenting-your-business-idea' && skillId === 'reading' ? (
          <ReadingUnit12 />
        ) : moduleId === 'presenting-your-business-idea' && skillId === 'speaking' ? (
          <SpeakingUnit12 />
        ) : moduleId === 'presenting-your-business-idea' && skillId === 'grammar' ? (
          <GrammarUnit12 />
        ) : moduleId === 'letters-of-enquiry-and-applications' && skillId === 'getting-started' ? (
          <GettingStartedUnit3 />
        ) : moduleId === 'letters-of-enquiry-and-applications' && skillId === 'reading' ? (
          <ReadingUnit3 />
        ) : moduleId === 'letters-of-enquiry-and-applications' && skillId === 'listening' ? (
          <ListeningUnit3 />
        ) : moduleId === 'letters-of-enquiry-and-applications' && skillId === 'writing-letter' ? (
          <WritingLetterUnit3 />
        ) : moduleId === 'letters-of-enquiry-and-applications' && skillId === 'writing-email' ? (
          <WritingEmailUnit3 />
        ) : moduleId === 'letters-of-enquiry-and-applications' && skillId === 'speaking' ? (
          <SpeakingUnit3 />
        ) : moduleId === 'letters-of-enquiry-and-applications' && skillId === 'vocabulary' ? (
          <VocabularyUnit3 />
        ) : moduleId === 'establishing-relationships-and-negotiating' && skillId === 'getting-started' ? (
          <GettingStartedUnit8 />
        ) : moduleId === 'establishing-relationships-and-negotiating' && skillId === 'listening-1' ? (
          <ListeningUnit8 />
        ) : moduleId === 'establishing-relationships-and-negotiating' && skillId === 'reading' ? (
          <ReadingUnit8 />
        ) : moduleId === 'establishing-relationships-and-negotiating' && skillId === 'vocabulary' ? (
          <VocabularyUnit8 />
        ) : moduleId === 'establishing-relationships-and-negotiating' && skillId === 'listening-2' ? (
          <Listening2Unit8 />
        ) : moduleId === 'establishing-relationships-and-negotiating' && skillId === 'grammar' ? (
          <GrammarUnit8 />
        ) : moduleId === 'establishing-relationships-and-negotiating' && skillId === 'writing' ? (
          <WritingUnit8 />
        ) : moduleId === 'establishing-relationships-and-negotiating' && skillId === 'speaking' ? (
          <SpeakingUnit8 />
        ) : moduleId === 'telephone-skills' && skillId === 'getting-started' ? (
          <GettingStartedUnit4 />
        ) : moduleId === 'telephone-skills' && skillId === 'listening-1' ? (
          <ListeningUnit4 />
        ) : moduleId === 'telephone-skills' && skillId === 'listening-2' ? (
          <Listening2Unit4 />
        ) : moduleId === 'telephone-skills' && skillId === 'reading-1' ? (
          <ReadingUnit4 />
        ) : moduleId === 'telephone-skills' && skillId === 'reading-2' ? (
          <Reading2Unit4 />
        ) : moduleId === 'telephone-skills' && skillId === 'speaking' ? (
          <SpeakingUnit4 />
        ) : moduleId === 'telephone-skills' && skillId === 'workbook' ? (
          <WorkbookUnit4 />
        ) : moduleId === 'business-hotels-and-sales' && skillId === 'getting-started' ? (
          <GettingStartedUnit13 />
        ) : moduleId === 'business-hotels-and-sales' && skillId === 'writing' ? (
          <WritingUnit13 />
        ) : moduleId === 'business-hotels-and-sales' && skillId === 'reading' ? (
          <ReadingUnit13 />
        ) : moduleId === 'business-hotels-and-sales' && skillId === 'vocabulary' ? (
          <VocabularyUnit13 />
        ) : moduleId === 'business-hotels-and-sales' && skillId === 'talking-point-1' ? (
          <TalkingPoint1Unit13 />
        ) : moduleId === 'business-hotels-and-sales' && skillId === 'listening' ? (
          <ListeningUnit13 />
        ) : moduleId === 'business-hotels-and-sales' && skillId === 'reading-2' ? (
          <Reading2Unit13 />
        ) : moduleId === 'business-hotels-and-sales' && skillId === 'talking-point-2' ? (
          <TalkingPoint2Unit13 />
        ) : moduleId === 'business-hotels-and-sales' && skillId === 'grammar' ? (
          <GrammarUnit13 />
        ) : moduleId === 'business-hotels-and-sales' && skillId === 'workbook' ? (
          <WorkbookUnit13 />
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
