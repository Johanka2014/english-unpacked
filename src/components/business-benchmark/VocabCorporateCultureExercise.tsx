import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";

/* ── Activity 1: Olympus culture statement ── */
const olympusText = `People talk a lot about corporate culture these days but at Olympus we really pay attention to it. We aim to offer people challenging and rewarding work in a pleasant environment. Employees dress casually on days when there is no customer contact and this helps to create a friendly atmosphere. Developing and maintaining close partnerships with our customers is one of the keys to our success. Our customers appreciate that we offer high quality products at competitive prices and a high level of customer care. They rely on us to come up with solutions for their needs. And of course, customer care is not just about external customers. It is also about how we relate to each other and work together to pool our ideas. In short, Olympus is a great place to work.`;

/* ── Activity 2: Find adjective-noun collocations ── */
interface AdjNounQ {
  id: number;
  clue: string;
  answer: string;
  verb: string;
}

const adjNounFinds: AdjNounQ[] = [
  { id: 1, clue: "the normal way of doing something", answer: "standard procedure", verb: "follow" },
  { id: 2, clue: "(in the scores analysis) big danger", answer: "serious risk", verb: "take" },
];

/* ── Activity 3: Verb-noun collocations ── */
interface CollocationMatch {
  id: number;
  left: string;
  correctRight: string[];
}

const verbNounItems: CollocationMatch[] = [
  { id: 1, left: "pay", correctRight: ["attention (to something)"] },
  { id: 2, left: "create", correctRight: ["an opportunity", "a friendly atmosphere"] },
  { id: 3, left: "pool", correctRight: ["our ideas"] },
  { id: 4, left: "put forward", correctRight: ["a proposal"] },
  { id: 5, left: "hold", correctRight: ["a meeting"] },
  { id: 6, left: "reach", correctRight: ["a solution", "your full potential"] },
  { id: 7, left: "come up with", correctRight: ["a solution"] },
];

const nounOptions = [
  "a proposal",
  "a meeting",
  "our ideas",
  "a solution",
  "attention (to something)",
  "an opportunity",
  "your full potential",
];

/* ── Activity 4: Adjective-noun collocations ── */
const adjNounItems: CollocationMatch[] = [
  { id: 1, left: "challenging", correctRight: ["work"] },
  { id: 2, left: "rewarding", correctRight: ["work"] },
  { id: 3, left: "close", correctRight: ["contact", "partnership"] },
  { id: 4, left: "friendly", correctRight: ["atmosphere"] },
  { id: 5, left: "competitive", correctRight: ["price"] },
  { id: 6, left: "valuable", correctRight: ["resource"] },
];

const adjNounOptions = [
  "atmosphere",
  "work",
  "resource",
  "partnership",
  "contact",
  "price",
];

/* ── Activity 5: Word forms table ── */
const wordFormsData = [
  { verb: "satisfy", noun: "satisfaction", adjAnswer: "satisfying / satisfied" },
];

/* ── Activity 6: Odd one out ── */
const oddOneOutItems = [
  { id: 1, words: ["CEO", "PA", "CIO", "IT"], oddOne: "IT", explanation: "IT is a department, the others are job titles" },
  { id: 2, words: ["post", "place", "job", "role"], oddOne: "place", explanation: "'Place' is a location, the others mean a position/job" },
  { id: 3, words: ["local", "premises", "headquarters", "regional office"], oddOne: "local", explanation: "'Local' is an adjective, the others are types of business location" },
  { id: 4, words: ["board member", "manager", "client", "director"], oddOne: "client", explanation: "A client is a customer, the others are people within a company" },
  { id: 5, words: ["accountant", "systems analyst", "auditor", "financial director"], oddOne: "systems analyst", explanation: "A systems analyst works in IT, the others work in finance" },
  { id: 6, words: ["white-collar worker", "office worker", "administrative officer", "shop-floor worker"], oddOne: "shop-floor worker", explanation: "A shop-floor worker works in manufacturing, the others work in offices" },
  { id: 7, words: ["secretary", "personal assistant", "company secretary", "administrative assistant"], oddOne: "company secretary", explanation: "A company secretary is a senior legal/governance role, the others are support roles" },
  { id: 8, words: ["advertising", "public relations", "human resources", "marketing"], oddOne: "human resources", explanation: "HR deals with people management, the others are about promotion/communication" },
];

/* ── Activity 7: Gap fill ── */
const gapFillWords = ["teams", "deadlines", "launch", "projects", "targets", "satisfaction", "control", "budgets"];

const gapFillSentences = [
  { id: 1, before: "In my company, nearly all work is done in ", answer: "teams", after: ", and all" },
  { id: 2, before: "", answer: "deadlines", after: " our managers set are realistic." },
  { id: 3, before: "I found this quite easy to adapt to, because at Business School, we worked a lot together on ", answer: "projects", after: ", and this got me used to working towards goals and meeting" },
  { id: 4, before: " ", answer: "targets", after: "." },
  { id: 5, before: "I work in Research and Development of new products, and we get real ", answer: "satisfaction", after: " from taking new products through from the original idea to the" },
  { id: 6, before: " ", answer: "launch", after: " perhaps one or two years later." },
  { id: 7, before: "I'm a financial manager, so a lot of my work involves ensuring high cost ", answer: "control", after: " in our projects while they keep within their" },
  { id: 8, before: " ", answer: "budgets", after: "." },
];

/* ── Activity 8: Compound nouns ── */
const compoundBoxA = ["finance", "job", "team", "product", "advertising", "office", "sales", "work"];
const compoundBoxB = ["budget", "development", "forecast", "manager", "satisfaction", "work", "place", "worker"];

const compoundAnswers = [
  "finance manager", "finance budget",
  "job satisfaction",
  "team manager", "team worker",
  "product development", "product manager",
  "advertising budget", "advertising manager",
  "office manager", "office worker",
  "sales manager", "sales forecast", "sales budget", "sales worker",
  "work place",
];

const VocabCorporateCultureExercise = () => {
  /* Activity 2 state */
  const [adjNounAnswers, setAdjNounAnswers] = useState<Record<number, string>>({});
  const [adjNounVerbAnswers, setAdjNounVerbAnswers] = useState<Record<number, string>>({});
  const [adjNounChecked, setAdjNounChecked] = useState(false);

  /* Activity 3 state */
  const [verbSelections, setVerbSelections] = useState<Record<number, string>>({});
  const [verbChecked, setVerbChecked] = useState(false);

  /* Activity 4 state */
  const [adjSelections, setAdjSelections] = useState<Record<number, string>>({});
  const [adjChecked, setAdjChecked] = useState(false);

  /* Activity 5 state */
  const [wordFormAnswer, setWordFormAnswer] = useState("");
  const [wordFormChecked, setWordFormChecked] = useState(false);

  /* Activity 6 state */
  const [oddSelections, setOddSelections] = useState<Record<number, string>>({});
  const [oddChecked, setOddChecked] = useState(false);

  /* Activity 7 state */
  const [gapSelections, setGapSelections] = useState<Record<number, string>>({});
  const [gapChecked, setGapChecked] = useState(false);

  /* Activity 8 state */
  const [compoundInputs, setCompoundInputs] = useState<string[]>(["", "", "", "", "", ""]);
  const [compoundChecked, setCompoundChecked] = useState(false);

  /* Activity 9 state - Dictionary classification */
  const [dictSelections, setDictSelections] = useState<Record<number, string>>({});
  const [dictChecked, setDictChecked] = useState(false);

  /* Activity 10 state - Challenge/Promote collocations */
  const [collocationInputs, setCollocationInputs] = useState<Record<string, string>>({});
  const [collocationChecked, setCollocationChecked] = useState(false);

  /* Activity 11 state - Definitions */
  const [defSelections, setDefSelections] = useState<Record<number, string>>({});
  const [defChecked, setDefChecked] = useState(false);

  const isCorrectAdj = (id: number) => {
    const item = adjNounFinds.find((i) => i.id === id);
    if (!item) return false;
    return adjNounAnswers[id]?.toLowerCase().trim() === item.answer.toLowerCase();
  };

  const isCorrectVerb = (id: number) => {
    const item = adjNounFinds.find((i) => i.id === id);
    if (!item) return false;
    return adjNounVerbAnswers[id]?.toLowerCase().trim() === item.verb.toLowerCase();
  };

  const isCompoundCorrect = (val: string) => {
    const cleaned = val.trim().toLowerCase();
    return cleaned && compoundAnswers.some((a) => a === cleaned);
  };

  return (
    <div className="space-y-8">
      {/* Info: Collocations */}
      <Card className="service-card border-primary/20">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">Collocations</h3>
          <p className="text-foreground leading-relaxed mb-3">
            When recording vocabulary, it is not always enough to write down single words. It is much more useful to record which words are often used together. These are called <strong>collocations</strong>. Usually the words are from different parts of speech.
          </p>
          <p className="text-muted-foreground text-sm">
            <strong>Verb-noun</strong> collocations like these are very useful: <em>reach a target</em>, <em>launch a product</em>.
          </p>
        </CardContent>
      </Card>

      {/* Activity 1: Olympus culture statement */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">1. Company Culture Statement</h3>
          <p className="text-muted-foreground mb-4">
            Read the following company culture statement. As you read, try to identify the collocations used.
          </p>
          <div className="bg-muted/30 rounded-lg p-6 border border-border">
            <h4 className="text-lg font-bold text-foreground mb-3 uppercase tracking-wide">About OLYMPUS</h4>
            <p className="text-foreground leading-relaxed">{olympusText}</p>
          </div>
        </CardContent>
      </Card>

      {/* Activity 2: Find adjective-noun collocations */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">2. Find the Collocations</h3>
          <p className="text-muted-foreground mb-6">
            Find <strong>adjective-noun</strong> collocations in the quiz and the culture statement with these meanings. Then write the verb that commonly comes before each collocation.
          </p>
          <div className="space-y-5">
            {adjNounFinds.map((item) => (
              <div key={item.id} className="space-y-2">
                <p className="text-foreground text-sm">
                  <span className="font-bold text-primary mr-2">{item.id}.</span>
                  {item.clue}
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground w-10">Verb:</span>
                    <Input
                      placeholder="verb"
                      className={`w-32 ${adjNounChecked ? (isCorrectVerb(item.id) ? "border-green-500 bg-green-50" : "border-red-500 bg-red-50") : ""}`}
                      value={adjNounVerbAnswers[item.id] || ""}
                      onChange={(e) => setAdjNounVerbAnswers((p) => ({ ...p, [item.id]: e.target.value }))}
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground w-16">Collocation:</span>
                    <Input
                      placeholder="adjective + noun"
                      className={`w-48 ${adjNounChecked ? (isCorrectAdj(item.id) ? "border-green-500 bg-green-50" : "border-red-500 bg-red-50") : ""}`}
                      value={adjNounAnswers[item.id] || ""}
                      onChange={(e) => setAdjNounAnswers((p) => ({ ...p, [item.id]: e.target.value }))}
                    />
                  </div>
                  {adjNounChecked && !isCorrectAdj(item.id) && (
                    <span className="text-xs text-muted-foreground">
                      ({item.verb} + {item.answer})
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
          <Button onClick={() => setAdjNounChecked(true)} className="mt-6 bg-primary hover:bg-primary/90">
            Check Answers
          </Button>
        </CardContent>
      </Card>

      {/* Activity 3: Verb-noun matching */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">3. Verb-Noun Collocations</h3>
          <p className="text-muted-foreground mb-6">
            Match each verb (1–7) with a noun (a–g) to make common collocations. Some words can be used more than once.
          </p>
          <div className="space-y-3">
            {verbNounItems.map((item) => {
              const selected = verbSelections[item.id];
              const correct = selected ? item.correctRight.includes(selected) : undefined;
              return (
                <div key={item.id} className="flex items-center gap-4 flex-wrap">
                  <span className="text-foreground font-medium w-40 shrink-0">{item.id}. {item.left}</span>
                  <Select
                    value={verbSelections[item.id] || ""}
                    onValueChange={(val) => setVerbSelections((p) => ({ ...p, [item.id]: val }))}
                  >
                    <SelectTrigger className={`w-56 ${verbChecked ? (correct ? "border-green-500 bg-green-50" : "border-red-500 bg-red-50") : ""}`}>
                      <SelectValue placeholder="Select a noun…" />
                    </SelectTrigger>
                    <SelectContent>
                      {nounOptions.map((n) => (
                        <SelectItem key={n} value={n}>{n}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {verbChecked && (
                    correct
                      ? <CheckCircle className="h-5 w-5 text-green-600 shrink-0" />
                      : <>
                          <XCircle className="h-5 w-5 text-red-600 shrink-0" />
                          <span className="text-xs text-muted-foreground">{item.correctRight[0]}</span>
                        </>
                  )}
                </div>
              );
            })}
          </div>
          <Button onClick={() => setVerbChecked(true)} className="mt-6 bg-primary hover:bg-primary/90">
            Check Answers
          </Button>
        </CardContent>
      </Card>

      {/* Activity 4: Adjective-noun matching */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">4. Adjective-Noun Collocations</h3>
          <p className="text-muted-foreground mb-6">
            Match each adjective (1–6) with a noun (a–f). You can use the adjectives more than once.
          </p>
          <div className="space-y-3">
            {adjNounItems.map((item) => {
              const selected = adjSelections[item.id];
              const correct = selected ? item.correctRight.includes(selected) : undefined;
              return (
                <div key={item.id} className="flex items-center gap-4 flex-wrap">
                  <span className="text-foreground font-medium w-36 shrink-0">{item.id}. {item.left}</span>
                  <Select
                    value={adjSelections[item.id] || ""}
                    onValueChange={(val) => setAdjSelections((p) => ({ ...p, [item.id]: val }))}
                  >
                    <SelectTrigger className={`w-48 ${adjChecked ? (correct ? "border-green-500 bg-green-50" : "border-red-500 bg-red-50") : ""}`}>
                      <SelectValue placeholder="Select a noun…" />
                    </SelectTrigger>
                    <SelectContent>
                      {adjNounOptions.map((n) => (
                        <SelectItem key={n} value={n}>{n}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {adjChecked && (
                    correct
                      ? <CheckCircle className="h-5 w-5 text-green-600 shrink-0" />
                      : <>
                          <XCircle className="h-5 w-5 text-red-600 shrink-0" />
                          <span className="text-xs text-muted-foreground">{item.correctRight[0]}</span>
                        </>
                  )}
                </div>
              );
            })}
          </div>
          <Button onClick={() => setAdjChecked(true)} className="mt-6 bg-primary hover:bg-primary/90">
            Check Answers
          </Button>
        </CardContent>
      </Card>

      {/* ── WORKBOOK EXERCISES ── */}
      <div className="pt-4">
        <h2 className="text-2xl font-bold font-merriweather text-foreground mb-6 border-b border-border pb-3">Workbook Exercises</h2>
      </div>

      {/* Activity 5: Word forms */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">5. Word Forms</h3>
          <p className="text-muted-foreground mb-6">Complete the missing adjective form.</p>
          <div className="overflow-x-auto">
            <table className="w-full max-w-md border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-3 text-foreground font-semibold">Verb</th>
                  <th className="text-left p-3 text-foreground font-semibold">Noun</th>
                  <th className="text-left p-3 text-foreground font-semibold">Adjective</th>
                </tr>
              </thead>
              <tbody>
                {wordFormsData.map((row, i) => (
                  <tr key={i} className="border-b border-border">
                    <td className="p-3 text-foreground">{row.verb}</td>
                    <td className="p-3 text-foreground">{row.noun}</td>
                    <td className="p-3">
                      <Input
                        value={wordFormAnswer}
                        onChange={(e) => setWordFormAnswer(e.target.value)}
                        placeholder="adjective"
                        disabled={wordFormChecked}
                        className={`w-40 ${
                          wordFormChecked
                            ? row.adjAnswer.toLowerCase().split(" / ").some((a) => a === wordFormAnswer.trim().toLowerCase())
                              ? "border-green-500 bg-green-50 dark:bg-green-950/30"
                              : "border-red-500 bg-red-50 dark:bg-red-950/30"
                            : ""
                        }`}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {wordFormChecked && (
            <p className="text-sm text-muted-foreground mt-3">Accepted answers: <strong>{wordFormsData[0].adjAnswer}</strong></p>
          )}
          <Button onClick={() => setWordFormChecked(true)} className="mt-6 bg-primary hover:bg-primary/90" disabled={wordFormChecked}>
            Check Answer
          </Button>
        </CardContent>
      </Card>

      {/* Activity 6: Odd one out */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">6. Odd One Out</h3>
          <p className="text-muted-foreground mb-6">Circle the odd one out in each group.</p>
          <div className="space-y-4">
            {oddOneOutItems.map((item) => {
              const selected = oddSelections[item.id];
              const isCorrect = oddChecked && selected === item.oddOne;
              const isWrong = oddChecked && selected && selected !== item.oddOne;
              return (
                <div key={item.id} className={`p-4 rounded-lg border transition-colors ${
                  isCorrect ? "border-green-500 bg-green-50 dark:bg-green-950/30" :
                  isWrong ? "border-red-500 bg-red-50 dark:bg-red-950/30" :
                  "border-border bg-card"
                }`}>
                  <p className="text-sm font-bold text-primary mb-2">{item.id}.</p>
                  <div className="flex flex-wrap gap-2">
                    {item.words.map((word) => (
                      <button
                        key={word}
                        onClick={() => !oddChecked && setOddSelections((p) => ({ ...p, [item.id]: word }))}
                        disabled={oddChecked}
                        className={`px-3 py-1.5 rounded-md border text-sm transition-colors ${
                          selected === word
                            ? "border-primary bg-primary/10 text-foreground font-medium"
                            : "border-border bg-card text-foreground hover:border-primary/50"
                        }`}
                      >
                        {word}
                      </button>
                    ))}
                  </div>
                  {oddChecked && (
                    <p className="text-sm text-muted-foreground mt-2">
                      {isCorrect ? "✓ " : `✗ The odd one out is "${item.oddOne}" — `}{item.explanation}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
          <Button onClick={() => setOddChecked(true)} className="mt-6 bg-primary hover:bg-primary/90" disabled={oddChecked}>
            Check Answers
          </Button>
        </CardContent>
      </Card>

      {/* Activity 7: Gap fill */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">7. Complete the Text</h3>
          <p className="text-muted-foreground mb-4">Complete the text with the words in the box.</p>
          <div className="flex flex-wrap gap-2 mb-6 p-3 bg-muted/30 rounded-lg border border-border">
            {gapFillWords.map((w) => (
              <span key={w} className="px-3 py-1 rounded-md bg-primary/10 text-foreground text-sm font-medium">{w}</span>
            ))}
          </div>
          <div className="space-y-3">
            {gapFillSentences.map((s) => (
              <div key={s.id} className="flex items-center flex-wrap gap-1 text-foreground leading-relaxed">
                <span>{s.before}</span>
                <Select
                  value={gapSelections[s.id] || ""}
                  onValueChange={(val) => setGapSelections((p) => ({ ...p, [s.id]: val }))}
                  disabled={gapChecked}
                >
                  <SelectTrigger className={`w-36 inline-flex ${
                    gapChecked
                      ? gapSelections[s.id] === s.answer
                        ? "border-green-500 bg-green-50 dark:bg-green-950/30"
                        : "border-red-500 bg-red-50 dark:bg-red-950/30"
                      : ""
                  }`}>
                    <SelectValue placeholder="..." />
                  </SelectTrigger>
                  <SelectContent>
                    {gapFillWords.map((w) => (
                      <SelectItem key={w} value={w}>{w}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <span>{s.after}</span>
                {gapChecked && gapSelections[s.id] !== s.answer && (
                  <span className="text-xs text-muted-foreground ml-1">({s.answer})</span>
                )}
              </div>
            ))}
          </div>
          <Button onClick={() => setGapChecked(true)} className="mt-6 bg-primary hover:bg-primary/90" disabled={gapChecked}>
            Check Answers
          </Button>
        </CardContent>
      </Card>

      {/* Activity 8: Compound nouns */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">8. Compound Nouns</h3>
          <p className="text-muted-foreground mb-2">
            How many compound nouns can you make by combining a word from Box A with one from Box B? In some cases, more than one combination is possible.
          </p>
          <p className="text-sm text-muted-foreground mb-6 italic">
            Compound nouns (e.g. <em>human resources manager</em>, <em>team leaders</em>) are very common in business English.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 bg-muted/30 rounded-lg border border-border">
              <p className="font-semibold text-foreground mb-2">Box A</p>
              <div className="flex flex-wrap gap-2">
                {compoundBoxA.map((w) => (
                  <span key={w} className="px-3 py-1 rounded-md bg-primary/10 text-foreground text-sm">{w}</span>
                ))}
              </div>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg border border-border">
              <p className="font-semibold text-foreground mb-2">Box B</p>
              <div className="flex flex-wrap gap-2">
                {compoundBoxB.map((w) => (
                  <span key={w} className="px-3 py-1 rounded-md bg-primary/10 text-foreground text-sm">{w}</span>
                ))}
              </div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-4">Write at least 6 compound nouns:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {compoundInputs.map((val, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-foreground font-medium w-6">{i + 1}.</span>
                <Input
                  value={val}
                  onChange={(e) => {
                    const next = [...compoundInputs];
                    next[i] = e.target.value;
                    setCompoundInputs(next);
                  }}
                  placeholder="e.g. team manager"
                  disabled={compoundChecked}
                  className={`${
                    compoundChecked
                      ? isCompoundCorrect(val)
                        ? "border-green-500 bg-green-50 dark:bg-green-950/30"
                        : val.trim()
                          ? "border-red-500 bg-red-50 dark:bg-red-950/30"
                          : ""
                      : ""
                  }`}
                />
              </div>
            ))}
          </div>
          {compoundChecked && (
            <div className="mt-4 p-4 bg-muted/30 rounded-lg border border-border">
              <p className="text-sm font-medium text-foreground mb-1">Possible compound nouns:</p>
              <p className="text-sm text-muted-foreground">{compoundAnswers.join(", ")}</p>
            </div>
          )}
          <Button onClick={() => setCompoundChecked(true)} className="mt-6 bg-primary hover:bg-primary/90" disabled={compoundChecked}>
            Check Answers
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default VocabCorporateCultureExercise;
