import { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";

interface MatchPair {
  id: number;
  left: string;
  right: string;
  hint?: string;
}

interface MatchingExerciseProps {
  title: string;
  description: string;
  pairs: MatchPair[];
  leftLabel?: string;
  rightLabel?: string;
}

const shuffle = <T,>(arr: T[]): T[] => [...arr].sort(() => Math.random() - 0.5);

const MatchingExercise = ({
  title,
  description,
  pairs,
  leftLabel = "Column A",
  rightLabel = "Column B",
}: MatchingExerciseProps) => {
  const [selectedLeft, setSelectedLeft] = useState<number | null>(null);
  const [matched, setMatched] = useState<Set<number>>(new Set());
  const [feedback, setFeedback] = useState<string | null>(null);
  const [feedbackType, setFeedbackType] = useState<"correct" | "incorrect" | null>(null);
  const [shuffleSeed, setShuffleSeed] = useState(0);
  const [revealedHints, setRevealedHints] = useState<Set<number>>(new Set());

  const hasHints = useMemo(() => pairs.some((p) => p.hint), [pairs]);

  const shuffledLeft = useMemo(() => shuffle(pairs), [pairs, shuffleSeed]);
  const shuffledRight = useMemo(() => shuffle(pairs), [pairs, shuffleSeed]);

  const handleLeftClick = (id: number) => {
    if (matched.has(id)) return;
    setSelectedLeft(id);
    setFeedback(null);
  };

  const handleRightClick = (id: number) => {
    if (matched.has(id) || selectedLeft === null) return;
    if (id === selectedLeft) {
      const next = new Set([...matched, id]);
      setMatched(next);
      setSelectedLeft(null);
      if (next.size === pairs.length) {
        setFeedback("Congratulations! You have matched all items.");
      } else {
        setFeedback("Correct match!");
      }
      setFeedbackType("correct");
    } else {
      setFeedback("Incorrect, try again.");
      setFeedbackType("incorrect");
      setSelectedLeft(null);
    }
  };

  const toggleHint = (id: number) => {
    setRevealedHints((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const reshuffle = () => {
    setShuffleSeed((s) => s + 1);
    setSelectedLeft(null);
    setMatched(new Set());
    setRevealedHints(new Set());
    setFeedback(null);
  };

  return (
    <Card className="service-card">
      <CardContent className="p-6">
        <div className="flex items-start justify-between gap-3 mb-4">
          <div>
            <h3 className="text-2xl font-semibold mb-1 font-merriweather text-foreground">{title}</h3>
            {description && <p className="text-muted-foreground">{description}</p>}
          </div>
          <button
            onClick={reshuffle}
            className="text-xs px-3 py-1.5 rounded-md border border-border hover:bg-muted text-muted-foreground whitespace-nowrap"
            type="button"
          >
            Shuffle
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2">
            <h4 className="font-semibold mb-2 text-center text-foreground">{leftLabel}</h4>
            <div className="space-y-2">
              {shuffledLeft.map((pair) => {
                const isMatched = matched.has(pair.id);
                const isSelected = selectedLeft === pair.id;
                const hintShown = revealedHints.has(pair.id);
                return (
                  <div key={pair.id} className="space-y-1">
                    <div
                      onClick={() => handleLeftClick(pair.id)}
                      className={`p-3 rounded-lg border cursor-pointer transition-all flex items-center justify-between gap-2 ${
                        isMatched
                          ? "bg-green-50 text-green-700 border-green-500 cursor-default"
                          : isSelected
                          ? "bg-brand-royal text-white border-brand-navy"
                          : "bg-white border-border hover:border-brand-royal hover:bg-blue-50/50"
                      }`}
                    >
                      <span>{pair.left}</span>
                      {pair.hint && !isMatched && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleHint(pair.id);
                          }}
                          className={`shrink-0 p-1 rounded transition-colors ${
                            isSelected
                              ? "text-white/80 hover:text-white"
                              : "text-muted-foreground hover:text-brand-royal"
                          }`}
                          aria-label="Show hint"
                        >
                          <Lightbulb className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                    {pair.hint && hintShown && !isMatched && (
                      <p className="text-xs text-muted-foreground italic pl-3 flex items-start gap-1">
                        <Lightbulb className="w-3 h-3 mt-0.5 shrink-0 text-amber-500" />
                        <span>Hint: {pair.hint}</span>
                      </p>
                    )}
                  </div>
                );
              })}
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
