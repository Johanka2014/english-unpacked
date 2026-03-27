import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RotateCcw, X } from "lucide-react";

const boxA = ["finance", "job", "team", "product", "advertising", "office", "sales", "work"];
const boxB = ["budget", "development", "forecast", "manager", "satisfaction", "work", "place", "worker"];

const validCombinations: Record<string, string> = {
  "finance": "manager",
  "job": "satisfaction",
  "team": "work",
  "product": "development",
  "advertising": "budget",
  "office": "worker",
  "sales": "forecast",
  "work": "place",
};

const CompoundNounsExercise = () => {
  const [selectedA, setSelectedA] = useState<string | null>(null);
  const [selectedB, setSelectedB] = useState<string | null>(null);
  const [combinations, setCombinations] = useState<{ a: string; b: string }[]>([]);
  const [checked, setChecked] = useState(false);

  const handleClickA = (word: string) => {
    if (checked) return;
    setSelectedA(selectedA === word ? null : word);
    if (selectedB) {
      setCombinations((prev) => [...prev, { a: word, b: selectedB }]);
      setSelectedA(null);
      setSelectedB(null);
    }
  };

  const handleClickB = (word: string) => {
    if (checked) return;
    setSelectedB(selectedB === word ? null : word);
    if (selectedA) {
      setCombinations((prev) => [...prev, { a: selectedA, b: word }]);
      setSelectedA(null);
      setSelectedB(null);
    }
  };

  const removeCombination = (idx: number) => {
    if (checked) return;
    setCombinations((prev) => prev.filter((_, i) => i !== idx));
  };

  const isCorrect = (combo: { a: string; b: string }) =>
    validCombinations[combo.a] === combo.b;

  const score = checked ? combinations.filter(isCorrect).length : 0;

  const handleReset = () => {
    setCombinations([]);
    setChecked(false);
    setSelectedA(null);
    setSelectedB(null);
  };

  return (
    <Card className="service-card">
      <CardContent className="p-6">
        <h3 className="text-2xl font-semibold mb-2 font-merriweather text-foreground">
          Activity 12: Compound Nouns
        </h3>
        <p className="text-muted-foreground mb-6">
          How many compound nouns can you make by combining a word from Box A with one from Box B? Click a word from each box to combine them, then check your answers.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Box A */}
          <div>
            <h4 className="font-semibold text-center text-foreground mb-3">Box A</h4>
            <div className="flex flex-wrap gap-2 bg-accent/20 p-4 rounded-lg justify-center">
              {boxA.map((word) => (
                <button
                  key={word}
                  onClick={() => handleClickA(word)}
                  className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all select-none ${
                    selectedA === word
                      ? "border-primary bg-primary text-primary-foreground shadow-md"
                      : checked
                      ? "border-border bg-card text-muted-foreground cursor-default"
                      : "border-border bg-card text-foreground cursor-pointer hover:border-primary/50"
                  }`}
                >
                  {word}
                </button>
              ))}
            </div>
          </div>

          {/* Box B */}
          <div>
            <h4 className="font-semibold text-center text-foreground mb-3">Box B</h4>
            <div className="flex flex-wrap gap-2 bg-accent/20 p-4 rounded-lg justify-center">
              {boxB.map((word) => (
                <button
                  key={word}
                  onClick={() => handleClickB(word)}
                  className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all select-none ${
                    selectedB === word
                      ? "border-primary bg-primary text-primary-foreground shadow-md"
                      : checked
                      ? "border-border bg-card text-muted-foreground cursor-default"
                      : "border-border bg-card text-foreground cursor-pointer hover:border-primary/50"
                  }`}
                >
                  {word}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Combinations area */}
        <div className="mb-6">
          <h4 className="font-semibold text-foreground mb-3">Your combinations:</h4>
          <div className="min-h-[80px] bg-card border border-border rounded-lg p-4">
            {combinations.length === 0 ? (
              <p className="text-sm text-muted-foreground italic">
                Click a word from each box to create a compound noun.
              </p>
            ) : (
              <div className="flex flex-wrap gap-2">
                {combinations.map((combo, idx) => {
                  const correct = isCorrect(combo);
                  return (
                    <div
                      key={idx}
                      className={`flex items-center gap-1 px-3 py-1.5 rounded-lg border text-sm font-medium ${
                        checked
                          ? correct
                            ? "border-green-500 bg-green-50 text-green-800 dark:bg-green-950/30 dark:text-green-300"
                            : "border-red-500 bg-red-50 text-red-800 dark:bg-red-950/30 dark:text-red-300"
                          : "border-primary/40 bg-primary/5 text-foreground"
                      }`}
                    >
                      {combo.a} {combo.b}
                      {!checked && (
                        <button onClick={() => removeCombination(idx)} className="ml-1 hover:text-destructive">
                          <X className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Show missed answers after check */}
        {checked && (
          <div className="mb-6">
            <p className="text-sm text-muted-foreground mb-2">
              Valid compound nouns ({Object.keys(validCombinations).length} total):
            </p>
            <div className="flex flex-wrap gap-2">
              {Object.entries(validCombinations).map(([a, b]) => {
                const found = combinations.some((c) => c.a === a && c.b === b);
                return (
                  <span
                    key={a}
                    className={`px-3 py-1 rounded-lg border text-sm ${
                      found
                        ? "border-green-500 bg-green-50 text-green-700 dark:bg-green-950/30"
                        : "border-muted-foreground/30 bg-muted/20 text-muted-foreground"
                    }`}
                  >
                    {a} {b}
                  </span>
                );
              })}
            </div>
          </div>
        )}

        <div className="flex items-center gap-3">
          {!checked ? (
            <Button
              onClick={() => setChecked(true)}
              disabled={combinations.length === 0}
              className="bg-brand-royal hover:bg-brand-navy"
            >
              Check Answers
            </Button>
          ) : (
            <>
              <p className="text-sm text-muted-foreground">
                Score: {score} / {Object.keys(validCombinations).length}
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

export default CompoundNounsExercise;
