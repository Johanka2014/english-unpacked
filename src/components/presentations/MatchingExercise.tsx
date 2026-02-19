import { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface MatchPair {
  id: number;
  left: string;
  right: string;
}

interface MatchingExerciseProps {
  title: string;
  description: string;
  pairs: MatchPair[];
  leftLabel?: string;
  rightLabel?: string;
}

const MatchingExercise = ({ title, description, pairs, leftLabel = "Column A", rightLabel = "Column B" }: MatchingExerciseProps) => {
  const [selectedLeft, setSelectedLeft] = useState<number | null>(null);
  const [matched, setMatched] = useState<Set<number>>(new Set());
  const [feedback, setFeedback] = useState<string | null>(null);
  const [feedbackType, setFeedbackType] = useState<"correct" | "incorrect" | null>(null);

  const shuffledRight = useMemo(() => [...pairs].sort(() => Math.random() - 0.5), [pairs]);

  const handleLeftClick = (id: number) => {
    if (matched.has(id)) return;
    setSelectedLeft(id);
    setFeedback(null);
  };

  const handleRightClick = (id: number) => {
    if (matched.has(id) || selectedLeft === null) return;
    if (id === selectedLeft) {
      setMatched((prev) => new Set([...prev, id]));
      setSelectedLeft(null);
      setFeedback("Correct Match!");
      setFeedbackType("correct");
      if (matched.size + 1 === pairs.length) {
        setFeedback("Congratulations! You have matched all items.");
      }
    } else {
      setFeedback("Incorrect, try again.");
      setFeedbackType("incorrect");
      setSelectedLeft(null);
    }
  };

  return (
    <Card className="service-card">
      <CardContent className="p-6">
        <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">{title}</h3>
        <p className="text-muted-foreground mb-6">{description}</p>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2">
            <h4 className="font-semibold mb-2 text-center text-foreground">{leftLabel}</h4>
            <div className="space-y-2">
              {pairs.map((pair) => (
                <div
                  key={pair.id}
                  onClick={() => handleLeftClick(pair.id)}
                  className={`p-3 rounded-lg border cursor-pointer transition-all ${
                    matched.has(pair.id)
                      ? "bg-green-50 text-green-700 border-green-500 cursor-default"
                      : selectedLeft === pair.id
                      ? "bg-brand-royal text-white border-brand-navy"
                      : "bg-white border-border hover:border-brand-royal hover:bg-blue-50/50"
                  }`}
                >
                  {pair.left}
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h4 className="font-semibold mb-2 text-center text-foreground">{rightLabel}</h4>
            <div className="space-y-2">
              {shuffledRight.map((pair) => (
                <div
                  key={pair.id}
                  onClick={() => handleRightClick(pair.id)}
                  className={`p-3 rounded-lg border cursor-pointer transition-all ${
                    matched.has(pair.id)
                      ? "bg-green-50 text-green-700 border-green-500 cursor-default"
                      : "bg-white border-border hover:border-brand-royal hover:bg-blue-50/50"
                  }`}
                >
                  {pair.right}
                </div>
              ))}
            </div>
          </div>
        </div>
        {feedback && (
          <p className={`mt-4 text-center font-semibold ${feedbackType === "correct" ? "text-green-600" : "text-red-600"}`}>
            {feedback}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default MatchingExercise;
