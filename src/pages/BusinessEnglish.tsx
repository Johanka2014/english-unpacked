import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Laptop, CheckCircle, ExternalLink } from "lucide-react";
import businessBenchmarkImage from "@/assets/business-benchmark.jpg";

const BusinessEnglish = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-brand-royal via-brand-navy to-brand-deep">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-merriweather">
              Business English
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Master professional communication with comprehensive textbooks and interactive learning tools designed for today's business world.
            </p>
            <Button 
              size="lg" 
              className="hero-button bg-white text-brand-navy hover:bg-white/90 transition-all duration-300"
              asChild
            >
              <a href="#textbooks">Explore Our Methods</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Business Textbooks Section */}
      <section id="textbooks" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6 font-merriweather">
                Comprehensive Business English Textbooks
              </h2>
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
              </div>

              <Button 
                size="lg" 
                className="bg-brand-royal hover:bg-brand-navy transition-colors duration-200"
                asChild
              >
                <a href="https://calendly.com/english-unpacked/consultation" target="_blank" rel="noopener noreferrer">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Start Your Course
                </a>
              </Button>
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
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6 font-merriweather">
              Interactive Learning Apps
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Enhance your learning experience with our cutting-edge interactive applications. 
              Practice vocabulary, pronunciation, and business scenarios in an engaging digital environment.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="service-card p-8 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-brand-royal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Laptop className="w-8 h-8 text-brand-royal" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 font-merriweather">
                  Business Benchmark Vocabulary App
                </h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Master essential business vocabulary through interactive exercises, quizzes, and real-time feedback. 
                  Our app adapts to your learning pace and tracks your progress automatically.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-royal/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-6 h-6 text-brand-royal" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Interactive Exercises</h4>
                  <p className="text-sm text-muted-foreground">Engaging activities that make learning vocabulary fun and memorable</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-royal/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-6 h-6 text-brand-royal" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Progress Tracking</h4>
                  <p className="text-sm text-muted-foreground">Monitor your improvement with detailed analytics and achievements</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-royal/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-6 h-6 text-brand-royal" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Adaptive Learning</h4>
                  <p className="text-sm text-muted-foreground">Personalized content that adjusts to your skill level and pace</p>
                </div>
              </div>

              <Button 
                size="lg" 
                className="bg-brand-royal hover:bg-brand-navy transition-colors duration-200"
                asChild
              >
                <a 
                  href="https://business-benchmark-vocabulary.lovable.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Try the App Now
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-brand-royal to-brand-navy">
        <div className="container mx-auto px-4 text-center">
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

export default BusinessEnglish;