import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Image } from "lucide-react";
import type { MaturitaTopic } from "@/data/maturitaTopics";

const defaultPromptPoints = ["People", "Place", "Clothes", "Activities", "Atmosphere", "Other"];

interface Part2TabProps {
  topic: MaturitaTopic;
}

const Part2Tab = ({ topic }: Part2TabProps) => {
  const part2 = topic.part2;
  const task1PromptPoints = part2?.task1.promptPoints || defaultPromptPoints;
  const task2PromptPoints = part2?.task2.promptPoints || defaultPromptPoints;

  if (!part2) {
    return (
      <Card className="border-2 border-dashed border-muted">
        <CardContent className="py-8">
          <p className="text-muted-foreground text-center">Part 2 practice coming soon for this topic.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-2 font-merriweather">
          Describing & Comparing Images
        </h2>
        <p className="text-muted-foreground">
          Practise describing pictures, comparing them, and discussing the topic.
        </p>
      </div>

      {/* Task 1 */}
      <Card className="border-2 border-accent">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-royal text-white font-bold text-sm shrink-0">1</span>
            <div>
              <CardTitle className="text-xl font-merriweather">Describe a Picture</CardTitle>
              <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                <Clock className="w-3.5 h-3.5" /> 1.5 minutes
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-accent/30 rounded-lg p-4 border border-accent">
            <p className="text-muted-foreground italic">
              "Which picture would you like to talk about? Describe it, please. Are you ready?"
            </p>
          </div>

          <div>
            <p className="font-semibold text-foreground mb-2">Prompt points:</p>
            <div className="flex flex-wrap gap-2">
              {task1PromptPoints.map((point) => (
                <span key={point} className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium">
                  {point}
                </span>
              ))}
            </div>
          </div>

          {/* Images */}
          {part2.task1.images && part2.task1.images.length > 0 ? (
            <div className="grid sm:grid-cols-2 gap-4">
              {part2.task1.images.map((img, i) => (
                <Card key={i} className="overflow-hidden">
                  <CardContent className="p-0">
                    <img src={img.src} alt={img.description} className="w-full h-48 object-cover" loading="lazy" />
                    <div className="p-3">
                      <p className="font-semibold text-foreground">{img.label}</p>
                      <p className="text-sm text-muted-foreground">{img.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="border-2 border-dashed border-muted">
                <CardContent className="py-12 flex flex-col items-center justify-center text-muted-foreground">
                  <Image className="w-8 h-8 mb-2" />
                  <p className="text-sm">Picture A – Coming soon</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-dashed border-muted">
                <CardContent className="py-12 flex flex-col items-center justify-center text-muted-foreground">
                  <Image className="w-8 h-8 mb-2" />
                  <p className="text-sm">Picture B – Coming soon</p>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Follow-up questions */}
          <div>
            <p className="font-semibold text-foreground mb-2">Follow-up questions:</p>
            <ul className="space-y-1 pl-1">
              {part2.task1.followUpQuestions.map((q, i) => (
                <li key={i} className="text-muted-foreground flex items-start gap-2">
                  <span className="text-brand-royal mt-0.5">•</span>
                  {q}
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Task 2 */}
      <Card className="border-2 border-accent bg-accent/30">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-royal text-white font-bold text-sm shrink-0">2</span>
            <div>
              <CardTitle className="text-xl font-merriweather">Compare Pictures</CardTitle>
              <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                <Clock className="w-3.5 h-3.5" /> 1 minute
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-background rounded-lg p-4 border">
            <p className="text-muted-foreground italic">
              "Have a look at both pictures once more and compare them. Are you ready?"
            </p>
          </div>

          <div>
            <p className="font-semibold text-foreground mb-2">Prompt points:</p>
            <div className="flex flex-wrap gap-2">
              {task2PromptPoints.map((point) => (
                <span key={point} className="px-3 py-1 bg-background text-foreground rounded-full text-sm font-medium border">
                  {point}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="font-semibold text-foreground mb-2">Comparison questions:</p>
            <ul className="space-y-1 pl-1">
              {part2.task2.comparisonQuestions.map((q, i) => (
                <li key={i} className="text-muted-foreground flex items-start gap-2">
                  <span className="text-brand-royal mt-0.5">•</span>
                  {q}
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Task 3 */}
      <Card className="border-2 border-accent">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-royal text-white font-bold text-sm shrink-0">3</span>
            <div>
              <CardTitle className="text-xl font-merriweather">Topic Discussion</CardTitle>
              <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                <Clock className="w-3.5 h-3.5" /> 1.5 minutes
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-accent/30 rounded-lg p-4 border border-accent">
            <p className="text-muted-foreground italic">
              "Now, please start talking about {topic.title.toLowerCase()}. Are you ready?"
            </p>
          </div>

          <div className="bg-background rounded-lg p-4 border">
            <p className="font-semibold text-foreground mb-1">Discussion question:</p>
            <p className="text-foreground text-lg">{part2.task3.question}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Part2Tab;
