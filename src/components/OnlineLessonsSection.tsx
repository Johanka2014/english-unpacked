import { Card, CardContent } from "@/components/ui/card";
import { Monitor, Smartphone, Calendar, Headphones } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const OnlineLessonsSection = () => {
  const features = [
    {
      icon: <Monitor className="w-12 h-12 text-white" />,
      title: "Google Meet",
      description: "Join our interactive lessons via Google Meet for a seamless virtual experience."
    },
    {
      icon: <Smartphone className="w-12 h-12 text-white" />,
      title: "Teams",
      description: "Connect with me one-on-one through Teams for personalized English instruction."
    },
    {
      icon: <Calendar className="w-12 h-12 text-white" />,
      title: "Flexible Scheduling",
      description: "Choose from a variety of lesson times to fit your busy schedule."
    },
    {
      icon: <Headphones className="w-12 h-12 text-white" />,
      title: "High Quality Audio",
      description: "Enjoy clear, uninterrupted audio for an optimal learning experience."
    }
  ];

  return (
    <section 
      className="relative py-20 text-white overflow-hidden"
      style={{
        background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("${heroBackground}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/20 to-brand-royal/20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-merriweather">
            Lessons via Google Meet or Teams
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white font-merriweather">
                  {feature.title}
                </h3>
                <p className="text-white/90 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OnlineLessonsSection;