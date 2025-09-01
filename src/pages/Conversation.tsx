import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Globe, Lightbulb, ExternalLink } from "lucide-react";
import conversationImage from "@/assets/conversation.jpg";
import heroBackground from "@/assets/hero-background.jpg";

const ConversationalEnglish = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("${heroBackground}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Animated background overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/20 to-brand-royal/20"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-merriweather">
            Conversational English
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Build fluency and confidence for everyday conversations. We focus on practical, real-world scenarios to help you communicate naturally and effectively.
          </p>
          <Button 
            size="lg" 
            className="hero-button animate-bounce-subtle"
            asChild
          >
            <a href="#topics">Explore Topics</a>
          </Button>
        </div>
      </section>

      {/* Conversational Topics Section */}
      <section id="topics" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground mb-12 font-merriweather text-center">
            Mastering Real-World Conversations
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our conversational English lessons are designed to get you talking from day one. We move beyond textbooks to explore topics that matter to you, helping you build confidence and express yourself naturally.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Globe className="w-6 h-6 text-brand-royal mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Practical Scenarios</h3>
                    <p className="text-muted-foreground">Practice in real-life situations like ordering at a restaurant, traveling, or making new friends.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MessageCircle className="w-6 h-6 text-brand-royal mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Dynamic Discussions</h3>
                    <p className="text-muted-foreground">Engage in lively debates and talks about culture, news, and your personal interests.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-6 h-6 text-brand-royal mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Idioms and Slang</h3>
                    <p className="text-muted-foreground">Learn natural-sounding language and common expressions used by native speakers.</p>
                  </div>
                </div>
              </div>

              <Button 
                size="lg" 
                className="bg-brand-royal hover:bg-brand-navy transition-colors duration-200"
                asChild
              >
                <a href="https://calendly.com/english-unpacked/consultation" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Book Your First Conversation
                </a>
              </Button>
            </div>
            
            <div className="order-first lg:order-last">
              <Card className="service-card overflow-hidden">
                <CardContent className="p-0">
                  <img 
                    src={conversationImage} 
                    alt="Two people talking animatedly in a cafe."
                    className="w-full h-auto object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section 
        className="relative py-20 text-white overflow-hidden"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("${heroBackground}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Animated background overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/20 to-brand-royal/20"></div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6 font-merriweather">
              Start Speaking Confidently Today
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Don't just learn English, speak it! Our personalized conversational lessons will help you gain fluency and confidence.
            </p>
            <Button 
              size="lg" 
              className="hero-button bg-white text-brand-navy hover:bg-white/90 transition-all duration-300"
              asChild
            >
              <a href="https://calendly.com/english-unpacked/consultation" target="_blank" rel="noopener noreferrer">
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

export default ConversationalEnglish;
