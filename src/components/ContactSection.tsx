import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MessageSquare } from "lucide-react";

const ContactSection = () => {
  const contactOptions = [
    {
      icon: <Calendar className="w-8 h-8 text-brand-royal" />,
      title: "Book a Free Consultation",
      description: "Schedule a 30-minute call to discuss your English learning goals and see if we're a good fit.",
      action: "Schedule Now",
      link: "https://calendly.com/english-unpacked/consultation",
      primary: true
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-brand-royal" />,
      title: "Have Questions?",
      description: "Get in touch to learn more about our teaching approach and available programs.",
      action: "Send Message",
      link: "mailto:info@englishunpacked.com",
      primary: false
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-brand-light/30 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take the first step towards improving your English. Let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {contactOptions.map((option, index) => (
            <Card 
              key={index}
              className={`service-card group ${option.primary ? 'ring-2 ring-brand-royal' : ''}`}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-brand-light rounded-full w-fit">
                  {option.icon}
                </div>
                <CardTitle className="text-xl text-brand-navy mb-2">
                  {option.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {option.description}
                </p>
                
                <Button 
                  variant={option.primary ? "default" : "outline"}
                  size="lg"
                  className={option.primary 
                    ? "bg-brand-royal hover:bg-brand-navy transition-colors duration-200 w-full" 
                    : "border-brand-royal text-brand-royal hover:bg-brand-royal hover:text-white transition-all duration-200 w-full"
                  }
                  asChild
                >
                  <a href={option.link} target="_blank" rel="noopener noreferrer">
                    {option.action}
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

export default ContactSection;