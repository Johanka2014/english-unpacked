import { useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, XCircle, RotateCcw, Headphones } from "lucide-react";
import scotlandMap from "@/assets/bb-upper/scotland-map.png";

const AUDIO_SRC = "/audio/bb-upper/20_unit_11.mp3";

interface GapNote {
  prefix: string;
  suffix: string;
  answer: string[];
}

const notes: GapNote[] = [
  {
    prefix: "Initial investment of £2m in laboratories, equipment",
    suffix: ".",
    answer: ["and offices", "offices"],
  },
  {
    prefix: "Staff of ten, possibly rising to",
    suffix: ".",
    answer: ["60", "sixty"],
  },
  {
    prefix: "Staff to be",
    suffix: "and from other divisions worldwide.",
    answer: ["recruited locally", "local"],
  },
  {
    prefix: "Check for availability of",
    suffix: ".",
    answer: ["government grants", "grants"],
  },
];

const TRANSCRIPT = `C: Charles Langley.
A:  Hi, Charles. It's Alicia here, Alicia Flores.
C:  Oh, hello, Alicia. How are you doing?
A:  Fine, thanks, Charles, and you?
C:  Very well. And what can I do for you?
A:  Well, it's about your email. I have a few questions I thought I'd better just clear up quickly before I get down to investigating.
C:  OK, and what are they?
A:  Well, it would be useful to know what sort of investment you're thinking of making in Scotland.
C:  Well, this is all a bit hush-hush at this stage, so I didn't want to put it in an email straight away, but we're thinking in terms of two million pounds in the first year – that's for laboratories, equipment and offices.
A:  Wow! A major move, then.
C:  Sure, but for biotechnology, Scotland's one of the places to be at the moment, and we've got to keep up with what's happening there.
A:  So there'll be quite a lot of people employed there, I take it.
C:  We thought that we'd start with ten drawn from different divisions around the world, and then, if things go well, we'd build up to about 60 people.
A:  All recruited from our other divisions?
C:  A few, because we want a bit of cross-fertilisation of ideas – that's one of our objectives – but mainly recruited locally.
A:  OK, that sounds interesting.
C:  And we're hoping that there'll be someone suitable from your division to head up the new operation, so keep your eyes open for that, too.
A:  Right.
C:  And one last thing, Alicia.
A:  What's that, Charles?
C:  I hear that in some regions in Europe they offer government grants for companies thinking of moving there. Can you check and see if any are available for Scotland? It could save us some money if there are not too many strings attached.
A:  Sure, I'll get onto all this right away and let you have a proposal in a few days' time.
C:  Great stuff, Alicia. I look forward to that. Bye.
A:  Bye.`;

const ListeningUnit11 = () => {
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
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Headphones className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-semibold font-merriweather text-foreground">A new location in Scotland</h3>
          </div>

          <p className="text-muted-foreground mb-2">
            <span className="text-primary font-bold mr-2">1</span>
            Discuss what sort of information you will need to complete these notes.
          </p>

          <p className="text-muted-foreground mb-6">
            <span className="text-primary font-bold mr-2">2</span>
            Listen to Alicia phoning Charles and complete her notes with <strong>one or two words or a number</strong>.
          </p>

          {/* Audio player */}
          <audio controls src={AUDIO_SRC} className="w-full mb-6" />

          {/* Two-column layout: map + gap-fill */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left: Scotland map */}
            <div className="flex items-start justify-center">
              <img
                src={scotlandMap}
                alt="Map of Scotland showing Edinburgh and Glasgow"
                className="rounded-lg shadow-md max-w-full h-auto"
              />
            </div>

            {/* Right: Notepad-style gap fill */}
            <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-5 shadow-inner">
              <h4 className="font-semibold text-foreground mb-4 italic" style={{ fontFamily: "Georgia, serif" }}>
                New Scottish Venture
              </h4>
              <div className="space-y-4">
                {notes.map((note, i) => (
                  <div
                    key={i}
                    className="flex flex-wrap items-center gap-1 text-foreground text-sm leading-relaxed"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    <span className="italic">{note.prefix}</span>
                    <span className="relative inline-flex items-center">
                      <Input
                        ref={(el) => {
                          inputRefs.current[i] = el;
                        }}
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
                      {results[i] === "incorrect" && <XCircle className="h-4 w-4 text-red-500 ml-1 flex-shrink-0" />}
                    </span>
                    <span className="italic">{note.suffix}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Correct answers feedback */}
          {showResults && correctCount < notes.length && (
            <div className="mt-4 p-3 bg-muted/50 rounded-lg">
              <p className="text-sm font-medium text-muted-foreground mb-2">Correct answers for missed gaps:</p>
              <ul className="text-sm space-y-1">
                {notes.map((note, i) =>
                  results[i] === "incorrect" ? (
                    <li key={i} className="text-red-600 dark:text-red-400">
                      Gap {i + 1}: <strong>{note.answer[0]}</strong>
                    </li>
                  ) : null,
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
            <span className="flex items-center gap-2 text-foreground font-semibold">📝 Audio Script</span>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="prose prose-sm dark:prose-invert max-w-none">
              <p className="text-xs text-muted-foreground italic mb-3">C = Charles; A = Alicia</p>
              {TRANSCRIPT.split("\n").map((line, i) => {
                if (!line.trim()) return null;
                const speaker = line.substring(0, 2);
                const text = line.substring(3);
                return (
                  <p key={i} className="text-muted-foreground mb-2 last:mb-0">
                    <strong className="text-foreground">{speaker}</strong>
                    {text}
                  </p>
                );
              })}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ListeningUnit11;
