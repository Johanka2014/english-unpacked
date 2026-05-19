import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2, XCircle } from "lucide-react";

const items = [
  { id: 1, def: "people who buy a service or a magazine on a regular basis", para: 1, answer: ["subscribers"] },
  { id: 2, def: "visited a website", para: 1, answer: ["logged on", "logged on to", "logged"] },
  { id: 3, def: "a company with many different branches", para: 3, answer: ["chain"] },
  { id: 4, def: "member of staff", para: 3, answer: ["staffer"] },
  { id: 5, def: "paying a lot of attention to customers", para: 4, answer: ["attentive"] },
  { id: 6, def: "always being the same quality", para: 5, answer: ["consistency"] },
  { id: 7, def: "mentioned specially", para: 5, answer: ["singled out", "singled"] },
  { id: 8, def: "competitors", para: 6, answer: ["rivals"] },
  { id: 9, def: "changed slightly", para: 7, answer: ["tweaked"] },
  { id: 10, def: "the most important factor (in a decision)", para: 7, answer: ["the bottom line", "bottom line"] },
];

const VocabularyUnit13 = () => {
  const [ans, setAns] = useState<Record<number, string>>({});
  const [res, setRes] = useState<Record<number, boolean> | null>(null);

  const check = () => {
    const r: Record<number, boolean> = {};
    items.forEach((it) => {
      const v = (ans[it.id] || "").trim().toLowerCase();
      r[it.id] = it.answer.includes(v);
    });
    setRes(r);
  };

  return (
    <div className="space-y-6">
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-2 font-merriweather text-foreground">Vocabulary</h3>
          <p className="text-muted-foreground">Find words or phrases in the <em>Home Sweet Hotel</em> text which mean the following.</p>
        </CardContent>
      </Card>

      <div className="space-y-3">
        {items.map((it) => (
          <Card key={it.id} className="service-card">
            <CardContent className="p-4 flex items-center gap-3">
              <span className="font-bold text-brand-royal">{it.id}.</span>
              <p className="flex-1 text-foreground">{it.def} <span className="text-xs text-muted-foreground">(paragraph {it.para})</span></p>
              <Input
                value={ans[it.id] || ""}
                onChange={(e) => { setAns((p) => ({ ...p, [it.id]: e.target.value })); setRes(null); }}
                className={`w-44 ${res ? (res[it.id] ? "border-green-600" : "border-red-500") : ""}`}
              />
              {res && (res[it.id]
                ? <CheckCircle2 className="h-5 w-5 text-green-600" />
                : <XCircle className="h-5 w-5 text-red-500" />)}
            </CardContent>
            {res && !res[it.id] && (
              <p className="text-sm text-red-600 px-4 pb-3">Answer: {it.answer[0]}</p>
            )}
          </Card>
        ))}
      </div>

      <Button onClick={check} className="bg-brand-royal hover:bg-brand-navy">Check Answers</Button>
    </div>
  );
};

export default VocabularyUnit13;
