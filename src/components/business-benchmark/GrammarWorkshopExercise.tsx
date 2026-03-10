import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle, XCircle } from "lucide-react";
import DragDropCategorize from "@/components/presentations/DragDropCategorize";

/* ── Exercise 1: Complete the interview ── */
interface GapPart {
  type: "text" | "gap";
  value: string; // text content or correct answer
  hint?: string; // verb hint shown in brackets
}

interface InterviewLine {
  speaker: "I" | "E";
  parts: GapPart[];
}

const interviewLines: InterviewLine[] = [
  {
    speaker: "I",
    parts: [
      { type: "text", value: "So, now you've experienced work in all these different hotel jobs. Which job do you think" },
    ],
  },
  {
    speaker: "E",
    parts: [
      { type: "gap", value: "is", hint: "you think" },
      { type: "text", value: " the most difficult? I think housekeeping. Housekeepers " },
      { type: "gap", value: "need", hint: "need" },
      { type: "text", value: " so much energy. They also " },
      { type: "gap", value: "spend", hint: "spend" },
      { type: "text", value: " most of the time working by themselves, so it can be a very lonely job." },
    ],
  },
  {
    speaker: "I",
    parts: [
      { type: "gap", value: "Are you making", hint: "you make" },
      { type: "text", value: " any changes in your hotels now?" },
    ],
  },
  {
    speaker: "E",
    parts: [
      { type: "text", value: "Yes, certainly. We " },
      { type: "gap", value: "are reviewing", hint: "review" },
      { type: "text", value: " the policy on who orders the cleaning equipment. The present system " },
      { type: "gap", value: "doesn't work", hint: "not work" },
      { type: "text", value: " very efficiently. We " },
      { type: "gap", value: "are also looking", hint: "also look" },
      { type: "text", value: " at a number of other hotel policies." },
    ],
  },
  {
    speaker: "I",
    parts: [
      { type: "text", value: "Why " },
      { type: "gap", value: "do you want", hint: "you want" },
      { type: "text", value: " other senior executives to have the Changing Places experience?" },
    ],
  },
  {
    speaker: "E",
    parts: [
      { type: "text", value: "Because it's such a good learning experience. It " },
      { type: "gap", value: "reminds", hint: "remind" },
      { type: "text", value: " executives that management decisions always have effects on other members of staff. Executives often " },
      { type: "gap", value: "don't realise", hint: "not realise" },
      { type: "text", value: " what these effects are." },
    ],
  },
];

/* ── Exercise 2: Time phrases categorisation ── */
const timePhraseCategories = [
  { id: "present-simple", title: "Present Simple" },
  { id: "present-continuous", title: "Present Continuous" },
];

const timePhrasePhrases = [
  { id: "always", text: "always", category: "present-simple" },
  { id: "every-month", text: "every month", category: "present-simple" },
  { id: "every-week", text: "every week", category: "present-simple" },
  { id: "generally", text: "generally", category: "present-simple" },
  { id: "never", text: "never", category: "present-simple" },
  { id: "often", text: "often", category: "present-simple" },
  { id: "sometimes", text: "sometimes", category: "present-simple" },
  { id: "usually", text: "usually", category: "present-simple" },
  { id: "at-the-moment", text: "at the moment", category: "present-continuous" },
  { id: "currently", text: "currently", category: "present-continuous" },
  { id: "now", text: "now", category: "present-continuous" },
  { id: "this-month", text: "this month", category: "present-continuous" },
  { id: "today", text: "today", category: "present-continuous" },
  { id: "this-week", text: "this week", category: "present-continuous" },
];

/* ── Component ── */
const GrammarWorkshopExercise = () => {
  const [gapValues, setGapValues] = useState<Record<string, string>>({});
  const [gapChecked, setGapChecked] = useState(false);

  // Build a flat list of gap indices
  const gaps: { lineIdx: number; partIdx: number; answer: string; hint: string }[] = [];
  interviewLines.forEach((line, li) => {
    line.parts.forEach((part, pi) => {
      if (part.type === "gap") {
        gaps.push({ lineIdx: li, partIdx: pi, answer: part.value, hint: part.hint || "" });
      }
    });
  });

  const gapKey = (li: number, pi: number) => `${li}-${pi}`;

  const checkGaps = () => setGapChecked(true);

  const normalise = (s: string) => s.trim().toLowerCase().replace(/['']/g, "'");

  const isGapCorrect = (li: number, pi: number, answer: string) => {
    const val = normalise(gapValues[gapKey(li, pi)] || "");
    // accept alternative contractions
    const accepted = [normalise(answer)];
    if (answer === "doesn't work") accepted.push("does not work");
    if (answer === "don't realise") accepted.push("do not realise", "don't realize", "do not realize");
    if (answer === "Are you making") accepted.push("are you making");
    if (answer === "are reviewing") accepted.push("'re reviewing", "are reviewing");
    if (answer === "are also looking") accepted.push("'re also looking", "are also looking");
    return accepted.some((a) => normalise(a) === val);
  };

  return (
    <div className="space-y-8">
      {/* Theory */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">Grammar Workshop</h3>
          <h4 className="text-lg font-semibold text-foreground mb-3">Present Simple and Present Continuous</h4>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-muted/30 rounded-lg p-4 border border-border">
              <p className="font-semibold text-foreground mb-2">Present Simple</p>
              <p className="text-muted-foreground text-sm mb-2">
                Use the present simple to talk about habits and things that are always or usually true.
              </p>
              <p className="text-foreground text-sm italic mb-1">
                Alex Jennings <strong>runs</strong> a chain of steak bars.
              </p>
              <p className="text-muted-foreground text-xs">(He does this as part of everyday life.)</p>
            </div>

            <div className="bg-muted/30 rounded-lg p-4 border border-border">
              <p className="font-semibold text-foreground mb-2">Present Continuous</p>
              <p className="text-muted-foreground text-sm mb-2">
                Use the present continuous to talk about things which are true only in this period of time, or a process which is not completed.
              </p>
              <p className="text-foreground text-sm italic mb-1">
                They <strong>are redesigning</strong> the staff uniforms.
              </p>
              <p className="text-muted-foreground text-xs">(This is true only in this period of time.)</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Exercise 1 – Complete the interview */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">
            1. Complete the interview
          </h3>
          <p className="text-muted-foreground mb-6">
            Put the verbs in brackets into the present simple or the present continuous.
          </p>

          <div className="space-y-4">
            {interviewLines.map((line, li) => (
              <p key={li} className="text-foreground leading-relaxed">
                <strong>{line.speaker === "I" ? "Interviewer" : "Eisner"}:</strong>{" "}
                {line.parts.map((part, pi) => {
                  if (part.type === "text") return <span key={pi}>{part.value}</span>;
                  const key = gapKey(li, pi);
                  const correct = isGapCorrect(li, pi, part.value);
                  return (
                    <span key={pi} className="inline-flex items-center gap-1 mx-1">
                      <Input
                        className={`inline-block w-40 text-sm ${
                          gapChecked
                            ? correct
                              ? "border-green-500 bg-green-50"
                              : "border-red-500 bg-red-50"
                            : ""
                        }`}
                        placeholder={`(${part.hint})`}
                        value={gapValues[key] || ""}
                        onChange={(e) =>
                          setGapValues((prev) => ({ ...prev, [key]: e.target.value }))
                        }
                      />
                      {gapChecked && !correct && (
                        <span className="text-xs text-muted-foreground whitespace-nowrap">{part.value}</span>
                      )}
                    </span>
                  );
                })}
              </p>
            ))}
          </div>

          <Button onClick={checkGaps} className="mt-6 bg-primary hover:bg-primary/90">
            Check Answers
          </Button>
        </CardContent>
      </Card>

      {/* Exercise 2 – Time phrases */}
      <DragDropCategorize
        title="2. Categorise time phrases"
        description="Drag each time phrase into the correct category: Present Simple or Present Continuous."
        categories={timePhraseCategories}
        phrases={timePhrasePhrases}
      />

      {/* Exercise 3 – Writing sentences */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">
            3. Write sentences
          </h3>
          <p className="text-muted-foreground mb-4">
            Write five sentences about things which happen or are happening in your company or place of study, using the following time expressions.
          </p>
          <ol className="list-decimal list-inside space-y-2 text-foreground">
            <li>Every month …</li>
            <li>Every year …</li>
            <li>Always …</li>
            <li>At the moment …</li>
            <li>This month …</li>
          </ol>
        </CardContent>
      </Card>

      {/* Exercise 4 – Pair work */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">
            4. Pair work
          </h3>
          <p className="text-foreground">
            Work in pairs. Read your sentences to each other to see if any of your sentences match your partner's.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default GrammarWorkshopExercise;
