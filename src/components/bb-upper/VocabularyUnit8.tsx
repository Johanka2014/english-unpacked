import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { CheckCircle2, XCircle } from "lucide-react";

const items = [
  { id: 1, text: "€19.95 on each item if you place an order now", answer: "discount" },
  { id: 2, text: "at sight", answer: "payment" },
  { id: 3, text: "5% on bulk orders", answer: "discount" },
  { id: 4, text: "30 days", answer: "payment" },
  { id: 5, text: "7.5% on 100 or more", answer: "discount" },
  { id: 6, text: "by courier within two weeks of receiving the order", answer: "delivery" },
  { id: 7, text: "$2 if you order within one week", answer: "discount" },
  { id: 8, text: "90 days", answer: "payment" },
  { id: 9, text: "dispatched immediately", answer: "delivery" },
];

const figs = [
  { id: 1, q: "535", a: "B", options: ["A — five hundred thirty-five", "B — five hundred and thirty-five"] },
  { id: 2, q: "233,499", a: "B", options: ["A — two hundred, thirty-three thousand, four hundred, ninety-nine", "B — two hundred and thirty-three thousand, four hundred and ninety-nine"] },
  { id: 3, q: "2.5", a: "A", options: ["A — two point five", "B — two and five"] },
  { id: 4, q: "10.25", a: "B", options: ["A — ten point twenty-five", "B — ten point two five"] },
  { id: 5, q: "50%", a: "B", options: ["A — a fifty per cent", "B — fifty per cent"] },
  { id: 6, q: "£3.50", a: "A", options: ["A — three pounds fifty", "B — three fifty pounds"] },
  { id: 7, q: "€19.99", a: "A", options: ["A — nineteen euros ninety-nine", "B — nineteen euros and ninety-nine"] },
  { id: 8, q: "€45,000 p.a.", a: "A", options: ["A — forty-five thousand euros a year", "B — forty and five thousand euros per year"] },
];

const paragraphWords = ["overheads", "profit margin", "bulk orders", "discount", "reduction", "mark-up", "recommended retail price"];
const paraGaps: Record<number, string> = {
  1: "overheads", 2: "profit margin", 3: "bulk orders", 4: "discount", 5: "reduction", 6: "mark-up", 7: "recommended retail price",
};

const VocabularyUnit8 = () => {
  const [ans, setAns] = useState<Record<number, string>>({});
  const [res, setRes] = useState<Record<number, boolean> | null>(null);
  const [figAns, setFigAns] = useState<Record<number, string>>({});
  const [figRes, setFigRes] = useState<Record<number, boolean> | null>(null);
  const [paraAns, setParaAns] = useState<Record<number, string>>({});
  const [paraRes, setParaRes] = useState<Record<number, boolean> | null>(null);

  const check = () => {
    const r: Record<number, boolean> = {};
    items.forEach((i) => { r[i.id] = ans[i.id] === i.answer; });
    setRes(r);
  };
  const checkFig = () => {
    const r: Record<number, boolean> = {};
    figs.forEach((f) => { r[f.id] = figAns[f.id] === f.a; });
    setFigRes(r);
  };
  const checkPara = () => {
    const r: Record<number, boolean> = {};
    Object.entries(paraGaps).forEach(([k, v]) => {
      const id = Number(k);
      r[id] = (paraAns[id] || "").trim().toLowerCase() === v.toLowerCase();
    });
    setParaRes(r);
  };

  return (
    <div className="space-y-8">
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-2 font-merriweather text-foreground">Terms and Conditions</h3>
          <p className="text-muted-foreground mb-4">Say which category each term and condition belongs to: <strong>Discount</strong>, <strong>Payment terms</strong> or <strong>Delivery date</strong>.</p>
          <div className="space-y-2">
            {items.map((i) => (
              <div key={i.id} className="flex items-center gap-3 flex-wrap">
                <span className="font-semibold w-6">{i.id}</span>
                <span className="text-foreground flex-1 min-w-[220px]">{i.text}</span>
                <Select value={ans[i.id] || ""} onValueChange={(v) => setAns((p) => ({ ...p, [i.id]: v }))}>
                  <SelectTrigger className="w-44"><SelectValue placeholder="Choose..." /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="discount">Discount</SelectItem>
                    <SelectItem value="payment">Payment terms</SelectItem>
                    <SelectItem value="delivery">Delivery date</SelectItem>
                  </SelectContent>
                </Select>
                {res && (res[i.id] ? <CheckCircle2 className="h-4 w-4 text-green-600" /> : <XCircle className="h-4 w-4 text-red-500" />)}
                {res && !res[i.id] && <span className="text-xs text-red-600">({i.answer})</span>}
              </div>
            ))}
          </div>
          <Button onClick={check} className="mt-4 bg-brand-royal hover:bg-brand-navy">Check Answers</Button>

          <div className="mt-6 rounded-lg border border-border bg-muted/30 p-4 text-sm text-foreground">
            <p><strong>Better for the seller:</strong> at sight (paid immediately).</p>
            <p><strong>Better for the buyer:</strong> 90 days (more time to pay).</p>
          </div>
        </CardContent>
      </Card>

      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2 font-merriweather text-foreground">Saying figures</h3>
          <p className="text-muted-foreground mb-4">Choose the correct way of saying these figures.</p>
          <div className="space-y-3">
            {figs.map((f) => (
              <div key={f.id} className="flex items-start gap-3 flex-wrap">
                <span className="font-semibold w-6">{f.id}</span>
                <span className="font-bold text-brand-royal w-32">{f.q}</span>
                <Select value={figAns[f.id] || ""} onValueChange={(v) => setFigAns((p) => ({ ...p, [f.id]: v }))}>
                  <SelectTrigger className="flex-1 min-w-[260px]"><SelectValue placeholder="Choose..." /></SelectTrigger>
                  <SelectContent>
                    {f.options.map((o, idx) => <SelectItem key={idx} value={o.charAt(0)}>{o}</SelectItem>)}
                  </SelectContent>
                </Select>
                {figRes && (figRes[f.id] ? <CheckCircle2 className="h-4 w-4 text-green-600" /> : <span className="text-xs text-red-600">({f.a})</span>)}
              </div>
            ))}
          </div>
          <Button onClick={checkFig} className="mt-4 bg-brand-royal hover:bg-brand-navy">Check Answers</Button>
        </CardContent>
      </Card>

      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2 font-merriweather text-foreground">Vocabulary in context</h3>
          <p className="text-muted-foreground mb-2">Complete the paragraph with words from the box.</p>
          <div className="bg-muted/40 rounded-lg p-3 mb-4 text-sm text-foreground">
            <strong>Word box:</strong> {paragraphWords.join(" • ")}
          </div>
          <div className="text-foreground leading-relaxed">
            We are a small agricultural business which produces oranges for the export market. Our{" "}
            <ParaGap id={1} ans={paraAns} setAns={setParaAns} res={paraRes} />, or routine costs, such as water for irrigation or pesticides are pretty high. This means that when we sell our products, our{" "}
            <ParaGap id={2} ans={paraAns} setAns={setParaAns} res={paraRes} /> is very narrow. Also, we face a lot of competition, so when buyers place{" "}
            <ParaGap id={3} ans={paraAns} setAns={setParaAns} res={paraRes} />, they often expect a hefty{" "}
            <ParaGap id={4} ans={paraAns} setAns={setParaAns} res={paraRes} /> or{" "}
            <ParaGap id={5} ans={paraAns} setAns={setParaAns} res={paraRes} /> in price. Some years, there's no profit at all. On the other hand, when you go to the supermarket, you see that the same fruit has been given an enormous{" "}
            <ParaGap id={6} ans={paraAns} setAns={setParaAns} res={paraRes} /> — sometimes as much as 400% — and the{" "}
            <ParaGap id={7} ans={paraAns} setAns={setParaAns} res={paraRes} /> bears no relation to the price we were given when we sold the oranges.
          </div>
          <Button onClick={checkPara} className="mt-4 bg-brand-royal hover:bg-brand-navy">Check Answers</Button>
        </CardContent>
      </Card>
    </div>
  );
};

const ParaGap = ({ id, ans, setAns, res }: { id: number; ans: Record<number, string>; setAns: React.Dispatch<React.SetStateAction<Record<number, string>>>; res: Record<number, boolean> | null }) => {
  const correct = res?.[id];
  return (
    <span className="inline-flex items-center gap-1 mx-1 align-middle">
      <Input
        value={ans[id] || ""}
        onChange={(e) => setAns((p) => ({ ...p, [id]: e.target.value }))}
        className={`inline-block w-44 h-8 ${correct === true ? "border-green-500 bg-green-50" : correct === false ? "border-red-500 bg-red-50" : ""}`}
        placeholder={`${id}`}
      />
      {correct === false && <span className="text-xs text-red-600">({paraGaps[id]})</span>}
    </span>
  );
};

export default VocabularyUnit8;
