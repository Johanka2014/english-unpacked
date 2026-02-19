import { useState, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface SentencePart {
  answer?: string;
}

interface GapSentence {
  id: number;
  parts: (string | SentencePart)[];
}

interface DragFillGapsProps {
  title: string;
  description: string;
  words: string[];
  sentences: GapSentence[];
}

const DragFillGaps = ({ title, description, words, sentences }: DragFillGapsProps) => {
  const [bank, setBank] = useState([...words]);
  const [filled, setFilled] = useState<Record<string, string | null>>({});
  const [results, setResults] = useState<Record<string, "correct" | "incorrect" | null>>({});
  const [draggedWord, setDraggedWord] = useState<string | null>(null);
  const [dragSource, setDragSource] = useState<string | null>(null);

  const getGapId = (sentenceId: number, gapIndex: number) => `${sentenceId}-${gapIndex}`;

  const handleDragStartFromBank = useCallback((word: string) => {
    setDraggedWord(word);
    setDragSource("bank");
  }, []);

  const handleDragStartFromGap = useCallback((word: string, gapId: string) => {
    setDraggedWord(word);
    setDragSource(gapId);
  }, []);

  const handleDropOnGap = useCallback(
    (gapId: string) => {
      if (!draggedWord) return;
      // Return current word in gap to bank
      const currentWord = filled[gapId];
      if (currentWord) {
        setBank((prev) => [...prev, currentWord]);
      }
      // Remove from source
      if (dragSource === "bank") {
        setBank((prev) => {
          const idx = prev.indexOf(draggedWord);
          if (idx === -1) return prev;
          const updated = [...prev];
          updated.splice(idx, 1);
          return updated;
        });
      } else if (dragSource) {
        setFilled((prev) => ({ ...prev, [dragSource]: null }));
      }
      setFilled((prev) => ({ ...prev, [gapId]: draggedWord }));
      setDraggedWord(null);
      setDragSource(null);
    },
    [draggedWord, dragSource, filled]
  );

  const handleDropOnBank = useCallback(() => {
    if (!draggedWord || !dragSource || dragSource === "bank") return;
    setFilled((prev) => ({ ...prev, [dragSource]: null }));
    setBank((prev) => [...prev, draggedWord]);
    setDraggedWord(null);
    setDragSource(null);
  }, [draggedWord, dragSource]);

  const checkAnswers = () => {
    const newResults: Record<string, "correct" | "incorrect"> = {};
    sentences.forEach((sentence) => {
      let gapIndex = 0;
      sentence.parts.forEach((part) => {
        if (typeof part !== "string" && part.answer) {
          const gapId = getGapId(sentence.id, gapIndex);
          const word = filled[gapId];
          newResults[gapId] = word?.toLowerCase() === part.answer.toLowerCase() ? "correct" : "incorrect";
          gapIndex++;
        }
      });
    });
    setResults(newResults);
  };

  return (
    <Card className="service-card">
      <CardContent className="p-6">
        <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">{title}</h3>
        <p className="text-muted-foreground mb-6">{description}</p>

        <div
          className="flex flex-wrap gap-2 bg-blue-50 p-4 rounded-lg mb-6"
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDropOnBank}
        >
          {bank.map((word, i) => (
            <div
              key={`${word}-${i}`}
              draggable
              onDragStart={() => handleDragStartFromBank(word)}
              className="p-2 rounded-md shadow-sm bg-white border border-border cursor-grab active:cursor-grabbing"
            >
              {word}
            </div>
          ))}
          {bank.length === 0 && <span className="text-muted-foreground text-sm italic">All words placed</span>}
        </div>

        <div className="space-y-4">
          {sentences.map((sentence) => {
            let gapIndex = 0;
            return (
              <p key={sentence.id} className="text-lg leading-relaxed">
                {sentence.parts.map((part, partIdx) => {
                  if (typeof part === "string") {
                    return <span key={partIdx}>{part}</span>;
                  }
                  const currentGapIndex = gapIndex;
                  gapIndex++;
                  const gapId = getGapId(sentence.id, currentGapIndex);
                  const word = filled[gapId];
                  return (
                    <span
                      key={partIdx}
                      onDragOver={(e) => e.preventDefault()}
                      onDrop={() => handleDropOnGap(gapId)}
                      className={`inline-block border-2 border-dashed rounded px-2 py-1 min-w-[80px] mx-1 align-middle transition-colors ${
                        results[gapId] === "correct"
                          ? "border-green-500 bg-green-50"
                          : results[gapId] === "incorrect"
                          ? "border-red-500 bg-red-50"
                          : "border-brand-royal/30 bg-white/50"
                      }`}
                    >
                      {word ? (
                        <span
                          draggable
                          onDragStart={() => handleDragStartFromGap(word, gapId)}
                          className="cursor-grab active:cursor-grabbing"
                        >
                          {word}
                        </span>
                      ) : null}
                    </span>
                  );
                })}
              </p>
            );
          })}
        </div>

        <Button onClick={checkAnswers} className="mt-6 bg-brand-royal hover:bg-brand-navy">
          Check Answers
        </Button>
      </CardContent>
    </Card>
  );
};

export default DragFillGaps;
