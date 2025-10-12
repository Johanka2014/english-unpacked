import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, MessageCircle, GraduationCap } from "lucide-react";
import businessMeeting from "@/assets/business-meeting.jpg";
import conversation from "@/assets/conversation.jpg";
import examPrep from "@/assets/exam-prep.jpg";

const ServicesSection = () => {
  const services = [
    {
      id: "business",
      icon: <Briefcase className="w-8 h-8 text-brand-royal" />,
      title: "Business English",
      description: "Master the language of the corporate world. From meetings and presentations to emails and negotiations, we'll equip you with the skills you need to succeed professionally.",
      image: businessMeeting,
      link: "/business-english"
    },
    {
      id: "conversation",
      icon: <MessageCircle className="w-8 h-8 text-brand-royal" />,
      title: "Conversational English",
      description: "Build fluency and confidence for everyday conversations. We focus on practical, real-world scenarios to help you communicate naturally and effectively.",
      image: conversation,
      link: "/conversational-english"
    },
    {
      id: "exam-prep",
      icon: <GraduationCap className="w-8 h-8 text-brand-royal" />,
      title: "Exam Preparation",
      description: "Get ready for language exams like FCE, CAE, and IELTS with targeted strategies and practice. We'll help you build the skills and confidence to achieve your best score.",
      image: examPrep,
      link: "/exam-preparation"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-brand-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 font-merriweather">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect program to achieve your English learning goals
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={service.id}
              id={service.id}
              className="service-card group overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden rounded-t-xl">
                <img 
                  src={service.image} 
                  alt={`${service.title} - ${service.description.substring(0, 80)}`}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3 mb-2">
                  {service.icon}
                  <CardTitle className="text-xl text-brand-navy group-hover:text-brand-royal transition-colors duration-200">
                    {service.title}
                  </CardTitle>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <CardDescription className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </CardDescription>
                
                <Button 
                  variant="outline" 
                  className="w-full border-brand-royal text-brand-royal hover:bg-brand-royal hover:text-white transition-all duration-200"
                  asChild
                >
                  <a href={service.link} target="_blank" rel="noopener noreferrer">
                    Learn More
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
