import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import LearningJourneySection from "@/components/LearningJourneySection";
import OnlineLessonsSection from "@/components/OnlineLessonsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <LearningJourneySection />
      <OnlineLessonsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
