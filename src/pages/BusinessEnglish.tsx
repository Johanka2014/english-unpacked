import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Laptop, CheckCircle, ExternalLink, Plane } from "lucide-react";
import businessBenchmarkImage from "@/assets/business-benchmark.jpg";
import businessVocabAppImage from "@/assets/business-vocab-app-thumbnail.jpg";
import businessMeetingImage from "@/assets/business-meeting.webp";
import heroBackground from "@/assets/hero-background.webp";
import SEO from "@/components/SEO";

const BusinessEnglish = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Business English Lessons",
    "description": "Master professional communication with comprehensive Business English training including meetings, presentations, emails, and negotiations",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "English Unpacked",
      "url": "https://english-unpacked.lovable.app"
    },
    "courseMode": "online",
    "educationalLevel": "Intermediate to Advanced",
    "teaches": "Business English communication, professional writing, corporate vocabulary, presentation skills"
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Business English Lessons - Professional Communication Training"
        description="Master business English with one-on-one lessons. Learn professional communication for meetings, presentations, emails & negotiations. Interactive apps + textbooks. Book consultation."
        canonical="https://english-unpacked.lovable.app/business-english"
        schema={schema}
      />
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
              </div>

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

      {/* Business Travel English Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-first lg:order-first">
              <Card className="service-card overflow-hidden">
                <CardContent className="p-0">
                  <img 
                    src={businessMeetingImage} 
                    alt="Business professionals in meeting discussing travel scenarios and emergency situations"
                    className="w-full h-auto object-cover"
                  />
                </CardContent>
              </Card>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6 font-merriweather">
                Business Travel English
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Prepare for any travel challenge with confidence. Master essential phrases and communication strategies for handling disruptions, emergencies, and unexpected situations abroad.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                From flight delays to lost luggage, car rental disputes to hotel room issues—learn how to navigate challenging situations professionally and effectively in English.
              </p>

              <Button 
                size="lg" 
                className="bg-brand-royal hover:bg-brand-navy transition-colors duration-200"
                asChild
              >
                <a href="/business-travel">
                  <Plane className="w-5 h-5 mr-2" />
                  Explore Travel Scenarios
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* English for Presentations Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-first lg:order-last">
              <Card className="service-card overflow-hidden">
                <CardContent className="p-0">
                  <img 
                    src={businessVocabAppImage} 
                    alt="English for Presentations interactive learning exercises"
                    className="w-full h-auto object-cover"
                  />
                </CardContent>
              </Card>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6 font-merriweather">
                English for Presentations
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Master the art of presenting in English. From welcoming your audience and structuring your talk 
                to creating attention-grabbing openings and dealing with nervousness — build the confidence to 
                deliver impactful business presentations.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Practice with interactive exercises including fill-in-the-blanks, drag-and-drop activities, 
                matching exercises, listening tasks, and more — all designed around real presentation scenarios.
              </p>

              <Button 
                size="lg" 
                className="bg-brand-royal hover:bg-brand-navy transition-colors duration-200"
                asChild
              >
                <a href="/presentations">
                  <Laptop className="w-5 h-5 mr-2" />
                  Start Presentation Practice
                </a>
              </Button>
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
