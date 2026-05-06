import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, XCircle } from "lucide-react";

const formalChoices = [
  { id: 1, opts: ["I'm", "I am"], answer: "I am" },
  { id: 2, opts: ["to apply", "in application"], answer: "in application" },
  { id: 3, opts: ["post", "job"], answer: "post" },
  { id: 4, opts: ["curriculum vitae", "CV"], answer: "curriculum vitae" },
  { id: 5, opts: ["present job", "current position"], answer: "current position" },
  { id: 6, opts: ["working", "practical"], answer: "practical" },
  { id: 7, opts: ["held", "worked"], answer: "held" },
  { id: 8, opts: ["a lot", "extensively"], answer: "extensively" },
  { id: 9, opts: ["going on", "attending"], answer: "attending" },
  { id: 10, opts: ["attended", "gone on"], answer: "attended" },
  { id: 11, opts: ["I am", "I'm"], answer: "I am" },
  { id: 12, opts: ["represent", "be"], answer: "represent" },
  { id: 13, opts: ["looking for", "seeking"], answer: "seeking" },
  { id: 14, opts: ["have the experience of managing regional sales", "be a regional sales manager"], answer: "have the experience of managing regional sales" },
  { id: 15, opts: ["curriculum vitae", "CV"], answer: "curriculum vitae" },
  { id: 16, opts: ["ready to come to an", "available for"], answer: "available for" },
  { id: 17, opts: ["employers", "boss"], answer: "employers" },
  { id: 18, opts: ["give", "supply"], answer: "supply" },
  { id: 19, opts: ["look forward", "am looking forward"], answer: "look forward" },
];

// Map paragraph for ex2
const paragraphMap = [
  { item: "The reason for writing the letter", para: "a" },
  { item: "Where she saw the advertisement", para: "a" },
  { item: "A summary of relevant work experience", para: "b" },
  { item: "Details of her academic background", para: "b" },
  { item: "Her CV", para: "b" },
  { item: "The job training she has received", para: "c" },
  { item: "Reasons for applying for this job", para: "d" },
  { item: "Her availability for interview", para: "e" },
  { item: "References from her employers", para: "e" },
];

const Gap = ({ id, value, onChange, opts, correct }: any) => (
  <span className="inline-flex items-center gap-1">
    <Select value={value || ""} onValueChange={onChange}>
      <SelectTrigger className={`inline-flex h-8 min-w-[120px] w-auto px-2 ${correct === true ? "border-green-500 bg-green-50" : correct === false ? "border-red-500 bg-red-50" : ""}`}>
        <SelectValue placeholder={`(${id})`} />
      </SelectTrigger>
      <SelectContent>
        {opts.map((o: string) => <SelectItem key={o} value={o}>{o}</SelectItem>)}
      </SelectContent>
    </Select>
  </span>
);

const WritingEmailUnit3 = () => {
  const [ans, setAns] = useState<Record<number, string>>({});
  const [res, setRes] = useState<Record<number, boolean | null>>({});
  const [paraAns, setParaAns] = useState<Record<number, string>>({});
  const [paraRes, setParaRes] = useState<Record<number, boolean | null>>({});

  const get = (id: number) => formalChoices.find((c) => c.id === id)!;

  const check = () => {
    const r: Record<number, boolean> = {};
    formalChoices.forEach((c) => { r[c.id] = ans[c.id] === c.answer; });
    setRes(r);
  };
  const checkPara = () => {
    const r: Record<number, boolean> = {};
    paragraphMap.forEach((p, i) => { r[i] = paraAns[i] === p.para; });
    setParaRes(r);
  };

  const renderGap = (id: number) => {
    const c = get(id);
    return <Gap id={id} value={ans[id]} opts={c.opts} correct={res[id]} onChange={(v: string) => setAns((p) => ({ ...p, [id]: v }))} />;
  };

  const icon = (v: boolean | null | undefined) => v == null ? null : (v ? <CheckCircle className="inline h-5 w-5 text-green-600 ml-1" /> : <XCircle className="inline h-5 w-5 text-red-600 ml-1" />);

  return (
    <div className="space-y-8">
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-3 font-merriweather text-foreground">An email of application</h3>
          <p className="text-muted-foreground mb-4"><strong>1</strong> Emails are often less formal than letters. However, when applying for a job, your application should normally be formal, whichever way you send it. Read the email below and choose the more formal phrase from each pair.</p>

          <div className="bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800 rounded-lg p-4 mb-6">
            <p className="font-semibold text-foreground mb-2">Useful language — Informal vs Formal</p>
            <ul className="text-sm text-foreground space-y-1">
              <li>• Contractions → No contractions</li>
              <li>• Short / common words → Longer / less common words</li>
              <li>• Phrasal verbs → Other types of verb</li>
              <li>• Verbs → Preposition + noun (e.g. <em>I'm looking forward</em> → <em>I look forward</em>)</li>
              <li>• Abbreviations (e.g. <em>Sept.</em>) → No abbreviations (e.g. <em>September</em>)</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="service-card">
        <CardContent className="p-6 space-y-4 text-foreground leading-loose">
          <p>Dear Sir or Madam,</p>
          <p><strong>(a)</strong> {renderGap(1)} writing {renderGap(2)} for the {renderGap(3)} of North-Western Area Sales Manager, as currently advertised on your website.</p>
          <p><strong>(b)</strong> As you will see from my attached {renderGap(4)}, I am a 28-year-old graduate in Business and Marketing from Hamburg University, with five years of experience in marketing and sales with Audi AG based in Bremen. My {renderGap(5)} is Assistant Sales Manager for the Bremen and Niedersachsen region.</p>
          <p><strong>(c)</strong> Since leaving university, apart from {renderGap(6)} experience in the various posts I have {renderGap(7)} in, I have studied {renderGap(8)} at night school, {renderGap(9)} courses in Negotiating Skills, Personnel Management and Marketing. I have also {renderGap(10)} various internal courses in the same areas in the companies I have worked for.</p>
          <p><strong>(d)</strong> {renderGap(11)} interested in the post advertised because it seems to me to {renderGap(12)} the type of opportunity I am {renderGap(13)}: to move into a large international producer of consumer products and to {renderGap(14)} myself.</p>
          <p><strong>(e)</strong> I hope my application and my {renderGap(15)} will be of interest to you. I am {renderGap(16)} interview at any time, and my present {renderGap(17)} would be happy to {renderGap(18)} a reference.</p>
          <p><strong>(f)</strong> I {renderGap(19)} to hearing from you.</p>
          <p>Yours faithfully,<br />Christa Schmidt</p>
          <Button onClick={check} className="mt-4 bg-brand-royal hover:bg-brand-navy">Check Answers</Button>
        </CardContent>
      </Card>

      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2 font-merriweather text-foreground">Exercise 2 — Match the items to the paragraphs</h3>
          <p className="text-muted-foreground mb-4">Read the email again and say in which paragraph (a–f) Christa mentions each of these things.</p>
          <div className="space-y-2">
            {paragraphMap.map((p, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="flex-1 text-foreground">{p.item}</span>
                <Select value={paraAns[i] || ""} onValueChange={(v) => setParaAns((prev) => ({ ...prev, [i]: v }))}>
                  <SelectTrigger className={`w-20 ${paraRes[i] === true ? "border-green-500 bg-green-50" : paraRes[i] === false ? "border-red-500 bg-red-50" : ""}`}>
                    <SelectValue placeholder="?" />
                  </SelectTrigger>
                  <SelectContent>
                    {["a","b","c","d","e","f"].map((l) => <SelectItem key={l} value={l}>{l}</SelectItem>)}
                  </SelectContent>
                </Select>
                {icon(paraRes[i])}
                {paraRes[i] === false && <span className="text-sm text-red-600">({p.para})</span>}
              </div>
            ))}
          </div>
          <Button onClick={checkPara} className="mt-4 bg-brand-royal hover:bg-brand-navy">Check Answers</Button>
        </CardContent>
      </Card>

      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2 font-merriweather text-foreground">Exercise 3 — Discuss</h3>
          <ul className="list-disc list-inside text-foreground space-y-1">
            <li>Is there anything extra you would put in an email/letter of application?</li>
            <li>Is there anything you would leave out?</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2 font-merriweather text-foreground">Exercise 4 — Write your own email of application</h3>
          <p className="text-muted-foreground mb-4">Write an email of application for the next job you would like to do. Follow the structure of the email above, but change the details to reflect your situation and background.</p>
          <Textarea placeholder="Dear Sir or Madam, ..." className="min-h-[260px]" />
        </CardContent>
      </Card>
    </div>
  );
};

export default WritingEmailUnit3;
