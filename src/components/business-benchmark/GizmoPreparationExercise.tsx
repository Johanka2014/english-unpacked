import { useState } from "react";
import { CheckCircle2, RotateCcw, XCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import useActivityTracking from "@/hooks/useActivityTracking";
import { GIZMO_ANSWERS, GIZMO_MEANINGS, GIZMO_VERBS, isGizmoAnswerCorrect, type GizmoAnswerId } from "@/data/gizmoPreparation";

const ANSWER_IDS = Object.keys(GIZMO_ANSWERS) as GizmoAnswerId[];

const GizmoPreparationExercise = () => {
  const track = useActivityTracking();
  const [answers, setAnswers] = useState<Partial<Record<GizmoAnswerId, string>>>({});
  const [checked, setChecked] = useState(false);
  const score = ANSWER_IDS.filter((id) => isGizmoAnswerCorrect(id, answers[id] || "")).length;

  const update = (id: GizmoAnswerId, value: string) => {
    setAnswers((current) => ({ ...current, [id]: value }));
    setChecked(false);
  };

  const feedback = (id: GizmoAnswerId) => {
    if (!checked) return null;
    return isGizmoAnswerCorrect(id, answers[id] || "")
      ? <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" aria-label="Correct" />
      : <XCircle className="h-4 w-4 shrink-0 text-destructive" aria-label="Incorrect" />;
  };

  const gap = (id: "temporary" | "permanent") => (
    <span className="mx-1 inline-flex max-w-full items-center gap-2 align-middle">
      <Input
        aria-label={`Gizmo dialogue ${id === "temporary" ? "A" : "B"} answer`}
        value={answers[id] || ""}
        onChange={(event) => update(id, event.target.value)}
        autoComplete="off"
        spellCheck={false}
        aria-invalid={checked && !isGizmoAnswerCorrect(id, answers[id] || "")}
        className={`w-36 max-w-full ${checked && !isGizmoAnswerCorrect(id, answers[id] || "") ? "border-destructive" : ""}`}
      />
      {feedback(id)}
    </span>
  );

  return (
    <Card>
      <CardHeader><CardTitle className="font-serif text-xl">Before you listen — The gizmo game</CardTitle></CardHeader>
      <CardContent className="space-y-6">
        <p className="text-sm leading-relaxed text-foreground">Sometimes you use the word <em>gizmo</em> to describe a gadget whose name you cannot remember. In the gizmo game, you will hear three people describing what the tool in the photograph above is used for. One person is telling the truth about its use. The other two are lying.</p>
        <section aria-labelledby="gizmo-matching-heading" className="space-y-4">
          <h3 id="gizmo-matching-heading" className="text-base font-semibold"><span className="mr-2 text-primary">1.</span>Before you listen, match the verbs (1–3) with the verbs (a–c) with similar meanings.</h3>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="min-w-0 space-y-3">
              {GIZMO_VERBS.map(({ id, verb }, index) => (
                <div key={id} className="flex flex-wrap items-center gap-3">
                  <label id={`gizmo-${id}-label`} className="min-w-0 flex-1 text-sm"><strong className="mr-2 text-primary">{index + 1}.</strong>{verb}</label>
                  <div className="flex items-center gap-2">
                    <Select value={answers[id] || ""} onValueChange={(value) => update(id, value)}>
                      <SelectTrigger aria-label={`Match ${verb}`} aria-labelledby={`gizmo-${id}-label`} aria-invalid={checked && !isGizmoAnswerCorrect(id, answers[id] || "")} className={`w-40 ${checked && !isGizmoAnswerCorrect(id, answers[id] || "") ? "border-destructive" : ""}`}><SelectValue placeholder="Choose…" /></SelectTrigger>
                      <SelectContent position="popper">
                        {GIZMO_MEANINGS.map(({ letter, meaning }) => <SelectItem key={letter} value={meaning}>{letter}. {meaning}</SelectItem>)}
                      </SelectContent>
                    </Select>
                    {feedback(id)}
                  </div>
                </div>
              ))}
            </div>
            <ol className="space-y-3 text-sm">
              {GIZMO_MEANINGS.map(({ letter, meaning }) => <li key={letter}><strong className="mr-3 text-primary">{letter}.</strong>{meaning}</li>)}
            </ol>
          </div>
        </section>
        <section aria-labelledby="gizmo-dialogue-heading" className="space-y-4 border-t pt-5">
          <h3 id="gizmo-dialogue-heading" className="text-base font-semibold"><span className="mr-2 text-primary">2.</span>Complete this dialogue with the words <em>permanent</em> and <em>temporary</em>.</h3>
          <div className="space-y-3 text-sm leading-loose">
            <div className="flex items-start gap-3"><strong className="text-primary">A</strong><p className="min-w-0">My new job is only {gap("temporary")} (it will finish in five weeks).</p></div>
            <div className="flex items-start gap-3"><strong className="text-primary">B</strong><p className="min-w-0">Really? I thought it was a {gap("permanent")} position and that you were going to stay there for ever!</p></div>
          </div>
        </section>
        <div className="flex flex-wrap items-center gap-3">
          <Button onClick={() => {
            setChecked(true);
            track({ activityTitle: "BB Module 5 — Before you listen: The gizmo game", activityType: "vocabulary", score, total: ANSWER_IDS.length });
          }}>Check answers</Button>
          <Button variant="outline" onClick={() => { setAnswers({}); setChecked(false); }}><RotateCcw />Reset</Button>
          {checked && <span role="status" className="text-sm text-muted-foreground">{score} / 5 correct</span>}
        </div>
        {checked && score < ANSWER_IDS.length && <p className="text-sm text-muted-foreground">Answers: 1. b — put together; 2. c — take apart; 3. a — fix. A: temporary. B: permanent.</p>}
      </CardContent>
    </Card>
  );
};

export default GizmoPreparationExercise;