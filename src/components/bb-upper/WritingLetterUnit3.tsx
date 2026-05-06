import { useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, XCircle } from "lucide-react";

const orderItems = [
  { letter: "a", text: "Ask for information about how to apply", correctOrder: 7 },
  { letter: "b", text: "Ask for information about opportunities in the company", correctOrder: 6 },
  { letter: "c", text: "Explain in more detail your qualifications and background", correctOrder: 5 },
  { letter: "d", text: "Say briefly who you are", correctOrder: 1 },
  { letter: "e", text: "Say where you have heard about the company", correctOrder: 3 },
  { letter: "f", text: "Say why you are interested in working for them", correctOrder: 4 },
  { letter: "g", text: "Say why you are writing", correctOrder: 2 },
];

const wordOrderQs = [
  { id: 1, prompt: "I would like to know ...", words: "(qualifications I the whether right have)", answer: "whether I have the right qualifications" },
  { id: 2, prompt: "I would be most grateful ...", words: "(you information me about opportunities could exist if in what EMI Music send)", answer: "if you could send me information about what opportunities exist in EMI Music" },
  { id: 3, prompt: "Could you also tell me ...?", words: "(apply should I how)", answer: "how I should apply" },
  { id: 4, prompt: "I'd be interested to know ...", words: "(applications final for the when is date)", answer: "when the final date for applications is" },
];

const WritingLetterUnit3 = () => {
  const [order, setOrder] = useState<Record<string, string>>({});
  const [orderRes, setOrderRes] = useState<Record<string, boolean | null>>({});
  const woRefs = useRef<Record<number, HTMLInputElement | null>>({});
  const [woRes, setWoRes] = useState<Record<number, boolean | null>>({});

  const checkOrder = () => {
    const r: Record<string, boolean> = {};
    orderItems.forEach((i) => { r[i.letter] = order[i.letter] === String(i.correctOrder); });
    setOrderRes(r);
  };
  const checkWO = () => {
    const r: Record<number, boolean> = {};
    wordOrderQs.forEach((q) => {
      const v = (woRefs.current[q.id]?.value || "").trim().toLowerCase().replace(/[?.!]+$/, "");
      r[q.id] = v === q.answer.toLowerCase();
    });
    setWoRes(r);
  };

  const icon = (v: boolean | null | undefined) => v == null ? null : (v ? <CheckCircle className="inline h-5 w-5 text-green-600 ml-1" /> : <XCircle className="inline h-5 w-5 text-red-600 ml-1" />);

  return (
    <div className="space-y-8">
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">A letter of enquiry</h3>
          <p className="text-foreground"><strong>1</strong> Imagine you are writing to EMI Music to enquire about opportunities to work for their company. In what order would you do each of these things in your letter or email? Number them <strong>1–7</strong>.</p>
        </CardContent>
      </Card>

      <Card className="service-card">
        <CardContent className="p-6">
          <div className="space-y-3">
            {orderItems.map((i) => (
              <div key={i.letter} className="flex items-center gap-3">
                <span className="font-bold text-brand-royal w-6">{i.letter}</span>
                <p className="flex-1 text-foreground">{i.text}</p>
                <Input
                  type="number" min={1} max={7}
                  value={order[i.letter] || ""}
                  onChange={(e) => setOrder((p) => ({ ...p, [i.letter]: e.target.value }))}
                  className={`w-20 ${orderRes[i.letter] === true ? "border-green-500 bg-green-50" : orderRes[i.letter] === false ? "border-red-500 bg-red-50" : ""}`}
                />
                {icon(orderRes[i.letter])}
                {orderRes[i.letter] === false && <span className="text-sm text-red-600">({i.correctOrder})</span>}
              </div>
            ))}
          </div>
          <Button onClick={checkOrder} className="mt-4 bg-brand-royal hover:bg-brand-navy">Check Answers</Button>
        </CardContent>
      </Card>

      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2 font-merriweather text-foreground">Sample letter</h3>
          <p className="text-muted-foreground mb-4"><strong>2</strong> Read this sample letter. In what order do the items above appear? <em>(Answer: d, g, e, f, c, b, a)</em></p>
          <div className="bg-muted/40 border border-border rounded-lg p-5 leading-relaxed text-foreground space-y-3">
            <p>Dear Sir or Madam,</p>
            <p>I am a 22-year-old student of Business Administration from the University of Fribourg in Switzerland and I am writing to enquire about career opportunities within your company. I have visited your website and I see that people working in your company combine an interest in business with a love of music. I am in my final year of a four-year course of studies and am interested in working for a multinational company like yours because you combine a range of business challenges with scope for the innovative promotion of music, which is what I have been studying as my special research project.</p>
            <p>My particular specialisation has been the promotion of young classical musicians, both through live concerts and using the Internet.</p>
            <p>I would be most grateful if you could send me information about what opportunities exist in EMI Music, either as a management trainee or a marketing assistant, in a year's time. Could you also tell me how I should apply?</p>
            <p>Thanking you in advance.</p>
            <p>Yours faithfully,<br />Pierre Schneider</p>
          </div>
        </CardContent>
      </Card>

      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2 font-merriweather text-foreground">Exercise 3 — Asking for information (complex questions)</h3>
          <p className="text-muted-foreground mb-4">Complete these ways of asking for information by putting the words in brackets in the correct order.</p>
          <div className="space-y-4">
            {wordOrderQs.map((q) => (
              <div key={q.id} className="space-y-1">
                <p className="text-foreground"><span className="font-semibold mr-2">{q.id}</span>{q.prompt}</p>
                <p className="text-xs text-muted-foreground italic">{q.words}</p>
                <div className="flex items-center gap-2">
                  <Input
                    ref={(el) => { woRefs.current[q.id] = el; }}
                    placeholder="Type your answer..."
                    className={`flex-1 ${woRes[q.id] === true ? "border-green-500 bg-green-50" : woRes[q.id] === false ? "border-red-500 bg-red-50" : ""}`}
                  />
                  {icon(woRes[q.id])}
                </div>
                {woRes[q.id] === false && <p className="text-sm text-red-600">Answer: {q.answer}</p>}
              </div>
            ))}
          </div>
          <Button onClick={checkWO} className="mt-4 bg-brand-royal hover:bg-brand-navy">Check Answers</Button>
        </CardContent>
      </Card>

      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2 font-merriweather text-foreground">Exercise 4 — Write your own letter of enquiry</h3>
          <p className="text-muted-foreground mb-4">Write a letter of enquiry to a company or organisation you would be interested in working for. Follow the structure of the letter you have just read, but change the details to reflect your situation and background.</p>
          <Textarea placeholder="Dear Sir or Madam, ..." className="min-h-[260px]" />
        </CardContent>
      </Card>
    </div>
  );
};

export default WritingLetterUnit3;
