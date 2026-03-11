import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Headphones, PenLine } from "lucide-react";

const AUDIO_SRC = "https://johanka2014.github.io/bus_bench/mod_10/19_Unit_10.mp3";

const TalkingPointUnit10 = () => {
  return (
    <div className="space-y-8">
      <Card className="service-card">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <MessageSquare className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-semibold font-merriweather text-foreground">
              Talking Point
            </h3>
          </div>

          <div className="bg-primary/10 rounded-lg p-5 mb-6 border border-primary/20">
            <p className="text-foreground font-medium text-lg text-center italic">
              "What is important when looking for finance to start up a business?"
            </p>
          </div>

          <div className="space-y-5">
            {/* Step 1 */}
            <div className="flex gap-4">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm flex-shrink-0">
                1
              </span>
              <div>
                <p className="text-foreground font-medium mb-1">Discuss in pairs</p>
                <p className="text-sm text-muted-foreground">
                  Work in pairs and discuss the question above. While you are talking,{" "}
                  <strong>take notes</strong> of your ideas.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm flex-shrink-0">
                2
              </span>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <Headphones className="h-4 w-4 text-primary" />
                  <p className="text-foreground font-medium">Listen to Lewis's answer</p>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Listen to Lewis's answer to the same question and note down what he said.
                </p>
                <audio controls src={AUDIO_SRC} className="w-full" />
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm flex-shrink-0">
                3
              </span>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <PenLine className="h-4 w-4 text-primary" />
                  <p className="text-foreground font-medium">Compare and add ideas</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Add any of Lewis's ideas which you agree with to your notes.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-4">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm flex-shrink-0">
                4
              </span>
              <div>
                <p className="text-foreground font-medium mb-1">Change partners and speak</p>
                <p className="text-sm text-muted-foreground">
                  Change partners and take turns to talk for <strong>one minute</strong> to your new
                  partner about what is important when starting up in business. When your partner is
                  speaking, you should listen without interrupting.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TalkingPointUnit10;
