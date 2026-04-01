import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Headphones, CheckCircle2 } from "lucide-react";
import MatchingExercise from "@/components/presentations/MatchingExercise";
import FillInBlanks from "@/components/presentations/FillInBlanks";

const numberMatching = [
  { id: 1, left: "five", right: "days a week" },
  { id: 2, left: "eight", right: "years in previous company" },
  { id: 3, left: "seven", right: "team leaders" },
  { id: 4, left: "ten", right: "years with present company" },
  { id: 5, left: "six", right: "call centre operators" },
];

const callCentreProblems = [
  "Difficulties with customer complaints",
  "Staff shortages",
  "High absenteeism",
  "Staff relationships",
  "Stress",
];

const sentenceGaps = [
  { id: 1, before: "I particularly", after: "dealing with customers.", answer: "enjoy" },
  { id: 2, before: "I have an", after: "to build a good rapport with people on the telephone.", answer: "ability" },
  { id: 3, before: "I believe I am", after: "at it.", answer: "good" },
  { id: 4, before: "My", after: "has a good job in this area.", answer: "experience" },
  { id: 5, before: "My company did ask me if I would", after: ".", answer: "relocate" },
];

const ListeningUnit2 = () => {
  const [tickedProblems, setTickedProblems] = useState<Set<number>>(new Set());
  const [showProblemAnswers, setShowProblemAnswers] = useState(false);
  const [gapAnswers, setGapAnswers] = useState<Record<number, string>>({});
  const [showGapAnswers, setShowGapAnswers] = useState(false);

  const correctProblems = new Set([0, 1, 4]); // complaints, staff shortages, stress

  const toggleProblem = (index: number) => {
    setTickedProblems((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <div className="space-y-8">
      {/* Audio placeholder */}
      <Card className="border-l-4 border-l-purple-500 bg-purple-50/50">
        <CardContent className="p-5 flex items-center gap-3">
          <Headphones className="h-6 w-6 text-purple-600" />
          <div>
            <p className="font-semibold text-foreground">Audio Tracks Required</p>
            <p className="text-sm text-muted-foreground">This section uses three audio extracts from a job interview. Audio links will be added soon.</p>
          </div>
        </CardContent>
      </Card>

      {/* Extract 1: Number matching */}
      <MatchingExercise
        title="Activity 10: Extract 1 — Numbers"
        description="Listen to the first extract and match the numbers to what they represent."
        pairs={numberMatching}
        leftLabel="Number"
        rightLabel="What it represents"
      />

      {/* Extract 2: Call centre problems */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-2 font-merriweather text-foreground">
            Activity 11: Extract 2 — Call Centre Problems
          </h3>
          <p className="text-muted-foreground mb-6">
            Listen to the second extract and tick the call centre problems they discuss.
          </p>
          <div className="space-y-3">
            {callCentreProblems.map((problem, index) => (
              <div
                key={index}
                onClick={() => toggleProblem(index)}
                className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition-all ${
                  tickedProblems.has(index)
                    ? showProblemAnswers
                      ? correctProblems.has(index)
                        ? "bg-green-50 border-green-500"
                        : "bg-red-50 border-red-500"
                      : "bg-blue-50 border-blue-400"
                    : showProblemAnswers && correctProblems.has(index)
                    ? "bg-green-50/50 border-green-300"
                    : "border-border hover:bg-blue-50/30"
                }`}
              >
                <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                  tickedProblems.has(index) ? "bg-primary border-primary" : "border-muted-foreground/30"
                }`}>
                  {tickedProblems.has(index) && <CheckCircle2 className="h-4 w-4 text-white" />}
                </div>
                <span className="text-foreground">{problem}</span>
              </div>
            ))}
          </div>
          <Button onClick={() => setShowProblemAnswers(true)} className="mt-4 bg-primary hover:bg-primary/90">
            Check Answers
          </Button>
          {showProblemAnswers && (
            <p className="mt-3 text-sm text-muted-foreground">
              ✅ The problems discussed are: Difficulties with customer complaints, Staff shortages, and Stress.
            </p>
          )}
        </CardContent>
      </Card>

      {/* Extract 3: Gap fill */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-2 font-merriweather text-foreground">
            Activity 12: Extract 3 — Complete the Sentences
          </h3>
          <p className="text-muted-foreground mb-6">
            Listen to the third extract and complete the sentences with the missing words.
          </p>
          <div className="space-y-4">
            {sentenceGaps.map((gap) => (
              <div key={gap.id} className="flex flex-wrap items-center gap-2 p-3 border border-border rounded-lg">
                <span className="font-bold text-muted-foreground">{gap.id}.</span>
                <span className="text-foreground">{gap.before}</span>
                <input
                  type="text"
                  value={gapAnswers[gap.id] || ""}
                  onChange={(e) => setGapAnswers((prev) => ({ ...prev, [gap.id]: e.target.value }))}
                  className={`border-b-2 px-2 py-1 w-32 text-center outline-none ${
                    showGapAnswers
                      ? (gapAnswers[gap.id] || "").toLowerCase().trim() === gap.answer.toLowerCase()
                        ? "border-green-500 text-green-700"
                        : "border-red-500 text-red-700"
                      : "border-muted-foreground/30 focus:border-primary"
                  }`}
                  placeholder="______"
                />
                <span className="text-foreground">{gap.after}</span>
                {showGapAnswers && (gapAnswers[gap.id] || "").toLowerCase().trim() !== gap.answer.toLowerCase() && (
                  <span className="text-sm text-green-600 ml-2">({gap.answer})</span>
                )}
              </div>
            ))}
          </div>
          <Button onClick={() => setShowGapAnswers(true)} className="mt-4 bg-primary hover:bg-primary/90">
            Check Answers
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ListeningUnit2;
