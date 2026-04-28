import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, XCircle, RotateCcw, FileText } from "lucide-react";

const meanings = [
  { id: "A", phrase: "it might be possible to include … you must include …", answers: { 1: false, 2: true, 3: true, 4: false } },
];

// Match phrase → explanation
const matchItems: { id: string; phrase: string; answer: number }[] = [
  { id: "A1", phrase: "it might be possible to include …", answer: 3 },
  { id: "A2", phrase: "you must include …", answer: 2 },
  { id: "B", phrase: "These should be prompts only …", answer: 1 },
  { id: "C", phrase: "people can read at their leisure", answer: 4 },
];

const explanations = [
  { n: 1, text: "it is advisable, a good idea if these are" },
  { n: 2, text: "it is essential, necessary or obligatory for you to" },
  { n: 3, text: "it is perhaps" },
  { n: 4, text: "people will be able to" },
];

// WB Grammar Ex 2 — multiple choice modals
const mc: { n: number; text: string; options: { v: string; label: string }[]; answer: string }[] = [
  {
    n: 1,
    text: "I think we ____ raise production levels to meet growing demand – it's not absolutely necessary because we still have stocks, but it would be a good idea.",
    options: [{ v: "A", label: "must" }, { v: "B", label: "may" }, { v: "C", label: "should" }],
    answer: "C",
  },
  {
    n: 2,
    text: "I don't know what our competitors are going to do. They ____ possibly lower their prices, although that will affect their profit margins.",
    options: [{ v: "A", label: "must" }, { v: "B", label: "may" }, { v: "C", label: "should" }],
    answer: "B",
  },
  {
    n: 3,
    text: "You ____ come into the office early tomorrow – it's essential we discuss things before the meeting.",
    options: [{ v: "A", label: "must" }, { v: "B", label: "may" }, { v: "C", label: "could" }],
    answer: "A",
  },
  {
    n: 4,
    text: "Be careful of Bill Watson. He ____ get very irritable if you interrupt him when he's busy.",
    options: [{ v: "A", label: "must" }, { v: "B", label: "can" }, { v: "C", label: "should" }],
    answer: "B",
  },
  {
    n: 5,
    text: "I'm sorry. It's been useful talking to you, but I ____ go now. I have a client waiting for me outside.",
    options: [{ v: "A", label: "must" }, { v: "B", label: "may" }, { v: "C", label: "could" }],
    answer: "A",
  },
];

// GW3 — rewrite using a modal verb
const rewrite: { n: number; original: string; answers: string[]; hint: string }[] = [
  { n: 2, original: "It's a good idea to put complicated details on a handout.", hint: "should / ought to", answers: ["you should put complicated details on a handout", "you ought to put complicated details on a handout"] },
  { n: 3, original: "It's essential to speak loudly and clearly so that everyone can hear you.", hint: "must / have to", answers: ["you must speak loudly and clearly so that everyone can hear you", "you have to speak loudly and clearly so that everyone can hear you"] },
  { n: 4, original: "Giving presentations to senior managers is generally likely to be very frightening.", hint: "can", answers: ["giving presentations to senior managers can be very frightening"] },
  { n: 5, original: "You are allowed to pause to drink water if your mouth is dry.", hint: "may / can", answers: ["you may pause to drink water if your mouth is dry", "you can pause to drink water if your mouth is dry"] },
  { n: 6, original: "Perhaps people will interrupt your presentation with questions.", hint: "may / might", answers: ["people may interrupt your presentation with questions", "people might interrupt your presentation with questions"] },
  { n: 7, original: "You are allowed to tell them to save questions till the end.", hint: "may / can", answers: ["you may tell them to save questions till the end", "you can tell them to save questions till the end"] },
];

// Verb-form gap fill from Peter Furlong's presentation extract
const verbGaps: { n: number; verb: string; answers: string[] }[] = [
  { n: 1, verb: "come", answers: ["coming"] },
  { n: 2, verb: "travel", answers: ["have travelled", "have traveled", "travelled", "traveled"] },
  { n: 3, verb: "hear", answers: ["to hear"] },
  { n: 4, verb: "all have", answers: ["all had", "all have had"] },
  { n: 5, verb: "introduce", answers: ["introduce"] },
  { n: 6, verb: "explain", answers: ["to explain"] },
  { n: 7, verb: "invest", answers: ["investing"] },
  { n: 8, verb: "hope", answers: ["am hoping", "hope", "'m hoping"] },
  { n: 9, verb: "give", answers: ["'ll give", "will give", "shall give"] },
  { n: 10, verb: "tell", answers: ["'ll tell", "will tell"] },
  { n: 11, verb: "conduct", answers: ["have conducted", "'ve conducted", "conducted"] },
  { n: 12, verb: "outline", answers: ["'ll outline", "will outline"] },
  { n: 13, verb: "represent", answers: ["represents"] },
  { n: 14, verb: "like", answers: ["would like", "'d like"] },
  { n: 15, verb: "be", answers: ["'ll be", "will be"] },
  { n: 16, verb: "answer", answers: ["to answer"] },
];

const GrammarUnit12 = () => {
  // Match
  const [match, setMatch] = useState<Record<string, string>>({});
  const [matchRes, setMatchRes] = useState<Record<string, "correct" | "incorrect" | null>>({});
  const [showM, setShowM] = useState(false);

  const checkM = () => {
    const r: Record<string, "correct" | "incorrect"> = {};
    matchItems.forEach((m) => { r[m.id] = (match[m.id] || "") === String(m.answer) ? "correct" : "incorrect"; });
    setMatchRes(r); setShowM(true);
  };
  const resetM = () => { setMatch({}); setMatchRes({}); setShowM(false); };

  // MC
  const [mcAns, setMcAns] = useState<Record<number, string>>({});
  const [mcRes, setMcRes] = useState<Record<number, "correct" | "incorrect" | null>>({});
  const [showMC, setShowMC] = useState(false);

  const checkMC = () => {
    const r: Record<number, "correct" | "incorrect"> = {};
    mc.forEach((q) => { r[q.n] = (mcAns[q.n] || "") === q.answer ? "correct" : "incorrect"; });
    setMcRes(r); setShowMC(true);
  };
  const resetMC = () => { setMcAns({}); setMcRes({}); setShowMC(false); };

  // Rewrite
  const [rwAns, setRwAns] = useState<Record<number, string>>({});
  const [rwRes, setRwRes] = useState<Record<number, "correct" | "incorrect" | null>>({});
  const [showRW, setShowRW] = useState(false);

  const norm = (s: string) => s.toLowerCase().replace(/[.,!?]/g, "").replace(/\s+/g, " ").trim();
  const checkRW = () => {
    const r: Record<number, "correct" | "incorrect"> = {};
    rewrite.forEach((q) => {
      const v = norm(rwAns[q.n] || "");
      r[q.n] = q.answers.some((a) => norm(a) === v) ? "correct" : "incorrect";
    });
    setRwRes(r); setShowRW(true);
  };
  const resetRW = () => { setRwAns({}); setRwRes({}); setShowRW(false); };

  // Verb gap fill
  const [vgAns, setVgAns] = useState<Record<number, string>>({});
  const [vgRes, setVgRes] = useState<Record<number, "correct" | "incorrect" | null>>({});
  const [showVG, setShowVG] = useState(false);
  const checkVG = () => {
    const r: Record<number, "correct" | "incorrect"> = {};
    verbGaps.forEach((g) => {
      const v = norm(vgAns[g.n] || "");
      r[g.n] = g.answers.some((a) => norm(a) === v) ? "correct" : "incorrect";
    });
    setVgRes(r); setShowVG(true);
  };
  const resetVG = () => { setVgAns({}); setVgRes({}); setShowVG(false); };
  const vgCorrect = Object.values(vgRes).filter((v) => v === "correct").length;

  const VG = ({ n }: { n: number }) => {
    const g = verbGaps.find((x) => x.n === n)!;
    const r = vgRes[n];
    return (
      <span className="inline-flex items-baseline gap-1 mx-1 align-baseline">
        <span className="text-primary font-bold text-xs">{n}</span>
        <Input
          value={vgAns[n] || ""}
          onChange={(e) => setVgAns((p) => ({ ...p, [n]: e.target.value }))}
          disabled={r === "correct"}
          className={`inline-block h-7 w-32 text-sm not-italic px-2 ${
            r === "correct"
              ? "border-green-500 bg-green-50 dark:bg-green-950/30"
              : r === "incorrect"
                ? "border-red-500 bg-red-50 dark:bg-red-950/30"
                : ""
          }`}
        />
        <span className="italic text-muted-foreground text-xs">({g.verb})</span>
      </span>
    );
  };

  return (
    <div className="space-y-8">
      {/* Theory box */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            Grammar Workshop: Modal Verbs
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm">
          <p className="font-semibold text-foreground">To express these meanings, you can use modal verbs.</p>
          <ul className="space-y-4 text-foreground">
            <li>
              <p><strong>perhaps:</strong> <em>may / might</em></p>
              <p className="italic text-muted-foreground ml-4">You should make a back-up copy because the computer <strong>might</strong> have a virus.</p>
            </li>
            <li>
              <p><strong>able to:</strong> <em>can</em></p>
              <p className="italic text-muted-foreground ml-4">He's a brilliant presenter because he <strong>can</strong> hold everything he wants to say in his head without looking at notes.</p>
            </li>
            <li>
              <p><strong>it's obligatory / essential:</strong> <em>must</em> or <em>have to</em></p>
              <ul className="ml-4 mt-1 space-y-2 list-disc list-inside">
                <li>
                  <em>must</em> for an obligation the speaker agrees with:
                  <p className="italic text-muted-foreground ml-5">You <strong>must</strong> help me write this report because I can't do it on my own.</p>
                </li>
                <li>
                  <em>have to</em> for an obligation from someone else:
                  <p className="italic text-muted-foreground ml-5">I'm afraid I <strong>have to</strong> work late at the office tonight – my boss wants the report finished by tomorrow lunchtime.</p>
                </li>
              </ul>
            </li>
            <li>
              <p><strong>it's a good idea / advisable:</strong> <em>should / ought to</em></p>
              <p className="italic text-muted-foreground ml-4">If you think you've got too much work, you <strong>should</strong> speak to your boss. He <strong>ought to</strong> take on an assistant to help you.</p>
            </li>
            <li>
              <p><strong>it is generally likely:</strong> <em>can</em></p>
              <p className="italic text-muted-foreground ml-4">Speakers who just read from their notes <strong>can</strong> be very boring.</p>
            </li>
            <li>
              <p><strong>it is allowed:</strong> <em>may / can</em></p>
              <p className="italic text-muted-foreground ml-4">In this company, you <strong>can</strong> wear jeans and a T-shirt on Fridays.</p>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Match meanings */}
      <Card>
        <CardContent className="p-6 space-y-4">
          <p className="text-sm font-semibold text-foreground">
            <span className="text-primary font-bold mr-2">1</span>
            Match each modal phrase from the reading text with an explanation (1–4).
          </p>
          <div className="grid sm:grid-cols-2 gap-3 mb-3">
            {explanations.map((e) => (
              <div key={e.n} className="p-3 rounded-lg bg-muted/40 border border-border text-sm">
                <strong className="text-primary mr-2">{e.n}</strong>{e.text}
              </div>
            ))}
          </div>

          <div className="space-y-2">
            {matchItems.map((m) => (
              <div key={m.id} className="flex items-center gap-3 p-3 border border-border rounded-lg bg-card">
                <span className="flex-1 text-sm text-foreground italic">"{m.phrase}"</span>
                <Select
                  value={match[m.id] || ""}
                  onValueChange={(v) => setMatch((p) => ({ ...p, [m.id]: v }))}
                  disabled={matchRes[m.id] === "correct"}
                >
                  <SelectTrigger
                    className={`h-9 w-20 text-sm ${
                      matchRes[m.id] === "correct"
                        ? "border-green-500 bg-green-50 dark:bg-green-950/30"
                        : matchRes[m.id] === "incorrect"
                          ? "border-red-500 bg-red-50 dark:bg-red-950/30"
                          : ""
                    }`}
                  >
                    <SelectValue placeholder="?" />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4].map((n) => (<SelectItem key={n} value={String(n)}>{n}</SelectItem>))}
                  </SelectContent>
                </Select>
                {matchRes[m.id] === "correct" && <CheckCircle2 className="h-4 w-4 text-green-600" />}
                {matchRes[m.id] === "incorrect" && <span className="text-xs text-red-600">→ {m.answer}</span>}
              </div>
            ))}
          </div>
          <div className="flex gap-3">
            <Button onClick={checkM} className="bg-primary hover:bg-primary/90">Check</Button>
            <Button onClick={resetM} variant="outline" className="gap-2"><RotateCcw className="h-4 w-4" /> Reset</Button>
          </div>
          {showM && (
            <p className="text-xs text-muted-foreground">Note: phrases A1 and A2 come from the same sentence in the reading text.</p>
          )}
        </CardContent>
      </Card>

      {/* Multiple choice */}
      <Card>
        <CardContent className="p-6 space-y-4">
          <p className="text-sm font-semibold text-foreground">
            <span className="text-primary font-bold mr-2">2</span>
            Choose the best modal verb (A, B or C) for each gap.
          </p>
          <div className="space-y-3">
            {mc.map((q) => (
              <div key={q.n} className="p-3 border border-border rounded-lg bg-card">
                <div className="flex items-start gap-3 mb-2">
                  <span className="text-primary font-bold flex-shrink-0">{q.n}</span>
                  <p className="text-sm text-foreground flex-1">{q.text}</p>
                </div>
                <div className="flex flex-wrap gap-2 ml-6">
                  {q.options.map((o) => {
                    const sel = mcAns[q.n] === o.v;
                    const isCorrect = mcRes[q.n] === "correct" && sel;
                    const isWrong = mcRes[q.n] === "incorrect" && sel;
                    const isAnswer = showMC && o.v === q.answer;
                    return (
                      <Button
                        key={o.v}
                        variant={sel ? "default" : "outline"}
                        size="sm"
                        onClick={() => setMcAns((p) => ({ ...p, [q.n]: o.v }))}
                        disabled={mcRes[q.n] === "correct"}
                        className={`${
                          isCorrect || (showMC && isAnswer)
                            ? "bg-green-600 hover:bg-green-700 text-white border-green-600"
                            : isWrong
                              ? "bg-red-50 dark:bg-red-950/30 border-red-500 text-red-700"
                              : ""
                        }`}
                      >
                        {o.v} {o.label}
                      </Button>
                    );
                  })}
                  {mcRes[q.n] === "correct" && <CheckCircle2 className="h-4 w-4 text-green-600 self-center" />}
                  {mcRes[q.n] === "incorrect" && <XCircle className="h-4 w-4 text-red-500 self-center" />}
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-3">
            <Button onClick={checkMC} className="bg-primary hover:bg-primary/90">Check Answers</Button>
            <Button onClick={resetMC} variant="outline" className="gap-2"><RotateCcw className="h-4 w-4" /> Reset</Button>
          </div>
        </CardContent>
      </Card>

      {/* Rewrite */}
      <Card>
        <CardContent className="p-6 space-y-4">
          <p className="text-sm font-semibold text-foreground">
            <span className="text-primary font-bold mr-2">3</span>
            Rewrite these sentences about giving presentations using one of the modal verbs above.
          </p>
          <div className="rounded-lg bg-muted/40 border border-border p-3 text-sm">
            <strong>Example: 1</strong> I advise you to rehearse your presentation before you give it. <br />
            <em className="text-muted-foreground">→ You should rehearse your presentation before you give it.</em>
          </div>

          <div className="space-y-3">
            {rewrite.map((q) => (
              <div key={q.n} className="p-3 border border-border rounded-lg bg-card space-y-2">
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold flex-shrink-0">{q.n}</span>
                  <div className="flex-1">
                    <p className="text-sm text-foreground">{q.original}</p>
                    <p className="text-xs text-muted-foreground italic">Suggested modal: {q.hint}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 ml-6">
                  <Input
                    value={rwAns[q.n] || ""}
                    onChange={(e) => setRwAns((p) => ({ ...p, [q.n]: e.target.value }))}
                    disabled={rwRes[q.n] === "correct"}
                    className={`text-sm ${
                      rwRes[q.n] === "correct"
                        ? "border-green-500 bg-green-50 dark:bg-green-950/30"
                        : rwRes[q.n] === "incorrect"
                          ? "border-red-500 bg-red-50 dark:bg-red-950/30"
                          : ""
                    }`}
                    placeholder="Rewrite the sentence…"
                  />
                  {rwRes[q.n] === "correct" && <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />}
                  {rwRes[q.n] === "incorrect" && <XCircle className="h-4 w-4 text-red-500 flex-shrink-0" />}
                </div>
                {showRW && rwRes[q.n] === "incorrect" && (
                  <p className="text-xs text-red-600 dark:text-red-400 ml-6">
                    Suggested answer: <em>{q.answers[0].charAt(0).toUpperCase() + q.answers[0].slice(1)}.</em>
                  </p>
                )}
              </div>
            ))}
          </div>
          <div className="flex gap-3">
            <Button onClick={checkRW} className="bg-primary hover:bg-primary/90">Check Answers</Button>
            <Button onClick={resetRW} variant="outline" className="gap-2"><RotateCcw className="h-4 w-4" /> Reset</Button>
          </div>
        </CardContent>
      </Card>

      {/* Verb forms gap-fill */}
      <Card>
        <CardContent className="p-6 space-y-4">
          <p className="text-sm font-semibold text-foreground">
            <span className="text-primary font-bold mr-2">4</span>
            Read this extract from a presentation and put the verbs in brackets into the correct form.
          </p>

          <div className="rounded-lg border border-border bg-muted/30 p-5 leading-loose text-sm text-foreground">
            <p>
              Good morning, and welcome to the Strand Hotel. Thank you all very much for
              <VG n={1} />(come); some of you <VG n={2} />(travel) a long way <VG n={3} />(hear) us today,
              and I hope you <VG n={4} />(all have) good journeys. So let me <VG n={5} />(introduce) myself:
              my name's Peter Furlong, and this is my partner, Mark Davies.
            </p>
            <p className="mt-3">
              The purpose of this presentation is <VG n={6} />(explain) our business plans to you and
              hopefully to get you interested in <VG n={7} />(invest) in our new company, Clock Options Express.
            </p>
            <p className="mt-3">
              In my presentation, I <VG n={8} />(hope) to do three things. First, I <VG n={9} />(give) you a
              short summary of our main business idea. Then I <VG n={10} />(tell) you the findings of the
              market research that we <VG n={11} />(conduct), and finally I <VG n={12} />(outline) our
              financial requirements and plans, which should show you what a sound and exciting investment
              Clock Options Express <VG n={13} />(represent). If you have any questions you <VG n={14} />(like)
              to ask, please leave them to the end when I <VG n={15} />(be) very happy <VG n={16} />(answer) them.
            </p>
          </div>

          {showVG && (
            <div className="p-3 rounded-lg bg-muted/50 text-center text-sm">
              Score: <strong>{vgCorrect}/{verbGaps.length}</strong>
            </div>
          )}

          {showVG && vgCorrect < verbGaps.length && (
            <div className="p-3 rounded-lg bg-muted/50 text-xs space-y-1">
              <p className="font-medium mb-1">Suggested answers for missed gaps:</p>
              <ul className="grid sm:grid-cols-2 gap-x-4">
                {verbGaps.map((g) => vgRes[g.n] === "incorrect" && (
                  <li key={g.n} className="text-red-600 dark:text-red-400">
                    Gap {g.n} ({g.verb}): <strong>{g.answers[0]}</strong>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex gap-3">
            <Button onClick={checkVG} className="bg-primary hover:bg-primary/90">Check Answers</Button>
            <Button onClick={resetVG} variant="outline" className="gap-2"><RotateCcw className="h-4 w-4" /> Reset</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GrammarUnit12;
