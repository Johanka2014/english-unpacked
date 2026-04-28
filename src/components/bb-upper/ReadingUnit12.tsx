import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, XCircle, RotateCcw, BookOpen } from "lucide-react";

const advice = [
  { n: 1, text: "Do a course on presentation skills.", answer: "A" },
  { n: 2, text: "Speak at a suitable speed.", answer: "D" },
  { n: 3, text: "Improve the way you speak by taping yourself and listening to it.", answer: "C" },
  { n: 4, text: "Look directly at your listeners when speaking.", answer: "D" },
  { n: 5, text: "Plan your presentation carefully.", answer: "B" },
  { n: 6, text: "Practise in order to reduce nervousness.", answer: "A" },
  { n: 7, text: "Prepare for possible questions.", answer: "B" },
  { n: 8, text: "Use photocopies for anything too long and complex.", answer: "D" },
];

const paragraphs: { letter: string; text: string }[] = [
  {
    letter: "A",
    text: "The fear of speaking is considered by many business people as their number-one fear. They may even avoid speaking opportunities that could advance their career. While there are many effective methods of relaxation that can help reduce the fear of speaking, for most people it is not something they can simply get up and do effectively without having at least some basic training. Rehearsing the presentation will greatly reduce anxiety. The more familiar the material, the more credible the speaker will sound.",
  },
  {
    letter: "B",
    text: "The first step in making a really effective presentation is to prepare. As the saying goes, 'failing to prepare is preparing to fail.' You will need to spend some time thinking about the material you want to cover, brainstorming all the things it might be possible to include, and then ranking them according to which topics you must include, which topics it might be nice to include if time allows, and which things it is worth knowing about in case anybody asks you about it.",
  },
  {
    letter: "C",
    text: "Nothing will improve your presentation more than seeing yourself on screen. You will notice mannerisms that you never noticed before. And you will instantly begin to make changes. Recording and listening to yourself is another tool to use when you rehearse your presentations. You'll immediately know if you are speaking clearly or if some words are difficult to understand. You will hear mistakes in grammar and inappropriate 'ums' and 'ahs'.",
  },
  {
    letter: "D",
    text: "Enthusiasm is essential. Try to smile, and make eye contact with members of the audience as often as possible. Remember to speak slowly and clearly. Pause regularly to allow the audience to digest what you have said. Short words and simple sentences will have more impact than long and complicated sentences — avoid technical language, too. If you are worried about drying up, then use notes (these should be prompts only — don't read straight from them). Convert statistics into charts and graphs wherever possible, and put any lengthy detail into a handout which people can read at their leisure.",
  },
];

const ReadingUnit12 = () => {
  const [ans, setAns] = useState<Record<number, string>>({});
  const [res, setRes] = useState<Record<number, "correct" | "incorrect" | null>>({});
  const [show, setShow] = useState(false);

  const check = () => {
    const r: Record<number, "correct" | "incorrect"> = {};
    advice.forEach((a) => { r[a.n] = (ans[a.n] || "") === a.answer ? "correct" : "incorrect"; });
    setRes(r);
    setShow(true);
  };
  const reset = () => { setAns({}); setRes({}); setShow(false); };
  const correct = Object.values(res).filter((v) => v === "correct").length;

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            Making the most of presentations
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            <span className="text-primary font-bold mr-2">1</span>
            Work in pairs. Read the advice about giving presentations (1–8) and decide if each piece of advice is:
            <strong> a</strong> excellent advice, <strong>b</strong> quite useful advice, or <strong>c</strong> not very useful advice.
          </p>

          <div className="grid sm:grid-cols-2 gap-2">
            {advice.map((a) => (
              <div key={a.n} className="p-3 rounded-lg bg-muted/40 border border-border text-sm">
                <span className="text-primary font-bold mr-2">{a.n}</span>
                {a.text}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 space-y-6">
          <p className="text-sm font-semibold text-foreground">
            <span className="text-primary font-bold mr-2">2</span>
            Read the paragraphs (A–D). Which paragraph does each piece of advice (1–8) refer to?
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {paragraphs.map((p) => (
              <div key={p.letter} className="p-4 rounded-lg border border-border bg-card">
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold mb-2">
                  {p.letter}
                </div>
                <p className="text-sm text-foreground leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>

          <div className="space-y-2">
            {advice.map((a) => (
              <div key={a.n} className="flex items-center gap-3 p-3 rounded-lg border border-border bg-card">
                <span className="text-primary font-bold w-5">{a.n}</span>
                <span className="flex-1 text-sm text-foreground">{a.text}</span>
                <Select
                  value={ans[a.n] || ""}
                  onValueChange={(v) => setAns((p) => ({ ...p, [a.n]: v }))}
                  disabled={res[a.n] === "correct"}
                >
                  <SelectTrigger
                    className={`h-9 w-20 text-sm ${
                      res[a.n] === "correct"
                        ? "border-green-500 bg-green-50 dark:bg-green-950/30"
                        : res[a.n] === "incorrect"
                          ? "border-red-500 bg-red-50 dark:bg-red-950/30"
                          : ""
                    }`}
                  >
                    <SelectValue placeholder="?" />
                  </SelectTrigger>
                  <SelectContent>
                    {["A", "B", "C", "D"].map((l) => (<SelectItem key={l} value={l}>{l}</SelectItem>))}
                  </SelectContent>
                </Select>
                {res[a.n] === "correct" && <CheckCircle2 className="h-4 w-4 text-green-600" />}
                {res[a.n] === "incorrect" && (
                  <span className="text-xs text-red-600">→ {a.answer}</span>
                )}
              </div>
            ))}
          </div>

          {show && (
            <div className="p-3 rounded-lg bg-muted/50 text-center text-sm">
              Score: <strong>{correct}/{advice.length}</strong>
            </div>
          )}

          <div className="flex gap-3">
            <Button onClick={check} className="bg-primary hover:bg-primary/90">Check Answers</Button>
            <Button onClick={reset} variant="outline" className="gap-2"><RotateCcw className="h-4 w-4" /> Reset</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReadingUnit12;
