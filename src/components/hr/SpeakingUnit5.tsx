import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const trendWords = {
  upward: ["increase", "rise", "go up", "grow", "improve"],
  downward: ["decrease", "fall", "go down", "decline", "drop"],
};

const agreeing = [
  "I entirely agree.",
  "I'm inclined to agree with you on that.",
  "Yes, but have you considered ...?",
  "I'm afraid I can't go along with that.",
  "Sorry, but I really can't agree.",
];

const interrupting = [
  "Could I just say that ...?",
  "I'd like to add a point here.",
  "Excuse me, can I just come in here?",
  "Sorry, but may I just clarify a point before we go on?",
];

const letterParts = [
  { id: 1, text: "Dear Board Members," },
  { id: 2, text: "At a meeting of the Remuneration Committee last week, it has been noted that:" },
  { id: 3, text: "We would recommend that the attached be introduced over the next two years." },
  { id: 4, text: "If you require any further information, please let us know." },
  { id: 5, text: "We look forward to your input/comments." },
  { id: 6, text: "Best wishes / Yours faithfully," },
  { id: 7, text: "Remuneration Committee" },
];

const SpeakingUnit5 = () => {
  const [showTrends, setShowTrends] = useState(false);
  const [showLetterOrder, setShowLetterOrder] = useState(false);

  return (
    <div className="space-y-8">
      {/* Agreeing & Disagreeing */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">Agreeing and Disagreeing</h3>
          <p className="text-muted-foreground mb-4">Use these phrases when discussing salary reviews and benefits packages.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-muted/30 rounded-lg">
              <h4 className="font-semibold text-foreground mb-2">Agreeing & Disagreeing</h4>
              <ul className="space-y-2">
                {agreeing.map((p, i) => <li key={i} className="text-muted-foreground text-sm">• {p}</li>)}
              </ul>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg">
              <h4 className="font-semibold text-foreground mb-2">Interrupting</h4>
              <ul className="space-y-2">
                {interrupting.map((p, i) => <li key={i} className="text-muted-foreground text-sm">• {p}</li>)}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Trends Vocabulary */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">Talking About Trends</h3>
          <p className="text-muted-foreground mb-4">Can you remember the words used to talk about trends in salary reviews?</p>
          <Button onClick={() => setShowTrends(!showTrends)} variant="outline" className="mb-4">
            {showTrends ? "Hide" : "Show"} Trend Words
          </Button>
          {showTrends && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="font-semibold text-green-700 mb-2">↑ Upward Movement</h4>
                <div className="flex flex-wrap gap-2">
                  {trendWords.upward.map((w) => (
                    <span key={w} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">{w}</span>
                  ))}
                </div>
              </div>
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <h4 className="font-semibold text-red-700 mb-2">↓ Downward Movement</h4>
                <div className="flex flex-wrap gap-2">
                  {trendWords.downward.map((w) => (
                    <span key={w} className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">{w}</span>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="mt-4 p-4 bg-muted/30 rounded-lg">
            <h4 className="font-semibold text-foreground mb-2">Did You Know?</h4>
            <p className="text-muted-foreground text-sm">
              In the UK a salary increase is also called a <strong>rise</strong>. It is called a <strong>raise</strong> in the US.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Formal Letter Structure */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">Remuneration Committee Letter</h3>
          <p className="text-muted-foreground mb-4">Put the parts of this formal letter from the Remuneration Committee to the Board in the correct order.</p>
          <Button onClick={() => setShowLetterOrder(!showLetterOrder)} variant="outline" className="mb-4">
            {showLetterOrder ? "Hide" : "Show"} Correct Order
          </Button>
          <div className="space-y-2">
            {letterParts.map((part) => (
              <div key={part.id} className={`p-3 border rounded-lg ${showLetterOrder ? "border-green-300 bg-green-50" : "border-border"}`}>
                <span className="text-sm font-mono text-primary mr-2">{part.id}.</span>
                <span className="text-muted-foreground">{part.text}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Role-play */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">Role-play: Salary Review Meeting</h3>
          <p className="text-muted-foreground mb-4">Work with a partner. One of you is Sophie (Head of HR), the other is Tim (Department Manager). Conduct a salary review meeting using the useful language from this unit.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
              <h4 className="font-semibold text-foreground mb-2">Partner A: Sophie (Head of HR)</h4>
              <ul className="space-y-1 text-muted-foreground text-sm">
                <li>• Review salary trends for Tim's department</li>
                <li>• Ask about staff developments and concerns</li>
                <li>• Discuss the 5% salary increase proposal</li>
                <li>• Request recommendations on benefits</li>
              </ul>
            </div>
            <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
              <h4 className="font-semibold text-foreground mb-2">Partner B: Tim (Department Manager)</h4>
              <ul className="space-y-1 text-muted-foreground text-sm">
                <li>• Report on staff working hours and concerns</li>
                <li>• Discuss vulnerability in your department</li>
                <li>• Propose salary review changes</li>
                <li>• Come back with recommendations</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SpeakingUnit5;
