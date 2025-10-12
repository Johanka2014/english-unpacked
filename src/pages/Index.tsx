import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import LearningJourneySection from "@/components/LearningJourneySection";
import OnlineLessonsSection from "@/components/OnlineLessonsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "English Unpacked",
        "url": "https://english-unpacked.lovable.app",
        "logo": "https://english-unpacked.lovable.app/favicon.png",
        "description": "Personalized one-on-one English lessons for business professionals and exam preparation",
        "founder": {
          "@type": "Person",
          "name": "Joanna",
          "jobTitle": "TEFL Qualified English Teacher",
          "description": "Experienced English teacher with 13+ years of teaching since 2011"
        },
        "areaServed": "Worldwide",
        "availableLanguage": "English"
      },
      {
        "@type": "EducationalOrganization",
        "name": "English Unpacked",
        "description": "Online English tutoring service specializing in business English, conversational English, and exam preparation for FCE, CAE, and CPE",
        "offers": [
          {
            "@type": "Course",
            "name": "Business English Lessons",
            "description": "Professional English communication training for the corporate world"
          },
          {
            "@type": "Course",
            "name": "Conversational English",
            "description": "Build fluency and confidence for everyday conversations"
          },
          {
            "@type": "Course",
            "name": "Exam Preparation",
            "description": "Comprehensive preparation for FCE, CAE, CPE, and IELTS exams"
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Online English Lessons - One-on-One Tutoring"
        description="Personalized one-on-one English lessons with TEFL-qualified teacher. Business English, conversational practice, and exam prep for FCE, CAE, IELTS. Book free consultation."
        canonical="https://english-unpacked.lovable.app/"
        schema={schema}
      />
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
