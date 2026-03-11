import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle, XCircle } from "lucide-react";

/* ── Theory examples ── */
const theoryExamples = [
  {
    label: "Imaginary situation",
    sentence: "If I lost my job, I might start my own business.",
  },
  {
    label: "Giving advice",
    sentence: "If I were you, I would ask my family to help me start the business.",
  },
];

/* ── Exercise data ── */
interface GapSentence {
  before: string;
  hint: string;
  answer: string[];
  after: string;
}

const sentences: GapSentence[] = [
  {
    before: "I would take out a loan if interest rates",
    hint: "not be",
    answer: ["weren't", "were not"],
    after: "so high.",
  },
  {
    before: "I",
    hint: "start",
    answer: ["would start", "'d start"],
    after: "up a business if it wasn't so risky.",
  },
  {
    before: "I'd stay in this job if they",
    hint: "pay",
    answer: ["paid"],
    after: "more.",
  },
  {
    before: "I",
    hint: "can / work",
    answer: ["could work"],
    after: "in the Paris office if I spoke French.",
  },
  {
    before: "I",
    hint: "take",
    answer: ["would take", "'d take"],
    after: "that job if I were you.",
  },
];

const normalise = (s: string) =>
  s.trim().toLowerCase().replace(/['']/g, "'");

const GrammarWorkshopUnit10 = () => {
  const [values, setValues] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);

  const isCorrect = (idx: number) =>
    sentences[idx].answer.some(
      (a) => normalise(a) === normalise(values[idx] || "")
    );

  const score = sentences.filter((_, i) => isCorrect(i)).length;

  return (
    <div className="space-y-8">
      {/* Theory Card */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">
            The Second Conditional
          </h3>

          <div className="bg-muted/30 rounded-lg p-5 border border-border mb-6">
            <p className="font-semibold text-foreground mb-2">Form</p>
            <p className="text-foreground font-mono text-sm mb-4">
              If / Unless + past simple, + would / could / might + infinitive
            </p>

            <div className="space-y-3">
              {theoryExamples.map((ex, i) => (
                <div key={i}>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    {ex.label}
                  </span>
                  <p className="text-foreground italic">{ex.sentence}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-muted/30 rounded-lg p-5 border border-border">
            <p className="font-semibold text-foreground mb-2">
              First vs Second Conditional
            </p>
            <p className="text-muted-foreground text-sm mb-3">
              The second conditional talks about <strong>imaginary, improbable or hypothetical</strong> situations,
              unlike the first conditional which talks about <strong>real possibilities</strong>.
            </p>
            <div className="space-y-2 text-sm">
              <p className="text-foreground">
                <span className="font-medium text-muted-foreground">1st:</span>{" "}
                If they <strong>send</strong> me to Thailand, I<strong>'ll</strong> be delighted.{" "}
                <span className="text-muted-foreground">(real possibility)</span>
              </p>
              <p className="text-foreground">
                <span className="font-medium text-muted-foreground">2nd:</span>{" "}
                If I <strong>was</strong> managing director, I <strong>wouldn't</strong> send you to Thailand!{" "}
                <span className="text-muted-foreground">(imaginary)</span>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Exercise Card */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-2 font-merriweather text-foreground">
            Practice: Complete the sentences
          </h3>
          <p className="text-muted-foreground mb-6">
            Put the verbs in brackets into the correct form of the second conditional.
          </p>

          <div className="space-y-5">
            {sentences.map((s, idx) => {
              const correct = checked && isCorrect(idx);
              const incorrect = checked && !isCorrect(idx);

              return (
                <div key={idx} className="flex flex-wrap items-center gap-1.5 text-foreground">
                  <span className="font-semibold text-muted-foreground w-6">{idx + 1}.</span>
                  <span>{s.before}</span>
                  <span className="inline-flex items-center gap-1">
                    <Input
                      className={`inline-block w-44 text-sm ${
                        correct
                          ? "border-green-500 bg-green-50 dark:bg-green-950/30"
                          : incorrect
                          ? "border-red-500 bg-red-50 dark:bg-red-950/30"
                          : ""
                      }`}
                      placeholder={`(${s.hint})`}
                      value={values[idx] || ""}
                      onChange={(e) =>
                        setValues((prev) => ({ ...prev, [idx]: e.target.value }))
                      }
                    />
                    {correct && <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />}
                    {incorrect && (
                      <>
                        <XCircle className="h-4 w-4 text-red-500 shrink-0" />
                        <span className="text-xs text-muted-foreground whitespace-nowrap">
                          {s.answer[0]}
                        </span>
                      </>
                    )}
                  </span>
                  <span>{s.after}</span>
                </div>
              );
            })}
          </div>

          {checked && (
            <p className="mt-4 font-semibold text-foreground">
              Score: {score} / {sentences.length}
            </p>
          )}

          <div className="flex gap-3 mt-6">
            <Button
              onClick={() => setChecked(true)}
              className="bg-primary hover:bg-primary/90"
            >
              Check Answers
            </Button>
            {checked && (
              <Button
                variant="outline"
                onClick={() => {
                  setValues({});
                  setChecked(false);
                }}
              >
                Reset
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GrammarWorkshopUnit10;
