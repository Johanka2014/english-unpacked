import { useState, useMemo, useCallback } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle, RotateCcw } from 'lucide-react';
import type { GrammarExercise } from '@/data/b1GrammarData';

interface Props {
  exercise: GrammarExercise;
}

const SuffixCategorizeExercise = ({ exercise }: Props) => {
  const categories = exercise.categories ?? [];
  const words = exercise.words ?? [];
  const example = exercise.example;
  const followUps = exercise.followUpSentences ?? [];

  const shuffled = useMemo(
    () => [...words].sort(() => Math.random() - 0.5).map((w) => w.verb),
    [words]
  );

  // verb -> category id (or null = bank)
  const [placement, setPlacement] = useState<Record<string, string | null>>(
    () => Object.fromEntries(words.map((w) => [w.verb, null]))
  );
  const [dragged, setDragged] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);

  const [followAnswers, setFollowAnswers] = useState<Record<number, string>>({});
  const [followChecked, setFollowChecked] = useState(false);

  const moveTo = useCallback((verb: string, category: string | null) => {
    setPlacement((prev) => ({ ...prev, [verb]: category }));
  }, []);

  const handleDrop = (category: string | null) => {
    if (checked || !dragged) return;
    moveTo(dragged, category);
    setDragged(null);
  };

  const bank = shuffled.filter((v) => placement[v] == null);

  const wordByVerb = useMemo(
    () => Object.fromEntries(words.map((w) => [w.verb, w])),
    [words]
  );

  const placedScore = checked
    ? words.filter((w) => placement[w.verb] === w.category).length
    : 0;

  const followScore = followChecked
    ? followUps.filter((f) => (followAnswers[f.id] || '').trim().toLowerCase() === f.answer.toLowerCase()).length
    : 0;

  const reset = () => {
    setPlacement(Object.fromEntries(words.map((w) => [w.verb, null])));
    setChecked(false);
    setDragged(null);
  };

  const followOptions = useMemo(
    () => [...new Set(words.map((w) => w.noun))].sort(),
    [words]
  );

  return (
    <Card className="service-card">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2 font-merriweather text-foreground">{exercise.title}</h3>
        <p className="text-muted-foreground mb-6">{exercise.instruction}</p>

        {/* Verb bank */}
        <div
          className="mb-6 rounded-lg border border-border bg-muted/20 p-4 min-h-[64px]"
          onDragOver={(e) => e.preventDefault()}
          onDrop={() => handleDrop(null)}
        >
          <p className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">Verb bank</p>
          <div className="flex flex-wrap gap-2">
            {bank.length === 0 && (
              <span className="text-sm italic text-muted-foreground/60">All verbs placed.</span>
            )}
            {bank.map((verb) => (
              <div
                key={verb}
                draggable={!checked}
                onDragStart={() => setDragged(verb)}
                onDragEnd={() => setDragged(null)}
                className="px-3 py-1.5 rounded-md bg-accent text-accent-foreground text-sm font-medium border border-border cursor-grab active:cursor-grabbing select-none"
              >
                {verb}
              </div>
            ))}
          </div>
        </div>

        {/* Category columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {categories.map((cat) => {
            const placed = words.filter((w) => placement[w.verb] === cat.id);
            return (
              <div
                key={cat.id}
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => handleDrop(cat.id)}
                className="border-2 border-dashed border-primary/30 rounded-lg bg-background overflow-hidden"
              >
                <div className="bg-primary text-primary-foreground text-center py-2 font-semibold text-sm">
                  {cat.label}
                </div>
                <div className="p-2 space-y-1.5 min-h-[140px]">
                  {example && example.category === cat.id && (
                    <div className="px-2 py-1 rounded text-xs italic text-muted-foreground border border-dashed border-border">
                      {example.noun} <span className="opacity-60">(example)</span>
                    </div>
                  )}
                  {placed.map((w) => {
                    const isCorrect = checked && placement[w.verb] === w.category;
                    const isWrong = checked && placement[w.verb] !== w.category;
                    return (
                      <div
                        key={w.verb}
                        draggable={!checked}
                        onDragStart={() => setDragged(w.verb)}
                        onDragEnd={() => setDragged(null)}
                        onClick={() => !checked && moveTo(w.verb, null)}
                        className={`px-2 py-1.5 rounded text-sm border cursor-grab active:cursor-grabbing select-none flex items-center justify-between gap-1
                          ${checked ? '' : 'hover:bg-accent'}
                          ${isCorrect ? 'border-green-500 bg-green-50 text-green-800 dark:bg-green-950/30 dark:text-green-300' : ''}
                          ${isWrong ? 'border-red-500 bg-red-50 text-red-800 dark:bg-red-950/30 dark:text-red-300' : ''}
                          ${!checked ? 'border-border bg-card' : ''}
                        `}
                      >
                        <span>
                          {checked ? wordByVerb[w.verb].noun : w.verb}
                        </span>
                        {checked && isCorrect && <CheckCircle className="h-3.5 w-3.5 shrink-0" />}
                        {checked && isWrong && <XCircle className="h-3.5 w-3.5 shrink-0" />}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex items-center gap-3 flex-wrap">
          {!checked ? (
            <Button onClick={() => setChecked(true)} disabled={bank.length > 0}>
              Check Answers
            </Button>
          ) : (
            <>
              <div className="px-3 py-2 bg-muted rounded-lg text-sm font-medium">
                Score: {placedScore} / {words.length}
              </div>
              <Button variant="outline" onClick={reset} className="gap-1">
                <RotateCcw className="h-4 w-4" /> Try Again
              </Button>
            </>
          )}
        </div>

        {checked && (
          <div className="mt-4 text-xs text-muted-foreground space-y-1">
            {words
              .filter((w) => placement[w.verb] !== w.category)
              .map((w) => (
                <p key={w.verb}>
                  <span className="font-medium text-foreground">{w.verb}</span> → {w.noun} (
                  {categories.find((c) => c.id === w.category)?.label})
                </p>
              ))}
          </div>
        )}

        {/* Follow-up sentences */}
        {followUps.length > 0 && (
          <div className="mt-10 pt-6 border-t border-border">
            <h4 className="text-lg font-semibold mb-1 font-merriweather text-foreground">
              Now use the nouns to complete the sentences
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              Pick the noun that best fits each sentence.
            </p>

            <div className="space-y-3">
              {followUps.map((s) => {
                const val = followAnswers[s.id] || '';
                const isCorrect = followChecked && val.trim().toLowerCase() === s.answer.toLowerCase();
                const isWrong = followChecked && val && !isCorrect;
                return (
                  <div key={s.id} className="text-sm leading-relaxed flex flex-wrap items-center gap-1.5">
                    <span className="font-bold text-muted-foreground mr-1">{s.id}</span>
                    <span>{s.before}</span>
                    <select
                      value={val}
                      disabled={followChecked}
                      onChange={(e) => setFollowAnswers((p) => ({ ...p, [s.id]: e.target.value }))}
                      className={`border rounded px-2 py-1 text-sm bg-background min-w-[140px]
                        ${isCorrect ? 'border-green-500 bg-green-50 dark:bg-green-950/20' : ''}
                        ${isWrong ? 'border-red-500 bg-red-50 dark:bg-red-950/20' : ''}
                        ${!followChecked ? 'border-border' : ''}
                      `}
                    >
                      <option value="">— select —</option>
                      {followOptions.map((n) => (
                        <option key={n} value={n}>{n}</option>
                      ))}
                    </select>
                    {isCorrect && <CheckCircle className="h-3.5 w-3.5 text-green-600" />}
                    {isWrong && (
                      <span className="inline-flex items-center gap-1">
                        <XCircle className="h-3.5 w-3.5 text-red-600" />
                        <span className="text-xs text-green-600 dark:text-green-400">{s.answer}</span>
                      </span>
                    )}
                    <span>{s.after}</span>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 flex items-center gap-3">
              {!followChecked ? (
                <Button
                  onClick={() => setFollowChecked(true)}
                  disabled={followUps.some((s) => !followAnswers[s.id])}
                >
                  Check Sentences
                </Button>
              ) : (
                <>
                  <div className="px-3 py-2 bg-muted rounded-lg text-sm font-medium">
                    Score: {followScore} / {followUps.length}
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => { setFollowChecked(false); setFollowAnswers({}); }}
                    className="gap-1"
                  >
                    <RotateCcw className="h-4 w-4" /> Try Again
                  </Button>
                </>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SuffixCategorizeExercise;
