import { ReactNode, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle } from "lucide-react";
import useActivityTracking from "@/hooks/useActivityTracking";

export interface EquipmentQuestion {
  id: string;
  prompt: string;
  options: string[];
  answer: string;
  hint?: string;
}

interface EquipmentActivityProps {
  title: string;
  instructions: ReactNode;
  questions: EquipmentQuestion[];
  activityType?: string;
}

const EquipmentActivity = ({ title, instructions, questions, activityType = "multiple-choice" }: EquipmentActivityProps) => {
  const track = useActivityTracking();
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);
  const score = questions.filter((question) => answers[question.id] === question.answer).length;

  return (
    <Card>
      <CardHeader><CardTitle className="font-serif text-xl">{title}</CardTitle></CardHeader>
      <CardContent className="space-y-4">
        <div className="text-sm text-muted-foreground">{instructions}</div>
        <div className="space-y-3">
          {questions.map((question, index) => {
            const correct = checked && answers[question.id] === question.answer;
            const wrong = checked && !correct;
            return (
              <div key={question.id} className="rounded-md border bg-muted/30 p-3">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <p className="min-w-0 flex-1 text-sm text-foreground"><strong className="mr-2 text-primary">{index + 1}.</strong>{question.prompt}</p>
                  <div className="flex items-center gap-2">
                    <select
                      aria-label={`Answer ${index + 1}`}
                      value={answers[question.id] || ""}
                      onChange={(event) => setAnswers((current) => ({ ...current, [question.id]: event.target.value }))}
                      className={`min-h-10 max-w-full rounded-md border bg-background px-3 text-sm ${correct ? "border-green-500" : wrong ? "border-destructive" : "border-input"}`}
                    >
                      <option value="">Choose…</option>
                      {question.options.map((option) => <option key={option} value={option}>{option}</option>)}
                    </select>
                    {checked && (correct ? <CheckCircle2 className="h-5 w-5 shrink-0 text-green-600" /> : <XCircle className="h-5 w-5 shrink-0 text-destructive" />)}
                  </div>
                </div>
                {checked && wrong && question.hint && <p className="mt-2 text-xs text-muted-foreground">Hint: {question.hint}</p>}
              </div>
            );
          })}
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button onClick={() => { setChecked(true); track({ activityTitle: `BB Module 5 — ${title}`, activityType, score, total: questions.length }); }}>Check answers</Button>
          {checked && <span className="text-sm text-muted-foreground">{score} / {questions.length} correct</span>}
        </div>
      </CardContent>
    </Card>
  );
};

export default EquipmentActivity;