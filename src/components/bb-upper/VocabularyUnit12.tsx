import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, XCircle, RotateCcw, Languages, Link2 } from "lucide-react";

const EQUIPMENT = ["data projector", "flipchart", "handouts", "laptop", "pointer", "remote control", "product samples", "screen"];

const descriptions: { id: string; text: string; answer: string }[] = [
  { id: "d1", text: "These are often photocopies. You can include complex information which is difficult to explain and hand them out to people.", answer: "handouts" },
  { id: "d2", text: "This is a computer you can carry around, so it's great for taking to a presentation.", answer: "laptop" },
  { id: "d3", text: "This is where you can project your charts and slides so that everyone in the room can see them.", answer: "screen" },
  { id: "d4", text: "You can hand these round so people can actually handle and see what you are talking about.", answer: "product samples" },
  { id: "d5", text: "You can operate equipment from anywhere in the room using this.", answer: "remote control" },
  { id: "d6", text: "You can use this to point at things on the screen, and a little red light will shine where you point it.", answer: "pointer" },
  { id: "d7", text: "You can use this to show information from a computer on a large screen.", answer: "data projector" },
  { id: "d8", text: "You can write notes on these large pages before your lecture and just turn them over when you need them. Also, you can write here during your talk.", answer: "flipchart" },
];

const phraseStarts = [
  "1 Good afternoon and",
  "2 Thank you for",
  "3 Let me introduce myself:",
  "4 What I would like to do in this presentation is",
  "5 My presentation will have four parts.",
  "6 If you have any questions while I'm speaking,",
  "7 Now, I'd like to conclude by",
  "8 Finally, let me finish by saying",
  "9 If you have any questions now, I'll",
];

const phraseEndings: { id: string; text: string }[] = [
  { id: "a", text: "describe this company to you and outline our business plans for the next year." },
  { id: "b", text: "don't hesitate to interrupt me." },
  { id: "c", text: "finding the time to come today." },
  { id: "d", text: "be happy to answer them." },
  { id: "e", text: "my name's Fatima Belenguer." },
  { id: "f", text: "summarising my main points again." },
  { id: "g", text: "that it's been a pleasure talking to you, and thank you for your time." },
  { id: "h", text: "The first part will be to tell you what our company does …" },
  { id: "i", text: "welcome to today's presentation." },
];

const PHRASE_ANSWERS: Record<number, string> = {
  0: "i", 1: "c", 2: "e", 3: "a", 4: "h", 5: "b", 6: "f", 7: "g", 8: "d",
};

const VocabularyUnit12 = () => {
  // Ex 1
  const [ans1, setAns1] = useState<Record<string, string>>({});
  const [res1, setRes1] = useState<Record<string, "correct" | "incorrect" | null>>({});
  const [show1, setShow1] = useState(false);

  const check1 = () => {
    const r: Record<string, "correct" | "incorrect"> = {};
    descriptions.forEach((d) => {
      r[d.id] = (ans1[d.id] || "").toLowerCase() === d.answer.toLowerCase() ? "correct" : "incorrect";
    });
    setRes1(r);
    setShow1(true);
  };

  const reset1 = () => { setAns1({}); setRes1({}); setShow1(false); };

  // Ex 2
  const [ans2, setAns2] = useState<Record<number, string>>({});
  const [res2, setRes2] = useState<Record<number, "correct" | "incorrect" | null>>({});
  const [show2, setShow2] = useState(false);

  const check2 = () => {
    const r: Record<number, "correct" | "incorrect"> = {};
    phraseStarts.forEach((_, i) => {
      r[i] = (ans2[i] || "") === PHRASE_ANSWERS[i] ? "correct" : "incorrect";
    });
    setRes2(r);
    setShow2(true);
  };

  const reset2 = () => { setAns2({}); setRes2({}); setShow2(false); };

  return (
    <div className="space-y-8">
      {/* Exercise 1 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Languages className="h-5 w-5 text-primary" />
            Equipment Descriptions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-sm font-semibold text-foreground">
            <span className="text-primary font-bold mr-2">1</span>
            Match the pieces of equipment in the box to their descriptions.
          </p>

          <div className="flex flex-wrap gap-2 p-4 rounded-lg bg-primary/5 border border-primary/20">
            {EQUIPMENT.map((o) => (
              <span key={o} className="px-3 py-1 bg-background border border-border rounded-full text-sm text-foreground">{o}</span>
            ))}
          </div>

          <div className="space-y-3">
            {descriptions.map((d, idx) => (
              <div key={d.id} className="p-4 border border-border rounded-lg bg-card">
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold flex-shrink-0">{idx + 1}</span>
                  <div className="flex-1 space-y-3">
                    <p className="text-sm text-foreground">{d.text}</p>
                    <div className="flex items-center gap-2">
                      <Select
                        value={ans1[d.id] || ""}
                        onValueChange={(v) => setAns1((p) => ({ ...p, [d.id]: v }))}
                        disabled={res1[d.id] === "correct"}
                      >
                        <SelectTrigger
                          className={`h-9 text-sm w-56 ${
                            res1[d.id] === "correct"
                              ? "border-green-500 bg-green-50 dark:bg-green-950/30"
                              : res1[d.id] === "incorrect"
                                ? "border-red-500 bg-red-50 dark:bg-red-950/30"
                                : ""
                          }`}
                        >
                          <SelectValue placeholder="Choose…" />
                        </SelectTrigger>
                        <SelectContent>
                          {EQUIPMENT.map((o) => (<SelectItem key={o} value={o}>{o}</SelectItem>))}
                        </SelectContent>
                      </Select>
                      {res1[d.id] === "correct" && <CheckCircle2 className="h-4 w-4 text-green-600" />}
                      {res1[d.id] === "incorrect" && <XCircle className="h-4 w-4 text-red-500" />}
                      {show1 && res1[d.id] === "incorrect" && (
                        <span className="text-xs text-red-600 dark:text-red-400">Answer: <strong>{d.answer}</strong></span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-3">
            <Button onClick={check1} className="bg-primary hover:bg-primary/90">Check Answers</Button>
            <Button onClick={reset1} variant="outline" className="gap-2"><RotateCcw className="h-4 w-4" /> Reset</Button>
          </div>
        </CardContent>
      </Card>

      {/* Exercise 2 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Link2 className="h-5 w-5 text-primary" />
            Signalling Phrases
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-sm font-semibold text-foreground">
            <span className="text-primary font-bold mr-2">2</span>
            Match the sentence beginnings (1–9) with the sentence endings (a–i) to make typical signalling phrases for presentations.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              {phraseStarts.map((s, i) => (
                <div key={i} className="flex items-start gap-2 p-3 border border-border rounded-lg bg-card">
                  <p className="text-sm text-foreground flex-1">{s}</p>
                  <Select
                    value={ans2[i] || ""}
                    onValueChange={(v) => setAns2((p) => ({ ...p, [i]: v }))}
                    disabled={res2[i] === "correct"}
                  >
                    <SelectTrigger
                      className={`h-9 w-20 text-sm ${
                        res2[i] === "correct"
                          ? "border-green-500 bg-green-50 dark:bg-green-950/30"
                          : res2[i] === "incorrect"
                            ? "border-red-500 bg-red-50 dark:bg-red-950/30"
                            : ""
                      }`}
                    >
                      <SelectValue placeholder="?" />
                    </SelectTrigger>
                    <SelectContent>
                      {phraseEndings.map((e) => (<SelectItem key={e.id} value={e.id}>{e.id}</SelectItem>))}
                    </SelectContent>
                  </Select>
                  {res2[i] === "correct" && <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-2" />}
                  {res2[i] === "incorrect" && <XCircle className="h-4 w-4 text-red-500 flex-shrink-0 mt-2" />}
                </div>
              ))}
            </div>
            <div className="space-y-3">
              {phraseEndings.map((e) => (
                <div key={e.id} className="p-3 border border-border rounded-lg bg-muted/30">
                  <p className="text-sm text-foreground">
                    <strong className="text-primary mr-2">{e.id}</strong>
                    {e.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {show2 && (
            <div className="p-3 rounded-lg bg-muted/50">
              <p className="text-sm font-medium mb-2">Correct answers:</p>
              <div className="flex flex-wrap gap-2 text-xs">
                {phraseStarts.map((_, i) => (
                  <span key={i} className="px-2 py-1 bg-background border border-border rounded">
                    {i + 1} → <strong>{PHRASE_ANSWERS[i]}</strong>
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-3">
            <Button onClick={check2} className="bg-primary hover:bg-primary/90">Check Answers</Button>
            <Button onClick={reset2} variant="outline" className="gap-2"><RotateCcw className="h-4 w-4" /> Reset</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VocabularyUnit12;
