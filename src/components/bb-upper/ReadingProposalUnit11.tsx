import { useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, XCircle, RotateCcw, BookOpen, MessageSquare } from "lucide-react";

interface ProposalGap {
  id: number;
  answer: string[];
}

const gaps: ProposalGap[] = [
  { id: 1, answer: ["to"] },
  { id: 2, answer: ["which"] },
  { id: 3, answer: ["the"] },
  { id: 4, answer: ["because"] },
  { id: 5, answer: ["one"] },
  { id: 6, answer: ["for"] },
];

const comprehensionQuestions = [
  "What do you notice about the layout of the proposal?",
  "Does the proposal concentrate on the existing situation or what should be done next?",
  "What are the purposes of the first and the last sections?",
  "A proposal should usually be written in a formal style. Can you see any phrases or expressions which make this proposal sound formal?",
];

const ProposalSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="mb-4">
    <h5 className="text-primary font-bold text-sm uppercase tracking-wide mb-1">{title}</h5>
    <div className="text-foreground text-sm leading-relaxed">{children}</div>
  </div>
);

const GapInput = ({
  id,
  result,
  inputRef,
}: {
  id: number;
  result: "correct" | "incorrect" | null;
  inputRef: (el: HTMLInputElement | null) => void;
}) => (
  <span className="relative inline-flex items-center mx-1">
    <span className="font-bold text-primary text-xs mr-1">{id}</span>
    <Input
      ref={inputRef}
      className={`w-24 h-7 text-sm inline-block ${
        result === "correct"
          ? "border-green-500 bg-green-50 dark:bg-green-950/30"
          : result === "incorrect"
          ? "border-red-500 bg-red-50 dark:bg-red-950/30"
          : ""
      }`}
      placeholder="..........."
      disabled={result === "correct"}
    />
    {result === "correct" && <CheckCircle2 className="h-3.5 w-3.5 text-green-600 ml-1 flex-shrink-0" />}
    {result === "incorrect" && <XCircle className="h-3.5 w-3.5 text-red-500 ml-1 flex-shrink-0" />}
  </span>
);

const ReadingProposalUnit11 = () => {
  const [results, setResults] = useState<Record<number, "correct" | "incorrect" | null>>({});
  const [showResults, setShowResults] = useState(false);
  const inputRefs = useRef<Record<number, HTMLInputElement | null>>({});

  const checkAnswers = () => {
    const newResults: Record<number, "correct" | "incorrect"> = {};
    gaps.forEach((gap) => {
      const value = inputRefs.current[gap.id]?.value?.trim().toLowerCase() || "";
      const isCorrect = gap.answer.some((a) => a.toLowerCase() === value);
      newResults[gap.id] = isCorrect ? "correct" : "incorrect";
    });
    setResults(newResults);
    setShowResults(true);
  };

  const reset = () => {
    setResults({});
    setShowResults(false);
    Object.values(inputRefs.current).forEach((el) => {
      if (el) el.value = "";
    });
  };

  const correctCount = Object.values(results).filter((r) => r === "correct").length;

  const gapRef = (id: number) => (el: HTMLInputElement | null) => {
    inputRefs.current[id] = el;
  };

  return (
    <div className="space-y-8">
      {/* Gap-fill exercise */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-semibold font-merriweather text-foreground">A Proposal</h3>
          </div>

          <p className="text-muted-foreground mb-6">
            <span className="text-primary font-bold mr-2">1</span>
            Read Alicia's proposal and write <strong>one word</strong> in each gap.
          </p>

          {/* Proposal document */}
          <div className="bg-slate-50 dark:bg-slate-900/30 border border-slate-200 dark:border-slate-700 rounded-lg p-6 shadow-inner">
            <h4 className="text-lg font-bold text-primary mb-4">
              Proposal for location of new facilities in Scotland
            </h4>

            <ProposalSection title="Introduction">
              <p>
                The purpose of this proposal is
                <GapInput id={1} result={results[1] ?? null} inputRef={gapRef(1)} />
                compare Edinburgh and Glasgow as possible locations for BioBok's new R&D facility in Scotland and to recommend
                <GapInput id={2} result={results[2] ?? null} inputRef={gapRef(2)} />
                city we should choose.
              </p>
            </ProposalSection>

            <ProposalSection title="Workforce">
              <p>
                Although Glasgow has
                <GapInput id={3} result={results[3] ?? null} inputRef={gapRef(3)} />
                largest number of students in Scotland, I suggest that we should recruit people who are already employed in the sector, and many of the best scientists are in the Edinburgh region.
              </p>
            </ProposalSection>

            <ProposalSection title="Premises">
              <p>
                Property prices appear to be lower in Glasgow. However, it would be a good idea to try to find suitable premises in the Edinburgh area,
                <GapInput id={4} result={results[4] ?? null} inputRef={gapRef(4)} />
                it contains a 'Science Triangle' with purpose-built laboratories. Also, the Science Triangle encourages the co-operation and knowledge-sharing we need.
              </p>
            </ProposalSection>

            <ProposalSection title="Lifestyle">
              <p>
                Glasgow has a dynamic and exciting lifestyle with many cultural events. On the other hand, Edinburgh is
                <GapInput id={5} result={results[5] ?? null} inputRef={gapRef(5)} />
                of the cities with the highest quality of life in the UK. This will help us to attract staff to live and work there.
              </p>
            </ProposalSection>

            <ProposalSection title="Recommended Course of Action">
              <p>
                I strongly recommend that we choose Edinburgh
                <GapInput id={6} result={results[6] ?? null} inputRef={gapRef(6)} />
                the reasons given above. Our next steps should be to contact:
              </p>
              <ul className="list-disc list-inside mt-2 text-muted-foreground">
                <li>Scottish Enterprise in order to find a suitable building</li>
                <li>a recruitment agency to find the staff we require.</li>
              </ul>
            </ProposalSection>
          </div>

          {/* Feedback */}
          {showResults && correctCount < gaps.length && (
            <div className="mt-4 p-3 bg-muted/50 rounded-lg">
              <p className="text-sm font-medium text-muted-foreground mb-2">Correct answers for missed gaps:</p>
              <ul className="text-sm space-y-1">
                {gaps.map((gap) =>
                  results[gap.id] === "incorrect" ? (
                    <li key={gap.id} className="text-red-600 dark:text-red-400">
                      Gap {gap.id}: <strong>{gap.answer[0]}</strong>
                    </li>
                  ) : null
                )}
              </ul>
            </div>
          )}

          {showResults && correctCount === gaps.length && (
            <div className="mt-4 p-4 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg text-center">
              <p className="text-green-700 dark:text-green-300 font-semibold">
                🎉 Excellent! All {gaps.length} gaps completed correctly!
              </p>
            </div>
          )}

          <div className="flex gap-3 mt-6">
            <Button onClick={checkAnswers} className="bg-primary hover:bg-primary/90">
              Check Answers
            </Button>
            <Button onClick={reset} variant="outline" className="gap-2">
              <RotateCcw className="h-4 w-4" /> Reset
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Comprehension questions */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <MessageSquare className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-semibold text-foreground">
              <span className="text-primary font-bold mr-2">2</span>
              Read the proposal again and answer these questions.
            </h3>
          </div>
          <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
            {comprehensionQuestions.map((q, i) => (
              <li key={i}>{q}</li>
            ))}
          </ol>
        </CardContent>
      </Card>

      {/* Discussion */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-2">
            <MessageSquare className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-semibold text-foreground">
              <span className="text-primary font-bold mr-2">3</span>
              Discuss your answers with a partner.
            </h3>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReadingProposalUnit11;
