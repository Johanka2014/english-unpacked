import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, XCircle } from "lucide-react";

const gaps = [
  { id: 1, answer: ["we"] },
  { id: 2, answer: ["as", "was"] },
  { id: 3, answer: ["as"] },
  { id: 4, answer: ["most"] },
];

const chart1 = [
  { label: "Quality of the guest rooms", value: 39 },
  { label: "High-speed Internet access", value: 18 },
  { label: "The hotel staff", value: 17 },
];
const chart2 = [
  { label: "Marriott", value: 24 },
  { label: "Hilton", value: 12 },
  { label: "Westin", value: 7 },
];
const chart3 = [
  { label: "Very important", value: 41 },
  { label: "Quite important", value: 56 },
  { label: "Not important", value: 3 },
];

const Bar = ({ data, title }: { data: { label: string; value: number }[]; title: string }) => (
  <div className="space-y-3">
    <h4 className="font-semibold text-brand-royal">{title}</h4>
    {data.map((d) => (
      <div key={d.label} className="flex items-center gap-3">
        <span className="w-48 text-sm text-foreground shrink-0">{d.label}</span>
        <div className="flex-1 bg-muted rounded-full h-6 overflow-hidden">
          <div className="bg-brand-royal h-full flex items-center justify-end pr-2 text-white text-xs font-semibold" style={{ width: `${d.value}%` }}>{d.value}%</div>
        </div>
      </div>
    ))}
  </div>
);

const WritingUnit13 = () => {
  const [ans, setAns] = useState<Record<number, string>>({});
  const [res, setRes] = useState<Record<number, boolean> | null>(null);
  const [p2, setP2] = useState("");
  const [p3, setP3] = useState("");

  const check = () => {
    const r: Record<number, boolean> = {};
    gaps.forEach((g) => {
      const v = (ans[g.id] || "").trim().toLowerCase();
      r[g.id] = g.answer.includes(v);
    });
    setRes(r);
  };

  const renderGap = (id: number) => (
    <span className="inline-flex items-center gap-1 align-middle">
      <Input
        value={ans[id] || ""}
        onChange={(e) => { setAns((p) => ({ ...p, [id]: e.target.value })); setRes(null); }}
        className={`inline-block w-24 h-7 px-2 text-sm ${res ? (res[id] ? "border-green-600" : "border-red-500") : ""}`}
      />
      {res && (res[id] ? <CheckCircle2 className="h-4 w-4 text-green-600" /> : <XCircle className="h-4 w-4 text-red-500" />)}
    </span>
  );

  return (
    <div className="space-y-8">
      <Card className="service-card">
        <CardContent className="p-6 space-y-3">
          <h3 className="text-2xl font-semibold font-merriweather text-foreground">Writing: The Results of a Survey</h3>
          <p className="text-muted-foreground">
            <strong>1</strong> Look at the chart below, which shows the results of a survey of 1,200 American business travellers, and complete the paragraph by writing one word in each gap.
          </p>
        </CardContent>
      </Card>

      <Card className="service-card">
        <CardContent className="p-6 space-y-5">
          <Bar title="What are the most important amenities or services in a business hotel?" data={chart1} />
          <p className="text-foreground leading-relaxed">
            In our survey of 1,200 business travellers, {renderGap(1)} found that 39% considered the quality of the guest rooms {renderGap(2)} the most important amenity, whereas 18% rated high-speed Internet access {renderGap(3)} the most important, and 17% valued the hotel staff {renderGap(4)} highly.
          </p>
          <Button onClick={check} className="bg-brand-royal hover:bg-brand-navy">Check Answers</Button>
        </CardContent>
      </Card>

      <Card className="service-card">
        <CardContent className="p-6 space-y-3">
          <p className="text-muted-foreground">
            <strong>2</strong> Write similar paragraphs for these two charts. Use <em>while / whereas / however</em> to contrast ideas.
          </p>
        </CardContent>
      </Card>

      <Card className="service-card">
        <CardContent className="p-6 space-y-4">
          <Bar title="What is your favourite hotel chain?" data={chart2} />
          <Textarea rows={4} value={p2} onChange={(e) => setP2(e.target.value)} placeholder="Write your paragraph here…" />
        </CardContent>
      </Card>

      <Card className="service-card">
        <CardContent className="p-6 space-y-4">
          <Bar title="How important is the hotel's cost in making your travel plans?" data={chart3} />
          <Textarea rows={4} value={p3} onChange={(e) => setP3(e.target.value)} placeholder="Write your paragraph here…" />
        </CardContent>
      </Card>

      <Card className="service-card bg-muted/30">
        <CardContent className="p-6 text-sm text-foreground space-y-2">
          <p className="font-semibold text-brand-royal">Useful language — Contrasting ideas</p>
          <p><em>While / Whereas</em> 25% of respondents valued room service, only 10% rated the quality of the beds. <em>However</em>, just 3% considered the business centre to be an important service.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default WritingUnit13;
