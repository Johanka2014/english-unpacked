import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
      style={{
        background: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("https://johanka2014.github.io/englishunpacked/london-hero.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/20 to-brand-royal/20"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Unlock Your English Potential
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
          Personalized, one-on-one English lessons designed to help you communicate with confidence.
        </p>
        <Button 
          size="lg" 
          className="hero-button animate-bounce-subtle"
          asChild
        >
          <a href="https://calendly.com/english-unpacked/sample-lesson" target="_blank" rel="noopener noreferrer">
            Book a Free Consultation
          </a>
        </Button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;