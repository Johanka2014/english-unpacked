import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, XCircle, Lightbulb } from "lucide-react";
import useActivityTracking from "@/hooks/useActivityTracking";

/* ── Exercise 1: formal verbs matching ── */

const VERBS = [
  { n: 1, text: "talk about" }, { n: 2, text: "ask" }, { n: 3, text: "ask for" }, { n: 4, text: "help" },
  { n: 5, text: "think about" }, { n: 6, text: "get" }, { n: 7, text: "buy" }, { n: 8, text: "get together" },
  { n: 9, text: "let someone know" }, { n: 10, text: "get in touch with someone" },
];
const FORMAL = ["a assist", "b contact someone", "c enquire", "d meet", "e purchase", "f request", "g inform someone", "h receive", "i discuss", "j consider"];
const VERB_ANSWERS: Record<number, string> = { 1: "i", 2: "c", 3: "f", 4: "a", 5: "j", 6: "h", 7: "e", 8: "d", 9: "g", 10: "b" };

/* ── Exercise 2: rank by formality ── */

const RANK_GROUPS = [
  {
    id: "beginnings", title: "Beginnings", max: 4,
    items: [
      { id: "b1", text: "Dear Mr Green", answer: 1 },
      { id: "b2", text: "Dear John", answer: 2 },
      { id: "b3", text: "John", answer: 3 },
      { id: "b4", text: "Hi John", answer: 4 },
    ],
  },
  {
    id: "endings", title: "Endings", max: 4,
    items: [
      { id: "n1", text: "Yours sincerely", answer: 1 },
      { id: "n2", text: "Kind regards", answer: 2 },
      { id: "n3", text: "Bye for now", answer: 3 },
      { id: "n4", text: "Cheers", answer: 4 },
    ],
  },
  {
    id: "requests", title: "Requests", max: 5,
    items: [
      { id: "r1", text: "I would be grateful if you could ...", answer: 1 },
      { id: "r2", text: "Do you think you could ...", answer: 2 },
      { id: "r3", text: "Please could you ...", answer: 3 },
      { id: "r4", text: "Could you ...", answer: 4 },
      { id: "r5", text: "Can you ...", answer: 5 },
    ],
  },
  {
    id: "apologies", title: "Apologies", max: 5,
    items: [
      { id: "p1", text: "Please accept our most sincere apologies for ...", answer: 1 },
      { id: "p2", text: "I would like to offer our apologies for ...", answer: 2 },
      { id: "p3", text: "I would like to apologise for ...", answer: 3 },
      { id: "p4", text: "I'm sorry about ...", answer: 4 },
      { id: "p5", text: "Sorry about ...", answer: 5 },
    ],
  },
];

/* ── Exercise 3: formal vs informal phrase sort ── */

const PHRASES = [
  { id: "ph1", text: "to discuss the schedule for training day", answer: "F" },
  { id: "ph2", text: "Looking forward to your reply", answer: "F" },
  { id: "ph3", text: "Dear Mr Morris", answer: "F" },
  { id: "ph4", text: "but perhaps you could suggest a suitable time for the week after", answer: "F" },
  { id: "ph5", text: "Susan Jackson", answer: "F" },
  { id: "ph6", text: "My diary is very full for next week", answer: "F" },
  { id: "ph7", text: "I would like to arrange a meeting", answer: "F" },
  { id: "ph8", text: "to talk about the schedule for training day", answer: "I" },
  { id: "ph9", text: "let me know", answer: "I" },
  { id: "ph10", text: "Hi Andy", answer: "I" },
  { id: "ph11", text: "but I could manage the week after", answer: "I" },
  { id: "ph12", text: "Sue", answer: "I" },
  { id: "ph13", text: "I'm pretty booked up next week", answer: "I" },
  { id: "ph14", text: "Can we get together sometime", answer: "I" },
];

const BAD_EMAIL_PARTS = [
  "Hi there Adz",
  "Really cool presentation, thanx.",
  "asap",
  "Any thoughts on a time ☺ ?",
  "you guys",
  "READY TO START (in capitals)",
  "!!!!! (five exclamation marks)",
  "Keep smiling / Jo / xxx",
];

const WritingInternetExercise = () => {
  const track = useActivityTracking();
  const [verbSel, setVerbSel] = useState<Record<number, string>>({});
  const [checked1, setChecked1] = useState(false);
  const [rankSel, setRankSel] = useState<Record<string, string>>({});
  const [checked2, setChecked2] = useState(false);
  const [phraseSel, setPhraseSel] = useState<Record<string, string>>({});
  const [checked3, setChecked3] = useState(false);
  const [picked, setPicked] = useState<Record<string, boolean>>({});
  const [checked4, setChecked4] = useState(false);

  const total1 = VERBS.length;
  const score1 = VERBS.filter((v) => verbSel[v.n] === VERB_ANSWERS[v.n]).length;
  const total2 = RANK_GROUPS.reduce((n, g) => n + g.items.length, 0);
  const score2 = RANK_GROUPS.reduce((n, g) => n + g.items.filter((i) => rankSel[i.id] === String(i.answer)).length, 0);
  const total3 = PHRASES.length;
  const score3 = PHRASES.filter((p) => phraseSel[p.id] === p.answer).length;
  const total4 = BAD_EMAIL_PARTS.length;
  const score4 = BAD_EMAIL_PARTS.filter((p) => picked[p]).length;

  const rankOptions = (max: number) => Array.from({ length: max }, (_, i) => i + 1);

  return (
    <div className="space-y-8">
      {/* ── Exercise 1 ── */}
      <Card>
        <CardHeader>
          <CardTitle className="font-serif text-xl">1. Formal verbs</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Emails are usually shorter and more like spoken English than letters. Match each informal verb (1–10)
            with the more formal verb (a–j) with the same meaning.
          </p>
          <div className="rounded-md bg-muted/40 p-4 space-y-3">
            {VERBS.map((v) => {
              const correct = checked1 && verbSel[v.n] === VERB_ANSWERS[v.n];
              const wrong = checked1 && verbSel[v.n] !== VERB_ANSWERS[v.n];
              return (
                <div key={v.n} className="flex items-center gap-3">
                  <span className="w-6 font-semibold text-primary shrink-0">{v.n}</span>
                  <p className={`flex-1 text-sm ${correct ? "text-green-700 dark:text-green-400" : wrong ? "text-destructive" : "text-foreground"}`}>{v.text}</p>
                  <select
                    value={verbSel[v.n] || ""}
                    onChange={(e) => setVerbSel((p) => ({ ...p, [v.n]: e.target.value }))}
                    className={`rounded-md border px-2 py-1 bg-background ${correct ? "border-green-500" : wrong ? "border-destructive" : "border-input"}`}
                  >
                    <option value="">—</option>
                    {FORMAL.map((f) => (
                      <option key={f} value={f.split(" ")[0]}>{f}</option>
                    ))}
                  </select>
                  {checked1 && (correct ? <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" /> : <XCircle className="h-4 w-4 text-destructive shrink-0" />)}
                </div>
              );
            })}
          </div>
          <div className="flex items-center gap-3">
            <Button onClick={() => { setChecked1(true); track({ activityTitle: "BB Mod 4 Writing — formal verbs", activityType: "matching", score: score1, total: total1 }); }}>
              Check answers
            </Button>
            {checked1 && <span className="text-sm text-muted-foreground">{score1} / {total1} correct</span>}
          </div>
        </CardContent>
      </Card>

      {/* ── Exercise 2 ── */}
      <Card>
        <CardHeader>
          <CardTitle className="font-serif text-xl">2. How formal is it?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-muted-foreground">
            Number each list in order of how formal the expressions are (1 = most formal).
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {RANK_GROUPS.map((g) => (
              <div key={g.id} className="rounded-md bg-muted/40 p-4 space-y-3">
                <p className="font-semibold text-foreground">{g.title}</p>
                {g.items.map((i) => {
                  const correct = checked2 && rankSel[i.id] === String(i.answer);
                  const wrong = checked2 && rankSel[i.id] !== String(i.answer);
                  return (
                    <div key={i.id} className="flex items-center gap-2">
                      <select
                        value={rankSel[i.id] || ""}
                        onChange={(e) => setRankSel((p) => ({ ...p, [i.id]: e.target.value }))}
                        className={`w-16 rounded-md border px-1 py-1 bg-background ${correct ? "border-green-500" : wrong ? "border-destructive" : "border-input"}`}
                      >
                        <option value="">—</option>
                        {rankOptions(g.max).map((n) => (
                          <option key={n} value={n}>{n}</option>
                        ))}
                      </select>
                      <span className={`text-sm ${correct ? "text-green-700 dark:text-green-400" : wrong ? "text-destructive" : "text-foreground"}`}>{i.text}</span>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <Button onClick={() => { setChecked2(true); track({ activityTitle: "BB Mod 4 Writing — formality ranking", activityType: "ordering", score: score2, total: total2 }); }}>
              Check answers
            </Button>
            {checked2 && <span className="text-sm text-muted-foreground">{score2} / {total2} correct</span>}
          </div>
        </CardContent>
      </Card>

      {/* ── Exercise 3 ── */}
      <Card>
        <CardHeader>
          <CardTitle className="font-serif text-xl">3. Formal or informal email?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            These phrases come from two emails about a meeting. One is <strong>formal</strong> (to someone outside
            the company the writer doesn't know); the other is <strong>informal</strong> (to a colleague the writer
            has known for some time). Choose <strong>F</strong> or <strong>I</strong> for each phrase.
          </p>
          <div className="rounded-md bg-muted/40 p-4 space-y-3">
            {PHRASES.map((p) => {
              const correct = checked3 && phraseSel[p.id] === p.answer;
              const wrong = checked3 && phraseSel[p.id] !== p.answer;
              return (
                <div key={p.id} className="flex items-center gap-3">
                  <p className={`flex-1 text-sm ${correct ? "text-green-700 dark:text-green-400" : wrong ? "text-destructive" : "text-foreground"}`}>{p.text}</p>
                  <select
                    value={phraseSel[p.id] || ""}
                    onChange={(e) => setPhraseSel((prev) => ({ ...prev, [p.id]: e.target.value }))}
                    className={`rounded-md border px-2 py-1 bg-background ${correct ? "border-green-500" : wrong ? "border-destructive" : "border-input"}`}
                  >
                    <option value="">—</option>
                    <option value="F">Formal</option>
                    <option value="I">Informal</option>
                  </select>
                </div>
              );
            })}
          </div>
          <div className="flex items-center gap-3">
            <Button onClick={() => { setChecked3(true); track({ activityTitle: "BB Mod 4 Writing — formal vs informal", activityType: "matching", score: score3, total: total3 }); }}>
              Check answers
            </Button>
            {checked3 && <span className="text-sm text-muted-foreground">{score3} / {total3} correct</span>}
          </div>

          <Accordion type="single" collapsible>
            <AccordionItem value="models">
              <AccordionTrigger>Show the two model emails (put the phrases in order first!)</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 text-sm">
                  <div className="rounded-md border p-4 bg-background">
                    <p className="font-semibold mb-2">Formal email</p>
                    <p>Dear Mr Morris,</p>
                    <p>I would like to arrange a meeting to discuss the schedule for training day. My diary is very
                    full for next week, but perhaps you could suggest a suitable time for the week after.</p>
                    <p>Looking forward to your reply.</p>
                    <p>Susan Jackson</p>
                  </div>
                  <div className="rounded-md border p-4 bg-background">
                    <p className="font-semibold mb-2">Informal email</p>
                    <p>Hi Andy,</p>
                    <p>Can we get together sometime to talk about the schedule for training day? I'm pretty booked up
                    next week, but I could manage the week after.</p>
                    <p>Let me know.</p>
                    <p>Sue</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="rounded-md border border-border p-4 bg-muted/20 text-sm">
            <p className="font-semibold mb-1">Now you write (30–40 words)</p>
            <p className="text-muted-foreground">
              You have arranged a meeting with someone from another department, but you cannot attend. Write an email
              explaining why, apologising for the change of plan, and suggesting an alternative. You have not worked
              with this person before, so keep the tone friendly but formal.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* ── Exercise 4: the bad email ── */}
      <Card>
        <CardHeader>
          <CardTitle className="font-serif text-xl">4. How do I say it on email?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg border border-amber-300/60 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-800/40 p-4 text-sm space-y-2">
            <p className="font-semibold flex items-center gap-2"><Lightbulb className="h-4 w-4" /> Still true in 2026</p>
            <p>
              "Kind regards" is still the most usual sign-off in business email, CAPITALS still read as shouting, and
              spelling like "thanx" is still unacceptable. The one thing that has changed: the book warns against
              <em> emoticons like ☺</em> — today a single friendly <em>emoji</em> is often fine in internal emails,
              but the advice for customers and formal messages hasn't changed.
            </p>
          </div>

          <div className="rounded-md border p-4 bg-background text-sm font-mono">
            <p className="text-muted-foreground font-sans mb-2 text-xs">From: Jo &nbsp;·&nbsp; To: Adam</p>
            <p>Hi there Adz</p>
            <p>Really cool presentation, thanx. We should definitely do it again asap for those people who missed
            it. Any thoughts on a time ☺ ?</p>
            <p>I guess we just need to wait till you guys have finished the trial period and then we're READY TO
            START the new system!!!!!</p>
            <p>Keep smiling</p>
            <p>Jo xxx</p>
          </div>

          <p className="text-muted-foreground">
            The writer does not follow the advice in the article. Tick everything that should be changed
            ({total4} things), then rewrite the email yourself in a friendly but professional tone.
          </p>
          <div className="grid sm:grid-cols-2 gap-2">
            {BAD_EMAIL_PARTS.map((p) => (
              <label key={p} className="flex items-center gap-2 text-sm rounded-md border p-2 cursor-pointer hover:bg-muted/40">
                <input
                  type="checkbox"
                  checked={!!picked[p]}
                  onChange={(e) => setPicked((prev) => ({ ...prev, [p]: e.target.checked }))}
                  className="accent-primary"
                />
                {p}
              </label>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <Button onClick={() => { setChecked4(true); track({ activityTitle: "BB Mod 4 Writing — fix the bad email", activityType: "multiple-choice", score: score4, total: total4 }); }}>
              Check
            </Button>
            {checked4 && <span className="text-sm text-muted-foreground">{score4} / {total4} found — all of them need changing!</span>}
          </div>

          <Accordion type="single" collapsible>
            <AccordionItem value="rewrite">
              <AccordionTrigger>Show a suggested rewrite</AccordionTrigger>
              <AccordionContent>
                <div className="rounded-md border p-4 bg-background text-sm">
                  <p>Hi Adam,</p>
                  <p>Thanks for the presentation — it went really well. We should definitely run it again for the
                  people who missed it. Do you have any thoughts on a time?</p>
                  <p>I guess we just need to wait until you have finished the trial period, and then we'll be ready
                  to start the new system.</p>
                  <p>Best wishes,</p>
                  <p>Jo</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default WritingInternetExercise;
