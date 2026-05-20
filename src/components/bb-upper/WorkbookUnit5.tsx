import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2 } from "lucide-react";

// --- Exercise 1: Vocabulary — multi-choice gap-fill ---
const vocabQuestions = [
  { id: 1, options: ["introduce", "launch", "establish", "start"], answer: "launch" },
  { id: 2, options: ["compete", "fight", "oppose", "struggle"], answer: "compete" },
  { id: 3, options: ["resource", "fund", "budget", "account"], answer: "budget" },
  { id: 4, options: ["research", "investigation", "experiments", "study"], answer: "research" },
  { id: 5, options: ["money", "number", "total", "price"], answer: "price" },
  { id: 6, options: ["manoeuvre", "scheme", "move", "ploy"], answer: "ploy" },
  { id: 7, options: ["Employ", "Focus", "Aim", "Direct"], answer: "Focus" },
  { id: 8, options: ["constant", "true", "loyal", "faithful"], answer: "loyal" },
  { id: 9, options: ["word-of-mouth", "mouth-to-mouth", "face-to-face", "eye-to-eye"], answer: "word-of-mouth" },
  { id: 10, options: ["publicity", "promotional", "selling", "sales"], answer: "promotional" },
  { id: 11, options: ["end", "aim", "target", "object"], answer: "target" },
  { id: 12, options: ["Internet", "email", "hyperlink", "website"], answer: "website" },
  { id: 13, options: ["examples", "copies", "samples", "trials"], answer: "samples" },
  { id: 14, options: ["understanding", "awareness", "knowledge", "information"], answer: "awareness" },
  { id: 15, options: ["hold", "have", "keep", "stock"], answer: "stock" },
];

const vocabText: { intro?: string; gap?: number; after?: string }[] = [
  { intro: "It is not easy for inventors to ", gap: 1, after: " a new product on the market, especially when they have to " },
  { gap: 2, after: " with large consumer products companies which have a marketing " },
  { gap: 3, after: " of millions of pounds. Essentially, inventors have to carry out market " },
  { gap: 4, after: " beforehand in order to discover who might need or want their product, and what " },
  { gap: 5, after: " they might be prepared to pay. For a small company, the most effective marketing " },
  { gap: 6, after: " is to demonstrate the product to potential customers first, so that they know what they are buying. " },
  { gap: 7, after: " your marketing efforts on the customers you have and make sure to keep them happy and " },
  { gap: 8, after: ". If you can do that, you will discover that they talk about the product to other people, and " },
  { gap: 9, after: " recommendation is the most cost-effective way of extending your customer base.\n\nBefore undertaking costly " },
  { gap: 10, after: " activities, such as printing brochures and taking out advertisements, use your imagination to see if you can reach your " },
  { gap: 11, after: " customers without spending so much. Relatively cheap ways of marketing your product are through a(n) " },
  { gap: 12, after: ", handing out free " },
  { gap: 13, after: " at big events, and sending your product to journalists, who, if the product interests them, may write an article about it in a magazine or newspaper. All these activities will raise brand " },
  { gap: 14, after: ".\n\nBe ready to sell directly to customers, but, if your product is a consumer product, it is worth approaching retail stores to see if they will " },
  { gap: 15, after: " it, too." },
];

// --- Grammar 1: a/an/blank ---
const g1Questions = [
  { id: 1, answer: "" },
  { id: 2, answer: "" },
  { id: 3, answer: "a" },
  { id: 4, answer: "" },
  { id: 5, answer: "an" },
  { id: 6, answer: "" },
  { id: 7, answer: "" },
  { id: 8, answer: "" },
  { id: 9, answer: "a" },
  { id: 10, answer: "" },
  { id: 11, answer: "" },
  { id: 12, answer: "a" },
  { id: 13, answer: "a" },
];

const g1Text: { intro?: string; gap?: number; after?: string }[] = [
  { intro: "Looking for ", gap: 1, after: " work in " },
  { gap: 2, after: " advertising? Blatch and Moore is recruiting " },
  { gap: 3, after: " writer to prepare the copy for " },
  { gap: 4, after: " direct mailshots. You may also from time to time be asked to write " },
  { gap: 5, after: " advertisement or leaflet. " },
  { gap: 6, after: " formal qualifications are not necessary, but " },
  { gap: 7, after: " experience in " },
  { gap: 8, after: " marketing is desirable. We are offering " },
  { gap: 9, after: " permanent contract to the right person. " },
  { gap: 10, after: " satisfactory performance will lead to " },
  { gap: 11, after: " quick promotion. For the right person, our company is " },
  { gap: 12, after: " business with " },
  { gap: 13, after: " future!" },
];

// --- Grammar 2: -ing / infinitive ---
const g2Questions = [
  { id: 1, verb: "express", answer: ["to express"] },
  { id: 2, verb: "be", answer: ["to be"] },
  { id: 3, verb: "increase", answer: ["increasing"] },
  { id: 4, verb: "spend", answer: ["to spend"] },
  { id: 5, verb: "raise", answer: ["to raise"] },
  { id: 6, verb: "lose", answer: ["losing"] },
  { id: 7, verb: "do", answer: ["doing"] },
  { id: 8, verb: "follow", answer: ["following"] },
  { id: 9, verb: "contact", answer: ["contacting"] },
  { id: 10, verb: "find", answer: ["to find"] },
  { id: 11, verb: "do", answer: ["doing"] },
  { id: 12, verb: "think", answer: ["thinking"] },
  { id: 13, verb: "develop", answer: ["developing"] },
  { id: 14, verb: "innovate", answer: ["innovating"] },
  { id: 15, verb: "meet", answer: ["to meet"] },
  { id: 16, verb: "discuss", answer: ["to discuss"] },
  { id: 17, verb: "see", answer: ["to see"] },
  { id: 18, verb: "hear", answer: ["hearing"] },
];

const g2Text: { intro?: string; gap?: number; after?: string }[] = [
  { intro: "Dear Colin,\n\nI am writing ", gap: 1, after: " my concern about the situation of several of our product lines. Sales appear " },
  { gap: 2, after: " falling in several of them. I suggest " },
  { gap: 3, after: " our marketing budget this year by about 20%. I think we will have " },
  { gap: 4, after: " more on advertising in order " },
  { gap: 5, after: " brand awareness. Competition in our sector has been increasing, and we have to avoid " },
  { gap: 6, after: " market share to our competitors, which is something we risk " },
  { gap: 7, after: " by " },
  { gap: 8, after: " our present strategy. Also, by " },
  { gap: 9, after: " our main customers directly, we may be able " },
  { gap: 10, after: " out why our products are losing competitiveness. I think it would be worth " },
  { gap: 11, after: " this, and also " },
  { gap: 12, after: " about " },
  { gap: 13, after: " new lines and " },
  { gap: 14, after: " a bit more. Perhaps we could arrange " },
  { gap: 15, after: " sometime " },
  { gap: 16, after: " this. I would be happy " },
  { gap: 17, after: " you any time next week.\n\nLooking forward to " },
  { gap: 18, after: " from you,\n\nVince" },
];

const norm = (s: string) => s.trim().toLowerCase().replace(/\s+/g, " ");

const WorkbookUnit5 = () => {
  const [v, setV] = useState<Record<number, string>>({});
  const [vRes, setVRes] = useState<Record<number, boolean> | null>(null);
  const [g1, setG1] = useState<Record<number, string>>({});
  const [g1Res, setG1Res] = useState<Record<number, boolean> | null>(null);
  const [g2, setG2] = useState<Record<number, string>>({});
  const [g2Res, setG2Res] = useState<Record<number, boolean> | null>(null);

  const checkV = () => {
    const r: Record<number, boolean> = {};
    vocabQuestions.forEach((q) => { r[q.id] = v[q.id] === q.answer; });
    setVRes(r);
  };
  const checkG1 = () => {
    const r: Record<number, boolean> = {};
    g1Questions.forEach((q) => { r[q.id] = norm(g1[q.id] || "") === q.answer; });
    setG1Res(r);
  };
  const checkG2 = () => {
    const r: Record<number, boolean> = {};
    g2Questions.forEach((q) => { r[q.id] = q.answer.map(norm).includes(norm(g2[q.id] || "")); });
    setG2Res(r);
  };

  return (
    <div className="space-y-10">
      {/* Vocabulary */}
      <Card className="service-card">
        <CardContent className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold font-merriweather text-foreground">Vocabulary</h3>
          <p className="text-muted-foreground">Read this text about inventors and choose the best word (A, B, C or D) to fill each gap.</p>
        </CardContent>
      </Card>

      <Card className="service-card">
        <CardContent className="p-6">
          <pre className="whitespace-pre-wrap text-foreground leading-relaxed font-sans">
            {vocabText.map((part, i) => (
              <span key={i}>
                {part.intro}
                {part.gap && (
                  <span className="inline-block px-2 py-0.5 mx-1 bg-yellow-100 dark:bg-yellow-900/30 border border-dashed border-brand-orange rounded font-bold text-brand-royal">
                    {part.gap}{v[part.gap] ? `: ${v[part.gap]}` : ""}
                  </span>
                )}
                {part.after}
              </span>
            ))}
          </pre>
        </CardContent>
      </Card>

      <div className="space-y-2">
        {vocabQuestions.map((q) => (
          <Card key={q.id} className="service-card">
            <CardContent className="p-3">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-bold text-brand-royal w-8">{q.id}.</span>
                {q.options.map((opt, i) => {
                  const L = ["A", "B", "C", "D"][i];
                  const isSel = v[q.id] === opt;
                  return (
                    <button
                      key={opt}
                      onClick={() => { setV((p) => ({ ...p, [q.id]: opt })); setVRes(null); }}
                      className={`px-3 py-1 rounded border text-sm transition-colors ${
                        isSel ? "bg-brand-royal text-white border-brand-royal" : "border-border hover:bg-accent"
                      }`}
                    ><span className="font-bold mr-1">{L}</span>{opt}</button>
                  );
                })}
                {vRes && (vRes[q.id]
                  ? <CheckCircle2 className="h-5 w-5 text-green-600" />
                  : <span className="text-sm text-red-600">Correct: {q.answer}</span>)}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Button onClick={checkV} className="bg-brand-royal hover:bg-brand-navy">Check Vocabulary</Button>

      {/* Grammar 1 */}
      <Card className="service-card mt-10">
        <CardContent className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold font-merriweather text-foreground">Grammar 1: Countable / Uncountable Nouns</h3>
          <p className="text-muted-foreground">Complete the following job advertisement with <em>a/an</em> if the noun is countable and singular. Leave the space blank (type <code>-</code> or leave empty) if the noun is uncountable or plural.</p>
        </CardContent>
      </Card>

      <Card className="service-card">
        <CardContent className="p-6">
          <pre className="whitespace-pre-wrap text-foreground leading-relaxed font-sans">
            {g1Text.map((part, i) => (
              <span key={i}>
                {part.intro}
                {part.gap && (
                  <span className="inline-block px-2 py-0.5 mx-1 bg-yellow-100 dark:bg-yellow-900/30 border border-dashed border-brand-orange rounded font-bold text-brand-royal">
                    {part.gap}{g1[part.gap] ? `: ${g1[part.gap]}` : ""}
                  </span>
                )}
                {part.after}
              </span>
            ))}
          </pre>
        </CardContent>
      </Card>

      <div className="space-y-2">
        {g1Questions.map((q) => (
          <Card key={q.id} className="service-card">
            <CardContent className="p-3 flex items-center gap-3">
              <span className="font-bold text-brand-royal w-8">{q.id}.</span>
              <Input
                value={g1[q.id] || ""}
                onChange={(e) => { setG1((p) => ({ ...p, [q.id]: e.target.value })); setG1Res(null); }}
                className={`w-32 ${g1Res ? (g1Res[q.id] ? "border-green-600" : "border-red-500") : ""}`}
                placeholder="a / an / —"
              />
              {g1Res && (g1Res[q.id]
                ? <CheckCircle2 className="h-5 w-5 text-green-600" />
                : <span className="text-sm text-red-600">Correct: {q.answer || "(leave blank)"}</span>)}
            </CardContent>
          </Card>
        ))}
      </div>

      <Button onClick={checkG1} className="bg-brand-royal hover:bg-brand-navy">Check Grammar 1</Button>

      {/* Grammar 2 */}
      <Card className="service-card mt-10">
        <CardContent className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold font-merriweather text-foreground">Grammar 2: <em>-ing</em> forms and infinitives</h3>
          <p className="text-muted-foreground">Complete this email from the CEO of a company to the finance director by putting the verbs in brackets into the correct form (<em>-ing</em> form or infinitive).</p>
        </CardContent>
      </Card>

      <Card className="service-card">
        <CardContent className="p-6">
          <pre className="whitespace-pre-wrap text-foreground leading-relaxed font-sans">
            {g2Text.map((part, i) => (
              <span key={i}>
                {part.intro}
                {part.gap && (
                  <span className="inline-block px-2 py-0.5 mx-1 bg-yellow-100 dark:bg-yellow-900/30 border border-dashed border-brand-orange rounded font-bold text-brand-royal">
                    {part.gap}{g2[part.gap] ? `: ${g2[part.gap]}` : ` (${g2Questions[part.gap - 1].verb})`}
                  </span>
                )}
                {part.after}
              </span>
            ))}
          </pre>
        </CardContent>
      </Card>

      <div className="space-y-2">
        {g2Questions.map((q) => (
          <Card key={q.id} className="service-card">
            <CardContent className="p-3 flex items-center gap-3">
              <span className="font-bold text-brand-royal w-8">{q.id}.</span>
              <span className="text-foreground w-24 italic">({q.verb})</span>
              <Input
                value={g2[q.id] || ""}
                onChange={(e) => { setG2((p) => ({ ...p, [q.id]: e.target.value })); setG2Res(null); }}
                className={`max-w-xs ${g2Res ? (g2Res[q.id] ? "border-green-600" : "border-red-500") : ""}`}
              />
              {g2Res && (g2Res[q.id]
                ? <CheckCircle2 className="h-5 w-5 text-green-600" />
                : <span className="text-sm text-red-600">{q.answer[0]}</span>)}
            </CardContent>
          </Card>
        ))}
      </div>

      <Button onClick={checkG2} className="bg-brand-royal hover:bg-brand-navy">Check Grammar 2</Button>
    </div>
  );
};

export default WorkbookUnit5;
