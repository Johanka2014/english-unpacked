import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle } from "lucide-react";

const questions = [
  { id: 1, options: ["position", "point", "place", "area"], answer: "place" },
  { id: 2, options: ["reasons", "intentions", "needs", "advantages"], answer: "reasons" },
  { id: 3, options: ["force", "inspire", "move", "involve"], answer: "inspire" },
  { id: 4, options: ["capable", "effective", "certain", "able"], answer: "effective" },
  { id: 5, options: ["doing", "thinking", "making", "arranging"], answer: "arranging" },
  { id: 6, options: ["costly", "pricey", "worthy", "valuable"], answer: "valuable" },
  { id: 7, options: ["one", "another", "others", "any"], answer: "others" },
  { id: 8, options: ["save", "keep", "spend", "pay"], answer: "save" },
  { id: 9, options: ["think", "plan", "consider", "arrange"], answer: "consider" },
  { id: 10, options: ["lowest", "exclusive", "falling", "bargain"], answer: "bargain" },
  { id: 11, options: ["estimate", "budget", "quote", "spending"], answer: "budget" },
  { id: 12, options: ["few", "varied", "distinct", "various"], answer: "various" },
  { id: 13, options: ["next", "similar", "relative", "near"], answer: "relative" },
  { id: 14, options: ["attendees", "attendants", "assistants", "attention"], answer: "attendees" },
  { id: 15, options: ["pleased", "supposed", "ordered", "prepared"], answer: "prepared" },
];

const text: { intro?: string; gap?: number; after?: string }[] = [
  { intro: "For a sales representative, there are few things more boring than being asked to endure three days of sales meetings. But because sales conferences are an excellent ", gap: 1, after: " for reps to discuss a new product launch or get new ideas, there are many powerful " },
  { gap: 2, after: " to plan a gathering." },
  { intro: "Would you like to pull together a lively sales conference that will ", gap: 3, after: " your reps to sell better, bond and share their most " },
  { gap: 4, after: " selling practices? Here are a few great ways to plan a conference." },
  { intro: "Create a mix of fun and focus. Schedule a keynote speech from a speaker the sales staff respect. And when ", gap: 5, after: " activities, remember: one salesperson's idea of a fun experience may be another's waste of " },
  { gap: 6, after: " time. Planners should create a menu of entertaining activities and let people decide. While some may choose golf, " },
  { gap: 7, after: " may go for a massage and a manicure. A well-planned meeting should be a mixture of 25 per cent fun and 75 per cent education." },
  { intro: "Book well and ", gap: 8, after: " money. Rio during Carnival may make you bankrupt, so " },
  { gap: 9, after: " booking a great resort in the off-season. Think Maine in March or Dallas in June. You'll get wonderful facilities at " },
  { gap: 10, after: " prices — and probably a lot more attention from the hotel staff." },
  { intro: "If you are on a tight ", gap: 11, after: ", you should be especially careful at the development stage. Plan and get competitive bids from " },
  { gap: 12, after: " providers. Analyse the costs " },
  { gap: 13, after: " to your goals, and organise the meeting so that it will be as cost-effective as possible." },
  { intro: "Engage your ", gap: 14, after: ". Motivate reps before the conference by giving them an assignment, such as reading industry articles they should be " },
  { gap: 15, after: " to discuss, or sharing the finest proposals they have ever written." },
];

const Reading2Unit13 = () => {
  const [sel, setSel] = useState<Record<number, string>>({});
  const [res, setRes] = useState<Record<number, boolean> | null>(null);

  const check = () => {
    const r: Record<number, boolean> = {};
    questions.forEach((q) => { r[q.id] = sel[q.id] === q.answer; });
    setRes(r);
  };

  return (
    <div className="space-y-6">
      <Card className="service-card">
        <CardContent className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold font-merriweather text-foreground">Reading: Planning a Lively Sales Conference</h3>
          <p className="text-muted-foreground">Read the article below about how to plan a sales conference and choose the best word (A–D) to fill each gap.</p>
        </CardContent>
      </Card>

      <Card className="service-card">
        <CardContent className="p-6 space-y-4">
          <h2 className="text-3xl font-bold font-merriweather text-foreground">Bye-bye BORING</h2>
          <p className="text-sm text-muted-foreground italic">By Kimberly L. McCall — You can plan a lively sales conference without breaking the bank.</p>
          <p className="text-foreground leading-relaxed">
            {text.map((part, i) => (
              <span key={i}>
                {part.intro}
                {part.gap && (
                  <span className="inline-block px-2 py-0.5 mx-1 bg-yellow-100 dark:bg-yellow-900/30 border border-dashed border-brand-orange rounded font-bold text-brand-royal">
                    {part.gap}{sel[part.gap] ? `: ${sel[part.gap]}` : ""}
                    {res && (res[part.gap]
                      ? <CheckCircle2 className="inline h-4 w-4 ml-1 text-green-600" />
                      : <XCircle className="inline h-4 w-4 ml-1 text-red-500" />)}
                  </span>
                )}
                {part.after}
              </span>
            ))}
          </p>
        </CardContent>
      </Card>

      <div className="space-y-2">
        {questions.map((q) => (
          <Card key={q.id} className="service-card">
            <CardContent className="p-4">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="font-bold text-brand-royal w-8">{q.id}.</span>
                {q.options.map((opt, i) => {
                  const letter = ["A", "B", "C", "D"][i];
                  const isSel = sel[q.id] === opt;
                  return (
                    <button
                      key={opt}
                      onClick={() => { setSel((p) => ({ ...p, [q.id]: opt })); setRes(null); }}
                      className={`px-3 py-1.5 rounded border text-sm transition-colors ${
                        isSel ? "bg-brand-royal text-white border-brand-royal" : "border-border hover:bg-accent"
                      }`}
                    ><span className="font-bold mr-1">{letter}</span>{opt}</button>
                  );
                })}
                {res && (res[q.id]
                  ? <CheckCircle2 className="h-5 w-5 text-green-600" />
                  : <span className="text-sm text-red-600">Correct: {q.answer}</span>)}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Button onClick={check} className="bg-brand-royal hover:bg-brand-navy">Check Answers</Button>
    </div>
  );
};

export default Reading2Unit13;
