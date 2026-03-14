import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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

/* ── Exercise C: Complete with question words ── */
const questionWordOptions = ["Who", "How long", "Which", "Where", "When", "What", "How many", "How much", "How often", "Why"];
const questionWordItems = [
  { id: 1, blank: "", after: " is your boss?", answer: "Who" },
  { id: 2, blank: "", after: " have you worked for this company?", answer: "How long" },
  { id: 3, blank: "", after: " office would you prefer to work in: company headquarters or a regional office?", answer: "Which" },
  { id: 4, blank: "", after: " did you go to school — in this country or abroad?", answer: "Where" },
  { id: 5, blank: "", after: " does your HR department carry out formal appraisals — every six months, or more often?", answer: "When" },
  { id: 6, blank: "", after: " job would you like to be doing in ten years' time?", answer: "What" },
  { id: 7, blank: "", after: " people work in your office?", answer: "How many" },
  { id: 8, blank: "", after: " does your boss earn?", answer: "How much" },
];

/* ── Exercise D: Word order ── */
const wordOrderItems = [
  { id: 1, scrambled: "enjoy / do / most / what / about / you / your job", answer: "What do you enjoy most about your job?" },
  { id: 2, scrambled: "anything / is / dislike / there / about / you / your job", answer: "Is there anything you dislike about your job?" },
  { id: 3, scrambled: "how / do / often / you / have to / discipline / workers", answer: "How often do you have to discipline workers?" },
  { id: 4, scrambled: "how / many / are / people / there / in / your / store", answer: "How many people are there in your store?" },
  { id: 5, scrambled: "how / did / get / you / into / this / line of work", answer: "How did you get into this line of work?" },
  { id: 6, scrambled: "what / do / think / you / you / will be doing / in ten years' time", answer: "What do you think you will be doing in ten years' time?" },
];

/* ── Exercise E: Correct the mistakes ── */
const correctMistakeItems = [
  { id: 1, wrong: "How long you have worked for this company?", answer: "How long have you worked for this company?" },
  { id: 2, wrong: "When you left school?", answer: "When did you leave school?" },
  { id: 3, wrong: "How much do you earn in your actually job?", answer: "How much do you earn in your present job?" },
  { id: 4, wrong: "If we give you the job, when you can start?", answer: "If we give you the job, when can you start?" },
  { id: 5, wrong: "What you studied at university?", answer: "What did you study at university?" },
  { id: 6, wrong: "How long do you expect stay with us?", answer: "How long do you expect to stay with us?" },
  { id: 7, wrong: "Do you need speak English in your present job?", answer: "Do you need to speak English in your present job?" },
  { id: 8, wrong: "What do you find more challenging in your job?", answer: "What do you find most challenging in your job?" },
];

const GrammarCorporateCultureExercise = () => {
  const [crossOutAnswers, setCrossOutAnswers] = useState<Record<number, "A" | "B">>({});
  const [crossOutChecked, setCrossOutChecked] = useState(false);

  const [writeAnswers, setWriteAnswers] = useState<Record<number, string>>({});
  const [writeChecked, setWriteChecked] = useState(false);

  const [qWordSelections, setQWordSelections] = useState<Record<number, string>>({});
  const [qWordChecked, setQWordChecked] = useState(false);

  const [wordOrderAnswers, setWordOrderAnswers] = useState<Record<number, string>>({});
  const [wordOrderChecked, setWordOrderChecked] = useState(false);

  const [mistakeAnswers, setMistakeAnswers] = useState<Record<number, string>>({});
  const [mistakeChecked, setMistakeChecked] = useState(false);

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

      {/* ── WORKBOOK EXERCISES ── */}
      <div className="pt-4">
        <h2 className="text-2xl font-bold font-merriweather text-foreground mb-6 border-b border-border pb-3">Workbook Exercises</h2>
      </div>

      {/* Exercise C: Question words */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2 font-merriweather text-foreground">
            Exercise C: Complete with question words
          </h3>
          <p className="text-muted-foreground mb-6">
            Complete these questions with the correct question word or phrase. You will not need all the options.
          </p>
          <div className="space-y-4">
            {questionWordItems.map((item) => {
              const selected = qWordSelections[item.id];
              const isCorrect = qWordChecked && selected === item.answer;
              const isWrong = qWordChecked && selected && selected !== item.answer;
              return (
                <div key={item.id} className={`p-4 rounded-lg border transition-colors ${
                  isCorrect ? "border-green-500 bg-green-50 dark:bg-green-950/30" :
                  isWrong ? "border-red-500 bg-red-50 dark:bg-red-950/30" :
                  "border-border bg-card"
                }`}>
                  <div className="flex items-center flex-wrap gap-2 text-foreground">
                    <span className="font-bold text-primary">{item.id}.</span>
                    <Select
                      value={selected || ""}
                      onValueChange={(val) => setQWordSelections((p) => ({ ...p, [item.id]: val }))}
                      disabled={qWordChecked}
                    >
                      <SelectTrigger className="w-36">
                        <SelectValue placeholder="..." />
                      </SelectTrigger>
                      <SelectContent>
                        {questionWordOptions.map((w) => (
                          <SelectItem key={w} value={w}>{w}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <span>{item.after}</span>
                  </div>
                  {qWordChecked && isWrong && (
                    <p className="text-sm text-muted-foreground mt-2">Answer: <strong>{item.answer}</strong></p>
                  )}
                </div>
              );
            })}
          </div>
          <Button onClick={() => setQWordChecked(true)} className="mt-6 bg-primary hover:bg-primary/90" disabled={qWordChecked}>
            Check Answers
          </Button>
        </CardContent>
      </Card>

      {/* Exercise D: Word order */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2 font-merriweather text-foreground">
            Exercise D: Put the words in the correct order
          </h3>
          <p className="text-muted-foreground mb-6">
            Rearrange the words to form correct questions.
          </p>
          <div className="space-y-5">
            {wordOrderItems.map((item) => {
              const userVal = wordOrderAnswers[item.id]?.trim().toLowerCase().replace(/[?]/g, "") || "";
              const correctVal = item.answer.toLowerCase().replace(/[?]/g, "");
              const isCorrect = wordOrderChecked && userVal === correctVal;
              const isWrong = wordOrderChecked && userVal !== correctVal;
              return (
                <div key={item.id} className={`p-4 rounded-lg border transition-colors ${
                  isCorrect ? "border-green-500 bg-green-50 dark:bg-green-950/30" :
                  isWrong ? "border-red-500 bg-red-50 dark:bg-red-950/30" :
                  "border-border bg-card"
                }`}>
                  <p className="text-sm text-muted-foreground mb-2">
                    <span className="font-bold text-primary mr-1">{item.id}.</span>
                    <span className="italic">{item.scrambled}</span>
                  </p>
                  <Input
                    value={wordOrderAnswers[item.id] || ""}
                    onChange={(e) => setWordOrderAnswers((p) => ({ ...p, [item.id]: e.target.value }))}
                    placeholder="Write the question..."
                    disabled={wordOrderChecked}
                    className="max-w-lg"
                  />
                  {wordOrderChecked && isWrong && (
                    <p className="text-sm text-muted-foreground mt-2">Answer: <strong>{item.answer}</strong></p>
                  )}
                </div>
              );
            })}
          </div>
          <Button onClick={() => setWordOrderChecked(true)} className="mt-6 bg-primary hover:bg-primary/90" disabled={wordOrderChecked}>
            Check Answers
          </Button>
        </CardContent>
      </Card>

      {/* Exercise E: Correct the mistakes */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2 font-merriweather text-foreground">
            Exercise E: Correct the mistakes
          </h3>
          <p className="text-muted-foreground mb-6">
            Each of these questions has a mistake. Write the corrected version.
          </p>
          <div className="space-y-5">
            {correctMistakeItems.map((item) => {
              const userVal = mistakeAnswers[item.id]?.trim().toLowerCase().replace(/[?]/g, "") || "";
              const correctVal = item.answer.toLowerCase().replace(/[?]/g, "");
              const isCorrect = mistakeChecked && userVal === correctVal;
              const isWrong = mistakeChecked && userVal !== correctVal;
              return (
                <div key={item.id} className={`p-4 rounded-lg border transition-colors ${
                  isCorrect ? "border-green-500 bg-green-50 dark:bg-green-950/30" :
                  isWrong ? "border-red-500 bg-red-50 dark:bg-red-950/30" :
                  "border-border bg-card"
                }`}>
                  <p className="text-foreground mb-2">
                    <span className="font-bold text-primary mr-1">{item.id}.</span>
                    <span className="line-through text-muted-foreground">{item.wrong}</span>
                  </p>
                  <Input
                    value={mistakeAnswers[item.id] || ""}
                    onChange={(e) => setMistakeAnswers((p) => ({ ...p, [item.id]: e.target.value }))}
                    placeholder="Write the corrected question..."
                    disabled={mistakeChecked}
                    className="max-w-lg"
                  />
                  {mistakeChecked && isWrong && (
                    <p className="text-sm text-muted-foreground mt-2">Answer: <strong>{item.answer}</strong></p>
                  )}
                </div>
              );
            })}
          </div>
          <Button onClick={() => setMistakeChecked(true)} className="mt-6 bg-primary hover:bg-primary/90" disabled={mistakeChecked}>
            Check Answers
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default GrammarCorporateCultureExercise;
