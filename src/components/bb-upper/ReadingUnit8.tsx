import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, XCircle } from "lucide-react";

const AUDIO_URL = "/audio/bb-upper/unit8-listening-2.mp3";

const productQs: { id: number; before: string; after: string; answer: string; full: string }[] = [
  { id: 1, before: "Is it ", after: " clean?", answer: "easy to keep", full: "Is it easy to keep clean?" },
  { id: 2, before: "Not very heavy, is it? How much ", after: "?", answer: "does it weigh", full: "How much does it weigh?" },
  { id: 3, before: "Great! Now, if we stocked this product, how much ", after: " able to sell it for, Susie?", answer: "would we be", full: "How much would we be able to sell it for?" },
  { id: 4, before: "OK, and what price ", after: " supply it to us at?", answer: "would you", full: "What price would you supply it to us at?" },
  { id: 5, before: "How quickly ", after: " them to us if they were selling well?", answer: "could you get", full: "How quickly could you get them to us?" },
  { id: 6, before: "One more question. ", after: " supplied with a battery, or do customers have to pay extra for that?", answer: "Does it come", full: "Does it come supplied with a battery?" },
];

const matches = [
  { id: 1, word: "stock (v)", answer: "d" },
  { id: 2, word: "gadget", answer: "h" },
  { id: 3, word: "damp cloth", answer: "e" },
  { id: 4, word: "plug it into the mains", answer: "b" },
  { id: 5, word: "retail (v)", answer: "f" },
  { id: 6, word: "mark-up (n)", answer: "a" },
  { id: 7, word: "carry a lot of stock", answer: "c" },
  { id: 8, word: "come supplied with", answer: "g" },
];

const defs = [
  { letter: "a", text: "amount by which the price of something is increased before it is sold again" },
  { letter: "b", text: "connect it to the electricity supply" },
  { letter: "c", text: "keep a large amount of goods in a (chain of) shop(s)" },
  { letter: "d", text: "keep a supply of" },
  { letter: "e", text: "piece of slightly wet material" },
  { letter: "f", text: "sell in shops" },
  { letter: "g", text: "sell together with" },
  { letter: "h", text: "small device or machine with a particular purpose" },
];

const classify = [
  { id: 1, q: "Is it easy to keep clean?", answer: "characteristic" },
  { id: 2, q: "How much does it weigh?", answer: "characteristic" },
  { id: 3, q: "How much would we be able to sell it for?", answer: "terms" },
  { id: 4, q: "What price would you supply it to us at?", answer: "terms" },
  { id: 5, q: "How quickly could you get them to us?", answer: "terms" },
  { id: 6, q: "Does it come supplied with a battery?", answer: "characteristic" },
];

const ReadingUnit8 = () => {
  const [qAns, setQAns] = useState<Record<number, string>>({});
  const [qRes, setQRes] = useState<Record<number, boolean> | null>(null);
  const [mAns, setMAns] = useState<Record<number, string>>({});
  const [mRes, setMRes] = useState<Record<number, boolean> | null>(null);
  const [cAns, setCAns] = useState<Record<number, string>>({});
  const [cRes, setCRes] = useState<Record<number, boolean> | null>(null);

  const norm = (s: string) => s.trim().toLowerCase().replace(/[?.!,]+$/g, "").replace(/\s+/g, " ");

  const checkQ = () => {
    const r: Record<number, boolean> = {};
    productQs.forEach((q) => { r[q.id] = norm(qAns[q.id] || "") === norm(q.answer); });
    setQRes(r);
  };
  const checkM = () => {
    const r: Record<number, boolean> = {};
    matches.forEach((m) => { r[m.id] = mAns[m.id] === m.answer; });
    setMRes(r);
  };
  const checkC = () => {
    const r: Record<number, boolean> = {};
    classify.forEach((c) => { r[c.id] = cAns[c.id] === c.answer; });
    setCRes(r);
  };

  return (
    <div className="space-y-8">
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-2 font-merriweather text-foreground">Asking Questions About a Product</h3>
          <div className="rounded-lg border border-border bg-muted/30 p-4 mb-4">
            <p className="font-semibold text-foreground">The Talking Kitchen Scale</p>
            <p className="text-sm text-foreground">Helps you weigh food for those special recipes or diets. A wonderful weighing machine for people with low vision.</p>
          </div>
          <p className="text-muted-foreground mb-4">
            <strong>1</strong> Look at the product. It is the first thing Tessa shows Susie and Jack. Discuss with a partner what they might want to know before buying it for their chain of stores.
          </p>
          <p className="text-muted-foreground mb-4"><strong>2</strong> Complete the questions for these answers.</p>

          <div className="space-y-5">
            {productQs.map((q) => (
              <div key={q.id} className="space-y-1">
                <div className="flex flex-wrap items-center gap-2 text-foreground">
                  <span className="font-semibold">{q.id}</span>
                  <span>{q.before}</span>
                  <Input
                    value={qAns[q.id] || ""}
                    onChange={(e) => setQAns((p) => ({ ...p, [q.id]: e.target.value }))}
                    className={`w-56 ${qRes?.[q.id] === true ? "border-green-500 bg-green-50" : qRes?.[q.id] === false ? "border-red-500 bg-red-50" : ""}`}
                    placeholder="..."
                  />
                  <span>{q.after}</span>
                  {qRes && (qRes[q.id] ? <CheckCircle2 className="h-4 w-4 text-green-600" /> : <XCircle className="h-4 w-4 text-red-500" />)}
                </div>
                {qRes && qRes[q.id] === false && <p className="text-sm text-red-600 ml-6">Answer: {q.answer}</p>}
                <p className="text-sm text-muted-foreground italic ml-6">— {answerFor(q.id)}</p>
              </div>
            ))}
          </div>

          <Button onClick={checkQ} className="mt-6 bg-brand-royal hover:bg-brand-navy">Check Answers</Button>

          <div className="mt-6">
            <p className="text-sm text-muted-foreground mb-2">Listen to Tessa, Susie and Jack discussing it to check your answers.</p>
            <audio controls src={AUDIO_URL} className="w-full" />
          </div>
        </CardContent>
      </Card>

      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2 font-merriweather text-foreground">Exercise 4 — Characteristics or terms?</h3>
          <p className="text-muted-foreground mb-4">Look at the questions in Exercise 2. Decide whether each refers to <strong>characteristics/technical specifications</strong> of the product, or to <strong>terms and conditions</strong>.</p>
          <div className="space-y-3">
            {classify.map((c) => (
              <div key={c.id} className="flex items-center gap-3 flex-wrap">
                <span className="font-semibold w-6">{c.id}</span>
                <span className="text-foreground flex-1 min-w-[200px]">{c.q}</span>
                <Select value={cAns[c.id] || ""} onValueChange={(v) => setCAns((p) => ({ ...p, [c.id]: v }))}>
                  <SelectTrigger className="w-44"><SelectValue placeholder="Choose..." /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="characteristic">Characteristic</SelectItem>
                    <SelectItem value="terms">Terms &amp; conditions</SelectItem>
                  </SelectContent>
                </Select>
                {cRes && (cRes[c.id] ? <CheckCircle2 className="h-4 w-4 text-green-600" /> : <XCircle className="h-4 w-4 text-red-500" />)}
              </div>
            ))}
          </div>
          <Button onClick={checkC} className="mt-4 bg-brand-royal hover:bg-brand-navy">Check Answers</Button>
        </CardContent>
      </Card>

      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2 font-merriweather text-foreground">Exercise 5 — Match the words with their definitions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              {matches.map((m) => (
                <div key={m.id} className="flex items-center gap-3">
                  <span className="font-semibold w-6">{m.id}</span>
                  <span className="font-bold text-brand-royal w-44">{m.word}</span>
                  <Select value={mAns[m.id] || ""} onValueChange={(v) => setMAns((p) => ({ ...p, [m.id]: v }))}>
                    <SelectTrigger className={`w-20 ${mRes?.[m.id] === true ? "border-green-500 bg-green-50" : mRes?.[m.id] === false ? "border-red-500 bg-red-50" : ""}`}><SelectValue placeholder="?" /></SelectTrigger>
                    <SelectContent>
                      {defs.map((d) => <SelectItem key={d.letter} value={d.letter}>{d.letter}</SelectItem>)}
                    </SelectContent>
                  </Select>
                  {mRes && mRes[m.id] === false && <span className="text-xs text-red-600">({m.answer})</span>}
                </div>
              ))}
            </div>
            <div className="bg-muted/40 rounded-lg p-4 space-y-2">
              {defs.map((d) => (
                <p key={d.letter} className="text-foreground text-sm"><span className="font-bold text-brand-royal mr-2">{d.letter}</span>{d.text}</p>
              ))}
            </div>
          </div>
          <Button onClick={checkM} className="mt-4 bg-brand-royal hover:bg-brand-navy">Check Answers</Button>
        </CardContent>
      </Card>

      <Card className="service-card">
        <CardContent className="p-6">
          <Accordion type="single" collapsible>
            <AccordionItem value="script">
              <AccordionTrigger className="text-lg font-semibold font-merriweather text-foreground">Audio Script</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 text-foreground leading-relaxed">
                  <p><strong>Jack:</strong> Is it easy to keep clean?</p>
                  <p><strong>Tessa:</strong> To wash it, you just pop the bowl in the dishwasher, and the rest can be cleaned with a damp cloth.</p>
                  <p><strong>Susie:</strong> Not very heavy, is it? How much does it weigh?</p>
                  <p><strong>Tessa:</strong> No, it's very light. It weighs less than half a kilo.</p>
                  <p><strong>Jack:</strong> Great! Now, if we stocked this product, how much would we be able to sell it for, Susie?</p>
                  <p><strong>Tessa:</strong> I think it would retail at around €149.</p>
                  <p><strong>Susie:</strong> OK, and what price would you supply it to us at?</p>
                  <p><strong>Tessa:</strong> At €100, so you've got a 50% mark-up.</p>
                  <p><strong>Jack:</strong> How quickly could you get them to us if they were selling well?</p>
                  <p><strong>Tessa:</strong> We could get them to you pretty quickly. Within the week, if necessary.</p>
                  <p><strong>Susie:</strong> One more question. Does it come supplied with a battery, or do customers have to pay extra for that?</p>
                  <p><strong>Tessa:</strong> No, it comes with the battery included.</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      <Card className="service-card">
        <CardContent className="p-6">
          <Accordion type="single" collapsible>
            <AccordionItem value="role" className="border-none">
              <AccordionTrigger className="text-2xl font-semibold font-merriweather text-foreground hover:no-underline">🎭 Role-play cards (Situations 1 & 2)</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 text-foreground">
                  <div className="rounded-lg border border-border bg-muted/30 p-4">
                    <p className="font-semibold mb-1">Situation 1 — CorkPops™ Bottle Opener</p>
                    <p className="text-sm">Insert a long needle through the cork, press a button… POP! One cartridge can open <strong>60–80</strong> bottles. Wholesale price: <strong>€12</strong>. Recommended retail price: <strong>€19.99</strong>. Availability: <strong>immediately</strong>.</p>
                  </div>
                  <div className="rounded-lg border border-border bg-muted/30 p-4">
                    <p className="font-semibold mb-1">Situation 2 — Speedy Peel Battery Operated Peeler</p>
                    <p className="text-sm">Length: <strong>21 cm</strong>. Blade can be cleaned <strong>in the dishwasher</strong>. Weighs: <strong>85 g</strong>. Requires <strong>2 AA</strong> batteries (not included). Wholesale price: <strong>€6</strong>. Retail price: <strong>€9.95</strong>.</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

const replies: Record<number, string> = {
  1: "To wash it, you just pop the bowl in the dishwasher, and the rest can be cleaned with a damp cloth.",
  2: "No, it's very light. It weighs less than half a kilo.",
  3: "I think it would retail at around €149.",
  4: "At €100, so you've got a 50% mark-up.",
  5: "We could get them to you pretty quickly. Within the week, if necessary.",
  6: "No, it comes with the battery included.",
};
const answerFor = (id: number) => replies[id];

export default ReadingUnit8;
