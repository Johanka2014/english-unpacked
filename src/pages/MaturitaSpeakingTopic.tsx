import { useParams, Navigate, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, MessageSquare, ClipboardCheck, Eye, EyeOff, Clock } from "lucide-react";
import { useState } from "react";
import heroBackground from "@/assets/hero-background.jpg";
import SEO from "@/components/SEO";
import { maturitaTopics } from "@/data/maturitaTopics";

const PracticeCard = ({ question, answer }: { question: string; answer: string }) => {
  const [revealed, setRevealed] = useState(false);

  return (
    <Card className="service-card">
      <CardHeader className="pb-3">
        <CardTitle className="text-base font-semibold text-foreground">{question}</CardTitle>
      </CardHeader>
      <CardContent>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setRevealed(!revealed)}
          className="mb-3"
        >
          {revealed ? <EyeOff className="w-4 h-4 mr-2" /> : <Eye className="w-4 h-4 mr-2" />}
          {revealed ? "Hide Answer" : "Show Answer"}
        </Button>
        {revealed && (
          <p className="text-muted-foreground leading-relaxed animate-fade-in">{answer}</p>
        )}
      </CardContent>
    </Card>
  );
};

const MaturitaSpeakingTopic = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const topic = maturitaTopics.find((t) => t.id === topicId);

  if (!topic || !topic.available) {
    return <Navigate to="/maturita-speaking" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${topic.title} – Maturita Speaking Practice`}
        description={`Learn key vocabulary, practise sample sentences, and prepare for your maturita speaking exam on the topic: ${topic.title}.`}
        canonical={`https://english-unpacked.lovable.app/maturita-speaking/${topic.id}`}
      />
      <Navigation />

      {/* Hero */}
      <section
        className="relative min-h-[40vh] flex items-center justify-center text-white overflow-hidden"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("${heroBackground}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/20 to-brand-royal/20" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 font-merriweather">
            {topic.title}
          </h1>
          <p className="text-lg text-white/90">{topic.description}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link
            to="/maturita-speaking"
            className="inline-flex items-center gap-2 text-brand-royal hover:text-brand-navy transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Topics
          </Link>

          <Tabs defaultValue="learn" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="learn" className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Learn
              </TabsTrigger>
              <TabsTrigger value="practice" className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Practice
              </TabsTrigger>
              <TabsTrigger value="exam" className="flex items-center gap-2">
                <ClipboardCheck className="w-4 h-4" />
                Exam Practice
              </TabsTrigger>
            </TabsList>

            {/* Learn Tab */}
            <TabsContent value="learn">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-foreground mb-2 font-merriweather">
                  Key Information
                </h2>
                <p className="text-muted-foreground">
                  Study each sub-topic to build your vocabulary and understanding before practising.
                </p>
              </div>
              <Accordion type="single" collapsible className="space-y-2">
                {topic.learn?.map((item, index) => (
                  <AccordionItem key={index} value={`learn-${index}`} className="border rounded-lg px-4">
                    <AccordionTrigger className="text-left font-semibold">
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {item.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>

            {/* Practice Tab */}
            <TabsContent value="practice">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-foreground mb-2 font-merriweather">
                  Sample Questions & Answers
                </h2>
                <p className="text-muted-foreground">
                  Read each question, think of your own answer, then reveal the model answer to compare.
                </p>
              </div>
              <div className="space-y-4">
                {topic.practice?.map((qa, index) => (
                  <PracticeCard key={index} question={qa.question} answer={qa.answer} />
                ))}
              </div>
            </TabsContent>

            {/* Exam Practice Tab */}
            <TabsContent value="exam">
              <div className="space-y-8">
                {/* Introduction */}
                <Card className="border-2 border-accent">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-royal text-white font-bold text-sm shrink-0">1</span>
                      <CardTitle className="text-xl font-merriweather">Introduction</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground italic leading-relaxed">
                      {topic.interlocutorIntro || "The interlocutor will greet you and ask you to introduce yourself."}
                    </p>
                  </CardContent>
                </Card>

                {/* Section 1 – Warm-Up */}
                <Card className="border-2 border-accent">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-royal text-white font-bold text-sm shrink-0">2</span>
                      <div>
                        <CardTitle className="text-xl font-merriweather">Section 1 – Warm-Up</CardTitle>
                        <CardDescription className="flex items-center gap-1 mt-1">
                          <Clock className="w-3.5 h-3.5" /> 2–5 minutes · The examiner will ask 3–5 questions
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground italic mb-6 leading-relaxed">
                      {topic.interlocutorPart1 || "The interlocutor will ask you warm-up questions."}
                    </p>
                    {topic.warmUpQuestions && topic.warmUpQuestions.length > 0 && (
                      <Accordion type="single" collapsible className="space-y-2">
                        {topic.warmUpQuestions.map((cat, index) => (
                          <AccordionItem key={index} value={`warmup-${index}`} className="border rounded-lg px-4">
                            <AccordionTrigger className="text-left font-semibold">
                              {cat.category}
                            </AccordionTrigger>
                            <AccordionContent>
                              <ul className="space-y-2 pl-1">
                                {cat.questions.map((q, qi) => (
                                  <li key={qi} className="text-muted-foreground flex items-start gap-2">
                                    <span className="text-brand-royal mt-0.5">•</span>
                                    {q}
                                  </li>
                                ))}
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    )}
                  </CardContent>
                </Card>

                {/* Section 2 – Placeholder */}
                <Card className="border-2 border-dashed border-muted">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-muted text-muted-foreground font-bold text-sm shrink-0">3</span>
                      <CardTitle className="text-xl font-merriweather text-muted-foreground">Section 2</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center py-4">Coming soon</p>
                  </CardContent>
                </Card>

                {/* Section 3 – Topic Presentation & Follow-Up */}
                {topic.exam && (
                  <Card className="border-2 border-accent">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-royal text-white font-bold text-sm shrink-0">4</span>
                        <CardTitle className="text-xl font-merriweather">Section 3 – Topic Presentation & Follow-Up</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Task Instructions */}
                      <div className="bg-accent/30 rounded-lg p-4 border border-accent">
                        <h3 className="font-semibold text-foreground mb-2">Task Instructions</h3>
                        <p className="text-muted-foreground mb-4">{topic.exam.taskDescription}</p>
                        <p className="font-semibold text-foreground mb-2">The following ideas may help you:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          {topic.exam.promptPoints.map((point, i) => (
                            <li key={i} className="text-muted-foreground">{point}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Image Grid */}
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {topic.exam.images.map((img) => (
                          <Card key={img.label} className="overflow-hidden">
                            <CardContent className="p-0">
                              <img
                                src={img.src}
                                alt={img.description}
                                className="w-full h-48 object-cover"
                                loading="lazy"
                              />
                              <div className="p-3">
                                <p className="font-semibold text-foreground">{img.label}</p>
                                <p className="text-sm text-muted-foreground">{img.description}</p>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>

                      {/* Follow-up Questions */}
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Follow-up Questions</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          The examiner may ask you these questions after your presentation. Practise answering them aloud.
                        </p>
                        <ol className="list-decimal pl-5 space-y-2">
                          {topic.exam.followUpQuestions.map((q, i) => (
                            <li key={i} className="text-foreground">{q}</li>
                          ))}
                        </ol>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MaturitaSpeakingTopic;
