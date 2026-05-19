import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, XCircle } from "lucide-react";

// --- Exercise 1: letter gap-fill (multi-choice) ---
const letterQuestions = [
  { id: 1, options: ["hold", "reserve", "get", "give"], answer: "reserve" },
  { id: 2, options: ["with", "consisting", "including", "containing"], answer: "with" },
  { id: 3, options: ["on", "of", "for", "in"], answer: "of" },
  { id: 4, options: ["situate", "locate", "be", "place"], answer: "be" },
  { id: 5, options: ["like", "prefer", "need", "think"], answer: "need" },
  { id: 6, options: ["quantity", "number", "selection", "range"], answer: "number" },
  { id: 7, options: ["for", "then", "so", "consequently"], answer: "so" },
  { id: 8, options: ["for", "from", "with", "of"], answer: "for" },
  { id: 9, options: ["have", "reserve", "maintain", "keep"], answer: "keep" },
  { id: 10, options: ["ensure", "promise", "confirm", "agree"], answer: "confirm" },
  { id: 11, options: ["demand", "require", "hope", "oblige"], answer: "require" },
  { id: 12, options: ["ahead", "advance", "preparation", "priority"], answer: "advance" },
];

const letter: { intro?: string; gap?: number; after?: string }[] = [
  { intro: "Dear Sirs,\n\nPlease ", gap: 1, after: " a single room " },
  { gap: 2, after: " bath for me for the nights " },
  { gap: 3, after: " 18 and 19 March. If possible, I would like the room to " },
  { gap: 4, after: " in a quiet part of the hotel.\n\nI shall " },
  { gap: 5, after: " to meet a " },
  { gap: 6, after: " of clients on the morning of 20 March, " },
  { gap: 7, after: " could you make a meeting room available " },
  { gap: 8, after: " me on that day from 9 a.m. to 2 p.m.?\n\nI do not expect to arrive until about 11 p.m. on 18 March, so please " },
  { gap: 9, after: " my room for me. Also, please fax me as soon as possible to " },
  { gap: 10, after: " that these bookings have been made. If you " },
  { gap: 11, after: " me to send a deposit in " },
  { gap: 12, after: ", let me know and I shall be happy to do so.\n\nYours faithfully," },
];

// --- Exercise 2: survey paragraph gap-fill ---
const surveyGaps = [
  { id: 1, answer: ["survey"] },
  { id: 2, answer: ["found"] },
  { id: 3, answer: ["amenity"] },
  { id: 4, answer: ["rated"] },
  { id: 5, answer: ["highly"] },
];

// --- Exercise 3: grammar ---
const grammar1 = [
  { id: 1, prompt: "The plane was delayed and they didn't tell us. They ____ us as soon as they knew.", answer: ["should have told"] },
  { id: 2, prompt: "I thought the aircraft was pretty dirty. They ____ it properly before we got on board.", answer: ["should have cleaned"] },
  { id: 3, prompt: "They allowed the economy-class passengers to board first. I think they ____ the business-class passengers to go first.", answer: ["should have allowed"] },
  { id: 4, prompt: "The steward gave me the same food as the economy-class passengers. I think he ____ me better food.", answer: ["should have given"] },
  { id: 5, prompt: "We had to queue to get off the plane. We ____ to queue.", answer: ["should not have had", "shouldn't have had"] },
];

const grammar2 = [
  "There was nobody waiting for me at the airport. They …",
  "The bank was closed when I arrived, so I couldn't change money. The bank …",
  "The customs officer was rude when he searched my luggage. He …",
  "It took over an hour for my luggage to come through to the baggage reclaim. They …",
];

const norm = (s: string) => s.trim().toLowerCase().replace(/\s+/g, " ").replace(/[.,!?]/g, "");

const WorkbookUnit13 = () => {
  const [letterSel, setLetterSel] = useState<Record<number, string>>({});
  const [letterRes, setLetterRes] = useState<Record<number, boolean> | null>(null);
  const [survey, setSurvey] = useState<Record<number, string>>({});
  const [surveyRes, setSurveyRes] = useState<Record<number, boolean> | null>(null);
  const [g1, setG1] = useState<Record<number, string>>({});
  const [g1Res, setG1Res] = useState<Record<number, boolean> | null>(null);
  const [g2, setG2] = useState<Record<number, string>>({});

  const checkLetter = () => {
    const r: Record<number, boolean> = {};
    letterQuestions.forEach((q) => { r[q.id] = letterSel[q.id] === q.answer; });
    setLetterRes(r);
  };
  const checkSurvey = () => {
    const r: Record<number, boolean> = {};
    surveyGaps.forEach((g) => { r[g.id] = g.answer.includes(norm(survey[g.id] || "")); });
    setSurveyRes(r);
  };
  const checkG1 = () => {
    const r: Record<number, boolean> = {};
    grammar1.forEach((q) => { r[q.id] = q.answer.map((a) => norm(a)).includes(norm(g1[q.id] || "")); });
    setG1Res(r);
  };

  return (
    <div className="space-y-10">
      {/* Vocabulary letter */}
      <Card className="service-card">
        <CardContent className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold font-merriweather text-foreground">Vocabulary</h3>
          <p className="text-muted-foreground"><strong>1</strong> Complete this hotel-booking letter by choosing the most appropriate word (A, B, C or D) for each gap.</p>
        </CardContent>
      </Card>

      <Card className="service-card">
        <CardContent className="p-6">
          <pre className="whitespace-pre-wrap text-foreground leading-relaxed font-sans">
            {letter.map((part, i) => (
              <span key={i}>
                {part.intro}
                {part.gap && (
                  <span className="inline-block px-2 py-0.5 mx-1 bg-yellow-100 dark:bg-yellow-900/30 border border-dashed border-brand-orange rounded font-bold text-brand-royal">
                    {part.gap}{letterSel[part.gap] ? `: ${letterSel[part.gap]}` : ""}
                  </span>
                )}
                {part.after}
              </span>
            ))}
          </pre>
        </CardContent>
      </Card>

      <div className="space-y-2">
        {letterQuestions.map((q) => (
          <Card key={q.id} className="service-card">
            <CardContent className="p-3">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-bold text-brand-royal w-8">{q.id}.</span>
                {q.options.map((opt, i) => {
                  const letterL = ["A", "B", "C", "D"][i];
                  const isSel = letterSel[q.id] === opt;
                  return (
                    <button
                      key={opt}
                      onClick={() => { setLetterSel((p) => ({ ...p, [q.id]: opt })); setLetterRes(null); }}
                      className={`px-3 py-1 rounded border text-sm transition-colors ${
                        isSel ? "bg-brand-royal text-white border-brand-royal" : "border-border hover:bg-accent"
                      }`}
                    ><span className="font-bold mr-1">{letterL}</span>{opt}</button>
                  );
                })}
                {letterRes && (letterRes[q.id]
                  ? <CheckCircle2 className="h-5 w-5 text-green-600" />
                  : <span className="text-sm text-red-600">Correct: {q.answer}</span>)}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Button onClick={checkLetter} className="bg-brand-royal hover:bg-brand-navy">Check Letter</Button>

      {/* Survey paragraph */}
      <Card className="service-card mt-10">
        <CardContent className="p-6 space-y-2">
          <p className="text-muted-foreground"><strong>2</strong> Look at the chart below and complete this paragraph using words from the box.</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {["amenity", "found", "highly", "rated", "survey"].map((w) => (
              <span key={w} className="px-3 py-1 rounded-full bg-brand-royal/10 text-brand-royal text-sm font-semibold">{w}</span>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="service-card">
        <CardContent className="p-6 space-y-3">
          <h4 className="font-semibold text-brand-royal">Business travellers: which do you consider most important when flying business class?</h4>
          <div className="space-y-2">
            {[
              { label: "Preferential service", value: 42 },
              { label: "Good food and drink", value: 35 },
              { label: "Comfortable seats", value: 23 },
            ].map((d) => (
              <div key={d.label} className="flex items-center gap-3">
                <span className="w-44 text-sm">{d.label}</span>
                <div className="flex-1 bg-muted rounded-full h-6">
                  <div className="bg-brand-royal h-full rounded-full flex items-center justify-end pr-2 text-white text-xs font-semibold" style={{ width: `${d.value}%` }}>{d.value}%</div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-foreground leading-relaxed mt-4">
            In our{" "}
            {[1, 2, 3, 4, 5].map((id) => {
              const before = ["", " of 600 business travellers, we ", " that 42% considered preferential service was the most important ", ", whereas 35% ", " good food and drink as the most important, and 23% valued comfortable seats most "][id - 1];
              const after = id === 5 ? "." : "";
              return (
                <span key={id} className="inline-flex items-center gap-1">
                  <span>{before}</span>
                  <Input
                    value={survey[id] || ""}
                    onChange={(e) => { setSurvey((p) => ({ ...p, [id]: e.target.value })); setSurveyRes(null); }}
                    className={`inline-block w-28 h-7 px-2 text-sm ${surveyRes ? (surveyRes[id] ? "border-green-600" : "border-red-500") : ""}`}
                  />
                  {surveyRes && (surveyRes[id]
                    ? <CheckCircle2 className="h-4 w-4 text-green-600" />
                    : <XCircle className="h-4 w-4 text-red-500" />)}
                  <span>{after}</span>
                </span>
              );
            })}
          </p>
          <Button onClick={checkSurvey} className="bg-brand-royal hover:bg-brand-navy">Check Paragraph</Button>
        </CardContent>
      </Card>

      {/* Pie chart paragraph (free writing) */}
      <Card className="service-card">
        <CardContent className="p-6 space-y-3">
          <p className="text-muted-foreground"><strong>3</strong> Write a paragraph describing this chart.</p>
          <h4 className="font-semibold text-brand-royal">Business travellers: which do you consider most important in airports? (600 respondents)</h4>
          <div className="space-y-2">
            {[
              { label: "Short check-in queues", value: 66 },
              { label: "VIP lounge", value: 23 },
              { label: "Friendly treatment", value: 11 },
            ].map((d) => (
              <div key={d.label} className="flex items-center gap-3">
                <span className="w-44 text-sm">{d.label}</span>
                <div className="flex-1 bg-muted rounded-full h-6">
                  <div className="bg-brand-orange h-full rounded-full flex items-center justify-end pr-2 text-white text-xs font-semibold" style={{ width: `${d.value}%` }}>{d.value}%</div>
                </div>
              </div>
            ))}
          </div>
          <Textarea rows={4} placeholder="Write your paragraph here…" />
        </CardContent>
      </Card>

      {/* Grammar 1 */}
      <Card className="service-card mt-10">
        <CardContent className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold font-merriweather text-foreground">Grammar: <em>should have</em> + past participle</h3>
          <p className="text-muted-foreground"><strong>1</strong> Complete the sentences by putting the verbs in brackets into the correct forms.</p>
        </CardContent>
      </Card>

      <div className="space-y-3">
        {grammar1.map((q) => (
          <Card key={q.id} className="service-card">
            <CardContent className="p-4 space-y-2">
              <p className="text-foreground"><span className="font-bold text-brand-royal mr-2">{q.id}.</span>{q.prompt}</p>
              <div className="flex items-center gap-2 ml-7">
                <Input
                  value={g1[q.id] || ""}
                  onChange={(e) => { setG1((p) => ({ ...p, [q.id]: e.target.value })); setG1Res(null); }}
                  placeholder="should have …"
                  className={`max-w-md ${g1Res ? (g1Res[q.id] ? "border-green-600" : "border-red-500") : ""}`}
                />
                {g1Res && (g1Res[q.id]
                  ? <CheckCircle2 className="h-5 w-5 text-green-600" />
                  : <span className="text-sm text-red-600">{q.answer[0]}</span>)}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Button onClick={checkG1} className="bg-brand-royal hover:bg-brand-navy">Check Grammar</Button>

      {/* Grammar 2 - free */}
      <Card className="service-card mt-10">
        <CardContent className="p-6 space-y-3">
          <p className="text-muted-foreground"><strong>2</strong> Complete these sentences in any way you like using <em>should have</em> + past participle.</p>
          {grammar2.map((p, i) => (
            <div key={i} className="space-y-1">
              <p className="text-foreground"><span className="font-bold text-brand-royal mr-2">{i + 1}.</span>{p}</p>
              <Input
                value={g2[i] || ""}
                onChange={(e) => setG2((s) => ({ ...s, [i]: e.target.value }))}
                placeholder="…should have …"
                className="ml-7 max-w-xl"
              />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default WorkbookUnit13;
