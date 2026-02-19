import { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface MatchItem {
  id: number;
  col1: string;
  col2: string;
  col3: string;
}

interface ThreeColumnMatchingProps {
  title: string;
  description: string;
  items: MatchItem[];
}

const ThreeColumnMatching = ({ title, description, items }: ThreeColumnMatchingProps) => {
  const [selected, setSelected] = useState<(HTMLDivElement | null)[]>([null, null, null]);
  const [selectedIds, setSelectedIds] = useState<(number | null)[]>([null, null, null]);
  const [matched, setMatched] = useState<Set<number>>(new Set());
  const [feedback, setFeedback] = useState<string | null>(null);
  const [feedbackType, setFeedbackType] = useState<"correct" | "incorrect" | null>(null);

  const shuffledCol2 = useMemo(() => [...items].sort(() => Math.random() - 0.5), [items]);
  const shuffledCol3 = useMemo(() => [...items].sort(() => Math.random() - 0.5), [items]);

  const handleClick = (colIndex: number, id: number) => {
    if (matched.has(id) && colIndex === 0) return;
    
    const newSelectedIds = [...selectedIds];
    newSelectedIds[colIndex] = id;
    setSelectedIds(newSelectedIds);

    // Check if all three columns have selections
    if (newSelectedIds.every((s) => s !== null)) {
      if (newSelectedIds[0] === newSelectedIds[1] && newSelectedIds[1] === newSelectedIds[2]) {
        setMatched((prev) => new Set([...prev, newSelectedIds[0]!]));
        setFeedback("Correct Match!");
        setFeedbackType("correct");
        if (matched.size + 1 === items.length) {
          setFeedback("Congratulations! You have matched all the openings.");
        }
      } else {
        setFeedback("Incorrect, try again.");
        setFeedbackType("incorrect");
      }
      setSelectedIds([null, null, null]);
    }
  };

  const getItemClass = (colIndex: number, id: number) => {
    if (matched.has(id)) return "bg-green-50 text-green-700 border-green-500 cursor-default";
    if (selectedIds[colIndex] === id) return "bg-brand-royal text-white border-brand-navy";
    return "bg-white border-border hover:border-brand-royal hover:bg-blue-50/50";
  };

  return (
    <Card className="service-card">
      <CardContent className="p-6">
        <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">{title}</h3>
        <p className="text-muted-foreground mb-6">{description}</p>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/3 space-y-2">
            {items.map((item) => (
              <div
                key={item.id}
                onClick={() => handleClick(0, item.id)}
                className={`p-3 rounded-lg border cursor-pointer transition-all text-sm ${getItemClass(0, item.id)}`}
              >
                {item.col1}
              </div>
            ))}
          </div>
          <div className="w-full md:w-1/3 space-y-2">
            {shuffledCol2.map((item) => (
              <div
                key={item.id}
                onClick={() => handleClick(1, item.id)}
                className={`p-3 rounded-lg border cursor-pointer transition-all text-sm ${getItemClass(1, item.id)}`}
              >
                {item.col2}
              </div>
            ))}
          </div>
          <div className="w-full md:w-1/3 space-y-2">
            {shuffledCol3.map((item) => (
              <div
                key={item.id}
                onClick={() => handleClick(2, item.id)}
                className={`p-3 rounded-lg border cursor-pointer transition-all text-sm ${getItemClass(2, item.id)}`}
              >
                {item.col3}
              </div>
            ))}
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

export default ThreeColumnMatching;
