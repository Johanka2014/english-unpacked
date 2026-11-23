import { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Check, RotateCcw, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useActivityTracking } from '@/hooks/useActivityTracking';
import { COMPARISON_STEPS, isComparisonAnswerCorrect, type ComparisonGap } from '@/data/comparativesPractice';
import heightImage from '@/assets/grammar/comparatives-tall-and-short.png.asset.json';

const ComparativesPractice = () => {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [homework, setHomework] = useState('');
  const topRef = useRef<HTMLDivElement>(null);
  const track = useActivityTracking();
  const step = COMPARISON_STEPS[index];
  if (!step) return null;
  const gaps = (step.items ?? []).flatMap(item => item.parts.filter((part): part is ComparisonGap => typeof part !== 'string'));
  const score = gaps.filter(gap => isComparisonAnswerCorrect(answers[gap.id] ?? '', gap.answers)).length;
  const isChecked = !!checked[step.id];

  const moveTo = (next: number) => {
    setIndex(next);
    topRef.current?.scrollIntoView({ block: 'start', behavior: 'instant' });
  };
  const checkAnswers = () => {
    setChecked(previous => ({ ...previous, [step.id]: true }));
    track({ activityTitle: `Comparatives and Superlatives — ${step.title.replace('Practice: ', '')}`, activityId: step.id, activityType: 'gap-fill', score, total: gaps.length });
  };
  const reset = () => {
    setChecked(previous => ({ ...previous, [step.id]: false }));
    setAnswers(previous => {
      const next = { ...previous };
      gaps.forEach(gap => delete next[gap.id]);
      return next;
    });
  };

  return (
    <div ref={topRef} className="min-w-0 space-y-6 scroll-mt-[calc(var(--nav-h)+16px)]">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="shrink-0 text-sm font-semibold text-muted-foreground">{index + 1} / {COMPARISON_STEPS.length}</p>
        <Select value={String(index)} onValueChange={value => moveTo(Number(value))}>
          <SelectTrigger aria-label="Lesson activity" className="h-auto min-h-12 w-full min-w-0 text-left sm:max-w-md [&>span]:whitespace-normal">
            <SelectValue />
          </SelectTrigger>
          <SelectContent position="popper" className="max-w-[calc(100vw-32px)]">
            {COMPARISON_STEPS.map((item, i) => <SelectItem key={item.id} value={String(i)} className="min-h-11 whitespace-normal">{i + 1}. {item.title}</SelectItem>)}
          </SelectContent>
        </Select>
      </div>

      {step.kind !== 'exercise' ? (
        <>
          <h2 className="font-merriweather text-2xl font-bold text-foreground">{step.title}</h2>
          <div className={`grid items-start gap-6 ${step.image || (step.sections?.length ?? 0) > 1 ? 'md:grid-cols-2' : ''}`}>
            {step.sections?.map(section => (
              <Card key={section.heading} className="service-card">
                <CardContent className="p-5 sm:p-6">
                  <h3 className="mb-4 font-merriweather text-lg font-semibold text-primary">{section.heading}</h3>
                  <div className="prose prose-sm max-w-none leading-relaxed text-foreground prose-strong:text-primary prose-li:text-foreground" dangerouslySetInnerHTML={{ __html: section.content }} />
                </CardContent>
              </Card>
            ))}
            {step.image && <img src={heightImage.url} alt="Two people of different heights illustrating taller and shorter" className="mx-auto h-auto w-full max-w-md rounded-lg" />}
          </div>
          {step.kind === 'homework' && (
            <div className="space-y-2">
              <label htmlFor="comparison-homework" className="font-semibold text-foreground">Your paragraph</label>
              <Textarea id="comparison-homework" value={homework} onChange={event => setHomework(event.target.value)} className="min-h-40 text-base" />
            </div>
          )}
        </>
      ) : (
        <Card className="service-card">
          <CardContent className="p-4 sm:p-6">
            <h2 className="mb-2 font-merriweather text-xl font-bold text-foreground sm:text-2xl">{step.title}</h2>
            <p className="mb-5 text-muted-foreground">{step.instruction}</p>
            {step.wordBank && <div className="mb-6 flex flex-wrap gap-2">{step.wordBank.map(word => <span key={word} className="rounded-md border border-border bg-muted px-3 py-1.5 text-sm font-medium text-foreground">{word}</span>)}</div>}
            <ol className={`grid gap-x-8 gap-y-5 ${index === 22 ? '' : 'md:grid-cols-2'}`}>
              {step.items?.map(item => (
                <li key={item.id} className="flex min-w-0 items-start gap-2">
                  <span className="w-5 shrink-0 pt-2 text-sm font-bold text-brand-accent">{item.id}.</span>
                  <div className={`min-w-0 flex-1 text-base leading-loose text-foreground ${index === 22 ? `rounded-lg border border-border p-3 ${item.id % 2 ? 'bg-muted' : 'bg-primary/5'}` : ''}`}>
                    {item.parts.map((part, i) => {
                      if (typeof part === 'string') return <span key={i}>{part}</span>;
                      const correct = isComparisonAnswerCorrect(answers[part.id] ?? '', part.answers);
                      return (
                        <span key={part.id} className="inline-flex max-w-full flex-wrap items-center gap-1 align-middle">
                          <Input aria-label={`Answer ${part.id}`} value={answers[part.id] ?? ''} disabled={isChecked} autoComplete="off" autoCapitalize="none" spellCheck={false} onChange={event => setAnswers(previous => ({ ...previous, [part.id]: event.target.value }))} className={`inline-flex h-11 w-52 max-w-full text-base disabled:opacity-100 ${isChecked ? correct ? 'movers-correct movers-success-text' : 'border-destructive text-destructive' : 'border-primary/40'}`} />
                          {part.hint && !isChecked && <span className="text-xs text-muted-foreground">({part.hint})</span>}
                          {isChecked && (correct ? <Check aria-label="Correct" className="movers-success-text h-4 w-4" /> : <X aria-label="Incorrect" className="h-4 w-4 text-destructive" />)}
                        </span>
                      );
                    })}
                    {isChecked && item.parts.filter((part): part is ComparisonGap => typeof part !== 'string').filter(gap => !isComparisonAnswerCorrect(answers[gap.id] ?? '', gap.answers)).map(gap => <p key={gap.id} className="movers-success-text mt-1 text-sm leading-relaxed">Answer: {gap.answers[0]}</p>)}
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-6 flex flex-wrap items-center gap-3" aria-live="polite">
              {!isChecked ? <Button className="min-h-11" onClick={checkAnswers}>Check Answers</Button> : <><p className="font-semibold text-primary">Score: {score} / {gaps.length}</p><Button variant="outline" className="min-h-11" onClick={reset}><RotateCcw className="h-4 w-4" />Try again</Button></>}
            </div>
          </CardContent>
        </Card>
      )}
      <div className="flex items-center justify-between gap-3 border-t border-border pt-5">
        <Button variant="outline" className="min-h-11" disabled={index === 0} onClick={() => moveTo(index - 1)}><ArrowLeft className="h-4 w-4" />Previous</Button>
        <Button className="min-h-11" disabled={index === COMPARISON_STEPS.length - 1} onClick={() => moveTo(index + 1)}>Next<ArrowRight className="h-4 w-4" /></Button>
      </div>
    </div>
  );
};

export default ComparativesPractice;