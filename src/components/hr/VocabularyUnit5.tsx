import { useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const crosswordClues = [
  { id: 1, clue: "You don't have to pay anything: non-___", answer: "contributory" },
  { id: 2, clue: "A place where children are looked after", answer: "crèche" },
  { id: 3, clue: "Money received regularly after retirement", answer: "pension" },
  { id: 4, clue: "A small part of a company which is bought or given as an investment", answer: "share" },
  { id: 5, clue: "An informal restaurant where you take the food to the table yourself", answer: "cafeteria" },
  { id: 6, clue: "According to how good you are: on a ___ basis", answer: "merit" },
  { id: 7, clue: "Moving an employee to a new worksite", answer: "relocation" },
  { id: 8, clue: "Giving professional advice", answer: "consultancy" },
];

const wordFamilies = [
  { word: "benefit", forms: ["benefit (n.)", "benefit (v.)", "beneficial (adj.)", "beneficiary (n.)"] },
  { word: "review", forms: ["review (n.)", "review (v.)", "reviewer (n.)"] },
];

const wordFamilySentences = [
  { id: 1, text: "We all ___ greatly from job satisfaction.", answer: "benefit" },
  { id: 2, text: "People receive sickness and unemployment ___ from the State.", answer: "benefits" },
  { id: 3, text: "Your husband is the ___ of your assurance policy in the event of your death.", answer: "beneficiary" },
  { id: 4, text: "Salaries are normally ___ annually.", answer: "reviewed" },
  { id: 5, text: "We carry out appraisal or performance ___ in September/October each year.", answer: "reviews" },
];

const abbreviations = [
  { abbr: "k", meaning: "thousand", example: "€50k = fifty thousand euros" },
  { abbr: "m", meaning: "million", example: "$10m = ten million dollars" },
  { abbr: "bn", meaning: "billion", example: "£5.75bn = five point seven five billion pounds" },
  { abbr: "inc", meaning: "including", example: "€20,000 inc benefits" },
  { abbr: "ph", meaning: "per hour", example: "$10.00 ph" },
  { abbr: "pa", meaning: "per annum", example: "€20,000 pa" },
];

const figureExercises = [
  { id: 1, figure: "€5,000", answer: "five thousand euros" },
  { id: 2, figure: "£60,000 pa", answer: "sixty thousand pounds per annum" },
  { id: 3, figure: "$50,239,150", answer: "fifty million, two hundred and thirty-nine thousand, one hundred and fifty dollars" },
  { id: 4, figure: "€70 bn", answer: "seventy billion euros" },
  { id: 5, figure: "$110,000,000", answer: "one hundred and ten million dollars" },
  { id: 6, figure: "£150 ph", answer: "one hundred and fifty pounds per hour" },
];

const VocabularyUnit5 = () => {
  const [crosswordResults, setCrosswordResults] = useState<Record<number, "correct" | "incorrect" | null>>({});
  const crosswordRefs = useRef<Record<number, HTMLInputElement | null>>({});
  const [familyResults, setFamilyResults] = useState<Record<number, "correct" | "incorrect" | null>>({});
  const familyRefs = useRef<Record<number, HTMLInputElement | null>>({});
  const [showFigureAnswers, setShowFigureAnswers] = useState(false);

  const checkCrossword = () => {
    const r: Record<number, "correct" | "incorrect"> = {};
    crosswordClues.forEach((c) => {
      const v = crosswordRefs.current[c.id]?.value?.trim().toLowerCase() || "";
      r[c.id] = v === c.answer.toLowerCase() ? "correct" : "incorrect";
    });
    setCrosswordResults(r);
  };

  const checkFamilies = () => {
    const r: Record<number, "correct" | "incorrect"> = {};
    wordFamilySentences.forEach((s) => {
      const v = familyRefs.current[s.id]?.value?.trim().toLowerCase() || "";
      r[s.id] = v === s.answer.toLowerCase() ? "correct" : "incorrect";
    });
    setFamilyResults(r);
  };

  return (
    <div className="space-y-8">
      {/* Crossword Puzzle */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">Vocabulary Puzzle</h3>
          <p className="text-muted-foreground mb-6">Use the clues to find the reward and remuneration vocabulary.</p>
          <div className="space-y-4">
            {crosswordClues.map((c) => (
              <div key={c.id} className="flex items-start gap-3">
                <span className="font-bold text-primary w-6 shrink-0">{c.id}.</span>
                <div className="flex-1">
                  <p className="text-muted-foreground mb-1">{c.clue}</p>
                  <Input
                    ref={(el) => { crosswordRefs.current[c.id] = el; }}
                    placeholder="Your answer..."
                    className={`max-w-xs ${crosswordResults[c.id] === "correct" ? "border-green-500 bg-green-50" : crosswordResults[c.id] === "incorrect" ? "border-red-500 bg-red-50" : ""}`}
                  />
                  {crosswordResults[c.id] === "incorrect" && (
                    <p className="text-red-600 text-sm mt-1">Answer: {c.answer}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <Button onClick={checkCrossword} className="mt-6 bg-primary hover:bg-primary/90">Check Answers</Button>
        </CardContent>
      </Card>

      {/* Word Families */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">Word Families</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {wordFamilies.map((wf) => (
              <div key={wf.word} className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2 capitalize">{wf.word}</h4>
                <ul className="space-y-1">
                  {wf.forms.map((f) => <li key={f} className="text-muted-foreground text-sm">• {f}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground mb-4">Complete the sentences with the correct form of the word.</p>
          <div className="space-y-4">
            {wordFamilySentences.map((s) => (
              <div key={s.id}>
                <label className="text-muted-foreground inline items-baseline">
                  {s.id}. {s.text.split("___")[0]}
                  <Input
                    ref={(el) => { familyRefs.current[s.id] = el; }}
                    className={`inline-block w-36 mx-1 ${familyResults[s.id] === "correct" ? "border-green-500 bg-green-50" : familyResults[s.id] === "incorrect" ? "border-red-500 bg-red-50" : ""}`}
                  />
                  {s.text.split("___")[1]}
                </label>
                {familyResults[s.id] === "incorrect" && (
                  <span className="text-red-600 text-sm ml-2">→ {s.answer}</span>
                )}
              </div>
            ))}
          </div>
          <Button onClick={checkFamilies} className="mt-6 bg-primary hover:bg-primary/90">Check Answers</Button>
        </CardContent>
      </Card>

      {/* Figures & Abbreviations */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">Talking About Figures and Numbers</h3>
          <p className="text-muted-foreground mb-4">The following abbreviations are commonly used in writing:</p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead><tr className="border-b border-border">
                <th className="text-left p-2 font-semibold text-foreground">Abbreviation</th>
                <th className="text-left p-2 font-semibold text-foreground">Meaning</th>
                <th className="text-left p-2 font-semibold text-foreground">Example</th>
              </tr></thead>
              <tbody>
                {abbreviations.map((a) => (
                  <tr key={a.abbr} className="border-b border-border/50">
                    <td className="p-2 font-mono font-bold text-primary">{a.abbr}</td>
                    <td className="p-2 text-muted-foreground">{a.meaning}</td>
                    <td className="p-2 text-muted-foreground">{a.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-muted/30 rounded-lg mb-6">
            <p className="text-sm text-muted-foreground">
              <strong>Note the differences:</strong> 459 = "four hundred <em>and</em> fifty-nine" (UK) vs "four hundred fifty-nine" (US). Use commas for thousands (45,000 not 45.000). Use a dot for decimals ($8.75 not $8,75).
            </p>
          </div>

          <h4 className="font-semibold text-foreground mb-3">How do you say these figures?</h4>
          <div className="space-y-2 mb-4">
            {figureExercises.map((f) => (
              <div key={f.id} className="flex items-center gap-3">
                <span className="font-mono font-bold text-primary w-40">{f.figure}</span>
                {showFigureAnswers && <span className="text-muted-foreground text-sm italic">→ {f.answer}</span>}
              </div>
            ))}
          </div>
          <Button onClick={() => setShowFigureAnswers(!showFigureAnswers)} variant="outline">
            {showFigureAnswers ? "Hide" : "Show"} Answers
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default VocabularyUnit5;
