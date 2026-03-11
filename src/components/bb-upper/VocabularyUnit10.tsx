import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, RotateCcw } from "lucide-react";

/* ── Exercise 1: Match verbs with nouns ── */

interface VerbMatch {
  verb: string;
  acceptedNouns: string[]; // all correct pairings
}

const verbMatches: VerbMatch[] = [
  { verb: "raise", acceptedNouns: ["a loan", "finance", "money"] },
  { verb: "borrow", acceptedNouns: ["money"] },
  { verb: "carry out", acceptedNouns: ["market research"] },
  { verb: "launch", acceptedNouns: ["a company"] },
  { verb: "cover", acceptedNouns: ["overheads"] },
  { verb: "write", acceptedNouns: ["a business plan"] },
  { verb: "repay", acceptedNouns: ["a loan", "money"] },
];

const allNouns = [
  "a business plan",
  "a company",
  "a loan",
  "finance",
  "market research",
  "money",
  "overheads",
];

/* ── Exercise 2: Gap-fill ── */

interface GapSentence {
  before: string;
  after: string;
  acceptedAnswers: string[]; // any of these is correct
}

const gapExercise: GapSentence[] = [
  {
    before: "Before you start a business or ",
    after: ", it's a good idea to ",
    acceptedAnswers: ["launch a company"],
  },
  {
    before: "",
    after: " to see if anyone will buy your product.",
    acceptedAnswers: ["carry out market research"],
  },
  {
    before: "If you don't have a lot of personal savings, it may be necessary to ",
    after: ".",
    acceptedAnswers: ["raise finance", "borrow money", "raise money"],
  },
  {
    before: "This may involve taking out a mortgage or some other form of loan from a bank, in which case you will have to ",
    after: ".",
    acceptedAnswers: ["write a business plan"],
  },
  {
    before: "This will show how you plan to set up and run your business. In your business plan, you will have to forecast sales and profits because the bank will want to be sure that you can ",
    after: ",",
    acceptedAnswers: ["repay a loan", "repay the loan", "repay money"],
  },
  {
    before: " as well as ",
    after: " such as the cost of electricity or social security.",
    acceptedAnswers: ["cover overheads"],
  },
];

/* ── Exercise 1 Component ── */

const MatchingExercise = () => {
  // For each verb, store which nouns the user has paired
  const [selections, setSelections] = useState<Record<string, string[]>>({});
  const [checked, setChecked] = useState(false);

  const toggleSelection = (verb: string, noun: string) => {
    if (checked) return;
    setSelections((prev) => {
      const current = prev[verb] || [];
      if (current.includes(noun)) {
        return { ...prev, [verb]: current.filter((n) => n !== noun) };
      }
      return { ...prev, [verb]: [...current, noun] };
    });
  };

  const handleCheck = () => setChecked(true);
  const handleReset = () => {
    setSelections({});
    setChecked(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Exercise 1: Start-up opportunities</CardTitle>
        <p className="text-muted-foreground text-sm">
          Combine the verbs with the nouns / noun phrases to form phrases connected with starting companies.
          Click the nouns that go with each verb. In some cases, more than one answer is possible.
        </p>
        <p className="text-xs text-muted-foreground italic">
          Example: raise a loan, raise finance, raise money
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        {verbMatches.map((vm) => {
          const selected = selections[vm.verb] || [];
          return (
            <div key={vm.verb} className="rounded-lg border border-border p-3">
              <span className="font-semibold text-primary text-sm">{vm.verb}</span>
              <div className="flex flex-wrap gap-2 mt-2">
                {allNouns.map((noun) => {
                  const isSelected = selected.includes(noun);
                  const isCorrect = vm.acceptedNouns.includes(noun);
                  const showCorrect = checked && isSelected && isCorrect;
                  const showWrong = checked && isSelected && !isCorrect;
                  const showMissed = checked && !isSelected && isCorrect;

                  return (
                    <button
                      key={noun}
                      onClick={() => toggleSelection(vm.verb, noun)}
                      className={`px-2.5 py-1 rounded-md text-sm border transition-all select-none
                        ${isSelected && !checked ? "border-primary bg-primary/10 text-primary font-medium" : ""}
                        ${!isSelected && !checked ? "border-border bg-card hover:bg-accent text-foreground" : ""}
                        ${showCorrect ? "border-green-500 bg-green-50 text-green-800 dark:bg-green-950/30 dark:text-green-300" : ""}
                        ${showWrong ? "border-red-500 bg-red-50 text-red-800 dark:bg-red-950/30 dark:text-red-300 line-through" : ""}
                        ${showMissed ? "border-green-400 bg-green-50/50 text-green-700 dark:bg-green-950/20 dark:text-green-400 ring-1 ring-dashed ring-green-400" : ""}
                        ${checked ? "cursor-default" : "cursor-pointer"}
                      `}
                    >
                      {showCorrect && <CheckCircle className="h-3 w-3 inline mr-1" />}
                      {showWrong && <XCircle className="h-3 w-3 inline mr-1" />}
                      {noun}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}

        <div className="flex items-center gap-3 pt-2">
          <Button onClick={handleCheck} disabled={checked}>
            Check Answers
          </Button>
          <Button variant="outline" onClick={handleReset} className="gap-1">
            <RotateCcw className="h-4 w-4" /> Reset
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

/* ── Exercise 2 Component ── */

const GapFillExercise = () => {
  const [answers, setAnswers] = useState<string[]>(gapExercise.map(() => ""));
  const [checked, setChecked] = useState(false);

  const phraseOptions = useMemo(() => {
    const phrases: string[] = [];
    verbMatches.forEach((vm) => {
      vm.acceptedNouns.forEach((noun) => {
        const phrase = `${vm.verb} ${noun}`;
        if (!phrases.includes(phrase)) phrases.push(phrase);
      });
    });
    return phrases.sort();
  }, []);

  const handleChange = (index: number, value: string) => {
    if (checked) return;
    setAnswers((prev) => {
      const updated = [...prev];
      updated[index] = value;
      return updated;
    });
  };

  const handleCheck = () => setChecked(true);
  const handleReset = () => {
    setAnswers(gapExercise.map(() => ""));
    setChecked(false);
  };

  const correctCount = checked
    ? gapExercise.filter((g, i) =>
        g.acceptedAnswers.some((a) => a.toLowerCase() === answers[i].toLowerCase())
      ).length
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
            const isCorrect =
              checked &&
              gap.acceptedAnswers.some(
                (a) => a.toLowerCase() === answers[i].toLowerCase()
              );
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
                      <span className="text-xs text-green-600 dark:text-green-400">
                        {gap.acceptedAnswers[0]}
                      </span>
                    </span>
                  )}
                </span>
                {gap.after}
              </span>
            );
          })}
        </div>

        <div className="flex items-center gap-3 pt-4">
          <Button onClick={handleCheck} disabled={checked || answers.some((a) => !a)}>
            Check Answers
          </Button>
          <Button variant="outline" onClick={handleReset} className="gap-1">
            <RotateCcw className="h-4 w-4" /> Reset
          </Button>
          {checked && (
            <span className="text-sm font-medium">
              {correctCount}/{gapExercise.length} correct
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

/* ── Main Component ── */

const VocabularyUnit10 = () => {
  return (
    <div className="space-y-8">
      <MatchingExercise />
      <GapFillExercise />
    </div>
  );
};

export default VocabularyUnit10;
