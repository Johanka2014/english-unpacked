import { useState } from "react";
import { CheckCircle2, RotateCcw, XCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useActivityTracking from "@/hooks/useActivityTracking";
import toolAsset from "@/assets/bb-mod5-metal-tool.jpg.asset.json";
import { DESCRIPTION_MODELS, DESCRIPTION_WORDS, isDescriptionAnswerCorrect, type DescriptionAnswers } from "@/data/equipmentDescription";

const GAPS = [2, 3, 4, 5, 6];

const DescribingToolExercise = () => {
  const track = useActivityTracking();
  const [answers, setAnswers] = useState<DescriptionAnswers>({});
  const [checked, setChecked] = useState(false);
  const score = GAPS.filter((number) => isDescriptionAnswerCorrect(number, answers)).length;

  const gap = (number: number) => (
    <span className="mx-1 inline-flex max-w-full items-center gap-1 align-middle">
      <span className="text-sm font-semibold text-primary">{number}.</span>
      <Input
        aria-label={`Tool description answer ${number}`}
        value={answers[number] || ""}
        onChange={(event) => {
          setAnswers((current) => ({ ...current, [number]: event.target.value }));
          setChecked(false);
        }}
        autoComplete="off"
        spellCheck={false}
        className={`inline-block w-36 max-w-full ${checked && !isDescriptionAnswerCorrect(number, answers) ? "border-destructive" : ""}`}
        aria-invalid={checked && !isDescriptionAnswerCorrect(number, answers)}
      />
      {checked && (isDescriptionAnswerCorrect(number, answers)
        ? <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" aria-label="Correct" />
        : <XCircle className="h-4 w-4 shrink-0 text-destructive" aria-label="Incorrect" />)}
    </span>
  );

  return (
    <Card>
      <CardHeader><CardTitle className="font-serif text-xl">Describe the object</CardTitle></CardHeader>
      <CardContent className="space-y-5">
        <p className="text-sm text-muted-foreground">Complete the description of the object using the words in the box. Check your answers in pairs.</p>
        <div className="grid items-start gap-6 md:grid-cols-2">
          <img src={toolAsset.url} alt="A metal hand tool with two long handles and rounded jaws, joined by a central pivot" width={565} height={371} loading="lazy" className="h-auto w-full rounded-md" />
          <div className="min-w-0 space-y-5">
            <div className="flex flex-wrap gap-x-6 gap-y-2 rounded-md border border-primary/30 bg-primary/5 p-4">
              {DESCRIPTION_WORDS.map((word) => <span key={word} className={`text-sm ${word === "screw" ? "text-muted-foreground line-through" : "text-foreground"}`}>{word}</span>)}
            </div>
            <div className="text-base leading-loose">
              This tool is made up of two pieces of metal, joined in the middle with a <span className="font-semibold text-primary">1. screw</span> or rivet, rather like a pair of {gap(2)} or {gap(3)}. At the top of one of the pieces, there is a small {gap(4)} piece of metal, like a {gap(5)} with a piece missing. At the top of the other piece, there is another {gap(6)} solid piece of metal.
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button onClick={() => {
            setChecked(true);
            track({ activityTitle: "BB Module 5 — Describe the object", activityType: "gap-fill", score, total: GAPS.length });
          }}>Check answers</Button>
          <Button variant="outline" onClick={() => { setAnswers({}); setChecked(false); }}><RotateCcw />Reset</Button>
          {checked && <span role="status" className="text-sm text-muted-foreground">{score} / 5 correct</span>}
        </div>
        {checked && score < GAPS.length && <p className="text-sm text-muted-foreground">Answers: {GAPS.map((number) => `${number}. ${DESCRIPTION_MODELS[number]}`).join(" · ")}. Pliers and scissors can also go in the opposite order.</p>}
      </CardContent>
    </Card>
  );
};

export default DescribingToolExercise;