import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, Recycle, Sparkles, BookOpen, Newspaper, PenLine, MessagesSquare } from 'lucide-react';

import TechnicalRenderer from '@/components/technical/TechnicalRenderer';
import Flashcards from '@/components/presentations/Flashcards';
import RankingActivity from '@/components/presentations/RankingActivity';
import recyclingHero from '@/assets/topics/recycling-hero.jpg';
import {
  warmUp,
  rankingItems,
  recyclingFlashcards,
  vocabGapFill,
  bottlesReading,
  symbolReading,
  bikeReading,
  cloze,
  videoPreTeach,
  songActivities,
  finalTasks,
  writingPrompt,
} from '@/data/recyclingData';

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
        placeholder="Write your essay here… (140–190 words)"
        className="min-h-[180px] text-base leading-relaxed bg-background"
      />
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-xs text-muted-foreground">
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
          <p className="leading-relaxed">{model}</p>
        </div>
      )}
    </div>
  );
};

const Recycling = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Recycling · B2 English Topic Lesson"
        description="A B2 English lesson on recycling: waste and recycling vocabulary, a reading on Scotland's deposit return scheme, a Cambridge-style gapped text on the recycling symbol, a Use of English cloze, a TED talk on the circular economy, plus speaking and writing tasks."
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
            <Recycle className="h-4 w-4 text-primary" /> Topics · B2
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold font-merriweather text-foreground">
            Recycling — Rubbish or Resource?
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground mt-2">
            Waste and recycling vocabulary, Scotland's cash-for-bottles scheme, the story behind the
            recycling symbol, a bicycle made of cardboard, exam-style Use of English, and a TED talk
            arguing that recycling alone will never be enough.
          </p>
          <img
            src={recyclingHero}
            alt="Sorted recycling containers with paper, glass bottles and plastic waste ready for collection"
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
            <TabsTrigger value="use" className="gap-1.5 py-2">
              <PenLine className="h-4 w-4" /> Use of English
            </TabsTrigger>
            <TabsTrigger value="tasks" className="gap-1.5 py-2">
              <MessagesSquare className="h-4 w-4" /> Video & Tasks
            </TabsTrigger>
          </TabsList>

          {/* WARM-UP */}
          <TabsContent value="warmup" className="space-y-4 sm:space-y-6">
            <TechnicalRenderer activities={warmUp} />
            <RankingActivity
              title="1d · Easy or impossible?"
              description="Rank these items from the easiest to recycle at the top to the hardest at the bottom. Compare with a partner and justify your order."
              items={rankingItems}
              topLabel="Easiest to recycle"
              bottomLabel="Hardest to recycle"
            />
          </TabsContent>

          {/* VOCABULARY */}
          <TabsContent value="vocab" className="space-y-4 sm:space-y-6">
            <Flashcards
              title="2a · Recycling vocabulary flashcards"
              description="Preview the key words you will meet in the readings and the talk. Click a card to flip it, then use Next or Shuffle to keep practising."
              cards={recyclingFlashcards}
            />
            <TechnicalRenderer activities={vocabGapFill} />
          </TabsContent>

          {/* READING */}
          <TabsContent value="reading" className="space-y-4 sm:space-y-6">
            <TechnicalRenderer activities={bottlesReading} />
            <TechnicalRenderer activities={symbolReading} />
            <TechnicalRenderer activities={bikeReading} />
          </TabsContent>

          {/* USE OF ENGLISH */}
          <TabsContent value="use" className="space-y-4 sm:space-y-6">
            <TechnicalRenderer activities={cloze} />
          </TabsContent>

          {/* VIDEO & TASKS */}
          <TabsContent value="tasks" className="space-y-4 sm:space-y-6">
            <Card className="service-card p-0">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-2xl font-semibold mb-2 font-merriweather text-foreground">
                  5a · TED: We cannot recycle our way out of it (Melissa Seeley)
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Melissa Seeley argues that sorting our waste will never be enough, and that a
                  circular economy is the real answer. Watch the talk, then work through the tasks.
                </p>
                <div className="w-full aspect-video overflow-hidden rounded-lg border border-border shadow-sm">
                  <iframe
                    src="https://embed.ted.com/talks/melissa_seeley_we_cannot_recycle_our_way_out_of_it_the_circular_economy_is_the_answer"
                    title="TED — We cannot recycle our way out of it, Melissa Seeley"
                    className="w-full h-full"
                    allow="autoplay; fullscreen; encrypted-media"
                    allowFullScreen
                  />
                </div>
                <a
                  href="https://www.ted.com/talks/melissa_seeley_we_cannot_recycle_our_way_out_of_it_the_circular_economy_is_the_answer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-sm text-primary underline underline-offset-4"
                >
                  Open the talk on TED.com
                </a>
              </CardContent>
            </Card>
            <TechnicalRenderer activities={videoPreTeach} />
            <Card className="service-card p-0">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-2xl font-semibold mb-2 font-merriweather text-foreground">
                  6 · Song: Big Yellow Taxi (Joni Mitchell)
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Joni Mitchell wrote this classic in 1970 after seeing a parking lot where paradise
                  used to be. Watch the video, then work through the activities below.
                </p>
                <div className="w-full aspect-video overflow-hidden rounded-lg border border-border shadow-sm">
                  <iframe
                    src="https://www.youtube.com/embed/2595abcvh2M"
                    title="Joni Mitchell — Big Yellow Taxi (YouTube)"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <a
                  href="https://youtu.be/2595abcvh2M"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-sm text-primary underline underline-offset-4"
                >
                  Open the video on YouTube
                </a>
              </CardContent>
            </Card>
            <TechnicalRenderer activities={songActivities} />
            <TechnicalRenderer activities={finalTasks} />
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
                <WritingBox storageKey="recycling-writing-essay" model={writingPrompt.model} />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default Recycling;
