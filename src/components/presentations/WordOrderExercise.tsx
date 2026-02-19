import { useState, useCallback, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface WordOrderItem {
  id: number;
  words: string[];
  answer: string;
}

interface WordOrderExerciseProps {
  title: string;
  description: string;
  items: WordOrderItem[];
}

const WordOrderExercise = ({ title, description, items }: WordOrderExerciseProps) => {
  const initialState = useMemo(
    () =>
      items.map((item) => ({
        id: item.id,
        bank: [...item.words].sort(() => Math.random() - 0.5),
        placed: [] as string[],
        answer: item.answer,
      })),
    [items]
  );

  const [sentences, setSentences] = useState(initialState);
  const [results, setResults] = useState<Record<number, "correct" | "incorrect" | null>>({});
  const [dragInfo, setDragInfo] = useState<{ sentenceId: number; word: string; source: "bank" | "placed"; index: number } | null>(null);

  const handleDragStart = useCallback((sentenceId: number, word: string, source: "bank" | "placed", index: number) => {
    setDragInfo({ sentenceId, word, source, index });
  }, []);

  const handleDropOnPlaced = useCallback(
    (sentenceId: number) => {
      if (!dragInfo || dragInfo.sentenceId !== sentenceId) return;
      setSentences((prev) =>
        prev.map((s) => {
          if (s.id !== sentenceId) return s;
          if (dragInfo.source === "bank") {
            const newBank = [...s.bank];
            newBank.splice(dragInfo.index, 1);
            return { ...s, bank: newBank, placed: [...s.placed, dragInfo.word] };
          }
          return s;
        })
      );
      setDragInfo(null);
    },
    [dragInfo]
  );

  const handleDropOnBank = useCallback(
    (sentenceId: number) => {
      if (!dragInfo || dragInfo.sentenceId !== sentenceId) return;
      setSentences((prev) =>
        prev.map((s) => {
          if (s.id !== sentenceId) return s;
          if (dragInfo.source === "placed") {
            const newPlaced = [...s.placed];
            newPlaced.splice(dragInfo.index, 1);
            return { ...s, placed: newPlaced, bank: [...s.bank, dragInfo.word] };
          }
          return s;
        })
      );
      setDragInfo(null);
    },
    [dragInfo]
  );

  const checkAnswers = () => {
    const newResults: Record<number, "correct" | "incorrect"> = {};
    sentences.forEach((s) => {
      const userAnswer = s.placed.join(" ").toLowerCase().replace(/[.,?]/g, "");
      const correctAnswer = s.answer.toLowerCase().replace(/[.,?]/g, "");
      newResults[s.id] = userAnswer === correctAnswer ? "correct" : "incorrect";
    });
    setResults(newResults);
  };

  return (
    <Card className="service-card">
      <CardContent className="p-6">
        <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">{title}</h3>
        <p className="text-muted-foreground mb-6">{description}</p>

        <div className="space-y-8">
          {sentences.map((s) => (
            <div key={s.id}>
              <h4 className="font-semibold mb-2 text-foreground">Sentence {s.id}</h4>
              <div
                className="flex flex-wrap gap-2 bg-blue-50 p-4 rounded-lg mb-4 min-h-[50px]"
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => handleDropOnBank(s.id)}
              >
                {s.bank.map((word, i) => (
                  <div
                    key={`${word}-${i}`}
                    draggable
                    onDragStart={() => handleDragStart(s.id, word, "bank", i)}
                    className="p-2 rounded-md shadow-sm bg-white border border-border cursor-grab active:cursor-grabbing"
                  >
                    {word}
                  </div>
                ))}
              </div>
              <div
                className={`p-4 rounded-lg border-2 border-dashed min-h-[50px] flex flex-wrap gap-2 ${
                  results[s.id] === "correct"
                    ? "border-green-500 bg-green-50"
                    : results[s.id] === "incorrect"
                    ? "border-red-500 bg-red-50"
                    : "border-brand-royal/30 bg-white/50"
                }`}
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => handleDropOnPlaced(s.id)}
              >
                {s.placed.map((word, i) => (
                  <div
                    key={`${word}-${i}`}
                    draggable
                    onDragStart={() => handleDragStart(s.id, word, "placed", i)}
                    className="p-2 rounded-md shadow-sm bg-white border border-border cursor-grab active:cursor-grabbing"
                  >
                    {word}
                  </div>
                ))}
                {s.placed.length === 0 && (
                  <span className="text-muted-foreground text-sm italic">Drop words here in order</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <Button onClick={checkAnswers} className="mt-6 bg-brand-royal hover:bg-brand-navy">
          Check Answers
        </Button>
      </CardContent>
    </Card>
  );
};

export default WordOrderExercise;
