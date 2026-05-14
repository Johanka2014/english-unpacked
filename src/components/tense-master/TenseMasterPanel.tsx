import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, ArrowRight, CheckCircle, ExternalLink, RefreshCw, Trophy } from 'lucide-react';
import {
  type Question,
  type QuizCategory,
  type TenseMasterType,
  tenseContent,
  tenseMasterColorMap,
  tenseMasterPracticeMap,
} from '@/data/tenseMasterData';

interface TenseMasterPanelProps {
  type: TenseMasterType;
  /** Optional heading override (e.g. when embedded inside another page that already has its own H1) */
  hideHeader?: boolean;
}

type View =
  | { kind: 'overview' }
  | { kind: 'quiz'; questions: Question[]; title: string };

const TenseMasterPanel = ({ type, hideHeader = false }: TenseMasterPanelProps) => {
  const data = tenseContent[type];
  const practice = tenseMasterPracticeMap[type] || [];
  const colors = tenseMasterColorMap[type];

  const [view, setView] = useState<View>({ kind: 'overview' });
  const [quizIndex, setQuizIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [complete, setComplete] = useState(false);

  if (!data) return null;

  const startQuiz = (cat: QuizCategory) => {
    setView({ kind: 'quiz', questions: cat.questions, title: cat.title });
    setQuizIndex(0);
    setScore(0);
    setSelected(null);
    setShowFeedback(false);
    setComplete(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAnswer = (idx: number) => {
    if (showFeedback) return;
    setSelected(idx);
    setShowFeedback(true);
    if (view.kind === 'quiz' && idx === view.questions[quizIndex].correct) {
      setScore((s) => s + 1);
    }
  };

  const next = () => {
    if (view.kind !== 'quiz') return;
    if (quizIndex < view.questions.length - 1) {
      setQuizIndex((i) => i + 1);
      setSelected(null);
      setShowFeedback(false);
    } else {
      setComplete(true);
    }
  };

  // ── Quiz view ─────────────────────────────────────────────────────────
  if (view.kind === 'quiz') {
    if (complete) {
      const total = view.questions.length;
      const pct = (score / total) * 100;
      const message =
        pct === 100
          ? "Perfect Score! You're a grammar wizard! 🧙‍♂️"
          : pct >= 70
          ? 'Great job! You have a solid understanding. 👍'
          : 'Keep practicing! Review the notes and try again. 💪';

      return (
        <div className="max-w-2xl mx-auto text-center animate-fade-in">
          <Card className="service-card p-10">
            <div className="w-24 h-24 bg-gradient-to-tr from-brand-royal to-purple-600 rounded-full mx-auto flex items-center justify-center mb-6">
              <Trophy className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-2 font-merriweather">Quiz Complete!</h2>
            <p className="text-muted-foreground mb-8">{message}</p>
            <div className="text-6xl font-black text-brand-royal mb-2">
              {score} / {total}
            </div>
            <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-10">Your Score</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button variant="outline" onClick={() => setView({ kind: 'overview' })}>
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to {data.title}
              </Button>
              <Button
                className="bg-brand-royal hover:bg-brand-navy"
                onClick={() => startQuiz({ id: 'retry', title: view.title, desc: '', questions: view.questions })}
              >
                <RefreshCw className="w-4 h-4 mr-2" /> Try Again
              </Button>
            </div>
          </Card>
        </div>
      );
    }

    const q = view.questions[quizIndex];
    const total = view.questions.length;
    const progress = ((quizIndex + 1) / total) * 100;

    return (
      <div className="max-w-2xl mx-auto w-full animate-fade-in">
        <Card className="service-card p-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{view.title}</span>
            <Badge className="bg-teal-100 text-teal-700">Score: {score}</Badge>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-bold text-muted-foreground">
              Question {quizIndex + 1}/{total}
            </span>
          </div>
          <Progress value={progress} className="mb-6 h-2" />
          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-medium text-foreground leading-normal">{q.q}</h3>
          </div>
          <div className="grid gap-3 mb-6">
            {q.options.map((opt, idx) => {
              let cls = 'w-full text-left p-4 rounded-xl border-2 transition-all font-medium';
              if (showFeedback) {
                if (idx === q.correct) cls += ' border-teal-500 bg-teal-50 text-teal-700';
                else if (idx === selected && idx !== q.correct) cls += ' border-red-500 bg-red-50 text-red-700';
                else cls += ' border-muted opacity-50';
              } else {
                cls += ' border-muted hover:border-brand-royal hover:bg-brand-royal/5 text-foreground';
              }
              return (
                <button key={idx} onClick={() => handleAnswer(idx)} disabled={showFeedback} className={cls}>
                  {opt}
                </button>
              );
            })}
          </div>
          {showFeedback && (
            <div
              className={`rounded-xl p-4 mb-4 ${
                selected === q.correct ? 'bg-teal-100 text-teal-800' : 'bg-red-100 text-red-800'
              }`}
            >
              <p className="text-sm font-semibold">
                {selected === q.correct
                  ? `✓ ${q.feedback}`
                  : `✗ Incorrect. The correct answer was "${q.options[q.correct]}".`}
              </p>
            </div>
          )}
          {showFeedback && (
            <div className="flex justify-end mt-4">
              <Button className="bg-brand-royal hover:bg-brand-navy" onClick={next}>
                {quizIndex === total - 1 ? 'Finish Quiz' : 'Next Question'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}
        </Card>
        <div className="mt-4 text-center">
          <Button variant="ghost" size="sm" onClick={() => setView({ kind: 'overview' })}>
            <ArrowLeft className="w-4 h-4 mr-2" /> Exit Quiz
          </Button>
        </div>
      </div>
    );
  }

  // ── Overview: theory + quiz hub ───────────────────────────────────────
  return (
    <div className="max-w-5xl mx-auto animate-fade-in">
      {!hideHeader && (
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 font-merriweather">{data.title}</h2>
          <p className="text-lg text-muted-foreground">{data.intro}</p>
        </div>
      )}

      {/* Theory units */}
      <div className="space-y-8">
        {data.units.map((unit, idx) => (
          <Card key={idx} className="service-card overflow-hidden">
            <div className={`bg-gradient-to-r ${colors.gradient} p-6`}>
              <h3 className="text-2xl font-bold text-white font-merriweather">{unit.title}</h3>
              <p className="text-white/80 font-mono text-sm mt-1">{unit.subtitle}</p>
            </div>
            <CardContent className="p-6 md:p-8">
              <div
                className={`inline-block px-4 py-2 bg-muted rounded-lg text-foreground font-mono text-sm font-semibold border-l-4 ${colors.border} mb-6`}
              >
                {unit.formula}
              </div>
              <p
                className="text-muted-foreground text-lg mb-6"
                dangerouslySetInnerHTML={{ __html: unit.explanation }}
              />
              {unit.detailedUses && unit.detailedUses.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {unit.detailedUses.map((use, i) => (
                    <div key={i} className="bg-muted/50 p-4 rounded-xl border">
                      <span className="block text-brand-royal font-bold text-sm mb-1">{use.title}</span>
                      <span className="text-muted-foreground text-sm">{use.desc}</span>
                    </div>
                  ))}
                </div>
              )}
              <div className="bg-muted/30 rounded-xl p-5 border">
                <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-3">Examples</h4>
                <ul className="space-y-3">
                  {unit.examples.map((ex, i) => (
                    <li key={i} className="flex items-start gap-3 text-foreground">
                      <CheckCircle className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                      <span dangerouslySetInnerHTML={{ __html: ex }} />
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quiz hub */}
      {practice.length > 0 && (
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-foreground mb-2 font-merriweather text-center">Interactive Practice</h3>
          <p className="text-muted-foreground text-center mb-8">Select a focus area to start a quiz.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {practice.map((cat) => (
              <Card
                key={cat.id + cat.title}
                className={`service-card cursor-pointer hover:shadow-lg transition-all border-l-4 ${colors.quizBorder}`}
                onClick={() => startQuiz(cat)}
              >
                <CardHeader>
                  <CardTitle className="text-xl">{cat.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{cat.desc}</CardDescription>
                  <div className="flex items-center text-brand-royal font-bold text-sm">
                    Start Quiz ({cat.questions.length} Questions)
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {type === 'perfect' && (
        <a
          href="https://learningapps.org/view2394861"
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-6"
        >
          <Card className="service-card hover:shadow-lg transition-shadow border-l-4 border-teal-500">
            <CardContent className="p-5 flex items-center gap-4">
              <div className="bg-teal-50 p-3 rounded-lg">
                <ExternalLink className="w-6 h-6 text-teal-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground">Irregular verbs, Past Simple and Present Perfect quiz</h3>
                <p className="text-sm text-muted-foreground">
                  Open the LearningApps interactive quiz in a new tab to drill irregular past participles.
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground" />
            </CardContent>
          </Card>
        </a>
      )}
    </div>
  );
};

export default TenseMasterPanel;
