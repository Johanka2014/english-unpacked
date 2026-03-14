import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2, XCircle } from "lucide-react";

/* ── Exercise A: Cross out the wrong question ── */
const crossOutItems = [
  { id: 1, optionA: "happened", optionB: "did happen", correctWrong: "B", sentence: "What ___ to you?", full: ["What ", " to you?"] },
  { id: 2, optionA: "means this word", optionB: "does this word mean", correctWrong: "A", sentence: "What ___?", full: ["What ", "?"] },
  { id: 3, optionA: "came", optionB: "did come", correctWrong: "B", sentence: "How many people ___ to this class?", full: ["How many people ", " to this class?"] },
  { id: 4, optionA: "goes", optionB: "does go", correctWrong: "A", sentence: "Which bus ___ to the airport?", full: ["Which bus ", " to the airport?"] },
  { id: 5, optionA: "won", optionB: "did win", correctWrong: "B", sentence: "Which actor ___ the Oscar this year?", full: ["Which actor ", " the Oscar this year?"] },
  { id: 6, optionA: "said the teacher", optionB: "did the teacher say", correctWrong: "A", sentence: "What ___?", full: ["What ", "?"] },
];

/* ── Exercise B: Write the questions ── */
const writeQuestionItems = [
  { id: 1, before: "How many Formula 1 world championships ", after: "?", hint: "(Ayrton Senna / win)", answer: "did Ayrton Senna win" },
  { id: 2, before: "Which US president ", after: " the Nobel Peace Prize in 1990?", hint: "(win)", answer: "won" },
  { id: 3, before: "Who ", after: " the film Reservoir Dogs?", hint: "(direct)", answer: "directed" },
  { id: 4, before: "When ", after: " president of South Africa?", hint: "(Nelson Mandela / become)", answer: "did Nelson Mandela become" },
  { id: 5, before: "Who ", after: " The Lord of the Rings?", hint: "(write)", answer: "wrote" },
  { id: 6, before: "What ", after: " before he became a singer?", hint: "(Sting / do)", answer: "did Sting do" },
];

const GrammarCorporateCultureExercise = () => {
  const [crossOutAnswers, setCrossOutAnswers] = useState<Record<number, "A" | "B">>({});
  const [crossOutChecked, setCrossOutChecked] = useState(false);

  const [writeAnswers, setWriteAnswers] = useState<Record<number, string>>({});
  const [writeChecked, setWriteChecked] = useState(false);

  return (
    <div className="space-y-8">
      {/* Theory: Questions with and without auxiliaries */}
      <Card className="service-card border-primary/20">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-6 font-merriweather text-foreground">
            Questions With and Without Auxiliaries
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* With auxiliary */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Questions with an auxiliary</h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="border border-border p-2 text-left text-foreground">Question</th>
                      <th className="border border-border p-2 text-left text-foreground">Auxiliary</th>
                      <th className="border border-border p-2 text-left text-foreground">Subject</th>
                      <th className="border border-border p-2 text-left text-foreground">Infinitive</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-2 text-foreground">What music</td>
                      <td className="border border-border p-2 text-foreground font-medium">do</td>
                      <td className="border border-border p-2 text-foreground">you</td>
                      <td className="border border-border p-2 text-foreground">like?</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-2 text-foreground">Which CD</td>
                      <td className="border border-border p-2 text-foreground font-medium">did</td>
                      <td className="border border-border p-2 text-foreground">he</td>
                      <td className="border border-border p-2 text-foreground">buy?</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-2 text-foreground">Who</td>
                      <td className="border border-border p-2 text-foreground font-medium">did</td>
                      <td className="border border-border p-2 text-foreground">you</td>
                      <td className="border border-border p-2 text-foreground">go with?</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <ul className="text-sm text-foreground space-y-2 list-disc list-inside">
                <li>To make questions in the past and present simple, we normally use the auxiliary verbs <strong>do / does / did</strong> + the infinitive.</li>
                <li><em>What music <strong>do</strong> you like?</em> NOT <s>What music you like?</s></li>
                <li>The normal order for questions in the present and past is <strong>QUASI</strong> (Question word, Auxiliary, Subject, Infinitive).</li>
              </ul>
            </div>

            {/* Without auxiliary */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Questions without an auxiliary</h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="border border-border p-2 text-left text-foreground">Subject</th>
                      <th className="border border-border p-2 text-left text-foreground">Verb</th>
                      <th className="border border-border p-2 text-left text-foreground"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-2 text-foreground">What</td>
                      <td className="border border-border p-2 text-foreground font-medium">happened</td>
                      <td className="border border-border p-2 text-foreground">after the concert?</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-2 text-foreground">Which country</td>
                      <td className="border border-border p-2 text-foreground font-medium">won</td>
                      <td className="border border-border p-2 text-foreground">the Eurovision Song Contest?</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-2 text-foreground">Who</td>
                      <td className="border border-border p-2 text-foreground font-medium">writes</td>
                      <td className="border border-border p-2 text-foreground">their songs?</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <ul className="text-sm text-foreground space-y-2 list-disc list-inside">
                <li>When the question word (<em>Who? What? Which? How many?</em>) is the <strong>subject</strong> of the verb, we do <u>not</u> use an auxiliary (<em>do, does, did</em>) and the verb is in the third person.</li>
                <li><em>Who <strong>writes</strong> their songs?</em> NOT <s>Who does write their songs?</s></li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Exercise A: Cross out the wrong question */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2 font-merriweather text-foreground">
            Exercise A: Cross out the wrong form
          </h3>
          <p className="text-muted-foreground mb-6">
            Choose the correct form in each question. Click the <strong>wrong</strong> option to cross it out.
          </p>

          <div className="space-y-4">
            {crossOutItems.map((item) => {
              const selected = crossOutAnswers[item.id];
              const isCorrect = crossOutChecked && selected === item.correctWrong;
              const isWrong = crossOutChecked && selected && selected !== item.correctWrong;

              return (
                <div
                  key={item.id}
                  className={`p-4 rounded-lg border transition-colors ${
                    isCorrect ? "border-green-500 bg-green-50 dark:bg-green-950/30" :
                    isWrong ? "border-red-500 bg-red-50 dark:bg-red-950/30" :
                    "border-border bg-card"
                  }`}
                >
                  <p className="text-foreground mb-3">
                    <span className="font-bold text-primary mr-2">{item.id}.</span>
                    {item.full[0]}____{item.full[1]}
                  </p>
                  <div className="flex gap-3">
                    <button
                      onClick={() => !crossOutChecked && setCrossOutAnswers((p) => ({ ...p, [item.id]: "A" as const }))}
                      disabled={crossOutChecked}
                      className={`px-4 py-2 rounded-md border text-sm transition-all ${
                        selected === "A"
                          ? "border-primary bg-primary/10 line-through text-muted-foreground"
                          : "border-border bg-card text-foreground hover:border-primary/50"
                      }`}
                    >
                      {item.optionA}
                    </button>
                    <span className="text-muted-foreground self-center">/</span>
                    <button
                      onClick={() => !crossOutChecked && setCrossOutAnswers((p) => ({ ...p, [item.id]: "B" as const }))}
                      disabled={crossOutChecked}
                      className={`px-4 py-2 rounded-md border text-sm transition-all ${
                        selected === "B"
                          ? "border-primary bg-primary/10 line-through text-muted-foreground"
                          : "border-border bg-card text-foreground hover:border-primary/50"
                      }`}
                    >
                      {item.optionB}
                    </button>
                  </div>
                  {crossOutChecked && isWrong && (
                    <div className="mt-2 flex items-center gap-2">
                      <XCircle className="h-4 w-4 text-red-600 shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        The wrong form is: <s>{item.correctWrong === "A" ? item.optionA : item.optionB}</s>
                      </p>
                    </div>
                  )}
                  {crossOutChecked && isCorrect && (
                    <div className="mt-2 flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                      <p className="text-sm text-muted-foreground">Correct!</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <Button onClick={() => setCrossOutChecked(true)} className="mt-6 bg-primary hover:bg-primary/90" disabled={crossOutChecked}>
            Check Answers
          </Button>
        </CardContent>
      </Card>

      {/* Exercise B: Write the questions */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2 font-merriweather text-foreground">
            Exercise B: Write the questions
          </h3>
          <p className="text-muted-foreground mb-6">
            Complete each question using the word(s) in brackets. Decide whether you need an auxiliary verb or not.
          </p>

          <div className="space-y-5">
            {writeQuestionItems.map((item) => {
              const userAnswer = writeAnswers[item.id]?.trim().toLowerCase() || "";
              const isCorrect = writeChecked && userAnswer === item.answer.toLowerCase();
              const isWrong = writeChecked && userAnswer !== item.answer.toLowerCase();

              return (
                <div key={item.id} className={`p-4 rounded-lg border transition-colors ${
                  isCorrect ? "border-green-500 bg-green-50 dark:bg-green-950/30" :
                  isWrong ? "border-red-500 bg-red-50 dark:bg-red-950/30" :
                  "border-border bg-card"
                }`}>
                  <div className="flex flex-wrap items-center gap-1 text-foreground leading-relaxed">
                    <span className="font-bold text-primary mr-1">{item.id}.</span>
                    <span>{item.before}</span>
                    <Input
                      value={writeAnswers[item.id] || ""}
                      onChange={(e) => setWriteAnswers((p) => ({ ...p, [item.id]: e.target.value }))}
                      placeholder="..."
                      disabled={writeChecked}
                      className="w-48 inline-block mx-1"
                    />
                    <span>{item.after}</span>
                    <span className="text-sm text-muted-foreground ml-2 italic">{item.hint}</span>
                  </div>
                  {writeChecked && isWrong && (
                    <div className="mt-2 flex items-center gap-2">
                      <XCircle className="h-4 w-4 text-red-600 shrink-0" />
                      <p className="text-sm text-muted-foreground">Answer: <strong>{item.answer}</strong></p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <Button onClick={() => setWriteChecked(true)} className="mt-6 bg-primary hover:bg-primary/90" disabled={writeChecked}>
            Check Answers
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default GrammarCorporateCultureExercise;
