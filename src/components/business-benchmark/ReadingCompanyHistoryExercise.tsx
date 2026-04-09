import { useState, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle } from "lucide-react";

/* ── Exercise 1: Verb-Noun Collocation Matching (drag-drop) ── */

interface Collocation {
  id: string;
  verb: string;
  noun: string;
}

const VERBS = ["set up", "launch", "take over", "win", "run", "inherit"];
const NOUNS = [
  { id: "a", text: "an award" },
  { id: "b", text: "a business" },
  { id: "c", text: "a product" },
  { id: "d", text: "money" },
  { id: "e", text: "an advertising campaign" },
  { id: "f", text: "the presidency/directorship" },
];

// Correct collocations (some verbs match multiple nouns)
const CORRECT_PAIRS: Collocation[] = [
  { id: "1", verb: "set up", noun: "a business" },
  { id: "2", verb: "launch", noun: "a product" },
  { id: "3", verb: "launch", noun: "an advertising campaign" },
  { id: "4", verb: "take over", noun: "a business" },
  { id: "5", verb: "take over", noun: "the presidency/directorship" },
  { id: "6", verb: "win", noun: "an award" },
  { id: "7", verb: "run", noun: "a business" },
  { id: "8", verb: "inherit", noun: "money" },
];

/* ── Exercise 2: Best Title ── */

const TITLE_OPTIONS = [
  { id: 1, text: "Levi Strauss & Co.: a strange beginning" },
  { id: 2, text: "Levi Strauss & Co.: the story of their success" },
  { id: 3, text: "Levi Strauss & Co.: their company structure" },
];
const CORRECT_TITLE = 2;

const ReadingCompanyHistoryExercise = () => {
  /* ── Exercise 1 state ── */
  const [selections, setSelections] = useState<Record<string, string[]>>(() => {
    const init: Record<string, string[]> = {};
    VERBS.forEach((v) => (init[v] = []));
    return init;
  });
  const [nounBank, setNounBank] = useState(() => [...NOUNS]);
  const [draggedNoun, setDraggedNoun] = useState<{ id: string; text: string } | null>(null);
  const [dragSource, setDragSource] = useState<string | null>(null); // verb key or "bank"
  const [checked1, setChecked1] = useState(false);

  /* ── Exercise 2 state ── */
  const [selectedTitle, setSelectedTitle] = useState<number | null>(null);
  const [checked2, setChecked2] = useState(false);

  /* ── Drag handlers ── */
  const handleDragStartFromBank = useCallback((noun: { id: string; text: string }) => {
    setDraggedNoun(noun);
    setDragSource("bank");
  }, []);

  const handleDragStartFromVerb = useCallback((noun: { id: string; text: string }, verb: string) => {
    setDraggedNoun(noun);
    setDragSource(verb);
  }, []);

  const handleDropOnVerb = useCallback(
    (verb: string) => {
      if (!draggedNoun) return;
      // Remove from source
      if (dragSource === "bank") {
        setNounBank((prev) => prev.filter((n) => n.id !== draggedNoun.id));
      } else if (dragSource) {
        setSelections((prev) => ({
          ...prev,
          [dragSource]: prev[dragSource].filter((id) => id !== draggedNoun.id),
        }));
      }
      // Add to target verb
      setSelections((prev) => ({
        ...prev,
        [verb]: [...prev[verb].filter((id) => id !== draggedNoun.id), draggedNoun.id],
      }));
      setDraggedNoun(null);
      setDragSource(null);
    },
    [draggedNoun, dragSource]
  );

  const handleDropOnBank = useCallback(() => {
    if (!draggedNoun || dragSource === "bank") return;
    if (dragSource) {
      setSelections((prev) => ({
        ...prev,
        [dragSource]: prev[dragSource].filter((id) => id !== draggedNoun.id),
      }));
    }
    setNounBank((prev) => {
      if (prev.some((n) => n.id === draggedNoun.id)) return prev;
      return [...prev, draggedNoun];
    });
    setDraggedNoun(null);
    setDragSource(null);
  }, [draggedNoun, dragSource]);

  const getNounText = (id: string) => NOUNS.find((n) => n.id === id)?.text ?? id;

  const isPairCorrect = (verb: string, nounId: string) => {
    const nounText = getNounText(nounId);
    return CORRECT_PAIRS.some((p) => p.verb === verb && p.noun === nounText);
  };

  const checkExercise1 = () => setChecked1(true);
  const resetExercise1 = () => {
    setChecked1(false);
    setNounBank([...NOUNS]);
    const init: Record<string, string[]> = {};
    VERBS.forEach((v) => (init[v] = []));
    setSelections(init);
  };

  const checkExercise2 = () => setChecked2(true);

  return (
    <div className="space-y-8">
      {/* ── Exercise 1 ── */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-2 font-merriweather text-foreground">
            Exercise 1 – Verb-Noun Collocations
          </h3>
          <p className="text-muted-foreground mb-6">
            Look at the verbs (1–6) and nouns (a–f) below. Find eight verb–noun collocations.
            Drag nouns from the bank to the correct verb. You can use some verbs and nouns twice.
          </p>

          {/* Noun bank */}
          <div
            className="flex flex-wrap gap-2 bg-blue-50 p-4 rounded-lg mb-6 min-h-[50px]"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDropOnBank}
          >
            <span className="text-sm font-semibold text-muted-foreground mr-2 self-center">Noun Bank:</span>
            {nounBank.map((n) => (
              <div
                key={n.id}
                draggable
                onDragStart={() => handleDragStartFromBank(n)}
                className="px-3 py-1.5 rounded-md shadow-sm bg-white border border-border cursor-grab active:cursor-grabbing text-sm"
              >
                {n.text}
              </div>
            ))}
            {nounBank.length === 0 && (
              <span className="text-muted-foreground text-sm italic">All nouns placed</span>
            )}
          </div>

          {/* Verb drop zones */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {VERBS.map((verb, idx) => (
              <div
                key={verb}
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => handleDropOnVerb(verb)}
                className="border-2 border-dashed border-brand-royal/30 rounded-lg p-3 min-h-[80px] bg-white/50"
              >
                <h4 className="font-semibold text-sm mb-2 text-brand-navy">
                  {idx + 1}. {verb}
                </h4>
                <div className="flex flex-wrap gap-1">
                  {selections[verb].map((nounId) => (
                    <div
                      key={nounId}
                      draggable
                      onDragStart={() =>
                        handleDragStartFromVerb({ id: nounId, text: getNounText(nounId) }, verb)
                      }
                      className={`px-2 py-1 rounded-md text-sm cursor-grab flex items-center gap-1 ${
                        checked1
                          ? isPairCorrect(verb, nounId)
                            ? "bg-green-50 border border-green-500"
                            : "bg-red-50 border border-red-500"
                          : "bg-white border border-border"
                      }`}
                    >
                      {getNounText(nounId)}
                      {checked1 &&
                        (isPairCorrect(verb, nounId) ? (
                          <CheckCircle2 className="h-3.5 w-3.5 text-green-500 shrink-0" />
                        ) : (
                          <XCircle className="h-3.5 w-3.5 text-destructive shrink-0" />
                        ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {checked1 && (
            <div className="mt-4 p-3 bg-muted rounded-lg text-sm">
              <p className="font-semibold mb-1">Correct collocations:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-0.5">
                {CORRECT_PAIRS.map((p) => (
                  <li key={p.id}>
                    {p.verb} + {p.noun}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex gap-3 mt-6">
            <Button onClick={checkExercise1} className="bg-brand-royal hover:bg-brand-navy">
              Check Answers
            </Button>
            <Button onClick={resetExercise1} variant="outline">
              Reset
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* ── Exercise 2 ── */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-2 font-merriweather text-foreground">
            Exercise 2 – Choose the Best Title
          </h3>
          <p className="text-muted-foreground mb-6">
            Skim the text about Levi Strauss & Co. quickly to get a general idea of what it is
            about. Choose the best title for the article from the following.
          </p>

          {/* Reading passage */}
          <div className="bg-muted/50 rounded-lg p-5 mb-6 text-sm leading-relaxed space-y-4">
            <h4 className="font-bold text-foreground">1&nbsp;&nbsp;How did the company begin?</h4>
            <p className="text-foreground">
              Levi Strauss was born in Bavaria in 1829 but when he was 17, he and his family
              emigrated to the USA. In 1853, he set up his first clothing business in Battery
              Street, San Francisco. Some years later, Levi received a letter from a local tailor
              named Jacob Davis. Davis had a plan for a new design of men's trousers with metal
              'rivets' on the pockets and he wanted to know if Levi was interested in producing
              them. The two men went into partnership and production began in 1873. At that time,
              the trousers were called 'overalls'.
            </p>

            <h4 className="font-bold text-foreground">2&nbsp;&nbsp;How did they continue after Levi's death?</h4>
            <p className="text-foreground">
              Levi Strauss died in 1902, but his nephews inherited the company and carried on the
              business. In 1915, they won an award for their 'overalls' at an international
              exhibition in San Francisco. There was a brief decline in sales during the 1930s
              depression, but the company continued to expand during the following decades. In
              1960, they finally stopped using the name 'overalls' and started calling their
              trousers 'jeans'.
            </p>

            <h4 className="font-bold text-foreground">3&nbsp;&nbsp;Why were they so successful?</h4>
            <p className="text-foreground">
              One reason why the company grew so rapidly was that they spent a lot of money on
              advertising. Even in their early days, Levi Strauss & Co. ran a strong advertising
              campaign for their products. Walter Haas, who took over the presidency of the company
              in 1928, made sure that the name "Levi Strauss & Co." was always on posters and
              billboards. Later they advertised on the radio and in 1966, they made the first Levi
              Strauss & Co. TV commercial. In 1985, they launched their famous laundrette commercial
              in which a young man takes off his jeans in a public laundrette and puts them in the
              washing machine. In 2003, the company celebrated the 150th anniversary of its founding
              and the 130th anniversary of blue jeans. They are one of the biggest success stories
              in the clothing business with a name that is known worldwide.
            </p>
          </div>

          {/* Title options */}
          <div className="space-y-3">
            {TITLE_OPTIONS.map((opt) => {
              const isSelected = selectedTitle === opt.id;
              const correct = checked2 && opt.id === CORRECT_TITLE;
              const wrong = checked2 && isSelected && opt.id !== CORRECT_TITLE;
              return (
                <button
                  key={opt.id}
                  onClick={() => !checked2 && setSelectedTitle(opt.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-colors ${
                    correct
                      ? "border-green-500 bg-green-50"
                      : wrong
                      ? "border-destructive bg-red-50"
                      : isSelected
                      ? "border-brand-royal bg-primary/5"
                      : "border-border hover:border-brand-royal/50"
                  }`}
                >
                  <span className="font-semibold mr-2">{opt.id}.</span>
                  {opt.text}
                  {correct && <CheckCircle2 className="inline h-4 w-4 text-green-500 ml-2" />}
                  {wrong && <XCircle className="inline h-4 w-4 text-destructive ml-2" />}
                </button>
              );
            })}
          </div>

          {checked2 && selectedTitle !== CORRECT_TITLE && (
            <p className="mt-3 text-sm text-green-600 font-medium">
              The correct answer is: <strong>2. Levi Strauss & Co.: the story of their success</strong>
            </p>
          )}

          <Button
            onClick={checkExercise2}
            disabled={selectedTitle === null}
            className="mt-6 bg-brand-royal hover:bg-brand-navy"
          >
            Check Answer
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReadingCompanyHistoryExercise;
