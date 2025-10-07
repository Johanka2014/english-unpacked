import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Laptop, CheckCircle, ExternalLink, Plane } from "lucide-react";
import businessBenchmarkImage from "@/assets/business-benchmark.jpg";
import businessVocabAppImage from "@/assets/business-vocab-app-thumbnail.jpg";
import heroBackground from "@/assets/hero-background.jpg";

const BusinessEnglish = () => {
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
            Business English
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Master professional communication with comprehensive textbooks and interactive learning tools designed for today's business world.
          </p>
          <Button 
            size="lg" 
            className="hero-button animate-bounce-subtle"
            asChild
          >
            <a href="#textbooks">Explore Our Methods</a>
          </Button>
        </div>
      </section>

      {/* Business Textbooks Section */}
      <section id="textbooks" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground mb-12 font-merriweather text-center">
            Comprehensive Business English Textbooks
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Experience a complete and thorough course with professionally designed Business English textbooks. 
                Our structured approach ensures systematic learning of business communication, vocabulary, and professional writing skills.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-royal mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Structured Learning Path</h3>
                    <p className="text-muted-foreground">Progressive curriculum from basic business vocabulary to advanced communication skills</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-royal mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Real-World Applications</h3>
                    <p className="text-muted-foreground">Practice with authentic business scenarios, emails, presentations, and meetings</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-royal mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Professional Certification</h3>
                    <p className="text-muted-foreground">Prepare for Cambridge Business English certificates and other professional qualifications</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Plane className="w-6 h-6 text-brand-royal mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Business Travel English</h3>
                    <p className="text-muted-foreground">Essential phrases and strategies for handling travel disruptions, emergencies, and challenging situations abroad</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 flex-wrap">
                <Button
                size="lg" 
                className="bg-brand-royal hover:bg-brand-navy transition-colors duration-200"
                asChild
              >
                <a href="/booking">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Start Your Course
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-brand-royal text-brand-royal hover:bg-brand-royal/10"
                asChild
              >
                <a href="/business-travel">
                  <Plane className="w-5 h-5 mr-2" />
                  Explore Travel Scenarios
                </a>
              </Button>
              </div>
            </div>
            
            <div className="order-first lg:order-last">
              <Card className="service-card overflow-hidden">
                <CardContent className="p-0">
                  <img 
                    src={businessBenchmarkImage} 
                    alt="Business Benchmark textbooks for comprehensive Business English learning"
                    className="w-full h-auto object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Apps Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-first lg:order-first">
              <Card className="service-card overflow-hidden">
                <CardContent className="p-0">
                  <img 
                    src={businessVocabAppImage} 
                    alt="Business Benchmark Vocabulary App interface showing interactive learning exercises"
                    className="w-full h-auto object-cover"
                  />
                </CardContent>
              </Card>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6 font-merriweather">
                Interactive Learning Activities
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Enhance your learning experience with our cutting-edge interactive applications. 
                Practice vocabulary, pronunciation, and business scenarios in an engaging digital environment.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Master essential business vocabulary through interactive exercises, quizzes, and real-time feedback. 
                Our app adapts to your learning pace and tracks your progress automatically.
              </p>

              <Button 
                size="lg" 
                className="bg-brand-royal hover:bg-brand-navy transition-colors duration-200"
                asChild
              >
                <a href="/business-vocabulary-app">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Try one of the Apps Now
                </a>
              </Button>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="service-card p-6 text-center">
              <div className="w-12 h-12 bg-brand-royal/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-brand-royal" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Interactive Exercises</h4>
              <p className="text-sm text-muted-foreground">Engaging activities that make learning vocabulary fun and memorable</p>
            </Card>
            <Card className="service-card p-6 text-center">
              <div className="w-12 h-12 bg-brand-royal/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-brand-royal" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Progress Tracking</h4>
              <p className="text-sm text-muted-foreground">Monitor your improvement with detailed analytics and achievements</p>
            </Card>
            <Card className="service-card p-6 text-center">
              <div className="w-12 h-12 bg-brand-royal/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-brand-royal" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Adaptive Learning</h4>
              <p className="text-sm text-muted-foreground">Personalized content that adjusts to your skill level and pace</p>
            </Card>
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
              Ready to Advance Your Business English?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Combine the thoroughness of professional textbooks with the engagement of interactive apps. 
              Book a consultation to create your personalized Business English learning plan.
            </p>
            <Button 
              size="lg" 
              className="hero-button bg-white text-brand-navy hover:bg-white/90 transition-all duration-300"
              asChild
            >
              <a href="/booking">
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

export default BusinessEnglish;
