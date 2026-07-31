import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ArrowLeft, BookOpen, Headphones, GraduationCap, Sparkles, HelpCircle, Moon, FileText, Download, ChevronDown } from "lucide-react";
import MatchingExercise from "@/components/presentations/MatchingExercise";
import MultipleChoiceQuiz from "@/components/presentations/MultipleChoiceQuiz";
import TypeBlanks from "@/components/technical/TypeBlanks";
import TechnicalRenderer from "@/components/technical/TechnicalRenderer";
import Flashcards from "@/components/presentations/Flashcards";
import {
  readingPassage,
  readingComprehension,
  readingVocabMatch,
  sleepVocabBlanks,
  similes,
  usedToMcq,
  usedToTransform,
  finalQuiz,
  videoComprehension,
} from "@/data/sleepLessonData";
import {
  sleepFlashcards,
  globalWarmUp,
  globalVocabActivities,
  dreamySleepReading,
  gambleBeforeWatching,
  gambleActivities,
  huffingtonActivities,
  gartenbergActivities,
  nefReviewActivities,
  advancedStretch,
  wrapUpTasks,
} from "@/data/sleepLessonExtras";

import audio510 from "@/assets/sleep-5-10.mp3.asset.json";
import audio511 from "@/assets/sleep-5-11.mp3.asset.json";
import audio512 from "@/assets/sleep-5-12.mp3.asset.json";

const videoTranscript: string[] = [
  "In 1965, 17-year-old high school student Randy Gardner stayed awake for 264 hours. That's 11 days, to see how he'd cope without sleep. On the second day, his eyes stopped focusing. Next, he lost the ability to identify objects by touch. By day three, Gardner was moody and uncoordinated. At the end of the experiment, he was struggling to concentrate, had trouble with short-term memory, became paranoid, and started hallucinating.",
  "Although Gardner recovered without long-term psychological or physical damage, for others, losing shuteye can result in hormonal imbalance, illness, and, in extreme cases, death. We're only beginning to understand why we sleep to begin with, but we do know it's essential. Adults need seven to eight hours of sleep a night, and adolescents need about ten.",
  "We grow sleepy due to signals from our body telling our brain we are tired, and signals from the environment telling us it's dark outside. The rise in sleep-inducing chemicals, like adenosine and melatonin, send us into a light doze that grows deeper, making our breathing and heart rate slow down and our muscles relax. This non-REM sleep is when DNA is repaired and our bodies replenish themselves for the day ahead.",
  "In the United States, it's estimated that 30% of adults and 66% of adolescents are regularly sleep-deprived. This isn't just a minor inconvenience. Staying awake can cause serious bodily harm. When we lose sleep, learning, memory, mood, and reaction time are affected. Sleeplessness may also cause inflammation, hallucinations, high blood pressure, and it's even been linked to diabetes and obesity.",
  "In 2014, a devoted soccer fan died after staying awake for 48 hours to watch the World Cup. While his untimely death was due to a stroke, studies show that chronically sleeping fewer than six hours a night increases stroke risk by four and a half times compared to those getting a consistent seven to eight hours of shuteye.",
  "For a handful of people on the planet who carry a rare inherited genetic mutation, sleeplessness is a daily reality. This condition, known as Fatal Familial Insomnia, places the body in a nightmarish state of wakefulness, forbidding it from entering the sanctuary of sleep. Within months or years, this progressively worsening condition leads to dementia and death.",
  "How can sleep deprivation cause such immense suffering? Scientists think the answer lies with the accumulation of waste products in the brain. During our waking hours, our cells are busy using up our day's energy sources, which get broken down into various byproducts, including adenosine. As adenosine builds up, it increases the urge to sleep, also known as sleep pressure. In fact, caffeine works by blocking adenosine's receptor pathways.",
  "Other waste products also build up in the brain, and if they're not cleared away, they collectively overload the brain and are thought to lead to the many negative symptoms of sleep deprivation. So what's happening in our brain when we sleep to prevent this? Scientists found something called the glymphatic system, a clean-up mechanism that removes this buildup and is much more active when we're asleep. It works by using cerebrospinal fluid to flush away toxic byproducts that accumulate between cells.",
  "Lymphatic vessels, which serve as pathways for immune cells, have recently been discovered in the brain, and they may also play a role in clearing out the brain's daily waste products. While scientists continue exploring the restorative mechanisms behind sleep, we can be sure that slipping into slumber is a necessity if we want to maintain our health and our sanity.",
];

const SleepLesson = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Sleep — B2 English Lesson on 'Used To' | English Unpacked"
        description="Upper-intermediate English lesson on sleep: reading, vocabulary, listening, 'used to / be used to / get used to' grammar and a mixed quiz."
      />
      <Navigation />
      <main className="container mx-auto px-4 py-6 sm:py-12">
        <div className="max-w-5xl mx-auto">
          <div className="mb-4">
            <Link to="/members/activities?tab=topics">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <ArrowLeft className="h-4 w-4 mr-1" /> Back to Practice Activities
              </Button>
            </Link>
          </div>

          <div className="mb-8 text-center">
            <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-indigo-50 text-indigo-600 mb-4">
              <Moon className="h-8 w-8" />
            </div>
            <Badge className="mb-3" variant="secondary">Topics · B2</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3 font-merriweather">
              Sleep Matters
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              An upper-intermediate lesson exploring sleep science, vocabulary and the grammar of
              past habits — <em>used to</em>, <em>be used to</em> and <em>get used to</em>.
            </p>
          </div>

          <Tabs defaultValue="reading" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-6 h-auto">
              <TabsTrigger value="reading" className="gap-1.5 py-2">
                <BookOpen className="h-4 w-4" /> Reading
              </TabsTrigger>
              <TabsTrigger value="vocab" className="gap-1.5 py-2">
                <Sparkles className="h-4 w-4" /> Vocabulary
              </TabsTrigger>
              <TabsTrigger value="grammar" className="gap-1.5 py-2">
                <GraduationCap className="h-4 w-4" /> Grammar
              </TabsTrigger>
              <TabsTrigger value="listening" className="gap-1.5 py-2">
                <Headphones className="h-4 w-4" /> Listening
              </TabsTrigger>
              <TabsTrigger value="quiz" className="gap-1.5 py-2">
                <HelpCircle className="h-4 w-4" /> Quiz
              </TabsTrigger>
            </TabsList>

            {/* READING */}
            <TabsContent value="reading" className="space-y-4 sm:space-y-6">
              <Card className="service-card p-0">
                <CardContent className="p-4 sm:p-6">
                  <h2 className="text-2xl font-semibold mb-3 font-merriweather text-foreground">
                    Warm-up: Can you guess?
                  </h2>
                  <p className="text-muted-foreground italic">
                    "Some animals die without this, but others can survive for three months without
                    it. Humans spend a third of their lives doing it, but no one is really sure why
                    we do it."
                  </p>
                  <details className="mt-3">
                    <summary className="cursor-pointer text-sm text-primary font-medium">Reveal answer</summary>
                    <p className="mt-2 text-foreground">
                      <strong>Sleep.</strong> Rats die within three weeks without sleep; emperor
                      penguins can survive up to three months without sleeping.
                    </p>
                  </details>
                </CardContent>
              </Card>

              <Card className="service-card p-0">
                <CardContent className="p-4 sm:p-6">
                  <h2 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">
                    Reading: Sleep Matters
                  </h2>
                  <div className="space-y-4 text-foreground leading-relaxed">
                    {readingPassage.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <MatchingExercise
                title="Vocabulary in context"
                description="Match the word from the text to its meaning."
                pairs={readingVocabMatch}
                leftLabel="Word"
                rightLabel="Meaning"
              />

              <MultipleChoiceQuiz
                title="Reading comprehension"
                description="Choose the best answer based on the text."
                questions={readingComprehension}
              />

              <TechnicalRenderer activities={dreamySleepReading} />
              <TechnicalRenderer activities={nefReviewActivities.slice(0, 2)} />
            </TabsContent>


            {/* VOCABULARY */}
            <TabsContent value="vocab" className="space-y-4 sm:space-y-6">
              <TechnicalRenderer activities={globalWarmUp} />

              <Flashcards
                title="2 · Sleep vocabulary flashcards"
                description="Preview the key words and expressions you will meet in the readings and the TED talks. Click a card to flip it, then use Next or Shuffle to keep practising."
                cards={sleepFlashcards}
              />

              <Card className="service-card p-0">
                <CardContent className="p-4 sm:p-6">
                  <h2 className="text-lg sm:text-2xl font-semibold mb-2 font-merriweather text-foreground">
                    3 · Sleep vocabulary race
                  </h2>
                  <p className="text-muted-foreground text-sm">
                    Complete each sentence with the correct sleep-related word. The first letter is
                    given.
                  </p>
                </CardContent>
              </Card>

              <TypeBlanks title="Sleep race" blanks={sleepVocabBlanks} />

              <TechnicalRenderer activities={globalVocabActivities} />

              <MatchingExercise
                title="Similes with sleep and the body"
                description="Similes are fixed comparisons using 'as…as' or 'like'. Match the start of each simile to the correct noun."
                pairs={similes}
                leftLabel="Simile"
                rightLabel="Noun"
              />
            </TabsContent>


            {/* GRAMMAR */}
            <TabsContent value="grammar" className="space-y-4 sm:space-y-6">
              <Card className="service-card p-0">
                <CardContent className="p-4 sm:p-6 space-y-5">
                  <h2 className="text-2xl font-semibold font-merriweather text-foreground">
                    Grammar: <em>used to</em> / <em>be used to</em> / <em>get used to</em>
                  </h2>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="p-4 rounded-lg border border-border bg-blue-50/40 dark:bg-blue-950/20">
                      <h3 className="font-semibold text-brand-royal mb-2">used to + infinitive</h3>
                      <p className="text-sm text-muted-foreground mb-2">A past habit or state that is no longer true.</p>
                      <p className="text-sm text-foreground">
                        "I <strong>used to</strong> stay up until 2am, but now I go to bed at 10."
                      </p>
                    </div>
                    <div className="p-4 rounded-lg border border-border bg-emerald-50/40 dark:bg-emerald-950/20">
                      <h3 className="font-semibold text-emerald-700 mb-2">be used to + -ing / noun</h3>
                      <p className="text-sm text-muted-foreground mb-2">Accustomed to something — it feels normal now.</p>
                      <p className="text-sm text-foreground">
                        "I'm a nurse. I<strong> 'm used to </strong> working night shifts."
                      </p>
                    </div>
                    <div className="p-4 rounded-lg border border-border bg-amber-50/40 dark:bg-amber-950/20">
                      <h3 className="font-semibold text-amber-700 mb-2">get used to + -ing / noun</h3>
                      <p className="text-sm text-muted-foreground mb-2">The process of becoming accustomed.</p>
                      <p className="text-sm text-foreground">
                        "It took a month to <strong>get used to</strong> the time difference."
                      </p>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg border border-border bg-muted/50">
                    <p className="text-sm text-foreground">
                      <strong>Watch out!</strong> In questions and negatives with <em>used to</em>,
                      we drop the "d": <em>Did you <u>use to</u> have nightmares?</em> · <em>I didn't <u>use to</u> like coffee.</em>
                    </p>
                  </div>
                </CardContent>
              </Card>

              <MultipleChoiceQuiz
                title="Exercise 1: Choose the correct form"
                description="Select the form that fits each sentence about sleep habits."
                questions={usedToMcq}
              />

              <TypeBlanks
                title="Exercise 2: Complete the sentence"
                body="Add the missing word or phrase to complete each sentence."
                blanks={usedToTransform}
              />

              <TechnicalRenderer activities={nefReviewActivities.slice(2)} />
            </TabsContent>


            {/* LISTENING */}
            <TabsContent value="listening" className="space-y-4 sm:space-y-6">
              <Card className="service-card p-0">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Headphones className="h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-semibold font-merriweather text-foreground">
                      Video: What would happen if you didn't sleep?
                    </h2>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Watch this short TED-Ed animation by Claudia Aguirre and then answer the
                    comprehension questions below.
                  </p>
                  <div className="relative w-full overflow-hidden rounded-lg border border-border" style={{ paddingTop: "56.25%" }}>
                    <iframe
                      src="https://www.youtube.com/embed/dqONk48l5vY"
                      title="What would happen if you didn't sleep? — TED-Ed"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="service-card p-0">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center justify-between gap-3 mb-3 flex-wrap">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-primary" />
                      <h3 className="text-lg font-semibold font-merriweather text-foreground">
                        Transcript &amp; captions
                      </h3>
                    </div>
                    <Button asChild variant="outline" size="sm">
                      <a
                        href="/lessons/sleep-ted-ed-transcript.vtt"
                        download="sleep-ted-ed-transcript.vtt"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download .vtt captions
                      </a>
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Prefer to read along? Expand the full transcript below, or download the timed
                    WebVTT caption file to use with your own player.
                  </p>
                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <Button variant="secondary" size="sm" className="gap-2">
                        <ChevronDown className="h-4 w-4" />
                        Show / hide transcript
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-4">
                      <div className="space-y-3 p-4 rounded-lg border border-border bg-muted/30 text-foreground leading-relaxed">
                        {videoTranscript.map((para, i) => (
                          <p key={i}>{para}</p>
                        ))}
                        <p className="text-xs text-muted-foreground pt-2 border-t border-border">
                          Source: TED-Ed, "What would happen if you didn't sleep?" by Claudia
                          Aguirre (2015). Used for educational purposes.
                        </p>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </CardContent>
              </Card>


              <Card className="service-card p-0">
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-lg font-semibold mb-3 font-merriweather text-foreground">
                    Discussion — before you watch
                  </h3>
                  <ul className="space-y-2 list-disc list-inside text-foreground">
                    <li>How many hours of sleep do you get on a typical weeknight?</li>
                    <li>Did you use to sleep more when you were younger?</li>
                    <li>What helps you fall asleep? What keeps you awake?</li>
                    <li>Have you ever had to get used to a new sleeping routine (a baby, shift work, a time zone)?</li>
                  </ul>
                </CardContent>
              </Card>

              <MultipleChoiceQuiz
                title="Video comprehension"
                description="Answer these questions based on the TED-Ed video."
                questions={videoComprehension}
              />

              <Card className="service-card p-0">
                <CardContent className="p-4 sm:p-6 space-y-5">
                  <div className="flex items-center gap-3">
                    <Headphones className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-semibold font-merriweather text-foreground">
                      Audio activities (Unit 5B)
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Three short recordings on sleep habits and routines. Listen once for gist, then
                    again for detail — pause and replay as often as you need.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-2">
                        Track 5.10 — Warm-up: sleep habits
                      </p>
                      <audio controls src={audio510.url} className="w-full" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-2">
                        Track 5.11 — Interview: changing sleep routines
                      </p>
                      <audio controls src={audio511.url} className="w-full" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-2">
                        Track 5.12 — Extended listening: sleep and health
                      </p>
                      <audio controls src={audio512.url} className="w-full" />
                    </div>
                  </div>

                  <div className="p-4 rounded-lg border border-border bg-blue-50/40 dark:bg-blue-950/20 text-sm">
                    <p className="font-semibold text-foreground mb-1">While you listen — focus questions</p>
                    <ul className="list-disc list-inside text-foreground space-y-1">
                      <li>What did the speakers <em>use to</em> do that they don't do any more?</li>
                      <li>What have they had to <em>get used to</em>?</li>
                      <li>Note down any sleep vocabulary you hear from the earlier section.</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Jessa Gamble */}
              <Card className="service-card p-0">
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-2xl font-semibold mb-2 font-merriweather text-foreground">
                    10 · Video: Our natural sleep cycle (Jessa Gamble)
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    A four-minute TED talk about body clocks, horseshoe crabs and what our sleep
                    would look like without modern life getting in the way.
                  </p>
                  <div className="relative w-full overflow-hidden rounded-lg border border-border" style={{ paddingTop: "56.25%" }}>
                    <iframe
                      src="https://www.youtube.com/embed/N6eN6mrK0ZQ"
                      title="Jessa Gamble: Our natural sleep cycle — TED"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                </CardContent>
              </Card>

              <TechnicalRenderer activities={gambleBeforeWatching} />
              <TechnicalRenderer activities={gambleActivities} />

              {/* Arianna Huffington */}
              <Card className="service-card p-0">
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-2xl font-semibold mb-2 font-merriweather text-foreground">
                    11 · Video: How to succeed? Get more sleep (Arianna Huffington)
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Arianna Huffington describes how collapsing from exhaustion changed the way she
                    thinks about success — and why sleep deprivation has become a badge of honour.
                  </p>
                  <div className="relative w-full overflow-hidden rounded-lg border border-border" style={{ paddingTop: "56.25%" }}>
                    <iframe
                      src="https://embed.ted.com/talks/arianna_huffington_how_to_succeed_get_more_sleep"
                      title="Arianna Huffington: How to succeed? Get more sleep — TED"
                      allow="autoplay; fullscreen; encrypted-media"
                      allowFullScreen
                      loading="lazy"
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                </CardContent>
              </Card>

              <TechnicalRenderer activities={huffingtonActivities} />

              {/* Dan Gartenberg */}
              <Card className="service-card p-0">
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-2xl font-semibold mb-2 font-merriweather text-foreground">
                    12 · Video: The brain benefits of deep sleep (Dan Gartenberg)
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Sleep scientist Dan Gartenberg explains slow-wave sleep and how sound played in
                    time with your brainwaves may make deep sleep even deeper.
                  </p>
                  <div className="relative w-full overflow-hidden rounded-lg border border-border" style={{ paddingTop: "56.25%" }}>
                    <iframe
                      src="https://embed.ted.com/talks/dan_gartenberg_the_brain_benefits_of_deep_sleep_and_how_to_get_more_of_it"
                      title="Dan Gartenberg: The brain benefits of deep sleep — TED"
                      allow="autoplay; fullscreen; encrypted-media"
                      allowFullScreen
                      loading="lazy"
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                </CardContent>
              </Card>

              <TechnicalRenderer activities={gartenbergActivities} />
            </TabsContent>



            {/* QUIZ */}
            <TabsContent value="quiz" className="space-y-4 sm:space-y-6">
              <Card className="service-card p-0">
                <CardContent className="p-4 sm:p-6">
                  <h2 className="text-2xl font-semibold mb-2 font-merriweather text-foreground">
                    Final quiz — mixed review
                  </h2>
                  <p className="text-muted-foreground">
                    Ten questions covering the vocabulary, grammar and reading from this lesson.
                    Good luck!
                  </p>
                </CardContent>
              </Card>

              <MultipleChoiceQuiz
                title="Sleep & Used To — mixed quiz"
                description="Choose the best answer for each question."
                questions={finalQuiz}
              />

              <TechnicalRenderer activities={advancedStretch} />
              <TechnicalRenderer activities={wrapUpTasks} />
            </TabsContent>

          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SleepLesson;
