import { useState, useMemo, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, RotateCcw } from "lucide-react";

interface MatchingPair {
  id: number;
  left: string;
  right: string;
}

interface DragDropMatchingProps {
  title: string;
  instruction: string;
  pairs: MatchingPair[];
  extraWords?: string[];
}

const DragDropMatching = ({ title, instruction, pairs, extraWords = [] }: DragDropMatchingProps) => {
  const [matches, setMatches] = useState<Record<number, string>>({});
  const [draggedWord, setDraggedWord] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);
  const [dragOverId, setDragOverId] = useState<number | null>(null);

  const shuffledRightWords = useMemo(() => {
    const allWords = [...pairs.map((p) => p.right), ...extraWords];
    return allWords.sort(() => Math.random() - 0.5);
  }, [pairs, extraWords]);

  const usedWords = Object.values(matches);

  const handleDragStart = (word: string) => {
    setDraggedWord(word);
  };

  const handleDragOver = (e: React.DragEvent, pairId: number) => {
    e.preventDefault();
    setDragOverId(pairId);
  };

  const handleDragLeave = () => {
    setDragOverId(null);
  };

  const handleDrop = (e: React.DragEvent, pairId: number) => {
    e.preventDefault();
    setDragOverId(null);
    if (!draggedWord || checked) return;

    // If this slot already has a word, free it
    setMatches((prev) => {
      const updated = { ...prev };
      // Remove the dragged word from any other slot
      for (const key of Object.keys(updated)) {
        if (updated[Number(key)] === draggedWord) {
          delete updated[Number(key)];
        }
      }
      updated[pairId] = draggedWord;
      return updated;
    });
    setDraggedWord(null);
  };

  const handleRemoveMatch = (pairId: number) => {
    if (checked) return;
    setMatches((prev) => {
      const updated = { ...prev };
      delete updated[pairId];
      return updated;
    });
  };

  // Touch support
  const handleTouchWord = useCallback(
    (word: string) => {
      if (checked) return;
      if (draggedWord === word) {
        setDraggedWord(null);
      } else {
        setDraggedWord(word);
      }
    },
    [draggedWord, checked]
  );

  const handleTapSlot = useCallback(
    (pairId: number) => {
      if (checked) return;
      if (draggedWord) {
        setMatches((prev) => {
          const updated = { ...prev };
          for (const key of Object.keys(updated)) {
            if (updated[Number(key)] === draggedWord) {
              delete updated[Number(key)];
            }
          }
          updated[pairId] = draggedWord;
          return updated;
        });
        setDraggedWord(null);
      } else if (matches[pairId]) {
        handleRemoveMatch(pairId);
      }
    },
    [draggedWord, checked, matches]
  );

  const handleCheck = () => setChecked(true);

  const handleReset = () => {
    setMatches({});
    setChecked(false);
    setDraggedWord(null);
  };

  const getResult = (pairId: number) => {
    if (!checked) return null;
    const pair = pairs.find((p) => p.id === pairId);
    if (!pair) return null;
    return matches[pairId]?.toLowerCase() === pair.right.toLowerCase() ? "correct" : "incorrect";
  };

  const score = checked
    ? pairs.filter((p) => matches[p.id]?.toLowerCase() === p.right.toLowerCase()).length
    : 0;

  return (
    <Card className="service-card">
      <CardContent className="p-6">
        <h3 className="text-2xl font-semibold mb-2 font-merriweather text-foreground">{title}</h3>
        <p className="text-muted-foreground mb-6">{instruction}</p>

        {/* Drop targets - left words with slots */}
        <div className="space-y-3 mb-8">
          {pairs.map((pair) => {
            const result = getResult(pair.id);
            const matchedWord = matches[pair.id];
            const isOver = dragOverId === pair.id;

            return (
              <div
                key={pair.id}
                className="flex items-center gap-3"
                onDragOver={(e) => handleDragOver(e, pair.id)}
                onDragLeave={handleDragLeave}
                onDrop={(e) => handleDrop(e, pair.id)}
                onClick={() => handleTapSlot(pair.id)}
              >
                <span className="text-sm font-medium text-foreground min-w-[120px] text-right">
                  {pair.left}
                </span>
                <div
                  className={`flex items-center gap-2 min-w-[140px] px-4 py-2.5 rounded-lg border-2 border-dashed transition-all cursor-pointer ${
                    result === "correct"
                      ? "border-green-500 bg-green-50 dark:bg-green-950/30"
                      : result === "incorrect"
                      ? "border-red-500 bg-red-50 dark:bg-red-950/30"
                      : isOver
                      ? "border-primary bg-primary/5"
                      : matchedWord
                      ? "border-primary/50 bg-primary/5"
                      : "border-border bg-muted/30"
                  }`}
                >
                  {matchedWord ? (
                    <span className="text-sm font-medium text-foreground">{matchedWord}</span>
                  ) : (
                    <span className="text-sm text-muted-foreground italic">Drop here</span>
                  )}
                  {result === "correct" && <CheckCircle className="w-4 h-4 text-green-600 ml-auto" />}
                  {result === "incorrect" && (
                    <span className="text-xs text-red-600 ml-auto">{pair.right}</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Draggable words */}
        <div className="border-t border-border pt-6">
          <p className="text-sm font-medium text-muted-foreground mb-3">Drag a word to match:</p>
          <div className="flex flex-wrap gap-2">
            {shuffledRightWords.map((word) => {
              const isUsed = usedWords.includes(word);
              const isSelected = draggedWord === word;

              return (
                <div
                  key={word}
                  draggable={!checked && !isUsed}
                  onDragStart={() => handleDragStart(word)}
                  onClick={() => handleTouchWord(word)}
                  className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all select-none ${
                    isUsed
                      ? "opacity-30 cursor-default border-border bg-muted text-muted-foreground"
                      : isSelected
                      ? "border-primary bg-primary text-primary-foreground cursor-grab shadow-md scale-105"
                      : checked
                      ? "border-border bg-muted text-muted-foreground cursor-default"
                      : "border-border bg-card text-foreground cursor-grab hover:border-primary hover:shadow-sm active:cursor-grabbing"
                  }`}
                >
                  {word}
                </div>
              );
            })}
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 flex items-center gap-3">
          {!checked && (
            <Button onClick={handleCheck} className="bg-brand-royal hover:bg-brand-navy">
              Check Answers
            </Button>
          )}
          {checked && (
            <>
              <p className="text-sm text-muted-foreground">
                Score: {score} / {pairs.length}
              </p>
              <Button variant="outline" size="sm" onClick={handleReset}>
                <RotateCcw className="w-4 h-4 mr-1" /> Try Again
              </Button>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default DragDropMatching;
