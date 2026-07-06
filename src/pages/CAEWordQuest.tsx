import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import confetti from "canvas-confetti";
import {
  Flame, Zap, Sparkles, Brain, Headphones, Keyboard, Layers, Home as HomeIcon,
  BookOpen, Gamepad2, Trophy, Volume2, X, Check, ChevronLeft, Search,
  AlertTriangle, Target, BookCheck,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import {
  ALL_WORDS, TOPICS, TOPIC_META, wordsByTopic, type Topic, type Word,
} from "@/data/caeWordsData";
import { useCaeProgress, BADGES, level, xpForLevel, xpToNext } from "@/store/caeProgress";
import { playTone, vibrate, speak } from "@/lib/petSound";

// ─────────────────────────────────────────────────────────────
// Utilities
// ─────────────────────────────────────────────────────────────

const shuffle = <T,>(arr: T[]) => [...arr].sort(() => Math.random() - 0.5);
type GameMode = "flashcards" | "quiz" | "spell" | "listen";
const VALID_MODES: GameMode[] = ["flashcards", "quiz", "spell", "listen"];

function pickWords(mode: GameMode, topic: Topic | undefined, tricky: boolean, trickyIds: string[], size = 10): Word[] {
  let pool: Word[];
  if (tricky) {
    pool = ALL_WORDS.filter((w) => trickyIds.includes(w.id));
    if (pool.length < 4) pool = ALL_WORDS;
  } else if (topic) {
    pool = wordsByTopic(topic);
  } else {
    pool = ALL_WORDS;
  }
  if (mode === "spell" || mode === "listen") {
    const single = pool.filter((w) => /^[a-z]+$/i.test(w.word));
    if (single.length >= size) pool = single;
  }
  return shuffle(pool).slice(0, size);
}

function distractors(word: Word, count = 3): Word[] {
  const others = ALL_WORDS.filter((w) => w.id !== word.id);
  return shuffle(others).slice(0, count);
}

// ─────────────────────────────────────────────────────────────
// Scoped styling (game gradients & animations)
// ─────────────────────────────────────────────────────────────

const PetStyles = () => (
  <style>{`
    .pet-wq { --pet-hero: linear-gradient(135deg,#6d28d9,#c026d3);
      --pet-accent-grad: linear-gradient(135deg,#a3e635,#facc15);
      --pet-shadow-card: 0 10px 30px -12px rgba(109,40,217,.35);
      font-family: "Nunito", system-ui, sans-serif; }
    .pet-wq .bg-pet-hero { background-image: var(--pet-hero); }
    .pet-wq .bg-pet-accent { background-image: var(--pet-accent-grad); }
    .pet-wq .shadow-pet-card { box-shadow: var(--pet-shadow-card); }
    .pet-wq .font-display { font-family: "Fredoka", "Nunito", system-ui, sans-serif; letter-spacing: -0.01em; }
    @keyframes pet-pop { 0%{transform:scale(.85);opacity:0} 60%{transform:scale(1.06);opacity:1} 100%{transform:scale(1)} }
    .pet-wq .animate-pet-pop { animation: pet-pop .3s ease-out; }
    @keyframes pet-shake { 0%,100%{transform:translateX(0)} 20%,60%{transform:translateX(-6px)} 40%,80%{transform:translateX(6px)} }
    .pet-wq .animate-pet-shake { animation: pet-shake .4s; }
  `}</style>
);

// ─────────────────────────────────────────────────────────────
// URL helpers
// ─────────────────────────────────────────────────────────────

type View = "home" | "play" | "play-mode" | "words" | "topic" | "word" | "progress" | "challenge";

function useView() {
  const [params, setParams] = useSearchParams();
  const view = (params.get("view") as View) || "home";
  const setView = (v: View, extra: Record<string, string> = {}) => {
    const next = new URLSearchParams();
    next.set("view", v);
    Object.entries(extra).forEach(([k, val]) => next.set(k, val));
    setParams(next);
  };
  return {
    view,
    params,
    setView,
    mode: params.get("mode") as GameMode | null,
    topic: params.get("topic") as Topic | null,
    wordId: params.get("id"),
    tricky: params.get("tricky") === "1",
  };
}

// ─────────────────────────────────────────────────────────────
// Top-level page
// ─────────────────────────────────────────────────────────────

const CAEWordQuest = () => {
  const { view, setView, mode, topic, wordId, tricky } = useView();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view, mode, topic, wordId]);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="CAE Word Quest — Cambridge C1 Vocabulary Game"
        description="Gamified vocabulary trainer for the Cambridge CAE (C1) exam — flashcards, quizzes, spelling and daily challenges."
      />
      <Navigation />
      <PetStyles />
      <main className="pet-wq container mx-auto px-4 py-10">
        <div className="mx-auto max-w-md">
          <TopTabs view={view} setView={setView} />
          <div className="pt-4">
            {view === "home" && <HomeView setView={setView} />}
            {view === "play" && <PlayIndexView setView={setView} />}
            {view === "play-mode" && mode && VALID_MODES.includes(mode) && (
              <PlayRound
                mode={mode}
                topic={topic ?? undefined}
                tricky={tricky}
                onExit={() => setView("play")}
              />
            )}
            {view === "words" && <WordsView setView={setView} />}
            {view === "topic" && topic && <TopicView topic={topic} setView={setView} />}
            {view === "word" && wordId && <WordView id={wordId} setView={setView} />}
            {view === "progress" && <ProgressView />}
            {view === "challenge" && <ChallengeView setView={setView} />}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CAEWordQuest;

// ─────────────────────────────────────────────────────────────
// Top tabs (replaces bottom-nav)
// ─────────────────────────────────────────────────────────────

function TopTabs({ view, setView }: { view: View; setView: (v: View) => void }) {
  const items = [
    { v: "home" as const, label: "Home", Icon: HomeIcon },
    { v: "words" as const, label: "Words", Icon: BookOpen },
    { v: "play" as const, label: "Play", Icon: Gamepad2 },
    { v: "progress" as const, label: "Progress", Icon: Trophy },
  ];
  const active = (v: string) =>
    v === view ||
    (v === "play" && (view === "play-mode" || view === "challenge")) ||
    (v === "words" && (view === "topic" || view === "word"));
  return (
    <nav className="rounded-2xl border border-border bg-card p-1 shadow-sm">
      <ul className="flex items-stretch justify-around">
        {items.map(({ v, label, Icon }) => (
          <li key={v} className="flex-1">
            <button
              onClick={() => setView(v)}
              className={`flex w-full flex-col items-center gap-1 rounded-xl py-2 text-xs transition-colors ${
                active(v) ? "bg-primary/10 text-primary font-semibold" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon className="h-5 w-5" strokeWidth={active(v) ? 2.5 : 2} />
              <span>{label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// ─────────────────────────────────────────────────────────────
// Home
// ─────────────────────────────────────────────────────────────

const homeModes = [
  { mode: "flashcards" as const, label: "Flashcards", icon: Layers, color: "from-violet-500 to-fuchsia-500" },
  { mode: "quiz" as const, label: "Quiz", icon: Brain, color: "from-sky-500 to-cyan-500" },
  { mode: "spell" as const, label: "Spelling", icon: Keyboard, color: "from-amber-500 to-orange-500" },
  { mode: "listen" as const, label: "Listen & Spell", icon: Headphones, color: "from-emerald-500 to-teal-500" },
];

function HomeView({ setView }: { setView: (v: View, extra?: Record<string, string>) => void }) {
  const { xp, streak, correctTotal } = useCaeProgress();
  const lvl = level(xp);
  const curBase = xpForLevel(lvl);
  const nextBase = xpForLevel(lvl + 1);
  const pct = Math.min(100, ((xp - curBase) / (nextBase - curBase)) * 100);

  return (
    <div>
      <header className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">CAE Vocab</p>
        <h1 className="mt-1 text-3xl font-bold text-balance">
          Ready to <span className="text-primary">level up</span>?
        </h1>
      </header>

      <div className="bg-pet-hero relative overflow-hidden rounded-3xl p-5 text-white shadow-pet-card">
        <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
        <div className="relative flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider opacity-80">Level</div>
            <div className="font-display text-5xl font-bold leading-none">{lvl}</div>
          </div>
          <div className="text-right">
            <div className="flex items-center justify-end gap-1.5 text-sm font-bold">
              <Flame className="h-4 w-4 text-orange-300" />
              <span>{streak} day{streak === 1 ? "" : "s"}</span>
            </div>
            <div className="mt-1 flex items-center justify-end gap-1.5 text-sm font-bold">
              <Zap className="h-4 w-4 text-yellow-300" />
              <span>{xp} XP</span>
            </div>
          </div>
        </div>
        <div className="relative mt-5">
          <div className="h-2.5 overflow-hidden rounded-full bg-white/20">
            <div className="h-full rounded-full bg-pet-accent transition-all duration-500" style={{ width: `${pct}%` }} />
          </div>
          <div className="mt-1.5 text-xs opacity-80">{xpToNext(xp)} XP to level {lvl + 1}</div>
        </div>
      </div>

      <button
        onClick={() => setView("challenge")}
        className="mt-4 flex w-full items-center gap-3 rounded-2xl border border-border bg-card p-4 text-left shadow-sm transition-transform active:scale-[0.98]"
      >
        <div className="bg-pet-accent flex h-12 w-12 items-center justify-center rounded-xl text-2xl">⏱️</div>
        <div className="flex-1">
          <div className="font-bold">Daily Challenge</div>
          <div className="text-xs text-muted-foreground">60 seconds · mixed words · big XP</div>
        </div>
        <Sparkles className="h-5 w-5 text-primary" />
      </button>

      <h2 className="mb-3 mt-6 text-lg font-bold">Practice modes</h2>
      <div className="grid grid-cols-2 gap-3">
        {homeModes.map((m) => (
          <button
            key={m.mode}
            onClick={() => setView("play-mode", { mode: m.mode })}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-4 text-left shadow-sm transition active:scale-[0.97]"
          >
            <div className={`mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${m.color} text-white shadow-md`}>
              <m.icon className="h-5 w-5" />
            </div>
            <div className="font-semibold">{m.label}</div>
            <div className="text-xs text-muted-foreground">10 questions</div>
          </button>
        ))}
      </div>

      <button
        onClick={() => setView("words")}
        className="mt-4 flex w-full items-center justify-between rounded-2xl border border-dashed border-border bg-muted/40 p-4"
      >
        <div className="text-left">
          <div className="font-semibold">Browse all words</div>
          <div className="text-xs text-muted-foreground">By topic or A–Z</div>
        </div>
        <span className="text-xl">📚</span>
      </button>

      <p className="mt-6 text-center text-xs text-muted-foreground">
        {correctTotal} correct answers so far · keep going! 🚀
      </p>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Play index
// ─────────────────────────────────────────────────────────────

function PlayIndexView({ setView }: { setView: (v: View, extra?: Record<string, string>) => void }) {
  const tricky = useCaeProgress((s) => s.trickyWordIds);
  const modes = [
    { mode: "flashcards" as const, label: "Flashcards", desc: "Flip & rate yourself", icon: Layers, color: "from-violet-500 to-fuchsia-500" },
    { mode: "quiz" as const, label: "Multiple choice", desc: "Pick the right meaning", icon: Brain, color: "from-sky-500 to-cyan-500" },
    { mode: "spell" as const, label: "Spelling", desc: "Type the word from a clue", icon: Keyboard, color: "from-amber-500 to-orange-500" },
    { mode: "listen" as const, label: "Listen & spell", desc: "Hear it, then spell it", icon: Headphones, color: "from-emerald-500 to-teal-500" },
  ];
  return (
    <div>
      <h1 className="mb-1 text-2xl font-bold">Play</h1>
      <p className="mb-5 text-sm text-muted-foreground">Pick a mode and start a 10-question round.</p>
      <div className="space-y-3">
        {modes.map((m) => (
          <button
            key={m.mode}
            onClick={() => setView("play-mode", { mode: m.mode })}
            className="flex w-full items-center gap-4 rounded-2xl border border-border bg-card p-4 text-left transition active:scale-[0.98]"
          >
            <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${m.color} text-white shadow-md`}>
              <m.icon className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <div className="font-bold">{m.label}</div>
              <div className="text-xs text-muted-foreground">{m.desc}</div>
            </div>
          </button>
        ))}
      </div>
      {tricky.length > 0 && (
        <button
          onClick={() => setView("play-mode", { mode: "quiz", tricky: "1" })}
          className="mt-5 flex w-full items-center gap-3 rounded-2xl border-2 border-dashed border-amber-400/50 bg-amber-50 p-4 text-left"
        >
          <AlertTriangle className="h-6 w-6 text-amber-600" />
          <div className="flex-1">
            <div className="font-bold">Tricky words ({tricky.length})</div>
            <div className="text-xs text-muted-foreground">Review words you got wrong</div>
          </div>
        </button>
      )}
      <button
        onClick={() => setView("challenge")}
        className="bg-pet-hero mt-5 block w-full rounded-2xl p-5 text-center text-white shadow-pet-card"
      >
        <div className="text-3xl">⏱️</div>
        <div className="mt-1 font-display text-xl font-bold">Daily Challenge</div>
        <div className="text-xs opacity-90">60 seconds, mixed modes</div>
      </button>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Play round (flashcards / quiz / spell / listen)
// ─────────────────────────────────────────────────────────────

function PlayRound({ mode, topic, tricky, onExit }: { mode: GameMode; topic?: Topic; tricky: boolean; onExit: () => void }) {
  const trickyIds = useCaeProgress((s) => s.trickyWordIds);
  const recordAnswer = useCaeProgress((s) => s.recordAnswer);
  const finishRound = useCaeProgress((s) => s.finishRound);
  const soundOn = useCaeProgress((s) => s.soundOn);

  const [words] = useState(() => pickWords(mode, topic, tricky, trickyIds));
  const [idx, setIdx] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [done, setDone] = useState(false);
  const [earnedBadges, setEarnedBadges] = useState<string[]>([]);
  const startedAt = useRef(Date.now());
  const word = words[idx];
  const total = words.length;

  function next(wasCorrect: boolean) {
    if (wasCorrect) setCorrect((c) => c + 1);
    if (idx + 1 >= total) {
      const newCorrect = correct + (wasCorrect ? 1 : 0);
      const earned = finishRound(newCorrect, total, topic, Date.now() - startedAt.current);
      setEarnedBadges(earned);
      setDone(true);
      if (newCorrect === total) {
        confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
        playTone("win", soundOn);
      }
    } else {
      setIdx((i) => i + 1);
    }
  }

  function handleAnswer(wasCorrect: boolean) {
    recordAnswer(word.id, wasCorrect);
    if (wasCorrect) { playTone("correct", soundOn); vibrate(20); }
    else { playTone("wrong", soundOn); vibrate([30, 40, 30]); }
    next(wasCorrect);
  }

  if (words.length === 0) {
    return (
      <div className="rounded-2xl border border-border bg-card p-6 text-center">
        <p>No words available for this round.</p>
        <button onClick={onExit} className="mt-3 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground">Back</button>
      </div>
    );
  }

  if (done) {
    const pct = Math.round((correct / total) * 100);
    return (
      <div className="rounded-3xl border border-border bg-card p-6 text-center shadow-pet-card">
        <div className="text-6xl">{pct === 100 ? "🏆" : pct >= 70 ? "🎉" : pct >= 40 ? "👍" : "💪"}</div>
        <h2 className="mt-2 font-display text-2xl font-bold">{correct} / {total}</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          {pct === 100 ? "Perfect round! +50 XP bonus" : `${pct}% — keep going!`}
        </p>
        {earnedBadges.length > 0 && (
          <div className="bg-pet-accent mt-4 rounded-2xl p-4">
            <p className="text-xs font-bold uppercase">Badge unlocked!</p>
            {earnedBadges.map((b) => {
              const def = BADGES.find((x) => x.id === b);
              if (!def) return null;
              return (
                <div key={b} className="mt-2 flex items-center justify-center gap-2">
                  <span className="text-2xl">{def.emoji}</span>
                  <span className="font-bold">{def.name}</span>
                </div>
              );
            })}
          </div>
        )}
        <div className="mt-5 flex gap-2">
          <button onClick={onExit} className="flex-1 rounded-full border border-border bg-background py-3 text-sm font-semibold">Done</button>
          <button onClick={() => window.location.reload()} className="flex-1 rounded-full bg-primary py-3 text-sm font-semibold text-primary-foreground shadow-pet-card">Play again</button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-4 flex items-center gap-3">
        <button onClick={onExit} aria-label="Quit" className="rounded-full bg-muted p-2"><X className="h-4 w-4" /></button>
        <div className="flex-1">
          <div className="h-2 overflow-hidden rounded-full bg-muted">
            <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${(idx / total) * 100}%` }} />
          </div>
        </div>
        <div className="text-xs font-bold tabular-nums text-muted-foreground">{idx + 1}/{total}</div>
      </div>
      {mode === "flashcards" && <FlashcardView key={word.id} word={word} onAnswer={handleAnswer} />}
      {mode === "quiz" && <QuizView key={word.id} word={word} onAnswer={handleAnswer} />}
      {mode === "spell" && <SpellView key={word.id} word={word} onAnswer={handleAnswer} listen={false} />}
      {mode === "listen" && <SpellView key={word.id} word={word} onAnswer={handleAnswer} listen={true} />}
    </div>
  );
}

function FlashcardView({ word, onAnswer }: { word: Word; onAnswer: (c: boolean) => void }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div>
      <button onClick={() => setFlipped((f) => !f)} className="block w-full text-left">
        <div className="bg-pet-hero animate-pet-pop relative flex min-h-[260px] flex-col items-center justify-center rounded-3xl p-6 text-center text-white shadow-pet-card">
          {!flipped ? (
            <>
              <p className="text-xs font-semibold uppercase tracking-wider opacity-80">Word</p>
              <h2 className="mt-2 font-display text-4xl font-bold">{word.word}</h2>
              <p className="mt-1 text-sm italic opacity-90">{word.pos}</p>
              <p className="mt-6 text-xs opacity-80">Tap to flip</p>
            </>
          ) : (
            <>
              <p className="text-xs font-semibold uppercase tracking-wider opacity-80">Meaning</p>
              <p className="mt-3 text-lg font-medium leading-snug text-balance">{word.definition}</p>
              {word.example && <p className="mt-3 text-sm italic opacity-90">"{word.example}"</p>}
            </>
          )}
        </div>
      </button>
      <div className="mt-4 grid grid-cols-3 gap-2">
        <button onClick={() => onAnswer(false)} className="rounded-2xl border-2 border-destructive/40 bg-destructive/10 py-3 text-sm font-bold text-destructive">Again</button>
        <button onClick={() => onAnswer(true)} className="rounded-2xl border-2 border-amber-400/40 bg-amber-50 py-3 text-sm font-bold text-amber-700">Good</button>
        <button onClick={() => onAnswer(true)} className="rounded-2xl border-2 border-emerald-400/40 bg-emerald-50 py-3 text-sm font-bold text-emerald-700">Easy</button>
      </div>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Self-rate: "Again" counts as wrong, "Good"/"Easy" as correct.
      </p>
    </div>
  );
}

function QuizView({ word, onAnswer }: { word: Word; onAnswer: (c: boolean) => void }) {
  const options = useMemo(() => shuffle([word, ...distractors(word, 3)]), [word]);
  const [picked, setPicked] = useState<string | null>(null);
  function pick(id: string) {
    if (picked) return;
    setPicked(id);
    setTimeout(() => onAnswer(id === word.id), 800);
  }
  return (
    <div>
      <div className="bg-pet-hero animate-pet-pop rounded-3xl p-6 text-center text-white shadow-pet-card">
        <p className="text-xs font-semibold uppercase tracking-wider opacity-80">What does this mean?</p>
        <h2 className="mt-2 font-display text-3xl font-bold">{word.word}</h2>
        <p className="mt-1 text-sm italic opacity-90">{word.pos}</p>
      </div>
      <div className="mt-5 space-y-2">
        {options.map((opt) => {
          const isRight = opt.id === word.id;
          const isPicked = picked === opt.id;
          let cls = "border-border bg-card";
          if (picked) {
            if (isRight) cls = "border-emerald-400 bg-emerald-50";
            else if (isPicked) cls = "border-destructive bg-destructive/15 animate-pet-shake";
            else cls = "border-border bg-card opacity-60";
          }
          return (
            <button key={opt.id} onClick={() => pick(opt.id)} disabled={!!picked}
              className={`flex w-full items-center justify-between gap-3 rounded-2xl border-2 p-4 text-left text-sm transition ${cls}`}>
              <span className="flex-1">{opt.definition}</span>
              {picked && isRight && <Check className="h-5 w-5 text-emerald-600" />}
              {picked && isPicked && !isRight && <X className="h-5 w-5 text-destructive" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function SpellView({ word, onAnswer, listen }: { word: Word; onAnswer: (c: boolean) => void; listen: boolean }) {
  const [val, setVal] = useState("");
  const [result, setResult] = useState<"none" | "right" | "wrong">("none");
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
    if (listen) speak(word.word);
  }, [word.id, listen]);
  function submit(e?: React.FormEvent) {
    e?.preventDefault();
    if (result !== "none") return;
    const ok = val.trim().toLowerCase() === word.word.toLowerCase();
    setResult(ok ? "right" : "wrong");
    setTimeout(() => onAnswer(ok), 1200);
  }
  return (
    <div>
      <div className="bg-pet-hero animate-pet-pop rounded-3xl p-6 text-center text-white shadow-pet-card">
        {listen ? (
          <>
            <p className="text-xs font-semibold uppercase tracking-wider opacity-80">Listen & spell</p>
            <button onClick={() => speak(word.word)} className="mx-auto mt-3 flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur transition active:scale-95">
              <Volume2 className="h-9 w-9" />
            </button>
            <p className="mt-3 text-xs opacity-80">Tap to hear again</p>
          </>
        ) : (
          <>
            <p className="text-xs font-semibold uppercase tracking-wider opacity-80">Spell the word</p>
            <p className="mt-3 text-lg font-medium leading-snug text-balance">{word.definition}</p>
            <p className="mt-2 text-xs italic opacity-90">({word.pos})</p>
          </>
        )}
      </div>
      <form onSubmit={submit} className="mt-5">
        <input
          ref={inputRef} value={val} onChange={(e) => setVal(e.target.value)}
          autoCapitalize="off" autoCorrect="off" autoComplete="off" spellCheck={false}
          placeholder="Type the word..." disabled={result !== "none"}
          className={`w-full rounded-2xl border-2 bg-card p-4 text-center text-lg font-bold tracking-wide outline-none transition ${
            result === "right" ? "border-emerald-400 bg-emerald-50"
            : result === "wrong" ? "border-destructive bg-destructive/15 animate-pet-shake"
            : "border-border focus:border-primary"
          }`}
        />
        {result === "wrong" && (
          <p className="mt-2 text-center text-sm">
            Correct spelling: <span className="font-bold text-emerald-600">{word.word}</span>
          </p>
        )}
        <button type="submit" disabled={!val.trim() || result !== "none"}
          className="mt-3 w-full rounded-full bg-primary py-3 text-sm font-bold text-primary-foreground shadow-pet-card disabled:opacity-50">
          Check
        </button>
      </form>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Words / Topic / Word
// ─────────────────────────────────────────────────────────────

const LETTERS = "abcdefghijklmnopqrstuvwxyz".split("");

function WordsView({ setView }: { setView: (v: View, extra?: Record<string, string>) => void }) {
  const [tab, setTab] = useState<"topic" | "az">("topic");
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    if (!query.trim()) return ALL_WORDS;
    const q = query.toLowerCase();
    return ALL_WORDS.filter((w) => w.word.toLowerCase().includes(q) || w.definition.toLowerCase().includes(q));
  }, [query]);
  return (
    <div>
      <h1 className="mb-1 text-2xl font-bold">All words</h1>
      <p className="mb-4 text-sm text-muted-foreground">{ALL_WORDS.length} CAE vocabulary words</p>
      <div className="relative mb-4">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input value={query} onChange={(e) => setQuery(e.target.value)}
          placeholder="Search words or meanings..."
          className="w-full rounded-2xl border border-border bg-card py-3 pl-10 pr-3 text-sm outline-none focus:border-primary" />
      </div>
      {!query && (
        <div className="mb-4 inline-flex rounded-full bg-muted p-1 text-sm font-semibold">
          <button onClick={() => setTab("topic")}
            className={`rounded-full px-4 py-1.5 transition ${tab === "topic" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"}`}>
            By topic
          </button>
          <button onClick={() => setTab("az")}
            className={`rounded-full px-4 py-1.5 transition ${tab === "az" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"}`}>
            A–Z
          </button>
        </div>
      )}
      {query ? (
        <WordList words={filtered} setView={setView} />
      ) : tab === "topic" ? (
        <div className="grid grid-cols-2 gap-3">
          {TOPICS.map((t) => {
            const meta = TOPIC_META[t];
            const count = wordsByTopic(t).length;
            return (
              <button key={t} onClick={() => setView("topic", { topic: t })}
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${meta.gradient} p-4 text-left text-white shadow-pet-card transition active:scale-[0.97]`}>
                <div className="text-3xl">{meta.emoji}</div>
                <div className="mt-2 text-sm font-bold leading-tight">{t}</div>
                <div className="mt-0.5 text-xs opacity-90">{count} words</div>
              </button>
            );
          })}
        </div>
      ) : (
        <div className="space-y-4">
          {LETTERS.map((l) => {
            const ws = ALL_WORDS.filter((w) => w.word[0].toLowerCase() === l);
            if (ws.length === 0) return null;
            return (
              <section key={l}>
                <h2 className="mb-2 text-lg font-bold uppercase text-primary">{l}</h2>
                <WordList words={ws} setView={setView} />
              </section>
            );
          })}
        </div>
      )}
    </div>
  );
}

function WordList({ words, setView }: { words: Word[]; setView: (v: View, extra?: Record<string, string>) => void }) {
  if (words.length === 0) return <p className="text-sm text-muted-foreground">No words match.</p>;
  return (
    <ul className="space-y-2">
      {words.map((w) => (
        <li key={w.id}>
          <button onClick={() => setView("word", { id: w.id })}
            className="flex w-full items-start gap-3 rounded-xl border border-border bg-card p-3 text-left transition active:scale-[0.99]">
            <div className="flex-1">
              <div className="flex items-baseline gap-2">
                <span className="font-bold">{w.word}</span>
                <span className="text-xs italic text-muted-foreground">{w.pos}</span>
              </div>
              <p className="mt-0.5 line-clamp-2 text-sm text-muted-foreground">{w.definition}</p>
            </div>
          </button>
        </li>
      ))}
    </ul>
  );
}

function TopicView({ topic, setView }: { topic: Topic; setView: (v: View, extra?: Record<string, string>) => void }) {
  if (!TOPICS.includes(topic)) {
    return (
      <div>
        <p>Topic not found.</p>
        <button onClick={() => setView("words")} className="text-primary underline">Back</button>
      </div>
    );
  }
  const meta = TOPIC_META[topic];
  const words = wordsByTopic(topic);
  const playLinks = [
    { mode: "flashcards" as const, label: "Flashcards", icon: Layers },
    { mode: "quiz" as const, label: "Quiz", icon: Brain },
    { mode: "spell" as const, label: "Spelling", icon: Keyboard },
    { mode: "listen" as const, label: "Listen", icon: Headphones },
  ];
  return (
    <div>
      <button onClick={() => setView("words")} className="mb-3 inline-flex items-center gap-1 text-sm text-muted-foreground">
        <ChevronLeft className="h-4 w-4" /> Back
      </button>
      <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${meta.gradient} p-6 text-white shadow-pet-card`}>
        <div className="text-5xl">{meta.emoji}</div>
        <h1 className="mt-2 font-display text-2xl font-bold">{topic}</h1>
        <p className="text-sm opacity-90">{words.length} words</p>
      </div>
      <div className="my-4 grid grid-cols-4 gap-2">
        {playLinks.map((p) => (
          <button key={p.mode} onClick={() => setView("play-mode", { mode: p.mode, topic })}
            className="flex flex-col items-center gap-1 rounded-xl border border-border bg-card p-3 text-xs font-semibold transition active:scale-95">
            <p.icon className="h-5 w-5 text-primary" />
            {p.label}
          </button>
        ))}
      </div>
      <ul className="space-y-2">
        {words.map((w) => (
          <li key={w.id}>
            <button onClick={() => setView("word", { id: w.id })}
              className="block w-full rounded-xl border border-border bg-card p-3 text-left transition active:scale-[0.99]">
              <div className="flex items-baseline gap-2">
                <span className="font-bold">{w.word}</span>
                <span className="text-xs italic text-muted-foreground">{w.pos}</span>
              </div>
              <p className="mt-0.5 text-sm text-muted-foreground">{w.definition}</p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function WordView({ id, setView }: { id: string; setView: (v: View, extra?: Record<string, string>) => void }) {
  const word = ALL_WORDS.find((w) => w.id === id);
  if (!word) {
    return (
      <div>
        <p>Word not found.</p>
        <button onClick={() => setView("words")} className="text-primary underline">Back</button>
      </div>
    );
  }
  return (
    <div>
      <button onClick={() => setView("words")} className="mb-3 inline-flex items-center gap-1 text-sm text-muted-foreground">
        <ChevronLeft className="h-4 w-4" /> Back
      </button>
      <div className="bg-pet-hero rounded-3xl p-6 text-white shadow-pet-card">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h1 className="font-display text-4xl font-bold">{word.word}</h1>
            <p className="mt-1 text-sm italic opacity-90">{word.pos}</p>
          </div>
          <button onClick={() => speak(word.word)} className="rounded-full bg-white/20 p-3 backdrop-blur transition active:scale-95" aria-label="Hear pronunciation">
            <Volume2 className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div className="mt-4 rounded-2xl border border-border bg-card p-4">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Meaning</h2>
        <p className="mt-1 text-base">{word.definition}</p>
        {word.example && (
          <>
            <h2 className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Example</h2>
            <p className="mt-1 text-base italic">"{word.example}"</p>
          </>
        )}
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {word.topics.map((t) => (
          <button key={t} onClick={() => setView("topic", { topic: t })}
            className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
            {t}
          </button>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Progress
// ─────────────────────────────────────────────────────────────

function ProgressView() {
  const state = useCaeProgress();
  const lvl = level(state.xp);
  const knownCount = Object.keys(state.knownWordIds).length;
  const masteredCount = Object.values(state.knownWordIds).filter((n) => n >= 3).length;
  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">Your progress</h1>
      <div className="grid grid-cols-2 gap-3">
        <Stat icon={<Zap className="h-5 w-5" />} label="XP" value={state.xp} accent="from-violet-500 to-fuchsia-500" />
        <Stat icon={<Flame className="h-5 w-5" />} label="Streak" value={`${state.streak}d`} accent="from-orange-500 to-red-500" />
        <Stat icon={<BookCheck className="h-5 w-5" />} label="Words seen" value={knownCount} accent="from-sky-500 to-cyan-500" />
        <Stat icon={<Target className="h-5 w-5" />} label="Mastered" value={masteredCount} accent="from-emerald-500 to-teal-500" />
      </div>
      <div className="mt-5 rounded-2xl border border-border bg-card p-4">
        <div className="flex items-center justify-between">
          <span className="font-bold">Level {lvl}</span>
          <span className="text-xs text-muted-foreground">{state.correctTotal} correct lifetime</span>
        </div>
      </div>
      <h2 className="mb-3 mt-6 text-lg font-bold">Badges</h2>
      <div className="grid grid-cols-4 gap-2">
        {BADGES.map((b) => {
          const owned = state.badges.includes(b.id);
          return (
            <div key={b.id} title={b.description}
              className={`flex aspect-square flex-col items-center justify-center rounded-2xl border p-2 text-center text-[10px] font-semibold leading-tight ${
                owned ? "border-accent bg-accent/20" : "border-border bg-muted/30 opacity-50 grayscale"
              }`}>
              <span className="text-2xl">{b.emoji}</span>
              <span className="mt-1">{b.name}</span>
            </div>
          );
        })}
      </div>
      <h2 className="mb-3 mt-6 text-lg font-bold">By topic</h2>
      <div className="space-y-2">
        {TOPICS.map((t) => {
          const ws = wordsByTopic(t);
          const seen = ws.filter((w) => state.knownWordIds[w.id]).length;
          const pct = Math.round((seen / ws.length) * 100);
          return (
            <div key={t} className="rounded-xl border border-border bg-card p-3">
              <div className="flex items-center justify-between text-sm font-semibold">
                <span>{TOPIC_META[t].emoji} {t}</span>
                <span className="text-xs text-muted-foreground">{seen}/{ws.length}</span>
              </div>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
                <div className={`h-full rounded-full bg-gradient-to-r ${TOPIC_META[t].gradient}`} style={{ width: `${pct}%` }} />
              </div>
            </div>
          );
        })}
      </div>
      <h2 className="mb-2 mt-6 text-lg font-bold">Settings</h2>
      <div className="space-y-2">
        <button onClick={() => state.toggleSound()}
          className="flex w-full items-center justify-between rounded-xl border border-border bg-card p-3 text-sm">
          <span className="flex items-center gap-2"><Volume2 className="h-4 w-4" /> Sound effects</span>
          <span className={`font-bold ${state.soundOn ? "text-emerald-600" : "text-muted-foreground"}`}>{state.soundOn ? "On" : "Off"}</span>
        </button>
        <button onClick={() => { if (confirm("Reset all progress? This can't be undone.")) state.reset(); }}
          className="flex w-full items-center justify-between rounded-xl border border-destructive/40 bg-destructive/10 p-3 text-sm font-semibold text-destructive">
          Reset progress
        </button>
      </div>
      <p className="mt-6 text-center text-xs text-muted-foreground">
        {ALL_WORDS.length} CAE words available · Cambridge C1 level
      </p>
    </div>
  );
}

function Stat({ icon, label, value, accent }: { icon: React.ReactNode; label: string; value: React.ReactNode; accent: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-3">
      <div className={`inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br ${accent} text-white`}>{icon}</div>
      <div className="mt-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="font-display text-2xl font-bold">{value}</div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Daily Challenge
// ─────────────────────────────────────────────────────────────

const CHALLENGE_MS = 60_000;

function ChallengeView({ setView }: { setView: (v: View) => void }) {
  const recordAnswer = useCaeProgress((s) => s.recordAnswer);
  const finishRound = useCaeProgress((s) => s.finishRound);
  const soundOn = useCaeProgress((s) => s.soundOn);
  const [started, setStarted] = useState(false);
  const [q, setQ] = useState(() => makeQ());
  const [picked, setPicked] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(0);
  const [remaining, setRemaining] = useState(CHALLENGE_MS);
  const [done, setDone] = useState(false);
  const [earned, setEarned] = useState<string[]>([]);
  const startRef = useRef(0);

  function makeQ(): { word: Word; options: Word[] } {
    const word = ALL_WORDS[Math.floor(Math.random() * ALL_WORDS.length)];
    const others = shuffle(ALL_WORDS.filter((w) => w.id !== word.id)).slice(0, 3);
    return { word, options: shuffle([word, ...others]) };
  }

  useEffect(() => {
    if (!started || done) return;
    const t = setInterval(() => {
      const left = Math.max(0, CHALLENGE_MS - (Date.now() - startRef.current));
      setRemaining(left);
      if (left === 0) finish();
    }, 100);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started, done]);

  function start() { startRef.current = Date.now(); setStarted(true); }
  function finish() {
    if (done) return;
    setDone(true);
    const duration = Date.now() - startRef.current;
    const e = finishRound(score, Math.max(answered, 1), undefined, duration);
    setEarned(e);
    if (score >= 10) confetti({ particleCount: 150, spread: 90, origin: { y: 0.6 } });
  }
  function pick(id: string) {
    if (picked || done) return;
    setPicked(id);
    const isRight = id === q.word.id;
    recordAnswer(q.word.id, isRight);
    if (isRight) { setScore((s) => s + 1); playTone("correct", soundOn); vibrate(15); }
    else { playTone("wrong", soundOn); vibrate([30, 40, 30]); }
    setAnswered((a) => a + 1);
    setTimeout(() => { setPicked(null); setQ(makeQ()); }, 500);
  }

  if (!started) {
    return (
      <div>
        <div className="bg-pet-hero rounded-3xl p-6 text-center text-white shadow-pet-card">
          <div className="text-5xl">⏱️</div>
          <h1 className="mt-2 font-display text-3xl font-bold">Daily Challenge</h1>
          <p className="mt-2 text-sm opacity-90">Answer as many as you can in 60 seconds. Mixed words from every topic.</p>
        </div>
        <button onClick={start} className="mt-6 w-full rounded-full bg-primary py-4 font-bold text-primary-foreground shadow-pet-card">Start</button>
        <button onClick={() => setView("home")} className="mt-3 w-full text-sm text-muted-foreground">Back</button>
      </div>
    );
  }
  if (done) {
    return (
      <div className="rounded-3xl border border-border bg-card p-6 text-center shadow-pet-card">
        <div className="text-6xl">{score >= 15 ? "🏆" : score >= 8 ? "🎉" : "💪"}</div>
        <h2 className="mt-2 font-display text-3xl font-bold">{score} correct</h2>
        <p className="mt-1 text-sm text-muted-foreground">out of {answered} questions</p>
        {earned.length > 0 && (
          <div className="bg-pet-accent mt-4 rounded-2xl p-4">
            <p className="text-xs font-bold uppercase">Badge unlocked!</p>
            {earned.map((b) => {
              const def = BADGES.find((x) => x.id === b);
              if (!def) return null;
              return (
                <div key={b} className="mt-2 flex items-center justify-center gap-2">
                  <span className="text-2xl">{def.emoji}</span>
                  <span className="font-bold">{def.name}</span>
                </div>
              );
            })}
          </div>
        )}
        <div className="mt-5 flex gap-2">
          <button onClick={() => setView("home")} className="flex-1 rounded-full border border-border py-3 text-sm font-semibold">Home</button>
          <button onClick={() => window.location.reload()} className="flex-1 rounded-full bg-primary py-3 text-sm font-semibold text-primary-foreground shadow-pet-card">Try again</button>
        </div>
      </div>
    );
  }
  const pct = (remaining / CHALLENGE_MS) * 100;
  return (
    <div>
      <div className="mb-4 flex items-center gap-3">
        <button onClick={finish} className="rounded-full bg-muted p-2" aria-label="Quit"><X className="h-4 w-4" /></button>
        <div className="flex-1">
          <div className="h-2 overflow-hidden rounded-full bg-muted">
            <div className={`h-full rounded-full transition-all ${remaining < 10000 ? "bg-destructive" : "bg-primary"}`} style={{ width: `${pct}%` }} />
          </div>
        </div>
        <div className="w-16 text-right text-sm font-bold tabular-nums">{Math.ceil(remaining / 1000)}s</div>
      </div>
      <div className="mb-3 flex justify-between text-xs font-semibold text-muted-foreground">
        <span>Score: {score}</span><span>{answered} answered</span>
      </div>
      <div className="bg-pet-hero animate-pet-pop rounded-3xl p-6 text-center text-white shadow-pet-card">
        <p className="text-xs font-semibold uppercase tracking-wider opacity-80">Meaning of:</p>
        <h2 className="mt-2 font-display text-3xl font-bold">{q.word.word}</h2>
        <p className="mt-1 text-sm italic opacity-90">{q.word.pos}</p>
      </div>
      <div className="mt-4 space-y-2">
        {q.options.map((opt) => {
          const isRight = opt.id === q.word.id;
          const isPicked = picked === opt.id;
          let cls = "border-border bg-card";
          if (picked) {
            if (isRight) cls = "border-emerald-400 bg-emerald-50";
            else if (isPicked) cls = "border-destructive bg-destructive/15 animate-pet-shake";
            else cls = "border-border bg-card opacity-60";
          }
          return (
            <button key={opt.id} onClick={() => pick(opt.id)} disabled={!!picked}
              className={`flex w-full items-center justify-between gap-3 rounded-2xl border-2 p-3.5 text-left text-sm transition ${cls}`}>
              <span className="flex-1">{opt.definition}</span>
              {picked && isRight && <Check className="h-5 w-5 text-emerald-600" />}
              {picked && isPicked && !isRight && <X className="h-5 w-5 text-destructive" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}
