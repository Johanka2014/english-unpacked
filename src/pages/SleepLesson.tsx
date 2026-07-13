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

const SleepLesson = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Sleep — B2 English Lesson on 'Used To' | English Unpacked"
        description="Upper-intermediate English lesson on sleep: reading, vocabulary, listening, 'used to / be used to / get used to' grammar and a mixed quiz."
      />
      <Navigation />
      <main className="container mx-auto px-4 py-12">
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
            <TabsContent value="reading" className="space-y-6">
              <Card className="service-card">
                <CardContent className="p-6">
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

              <Card className="service-card">
                <CardContent className="p-6">
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
            </TabsContent>

            {/* VOCABULARY */}
            <TabsContent value="vocab" className="space-y-6">
              <Card className="service-card">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-2 font-merriweather text-foreground">
                    Sleep vocabulary
                  </h2>
                  <p className="text-muted-foreground">
                    Complete each sentence with the correct sleep-related word. The first letter is
                    given.
                  </p>
                </CardContent>
              </Card>

              <TypeBlanks title="Sleep race" blanks={sleepVocabBlanks} />

              <MatchingExercise
                title="Similes with sleep and the body"
                description="Similes are fixed comparisons using 'as…as' or 'like'. Match the start of each simile to the correct noun."
                pairs={similes}
                leftLabel="Simile"
                rightLabel="Noun"
              />
            </TabsContent>

            {/* GRAMMAR */}
            <TabsContent value="grammar" className="space-y-6">
              <Card className="service-card">
                <CardContent className="p-6 space-y-5">
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
            </TabsContent>

            {/* LISTENING */}
            <TabsContent value="listening" className="space-y-6">
              <Card className="service-card">
                <CardContent className="p-6">
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

              <Card className="service-card">
                <CardContent className="p-6">
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

              <Card className="service-card">
                <CardContent className="p-6">
                  <div className="p-4 rounded-lg border border-dashed border-border bg-muted/30 text-sm text-muted-foreground">
                    <strong className="text-foreground">Audio activity coming soon.</strong> If
                    you'd like to add a specific MP3 recording alongside the video, upload it in the
                    chat and I'll wire it in as a gap-fill exercise.
                  </div>
                </CardContent>
              </Card>
            </TabsContent>


            {/* QUIZ */}
            <TabsContent value="quiz" className="space-y-6">
              <Card className="service-card">
                <CardContent className="p-6">
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
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SleepLesson;
