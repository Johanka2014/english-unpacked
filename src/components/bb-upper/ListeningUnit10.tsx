import { useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, XCircle, RotateCcw, Headphones } from "lucide-react";

const AUDIO_SRC = "https://johanka2014.github.io/bus_bench/mod_10/17_Unit_10.mp3";

interface GapNote {
  prefix: string;
  suffix: string;
  answer: string[];
}

const notes: GapNote[] = [
  {
    prefix: "Company's activities: writing recipes, preparing food, organising 1",
    suffix: ".",
    answer: ["events", "food events"],
  },
  {
    prefix: "Before launching her company, she did a business 2",
    suffix: ".",
    answer: ["course"],
  },
  {
    prefix: "Her tutors insisted on a realistic 3",
    suffix: ".",
    answer: ["business plan"],
  },
  {
    prefix: "About half of the people she contacted when carrying out market research became 4",
    suffix: ".",
    answer: ["customers", "her customers", "clients"],
  },
  {
    prefix: "She is better at attracting new customers because she is 5",
    suffix: ".",
    answer: ["more confident", "confident"],
  },
  {
    prefix: "To cover overheads, at first she did a 6",
    suffix: " job.",
    answer: ["part-time", "part time"],
  },
  {
    prefix: "Her advice for people starting new companies: Don't borrow more than you can afford to 7",
    suffix: ".",
    answer: ["repay", "pay back"],
  },
];

const TRANSCRIPT = `Interviewer: Jane, can you tell us a little bit about your company, Not Just Food?

Jane: Sure. Not Just Food is a food-development consultancy. We write recipes, we prepare food for photography, and we organise food events for other companies.

Interviewer: And how did you get started?

Jane: Well, I'd worked in product development and food marketing for about 16 years for other companies, and then I decided I wanted to work for myself. Before I launched my own company, I did a business course, and my tutors insisted that I write a realistic business plan.

Interviewer: And was that useful?

Jane: Oh, absolutely. As part of the course, I had to carry out market research. I contacted about ${''}120 companies and roughly half of them became customers. So it was a very valuable exercise.

Interviewer: And how did you find customers after that?

Jane: Well, I have to say, I'm much better at attracting new customers now because I'm more confident. In the early days I found it really quite difficult to sell myself, but now I find it much easier.

Interviewer: And what about the financial side? How did you finance the start-up?

Jane: Well, to cover overheads, at first I did a part-time job, which meant I could keep the business going without borrowing too much money.

Interviewer: And what advice would you give to people thinking of starting their own company?

Jane: I'd say, don't borrow more than you can afford to repay. It's very tempting to take out big loans, but you have to be realistic about what you can pay back each month.`;

const ListeningUnit10 = () => {
  const [results, setResults] = useState<Record<number, "correct" | "incorrect" | null>>({});
  const [showResults, setShowResults] = useState(false);
  const inputRefs = useRef<Record<number, HTMLInputElement | null>>({});

  const checkAnswers = () => {
    const newResults: Record<number, "correct" | "incorrect"> = {};
    notes.forEach((note, i) => {
      const value = inputRefs.current[i]?.value?.trim().toLowerCase() || "";
      const isCorrect = note.answer.some((a) => a.toLowerCase() === value);
      newResults[i] = isCorrect ? "correct" : "incorrect";
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

  return (
    <div className="space-y-8">
      {/* Company background card */}
      <Card className="service-card">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-2">
            <Headphones className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-semibold font-merriweather text-foreground">
              Setting up a food consultancy
            </h3>
          </div>

          <div className="bg-muted/50 rounded-lg p-4 mb-6">
            <h4 className="font-semibold text-foreground mb-1">Company background</h4>
            <p className="text-sm text-muted-foreground italic">
              Jane Milton founded Not Just Food, a food-development consultancy after 16 years
              working for other companies in product development and food marketing.
            </p>
          </div>

          <p className="text-muted-foreground mb-4">
            Listen to Jane Milton talking about her business and complete the notes with{" "}
            <strong>one or two words</strong> in each gap.
          </p>

          <div className="bg-muted/30 border border-border rounded-lg p-3 mb-4 text-sm text-muted-foreground">
            <strong>Task tip:</strong> The words in the notes are not exactly the same as the words
            in the recording, but you should write <strong>words you hear</strong> in the gaps.
          </div>

          {/* Audio player */}
          <audio controls src={AUDIO_SRC} className="w-full mb-6" />

          {/* Gap-fill notes */}
          <div className="space-y-4">
            {notes.map((note, i) => (
              <div key={i} className="flex flex-wrap items-center gap-1 text-foreground leading-relaxed">
                <span>{note.prefix.replace(/\d+$/, "")}</span>
                <span className="relative inline-flex items-center">
                  <Input
                    ref={(el) => { inputRefs.current[i] = el; }}
                    className={`w-36 sm:w-44 h-8 text-sm inline-block mx-1 ${
                      results[i] === "correct"
                        ? "border-green-500 bg-green-50 dark:bg-green-950/30"
                        : results[i] === "incorrect"
                        ? "border-red-500 bg-red-50 dark:bg-red-950/30"
                        : ""
                    }`}
                    placeholder={`(${i + 1})`}
                    disabled={results[i] === "correct"}
                  />
                  {results[i] === "correct" && (
                    <CheckCircle2 className="h-4 w-4 text-green-600 ml-1 flex-shrink-0" />
                  )}
                  {results[i] === "incorrect" && (
                    <XCircle className="h-4 w-4 text-red-500 ml-1 flex-shrink-0" />
                  )}
                </span>
                <span>{note.suffix}</span>
              </div>
            ))}
          </div>

          {/* Show correct answers for incorrect ones */}
          {showResults && correctCount < notes.length && (
            <div className="mt-4 p-3 bg-muted/50 rounded-lg">
              <p className="text-sm font-medium text-muted-foreground mb-2">Correct answers for missed gaps:</p>
              <ul className="text-sm space-y-1">
                {notes.map((note, i) =>
                  results[i] === "incorrect" ? (
                    <li key={i} className="text-red-600 dark:text-red-400">
                      Gap {i + 1}: <strong>{note.answer[0]}</strong>
                    </li>
                  ) : null
                )}
              </ul>
            </div>
          )}

          {showResults && correctCount === notes.length && (
            <div className="mt-4 p-4 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg text-center">
              <p className="text-green-700 dark:text-green-300 font-semibold">
                🎉 Excellent! All {notes.length} gaps completed correctly!
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

      {/* Audio script accordion */}
      <Accordion type="single" collapsible>
        <AccordionItem value="transcript" className="border rounded-lg">
          <AccordionTrigger className="px-6 hover:no-underline">
            <span className="flex items-center gap-2 text-foreground font-semibold">
              📝 Audio Script
            </span>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="prose prose-sm dark:prose-invert max-w-none">
              {TRANSCRIPT.split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-muted-foreground mb-3 last:mb-0">
                  {paragraph.includes(":") ? (
                    <>
                      <strong className="text-foreground">
                        {paragraph.split(":")[0]}:
                      </strong>
                      {paragraph.substring(paragraph.indexOf(":") + 1)}
                    </>
                  ) : (
                    paragraph
                  )}
                </p>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ListeningUnit10;
