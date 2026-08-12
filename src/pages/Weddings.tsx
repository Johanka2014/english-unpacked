import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, Heart, Sparkles, BookOpen, Newspaper, Video, MessagesSquare } from 'lucide-react';

import TechnicalRenderer from '@/components/technical/TechnicalRenderer';
import Flashcards from '@/components/presentations/Flashcards';
import weddingsHero from '@/assets/topics/weddings-hero.jpg';
import {
  warmUp,
  weddingFlashcards,
  proposalGapFill,
  weddingPeopleMatching,
  culturesReading,
  traditionsActivities,
  noticeReading,
  videoPreTeach,
  videoActivities,
  finalTasks,
  writingPrompt,
} from '@/data/weddingsData';

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

const Weddings = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Weddings · B2 English Topic Lesson"
        description="A B2 English lesson on weddings: wedding vocabulary and flashcards, readings on wedding customs around the world and giving notice of marriage in the UK, a TED-Ed talk on the history of marriage, plus speaking and writing tasks."
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
            <Heart className="h-4 w-4 text-primary" /> Topics · B2
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold font-merriweather text-foreground">Weddings</h1>
          <p className="text-base sm:text-lg text-muted-foreground mt-2">
            Wedding vocabulary from the proposal to the honeymoon, customs from six cultures, strange
            traditions around the world, the legal side of getting married in the UK, and a TED-Ed talk
            on the history of marriage.
          </p>
          <img
            src={weddingsHero}
            alt="A bridal bouquet of white and blush roses beside two gold wedding rings on a lace cloth"
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
            <TabsTrigger value="video" className="gap-1.5 py-2">
              <Video className="h-4 w-4" /> Video
            </TabsTrigger>
            <TabsTrigger value="tasks" className="gap-1.5 py-2">
              <MessagesSquare className="h-4 w-4" /> Tasks
            </TabsTrigger>
          </TabsList>

          {/* WARM-UP */}
          <TabsContent value="warmup" className="space-y-4 sm:space-y-6">
            <TechnicalRenderer activities={warmUp} />
          </TabsContent>

          {/* VOCABULARY */}
          <TabsContent value="vocab" className="space-y-4 sm:space-y-6">
            <Flashcards
              title="2 · Wedding vocabulary flashcards"
              description="Preview the key words you will meet in the readings and the video. Click a card to flip it, then use Next or Shuffle to keep practising."
              cards={weddingFlashcards}
            />
            <TechnicalRenderer activities={proposalGapFill} />
            <TechnicalRenderer activities={weddingPeopleMatching} />
            <Card className="service-card p-0">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-2xl font-semibold mb-2 font-merriweather text-foreground">
                  2h · Interactive activity: wedding words
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Work through this LearningApps activity to review the vocabulary before you move on
                  to the readings.
                </p>
                <div className="w-full overflow-hidden rounded-lg border border-border shadow-sm">
                  <iframe
                    src="https://learningapps.org/watch?app=3032009"
                    title="Wedding vocabulary — LearningApps"
                    className="w-full h-[420px] sm:h-[620px]"
                    allowFullScreen
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* READING */}
          <TabsContent value="reading" className="space-y-4 sm:space-y-6">
            <TechnicalRenderer activities={culturesReading} />
            <TechnicalRenderer activities={traditionsActivities} />
            <TechnicalRenderer activities={noticeReading} />
          </TabsContent>

          {/* VIDEO */}
          <TabsContent value="video" className="space-y-4 sm:space-y-6">
            <Card className="service-card p-0">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-2xl font-semibold mb-2 font-merriweather text-foreground">
                  6 · TED-Ed: The history of marriage (Alex Gendler)
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Marriage has existed for thousands of years, but it has not always meant the same
                  thing. Watch the animated talk, then answer the questions below.
                </p>
                <div className="w-full aspect-video overflow-hidden rounded-lg border border-border shadow-sm">
                  <iframe
                    src="https://embed.ted.com/talks/alex_gendler_the_history_of_marriage"
                    title="TED-Ed — The history of marriage, Alex Gendler"
                    className="w-full h-full"
                    allow="autoplay; fullscreen; encrypted-media"
                    allowFullScreen
                  />
                </div>
                <a
                  href="https://www.ted.com/talks/alex_gendler_the_history_of_marriage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-sm text-primary underline underline-offset-4"
                >
                  Open the talk on TED.com
                </a>
              </CardContent>
            </Card>
            <TechnicalRenderer activities={videoPreTeach} />
            <TechnicalRenderer activities={videoActivities} />
          </TabsContent>

          {/* TASKS */}
          <TabsContent value="tasks" className="space-y-4 sm:space-y-6">
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
                <WritingBox storageKey="weddings-writing-article" model={writingPrompt.model} />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default Weddings;
