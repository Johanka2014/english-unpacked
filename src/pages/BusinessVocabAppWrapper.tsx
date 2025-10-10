import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const BusinessVocabAppWrapper = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="flex-1 flex flex-col">
        <div className="bg-brand-royal text-white py-4">
          <div className="container mx-auto px-4 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold font-merriweather">Business Vocabulary App</h1>
              <p className="text-white/80">Interactive learning exercises for business English vocabulary</p>
            </div>
            <Button 
              variant="secondary" 
              size="sm"
              className="bg-white/10 text-white border border-white/20 hover:bg-white hover:text-brand-royal transition-colors duration-200"
              asChild
            >
              <a href="https://business-benchmark-vocabulary.lovable.app/" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Open in New Tab
              </a>
            </Button>
          </div>
        </div>
        
        <div className="flex-1 bg-white">
          <iframe
            src="https://business-benchmark-vocabulary.lovable.app/"
            width="100%"
            height="100%"
            frameBorder="0"
            title="Business Vocabulary App"
            className="min-h-[600px]"
            loading="lazy"
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BusinessVocabAppWrapper;