import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2 } from "lucide-react";

const AUDIO_URL = "/audio/bb-upper/unit5-listening.mp3";

const questions = [
  {
    id: 1,
    q: "Why did Tesco originally introduce their own brand?",
    options: ["To increase sales.", "To reduce reliance on suppliers.", "To reduce costs."],
    answer: "C",
  },
  {
    id: 2,
    q: "What is the main reason for supermarkets having own brands nowadays?",
    options: [
      "They bring customers back to their shops.",
      "They have a higher profit margin.",
      "They don't depend on outside suppliers.",
    ],
    answer: "A",
  },
  {
    id: 3,
    q: "Tesco can sell own value brands more cheaply than other brands because …",
    options: [
      "they pay their suppliers less.",
      "they sell in large quantities.",
      "they don't need advertising.",
    ],
    answer: "B",
  },
];

const LETTERS = ["A", "B", "C"];

const transcript = `Tesco were actually the first supermarket to introduce an own brand, and it was Tesco tea, um, when … and that was before the supermarkets … um, the main reason for it, I would imagine, er, started off as overheads … if you're not paying a premium to another supplier to produce that brand. You also have much better control over the brand, the product that's going into the packet, and you also get recognition, so if Tesco produce a particularly good biscuit or a particularly good kind of coffee, you're building up all the time customer loyalty, because they've got that Tesco brand in their cupboard, and it's good, and they'll go back to that store to get it … Some are cheaper, some are more expensive. Tesco Own Brand Finest, for instance, may be more expensive than a similar product, but it'll be much better quality, and Tesco will be able to control that quality. Um, our value brands are branded specifically to be at a better price, and we can do that because we're a large business that, you know, has an awful lot of product going through it.`;

const ListeningUnit5 = () => {
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
        <CardContent className="p-6 space-y-3">
          <h3 className="text-2xl font-semibold font-merriweather text-foreground">Listening: Supermarkets' Own Brands</h3>
          <p className="text-muted-foreground">
            You are going to hear Christina Bunt talking about Tesco's own brands. An 'own brand' is a product which a supermarket sells with its own name on it, e.g. Tesco washing powder or Tesco bread.
          </p>
          <p className="text-muted-foreground"><strong>1</strong> Before you listen, discuss why supermarkets have own brands.</p>
          <p className="text-muted-foreground"><strong>2</strong> Listen and choose the best answer for each question.</p>
          <audio controls src={AUDIO_URL} className="w-full mt-2" />
        </CardContent>
      </Card>

      <div className="space-y-3">
        {questions.map((q) => (
          <Card key={q.id} className="service-card">
            <CardContent className="p-4 space-y-2">
              <div className="flex items-start gap-3">
                <span className="font-bold text-brand-royal">{q.id}.</span>
                <p className="flex-1 text-foreground">{q.q}</p>
                {res && (res[q.id]
                  ? <CheckCircle2 className="h-5 w-5 text-green-600" />
                  : <span className="text-sm text-red-600">Correct: {q.answer}</span>)}
              </div>
              <div className="flex flex-col gap-1 ml-7">
                {q.options.map((opt, i) => {
                  const L = LETTERS[i];
                  const isSel = sel[q.id] === L;
                  return (
                    <button
                      key={L}
                      onClick={() => { setSel((p) => ({ ...p, [q.id]: L })); setRes(null); }}
                      className={`text-left px-3 py-2 rounded border text-sm transition-colors ${
                        isSel ? "bg-brand-royal text-white border-brand-royal" : "border-border hover:bg-accent"
                      }`}
                    ><span className="font-bold mr-2">{L}</span>{opt}</button>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Button onClick={check} className="bg-brand-royal hover:bg-brand-navy">Check Answers</Button>

      <Accordion type="single" collapsible>
        <AccordionItem value="t">
          <AccordionTrigger>Show transcript</AccordionTrigger>
          <AccordionContent>
            <p className="whitespace-pre-wrap text-sm text-foreground leading-relaxed">{transcript}</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ListeningUnit5;
