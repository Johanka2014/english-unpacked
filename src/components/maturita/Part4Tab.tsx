import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, MessageCircle, Lightbulb } from "lucide-react";
import type { MaturitaTopic } from "@/data/maturitaTopics";

interface Part4TabProps {
  topic: MaturitaTopic;
}

const Part4Tab = ({ topic }: Part4TabProps) => {
  const part4 = topic.part4;

  if (!part4) {
    return (
      <Card className="border-2 border-dashed border-muted">
        <CardContent className="py-8">
          <p className="text-muted-foreground text-center">Part 4 practice coming soon for this topic.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-2 font-merriweather">
          Interactive Conversation
        </h2>
        <p className="text-muted-foreground">
          In Part 4 you and the examiner talk together for about 3 minutes. The examiner plays the role of your English-speaking friend and starts the conversation.
        </p>
      </div>

      {/* Scenario */}
      <Card className="border-2 border-brand-royal">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-royal text-white font-bold text-sm shrink-0">4</span>
            <div>
              <CardTitle className="text-xl font-merriweather">The Situation</CardTitle>
              <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                <Clock className="w-3.5 h-3.5" /> 3 minutes
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-accent/30 rounded-lg p-4 border border-accent">
            <p className="text-foreground leading-relaxed">{part4.scenario}</p>
          </div>

          <div className="bg-brand-royal/5 border-l-4 border-brand-royal rounded-md p-4">
            <p className="font-semibold text-brand-royal flex items-center gap-2 mb-1">
              <MessageCircle className="w-4 h-4" /> The examiner starts:
            </p>
            <p className="italic text-foreground">"{part4.starter}"</p>
          </div>

          <div>
            <p className="font-semibold text-foreground mb-2">The following ideas may help you:</p>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1 pl-1">
              {part4.promptPoints.map((point, i) => (
                <li key={i} className="text-muted-foreground flex items-start gap-2">
                  <span className="text-brand-royal mt-0.5">•</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Pictures */}
      <Card className="border-2 border-accent">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-merriweather">The following pictures may help you</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            {part4.images.map((img) => (
              <Card key={img.label} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={img.src}
                      alt={img.description}
                      className="w-full h-40 sm:h-48 object-cover"
                      loading="lazy"
                    />
                    <span className="absolute top-2 left-2 bg-brand-royal text-white text-xs font-bold px-2 py-1 rounded">
                      {img.label}
                    </span>
                  </div>
                  <div className="p-3">
                    <p className="text-sm text-muted-foreground">{img.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-xs text-muted-foreground italic mt-3 text-center">
            …and any other ideas of your own.
          </p>
        </CardContent>
      </Card>

      {/* Tips */}
      {part4.tips && part4.tips.length > 0 && (
        <Card className="border-2 border-orange-300 bg-orange-50">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-merriweather flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-orange-600" />
              Tips for the conversation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {part4.tips.map((tip, i) => (
                <li key={i} className="text-foreground flex items-start gap-2">
                  <span className="text-orange-600 mt-0.5 font-bold">{i + 1}.</span>
                  {tip}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Part4Tab;
