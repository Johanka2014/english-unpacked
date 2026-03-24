import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, RotateCcw } from "lucide-react";

/* ── Exercise 1: Odd One Out ── */

interface OddOneOutSet {
  words: string[];
  oddWord: string;
  explanation: string;
}

const oddOneSets: OddOneOutSet[] = [
  { words: ["secretary", "PA", "CEO", "typist"], oddWord: "CEO", explanation: "The others are support/administrative roles; CEO is a top executive." },
  { words: ["headquarters", "head office", "branch", "HQ"], oddWord: "branch", explanation: "The others all refer to the main office; a branch is a smaller local office." },
  { words: ["warehouse", "stockroom", "showroom", "storeroom"], oddWord: "showroom", explanation: "The others are for storing goods; a showroom is for displaying them." },
  { words: ["shop floor", "boardroom", "factory", "production facility"], oddWord: "boardroom", explanation: "The others are places where products are made; a boardroom is for meetings." },
  { words: ["facility", "shop", "outlet", "store"], oddWord: "facility", explanation: "The others are retail locations; facility is a general term for any building/site." },
  { words: ["the board", "shareholders", "management", "directors"], oddWord: "shareholders", explanation: "The others run the company; shareholders own shares but don't necessarily manage." },
  { words: ["back office", "research facility", "laboratory", "R&D"], oddWord: "back office", explanation: "The others relate to research and development; back office is administrative." },
  { words: ["develop", "innovate", "modify", "launch"], oddWord: "launch", explanation: "The others mean to create or change something; launch means to introduce it to the market." },
];

const OddOneOutExercise = () => {
  const [selections, setSelections] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);

  const handleSelect = (setIdx: number, word: string) => {
    if (checked) return;
    setSelections((prev) => ({ ...prev, [setIdx]: word }));
  };

  const correctCount = checked
    ? oddOneSets.filter((s, i) => selections[i] === s.oddWord).length
    : 0;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Exercise 1: Circle the odd word out</CardTitle>
        <p className="text-muted-foreground text-sm">
          Click the word that doesn't belong in each set.
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        {oddOneSets.map((set, i) => {
          const isCorrect = checked && selections[i] === set.oddWord;
          const isWrong = checked && selections[i] && selections[i] !== set.oddWord;
          return (
            <div key={i} className="space-y-1">
              <div className="flex items-center gap-1 flex-wrap">
                <span className="text-sm font-bold text-muted-foreground w-6">{i + 1}</span>
                {set.words.map((word) => {
                  const selected = selections[i] === word;
                  const isTheOdd = word === set.oddWord;
                  return (
                    <button
                      key={word}
                      onClick={() => handleSelect(i, word)}
                      className={`px-3 py-1.5 rounded-full text-sm border transition-all select-none
                        ${!checked && selected ? "border-primary bg-primary/10 text-primary font-medium ring-2 ring-primary/30" : ""}
                        ${!checked && !selected ? "border-border bg-card hover:bg-accent cursor-pointer" : ""}
                        ${checked && selected && isTheOdd ? "border-green-500 bg-green-50 text-green-800 dark:bg-green-950/20 dark:text-green-300 line-through decoration-2" : ""}
                        ${checked && selected && !isTheOdd ? "border-red-500 bg-red-50 text-red-800 dark:bg-red-950/20 dark:text-red-300" : ""}
                        ${checked && !selected && isTheOdd ? "border-green-400 bg-green-50/50 text-green-700 dark:bg-green-950/10 dark:text-green-400 ring-1 ring-green-400" : ""}
                        ${checked && !selected && !isTheOdd ? "border-border bg-card opacity-60" : ""}
                      `}
                    >
                      {word}
                    </button>
                  );
                })}
                {checked && isCorrect && <CheckCircle className="h-4 w-4 text-green-600 ml-1" />}
                {checked && isWrong && <XCircle className="h-4 w-4 text-red-600 ml-1" />}
              </div>
              {checked && (
                <p className="text-xs text-muted-foreground ml-7 italic">{set.explanation}</p>
              )}
            </div>
          );
        })}

        <div className="flex items-center gap-3 pt-4">
          <Button onClick={() => setChecked(true)} disabled={checked || Object.keys(selections).length < oddOneSets.length}>
            Check Answers
          </Button>
          <Button variant="outline" onClick={() => { setSelections({}); setChecked(false); }} className="gap-1">
            <RotateCcw className="h-4 w-4" /> Reset
          </Button>
          {checked && (
            <span className="text-sm font-medium">
              {correctCount}/{oddOneSets.length} correct
              {correctCount === oddOneSets.length && " 🎉"}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

/* ── Exercise 2a: Compound Noun Matching ── */

const boxA = ["cold", "cost", "eye", "ground", "job", "knowledge", "problem", "record", "team", "time"];
const boxB = ["breaking", "building", "calling", "catching", "consuming", "cutting", "sharing", "solving"];

const validCompounds: [string, string][] = [
  ["cold", "calling"],
  ["cost", "cutting"],
  ["eye", "catching"],
  ["ground", "breaking"],
  ["job", "sharing"],
  ["knowledge", "sharing"],
  ["problem", "solving"],
  ["record", "breaking"],
  ["team", "building"],
  ["time", "consuming"],
];

const isCompoundValid = (a: string, b: string) =>
  validCompounds.some(([x, y]) => x === a && y === b);

const CompoundMatchingExercise = () => {
  const [selectedA, setSelectedA] = useState<string | null>(null);
  const [selectedB, setSelectedB] = useState<string | null>(null);
  const [foundPairs, setFoundPairs] = useState<[string, string][]>([]);
  const [wrongFlash, setWrongFlash] = useState(false);

  const allFound = foundPairs.length === validCompounds.length;

  const tryMatch = (a: string, b: string) => {
    if (isCompoundValid(a, b) && !foundPairs.some(([x, y]) => x === a && y === b)) {
      setFoundPairs((prev) => [...prev, [a, b]]);
    } else {
      setWrongFlash(true);
      setTimeout(() => setWrongFlash(false), 500);
    }
    setSelectedA(null);
    setSelectedB(null);
  };

  const handleAClick = (word: string) => {
    if (allFound) return;
    if (selectedA === word) { setSelectedA(null); return; }
    setSelectedA(word);
    if (selectedB) tryMatch(word, selectedB);
  };

  const handleBClick = (word: string) => {
    if (allFound) return;
    if (selectedB === word) { setSelectedB(null); return; }
    setSelectedB(word);
    if (selectedA) tryMatch(selectedA, word);
  };

  const isADone = (w: string) => {
    const total = validCompounds.filter(([x]) => x === w).length;
    const found = foundPairs.filter(([x]) => x === w).length;
    return found === total;
  };
  const isBDone = (w: string) => {
    const total = validCompounds.filter(([, y]) => y === w).length;
    const found = foundPairs.filter(([, y]) => y === w).length;
    return found === total;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Exercise 2a: Make compound nouns or adjectives</CardTitle>
        <p className="text-muted-foreground text-sm">
          Combine words from Box A with words from Box B. Click one from each box to make a pair.
          Some words can be used more than once.
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-4 md:gap-8 md:w-3/5 md:mx-auto">
          <div>
            <h3 className="font-bold text-sm mb-3 text-center text-muted-foreground">A</h3>
            <div className="border border-border rounded-lg p-3 space-y-2">
              {boxA.map((w) => {
                const done = isADone(w);
                const active = selectedA === w;
                return (
                  <button key={w} onClick={() => handleAClick(w)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm transition-all select-none border
                      ${done ? "bg-green-50 border-green-300 text-green-800 dark:bg-green-950/20 dark:border-green-700 dark:text-green-300" : ""}
                      ${active && !done ? "border-primary bg-primary/10 text-primary font-medium ring-2 ring-primary/30" : ""}
                      ${!active && !done ? "border-border bg-card hover:bg-accent cursor-pointer" : ""}
                      ${wrongFlash && active ? "animate-pulse border-destructive" : ""}
                    `}>
                    {done && <CheckCircle className="h-3.5 w-3.5 inline mr-1.5" />}{w}
                  </button>
                );
              })}
            </div>
          </div>
          <div>
            <h3 className="font-bold text-sm mb-3 text-center text-muted-foreground">B</h3>
            <div className="border border-border rounded-lg p-3 space-y-2">
              {boxB.map((w) => {
                const done = isBDone(w);
                const active = selectedB === w;
                return (
                  <button key={w} onClick={() => handleBClick(w)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm transition-all select-none border
                      ${done ? "bg-green-50 border-green-300 text-green-800 dark:bg-green-950/20 dark:border-green-700 dark:text-green-300" : ""}
                      ${active && !done ? "border-primary bg-primary/10 text-primary font-medium ring-2 ring-primary/30" : ""}
                      ${!active && !done ? "border-border bg-card hover:bg-accent cursor-pointer" : ""}
                      ${wrongFlash && active ? "animate-pulse border-destructive" : ""}
                    `}>
                    {done && <CheckCircle className="h-3.5 w-3.5 inline mr-1.5" />}{w}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {foundPairs.length > 0 && (
          <div className="md:w-3/5 md:mx-auto">
            <p className="text-xs text-muted-foreground mb-2 font-medium">
              Matched ({foundPairs.length}/{validCompounds.length}):
            </p>
            <div className="flex flex-wrap gap-2">
              {foundPairs.map(([a, b], i) => (
                <span key={i} className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium bg-green-50 text-green-800 border border-green-200 dark:bg-green-950/20 dark:text-green-300 dark:border-green-800">
                  <CheckCircle className="h-3 w-3" /> {a}-{b}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="flex items-center gap-3 md:w-3/5 md:mx-auto">
          <Button variant="outline" onClick={() => { setFoundPairs([]); setSelectedA(null); setSelectedB(null); setWrongFlash(false); }} className="gap-1">
            <RotateCcw className="h-4 w-4" /> Reset
          </Button>
          {allFound && <span className="text-sm font-medium text-green-600 dark:text-green-400">🎉 All pairs found!</span>}
        </div>
      </CardContent>
    </Card>
  );
};

/* ── Exercise 2b: Gap-fill with compound nouns ── */

interface CompoundGap {
  before: string;
  after: string;
  answer: string;
}

const compoundGapSentences: CompoundGap[] = [
  { before: "A lot of you haven't worked together before, so before we start on the project, we're going to do some", after: "activities together.", answer: "team-building" },
  { before: "He only wants to work part-time, so he's interested in a", after: "arrangement with someone else in the office.", answer: "job-sharing" },
  { before: "I find a lot of this paperwork very", after: ", which is frustrating and stops me getting on with more vital work.", answer: "time-consuming" },
  { before: "In our laboratories in South Africa, we're doing some", after: ", totally innovative research.", answer: "ground-breaking" },
  { before: "The main purpose of this meeting is", after: ", so that at the end of the meeting, we'll all have told each other what we know about the latest marketing techniques.", answer: "knowledge-sharing" },
  { before: "Phoning a potential client whom you have never spoken to before –", after: "– is the part of my job I like least.", answer: "cold-calling" },
  { before: "The company is doing some", after: "by relocating headquarters out of the centre of town to a cheaper area.", answer: "cost-cutting" },
  { before: "The purpose of this brainstorming session is to think of some", after: "ideas to get us out of our present difficulties.", answer: "problem-solving" },
  { before: "The shareholders are really happy this year because our company has made", after: "profits.", answer: "record-breaking" },
  { before: "We need", after: "displays of our best products in our showroom.", answer: "eye-catching" },
];

const CompoundGapFill = () => {
  const [answers, setAnswers] = useState<string[]>(compoundGapSentences.map(() => ""));
  const [checked, setChecked] = useState(false);

  const options = useMemo(() =>
    validCompounds.map(([a, b]) => `${a}-${b}`).sort(),
    []
  );

  const handleChange = (i: number, val: string) => {
    if (checked) return;
    setAnswers((prev) => { const u = [...prev]; u[i] = val; return u; });
  };

  const correctCount = checked
    ? compoundGapSentences.filter((g, i) => answers[i].toLowerCase() === g.answer.toLowerCase()).length
    : 0;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Exercise 2b: Complete the sentences</CardTitle>
        <p className="text-muted-foreground text-sm">
          Use the compound nouns/adjectives from Exercise 2a to complete these sentences.
        </p>
      </CardHeader>
      <CardContent className="space-y-3">
        {compoundGapSentences.map((gap, i) => {
          const isCorrect = checked && answers[i].toLowerCase() === gap.answer.toLowerCase();
          const isWrong = checked && answers[i] && !isCorrect;
          return (
            <div key={i} className="text-sm leading-relaxed flex flex-wrap items-center gap-1">
              <span className="font-bold text-muted-foreground mr-1">{i + 1}</span>
              <span>{gap.before}</span>
              <select
                value={answers[i]}
                onChange={(e) => handleChange(i, e.target.value)}
                disabled={checked}
                className={`border rounded px-2 py-1 text-sm min-w-[160px] bg-background
                  ${isCorrect ? "border-green-500 bg-green-50 dark:bg-green-950/20" : ""}
                  ${isWrong ? "border-red-500 bg-red-50 dark:bg-red-950/20" : ""}
                  ${!checked ? "border-border" : ""}
                `}
              >
                <option value="">— select —</option>
                {options.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
              {isCorrect && <CheckCircle className="h-3.5 w-3.5 text-green-600" />}
              {isWrong && (
                <span className="inline-flex items-center gap-1">
                  <XCircle className="h-3.5 w-3.5 text-red-600" />
                  <span className="text-xs text-green-600 dark:text-green-400">{gap.answer}</span>
                </span>
              )}
              <span>{gap.after}</span>
            </div>
          );
        })}

        <div className="flex items-center gap-3 pt-4">
          <Button onClick={() => setChecked(true)} disabled={checked || answers.some((a) => !a)}>
            Check Answers
          </Button>
          <Button variant="outline" onClick={() => { setAnswers(compoundGapSentences.map(() => "")); setChecked(false); }} className="gap-1">
            <RotateCcw className="h-4 w-4" /> Reset
          </Button>
          {checked && <span className="text-sm font-medium">{correctCount}/{compoundGapSentences.length} correct{correctCount === compoundGapSentences.length && " 🎉"}</span>}
        </div>
      </CardContent>
    </Card>
  );
};

/* ── Main ── */

const VocabularyUnit11 = () => (
  <div className="space-y-8">
    <OddOneOutExercise />
    <CompoundMatchingExercise />
    <CompoundGapFill />
  </div>
);

export default VocabularyUnit11;
