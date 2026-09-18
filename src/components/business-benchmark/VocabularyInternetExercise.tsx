import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2, XCircle, Lightbulb } from "lucide-react";
import useActivityTracking from "@/hooks/useActivityTracking";

/* ── Getting started: complete the definitions ── */

const GETTING_STARTED = [
  { id: "g1", text: "____ products and services can be bought over the Internet.", answer: ["online"] },
  { id: "g2", text: "If you ____ a computer file, you can open it and read it.", answer: ["access"] },
  { id: "g3", text: "When information moves from the Internet to your computer, it ____.", answer: ["loads", "downloads", "loads/downloads"] },
];
const WORD_BANK = ["access", "task bar", "search engine", "home page", "Internet security", "key word", "loads/downloads", "online", "website address"];

/* ── Symbols matching ── */

const SYMBOLS = [
  { n: 1, sym: "@", answer: "e", example: true },
  { n: 2, sym: ".", answer: "d" },
  { n: 3, sym: "_", answer: "a" },
  { n: 4, sym: "-", answer: "b" },
  { n: 5, sym: "/", answer: "c" },
  { n: 6, sym: "\\", answer: "f" },
];
const SYMBOL_NAMES = ["a underscore", "b hyphen", "c forward slash", "d dot", "e at", "f backslash"];

/* ── Computer vocabulary matching (Personal Study Book p.12) ── */

const VOCAB = [
  { n: 1, word: "browser", answer: "d", example: true },
  { n: 2, word: "spyware", answer: "a" },
  { n: 3, word: "screensaver", answer: "g" },
  { n: 4, word: "byte", answer: "f" },
  { n: 5, word: "firewall", answer: "i" },
  { n: 6, word: "virus", answer: "h" },
  { n: 7, word: "hacker", answer: "e" },
  { n: 8, word: "spam", answer: "c" },
  { n: 9, word: "server", answer: "b" },
];
const DEFINITIONS = [
  "a A programme which secretly monitors your actions on the computer.",
  "b A computer on a network which carries out all the functions for a particular purpose, e.g. email.",
  "c Emails which have not been asked for (usually advertising). They are also called junk mail.",
  "d Software which is used to find and display webpages.",
  "e Someone who enters a computer system without permission.",
  "f A unit of storage on a computer (which can hold one character).",
  "g The picture on a computer screen when you are not using it.",
  "h A programme that enters your computer and makes copies of itself. It can destroy the information on your computer.",
  "i A programme which checks the information coming from the Internet onto your computer.",
];

/* ── Circle the correct word ── */

const CIRCLE = [
  { id: "c1", before: "I tried to send the document by email but it came back to me with a message to say that it was too big to go through the ", after: ".", options: ["screensaver", "firewall", "spam"], answer: "firewall" },
  { id: "c2", before: "My friend sent me a warning today about a new ", after: " which can damage the files on your hard drive.", options: ["virus", "server", "firewall"], answer: "virus" },
  { id: "c3", before: "Are you tired of looking at the same ", after: "? Browse our collection of pictures and download your favourite today!", options: ["hacker", "browser", "screensaver"], answer: "screensaver" },
  { id: "c4", before: "There is a possibility that ", after: " have gained access to confidential information on the computer.", options: ["browsers", "hackers", "bytes"], answer: "hackers" },
  { id: "c5", before: "Our filter will stop over 90 per cent of ", after: " from entering your inbox. Download the 30-day free trial now!", options: ["spam", "spyware", "bytes"], answer: "spam" },
  { id: "c6", before: "I'm afraid you can't check your email at the moment. The ", after: " is down.", options: ["hacker", "screensaver", "server"], answer: "server" },
];

/* ── Modern terms extension ── */

const MODERN = [
  { n: 1, word: "phishing", answer: "c" },
  { n: 2, word: "two-factor authentication (2FA)", answer: "a" },
  { n: 3, word: "cloud storage", answer: "e" },
  { n: 4, word: "password manager", answer: "b" },
  { n: 5, word: "cookie banner", answer: "f" },
  { n: 6, word: "AI chatbot", answer: "d" },
];
const MODERN_DEFS = [
  "a A extra security step where you confirm it's really you — for example with a code sent to your phone.",
  "b A tool that creates and remembers strong, unique passwords for all your accounts.",
  "c Fake emails or messages that try to trick you into giving your account details or card numbers.",
  "d A program that talks to customers on a website and can answer simple questions at any time of day.",
  "e Keeping your files on the internet (Google Drive, OneDrive, Dropbox) instead of only on your computer.",
  "f The pop-up asking you to accept or reject tracking files when you first visit a website — required by EU law.",
];

const normalize = (v: string) => v.trim().toLowerCase().replace(/\s+/g, " ");

const VocabularyInternetExercise = () => {
  const track = useActivityTracking();
  const [gsAnswers, setGsAnswers] = useState<Record<string, string>>({});
  const [checkedGs, setCheckedGs] = useState(false);
  const [symSel, setSymSel] = useState<Record<number, string>>({ 1: "e" });
  const [checkedSym, setCheckedSym] = useState(false);
  const [vocabSel, setVocabSel] = useState<Record<number, string>>({ 1: "d" });
  const [checkedVocab, setCheckedVocab] = useState(false);
  const [circleSel, setCircleSel] = useState<Record<string, string>>({});
  const [checkedCircle, setCheckedCircle] = useState(false);
  const [modernSel, setModernSel] = useState<Record<number, string>>({});
  const [checkedModern, setCheckedModern] = useState(false);

  const scoreGs = GETTING_STARTED.filter((g) => g.answer.some((a) => normalize(a) === normalize(gsAnswers[g.id] || ""))).length;
  const scoreSym = SYMBOLS.filter((s) => symSel[s.n] === s.answer).length;
  const scoreVocab = VOCAB.filter((v) => vocabSel[v.n] === v.answer).length;
  const scoreCircle = CIRCLE.filter((c) => circleSel[c.id] === c.answer).length;
  const scoreModern = MODERN.filter((m) => modernSel[m.n] === m.answer).length;

  return (
    <div className="space-y-8">
      {/* ── Getting started ── */}
      <Card>
        <CardHeader>
          <CardTitle className="font-serif text-xl">1. Getting started — internet words</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {WORD_BANK.map((w) => (
              <span key={w} className="px-2 py-1 rounded bg-muted text-sm text-foreground">{w}</span>
            ))}
          </div>
          <p className="text-muted-foreground">Complete the definitions (1–3) using three of the words in the box.</p>
          <div className="space-y-3">
            {GETTING_STARTED.map((g, i) => {
              const correct = checkedGs && g.answer.some((a) => normalize(a) === normalize(gsAnswers[g.id] || ""));
              const wrong = checkedGs && !correct;
              return (
                <div key={g.id} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                  <div className="flex-1 text-sm text-foreground">
                    <span className="font-semibold text-primary mr-1">{i + 1}.</span>
                    <Input
                      value={gsAnswers[g.id] || ""}
                      onChange={(e) => setGsAnswers((p) => ({ ...p, [g.id]: e.target.value }))}
                      className={`inline-block w-36 mx-1 ${correct ? "border-green-500 bg-green-50 dark:bg-green-950/20" : wrong ? "border-destructive bg-destructive/10" : ""}`}
                    />
                    {g.text}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex items-center gap-3">
            <Button onClick={() => { setCheckedGs(true); track({ activityTitle: "BB Mod 4 Vocab — getting started", activityType: "gap-fill", score: scoreGs, total: GETTING_STARTED.length }); }}>
              Check answers
            </Button>
            {checkedGs && <span className="text-sm text-muted-foreground">{scoreGs} / {GETTING_STARTED.length} correct</span>}
          </div>
        </CardContent>
      </Card>

      {/* ── Symbols ── */}
      <Card>
        <CardHeader>
          <CardTitle className="font-serif text-xl">2. Symbols in a website address</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Match each symbol from a website or email address (1–6) with its name (a–f). You need these to give your
            email address out loud — in any language.
          </p>
          <div className="rounded-md bg-muted/40 p-4 space-y-3 max-w-md">
            {SYMBOLS.map((s) => {
              const correct = checkedSym && symSel[s.n] === s.answer;
              const wrong = checkedSym && symSel[s.n] !== s.answer;
              return (
                <div key={s.n} className="flex items-center gap-3">
                  <span className="w-5 font-semibold text-primary">{s.n}</span>
                  <code className={`flex-1 text-lg px-2 rounded text-center max-w-[80px] ${correct ? "bg-green-50 dark:bg-green-950/20" : wrong ? "bg-destructive/10" : ""}`}>{s.sym}</code>
                  <select
                    value={symSel[s.n] || ""}
                    disabled={s.example}
                    onChange={(e) => setSymSel((p) => ({ ...p, [s.n]: e.target.value }))}
                    className={`rounded-md border px-2 py-1 bg-background ${correct ? "border-green-500" : wrong ? "border-destructive" : "border-input"}`}
                  >
                    <option value="">—</option>
                    {SYMBOL_NAMES.map((nm) => (
                      <option key={nm} value={nm.split(" ")[0]}>{nm}</option>
                    ))}
                  </select>
                  {checkedSym && (correct ? <CheckCircle2 className="h-4 w-4 text-green-600" /> : wrong ? <XCircle className="h-4 w-4 text-destructive" /> : null)}
                </div>
              );
            })}
          </div>
          <div className="flex items-center gap-3">
            <Button onClick={() => { setCheckedSym(true); track({ activityTitle: "BB Mod 4 Vocab — address symbols", activityType: "matching", score: scoreSym, total: SYMBOLS.length }); }}>
              Check answers
            </Button>
            {checkedSym && <span className="text-sm text-muted-foreground">{scoreSym} / {SYMBOLS.length} correct</span>}
          </div>
        </CardContent>
      </Card>

      {/* ── Computer vocabulary ── */}
      <Card>
        <CardHeader>
          <CardTitle className="font-serif text-xl">3. Computer vocabulary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">Match the words (1–9) with the correct definitions (a–i).</p>
          <div className="rounded-md bg-muted/40 p-4 space-y-3">
            {VOCAB.map((v) => {
              const correct = checkedVocab && vocabSel[v.n] === v.answer;
              const wrong = checkedVocab && vocabSel[v.n] !== v.answer;
              return (
                <div key={v.n} className="flex items-center gap-3">
                  <span className="w-5 font-semibold text-primary shrink-0">{v.n}</span>
                  <p className={`w-28 shrink-0 text-sm font-medium ${correct ? "text-green-700 dark:text-green-400" : wrong ? "text-destructive" : "text-foreground"}`}>{v.word}</p>
                  <select
                    value={vocabSel[v.n] || ""}
                    disabled={v.example}
                    onChange={(e) => setVocabSel((p) => ({ ...p, [v.n]: e.target.value }))}
                    className={`rounded-md border px-2 py-1 bg-background w-20 ${correct ? "border-green-500" : wrong ? "border-destructive" : "border-input"}`}
                  >
                    <option value="">—</option>
                    {DEFINITIONS.map((d) => (
                      <option key={d} value={d.split(" ")[0]}>{d.split(" ")[0]}</option>
                    ))}
                  </select>
                  {checkedVocab && (correct ? <CheckCircle2 className="h-4 w-4 text-green-600" /> : wrong ? <XCircle className="h-4 w-4 text-destructive" /> : null)}
                </div>
              );
            })}
          </div>
          <div className="rounded-md border p-4 bg-background text-sm space-y-1">
            {DEFINITIONS.map((d) => (
              <p key={d} className="text-muted-foreground">{d}</p>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <Button onClick={() => { setCheckedVocab(true); track({ activityTitle: "BB Mod 4 Vocab — computer vocabulary", activityType: "matching", score: scoreVocab, total: VOCAB.length }); }}>
              Check answers
            </Button>
            {checkedVocab && <span className="text-sm text-muted-foreground">{scoreVocab} / {VOCAB.length} correct</span>}
          </div>

          <div className="pt-4 border-t border-border space-y-3">
            <p className="font-medium">Circle the correct word in each sentence.</p>
            {CIRCLE.map((c, i) => {
              const correct = checkedCircle && circleSel[c.id] === c.answer;
              const wrong = checkedCircle && circleSel[c.id] !== c.answer;
              return (
                <div key={c.id} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                  <div className="flex-1 text-sm text-foreground">
                    <span className="font-semibold text-primary mr-1">{i + 1}.</span>
                    {c.before}
                    <select
                      value={circleSel[c.id] || ""}
                      onChange={(e) => setCircleSel((p) => ({ ...p, [c.id]: e.target.value }))}
                      className={`mx-1 rounded-md border px-2 py-0.5 bg-background ${correct ? "border-green-500 bg-green-50 dark:bg-green-950/20" : wrong ? "border-destructive bg-destructive/10" : "border-input"}`}
                    >
                      <option value="">—</option>
                      {c.options.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                    {c.after}
                  </div>
                  {checkedCircle && (correct ? <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" /> : wrong ? <XCircle className="h-4 w-4 text-destructive shrink-0" /> : null)}
                </div>
              );
            })}
            <div className="flex items-center gap-3">
              <Button onClick={() => { setCheckedCircle(true); track({ activityTitle: "BB Mod 4 Vocab — circle the word", activityType: "multiple-choice", score: scoreCircle, total: CIRCLE.length }); }}>
                Check answers
              </Button>
              {checkedCircle && <span className="text-sm text-muted-foreground">{scoreCircle} / {CIRCLE.length} correct</span>}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ── Modern extension ── */}
      <Card>
        <CardHeader>
          <CardTitle className="font-serif text-xl">4. Internet words the book couldn't teach you</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg border border-amber-300/60 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-800/40 p-4 text-sm flex gap-2">
            <Lightbulb className="h-4 w-4 shrink-0 mt-0.5" />
            <p className="text-muted-foreground">
              These terms are essential in business English today — and didn't exist (or weren't common) when this
              book was published in 2006. Match each word (1–6) with its definition (a–f).
            </p>
          </div>
          <div className="rounded-md bg-muted/40 p-4 space-y-3">
            {MODERN.map((m) => {
              const correct = checkedModern && modernSel[m.n] === m.answer;
              const wrong = checkedModern && modernSel[m.n] !== m.answer;
              return (
                <div key={m.n} className="flex items-center gap-3">
                  <span className="w-5 font-semibold text-primary shrink-0">{m.n}</span>
                  <p className={`flex-1 text-sm font-medium ${correct ? "text-green-700 dark:text-green-400" : wrong ? "text-destructive" : "text-foreground"}`}>{m.word}</p>
                  <select
                    value={modernSel[m.n] || ""}
                    onChange={(e) => setModernSel((p) => ({ ...p, [m.n]: e.target.value }))}
                    className={`rounded-md border px-2 py-1 bg-background w-20 ${correct ? "border-green-500" : wrong ? "border-destructive" : "border-input"}`}
                  >
                    <option value="">—</option>
                    {MODERN_DEFS.map((d) => (
                      <option key={d} value={d.split(" ")[0]}>{d.split(" ")[0]}</option>
                    ))}
                  </select>
                  {checkedModern && (correct ? <CheckCircle2 className="h-4 w-4 text-green-600" /> : wrong ? <XCircle className="h-4 w-4 text-destructive" /> : null)}
                </div>
              );
            })}
          </div>
          <div className="rounded-md border p-4 bg-background text-sm space-y-1">
            {MODERN_DEFS.map((d) => (
              <p key={d} className="text-muted-foreground">{d}</p>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <Button onClick={() => { setCheckedModern(true); track({ activityTitle: "BB Mod 4 Vocab — modern internet terms", activityType: "matching", score: scoreModern, total: MODERN.length }); }}>
              Check answers
            </Button>
            {checkedModern && <span className="text-sm text-muted-foreground">{scoreModern} / {MODERN.length} correct</span>}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VocabularyInternetExercise;
