import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { BookOpen, Lock, Clock, MessageSquare, ClipboardCheck } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import SEO from "@/components/SEO";
import { maturitaTopics, type WarmUpCategory } from "@/data/maturitaTopics";

const warmUpQuestions: WarmUpCategory[] = [
  {
    category: "School and Education",
    questions: [
      "Was it easy to choose the secondary school?",
      "What subject is most interesting to you and why?",
      "Do you have any difficulties with any subject at school?",
      "What was your best school memory?",
      "How do you feel about exams?"
    ]
  },
  {
    category: "Family and Relationships",
    questions: [
      "Do you meet your distant relatives? On what occasions?",
      "How much time did you spend at grandparents' when you were a child?",
      "Would you change anything about your parents' behaviour?",
      "What should your future family look like?",
      "Have you ever used social networks to make friends?",
      "In your opinion, what qualities are necessary to make friends?",
      "What should people do if they want to get on well with neighbours?",
      "In your opinion, what should a flatmate be like?"
    ]
  },
  {
    category: "Pets and Nature",
    questions: [
      "Do you think children should keep a pet?",
      "What are some disadvantages of having plants at home?",
      "Do you have a pet? What is it?",
      "What is your favourite animal and why?",
      "How important is nature to you?"
    ]
  },
  {
    category: "Technology and Internet",
    questions: [
      "Do you think that teenagers are too dependent on computers?",
      "Can you imagine living without your mobile phone?",
      "In your opinion, can the internet be dangerous for teenagers?",
      "In your opinion, will electronic books or newspapers become more popular than paper ones?",
      "Would you buy a six-year-old a mobile phone?",
      "Can you imagine your life without the Internet?",
      "Should mobile phones be banned at school?"
    ]
  },
  {
    category: "Travel and Transport",
    questions: [
      "What should you pack when you go on a skiing holiday?",
      "Where would you travel if you could go anywhere?",
      "What is your favourite means of transport?",
      "What means of transport would you choose for a trip to London?",
      "What are the advantages/disadvantages of public transport?",
      "Should everybody have a driving licence nowadays?",
      "What has been your longest journey so far?",
      "Would you use public transport more if it was free?",
      "When you went on your last holiday, did you travel with a travel agency?"
    ]
  },
  {
    category: "Shopping and Money",
    questions: [
      "Have you ever bought anything online?",
      "What would you do if someone stopped you in the street and asked you for money?",
      "Have you ever borrowed money from your friend?",
      "Would you ever give money to a charity?",
      "What is the last thing you bought and why?"
    ]
  },
  {
    category: "Daily Life and Leisure",
    questions: [
      "What would your ideal weekend be like?",
      "In your opinion, are typical weekdays different for girls and boys? Why? Why not?",
      "How is your everyday life different to that of your parents?",
      "Do you think people today have enough leisure time?",
      "Have you ever kept a diary?"
    ]
  },
  {
    category: "Home and Housing",
    questions: [
      "Would you like to share a flat with a friend?",
      "Do you walk at night in your town?",
      "Where can tourists stay overnight in your town?",
      "If you could change anything about the services in your hometown, what would it be?",
      "Describe your dream home."
    ]
  },
  {
    category: "Health and Wellbeing",
    questions: [
      "What do you personally do to protect your health?",
      "Have you ever felt frightened before seeing a doctor/dentist?",
      "What should people do against stress?",
      "How often do you exercise?",
      "What is your idea of a healthy lifestyle?"
    ]
  },
  {
    category: "Culture and Media",
    questions: [
      "Have you ever watched a science documentary on TV?",
      "Is music important to you?",
      "Should cities/towns support organising cultural events such as concerts or festivals?",
      "Have you ever borrowed a book from a library?",
      "Where do you look when you want to find something important?"
    ]
  },
  {
    category: "Weather and Seasons",
    questions: [
      "Can you imagine living in a country where there is no snow in winter?",
      "Why do you think so many people like talking about the weather?",
      "What is your favourite season and why?",
      "How does weather affect your mood?",
      "What weather is most common in your country?"
    ]
  },
  {
    category: "Personal Qualities",
    questions: [
      "What are your good and bad qualities?",
      "Have you ever tried to change anything about yourself?",
      "What makes you happy?",
      "What is your biggest weakness?",
      "What are you proud of?"
    ]
  }
];

const MaturitaSpeaking = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Maturita Speaking Practice",
    "description": "Prepare for your maturita speaking exam with 28 topics covering key vocabulary, sample sentences, and official practice tests.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "English Unpacked",
      "url": "https://english-unpacked.lovable.app"
    },
    "courseMode": "online",
    "educationalLevel": "Upper Secondary"
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Maturita Speaking Practice – All 28 Topics"
        description="Prepare for your maturita speaking exam with structured learning, sample sentences, and official practice tests for all 28 topics."
        canonical="https://english-unpacked.lovable.app/maturita-speaking"
        schema={schema}
      />
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative min-h-[50vh] flex items-center justify-center text-white overflow-hidden"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("${heroBackground}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/20 to-brand-royal/20" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 font-merriweather">
            Maturita Speaking Practice
          </h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
            Master all 28 topics with structured learning, sample sentences, and official exam practice.
          </p>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <Tabs defaultValue="section1" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="section1" className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Part 1
              </TabsTrigger>
              <TabsTrigger value="section2" className="flex items-center gap-2">
                <ClipboardCheck className="w-4 h-4" />
                Part 2
              </TabsTrigger>
              <TabsTrigger value="section3" className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Part 3
              </TabsTrigger>
            </TabsList>

            {/* Section 1 – Introduction & Warm-Up */}
            <TabsContent value="section1">
              <div className="space-y-8">
                {/* Introduction */}
                <Card className="border-2 border-accent bg-accent/30">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-royal text-white font-bold text-sm shrink-0">1</span>
                      <CardTitle className="text-xl font-merriweather">Introduction</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground italic leading-relaxed">
                      "Hello. Sit down, please. Would you tell me your task sheet number so I can check it, please? First, could you briefly introduce yourself to the committee? Thank you. Now, let's go to Part One."
                    </p>
                  </CardContent>
                </Card>

                {/* Warm-Up */}
                <Card className="border-2 border-accent">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-royal text-white font-bold text-sm shrink-0">2</span>
                      <div>
                        <CardTitle className="text-xl font-merriweather">Warm-Up Questions</CardTitle>
                        <CardDescription className="flex items-center gap-1 mt-1">
                          <Clock className="w-3.5 h-3.5" /> 2–5 minutes · The examiner will ask 3–5 questions
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground italic mb-6 leading-relaxed">
                      "I am going to ask you some questions about different topics. If possible, give detailed answers. If you don't understand a question, please ask me to repeat it. Are you ready?"
                    </p>
                    <Accordion type="single" collapsible className="space-y-2">
                      {warmUpQuestions.map((cat, index) => (
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
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Section 2 – Placeholder */}
            <TabsContent value="section2">
              <Card className="border-2 border-dashed border-muted">
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl font-merriweather text-muted-foreground">Section 2</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center py-8">Coming soon</p>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Section 3 – Choose a Topic */}
            <TabsContent value="section3">
              <h2 className="text-3xl font-bold text-foreground mb-8 font-merriweather text-center">
                Choose a Topic
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {maturitaTopics.map((topic) =>
                  topic.available ? (
                    <Link key={topic.id} to={`/maturita-speaking/${topic.id}`}>
                      <Card className="service-card h-full cursor-pointer group">
                        <CardHeader className="pb-2">
                          <div className="flex items-center gap-2 mb-1">
                            <BookOpen className="w-5 h-5 text-brand-royal" />
                            <Badge className="bg-accent text-accent-foreground hover:bg-accent">Ready</Badge>
                          </div>
                          <CardTitle className="text-lg group-hover:text-brand-royal transition-colors">
                            {topic.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription>{topic.description}</CardDescription>
                        </CardContent>
                      </Card>
                    </Link>
                  ) : (
                    <Card key={topic.id} className="h-full opacity-60 cursor-default">
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-2 mb-1">
                          <Lock className="w-4 h-4 text-muted-foreground" />
                          <Badge variant="secondary">Coming Soon</Badge>
                        </div>
                        <CardTitle className="text-lg">{topic.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{topic.description}</CardDescription>
                      </CardContent>
                    </Card>
                  )
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

export default MaturitaSpeaking;
