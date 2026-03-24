import { useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, XCircle, RotateCcw, BookOpen, PenLine } from "lucide-react";

/* ── Task 1: Study sentences ── */
const proposalSentences = [
  {
    label: "A",
    content: (
      <p className="text-foreground text-sm">
        <strong>Although</strong> Glasgow has the largest number of students in Scotland, I suggest that we should recruit people who are already employed in the sector …
      </p>
    ),
  },
  {
    label: "B",
    content: (
      <p className="text-foreground text-sm">
        Property prices appear to be lower in Glasgow. <strong>However</strong>, it would be a good idea to try to find suitable premises in the Edinburgh area …
      </p>
    ),
  },
  {
    label: "C",
    content: (
      <p className="text-foreground text-sm">
        Glasgow has a dynamic and exciting lifestyle with many cultural events. <strong>On the other hand</strong>, Edinburgh is one of the cities with the highest quality of life in the UK.
      </p>
    ),
  },
];

/* ── Task 2: Grammar rule gap-fill ── */
interface RuleGap {
  id: number;
  answer: string[];
}

const ruleGaps: RuleGap[] = [
  { id: 1, answer: ["although"] },
  { id: 2, answer: ["however"] },
  { id: 3, answer: ["on the other hand"] },
];

/* ── Exercise 1: Sentence gap-fill ── */
interface SentenceGap {
  id: number;
  prefix: string;
  suffix: string;
  answer: string[];
}

const exercise1: SentenceGap[] = [
  { id: 1, prefix: "I asked for a loan", suffix: "interest rates were high.", answer: ["although"] },
  { id: 2, prefix: "", suffix: "we met our sales targets, my manager was not satisfied.", answer: ["although"] },
  { id: 3, prefix: "", suffix: "high interest rates, he took out a loan.", answer: ["in spite of", "despite"] },
  { id: 4, prefix: "The world economic situation was bad.", suffix: ", the firm decided to expand.", answer: ["however", "on the other hand"] },
  { id: 5, prefix: "He has original ideas.", suffix: ", he's bad at putting them into practice.", answer: ["however", "on the other hand"] },
  { id: 6, prefix: "", suffix: "the meeting lasted three hours, they were unable to reach a decision.", answer: ["although"] },
  { id: 7, prefix: "He couldn't convince them to buy the new machine", suffix: "he tried very hard.", answer: ["although", "despite"] },
  { id: 8, prefix: "He finds his job very stressful", suffix: "doing a stress-management course.", answer: ["despite", "in spite of"] },
  { id: 9, prefix: "", suffix: "I tidy my desk every day, it always ends up covered in papers.", answer: ["although"] },
];

/* ── Exercise 3 (from workshop): Complete sentences freely ── */
const freeSentences = [
  "Although our factory is rather old, ...",
  "We have a very small training budget. However, ...",
  "We do not pay our staff as much as our competitors. On the other hand, ...",
  "Our new CEO has made the company very successful, although ...",
  "The business was not very profitable last year. However, ...",
];

/* ── Exercise 2: Personal sentences ── */
const personalSentences = [
  "I am successful despite …",
  "I've made progress learning English, although …",
  "Although I enjoy some aspects of my work, …",
  "In spite of working hard, I …",
  "Money is important to me. On the other hand, …",
  "I like the town where I live, in spite of …",
];

/* ── Reusable gap-fill hook ── */
function useGapFill(count: number) {
  const [results, setResults] = useState<Record<number, "correct" | "incorrect" | null>>({});
  const [showResults, setShowResults] = useState(false);
  const inputRefs = useRef<Record<number, HTMLInputElement | null>>({});

  const check = (gaps: { id: number; answer: string[] }[]) => {
    const r: Record<number, "correct" | "incorrect"> = {};
    gaps.forEach((g) => {
      const val = inputRefs.current[g.id]?.value?.trim().toLowerCase() || "";
      r[g.id] = g.answer.some((a) => a.toLowerCase() === val) ? "correct" : "incorrect";
    });
    setResults(r);
    setShowResults(true);
  };

  const reset = () => {
    setResults({});
    setShowResults(false);
    Object.values(inputRefs.current).forEach((el) => {
      if (el) el.value = "";
    });
  };

  const ref = (id: number) => (el: HTMLInputElement | null) => {
    inputRefs.current[id] = el;
  };

  const correctCount = Object.values(results).filter((r) => r === "correct").length;

  return { results, showResults, check, reset, ref, correctCount };
}

/* ── Inline gap input ── */
const GapInput = ({
  id,
  result,
  inputRef,
  width = "w-32",
}: {
  id: number;
  result: "correct" | "incorrect" | null;
  inputRef: (el: HTMLInputElement | null) => void;
  width?: string;
}) => (
  <span className="relative inline-flex items-center mx-1">
    <Input
      ref={inputRef}
      className={`${width} h-7 text-sm inline-block ${
        result === "correct"
          ? "border-green-500 bg-green-50 dark:bg-green-950/30"
          : result === "incorrect"
          ? "border-red-500 bg-red-50 dark:bg-red-950/30"
          : ""
      }`}
      placeholder="…………"
      disabled={result === "correct"}
    />
    {result === "correct" && <CheckCircle2 className="h-3.5 w-3.5 text-green-600 ml-1 flex-shrink-0" />}
    {result === "incorrect" && <XCircle className="h-3.5 w-3.5 text-red-500 ml-1 flex-shrink-0" />}
  </span>
);

/* ── Feedback block ── */
const Feedback = ({
  show,
  correct,
  total,
  gaps,
  results,
}: {
  show: boolean;
  correct: number;
  total: number;
  gaps: { id: number; answer: string[] }[];
  results: Record<number, "correct" | "incorrect" | null>;
}) => {
  if (!show) return null;
  if (correct === total) {
    return (
      <div className="mt-4 p-4 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg text-center">
        <p className="text-green-700 dark:text-green-300 font-semibold">🎉 All correct!</p>
      </div>
    );
  }
  return (
    <div className="mt-4 p-3 bg-muted/50 rounded-lg">
      <p className="text-sm font-medium text-muted-foreground mb-2">Correct answers:</p>
      <ul className="text-sm space-y-1">
        {gaps.map((g) =>
          results[g.id] === "incorrect" ? (
            <li key={g.id} className="text-red-600 dark:text-red-400">
              {g.id}: <strong>{g.answer[0]}</strong>
            </li>
          ) : null
        )}
      </ul>
    </div>
  );
};

/* ══════════════════════════════════════════════════════ */
const GrammarWorkshopUnit11 = () => {
  const rule = useGapFill(ruleGaps.length);
  const ex1 = useGapFill(exercise1.length);

  return (
    <div className="space-y-8">
      {/* ── Grammar reference box ── */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-semibold font-merriweather text-foreground">
              Comparing and Contrasting Ideas
            </h3>
          </div>

          <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-300 dark:border-amber-800 rounded-lg p-5 space-y-4 text-sm text-foreground">
            <div>
              <p className="mb-1">■ <em>Although</em> joins two sentences:</p>
              <p className="italic ml-4">
                <strong>Although</strong> he left school at 16, he was a millionaire by the age of 30.
              </p>
            </div>
            <div>
              <p className="mb-1">■ <em>However</em> and <em>on the other hand</em> are adverbs and normally start new sentences:</p>
              <p className="italic ml-4">
                He was a lazy student. <strong>However,</strong> he became a hard-working and successful businessman.
              </p>
              <p className="italic ml-4">
                The risks are very high. <strong>On the other hand,</strong> the potential profit is enormous.
              </p>
            </div>
            <div>
              <p className="mb-1">■ <em>In spite of</em> and <em>despite</em> are followed by nouns or <em>-ing</em> forms:</p>
              <p className="italic ml-4">
                <strong>In spite of</strong> the risks, they decided to go it alone.
              </p>
              <p className="italic ml-4">
                <strong>Despite</strong> working very hard, their business was never very profitable.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ── Task 1: Study sentences ── */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            <span className="text-primary font-bold mr-2">1</span>
            Study these sentences from the proposal.
          </h3>
          <div className="space-y-3">
            {proposalSentences.map((s) => (
              <div key={s.label} className="flex gap-3 items-start">
                <span className="font-bold text-primary w-6 flex-shrink-0">{s.label}</span>
                {s.content}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* ── Task 2: Grammar rule gap-fill ── */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            <span className="text-primary font-bold mr-2">2</span>
            Complete this grammar rule with <em>although</em>, <em>however</em> and <em>on the other hand</em>.
          </h3>

          <div className="text-foreground text-sm leading-loose">
            <p>
              We use
              <GapInput id={1} result={rule.results[1] ?? null} inputRef={rule.ref(1)} width="w-28" />
              to join two sentences.
              <GapInput id={2} result={rule.results[2] ?? null} inputRef={rule.ref(2)} width="w-28" />
              and
              <GapInput id={3} result={rule.results[3] ?? null} inputRef={rule.ref(3)} width="w-40" />
              are used at the beginning of the second sentence to contrast it with the sentence before.
            </p>
          </div>

          <Feedback show={rule.showResults} correct={rule.correctCount} total={ruleGaps.length} gaps={ruleGaps} results={rule.results} />

          <div className="flex gap-3 mt-4">
            <Button onClick={() => rule.check(ruleGaps)} className="bg-primary hover:bg-primary/90">Check</Button>
            <Button onClick={rule.reset} variant="outline" className="gap-2"><RotateCcw className="h-4 w-4" /> Reset</Button>
          </div>
        </CardContent>
      </Card>

      {/* ── Exercise 1: Sentence completions ── */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            <span className="text-primary font-bold mr-2">1</span>
            Complete these sentences with <em>although</em>, <em>however</em>, <em>on the other hand</em>, <em>in spite of</em> or <em>despite</em>.
          </h3>

          <div className="space-y-4 mt-4">
            {exercise1.map((s) => (
              <div key={s.id} className="flex flex-wrap items-center gap-1 text-foreground text-sm leading-relaxed">
                <span className="font-bold text-primary w-6 flex-shrink-0">{s.id}</span>
                {s.prefix && <span>{s.prefix}</span>}
                <GapInput id={s.id} result={ex1.results[s.id] ?? null} inputRef={ex1.ref(s.id)} width="w-36" />
                <span>{s.suffix}</span>
              </div>
            ))}
          </div>

          <Feedback show={ex1.showResults} correct={ex1.correctCount} total={exercise1.length} gaps={exercise1} results={ex1.results} />

          <div className="flex gap-3 mt-6">
            <Button onClick={() => ex1.check(exercise1)} className="bg-primary hover:bg-primary/90">Check Answers</Button>
            <Button onClick={ex1.reset} variant="outline" className="gap-2"><RotateCcw className="h-4 w-4" /> Reset</Button>
          </div>
        </CardContent>
      </Card>

      {/* ── Exercise 2: Personal sentences ── */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <PenLine className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-semibold text-foreground">
              <span className="text-primary font-bold mr-2">2</span>
              Complete these sentences about yourself. Then compare your answers with a partner.
            </h3>
          </div>
          <div className="space-y-3">
            {personalSentences.map((s, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="font-bold text-primary w-6 flex-shrink-0">{i + 1}</span>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-1">{s}</p>
                  <Input placeholder="Write your answer here…" className="text-sm h-8" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* ── Exercise 3: Free completion ── */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <PenLine className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-semibold text-foreground">
              <span className="text-primary font-bold mr-2">3</span>
              Complete these sentences in any way you think is suitable.
            </h3>
          </div>
          <div className="space-y-3">
            {freeSentences.map((s, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="font-bold text-primary w-6 flex-shrink-0">{i + 1}</span>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-1">{s}</p>
                  <Textarea placeholder="Write your completion here…" className="text-sm min-h-[60px]" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* ── Exercise 4: Join sentences ── */}
      <JoinSentencesExercise />
    </div>
  );
};

/* ── Exercise 4: Join sentences using contrast words ── */

interface JoinItem {
  id: number;
  sentenceA: string;
  sentenceB: string;
  keyword: string;
  acceptedAnswers: string[];
}

const joinItems: JoinItem[] = [
  {
    id: 1, sentenceA: "He's very competent.", sentenceB: "He never got promotion.",
    keyword: "despite",
    acceptedAnswers: [
      "despite being very competent, he never got promotion",
      "despite being very competent he never got promotion",
      "he never got promotion despite being very competent",
      "despite his competence, he never got promotion",
      "despite his competence he never got promotion",
    ],
  },
  {
    id: 2, sentenceA: "They had a large budget.", sentenceB: "They ran short of money.",
    keyword: "although",
    acceptedAnswers: [
      "although they had a large budget, they ran short of money",
      "although they had a large budget they ran short of money",
      "they ran short of money although they had a large budget",
    ],
  },
  {
    id: 3, sentenceA: "We carried out market research.", sentenceB: "Our product failed.",
    keyword: "in spite of",
    acceptedAnswers: [
      "in spite of carrying out market research, our product failed",
      "in spite of carrying out market research our product failed",
      "our product failed in spite of carrying out market research",
      "in spite of the market research, our product failed",
      "in spite of the market research our product failed",
    ],
  },
  {
    id: 4, sentenceA: "The company was extremely successful.", sentenceB: "It had cashflow problems.",
    keyword: "although",
    acceptedAnswers: [
      "although the company was extremely successful, it had cashflow problems",
      "although the company was extremely successful it had cashflow problems",
      "the company had cashflow problems although it was extremely successful",
    ],
  },
  {
    id: 5, sentenceA: "We decided to rent the premises.", sentenceB: "The premises were extremely expensive.",
    keyword: "despite",
    acceptedAnswers: [
      "we decided to rent the premises despite them being extremely expensive",
      "despite the premises being extremely expensive, we decided to rent them",
      "despite the premises being extremely expensive we decided to rent them",
      "we decided to rent the premises despite the fact that they were extremely expensive",
      "despite being extremely expensive, we decided to rent the premises",
    ],
  },
  {
    id: 6, sentenceA: "Our agent didn't understand the market.", sentenceB: "He was a local man.",
    keyword: "although",
    acceptedAnswers: [
      "although he was a local man, our agent didn't understand the market",
      "although he was a local man our agent didn't understand the market",
      "our agent didn't understand the market although he was a local man",
      "although our agent was a local man, he didn't understand the market",
      "although our agent was a local man he didn't understand the market",
    ],
  },
  {
    id: 7, sentenceA: "We spent over £1m on advertising.", sentenceB: "Brand awareness didn't improve.",
    keyword: "in spite of",
    acceptedAnswers: [
      "in spite of spending over £1m on advertising, brand awareness didn't improve",
      "in spite of spending over £1m on advertising brand awareness didn't improve",
      "brand awareness didn't improve in spite of spending over £1m on advertising",
      "in spite of the £1m spent on advertising, brand awareness didn't improve",
    ],
  },
];

const JoinSentencesExercise = () => {
  const [answers, setAnswers] = useState<string[]>(joinItems.map(() => ""));
  const [checked, setChecked] = useState(false);
  const [results, setResults] = useState<boolean[]>([]);

  const handleChange = (i: number, val: string) => {
    if (checked) return;
    setAnswers((prev) => { const u = [...prev]; u[i] = val; return u; });
  };

  const handleCheck = () => {
    const r = joinItems.map((item, i) => {
      const userAns = answers[i].trim().toLowerCase().replace(/[.,!?]+$/, "");
      return item.acceptedAnswers.some((a) => a.toLowerCase() === userAns);
    });
    setResults(r);
    setChecked(true);
  };

  const handleReset = () => {
    setAnswers(joinItems.map(() => ""));
    setChecked(false);
    setResults([]);
  };

  const correctCount = results.filter(Boolean).length;

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <PenLine className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold text-foreground">
            <span className="text-primary font-bold mr-2">4</span>
            Join the sentences using the word given
          </h3>
        </div>
        <p className="text-sm text-muted-foreground mb-5">
          Rewrite each pair of sentences as one sentence using the contrast word in brackets.
        </p>

        <div className="space-y-5">
          {joinItems.map((item, i) => {
            const isCorrect = checked && results[i];
            const isWrong = checked && !results[i];
            return (
              <div key={item.id} className="space-y-2">
                <div className="flex gap-2 items-start">
                  <span className="font-bold text-primary w-6 flex-shrink-0">{item.id}</span>
                  <div>
                    <p className="text-sm text-foreground">{item.sentenceA} {item.sentenceB} <em className="text-primary font-medium">({item.keyword})</em></p>
                  </div>
                </div>
                <div className="ml-8">
                  <div className="relative">
                    <Input
                      value={answers[i]}
                      onChange={(e) => handleChange(i, e.target.value)}
                      disabled={checked}
                      placeholder="Write your combined sentence here…"
                      className={`text-sm pr-8
                        ${isCorrect ? "border-green-500 bg-green-50 dark:bg-green-950/20" : ""}
                        ${isWrong ? "border-red-500 bg-red-50 dark:bg-red-950/20" : ""}
                      `}
                    />
                    {isCorrect && <CheckCircle2 className="h-4 w-4 text-green-600 absolute right-2 top-1/2 -translate-y-1/2" />}
                    {isWrong && <XCircle className="h-4 w-4 text-red-600 absolute right-2 top-1/2 -translate-y-1/2" />}
                  </div>
                  {isWrong && (
                    <p className="text-xs text-green-600 dark:text-green-400 mt-1 italic">
                      Suggested: {item.acceptedAnswers[0].charAt(0).toUpperCase() + item.acceptedAnswers[0].slice(1)}.
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex items-center gap-3 mt-6">
          <Button onClick={handleCheck} disabled={checked || answers.some((a) => !a.trim())} className="bg-primary hover:bg-primary/90">
            Check Answers
          </Button>
          <Button onClick={handleReset} variant="outline" className="gap-2">
            <RotateCcw className="h-4 w-4" /> Reset
          </Button>
          {checked && (
            <span className="text-sm font-medium">
              {correctCount}/{joinItems.length} correct{correctCount === joinItems.length && " 🎉"}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default GrammarWorkshopUnit11;
