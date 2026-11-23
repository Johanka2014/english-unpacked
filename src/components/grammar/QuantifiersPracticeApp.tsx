import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Home, ListChecks, Shapes, PenLine, CheckCircle2, XCircle } from 'lucide-react';
import { useActivityTracking } from '@/hooks/useActivityTracking';
import refImg from '@/assets/quantifiers-reference.png.asset.json';
import { QUIZ_QUESTIONS, CLASSIFICATION_WORDS, GAP_TEXT, isGapAnswerCorrect, shuffle, type QuantifierCategory } from '@/data/quantifiers';

type Screen = 'menu' | 'quiz' | 'classify' | 'gap' | 'end';
type Game = 'quiz' | 'classify';
const CATEGORIES: { key: QuantifierCategory; label: string }[] = [
  { key: 'Countable', label: 'Countable' }, { key: 'Uncountable', label: 'Uncountable' }, { key: 'Both', label: 'Both countable & uncountable' },
];
const GAPS = GAP_TEXT.filter((p): p is { answers: string[] } => typeof p !== 'string');

const QuantifiersPracticeApp = () => {
  const track = useActivityTracking();
  const [screen, setScreen] = useState<Screen>('menu');
  const [game, setGame] = useState<Game>('quiz');
  const [quiz, setQuiz] = useState(QUIZ_QUESTIONS);
  const [words, setWords] = useState(CLASSIFICATION_WORDS);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);
  const [gapVals, setGapVals] = useState<string[]>(GAPS.map(() => ''));
  const [gapChecked, setGapChecked] = useState(false);
  const appRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (screen !== 'menu' || appRef.current) appRef.current?.scrollIntoView({ block: 'start', behavior: 'instant' });
  }, [screen, index]);

  const reset = () => { setIndex(0); setScore(0); setPicked(null); setChecked(false); };
  const startQuiz = () => { setQuiz(shuffle(QUIZ_QUESTIONS).map(q => ({ ...q, options: shuffle(q.options) }))); reset(); setGame('quiz'); setScreen('quiz'); };
  const startClassify = () => { setWords(shuffle(CLASSIFICATION_WORDS)); reset(); setGame('classify'); setScreen('classify'); };
  const startGap = () => { setGapVals(GAPS.map(() => '')); setGapChecked(false); setScreen('gap'); };
  const finish = (final: number, total: number, g: Game) => {
    track({ activityTitle: g === 'quiz' ? 'Quantifiers — Sentence quiz' : 'Quantifiers — Classification game', activityType: g === 'quiz' ? 'multiple-choice' : 'classification', score: final, total });
    setScreen('end');
  };

  const items = game === 'quiz' ? quiz : words;
  const answer = game === 'quiz' ? quiz[index]?.answer : words[index]?.category;
  const checkAnswer = (choice = picked) => {
    if (!choice || checked) return;
    setPicked(choice); setChecked(true);
    if (choice === answer) setScore(s => s + 1);
  };
  const next = () => {
    if (index + 1 < items.length) { setIndex(index + 1); setPicked(null); setChecked(false); }
    else finish(score, items.length, game);
  };

  const optionClass = (option: string) => {
    if (checked && option === answer) return 'border-primary bg-primary text-primary-foreground';
    if (checked && option === picked) return 'border-destructive bg-destructive text-destructive-foreground';
    if (option === picked) return 'border-primary bg-primary/10 text-foreground ring-2 ring-primary';
    return 'border-border bg-background text-foreground hover:bg-muted';
  };

  const TopBar = ({ label }: { label: string }) => (
    <div className="mb-4 flex items-center justify-between gap-3">
      <Button variant="ghost" size="icon" aria-label="Back to quantifier menu" onClick={() => setScreen('menu')}><Home /></Button>
      <span className="text-sm font-medium text-muted-foreground">{label}</span>
      <span className="text-sm font-bold text-primary">Score: {score}</span>
    </div>
  );

  const gapScore = GAPS.filter((g, i) => isGapAnswerCorrect(gapVals[i], g.answers)).length;
  let gapNo = -1;

  return (
    <Card ref={appRef} className="service-card mx-auto w-full max-w-md scroll-mt-[calc(var(--nav-h)+16px)] overflow-hidden">
      <CardContent className="p-4 sm:p-6">
        {screen === 'menu' && (
          <div className="space-y-5 text-center">
            <div>
              <h2 className="font-merriweather text-2xl font-bold text-foreground sm:text-3xl">Quantifier Practice</h2>
              <p className="mt-1 text-muted-foreground">Choose an activity to begin.</p>
            </div>
            <div className="space-y-3">
              <Button className="h-14 w-full text-base" onClick={startQuiz}><ListChecks />Sentence quiz</Button>
              <Button className="h-14 w-full bg-brand-accent text-base text-primary-foreground hover:bg-brand-accent/90" onClick={startClassify}><Shapes />Classification game</Button>
              <Button className="h-14 w-full bg-brand-navy text-base text-primary-foreground hover:bg-brand-navy/90" onClick={startGap}><PenLine />Gap-fill text</Button>
            </div>
            <img src={refImg.url} width={968} height={768} alt="Illustration of quantifiers including every, all, less, several, many, few, some, more and each" className="mx-auto w-full rounded-lg border border-border" />
          </div>
        )}

        {screen === 'quiz' && quiz[index] && (
          <div>
            <TopBar label={`Question ${index + 1}/${quiz.length}`} />
            <div className="mb-5 rounded-lg bg-muted p-5 text-center text-lg leading-relaxed text-foreground">
              {quiz[index].sentence.split('___').map((part, i) => (
                <span key={i}>{i > 0 && <strong className="text-primary">{checked ? answer : '___'}</strong>}{part}</span>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3">
              {quiz[index].options.map(o => (
                <Button key={o} variant="outline" disabled={checked} aria-pressed={picked === o} onClick={() => setPicked(o)}
                  className={`h-auto min-h-12 whitespace-normal p-3 text-base ${optionClass(o)}`}>{o}</Button>
              ))}
            </div>
            <Feedback checked={checked} correct={picked === answer} answer={`Answer: “${answer}”`} />
            {checked ? <Button className="h-12 w-full text-base" onClick={next}>{index + 1 < quiz.length ? 'Next question' : 'See my score'}</Button>
              : <Button className="h-12 w-full text-base" disabled={!picked} onClick={() => checkAnswer()}>Check answer</Button>}
          </div>
        )}

        {screen === 'classify' && words[index] && (
          <div>
            <TopBar label={`Word ${index + 1}/${words.length}`} />
            <div className="mb-4 rounded-lg bg-muted p-8 text-center font-merriweather text-3xl font-bold text-foreground">{words[index].word}</div>
            <p className="mb-4 text-center text-muted-foreground">Is this word used with countable nouns, uncountable nouns, or both?</p>
            <div className="grid gap-3">
              {CATEGORIES.map(c => (
                <Button key={c.key} variant="outline" disabled={checked} aria-pressed={picked === c.key} onClick={() => checkAnswer(c.key)}
                  className={`h-auto min-h-12 whitespace-normal p-3 text-base ${optionClass(c.key)}`}>{c.label}</Button>
              ))}
            </div>
            <Feedback checked={checked} correct={picked === answer} answer={`Correct answer: ${CATEGORIES.find(c => c.key === answer)?.label}`} />
            {checked && <Button className="h-12 w-full text-base" onClick={next}>{index + 1 < words.length ? 'Next word' : 'See my score'}</Button>}
          </div>
        )}

        {screen === 'gap' && (
          <div>
            <div className="mb-2 flex items-center justify-between">
              <h2 className="font-merriweather text-xl font-bold text-foreground">Complete the text</h2>
              <Button variant="ghost" size="icon" aria-label="Back to quantifier menu" onClick={() => setScreen('menu')}><Home /></Button>
            </div>
            <p className="mb-4 text-muted-foreground">Type one word or phrase in each gap.</p>
            <div className="mb-5 rounded-lg bg-muted p-4 text-base leading-[2.6] text-foreground">
              {GAP_TEXT.map((part, i) => {
                if (typeof part === 'string') return <span key={i}>{part}</span>;
                gapNo += 1; const n = gapNo; const ok = isGapAnswerCorrect(gapVals[n], part.answers);
                return (
                  <span key={i} className="mx-1 inline-flex items-center gap-1 align-middle">
                    <Input value={gapVals[n]} disabled={gapChecked} aria-label={`Gap ${n + 1}`} autoComplete="off" autoCapitalize="none" spellCheck={false}
                      onChange={e => { const v = [...gapVals]; v[n] = e.target.value; setGapVals(v); }}
                      className={`h-9 w-24 bg-background px-2 text-center text-base ${gapChecked ? (ok ? 'border-primary' : 'border-destructive') : ''}`} />
                    {gapChecked && (ok ? <CheckCircle2 className="h-4 w-4 text-primary" /> : <span className="text-sm font-semibold text-destructive">({part.answers[0]})</span>)}
                  </span>
                );
              })}
            </div>
            {gapChecked ? (
              <div className="space-y-3 text-center">
                <p className="text-lg font-semibold text-foreground">You got {gapScore} out of {GAPS.length} correct!</p>
                <Button className="h-12 w-full" onClick={startGap}>Try again</Button>
                <Button variant="outline" className="h-12 w-full" onClick={() => setScreen('menu')}>Back to menu</Button>
              </div>
            ) : (
              <Button className="h-12 w-full text-base" onClick={() => { setGapChecked(true); track({ activityTitle: 'Quantifiers — Gap-fill text', activityType: 'gap-fill', score: gapScore, total: GAPS.length }); }}>Check answers</Button>
            )}
          </div>
        )}

        {screen === 'end' && (
          <div className="space-y-6 text-center">
            <h2 className="font-merriweather text-2xl font-bold text-foreground">{game === 'quiz' ? 'Quiz complete!' : 'Game over!'}</h2>
            <p className="text-muted-foreground">Well done! Here’s your final score.</p>
            <div className="mx-auto flex h-40 w-40 flex-col items-center justify-center rounded-full bg-muted">
              <span className="text-5xl font-bold text-primary">{score}</span>
              <span className="text-muted-foreground">out of {items.length}</span>
            </div>
            <div className="space-y-3">
              <Button className="h-12 w-full" onClick={game === 'quiz' ? startQuiz : startClassify}>Play again</Button>
              <Button variant="outline" className="h-12 w-full" onClick={() => setScreen('menu')}>Back to menu</Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const Feedback = ({ checked, correct, answer }: { checked: boolean; correct: boolean; answer: string }) => (
  <div className="my-4 flex min-h-6 items-center justify-center font-semibold" aria-live="polite">
    {checked && (correct ? <span className="flex items-center gap-1 text-primary"><CheckCircle2 className="h-5 w-5" />Correct!</span>
      : <span className="flex items-center gap-1 text-destructive"><XCircle className="h-5 w-5" />{answer}</span>)}
  </div>
);

export default QuantifiersPracticeApp;
