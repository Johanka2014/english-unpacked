import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare, CheckCircle2, XCircle, RotateCcw } from "lucide-react";

interface Gap {
  id: number;
  answer: string;
}

const gaps: Gap[] = [
  { id: 1, answer: "joint ventures" },
  { id: 2, answer: "distributors" },
  { id: 3, answer: "agents" },
];

const sentences = [
  {
    id: 1,
    before: "",
    after:
      " are businesses which are owned by two companies. One is often a foreign company which wants to break into the local market. The other is often a local company with contacts, infrastructure and knowledge of the market.",
  },
  {
    id: 2,
    before: "",
    after:
      " buy your products at the best price you can give them, and then sell them again to other customers at the best price they can get. They have local contacts and knowledge of the local market.",
  },
  {
    id: 3,
    before: "",
    after:
      " will sell your products on commission. They are usually local people or firms with contacts and knowledge of the local market. They do not buy or own your products before selling them.",
  },
];

const TalkingPointUnit11 = () => {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);

  const handleChange = (id: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const isCorrect = (id: number) => {
    const gap = gaps.find((g) => g.id === id);
    return gap && answers[id]?.trim().toLowerCase() === gap.answer.toLowerCase();
  };

  const checkAnswers = () => setChecked(true);

  const reset = () => {
    setAnswers({});
    setChecked(false);
  };

  const totalCorrect = gaps.filter((g) => isCorrect(g.id)).length;

  return (
    <div className="space-y-8">
      <Card className="service-card">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <MessageSquare className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-semibold font-merriweather text-foreground">
              Agents and Distributors
            </h3>
          </div>

          {/* Introduction */}
          <div className="bg-primary/10 rounded-lg p-5 mb-6 border border-primary/20">
            <p className="text-foreground font-medium">
              Companies who want to launch their products in a new market, often in another country,
              may use <em className="font-semibold">agents</em> or{" "}
              <em className="font-semibold">distributors</em>, or set up a{" "}
              <em className="font-semibold italic">joint venture</em>. Write one of the three words
              in each gap below.
            </p>
          </div>

          {/* Gap-fill exercise */}
          <div className="space-y-6 mb-6">
            {sentences.map((s) => {
              const gap = gaps.find((g) => g.id === s.id);
              const correct = checked && isCorrect(s.id);
              const incorrect = checked && !isCorrect(s.id);

              return (
                <div key={s.id} className="flex gap-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm flex-shrink-0 mt-1">
                    {s.id}
                  </span>
                  <div className="flex-1">
                    <p className="text-foreground leading-relaxed">
                      {s.before}
                      <Input
                        value={answers[s.id] || ""}
                        onChange={(e) => handleChange(s.id, e.target.value)}
                        disabled={checked}
                        className={`inline-block w-40 mx-1 align-baseline ${
                          correct
                            ? "border-green-500 bg-green-50"
                            : incorrect
                            ? "border-red-500 bg-red-50"
                            : ""
                        }`}
                        placeholder="............"
                      />
                      {correct && (
                        <CheckCircle2 className="inline h-4 w-4 text-green-600 ml-1" />
                      )}
                      {incorrect && (
                        <>
                          <XCircle className="inline h-4 w-4 text-red-600 ml-1" />
                          <span className="text-sm text-red-600 ml-1">
                            → {gap?.answer}
                          </span>
                        </>
                      )}
                      {s.after}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            {!checked ? (
              <Button onClick={checkAnswers} className="bg-primary hover:bg-primary/90">
                Check Answers
              </Button>
            ) : (
              <>
                <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                  Score: {totalCorrect}/{gaps.length}
                </div>
                <Button variant="outline" onClick={reset} className="gap-2">
                  <RotateCcw className="h-4 w-4" /> Try Again
                </Button>
              </>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Discussion section */}
      <Card className="service-card">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <MessageSquare className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-semibold font-merriweather text-foreground">
              Discussion
            </h3>
          </div>
          <div className="bg-primary/10 rounded-lg p-5 border border-primary/20">
            <p className="text-foreground font-medium text-lg">
              Discuss in small groups what you think the advantages and disadvantages of each are.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TalkingPointUnit11;
