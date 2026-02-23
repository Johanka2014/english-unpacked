import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, BookOpen, Headphones } from "lucide-react";
import heroBackground from "@/assets/hero-background.webp";
import SEO from "@/components/SEO";

const EnglishForKids = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "English for Kids - Cambridge Young Learners",
    "description": "Fun, engaging English lessons for children. Prepare for Cambridge Starters, Movers & Flyers exams with interactive activities in speaking, reading, and listening.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "English Unpacked",
      "url": "https://english-unpacked.lovable.app"
    },
    "courseMode": "online",
    "educationalLevel": "Young Learners",
    "teaches": "English for children, Cambridge Starters, Movers, Flyers"
  };

  const skills = [
    {
      id: "speaking",
      icon: <MessageCircle className="w-8 h-8 text-brand-royal" />,
      title: "Speaking",
      description: "Build confidence in spoken English through games, role-plays, and interactive activities. Children learn to express themselves naturally and have fun doing it!",
    },
    {
      id: "reading",
      icon: <BookOpen className="w-8 h-8 text-brand-royal" />,
      title: "Reading",
      description: "Develop reading skills with age-appropriate stories, picture books, and engaging exercises that make reading in English an adventure.",
    },
    {
      id: "listening",
      icon: <Headphones className="w-8 h-8 text-brand-royal" />,
      title: "Listening",
      description: "Improve listening comprehension through songs, stories, and audio activities designed to train young ears and make learning enjoyable.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="English for Kids - Fun English Lessons for Young Learners"
        description="Fun, engaging English lessons for children. Prepare for Cambridge Starters, Movers & Flyers with interactive speaking, reading, and listening activities. Book a free consultation."
        canonical="https://english-unpacked.lovable.app/english-for-kids"
        schema={schema}
      />
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("${heroBackground}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/20 to-brand-royal/20"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-fredoka">
            English for Kids
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Making learning English fun, exciting, and full of adventure for young learners.
          </p>
          <Button
            size="lg"
            className="hero-button animate-bounce-subtle"
            asChild
          >
            <a
              href="https://calendly.com/english-unpacked/consultation"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Free Consultation
            </a>
          </Button>
        </div>
      </section>

      {/* Cambridge Young Learners Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground mb-12 font-fredoka text-center">
            Cambridge Starters, Movers &amp; Flyers
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-first">
              <Card className="service-card overflow-hidden">
                <CardContent className="p-0">
                  <img
                    src="https://johanka2014.github.io/get_ready_for_starters/cambridge_levels_kids.jpg"
                    alt="Cambridge Young Learners exam levels - Starters, Movers, and Flyers"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </CardContent>
              </Card>
            </div>

            <div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Cambridge Young Learners exams are designed specifically for children and make learning English a positive, rewarding experience. The three levels — <strong>Starters</strong>, <strong>Movers</strong>, and <strong>Flyers</strong> — guide your child step by step through their English journey.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our lessons prepare children for all three levels with engaging, age-appropriate materials. We focus on building real communication skills while covering the vocabulary, grammar, and topics needed to succeed in these internationally recognised exams.
              </p>
              <Button
                size="lg"
                className="bg-brand-royal hover:bg-brand-navy transition-colors duration-200"
                asChild
              >
                <a
                  href="https://calendly.com/english-unpacked/consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a Consultation
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Tiles Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 font-fredoka">
              How We Learn
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every lesson is packed with fun activities across three key skill areas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <Card
                key={skill.id}
                className="service-card group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3 mb-2">
                    {skill.icon}
                    <CardTitle className="text-xl text-brand-navy group-hover:text-brand-royal transition-colors duration-200 font-fredoka">
                      {skill.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {skill.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        className="relative py-20 text-white overflow-hidden"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("${heroBackground}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/20 to-brand-royal/20"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6 font-fredoka">
              Ready to Start Your Child's English Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Give your child the gift of English with fun, engaging lessons tailored to their age and level. Book a free consultation to get started.
            </p>
            <Button
              size="lg"
              className="hero-button bg-white text-brand-navy hover:bg-white/90 transition-all duration-300"
              asChild
            >
              <a
                href="https://calendly.com/english-unpacked/consultation"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Your Consultation
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EnglishForKids;
