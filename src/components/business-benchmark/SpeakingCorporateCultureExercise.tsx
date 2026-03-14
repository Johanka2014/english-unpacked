import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, XCircle, MessageSquare } from "lucide-react";

const allQuestions = [
  { id: "q1", text: "What's the name of your company?" },
  { id: "q2", text: "What's your job?" },
  { id: "q3", text: "What are you studying?" },
  { id: "q4", text: "What do you hope to do in the future?" },
  { id: "q5", text: "What do you enjoy about your job/studies?" },
  { id: "q6", text: "What time do you start and finish work?" },
  { id: "q7", text: "Do you do many different things in your work/studies?" },
  { id: "q8", text: "Do you travel much in your job?" },
  { id: "q9", text: "What exactly do you do?" },
  { id: "q10", text: "What are your plans for the future?" },
  { id: "q11", text: "What are your working hours?" },
  { id: "q12", text: "Who do you work for?" },
  { id: "q13", text: "What does your job involve?" },
  { id: "q14", text: "What do you do?" },
];

const correctPairs: Record<string, string> = {
  q1: "q12",
  q2: "q14",
  q4: "q10",
  q6: "q11",
  q9: "q13",
};

const pairQuestionIds = ["q1", "q2", "q4", "q6", "q9"];
const matchOptions = allQuestions.filter((q) => !pairQuestionIds.includes(q.id));

const unpaired = ["q3", "q5", "q7", "q8"];

const discussionQuestions = [
  { id: 1, question: "Is it important for a company to offer flexible hours?" },
  { id: 2, question: "Is it important for a company to give employees their own workspace?" },
  { id: 3, question: "Is it important for a company to provide Internet access for their employees?" },
  { id: 4, question: "Is it important for a company to offer training to its employees?" },
  { id: 5, question: "Is it important for a company to have a workforce with different types of people?" },
  { id: 6, question: "Is it important for a company to have rules about what its employees can wear?" },
];

const reasons = [
  { id: "a", text: "this is part of the company's image" },
  { id: "b", text: "different people can bring different ideas" },
  { id: "c", text: "some staff have family commitments" },
  { id: "d", text: "staff need a place to leave unfinished work" },
  { id: "e", text: "staff need to feel they can develop" },
  { id: "f", text: "staff sometimes need to look up information" },
];

const correctReasons: Record<number, string> = {
  1: "c",
  2: "d",
  3: "f",
  4: "e",
  5: "b",
  6: "a",
};

const SpeakingCorporateCultureExercise = () => {
  // Exercise 1 state
  const [pairSelections, setPairSelections] = useState<Record<string, string>>({});
  const [pairsChecked, setPairsChecked] = useState(false);

  // Exercise 3 state
  const [reasonSelections, setReasonSelections] = useState<Record<number, string>>({});
  const [reasonsChecked, setReasonsChecked] = useState(false);

  const checkPairs = () => setPairsChecked(true);
  const checkReasons = () => setReasonsChecked(true);

  return (
    <div className="space-y-8">
      {/* Exercise 1: Question Matching */}
      <Card className="service-card">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <MessageSquare className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-semibold font-merriweather text-foreground">Asking for Information</h3>
          </div>

          <h4 className="text-xl font-semibold mb-2 font-merriweather text-foreground">
            Exercise 1: Match the questions
          </h4>
          <p className="text-muted-foreground mb-6">
            Find five pairs of questions which have the same meaning. Match each question on the left with a question on the right.
          </p>

          <div className="space-y-4">
            {pairQuestionIds.map((qId) => {
              const q = allQuestions.find((x) => x.id === qId)!;
              const selected = pairSelections[qId];
              const isCorrect = pairsChecked && selected === correctPairs[qId];
              const isWrong = pairsChecked && selected && selected !== correctPairs[qId];

              return (
                <div
                  key={qId}
                  className={`p-4 rounded-lg border transition-colors ${
                    isCorrect
                      ? "border-green-500 bg-green-50 dark:bg-green-950/30"
                      : isWrong
                      ? "border-red-500 bg-red-50 dark:bg-red-950/30"
                      : "border-border bg-card"
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-3">
                    <p className="text-foreground font-medium flex-1">{q.text}</p>
                    <Select
                      value={selected || ""}
                      onValueChange={(val) =>
                        setPairSelections((prev) => ({ ...prev, [qId]: val }))
                      }
                      disabled={pairsChecked}
                    >
                      <SelectTrigger className="w-full md:w-72">
                        <SelectValue placeholder="Select matching question..." />
                      </SelectTrigger>
                      <SelectContent>
                        {matchOptions.map((opt) => (
                          <SelectItem key={opt.id} value={opt.id}>
                            {opt.text}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  {pairsChecked && isWrong && (
                    <div className="mt-2 flex items-center gap-2">
                      <XCircle className="h-4 w-4 text-red-600 shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        Correct answer: {allQuestions.find((x) => x.id === correctPairs[qId])?.text}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {pairsChecked && (
            <div className="mt-6 p-4 rounded-lg bg-muted/50 border border-border">
              <p className="text-sm font-medium text-foreground mb-1">Unpaired questions (no match):</p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                {unpaired.map((id) => (
                  <li key={id}>{allQuestions.find((x) => x.id === id)?.text}</li>
                ))}
              </ul>
            </div>
          )}

          <Button onClick={checkPairs} className="mt-6 bg-primary hover:bg-primary/90" disabled={pairsChecked}>
            Check Answers
          </Button>
        </CardContent>
      </Card>

      {/* Exercise 2: Pair Discussion */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h4 className="text-xl font-semibold mb-2 font-merriweather text-foreground">
            Exercise 2: Ask your partner
          </h4>
          <p className="text-muted-foreground mb-4">
            Choose three of the questions from Exercise 1 to ask your partner, then ask three more questions of your own. Remember to think about whether your partner is working or studying before choosing your questions.
          </p>
          <div className="bg-muted/50 rounded-lg p-4 border border-border">
            <p className="text-sm text-muted-foreground italic">
              💡 This is a speaking activity. Practise with a partner or your teacher.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Exercise 3: Company policy discussion with reasons */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h4 className="text-xl font-semibold mb-2 font-merriweather text-foreground">
            Exercise 3: Company policies — match questions with reasons
          </h4>
          <p className="text-muted-foreground mb-2">
            Match each question with the most appropriate reason from the box. Then add another reason or more detail of your own.
          </p>
          <p className="text-sm text-muted-foreground mb-6 italic">
            <strong>Example:</strong> "Is it important for a company to offer flexible hours?" — "Yes, because some staff have family commitments. It can be a good thing for working parents who need to organise childcare."
          </p>

          <div className="space-y-4">
            {discussionQuestions.map((dq) => {
              const selected = reasonSelections[dq.id];
              const isCorrect = reasonsChecked && selected === correctReasons[dq.id];
              const isWrong = reasonsChecked && selected && selected !== correctReasons[dq.id];

              return (
                <div
                  key={dq.id}
                  className={`p-4 rounded-lg border transition-colors ${
                    isCorrect
                      ? "border-green-500 bg-green-50 dark:bg-green-950/30"
                      : isWrong
                      ? "border-red-500 bg-red-50 dark:bg-red-950/30"
                      : "border-border bg-card"
                  }`}
                >
                  <p className="text-foreground font-medium mb-3">{dq.id}. {dq.question}</p>
                  <Select
                    value={selected || ""}
                    onValueChange={(val) =>
                      setReasonSelections((prev) => ({ ...prev, [dq.id]: val }))
                    }
                    disabled={reasonsChecked}
                  >
                    <SelectTrigger className="w-full md:w-96">
                      <SelectValue placeholder="Select a reason..." />
                    </SelectTrigger>
                    <SelectContent>
                      {reasons.map((r) => (
                        <SelectItem key={r.id} value={r.id}>
                          {r.id}) {r.text}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {reasonsChecked && isWrong && (
                    <div className="mt-2 flex items-center gap-2">
                      <XCircle className="h-4 w-4 text-red-600 shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        Best match: {reasons.find((r) => r.id === correctReasons[dq.id])?.text}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <Button onClick={checkReasons} className="mt-6 bg-primary hover:bg-primary/90" disabled={reasonsChecked}>
            Check Answers
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SpeakingCorporateCultureExercise;
