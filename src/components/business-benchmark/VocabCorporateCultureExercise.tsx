import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";

/* ── Activity 1: Olympus culture statement ── */
const olympusText = `People talk a lot about corporate culture these days but at Olympus we really pay attention to it. We aim to offer people challenging and rewarding work in a pleasant environment. Employees dress casually on days when there is no customer contact and this helps to create a friendly atmosphere. Developing and maintaining close partnerships with our customers is one of the keys to our success. Our customers appreciate that we offer high quality products at competitive prices and a high level of customer care. They rely on us to come up with solutions for their needs. And of course, customer care is not just about external customers. It is also about how we relate to each other and work together to pool our ideas. In short, Olympus is a great place to work.`;

/* ── Activity 2: Find adjective-noun collocations ── */
interface AdjNounQ {
  id: number;
  clue: string;
  answer: string;
  verb: string;
}

const adjNounFinds: AdjNounQ[] = [
  { id: 1, clue: "the normal way of doing something", answer: "standard procedure", verb: "follow" },
  { id: 2, clue: "(in the scores analysis) big danger", answer: "serious risk", verb: "take" },
];

/* ── Activity 3: Verb-noun collocations ── */
interface CollocationMatch {
  id: number;
  left: string;
  correctRight: string[];
}

const verbNounItems: CollocationMatch[] = [
  { id: 1, left: "pay", correctRight: ["attention (to something)"] },
  { id: 2, left: "create", correctRight: ["an opportunity", "a friendly atmosphere"] },
  { id: 3, left: "pool", correctRight: ["our ideas"] },
  { id: 4, left: "put forward", correctRight: ["a proposal"] },
  { id: 5, left: "hold", correctRight: ["a meeting"] },
  { id: 6, left: "reach", correctRight: ["a solution", "your full potential"] },
  { id: 7, left: "come up with", correctRight: ["a solution"] },
];

const nounOptions = [
  "a proposal",
  "a meeting",
  "our ideas",
  "a solution",
  "attention (to something)",
  "an opportunity",
  "your full potential",
];

/* ── Activity 4: Adjective-noun collocations ── */
const adjNounItems: CollocationMatch[] = [
  { id: 1, left: "challenging", correctRight: ["work"] },
  { id: 2, left: "rewarding", correctRight: ["work"] },
  { id: 3, left: "close", correctRight: ["contact", "partnership"] },
  { id: 4, left: "friendly", correctRight: ["atmosphere"] },
  { id: 5, left: "competitive", correctRight: ["price"] },
  { id: 6, left: "valuable", correctRight: ["resource"] },
];

const adjNounOptions = [
  "atmosphere",
  "work",
  "resource",
  "partnership",
  "contact",
  "price",
];

const VocabCorporateCultureExercise = () => {
  /* Activity 2 state */
  const [adjNounAnswers, setAdjNounAnswers] = useState<Record<number, string>>({});
  const [adjNounVerbAnswers, setAdjNounVerbAnswers] = useState<Record<number, string>>({});
  const [adjNounChecked, setAdjNounChecked] = useState(false);

  /* Activity 3 state */
  const [verbSelections, setVerbSelections] = useState<Record<number, string>>({});
  const [verbChecked, setVerbChecked] = useState(false);

  /* Activity 4 state */
  const [adjSelections, setAdjSelections] = useState<Record<number, string>>({});
  const [adjChecked, setAdjChecked] = useState(false);

  const isCorrectAdj = (id: number) => {
    const item = adjNounFinds.find((i) => i.id === id);
    if (!item) return false;
    return adjNounAnswers[id]?.toLowerCase().trim() === item.answer.toLowerCase();
  };

  const isCorrectVerb = (id: number) => {
    const item = adjNounFinds.find((i) => i.id === id);
    if (!item) return false;
    return adjNounVerbAnswers[id]?.toLowerCase().trim() === item.verb.toLowerCase();
  };

  return (
    <div className="space-y-8">
      {/* Info: Collocations */}
      <Card className="service-card border-primary/20">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">Collocations</h3>
          <p className="text-foreground leading-relaxed mb-3">
            When recording vocabulary, it is not always enough to write down single words. It is much more useful to record which words are often used together. These are called <strong>collocations</strong>. Usually the words are from different parts of speech.
          </p>
          <p className="text-muted-foreground text-sm">
            <strong>Verb-noun</strong> collocations like these are very useful: <em>reach a target</em>, <em>launch a product</em>.
          </p>
        </CardContent>
      </Card>

      {/* Activity 1: Olympus culture statement */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">1. Company Culture Statement</h3>
          <p className="text-muted-foreground mb-4">
            Read the following company culture statement. As you read, try to identify the collocations used.
          </p>
          <div className="bg-muted/30 rounded-lg p-6 border border-border">
            <h4 className="text-lg font-bold text-foreground mb-3 uppercase tracking-wide">About OLYMPUS</h4>
            <p className="text-foreground leading-relaxed">{olympusText}</p>
          </div>
        </CardContent>
      </Card>

      {/* Activity 2: Find adjective-noun collocations */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">2. Find the Collocations</h3>
          <p className="text-muted-foreground mb-6">
            Find <strong>adjective-noun</strong> collocations in the quiz and the culture statement with these meanings. Then write the verb that commonly comes before each collocation.
          </p>
          <div className="space-y-5">
            {adjNounFinds.map((item) => (
              <div key={item.id} className="space-y-2">
                <p className="text-foreground text-sm">
                  <span className="font-bold text-primary mr-2">{item.id}.</span>
                  {item.clue}
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground w-10">Verb:</span>
                    <Input
                      placeholder="verb"
                      className={`w-32 ${adjNounChecked ? (isCorrectVerb(item.id) ? "border-green-500 bg-green-50" : "border-red-500 bg-red-50") : ""}`}
                      value={adjNounVerbAnswers[item.id] || ""}
                      onChange={(e) => setAdjNounVerbAnswers((p) => ({ ...p, [item.id]: e.target.value }))}
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground w-16">Collocation:</span>
                    <Input
                      placeholder="adjective + noun"
                      className={`w-48 ${adjNounChecked ? (isCorrectAdj(item.id) ? "border-green-500 bg-green-50" : "border-red-500 bg-red-50") : ""}`}
                      value={adjNounAnswers[item.id] || ""}
                      onChange={(e) => setAdjNounAnswers((p) => ({ ...p, [item.id]: e.target.value }))}
                    />
                  </div>
                  {adjNounChecked && !isCorrectAdj(item.id) && (
                    <span className="text-xs text-muted-foreground">
                      ({item.verb} + {item.answer})
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
          <Button onClick={() => setAdjNounChecked(true)} className="mt-6 bg-primary hover:bg-primary/90">
            Check Answers
          </Button>
        </CardContent>
      </Card>

      {/* Activity 3: Verb-noun matching */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">3. Verb-Noun Collocations</h3>
          <p className="text-muted-foreground mb-6">
            Match each verb (1–7) with a noun (a–g) to make common collocations. Some words can be used more than once.
          </p>
          <div className="space-y-3">
            {verbNounItems.map((item) => {
              const selected = verbSelections[item.id];
              const correct = selected ? item.correctRight.includes(selected) : undefined;
              return (
                <div key={item.id} className="flex items-center gap-4 flex-wrap">
                  <span className="text-foreground font-medium w-40 shrink-0">{item.id}. {item.left}</span>
                  <Select
                    value={verbSelections[item.id] || ""}
                    onValueChange={(val) => setVerbSelections((p) => ({ ...p, [item.id]: val }))}
                  >
                    <SelectTrigger className={`w-56 ${verbChecked ? (correct ? "border-green-500 bg-green-50" : "border-red-500 bg-red-50") : ""}`}>
                      <SelectValue placeholder="Select a noun…" />
                    </SelectTrigger>
                    <SelectContent>
                      {nounOptions.map((n) => (
                        <SelectItem key={n} value={n}>{n}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {verbChecked && (
                    correct
                      ? <CheckCircle className="h-5 w-5 text-green-600 shrink-0" />
                      : <>
                          <XCircle className="h-5 w-5 text-red-600 shrink-0" />
                          <span className="text-xs text-muted-foreground">{item.correctRight[0]}</span>
                        </>
                  )}
                </div>
              );
            })}
          </div>
          <Button onClick={() => setVerbChecked(true)} className="mt-6 bg-primary hover:bg-primary/90">
            Check Answers
          </Button>
        </CardContent>
      </Card>

      {/* Activity 4: Adjective-noun matching */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">4. Adjective-Noun Collocations</h3>
          <p className="text-muted-foreground mb-6">
            Match each adjective (1–6) with a noun (a–f). You can use the adjectives more than once.
          </p>
          <div className="space-y-3">
            {adjNounItems.map((item) => {
              const selected = adjSelections[item.id];
              const correct = selected ? item.correctRight.includes(selected) : undefined;
              return (
                <div key={item.id} className="flex items-center gap-4 flex-wrap">
                  <span className="text-foreground font-medium w-36 shrink-0">{item.id}. {item.left}</span>
                  <Select
                    value={adjSelections[item.id] || ""}
                    onValueChange={(val) => setAdjSelections((p) => ({ ...p, [item.id]: val }))}
                  >
                    <SelectTrigger className={`w-48 ${adjChecked ? (correct ? "border-green-500 bg-green-50" : "border-red-500 bg-red-50") : ""}`}>
                      <SelectValue placeholder="Select a noun…" />
                    </SelectTrigger>
                    <SelectContent>
                      {adjNounOptions.map((n) => (
                        <SelectItem key={n} value={n}>{n}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {adjChecked && (
                    correct
                      ? <CheckCircle className="h-5 w-5 text-green-600 shrink-0" />
                      : <>
                          <XCircle className="h-5 w-5 text-red-600 shrink-0" />
                          <span className="text-xs text-muted-foreground">{item.correctRight[0]}</span>
                        </>
                  )}
                </div>
              );
            })}
          </div>
          <Button onClick={() => setAdjChecked(true)} className="mt-6 bg-primary hover:bg-primary/90">
            Check Answers
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default VocabCorporateCultureExercise;
