import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";

interface OddOneOutRow {
  words: string[];
  oddOneOut: string;
  explanation: string;
}

const rows: OddOneOutRow[] = [
  { words: ["CEO", "PA", "CIO", "IT"], oddOneOut: "IT", explanation: "IT is a department, not a job title acronym." },
  { words: ["post", "place", "job", "role"], oddOneOut: "place", explanation: "'Place' is not a synonym for 'job'." },
  { words: ["local", "premises", "headquarters", "regional office"], oddOneOut: "local", explanation: "'Local' is an adjective, not a type of workplace." },
  { words: ["board member", "manager", "client", "director"], oddOneOut: "client", explanation: "A client is not an employee of the company." },
  { words: ["accountant", "systems analyst", "auditor", "financial director"], oddOneOut: "systems analyst", explanation: "A systems analyst works in IT, not finance." },
  { words: ["white-collar worker", "office worker", "administrative officer", "shop-floor worker"], oddOneOut: "shop-floor worker", explanation: "A shop-floor worker is a blue-collar/manual worker." },
  { words: ["secretary", "personal assistant", "company secretary", "administrative assistant"], oddOneOut: "company secretary", explanation: "A company secretary is a senior legal/corporate governance role." },
  { words: ["advertising", "public relations", "human resources", "marketing"], oddOneOut: "human resources", explanation: "HR is not a marketing-related department." },
];

const OddOneOutExercise = () => {
  const [selected, setSelected] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);

  const handleSelect = (rowIdx: number, word: string) => {
    if (checked) return;
    setSelected((prev) => ({ ...prev, [rowIdx]: prev[rowIdx] === word ? undefined! : word }));
  };

  const score = checked
    ? rows.filter((r, i) => selected[i] === r.oddOneOut).length
    : 0;

  return (
    <Card className="service-card">
      <CardContent className="p-6">
        <h3 className="text-2xl font-semibold mb-2 font-merriweather text-foreground">
          Activity 10: Vocabulary
        </h3>
        <p className="text-muted-foreground mb-6">
          Click the odd one out in each list. Check in the Word list if necessary.
        </p>

        <div className="space-y-3">
          {rows.map((row, rowIdx) => {
            const result = checked
              ? selected[rowIdx] === row.oddOneOut
                ? "correct"
                : "incorrect"
              : null;

            return (
              <div key={rowIdx}>
                <div
                  className={`flex flex-wrap gap-2 p-3 rounded-lg transition-colors ${
                    result === "correct"
                      ? "bg-green-50 dark:bg-green-950/20"
                      : result === "incorrect"
                      ? "bg-red-50 dark:bg-red-950/20"
                      : "bg-accent/20"
                  }`}
                >
                  {row.words.map((word) => {
                    const isSelected = selected[rowIdx] === word;
                    const isCorrectAnswer = checked && word === row.oddOneOut;

                    return (
                      <button
                        key={word}
                        onClick={() => handleSelect(rowIdx, word)}
                        className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all select-none ${
                          checked && isCorrectAnswer && isSelected
                            ? "border-green-500 bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300"
                            : checked && isCorrectAnswer
                            ? "border-green-500 bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                            : checked && isSelected
                            ? "border-red-500 bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300"
                            : isSelected
                            ? "border-primary bg-primary text-primary-foreground shadow-md"
                            : "border-border bg-card text-foreground hover:border-primary/50 cursor-pointer"
                        }`}
                      >
                        {word}
                      </button>
                    );
                  })}
                </div>
                {checked && result === "incorrect" && (
                  <p className="text-xs text-red-600 mt-1 ml-3">
                    The odd one out is <strong>{row.oddOneOut}</strong> — {row.explanation}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex items-center gap-3">
          {!checked ? (
            <Button
              onClick={() => setChecked(true)}
              className="bg-brand-royal hover:bg-brand-navy"
            >
              Check Answers
            </Button>
          ) : (
            <>
              <p className="text-sm text-muted-foreground">
                Score: {score} / {rows.length}
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSelected({});
                  setChecked(false);
                }}
              >
                <RotateCcw className="w-4 h-4 mr-1" /> Try Again
              </Button>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default OddOneOutExercise;
