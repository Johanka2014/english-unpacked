import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, XCircle } from "lucide-react";

// Match clauses (1-7) with endings (a-g)
const halves = [
  { id: 1, first: "If the products sell like hot cakes,", answer: "e", end: "we'll place a repeat order quickly." },
  { id: 2, first: "I won't place a repeat order unless", answer: "g", end: "you give us at least a 5% bulk discount." },
  { id: 3, first: "You can have the product on sale or return if", answer: "b", end: "you order more than 1,000 units." },
  { id: 4, first: "Unless we can have a 100% mark-up,", answer: "c", end: "we won't be able to cover our overheads." },
  { id: 5, first: "We won't be able to deliver immediately if", answer: "f", end: "you order such a large quantity." },
  { id: 6, first: "If you pay within 30 days,", answer: "d", end: "we'll give you a further 2.5% discount." },
  { id: 7, first: "Provided that you give us exclusivity,", answer: "a", end: "we'll supply you at this special price." },
];

// PDF matching exercise (book version)
const pdfHalves = [
  { id: 1, first: "If you buy more than 1,000 units,", answer: "e", end: "we could manage a larger discount." },
  { id: 2, first: "Unless you're late paying,", answer: "g", end: "we'll continue supplying you at regular intervals." },
  { id: 3, first: "We'll arrange for extra-fast delivery", answer: "b", end: "on condition that you pay the transportation costs involved." },
  { id: 4, first: "I might place a very large order", answer: "c", end: "provided we can reach agreement on price." },
  { id: 5, first: "As long as your products meet international hygiene standards,", answer: "f", end: "we should have no difficulty in selling them." },
  { id: 6, first: "We'll be happy to pay in euros", answer: "d", end: "unless the exchange rate changes drastically." },
  { id: 7, first: "We'll sell your products on condition that", answer: "a", end: "you make us exclusive agents for this region." },
];

// -ing or infinitive exercise
const ingItems: { id: number; parts: { text?: string; gap?: { id: string; verb: string; answer: string } }[] }[] = [
  { id: 1, parts: [
    { text: "My company doesn't spend enough money on " },
    { gap: { id: "1a", verb: "train", answer: "training" } },
    { text: " staff." },
  ]},
  { id: 2, parts: [
    { text: "My job involves " },
    { gap: { id: "2a", verb: "deal", answer: "dealing" } },
    { text: " with money." },
  ]},
  { id: 3, parts: [
    { text: "I would be happy " },
    { gap: { id: "3a", verb: "get", answer: "to get" } },
    { text: " a more responsible job." },
  ]},
  { id: 4, parts: [
    { gap: { id: "4a", verb: "advertise", answer: "Advertising" } },
    { text: " on television is too expensive for my company " },
    { gap: { id: "4b", verb: "invest", answer: "to invest" } },
    { text: " in." },
  ]},
  { id: 5, parts: [
    { text: "It's not worth " },
    { gap: { id: "5a", verb: "develop", answer: "developing" } },
    { text: " a new product unless you know who your target customers are likely " },
    { gap: { id: "5b", verb: "be", answer: "to be" } },
    { text: "." },
  ]},
  { id: 6, parts: [
    { text: "I wouldn't risk " },
    { gap: { id: "6a", verb: "leave", answer: "leaving" } },
    { text: " my job " },
    { gap: { id: "6b", verb: "start", answer: "to start" } },
    { text: " up a business on my own." },
  ]},
  { id: 7, parts: [
    { text: "If a member of my family had a good business idea, I would help them " },
    { gap: { id: "7a", verb: "develop", answer: "develop" } },
    { text: " it by " },
    { gap: { id: "7b", verb: "lend", answer: "lending" } },
    { text: " them money." },
  ]},
  { id: 8, parts: [
    { gap: { id: "8a", verb: "study", answer: "Studying" } },
    { text: " for a business degree is essential if you want " },
    { gap: { id: "8b", verb: "be", answer: "to be" } },
    { text: " successful in business." },
  ]},
];

const verbItems: { id: number; before: string; v1: string; ans1: string; mid: string; v2: string; ans2: string; after: string }[] = [
  { id: 1, before: "I ", v1: "give", ans1: "will give", mid: " you a 15% discount on condition that you ", v2: "pay", ans2: "pay", after: " within 30 days." },
  { id: 2, before: "We ", v1: "not be", ans1: "won't be", mid: " able to stay in business unless he ", v2: "pay", ans2: "pays", after: " in cash." },
  { id: 3, before: "We ", v1: "place", ans1: "will place", mid: " an order for 50,000 units, providing you ", v2: "can get", ans2: "can get", after: " them to us in time for the Christmas season." },
  { id: 4, before: "As long as you ", v1: "guarantee", ans1: "guarantee", mid: " that we are your sole supplier, we ", v2: "allow", ans2: "will allow", after: " you to have the goods at a special price." },
  { id: 5, before: "Unless you ", v1: "pay", ans1: "pay", mid: " the full price, we ", v2: "not manage", ans2: "won't manage", after: " to cover our overheads." },
];

const completeStarters = [
  { id: 1, prompt: "If the products sell like hot cakes," },
  { id: 2, prompt: "I won't place a repeat order unless" },
  { id: 3, prompt: "You can have the product on sale or return if" },
  { id: 4, prompt: "Unless we can have a 100% mark-up," },
  { id: 5, prompt: "We won't be able to cover our overheads if" },
];

const GrammarUnit8 = () => {
  const [hAns, setHAns] = useState<Record<number, string>>({});
  const [hRes, setHRes] = useState<Record<number, boolean> | null>(null);
  const [vAns, setVAns] = useState<Record<string, string>>({});
  const [vRes, setVRes] = useState<Record<string, boolean> | null>(null);
  const [free, setFree] = useState<Record<number, string>>({});
  const [pdfHAns, setPdfHAns] = useState<Record<number, string>>({});
  const [pdfHRes, setPdfHRes] = useState<Record<number, boolean> | null>(null);
  const [ingAns, setIngAns] = useState<Record<string, string>>({});
  const [ingRes, setIngRes] = useState<Record<string, boolean> | null>(null);

  const norm = (s: string) => s.trim().toLowerCase().replace(/[?.!,]+$/g, "").replace(/\s+/g, " ");
  const checkH = () => {
    const r: Record<number, boolean> = {};
    halves.forEach((h) => { r[h.id] = hAns[h.id] === h.answer; });
    setHRes(r);
  };
  const checkPdfH = () => {
    const r: Record<number, boolean> = {};
    pdfHalves.forEach((h) => { r[h.id] = pdfHAns[h.id] === h.answer; });
    setPdfHRes(r);
  };
  const checkIng = () => {
    const r: Record<string, boolean> = {};
    ingItems.forEach((it) => {
      it.parts.forEach((p) => {
        if (p.gap) r[p.gap.id] = norm(ingAns[p.gap.id] || "") === norm(p.gap.answer);
      });
    });
    setIngRes(r);
  };
  const checkV = () => {
    const r: Record<string, boolean> = {};
    verbItems.forEach((it) => {
      r[`${it.id}a`] = norm(vAns[`${it.id}a`] || "") === norm(it.ans1);
      r[`${it.id}b`] = norm(vAns[`${it.id}b`] || "") === norm(it.ans2);
    });
    setVRes(r);
  };

  return (
    <div className="space-y-8">
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-2 font-merriweather text-foreground">Grammar Workshop — The First Conditional</h3>
          <div className="rounded-lg border border-border bg-muted/30 p-4 mb-4 text-foreground">
            <p className="mb-2"><strong>Form:</strong> <em>If</em> + present simple, <em>will</em>/<em>won't</em> + infinitive.</p>
            <p className="mb-2"><strong>Use:</strong> to talk about a future situation that we think is real or likely.</p>
            <p className="text-sm italic">Example: <em>If we buy the scales at €100 each, our mark-up won't allow us to make a decent profit.</em></p>
            <p className="text-sm mt-2"><strong>Other linking words:</strong> <em>unless</em> (= if not), <em>provided/providing that</em>, <em>as long as</em>, <em>on condition that</em>.</p>
          </div>
        </CardContent>
      </Card>

      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2 font-merriweather text-foreground">Exercise 1 — Match the halves</h3>
          <p className="text-muted-foreground mb-4">Match each sentence beginning (1–7) with the most suitable ending (a–g).</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              {halves.map((h) => (
                <div key={h.id} className="flex items-start gap-3">
                  <span className="font-semibold w-6 mt-2">{h.id}</span>
                  <span className="flex-1 text-foreground">{h.first}</span>
                  <Select value={hAns[h.id] || ""} onValueChange={(v) => setHAns((p) => ({ ...p, [h.id]: v }))}>
                    <SelectTrigger className={`w-20 ${hRes?.[h.id] === true ? "border-green-500 bg-green-50" : hRes?.[h.id] === false ? "border-red-500 bg-red-50" : ""}`}><SelectValue placeholder="?" /></SelectTrigger>
                    <SelectContent>
                      {["a","b","c","d","e","f","g"].map((l) => <SelectItem key={l} value={l}>{l}</SelectItem>)}
                    </SelectContent>
                  </Select>
                  {hRes && hRes[h.id] === false && <span className="text-xs text-red-600 mt-2">({h.answer})</span>}
                </div>
              ))}
            </div>
            <div className="bg-muted/40 rounded-lg p-4 space-y-2">
              {halves.map((h) => (
                <p key={h.id} className="text-foreground text-sm"><span className="font-bold text-brand-royal mr-2">{h.answer}</span>{h.end}</p>
              ))}
            </div>
          </div>
          <Button onClick={checkH} className="mt-4 bg-brand-royal hover:bg-brand-navy">Check Answers</Button>
        </CardContent>
      </Card>

      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2 font-merriweather text-foreground">Exercise 2 — Put the verbs in the correct tense</h3>
          <p className="text-muted-foreground mb-4">Form first-conditional sentences. Use contractions (e.g. <em>won't</em>, <em>I'll</em>) where natural.</p>
          <div className="space-y-4">
            {verbItems.map((it) => (
              <div key={it.id} className="text-foreground leading-relaxed">
                <span className="font-semibold mr-2">{it.id}</span>
                {it.before}
                <Gap id={`${it.id}a`} verb={it.v1} ans={vAns} setAns={setVAns} res={vRes} correct={it.ans1} />
                {it.mid}
                <Gap id={`${it.id}b`} verb={it.v2} ans={vAns} setAns={setVAns} res={vRes} correct={it.ans2} />
                {it.after}
              </div>
            ))}
          </div>
          <Button onClick={checkV} className="mt-4 bg-brand-royal hover:bg-brand-navy">Check Answers</Button>
        </CardContent>
      </Card>

      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2 font-merriweather text-foreground">Exercise 3 — Complete in any way you like</h3>
          <p className="text-muted-foreground mb-4">There are no fixed answers — just produce a grammatically correct first conditional.</p>
          <div className="space-y-3">
            {completeStarters.map((c) => (
              <div key={c.id} className="flex flex-wrap items-center gap-2">
                <span className="font-semibold w-6">{c.id}</span>
                <span className="text-foreground italic">{c.prompt}</span>
                <Input value={free[c.id] || ""} onChange={(e) => setFree((p) => ({ ...p, [c.id]: e.target.value }))} className="flex-1 min-w-[220px]" placeholder="Complete the sentence..." />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-2 font-merriweather text-foreground">-ing Forms and Infinitives</h3>
          <div className="rounded-lg border border-border bg-muted/30 p-4 mb-4 text-foreground space-y-3 text-sm">
            <div>
              <p className="font-semibold mb-1">Use infinitives:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>to express purpose: <em>He borrowed money <u>to start</u> his own business.</em></li>
                <li>after adjectives: <em>It's <u>great</u> to talk to you.</em></li>
                <li>after <em>too</em> and <em>enough</em>: <em>He's <u>too busy</u> to speak to you at the moment.</em></li>
                <li>after certain verbs: <em>agree, appear, arrange, ask, decide, demand, expect, fail, help, hope, intend, manage, offer, plan, promise, refuse, threaten, want</em>.<br/><em>I've <u>arranged</u> to meet the marketing manager at 11 o'clock.</em></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-1">Use -ing forms:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>after prepositions: <em>How about <u>running</u> a new advertising campaign?</em></li>
                <li>as subjects or objects of a verb: <em><u>Borrowing</u> money can be risky.</em></li>
                <li>after certain verbs: <em>admit, avoid, consider, delay, deny, enjoy, finish, involve, mind, postpone, risk, suggest</em>.</li>
                <li>after expressions: <em>it's no good, it's not worth, it's no use, it's a waste of time</em>.</li>
              </ul>
            </div>
          </div>

          <h4 className="text-lg font-semibold mb-2 font-merriweather text-foreground">Exercise — Put the verbs in the correct form</h4>
          <p className="text-muted-foreground mb-4 text-sm">Use the <em>-ing</em> form or the infinitive (with or without <em>to</em>).</p>
          <div className="space-y-4">
            {ingItems.map((it) => (
              <div key={it.id} className="text-foreground leading-relaxed">
                <span className="font-semibold mr-2">{it.id}</span>
                {it.parts.map((p, idx) => p.text ? <span key={idx}>{p.text}</span> : (
                  <Gap key={idx} id={p.gap!.id} verb={p.gap!.verb} ans={ingAns} setAns={setIngAns} res={ingRes} correct={p.gap!.answer} />
                ))}
              </div>
            ))}
          </div>
          <Button onClick={checkIng} className="mt-4 bg-brand-royal hover:bg-brand-navy">Check Answers</Button>
        </CardContent>
      </Card>

      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2 font-merriweather text-foreground">Extra Practice — Match the halves (book version)</h3>
          <p className="text-muted-foreground mb-4">Make complete first-conditional sentences by matching (1–7) with (a–g).</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              {pdfHalves.map((h) => (
                <div key={h.id} className="flex items-start gap-3">
                  <span className="font-semibold w-6 mt-2">{h.id}</span>
                  <span className="flex-1 text-foreground">{h.first}</span>
                  <Select value={pdfHAns[h.id] || ""} onValueChange={(v) => setPdfHAns((p) => ({ ...p, [h.id]: v }))}>
                    <SelectTrigger className={`w-20 ${pdfHRes?.[h.id] === true ? "border-green-500 bg-green-50" : pdfHRes?.[h.id] === false ? "border-red-500 bg-red-50" : ""}`}><SelectValue placeholder="?" /></SelectTrigger>
                    <SelectContent>
                      {["a","b","c","d","e","f","g"].map((l) => <SelectItem key={l} value={l}>{l}</SelectItem>)}
                    </SelectContent>
                  </Select>
                  {pdfHRes && pdfHRes[h.id] === false && <span className="text-xs text-red-600 mt-2">({h.answer})</span>}
                </div>
              ))}
            </div>
            <div className="bg-muted/40 rounded-lg p-4 space-y-2">
              {pdfHalves.map((h) => (
                <p key={h.id} className="text-foreground text-sm"><span className="font-bold text-brand-royal mr-2">{h.answer}</span>{h.end}</p>
              ))}
            </div>
          </div>
          <Button onClick={checkPdfH} className="mt-4 bg-brand-royal hover:bg-brand-navy">Check Answers</Button>
        </CardContent>
      </Card>
    </div>
  );
};

const Gap = ({ id, verb, ans, setAns, res, correct }: { id: string; verb: string; ans: Record<string, string>; setAns: React.Dispatch<React.SetStateAction<Record<string, string>>>; res: Record<string, boolean> | null; correct: string }) => {
  const ok = res?.[id];
  return (
    <span className="inline-flex items-center gap-1 mx-1 align-middle">
      <Input value={ans[id] || ""} onChange={(e) => setAns((p) => ({ ...p, [id]: e.target.value }))} className={`inline-block w-36 h-8 ${ok === true ? "border-green-500 bg-green-50" : ok === false ? "border-red-500 bg-red-50" : ""}`} placeholder={`(${verb})`} />
      {ok === true && <CheckCircle2 className="h-4 w-4 text-green-600" />}
      {ok === false && <span className="text-xs text-red-600">({correct})</span>}
    </span>
  );
};

export default GrammarUnit8;
