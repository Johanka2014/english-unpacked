import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, Clock, Award, Heart } from "lucide-react";
import joannaPortrait from "@/assets/joanna-portrait.jpg";

const AboutSection = () => {
  const features = [
    {
      icon: <Clock className="w-6 h-6 text-brand-royal" />,
      title: "13+ Years Experience",
      description: "Teaching English since 2011"
    },
    {
      icon: <Award className="w-6 h-6 text-brand-royal" />,
      title: "TEFL Qualified",
      description: "Professional certification"
    },
    {
      icon: <Heart className="w-6 h-6 text-brand-royal" />,
      title: "Personalized Approach",
      description: "Tailored to your needs"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image and features */}
          <div className="space-y-8 animate-slide-in">
            <div className="relative">
              <img 
                src={joannaPortrait}
                alt="Joanna, English tutor"
                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full mx-auto shadow-[var(--shadow-card-hover)] border-4 border-white"
              />
              <div className="absolute -bottom-4 -right-4 bg-brand-royal text-white p-3 rounded-full shadow-lg">
                <Quote className="w-6 h-6" />
              </div>
            </div>
            
            <div className="grid gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="bg-brand-light p-3 rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-navy">{feature.title}</h4>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 animate-fade-in">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
                Hi, I'm Joanna
              </h2>
              <div className="w-16 h-1 bg-brand-royal mb-6"></div>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                After a decade in the fast-paced electronics industry, I discovered my true passion: 
                helping people unlock their potential through language. I moved to the Czech Republic, 
                earned my TEFL qualification in 2011, and I've been teaching English ever since.
              </p>
              
              <p>
                I believe learning English should be engaging, practical, and tailored to your unique 
                goals. Whether you're preparing for a business presentation, planning to travel, or 
                working toward an exam, I'm here to guide you every step of the way.
              </p>

              <blockquote className="border-l-4 border-brand-royal pl-6 italic text-brand-navy font-medium">
                "My mission is to help you communicate with confidence and achieve your English learning goals 
                in a supportive, encouraging environment."
              </blockquote>
            </div>

            <div className="pt-4">
              <Button 
                size="lg" 
                className="bg-brand-royal hover:bg-brand-navy transition-colors duration-200"
                asChild
              >
                <a href="https://calendly.com/english-unpacked/sample-lesson" target="_blank" rel="noopener noreferrer">
                  Start Your Journey
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;