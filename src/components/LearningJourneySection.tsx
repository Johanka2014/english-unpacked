import { Card, CardContent } from "@/components/ui/card";

const LearningJourneySection = () => {
  const steps = [
    {
      title: "Assess",
      description: "We'll start with a friendly chat to understand your current level, needs, and learning style."
    },
    {
      title: "Customize", 
      description: "I'll create a personalized curriculum with materials and activities that are perfect for you."
    },
    {
      title: "Succeed",
      description: "Through one-on-one sessions, you'll see your skills and confidence grow lesson by lesson."
    }
  ];

  return (
    <section className="py-20 pb-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-brand-navy font-merriweather">
            Your Learning Journey
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="bg-blue-50 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-brand-royal mb-4 font-merriweather">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningJourneySection;