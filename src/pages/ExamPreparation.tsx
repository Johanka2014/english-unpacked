import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, CheckCircle, ExternalLink, Timer, Target } from "lucide-react";
import examPrepTextbooks from @assets/textbooks.png";
import heroBackground from "@/assets/hero-background.jpg";

const ExamPreparation = () => {
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
            Exam Preparation
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Achieve your best score with our specialized programs for FCE, CAE, and IELTS exams.
          </p>
          <Button 
            size="lg" 
            className="hero-button animate-bounce-subtle"
            asChild
          >
            <a href="#resources">Explore Our Resources</a>
          </Button>
        </div>
      </section>

      {/* Exam Prep Resources Section */}
      <section id="resources" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground mb-12 font-merriweather text-center">
            Targeted Strategies for Success
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our structured approach uses a combination of official textbooks and custom practice materials to prepare you for every part of your exam. We focus on building the skills and confidence you need to excel.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-brand-royal mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Targeted Exam Skills</h3>
                    <p className="text-muted-foreground">Master specific skills for each section of the exam, including Reading, Writing, Listening, and Speaking.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Timer className="w-6 h-6 text-brand-royal mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Effective Time Management</h3>
                    <p className="text-muted-foreground">Develop strategies to complete each section efficiently and confidently within the time limit.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-royal mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Authentic Practice Tests</h3>
                    <p className="text-muted-foreground">Work through full practice exams to familiarize yourself with the format and build stamina.</p>
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
                  Prepare with Us
                </a>
              </Button>
            </div>
            
            <div className="order-first lg:order-last">
              <Card className="service-card overflow-hidden">
                <CardContent className="p-0">
                  <img 
                    src={examPrepTextbooks} 
                    alt="Official Cambridge exam preparation textbooks"
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
              Ready to Ace Your Exam?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Let's create a study plan that's right for you. Book a consultation to discuss your exam goals.
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

export default ExamPreparation;
