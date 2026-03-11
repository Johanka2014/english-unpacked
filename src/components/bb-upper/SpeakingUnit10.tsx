import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, ChevronDown, ChevronUp, MessageSquare } from "lucide-react";

const SpeakingUnit10 = () => {
  const [showPairA, setShowPairA] = useState(false);
  const [showPairB, setShowPairB] = useState(false);

  return (
    <div className="space-y-8">
      {/* Introduction */}
      <Card className="service-card">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <Users className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-semibold font-merriweather text-foreground">
              Role-play: Advice about starting a business
            </h3>
          </div>
          <p className="text-muted-foreground mb-4">
            You are entrepreneurs who are thinking of starting a new business, but you need advice
            on how to finance it, so you are going to consult some small business advisors.
          </p>
          <p className="text-sm text-muted-foreground italic">
            Work in pairs. One pair plays the <strong>Business Advisors</strong>, the other plays
            the <strong>Entrepreneurs</strong>. Click your role card below to see your instructions.
          </p>
        </CardContent>
      </Card>

      {/* Pair A - Business Advisors */}
      <Card className="service-card border-primary/30">
        <CardContent className="p-0">
          <button
            onClick={() => setShowPairA(!showPairA)}
            className="w-full p-6 flex items-center justify-between text-left"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                A
              </span>
              <div>
                <h4 className="font-semibold text-foreground text-lg">Business Advisors</h4>
                <p className="text-sm text-muted-foreground">Click to reveal your role card</p>
              </div>
            </div>
            {showPairA ? (
              <ChevronUp className="h-5 w-5 text-muted-foreground" />
            ) : (
              <ChevronDown className="h-5 w-5 text-muted-foreground" />
            )}
          </button>

          {showPairA && (
            <div className="px-6 pb-6 border-t border-border pt-4 space-y-4 animate-in fade-in slide-in-from-top-2">
              <p className="text-foreground">
                You are <strong>business advisors</strong>. You will give advice to a pair of
                entrepreneurs about how to finance the small printing business they want to start.
              </p>

              <div className="bg-muted/50 rounded-lg p-4">
                <p className="font-medium text-foreground mb-2">
                  Before talking to them, decide what types of finance might be suitable:
                </p>
                <div className="flex flex-wrap gap-2">
                  {["A bank loan", "A loan from family or friends", "A mortgage", "Personal savings"].map(
                    (option) => (
                      <span
                        key={option}
                        className="bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-medium"
                      >
                        {option}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div>
                <p className="font-medium text-foreground mb-2">You will need to ask them about:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                  <li>The type of business</li>
                  <li>If they have done market research</li>
                  <li>Their personal financial circumstances</li>
                </ul>
              </div>

              <div className="bg-accent/50 rounded-lg p-4 border border-accent">
                <div className="flex items-center gap-2 mb-2">
                  <MessageSquare className="h-4 w-4 text-primary" />
                  <p className="font-medium text-foreground text-sm">Your task</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Prepare some questions and when you are ready, meet the entrepreneurs, discuss
                  their plans with them and give them your best advice.
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Pair B - Entrepreneurs */}
      <Card className="service-card border-primary/30">
        <CardContent className="p-0">
          <button
            onClick={() => setShowPairB(!showPairB)}
            className="w-full p-6 flex items-center justify-between text-left"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                B
              </span>
              <div>
                <h4 className="font-semibold text-foreground text-lg">Entrepreneurs</h4>
                <p className="text-sm text-muted-foreground">Click to reveal your role card</p>
              </div>
            </div>
            {showPairB ? (
              <ChevronUp className="h-5 w-5 text-muted-foreground" />
            ) : (
              <ChevronDown className="h-5 w-5 text-muted-foreground" />
            )}
          </button>

          {showPairB && (
            <div className="px-6 pb-6 border-t border-border pt-4 space-y-4 animate-in fade-in slide-in-from-top-2">
              <p className="text-foreground">
                You want to start a <strong>photocopying and printing firm</strong> specialising in
                leaflets, small brochures, business cards, etc.
              </p>

              <div className="bg-muted/50 rounded-lg p-4 space-y-3">
                <div>
                  <p className="text-sm font-medium text-foreground">Your personal financial circumstances:</p>
                  <p className="text-muted-foreground text-sm">
                    Between you, you have savings of <strong>€50,000</strong>.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Financing requirements:</p>
                  <p className="text-muted-foreground text-sm mb-2">
                    Approximately <strong>€70,000</strong> if you are ready to use your personal
                    savings. This extra money is for:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground text-sm space-y-0.5">
                    <li>Equipment</li>
                    <li>Preparing your premises</li>
                    <li>Initial advertising</li>
                    <li>Materials, etc.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-accent/50 rounded-lg p-4 border border-accent">
                <div className="flex items-center gap-2 mb-2">
                  <MessageSquare className="h-4 w-4 text-primary" />
                  <p className="font-medium text-foreground text-sm">Your task</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Work together and decide what questions to ask and what advice you need from the
                  advisors. When you are ready, explain your business idea to the business advisors,
                  and get their advice on how best to finance your business.
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default SpeakingUnit10;
