import { useState, useMemo } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, CheckCircle2, XCircle, RefreshCw, Trophy } from "lucide-react";
import { pronunciationSections, type Activity, type CategoryActivity, type MatchingActivity, type MinimalPairActivity, type SpeakActivity, type QuizQuestion } from "@/data/pronunciationData";
import SpeakButton from "@/components/pronunciation/SpeakButton";

/* ---------- shared helpers ---------- */
const shuffle = <T,>(arr: T[]) => [...arr].sort(() => Math.random() - 0.5);

/* ---------- Categorize activity (drag/drop simplified to click-to-place) ---------- */
const CategorizeBlock = ({ a }: { a: CategoryActivity }) => {
  const [placements, setPlacements] = useState<Record<string, string | null>>(
    Object.fromEntries(a.items.map((i) => [i.word, null]))
  );
  const [showAnswers, setShowAnswers] = useState(false);

  const place = (word: string, cat: string) =>
    setPlacements((p) => ({ ...p, [word]: p[word] === cat ? null : cat }));

  const reset = () => {
    setPlacements(Object.fromEntries(a.items.map((i) => [i.word, null])));
    setShowAnswers(false);
  };

  const correctCount = a.items.filter((i) => placements[i.word] === i.category).length;

  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">{a.instructions}</p>

      {/* Categories */}
      <div className={`grid gap-3 ${a.categories.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
        {a.categories.map((cat) => (
          <div key={cat} className="border rounded-lg p-3 bg-muted/40 min-h-[120px]">
            <div className="font-semibold mb-2 text-sm">{cat}</div>
            <div className="flex flex-wrap gap-2">
              {a.items
                .filter((i) => placements[i.word] === cat)
                .map((i) => {
                  const isCorrect = showAnswers && i.category === cat;
                  const isWrong = showAnswers && i.category !== cat;
                  return (
                    <button
                      key={i.word}
                      onClick={() => place(i.word, cat)}
                      className={`px-3 py-1 rounded text-sm border ${
                        isCorrect
                          ? "bg-green-100 border-green-400 text-green-800"
                          : isWrong
                          ? "bg-red-100 border-red-400 text-red-800"
                          : "bg-background"
                      }`}
                    >
                      {i.word}
                    </button>
                  );
                })}
            </div>
          </div>
        ))}
      </div>

      {/* Word bank */}
      <div>
        <div className="text-xs uppercase tracking-wide text-muted-foreground mb-2">
          Tap a word, then tap a category to place it (tap again to remove)
        </div>
        <div className="flex flex-wrap gap-2">
          {a.items
            .filter((i) => placements[i.word] === null)
            .map((i) => (
              <WordChip key={i.word} word={i.word} categories={a.categories} onPlace={(c) => place(i.word, c)} />
            ))}
        </div>
      </div>

      <div className="flex gap-2 items-center">
        <Button onClick={() => setShowAnswers(true)} disabled={Object.values(placements).some((v) => v === null)}>
          Check
        </Button>
        <Button variant="outline" onClick={reset}>
          <RefreshCw className="h-4 w-4 mr-1" /> Reset
        </Button>
        {showAnswers && (
          <span className="text-sm font-medium">
            Score: {correctCount} / {a.items.length}
          </span>
        )}
      </div>
    </div>
  );
};

const WordChip = ({
  word,
  categories,
  onPlace,
}: {
  word: string;
  categories: string[];
  onPlace: (c: string) => void;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative inline-block">
      <button
        onClick={() => setOpen((o) => !o)}
        className="px-3 py-1 rounded text-sm border bg-background hover:bg-accent flex items-center gap-1"
      >
        {word}
        <SpeakButton text={word} size="icon" variant="ghost" />
      </button>
      {open && (
        <div className="absolute z-10 mt-1 bg-popover border rounded shadow-md p-1 min-w-[140px]">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => {
                onPlace(c);
                setOpen(false);
              }}
              className="block w-full text-left px-2 py-1 text-xs hover:bg-accent rounded"
            >
              {c}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

/* ---------- Matching activity ---------- */
const MatchingBlock = ({ a }: { a: MatchingActivity }) => {
  const rights = useMemo(() => shuffle(a.pairs.map((p) => p.right)), [a]);
  const [selections, setSelections] = useState<Record<string, string>>({});
  const [showAnswers, setShowAnswers] = useState(false);

  const correctCount = a.pairs.filter((p) => selections[p.left] === p.right).length;

  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">{a.instructions}</p>
      <div className="space-y-2">
        {a.pairs.map((p) => {
          const selected = selections[p.left];
          const correct = showAnswers && selected === p.right;
          const wrong = showAnswers && selected && selected !== p.right;
          return (
            <div key={p.left} className="flex flex-col md:flex-row md:items-center gap-2 border rounded-lg p-3">
              <div className="md:w-1/3 font-medium flex items-center gap-2">
                <SpeakButton text={p.left} size="icon" variant="ghost" />
                {p.left}
              </div>
              <select
                value={selected || ""}
                onChange={(e) => setSelections((s) => ({ ...s, [p.left]: e.target.value }))}
                className={`flex-1 border rounded px-2 py-2 bg-background text-sm ${
                  correct ? "border-green-500 bg-green-50" : wrong ? "border-red-500 bg-red-50" : ""
                }`}
              >
                <option value="">— choose —</option>
                {rights.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
              {showAnswers && (correct ? (
                <CheckCircle2 className="h-5 w-5 text-green-600" />
              ) : (
                <span className="text-xs text-muted-foreground">Answer: {p.right}</span>
              ))}
            </div>
          );
        })}
      </div>
      <div className="flex gap-2 items-center">
        <Button onClick={() => setShowAnswers(true)}>Check</Button>
        <Button
          variant="outline"
          onClick={() => {
            setSelections({});
            setShowAnswers(false);
          }}
        >
          <RefreshCw className="h-4 w-4 mr-1" /> Reset
        </Button>
        {showAnswers && (
          <span className="text-sm font-medium">
            Score: {correctCount} / {a.pairs.length}
          </span>
        )}
      </div>
    </div>
  );
};

/* ---------- Minimal pairs ---------- */
const MinimalPairsBlock = ({ a }: { a: MinimalPairActivity }) => {
  return (
    <div className="space-y-3">
      <p className="text-sm text-muted-foreground">{a.instructions}</p>
      <div className="grid gap-2 md:grid-cols-2">
        {a.pairs.map((p, i) => (
          <div key={i} className="border rounded-lg p-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-medium">{p.a}</span>
              {p.ipaA && <span className="text-xs text-muted-foreground">{p.ipaA}</span>}
              <SpeakButton text={p.a} size="icon" variant="ghost" />
            </div>
            <span className="text-muted-foreground">/</span>
            <div className="flex items-center gap-2">
              <span className="font-medium">{p.b}</span>
              {p.ipaB && <span className="text-xs text-muted-foreground">{p.ipaB}</span>}
              <SpeakButton text={p.b} size="icon" variant="ghost" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ---------- Speak / listen ---------- */
const SpeakBlock = ({ a }: { a: SpeakActivity }) => {
  return (
    <div className="space-y-3">
      <p className="text-sm text-muted-foreground">{a.instructions}</p>
      <div className="space-y-2">
        {a.items.map((it, i) => (
          <div key={i} className="border rounded-lg p-3 flex items-start gap-3">
            <SpeakButton text={it.text} size="sm" />
            <div className="flex-1">
              <div className="font-medium whitespace-pre-line">{it.text}</div>
              {it.label && <div className="text-xs text-muted-foreground mt-1">{it.label}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ---------- Activity dispatcher ---------- */
const ActivityBlock = ({ a }: { a: Activity }) => {
  switch (a.type) {
    case "categorize":
      return <CategorizeBlock a={a} />;
    case "matching":
      return <MatchingBlock a={a} />;
    case "minimalPairs":
      return <MinimalPairsBlock a={a} />;
    case "speak":
      return <SpeakBlock a={a} />;
  }
};

/* ---------- Quiz ---------- */
const Quiz = ({ questions }: { questions: QuizQuestion[] }) => {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [revealed, setRevealed] = useState(false);

  const q = questions[idx];

  const handlePick = (i: number) => {
    if (revealed) return;
    setSelected(i);
    setRevealed(true);
    if (i === q.correct) setScore((s) => s + 1);
  };

  const next = () => {
    if (idx + 1 >= questions.length) {
      setDone(true);
    } else {
      setIdx(idx + 1);
      setSelected(null);
      setRevealed(false);
    }
  };

  const restart = () => {
    setIdx(0);
    setSelected(null);
    setScore(0);
    setDone(false);
    setRevealed(false);
  };

  if (done) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <Card>
        <CardContent className="py-10 text-center space-y-4">
          <Trophy className="h-12 w-12 mx-auto text-amber-500" />
          <h3 className="text-2xl font-bold">Quiz complete!</h3>
          <p className="text-lg">
            You scored <span className="font-bold">{score} / {questions.length}</span> ({pct}%)
          </p>
          <Button onClick={restart}>
            <RefreshCw className="h-4 w-4 mr-1" /> Try again
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center mb-2">
          <Badge variant="secondary">Question {idx + 1} / {questions.length}</Badge>
          <span className="text-sm text-muted-foreground">Score: {score}</span>
        </div>
        <Progress value={((idx) / questions.length) * 100} />
        <CardTitle className="text-lg mt-4">{q.q}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {q.options.map((opt, i) => {
          const isCorrect = revealed && i === q.correct;
          const isWrong = revealed && i === selected && i !== q.correct;
          return (
            <button
              key={i}
              onClick={() => handlePick(i)}
              disabled={revealed}
              className={`w-full text-left border rounded-lg px-4 py-3 transition ${
                isCorrect
                  ? "bg-green-50 border-green-500 text-green-900"
                  : isWrong
                  ? "bg-red-50 border-red-500 text-red-900"
                  : "hover:bg-accent"
              }`}
            >
              <div className="flex items-center justify-between">
                <span>{opt}</span>
                {isCorrect && <CheckCircle2 className="h-5 w-5 text-green-600" />}
                {isWrong && <XCircle className="h-5 w-5 text-red-600" />}
              </div>
            </button>
          );
        })}
        {revealed && (
          <div className="mt-3 p-3 rounded bg-muted text-sm">{q.feedback}</div>
        )}
        {revealed && (
          <Button onClick={next} className="w-full mt-2">
            {idx + 1 >= questions.length ? "See result" : "Next"} <ArrowRight className="h-4 w-4 ml-1" />
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

/* ---------- Page ---------- */
const PronunciationSection = () => {
  const { sectionId } = useParams();
  const section = pronunciationSections.find((s) => s.id === sectionId);

  if (!section) return <Navigate to="/pronunciation" replace />;

  const idx = pronunciationSections.findIndex((s) => s.id === sectionId);
  const prev = pronunciationSections[idx - 1];
  const next = pronunciationSections[idx + 1];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${section.title} | Pronunciation Course`}
        description={section.subtitle}
      />
      <Navigation />
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <Button asChild variant="ghost" className="mb-4">
          <Link to="/pronunciation">
            <ArrowLeft className="h-4 w-4 mr-1" /> All sections
          </Link>
        </Button>

        <div className="mb-8">
          <Badge className="mb-2">Section {section.number}</Badge>
          <h1 className="text-3xl md:text-4xl font-bold mb-2" style={{ fontFamily: "Merriweather, serif" }}>
            {section.title}
          </h1>
          <p className="text-lg text-muted-foreground">{section.subtitle}</p>
        </div>

        {/* Theory units */}
        <section className="space-y-6 mb-12">
          <h2 className="text-2xl font-bold border-b pb-2">Key Information</h2>
          {section.units.map((u, i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle className="text-xl">{u.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {u.intro && <p>{u.intro}</p>}
                {u.bullets && (
                  <ul className="list-disc pl-6 space-y-1">
                    {u.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                )}
                {u.examples && (
                  <div className="grid sm:grid-cols-2 gap-2">
                    {u.examples.map((ex, j) => (
                      <div key={j} className="border rounded p-2 flex items-center gap-2 bg-muted/30">
                        <SpeakButton text={ex.word} size="icon" variant="ghost" />
                        <div className="flex-1">
                          <div className="font-medium">{ex.word}</div>
                          {ex.ipa && <div className="text-xs text-muted-foreground">{ex.ipa}</div>}
                          {ex.note && <div className="text-xs text-muted-foreground italic">{ex.note}</div>}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {u.table && (
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border">
                      <thead className="bg-muted">
                        <tr>
                          {u.table.headers.map((h) => (
                            <th key={h} className="border px-3 py-2 text-left">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {u.table.rows.map((r, ri) => (
                          <tr key={ri}>
                            {r.map((c, ci) => (
                              <td key={ci} className="border px-3 py-2">{c}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Activities */}
        <section className="space-y-6 mb-12">
          <h2 className="text-2xl font-bold border-b pb-2">Interactive Activities</h2>
          {section.activities.map((a, i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle className="text-xl">{a.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ActivityBlock a={a} />
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Quiz */}
        <section className="space-y-4 mb-12">
          <h2 className="text-2xl font-bold border-b pb-2">End-of-Section Quiz</h2>
          <Quiz questions={section.quiz} />
        </section>

        {/* Nav */}
        <div className="flex justify-between gap-2">
          {prev ? (
            <Button asChild variant="outline">
              <Link to={`/pronunciation/${prev.id}`}>
                <ArrowLeft className="h-4 w-4 mr-1" /> {prev.title}
              </Link>
            </Button>
          ) : <div />}
          {next ? (
            <Button asChild>
              <Link to={`/pronunciation/${next.id}`}>
                {next.title} <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
          ) : <div />}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PronunciationSection;
