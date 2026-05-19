import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle } from "lucide-react";

const sentences = [
  { letter: "A", text: '"For customers, the bottom line is how soon they can take their families on a free vacation," says the CEO.' },
  { letter: "B", text: "Although business people do not appreciate having to mix with ordinary tourists." },
  { letter: "C", text: "As a result, profits are up by nearly 30% this year." },
  { letter: "D", text: "But respondents almost universally praised the company for its consistency." },
  { letter: "E", text: "But they did center on what really counts (after price and location, of course): 39% said the quality of the guest rooms was the most important thing." },
  { letter: "F", text: "Every day, there is a 15-minute exercise on things like how to greet a guest, how to handle a complaint." },
  { letter: "G", text: "Good hotels need to be able to provide good meals as well." },
  { letter: "H", text: "They often singled out the company's loyalty program." },
];

const gaps = [
  { id: 1, answer: "E" },
  { id: 2, answer: "D" },
  { id: 3, answer: "F" },
  { id: 4, answer: "H" },
  { id: 5, answer: "A" },
];

type Para = { intro?: string; gapId?: number; after?: string };
const paragraphs: { heading?: string; parts: Para[] }[] = [
  { parts: [{ intro: "We turned to the smartest business folks we know – our readers – and asked them to name the best places for the business traveler to stay. Nearly 1,200 subscribers participated in this, our first hotel survey. They logged on to BusinessWeek.com and told us where they like to stay – and why. The results were revealing." }] },
  { parts: [{ intro: "It was virtually impossible to find the single best hotel. We asked readers to name their favorite property and got almost 1,200 different answers. " , gapId: 1, after: " The hotel staff and health club were also high on the list, but the real surprise was high-speed Internet access, which came a strong second." }] },
  { parts: [{ intro: "We had no problem identifying the top chain. Marriott International, with 24%, was the winner by a wide margin. True, Marriott is the largest hotelier in the world, and its range of locations gives it an advantage. ", gapId: 2, after: " \"They never provide an unpleasant surprise,\" said one reader. \"In every Marriott throughout the world, the staff is always caring,\" gushed another. One person recalled how a Marriott staffer in Wichita made some sandwiches at no cost after the kitchen was closed." }] },
  { parts: [{ intro: "Such attentive service is no accident. \"We spend well over $100 million a year on training,\" says J.W. Marriott Jr., chairman and CEO. \"", gapId: 3, after: " I tell our people: 'We don't manufacture anything. We provide experiences.'\"" }] },
  { parts: [{ intro: "Consistency and number of locations were also reasons 12% of the respondents picked Hilton Hotels – the No. 2 finisher in the survey. ", gapId: 4, after: " This allows members to earn points for each stay in both an airline frequent-flier program and the Hilton plan. The number of brands under the Hilton umbrella was also a plus. \"I can stay at a Hampton Inn and earn points toward Hilton stays,\" one subscriber noted." }] },
  { parts: [{ intro: "No. 3 on the best-chain list was Westin, something of a surprise since, with just 120 hotels worldwide, it's much smaller than many of its rivals. Readers cited Westin's exclusive Heavenly Bed – a custom-designed bed – and its Heavenly Shower." }] },
  { parts: [{ intro: "Readers' picks of their favorite loyalty programs came up much like their favorite chains, with Marriott first and Hilton second. Here again, readers chose these programs for the number of locations and variety of brands under one plan. Last summer, Marriott tweaked its program to allow frequent guests to earn free stays 30% faster than many of its rivals. ", gapId: 5, after: "" }] },
  { parts: [{ intro: "Some 85% of respondents said their company didn't require them to stay at specific hotels or chains. About 60% said the hotel's cost was only somewhat or not important in making their plans." }] },
];

const ReadingUnit13 = () => {
  const [sel, setSel] = useState<Record<number, string>>({});
  const [res, setRes] = useState<Record<number, boolean> | null>(null);

  const check = () => {
    const r: Record<number, boolean> = {};
    gaps.forEach((g) => { r[g.id] = sel[g.id] === g.answer; });
    setRes(r);
  };

  return (
    <div className="space-y-6">
      <Card className="service-card">
        <CardContent className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold font-merriweather text-foreground">Reading: Business Accommodation</h3>
          <p className="text-muted-foreground">
            Read this article about business hotels and choose the best sentence (A–H) from the list below to fill each of the gaps.
            Three sentences will not be used.
          </p>
        </CardContent>
      </Card>

      <Card className="service-card">
        <CardContent className="p-6 space-y-4">
          <h2 className="text-3xl font-bold font-merriweather text-foreground">Home Sweet Hotel</h2>
          <p className="text-sm text-muted-foreground italic">By Christopher Palmieri</p>
          {paragraphs.map((para, i) => (
            <p key={i} className="text-foreground leading-relaxed">
              {para.parts.map((p, j) => (
                <span key={j}>
                  {p.intro}
                  {p.gapId && (
                    <span className="inline-block px-2 py-1 mx-1 bg-yellow-100 dark:bg-yellow-900/30 border-2 border-dashed border-brand-orange rounded font-bold text-brand-royal">
                      {p.gapId} {sel[p.gapId] ? `→ ${sel[p.gapId]}` : "____"}
                      {res && (res[p.gapId]
                        ? <CheckCircle2 className="inline h-4 w-4 ml-1 text-green-600" />
                        : <XCircle className="inline h-4 w-4 ml-1 text-red-500" />)}
                    </span>
                  )}
                  {p.after}
                </span>
              ))}
            </p>
          ))}
        </CardContent>
      </Card>

      <div className="space-y-3">
        {gaps.map((g) => (
          <Card key={g.id} className="service-card">
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-bold text-brand-royal">Gap {g.id}:</span>
                {res && (res[g.id]
                  ? <CheckCircle2 className="h-5 w-5 text-green-600" />
                  : <span className="text-sm text-red-600">Correct: {g.answer}</span>)}
              </div>
              <div className="flex flex-wrap gap-2">
                {sentences.map((s) => (
                  <button
                    key={s.letter}
                    onClick={() => { setSel((p) => ({ ...p, [g.id]: s.letter })); setRes(null); }}
                    className={`w-10 h-10 rounded-md border font-semibold transition-colors ${
                      sel[g.id] === s.letter ? "bg-brand-royal text-white border-brand-royal" : "border-border hover:bg-accent"
                    }`}
                  >{s.letter}</button>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="service-card">
        <CardContent className="p-6">
          <h4 className="font-semibold text-brand-royal mb-3">Sentence options (A–H)</h4>
          <div className="space-y-2 text-sm">
            {sentences.map((s) => (
              <p key={s.letter} className="text-foreground"><strong>{s.letter}</strong> — {s.text}</p>
            ))}
          </div>
        </CardContent>
      </Card>

      <Button onClick={check} className="bg-brand-royal hover:bg-brand-navy">Check Answers</Button>
    </div>
  );
};

export default ReadingUnit13;
