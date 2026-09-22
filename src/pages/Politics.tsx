import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, Landmark, Sparkles, BookOpen, Newspaper, Languages, MessagesSquare } from 'lucide-react';
import TechnicalRenderer from '@/components/technical/TechnicalRenderer';
import Flashcards from '@/components/presentations/Flashcards';
import RankingActivity from '@/components/presentations/RankingActivity';
import ManifestoBuilder from '@/components/topics/ManifestoBuilder';
import PoliticsWritingBox from '@/components/topics/PoliticsWritingBox';
import politicsHero from '@/assets/topics/politics-hero.jpg';
import {
  warmUp,
  policyPriorities,
  politicsFlashcards,
  vocabularyActivities,
  globalElectionReading,
  electionNightReading,
  newsBriefs,
  languageActivities,
  mediaLiteracyActivities,
  finalTasks,
  writingPrompt,
} from '@/data/politicsData';

const Politics = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title="Politics · B2 English Topic Lesson"
      description="A politically neutral B2 English lesson on political systems, elections, voting vocabulary, media literacy, second conditional policies, manifesto writing, roleplay and a balanced opinion essay."
    />
    <Navigation />
    <main className="container mx-auto px-4 py-6 sm:py-12 max-w-4xl">
      <Button asChild variant="ghost" size="sm" className="mb-4">
        <Link to="/members/activities?tab=topics">
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Topics
        </Link>
      </Button>

      <header className="mb-6 sm:mb-8">
        <p className="text-sm text-muted-foreground mb-1 flex items-center gap-2">
          <Landmark className="h-4 w-4 text-primary" /> Topics · B2
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold font-merriweather text-foreground">Politics — Power and Participation</h1>
        <p className="text-base sm:text-lg text-muted-foreground mt-2">
          Political systems and election vocabulary, global voting and misinformation, a guide to UK election night,
          second conditional policies, source checking, a manifesto builder, roleplay and balanced writing.
        </p>
        <img
          src={politicsHero}
          alt="A diverse group of adults voting at a neutral community polling station"
          width={1600}
          height={900}
          className="w-full h-auto rounded-lg border border-border shadow-sm mt-4"
        />
      </header>

      <Tabs defaultValue="warmup" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-6 h-auto">
          <TabsTrigger value="warmup" className="gap-1.5 py-2"><Sparkles className="h-4 w-4" /> Warm-up</TabsTrigger>
          <TabsTrigger value="vocab" className="gap-1.5 py-2"><BookOpen className="h-4 w-4" /> Vocabulary</TabsTrigger>
          <TabsTrigger value="reading" className="gap-1.5 py-2"><Newspaper className="h-4 w-4" /> Reading</TabsTrigger>
          <TabsTrigger value="language" className="gap-1.5 py-2"><Languages className="h-4 w-4" /> Language</TabsTrigger>
          <TabsTrigger value="tasks" className="gap-1.5 py-2"><MessagesSquare className="h-4 w-4" /> Tasks</TabsTrigger>
        </TabsList>

        <TabsContent value="warmup" className="space-y-4 sm:space-y-6">
          <TechnicalRenderer activities={warmUp} />
          <RankingActivity
            title="1d · Your policy priorities"
            description="Rank the issues from most urgent to least urgent. Compare your order with a partner and explain the first and last choices."
            items={policyPriorities}
            topLabel="most urgent"
            bottomLabel="least urgent"
          />
        </TabsContent>

        <TabsContent value="vocab" className="space-y-4 sm:space-y-6">
          <Flashcards
            title="2 · Politics and elections flashcards"
            description="Preview the key language. Click a card to reveal its meaning and example, then use Next or Shuffle to practise."
            cards={politicsFlashcards}
          />
          <TechnicalRenderer activities={vocabularyActivities} />
        </TabsContent>

        <TabsContent value="reading" className="space-y-4 sm:space-y-6">
          <TechnicalRenderer activities={globalElectionReading} />
          <TechnicalRenderer activities={electionNightReading} />
          <TechnicalRenderer activities={newsBriefs} />
        </TabsContent>

        <TabsContent value="language" className="space-y-4 sm:space-y-6">
          <TechnicalRenderer activities={languageActivities} />
          <TechnicalRenderer activities={mediaLiteracyActivities} />
        </TabsContent>

        <TabsContent value="tasks" className="space-y-4 sm:space-y-6">
          <TechnicalRenderer activities={finalTasks} />
          <ManifestoBuilder />
          <Card className="service-card p-0">
            <CardContent className="p-4 sm:p-6 space-y-4">
              <div>
                <h3 className="text-lg sm:text-2xl font-semibold mb-2 font-merriweather text-foreground">{writingPrompt.title}</h3>
                <p className="text-sm sm:text-base text-foreground">{writingPrompt.brief}</p>
              </div>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                {writingPrompt.checklist.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <PoliticsWritingBox storageKey="politics-compulsory-voting-essay" model={writingPrompt.model} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
    <Footer />
  </div>
);

export default Politics;