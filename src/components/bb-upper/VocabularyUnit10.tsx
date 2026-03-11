import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, RotateCcw } from "lucide-react";

/* ── Exercise 1 data ── */

const verbs = ["raise", "borrow", "carry out", "launch", "cover", "write", "repay"];
const nouns = ["a business plan", "a company", "a loan", "finance", "market research", "money", "overheads"];

const validPairs: [string, string][] = [
  ["raise", "a loan"], ["raise", "finance"], ["raise", "money"],
  ["borrow", "money"],
  ["carry out", "market research"],
  ["launch", "a company"],
  ["cover", "overheads"],
  ["write", "a business plan"],
  ["repay", "a loan"], ["repay", "money"],
];

const sampleSentences: { phrase: string; sentence: string }[] = [
  { phrase: "raise finance", sentence: "We need to raise finance before we can open the new branch." },
  { phrase: "raise a loan", sentence: "She decided to raise a loan from the bank to fund her start-up." },
  { phrase: "borrow money", sentence: "He had to borrow money from his family to cover the initial costs." },
  { phrase: "carry out market research", sentence: "It's essential to carry out market research before launching a new product." },
  { phrase: "launch a company", sentence: "They plan to launch a company specialising in organic food delivery." },
  { phrase: "cover overheads", sentence: "The business needs to generate enough revenue to cover overheads like rent and utilities." },
  { phrase: "write a business plan", sentence: "The bank asked her to write a business plan before approving the loan." },
  { phrase: "repay a loan", sentence: "It took them three years to repay the loan in full." },
];

const isPairValid = (verb: string, noun: string) =>
  validPairs.some(([v, n]) => v === verb && n === noun);

/* ── Exercise 2 data ── */

interface GapSentence {
  before: string;
  after: string;
  acceptedAnswers: string[];
}

const gapExercise: GapSentence[] = [
  { before: "Before you start a business or ", after: ", it's a good idea to ", acceptedAnswers: ["launch a company"] },
  { before: "", after: " to see if anyone will buy your product.", acceptedAnswers: ["carry out market research"] },
  { before: "If you don't have a lot of personal savings, it may be necessary to ", after: ".", acceptedAnswers: ["raise finance", "borrow money", "raise money"] },
  { before: "This may involve taking out a mortgage or some other form of loan from a bank, in which case you will have to ", after: ".", acceptedAnswers: ["write a business plan"] },
  { before: "This will show how you plan to set up and run your business. In your business plan, you will have to forecast sales and profits because the bank will want to be sure that you can ", after: ",", acceptedAnswers: ["repay a loan", "repay the loan", "repay money"] },
  { before: " as well as ", after: " such as the cost of electricity or social security.", acceptedAnswers: ["cover overheads"] },
];

/* ── Exercise 1: Two-column click-to-pair ── */

const MatchingExercise = () => {
  const [selectedVerb, setSelectedVerb] = useState<string | null>(null);
  const [selectedNoun, setSelectedNoun] = useState<string | null>(null);
  const [foundPairs, setFoundPairs] = useState<[string, string][]>([]);
  const [wrongFlash, setWrongFlash] = useState(false);
  const allFound = foundPairs.length === validPairs.length;

  const tryMatch = (verb: string, noun: string) => {
    if (isPairValid(verb, noun) && !foundPairs.some(([v, n]) => v === verb && n === noun)) {
      setFoundPairs((prev) => [...prev, [verb, noun]]);
    } else {
      setWrongFlash(true);
      setTimeout(() => setWrongFlash(false), 500);
    }
    setSelectedVerb(null);
    setSelectedNoun(null);
  };

  const handleVerbClick = (verb: string) => {
    if (allFound) return;
    if (selectedVerb === verb) { setSelectedVerb(null); return; }
    setSelectedVerb(verb);
    if (selectedNoun) tryMatch(verb, selectedNoun);
  };

  const handleNounClick = (noun: string) => {
    if (allFound) return;
    if (selectedNoun === noun) { setSelectedNoun(null); return; }
    setSelectedNoun(noun);
    if (selectedVerb) tryMatch(selectedVerb, noun);
  };

  const handleReset = () => {
    setFoundPairs([]);
    setSelectedVerb(null);
    setSelectedNoun(null);
    setWrongFlash(false);
  };

  const verbPairCount = (verb: string) => foundPairs.filter(([v]) => v === verb).length;
  const verbTotal = (verb: string) => validPairs.filter(([v]) => v === verb).length;
  const isVerbDone = (verb: string) => verbPairCount(verb) === verbTotal(verb);

  const nounPairCount = (noun: string) => foundPairs.filter(([, n]) => n === noun).length;
  const nounTotal = (noun: string) => validPairs.filter(([, n]) => n === noun).length;
  const isNounDone = (noun: string) => nounPairCount(noun) === nounTotal(noun);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Exercise 1: Start-up opportunities</CardTitle>
        <p className="text-muted-foreground text-sm">
          Combine the verbs in column A with the nouns in column B to form phrases connected with starting companies.
          Click one from each column to make a pair. Some words can be used more than once.
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-4 md:gap-8 md:w-3/5 md:mx-auto">
          {/* Column A */}
          <div>
            <h3 className="font-bold text-sm mb-3 text-center text-muted-foreground">A</h3>
            <div className="border border-border rounded-lg p-3 space-y-2">
              {verbs.map((verb) => {
                const done = isVerbDone(verb);
                const active = selectedVerb === verb;
                return (
                  <button
                    key={verb}
                    onClick={() => handleVerbClick(verb)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm transition-all select-none border
                      ${done ? "bg-green-50 border-green-300 text-green-800 dark:bg-green-950/20 dark:border-green-700 dark:text-green-300" : ""}
                      ${active && !done ? "border-primary bg-primary/10 text-primary font-medium ring-2 ring-primary/30" : ""}
                      ${!active && !done ? "border-border bg-card hover:bg-accent cursor-pointer" : ""}
                      ${wrongFlash && active ? "animate-pulse border-destructive" : ""}
                    `}
                  >
                    {done && <CheckCircle className="h-3.5 w-3.5 inline mr-1.5" />}
                    {verb}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Column B */}
          <div>
            <h3 className="font-bold text-sm mb-3 text-center text-muted-foreground">B</h3>
            <div className="border border-border rounded-lg p-3 space-y-2">
              {nouns.map((noun) => {
                const done = isNounDone(noun);
                const active = selectedNoun === noun;
                return (
                  <button
                    key={noun}
                    onClick={() => handleNounClick(noun)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm transition-all select-none border
                      ${done ? "bg-green-50 border-green-300 text-green-800 dark:bg-green-950/20 dark:border-green-700 dark:text-green-300" : ""}
                      ${active && !done ? "border-primary bg-primary/10 text-primary font-medium ring-2 ring-primary/30" : ""}
                      ${!active && !done ? "border-border bg-card hover:bg-accent cursor-pointer" : ""}
                      ${wrongFlash && active ? "animate-pulse border-destructive" : ""}
                    `}
                  >
                    {done && <CheckCircle className="h-3.5 w-3.5 inline mr-1.5" />}
                    {noun}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Found pairs */}
        {foundPairs.length > 0 && (
          <div className="md:w-3/5 md:mx-auto">
            <p className="text-xs text-muted-foreground mb-2 font-medium">
              Matched pairs ({foundPairs.length}/{validPairs.length}):
            </p>
            <div className="flex flex-wrap gap-2">
              {foundPairs.map(([v, n], i) => (
                <span key={i} className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium bg-green-50 text-green-800 border border-green-200 dark:bg-green-950/20 dark:text-green-300 dark:border-green-800">
                  <CheckCircle className="h-3 w-3" /> {v} {n}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Controls */}
        <div className="flex items-center gap-3 md:w-3/5 md:mx-auto">
          <Button variant="outline" onClick={handleReset} className="gap-1">
            <RotateCcw className="h-4 w-4" /> Reset
          </Button>
          {allFound && (
            <span className="text-sm font-medium text-green-600 dark:text-green-400">🎉 All pairs found!</span>
          )}
        </div>

        {/* Sample sentences revealed on completion */}
        {allFound && (
          <div className="md:w-3/5 md:mx-auto bg-primary/5 rounded-lg border border-primary/20 p-5 space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <p className="font-semibold text-primary text-sm">Sample sentences using these phrases:</p>
            <ul className="space-y-2">
              {sampleSentences.map((s, i) => (
                <li key={i} className="text-sm leading-relaxed">
                  <span className="font-medium text-primary">{s.phrase}</span>
                  <span className="text-muted-foreground"> — </span>
                  <span className="italic text-foreground">{s.sentence}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

/* ── Exercise 2: Gap-fill ── */

const GapFillExercise = () => {
  const [answers, setAnswers] = useState<string[]>(gapExercise.map(() => ""));
  const [checked, setChecked] = useState(false);

  const phraseOptions = useMemo(() => {
    const phrases: string[] = [];
    validPairs.forEach(([v, n]) => {
      const p = `${v} ${n}`;
      if (!phrases.includes(p)) phrases.push(p);
    });
    return phrases.sort();
  }, []);

  const handleChange = (index: number, value: string) => {
    if (checked) return;
    setAnswers((prev) => { const u = [...prev]; u[index] = value; return u; });
  };

  const handleCheck = () => setChecked(true);
  const handleReset = () => { setAnswers(gapExercise.map(() => "")); setChecked(false); };

  const correctCount = checked
    ? gapExercise.filter((g, i) => g.acceptedAnswers.some((a) => a.toLowerCase() === answers[i].toLowerCase())).length
    : 0;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Exercise 2: Complete the sentences</CardTitle>
        <p className="text-muted-foreground text-sm">
          Use phrases from Exercise 1 to complete these sentences. Select the correct phrase for each gap.
        </p>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="leading-relaxed text-sm">
          {gapExercise.map((gap, i) => {
            const isCorrect = checked && gap.acceptedAnswers.some((a) => a.toLowerCase() === answers[i].toLowerCase());
            const isWrong = checked && answers[i] && !isCorrect;
            return (
              <span key={i}>
                {gap.before}
                <span className="inline-block mx-1 align-middle">
                  <select
                    value={answers[i]}
                    onChange={(e) => handleChange(i, e.target.value)}
                    disabled={checked}
                    className={`border rounded px-2 py-1 text-sm min-w-[180px] bg-background
                      ${isCorrect ? "border-green-500 bg-green-50 dark:bg-green-950/20" : ""}
                      ${isWrong ? "border-red-500 bg-red-50 dark:bg-red-950/20" : ""}
                      ${!checked ? "border-border" : ""}
                    `}
                  >
                    <option value="">— select —</option>
                    {phraseOptions.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                  {isCorrect && <CheckCircle className="h-3.5 w-3.5 inline ml-1 text-green-600" />}
                  {isWrong && (
                    <span className="inline-flex items-center ml-1 gap-1">
                      <XCircle className="h-3.5 w-3.5 text-red-600" />
                      <span className="text-xs text-green-600 dark:text-green-400">{gap.acceptedAnswers[0]}</span>
                    </span>
                  )}
                </span>
                {gap.after}
              </span>
            );
          })}
        </div>

        <div className="flex items-center gap-3 pt-4">
          <Button onClick={handleCheck} disabled={checked || answers.some((a) => !a)}>Check Answers</Button>
          <Button variant="outline" onClick={handleReset} className="gap-1"><RotateCcw className="h-4 w-4" /> Reset</Button>
          {checked && <span className="text-sm font-medium">{correctCount}/{gapExercise.length} correct</span>}
        </div>
      </CardContent>
    </Card>
  );
};

/* ── Main ── */

const VocabularyUnit10 = () => (
  <div className="space-y-8">
    <MatchingExercise />
    <GapFillExercise />
  </div>
);

export default VocabularyUnit10;
