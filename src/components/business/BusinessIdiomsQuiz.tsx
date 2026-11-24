import { useEffect, useRef, useState } from 'react';
import { CheckCircle2, RotateCcw, Trophy, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useActivityTracking } from '@/hooks/useActivityTracking';
import {
  BUSINESS_IDIOMS,
  getQuizOptions,
  shuffleItems,
  splitSentenceOnBlank,
  type BusinessIdiom,
} from '@/data/businessIdioms';

type QuizPhase = 'intro' | 'playing' | 'result';

const BusinessIdiomsQuiz = () => {
  const [phase, setPhase] = useState<QuizPhase>('intro');
  const [questions, setQuestions] = useState<BusinessIdiom[]>([]);
  const [index, setIndex] = useState(0);
  const [options, setOptions] = useState<string[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const timerRef = useRef<number | null>(null);
  const track = useActivityTracking();

  useEffect(() => () => {
    if (timerRef.current !== null) window.clearTimeout(timerRef.current);
  }, []);

  const startQuiz = () => {
    if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    const shuffled = shuffleItems(BUSINESS_IDIOMS);
    const first = shuffled[0];
    if (!first) return;
    setQuestions(shuffled);
    setIndex(0);
    setScore(0);
    setSelected(null);
    setOptions(getQuizOptions(first.form, BUSINESS_IDIOMS));
    setPhase('playing');
  };

  const advance = (nextScore: number) => {
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    const nextIndex = index + 1;
    const nextItem = questions[nextIndex];
    if (nextItem) {
      setIndex(nextIndex);
      setSelected(null);
      setOptions(getQuizOptions(nextItem.form, BUSINESS_IDIOMS));
    } else {
      setPhase('result');
      track({
        activityTitle: 'Sports Idioms for Business — Sentence Quiz',
        activityId: 'business-idioms-quiz',
        activityType: 'quiz',
        score: nextScore,
        total: questions.length,
      });
    }
  };

  const handleAnswer = (choice: string) => {
    if (selected !== null) return;
    const current = questions[index];
    if (!current) return;
    const isCorrect = choice === current.form;
    const nextScore = isCorrect ? score + 1 : score;
    setSelected(choice);
    setScore(nextScore);
    timerRef.current = window.setTimeout(() => advance(nextScore), 1600);
  };

  if (phase === 'intro') {
    return (
      <Card className="mx-auto max-w-xl border-border">
        <CardContent className="p-8 text-center space-y-5">
          <h2 className="text-2xl font-bold font-merriweather text-foreground">Sentence Practice</h2>
          <p className="text-muted-foreground">
            Test your knowledge of all {BUSINESS_IDIOMS.length} sports idioms for business. Choose the idiom that completes each sentence.
          </p>
          <Button onClick={startQuiz} size="lg" className="w-full sm:w-auto px-8 bg-brand-royal hover:bg-brand-navy text-white">
            Start Quiz
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (phase === 'result') {
    const total = questions.length;
    const feedback =
      score === total
        ? 'Perfect score — you are batting a thousand!'
        : score >= 12
          ? 'Great work — you covered all your bases.'
          : score >= 8
            ? 'Good effort — review the flashcards and try again.'
            : 'Keep practising with the Learn list and Flashcards.';
    return (
      <Card className="mx-auto max-w-xl border-border">
        <CardContent className="p-8 text-center space-y-5">
          <Trophy className="h-12 w-12 mx-auto text-brand-accent" />
          <h2 className="text-2xl font-bold font-merriweather text-foreground">Quiz Complete</h2>
          <p className="text-lg text-muted-foreground">
            You scored <span className="font-bold text-brand-royal">{score}</span> out of {total}.
          </p>
          <p className="text-sm text-muted-foreground">{feedback}</p>
          <Button onClick={startQuiz} size="lg" className="w-full sm:w-auto px-8 bg-brand-royal hover:bg-brand-navy text-white">
            <RotateCcw className="h-4 w-4 mr-2" />
            Play Again
          </Button>
        </CardContent>
      </Card>
    );
  }

  const current = questions[index];
  if (!current) return null;
  const [before, after] = splitSentenceOnBlank(current.sentence);

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div className="flex items-center justify-between gap-4">
        <span className="text-sm font-semibold text-muted-foreground">
          Question {index + 1} / {questions.length}
        </span>
        <span className="rounded-full bg-brand-light px-3 py-1 text-sm font-semibold text-brand-navy">
          Score: {score}
        </span>
      </div>

      <Card className="border-border">
        <CardContent className="p-6">
          <p className="text-lg font-medium leading-relaxed text-foreground">
            {before}
            {selected === null ? (
              <span className="inline-block min-w-[6rem] border-b-2 border-brand-royal/60 align-baseline mx-1" aria-label="blank" />
            ) : (
              <span className={selected === current.form ? 'font-bold text-emerald-700 dark:text-emerald-400' : 'font-bold text-destructive underline'}>
                {selected}
              </span>
            )}
            {after}
          </p>
        </CardContent>
      </Card>

      <div className="grid gap-3 sm:grid-cols-2">
        {options.map((opt) => {
          const isChosen = selected === opt;
          const isCorrect = opt === current.form;
          let stateClass = 'border-border bg-card text-foreground hover:border-brand-royal hover:bg-muted/50';
          if (selected !== null) {
            if (isCorrect) stateClass = 'border-emerald-500 bg-emerald-50 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300';
            else if (isChosen) stateClass = 'border-destructive bg-destructive/10 text-destructive';
            else stateClass = 'border-border bg-card text-muted-foreground opacity-60';
          }
          return (
            <button
              key={opt}
              type="button"
              disabled={selected !== null}
              onClick={() => handleAnswer(opt)}
              className={`flex items-center justify-between gap-2 w-full rounded-xl border-2 p-4 text-left font-medium transition-colors min-h-[52px] ${stateClass}`}
            >
              <span>{opt}</span>
              {selected !== null && isCorrect && <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />}
              {selected !== null && isChosen && !isCorrect && <XCircle className="h-5 w-5 shrink-0 text-destructive" />}
            </button>
          );
        })}
      </div>

      {selected !== null && (
        <div className="flex justify-end">
          <Button type="button" variant="outline" size="sm" onClick={() => advance(score)}>
            {index + 1 < questions.length ? 'Next Question' : 'See Results'}
          </Button>
        </div>
      )}
    </div>
  );
};

export default BusinessIdiomsQuiz;