import { useState, useCallback, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface OrderItem {
  id: string | number;
  text: string;
  order: number;
}

interface OrderingExerciseProps {
  title: string;
  description: string;
  items: OrderItem[];
  tip?: string;
  audioSrc?: string;
}

const OrderingExercise = ({ title, description, items, tip, audioSrc }: OrderingExerciseProps) => {
  const shuffled = useMemo(() => [...items].sort(() => Math.random() - 0.5), [items]);
  const [orderedItems, setOrderedItems] = useState(shuffled);
  const [results, setResults] = useState<Record<string | number, "correct" | "incorrect" | null>>({});
  const [feedback, setFeedback] = useState<string | null>(null);
  const [feedbackType, setFeedbackType] = useState<"correct" | "incorrect" | null>(null);
  const [draggedIdx, setDraggedIdx] = useState<number | null>(null);

  const handleDragStart = useCallback((idx: number) => setDraggedIdx(idx), []);

  const handleDragOver = useCallback(
    (e: React.DragEvent, targetIdx: number) => {
      e.preventDefault();
      if (draggedIdx === null || draggedIdx === targetIdx) return;
      setOrderedItems((prev) => {
        const updated = [...prev];
        const [moved] = updated.splice(draggedIdx, 1);
        updated.splice(targetIdx, 0, moved);
        return updated;
      });
      setDraggedIdx(targetIdx);
    },
    [draggedIdx]
  );

  const checkOrder = () => {
    let allCorrect = true;
    const newResults: Record<string | number, "correct" | "incorrect"> = {};
    orderedItems.forEach((item, index) => {
      if (item.order === index + 1) {
        newResults[item.id] = "correct";
      } else {
        newResults[item.id] = "incorrect";
        allCorrect = false;
      }
    });
    setResults(newResults);
    setFeedback(allCorrect ? "Perfect! The order is correct." : "Not quite right. Please reorder the highlighted items.");
    setFeedbackType(allCorrect ? "correct" : "incorrect");
  };

  return (
    <Card className="service-card">
      <CardContent className="p-6">
        <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">{title}</h3>
        <p className="text-muted-foreground mb-6">{description}</p>

        {tip && (
          <div className="bg-blue-50 border border-brand-royal/20 p-4 rounded-lg mb-6 text-center">
            <h4 className="font-semibold text-lg mb-2 text-brand-royal">Top Tip:</h4>
            <p className="text-foreground">{tip}</p>
          </div>
        )}

        {audioSrc && <audio controls src={audioSrc} className="w-full mb-6" />}

        <div className="p-4 rounded-lg bg-blue-50 space-y-2">
          {orderedItems.map((item, index) => (
            <div
              key={item.id}
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragOver={(e) => handleDragOver(e, index)}
              onDragEnd={() => setDraggedIdx(null)}
              className={`p-3 rounded-md shadow-sm cursor-grab active:cursor-grabbing border ${
                results[item.id] === "correct"
                  ? "bg-green-50 border-green-500"
                  : results[item.id] === "incorrect"
                  ? "bg-red-50 border-red-500"
                  : "bg-white border-border"
              }`}
            >
              {item.text}
            </div>
          ))}
        </div>

        <Button onClick={checkOrder} className="mt-6 bg-brand-royal hover:bg-brand-navy">
          Check Order
        </Button>
        {feedback && (
          <p className={`mt-2 text-sm font-medium ${feedbackType === "correct" ? "text-green-600" : "text-red-600"}`}>
            {feedback}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default OrderingExercise;
