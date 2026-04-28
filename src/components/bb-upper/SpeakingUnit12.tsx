import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, XCircle, RotateCcw, MessageCircle, Users, Lightbulb } from "lucide-react";
import cafe from "@/assets/bb-upper/unit12-cafe-business.jpg";
import tech from "@/assets/bb-upper/unit12-tech-store.jpg";

const STAGES: { id: string; text: string; pos: number }[] = [
  { id: "a", text: "Conclude and invite questions.", pos: 7 },
  { id: "b", text: "Give the main part of your talk.", pos: 5 },
  { id: "c", text: "Greet audience and thank them for coming.", pos: 1 },
  { id: "d", text: "Introduce your talk.", pos: 3 },
  { id: "e", text: "Introduce yourself (and your colleague(s)).", pos: 2 },
  { id: "f", text: "Outline what you are going to say in your talk and suggest people leave their questions to the end.", pos: 4 },
  { id: "g", text: "Summarise the main points you have made.", pos: 6 },
];

const TOPICS = [
  { letter: "A", title: "Present the company you work for", points: ["what the company or organisation does", "how it started", "what it will do in the future"] },
  { letter: "B", title: "Present a product or service you know well", points: ["what the product is", "what the advantages of buying it are", "how it is marketed"] },
  { letter: "C", title: "Present your town to a business person", points: ["what industries there are in your town", "what facilities there are for new businesses", "what the advantages of opening a business in your town are"] },
];

const SpeakingUnit12 = () => {
  const [ans, setAns] = useState<Record<string, string>>({});
  const [res, setRes] = useState<Record<string, "correct" | "incorrect" | null>>({});
  const [show, setShow] = useState(false);

  const check = () => {
    const r: Record<string, "correct" | "incorrect"> = {};
    STAGES.forEach((s) => { r[s.id] = (ans[s.id] || "") === String(s.pos) ? "correct" : "incorrect"; });
    setRes(r);
    setShow(true);
  };
  const reset = () => { setAns({}); setRes({}); setShow(false); };

  return (
    <div className="space-y-8">
      {/* Stage ordering */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <MessageCircle className="h-5 w-5 text-primary" />
            Structuring a presentation
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-sm text-muted-foreground">
            When you give a business presentation, it is important that your presentation has a clear structure which
            your audience can follow easily. It is also important to repeat the important points several times.
          </p>
          <p className="text-sm font-semibold text-foreground">
            In pairs, look at these stages of a typical presentation. Choose the correct order (1–7) for each one.
            Stage 1 is given as an example.
          </p>

          <div className="space-y-2">
            {STAGES.map((s) => (
              <div key={s.id} className="flex items-center gap-3 p-3 border border-border rounded-lg bg-card">
                <span className="text-primary font-bold w-5">{s.id}</span>
                <span className="flex-1 text-sm text-foreground">{s.text}</span>
                {s.id === "c" ? (
                  <span className="px-3 py-1 rounded bg-green-50 dark:bg-green-950/30 border border-green-500 text-sm text-green-700 dark:text-green-300 font-semibold">
                    1
                  </span>
                ) : (
                  <>
                    <Select
                      value={ans[s.id] || ""}
                      onValueChange={(v) => setAns((p) => ({ ...p, [s.id]: v }))}
                      disabled={res[s.id] === "correct"}
                    >
                      <SelectTrigger
                        className={`h-9 w-20 text-sm ${
                          res[s.id] === "correct"
                            ? "border-green-500 bg-green-50 dark:bg-green-950/30"
                            : res[s.id] === "incorrect"
                              ? "border-red-500 bg-red-50 dark:bg-red-950/30"
                              : ""
                        }`}
                      >
                        <SelectValue placeholder="?" />
                      </SelectTrigger>
                      <SelectContent>
                        {[2, 3, 4, 5, 6, 7].map((n) => (<SelectItem key={n} value={String(n)}>{n}</SelectItem>))}
                      </SelectContent>
                    </Select>
                    {res[s.id] === "correct" && <CheckCircle2 className="h-4 w-4 text-green-600" />}
                    {res[s.id] === "incorrect" && (
                      <span className="text-xs text-red-600">→ {s.pos}</span>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>

          <div className="flex gap-3">
            <Button onClick={check} className="bg-primary hover:bg-primary/90">Check Order</Button>
            <Button onClick={reset} variant="outline" className="gap-2"><RotateCcw className="h-4 w-4" /> Reset</Button>
          </div>
        </CardContent>
      </Card>

      {/* Mini-presentation */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-primary" />
            Talking point: a brief presentation
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-foreground">
            Work with a partner. Choose one of the following topics (A–C) and prepare a brief presentation of about
            <strong> two or three minutes</strong>.
          </p>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
            <li>Follow the seven steps of the presentation structure.</li>
            <li>Do not write exactly what you are going to say; make brief notes.</li>
            <li>Then change partners and take turns to give your presentations to each other.</li>
            <li>Listen to your new partner's presentation and ask two or three questions at the end.</li>
            <li>Give your partner feedback on what he/she did well and what could be improved.</li>
          </ul>

          <div className="grid md:grid-cols-3 gap-4">
            {TOPICS.map((t) => (
              <div key={t.letter} className="rounded-lg border border-border bg-card p-4">
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold mb-2">
                  {t.letter}
                </div>
                <h4 className="font-semibold text-foreground mb-2 text-sm">{t.title}</h4>
                <p className="text-xs text-muted-foreground mb-2">You can say:</p>
                <ul className="list-disc list-inside text-sm text-foreground space-y-1">
                  {t.points.map((p, i) => (<li key={i}>{p}</li>))}
                </ul>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Role-play */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            Role-play: Presenting to business angels
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-foreground">
            Work in pairs. You have an idea for a new business start-up, but you need to raise finance to make your dream
            a reality (it might be one of the ideas in the photos). One possibility is to get financial support from a
            <strong> 'business angel'</strong> – a private investor who specialises in putting money into new enterprises.
          </p>
          <p className="text-sm text-foreground">
            A group of angels are meeting at a hotel in your area to listen to presentations from would-be entrepreneurs
            like yourselves. Your job is to prepare a presentation, rehearse it and give it to the angels.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <img src={cafe} alt="People in a cafe-style setting — a possible business idea" className="rounded-lg shadow-md w-full h-48 object-cover" loading="lazy" />
            <img src={tech} alt="People in a tech store — a possible business idea" className="rounded-lg shadow-md w-full h-48 object-cover" loading="lazy" />
          </div>

          <div className="rounded-lg border border-primary/20 bg-primary/5 p-5">
            <h4 className="font-semibold text-foreground mb-3">Follow these steps:</h4>
            <ol className="list-decimal list-inside text-sm text-foreground space-y-2">
              <li>Decide on your business idea: kind of company, product, size, location and premises.</li>
              <li>Imagine you have carried out market research and invent some results to present to investors.</li>
              <li>Decide how much money you need. Invent financial details: sales and profit forecasts, projected return on investment.</li>
              <li>Prepare the presentation together. Write notes to work from. Decide who gives each part.</li>
              <li>Rehearse your presentation together.</li>
              <li>Imagine the rest of your class are the business angels. Give your presentation to them.</li>
              <li>While listening to other people's presentations, think of one or two questions to ask at the end.</li>
            </ol>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SpeakingUnit12;
