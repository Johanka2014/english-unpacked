import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, Music, Sparkles, BookOpen, Newspaper, Briefcase, MessagesSquare } from 'lucide-react';

import TechnicalRenderer from '@/components/technical/TechnicalRenderer';
import Flashcards from '@/components/presentations/Flashcards';
import RankingActivity from '@/components/presentations/RankingActivity';
import dollyHeroAsset from '@/assets/topics/dolly-hero.jpg.asset.json';
import {
  warmUp,
  rankingItems,
  businessFlashcards,
  vocabularyActivities,
  empireReading,
  nineToFiveReading,
  businessAnalysis,
  speakingTasks,
  writingPrompt,
} from '@/data/dollyPartonData';

const WritingBox = ({ storageKey, model }: { storageKey: string; model: string }) => {
  const [text, setText] = useState(() => localStorage.getItem(storageKey) || '');
  const [showModel, setShowModel] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => localStorage.setItem(storageKey, text), 400);
    return () => clearTimeout(t);
  }, [text, storageKey]);

  const words = text.trim() ? text.trim().split(/\s+/).length : 0;

  return (
    <div className="space-y-3">
      <Textarea
        rows={8}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your article here… (140–190 words)"
        className="min-h-[180px] text-base leading-relaxed bg-background"
        aria-label="Write your article"
      />
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-xs text-muted-foreground" aria-live="polite">
          {words} word{words === 1 ? '' : 's'} · saved automatically
        </span>
        <div className="flex gap-2 ml-auto">
          <Button variant="outline" size="sm" onClick={() => setShowModel((s) => !s)}>
            {showModel ? 'Hide model answer' : 'Show model answer'}
          </Button>
          <Button variant="ghost" size="sm" onClick={() => setText('')}>
            Clear
          </Button>
        </div>
      </div>
      {showModel && (
        <div className="rounded-md border border-primary/30 bg-primary/5 p-4 text-sm text-foreground">
          <p className="font-semibold text-primary mb-1">Model answer</p>
          <p className="leading-relaxed whitespace-pre-line">{model}</p>
        </div>
      )}
    </div>
  );
};

const DollyParton = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Dolly Parton · B2 Business English Topic Lesson"
        description="A B2 English lesson on Dolly Parton's business empire: business vocabulary flashcards, a word-order activity, newspaper readings on Dollywood and the 9 to 5 film, a sell-or-keep case study, a licensing roleplay and a writing task."
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
            <Music className="h-4 w-4 text-primary" /> Topics · B2 · Business
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold font-merriweather text-foreground">
            Dolly Parton: Building an Empire
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground mt-2">
            How a country singer turned her fame into a business worth an estimated $450 million —
            theme parks, song catalogues, film production, beauty and pet apparel — plus the business
            vocabulary to talk about it.
          </p>
          <img
            src={dollyHeroAsset.url}
            alt="Dolly Parton performing on stage with her arms open, wearing a sparkling white outfit"
            width={1600}
            height={900}
            className="w-full h-auto rounded-lg border border-border shadow-sm mt-4"
          />
        </header>

        <Tabs defaultValue="warmup" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-6 h-auto">
            <TabsTrigger value="warmup" className="gap-1.5 py-2">
              <Sparkles className="h-4 w-4" /> Warm-up
            </TabsTrigger>
            <TabsTrigger value="vocab" className="gap-1.5 py-2">
              <BookOpen className="h-4 w-4" /> Vocabulary
            </TabsTrigger>
            <TabsTrigger value="reading" className="gap-1.5 py-2">
              <Newspaper className="h-4 w-4" /> Reading
            </TabsTrigger>
            <TabsTrigger value="business" className="gap-1.5 py-2">
              <Briefcase className="h-4 w-4" /> Business
            </TabsTrigger>
            <TabsTrigger value="tasks" className="gap-1.5 py-2">
              <MessagesSquare className="h-4 w-4" /> Tasks
            </TabsTrigger>
          </TabsList>

          {/* WARM-UP */}
          <TabsContent value="warmup" className="space-y-4 sm:space-y-6">
            <TechnicalRenderer activities={warmUp} />
            <RankingActivity
              title="1c · Rank the ventures"
              description="Here are five of Dolly Parton's business ventures. Rank them by how much you think each one is worth today — most valuable at the top. Then check your predictions against the figures in the Reading tab."
              items={rankingItems}
              topLabel="most valuable"
              bottomLabel="least valuable"
            />
          </TabsContent>

          {/* VOCABULARY */}
          <TabsContent value="vocab" className="space-y-4 sm:space-y-6">
            <Flashcards
              title="2 · Business vocabulary flashcards"
              description="The language of celebrity business: ownership, licensing, royalties and revenue. Click a card to flip it, then use Next or Shuffle to keep practising."
              cards={businessFlashcards}
            />
            <TechnicalRenderer activities={vocabularyActivities} />
          </TabsContent>

          {/* READING */}
          <TabsContent value="reading" className="space-y-4 sm:space-y-6">
            <TechnicalRenderer activities={empireReading} />
            <TechnicalRenderer activities={nineToFiveReading} />
          </TabsContent>

          {/* BUSINESS ANALYSIS */}
          <TabsContent value="business" className="space-y-4 sm:space-y-6">
            <TechnicalRenderer activities={businessAnalysis} />
          </TabsContent>

          {/* TASKS */}
          <TabsContent value="tasks" className="space-y-4 sm:space-y-6">
            <TechnicalRenderer activities={speakingTasks} />
            <Card className="service-card p-0">
              <CardContent className="p-4 sm:p-6 space-y-4">
                <div>
                  <h3 className="text-lg sm:text-2xl font-semibold mb-2 font-merriweather text-foreground">
                    {writingPrompt.title}
                  </h3>
                  <p className="text-foreground text-sm sm:text-base">{writingPrompt.brief}</p>
                </div>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  {writingPrompt.checklist.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
                <WritingBox storageKey="dolly-parton-writing-article" model={writingPrompt.model} />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default DollyParton;
