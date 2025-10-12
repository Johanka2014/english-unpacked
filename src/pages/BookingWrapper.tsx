import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

const BookingWrapper = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO 
        title="Book Free Consultation - Schedule Your English Lesson"
        description="Book a free consultation to discuss your English learning goals. Personalized lessons for Business English, exam prep, and conversational practice. Start your journey today."
        canonical="https://english-unpacked.lovable.app/booking"
      />
      <Navigation />
      
      <main className="flex-1 flex flex-col">
        <div className="bg-brand-navy text-white py-4">
          <div className="container mx-auto px-4 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold font-merriweather">Book Your Consultation</h1>
              <p className="text-white/80">Schedule a free consultation to discuss your English learning goals</p>
            </div>
            <Button 
              variant="outline" 
              size="sm"
              className="border-white text-white hover:bg-white hover:text-brand-navy"
              asChild
            >
              <a href="https://calendly.com/english-unpacked/consultation" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Open in New Tab
              </a>
            </Button>
          </div>
        </div>
        
        <div className="flex-1 bg-white">
          <iframe
            src="https://calendly.com/english-unpacked/consultation"
            width="100%"
            height="100%"
            frameBorder="0"
            title="Book Consultation"
            className="min-h-[600px]"
            loading="lazy"
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BookingWrapper;