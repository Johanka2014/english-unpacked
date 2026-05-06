import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { CheckCircle, XCircle } from "lucide-react";

const matches = [
  { id: 1, word: "challenging", answer: "a" },
  { id: 2, word: "reputation", answer: "d" },
  { id: 3, word: "atmosphere", answer: "c" },
  { id: 4, word: "promotion", answer: "f" },
  { id: 5, word: "benefits", answer: "b" },
  { id: 6, word: "scope", answer: "e" },
];
const defs = [
  { letter: "a", text: "difficult, in a way that tests your ability" },
  { letter: "b", text: "things you get because of your job that are additional to your pay but are not money" },
  { letter: "c", text: "the character or feeling of a place" },
  { letter: "d", text: "the opinion that people in general have about someone or something" },
  { letter: "e", text: "the opportunity for doing something" },
  { letter: "f", text: "when someone is raised to a higher position" },
];

const prepLetter = "I am a 22-year-old student [1] of psychology [2] ___ the University of Hanover in Germany and I am writing to enquire [3] ___ career opportunities [4] ___ your company. I have visited your website and I see that you have an innovative and open-minded approach [5] ___ the recruitment and management [6] ___ personnel within your company. I am [7] ___ my final year of a five-year course of studies and am particularly interested [8] ___ working [9] ___ the area of personnel recruitment.";
const prepAnswers: Record<number, string> = { 2: "at", 3: "about", 4: "within", 5: "to", 6: "of", 7: "in", 8: "in", 9: "in" };

const formalQs = [
  { id: 1, direct: "When will you be holding interviews?", starter: "Could you tell me", answer: "when you will be holding interviews" },
  { id: 2, direct: "How long are the annual holidays?", starter: "I would also like to know", answer: "how long the annual holidays are" },
  { id: 3, direct: "What are the working conditions?", starter: "I would be grateful if you could give me information on", answer: "what the working conditions are" },
  { id: 4, direct: "When should I apply?", starter: "Please let me know", answer: "when I should apply" },
  { id: 5, direct: "Is there a graduate trainee programme?", starter: "I would like to know", answer: "if there is a graduate trainee programme" },
  { id: 6, direct: "Do you offer internships for undergraduates?", starter: "Could you tell me", answer: "if you offer internships for undergraduates" },
];

const VocabularyUnit3 = () => {
  const [matchAns, setMatchAns] = useState<Record<number, string>>({});
  const [matchRes, setMatchRes] = useState<Record<number, boolean | null>>({});
  const [prepAns, setPrepAns] = useState<Record<number, string>>({});
  const [prepRes, setPrepRes] = useState<Record<number, boolean | null>>({});
  const [fqAns, setFqAns] = useState<Record<number, string>>({});
  const [fqRes, setFqRes] = useState<Record<number, boolean | null>>({});

  const checkMatches = () => {
    const r: Record<number, boolean> = {};
    matches.forEach((m) => { r[m.id] = matchAns[m.id] === m.answer; });
    setMatchRes(r);
  };
  const checkPrep = () => {
    const r: Record<number, boolean> = {};
    Object.keys(prepAnswers).forEach((k) => {
      const id = Number(k);
      r[id] = (prepAns[id] || "").trim().toLowerCase() === prepAnswers[id];
    });
    setPrepRes(r);
  };
  const checkFQ = () => {
    const r: Record<number, boolean> = {};
    formalQs.forEach((q) => {
      const v = (fqAns[q.id] || "").trim().toLowerCase().replace(/[?.!]+$/, "");
      r[q.id] = v === q.answer.toLowerCase();
    });
    setFqRes(r);
  };

  const icon = (v: boolean | null | undefined) => v == null ? null : (v ? <CheckCircle className="inline h-5 w-5 text-green-600 ml-1" /> : <XCircle className="inline h-5 w-5 text-red-600 ml-1" />);

  return (
    <div className="space-y-8">
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-2 font-merriweather text-foreground">Vocabulary — Words about work</h3>
          <p className="text-muted-foreground mb-4">Match the words (1–6) with their definitions (a–f).</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              {matches.map((m) => (
                <div key={m.id} className="flex items-center gap-3">
                  <span className="font-semibold w-6">{m.id}</span>
                  <span className="font-bold text-brand-royal w-32">{m.word}</span>
                  <Select value={matchAns[m.id] || ""} onValueChange={(v) => setMatchAns((p) => ({ ...p, [m.id]: v }))}>
                    <SelectTrigger className={`w-20 ${matchRes[m.id] === true ? "border-green-500 bg-green-50" : matchRes[m.id] === false ? "border-red-500 bg-red-50" : ""}`}>
                      <SelectValue placeholder="?" />
                    </SelectTrigger>
                    <SelectContent>
                      {defs.map((d) => <SelectItem key={d.letter} value={d.letter}>{d.letter}</SelectItem>)}
                    </SelectContent>
                  </Select>
                  {icon(matchRes[m.id])}
                  {matchRes[m.id] === false && <span className="text-sm text-red-600">({m.answer})</span>}
                </div>
              ))}
            </div>
            <div className="bg-muted/40 rounded-lg p-4 space-y-2">
              {defs.map((d) => (
                <p key={d.letter} className="text-foreground text-sm"><span className="font-bold text-brand-royal mr-2">{d.letter}</span>{d.text}</p>
              ))}
            </div>
          </div>
          <Button onClick={checkMatches} className="mt-4 bg-brand-royal hover:bg-brand-navy">Check Answers</Button>
        </CardContent>
      </Card>

      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2 font-merriweather text-foreground">Grammar — Prepositions in a letter of enquiry</h3>
          <p className="text-muted-foreground mb-4">Complete this letter of enquiry by putting the correct preposition in each space.</p>
          <div className="bg-muted/40 rounded-lg p-4 mb-4 text-foreground italic text-sm leading-relaxed">{prepLetter}</div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[2,3,4,5,6,7,8,9].map((id) => (
              <div key={id} className="flex items-center gap-2">
                <span className="font-semibold w-6">{id}</span>
                <Input
                  value={prepAns[id] || ""}
                  onChange={(e) => setPrepAns((p) => ({ ...p, [id]: e.target.value }))}
                  className={`w-20 ${prepRes[id] === true ? "border-green-500 bg-green-50" : prepRes[id] === false ? "border-red-500 bg-red-50" : ""}`}
                />
                {prepRes[id] === false && <span className="text-xs text-red-600">({prepAnswers[id]})</span>}
              </div>
            ))}
          </div>
          <Button onClick={checkPrep} className="mt-4 bg-brand-royal hover:bg-brand-navy">Check Answers</Button>
        </CardContent>
      </Card>

      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2 font-merriweather text-foreground">Complex questions — Make them more formal</h3>
          <p className="text-muted-foreground mb-4">Make these direct questions more formal by starting them with the words given.</p>
          <div className="space-y-4">
            {formalQs.map((q) => (
              <div key={q.id} className="space-y-1">
                <p className="text-foreground"><span className="font-semibold mr-2">{q.id}</span>{q.direct}</p>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-foreground italic">{q.starter}</span>
                  <Input
                    value={fqAns[q.id] || ""}
                    onChange={(e) => setFqAns((p) => ({ ...p, [q.id]: e.target.value }))}
                    className={`flex-1 min-w-[200px] ${fqRes[q.id] === true ? "border-green-500 bg-green-50" : fqRes[q.id] === false ? "border-red-500 bg-red-50" : ""}`}
                    placeholder="..."
                  />
                  {icon(fqRes[q.id])}
                </div>
                {fqRes[q.id] === false && <p className="text-sm text-red-600">Answer: {q.starter} {q.answer}.</p>}
              </div>
            ))}
          </div>
          <Button onClick={checkFQ} className="mt-4 bg-brand-royal hover:bg-brand-navy">Check Answers</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default VocabularyUnit3;
