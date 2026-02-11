import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { BookOpen, Lock } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import SEO from "@/components/SEO";
import { maturitaTopics } from "@/data/maturitaTopics";

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

      {/* Topics Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
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
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MaturitaSpeaking;
