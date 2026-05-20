import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const words = [
  { id: 1, word: "launch", answer: "k" },
  { id: 2, word: "ploys", answer: "i" },
  { id: 3, word: "retail stores", answer: "g" },
  { id: 4, word: "public relations (PR)", answer: "e" },
  { id: 5, word: "hyped", answer: "f" },
  { id: 6, word: "log on", answer: "h" },
  { id: 7, word: "focused on", answer: "b" },
  { id: 8, word: "hits", answer: "j" },
  { id: 9, word: "capitalise on", answer: "a" },
  { id: 10, word: "brand awareness", answer: "d" },
  { id: 11, word: "market share", answer: "c" },
];

const defs = [
  { letter: "a", text: "build on an existing success" },
  { letter: "b", text: "concentrated on" },
  { letter: "c", text: "how much of the market is taken by a particular product" },
  { letter: "d", text: "knowledge that a certain brand exists" },
  { letter: "e", text: "the activity of keeping good relations between an organisation and the outside world" },
  { letter: "f", text: "publicised strongly" },
  { letter: "g", text: "shops, supermarkets, etc." },
  { letter: "h", text: "start using (your computer/the Internet)" },
  { letter: "i", text: "tactics/tricks" },
  { letter: "j", text: "visits (to a website)" },
  { letter: "k", text: "start selling for the first time" },
];

const VocabularyUnit5 = () => {
  const [sel, setSel] = useState<Record<number, string>>({});
  const [res, setRes] = useState<Record<number, boolean> | null>(null);

  const check = () => {
    const r: Record<number, boolean> = {};
    words.forEach((w) => { r[w.id] = sel[w.id] === w.answer; });
    setRes(r);
  };

  return (
    <div className="space-y-6">
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-2 font-merriweather text-foreground">Vocabulary</h3>
          <p className="text-muted-foreground">Match these words and expressions from the <em>Promoting AXE</em> text (1–11) with their definitions (a–k).</p>
        </CardContent>
      </Card>

      <div className="space-y-3">
        {words.map((w) => (
          <Card key={w.id} className="service-card">
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-bold text-brand-royal w-8">{w.id}.</span>
                <span className="font-semibold text-foreground flex-1">{w.word}</span>
                {res && (res[w.id]
                  ? <CheckCircle2 className="h-5 w-5 text-green-600" />
                  : <span className="text-sm text-red-600">Correct: {w.answer}</span>)}
              </div>
              <div className="flex flex-wrap gap-2 ml-11">
                {defs.map((d) => (
                  <button
                    key={d.letter}
                    onClick={() => { setSel((p) => ({ ...p, [w.id]: d.letter })); setRes(null); }}
                    className={`w-10 h-10 rounded-md border font-semibold transition-colors ${
                      sel[w.id] === d.letter ? "bg-brand-royal text-white border-brand-royal" : "border-border hover:bg-accent"
                    }`}
                  >{d.letter}</button>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="service-card">
        <CardContent className="p-6">
          <h4 className="font-semibold text-brand-royal mb-3">Definitions (a–k)</h4>
          <div className="space-y-2 text-sm">
            {defs.map((d) => (
              <p key={d.letter} className="text-foreground"><strong>{d.letter}</strong> — {d.text}</p>
            ))}
          </div>
        </CardContent>
      </Card>

      <Button onClick={check} className="bg-brand-royal hover:bg-brand-navy">Check Answers</Button>
    </div>
  );
};

export default VocabularyUnit5;
