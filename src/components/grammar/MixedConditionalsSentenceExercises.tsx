import { useState } from 'react';
import { CheckCircle2, RotateCcw, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  ERROR_ITEMS,
  isAnswerAccepted,
  SCRAMBLE_ITEMS,
  TRANSFORM_ITEMS,
} from '@/data/mixedConditionals';
import type { TrackFn } from './MixedConditionalsCoreExercises';

export const ScrambleExercise = ({ onTrack }: { onTrack: TrackFn }) => {
  const [values, setValues] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);

  const total = SCRAMBLE_ITEMS.length;
  const score = SCRAMBLE_ITEMS.filter((item) => isAnswerAccepted(values[item.id] ?? '', item.accepted)).length;

  const appendWord = (id: string, word: string) => {
    setValues((prev) => {
      const current = (prev[id] ?? '').trim();
      return { ...prev, [id]: current ? `${current} ${word}` : word };
    });
    if (checked) setChecked(false);
  };

  const handleCheck = () => {
    setChecked(true);
    onTrack({
      activityTitle: 'Mixed Conditionals — Sentence Scramble',
      activityId: 'mixed-conditionals-scramble',
      activityType: 'sentence-order',
      score,
      total,
    });
  };

  return (
    <Card className="service-card">
      <CardContent className="p-6 space-y-6">
        <div>
          <h3 className="text-xl font-semibold font-merriweather text-foreground">3. Sentence Scramble</h3>
          <p className="text-sm text-muted-foreground mt-1">Tap the words in order or type the full sentence below.</p>
        </div>
        <div className="space-y-5">
          {SCRAMBLE_ITEMS.map((item, idx) => {
            const ok = checked && isAnswerAccepted(values[item.id] ?? '', item.accepted);
            const wrong = checked && !ok;
            return (
              <div key={item.id} className="space-y-2.5">
                <p className="text-sm font-semibold text-muted-foreground">Sentence {idx + 1}</p>
                <div className="flex flex-wrap gap-1.5">
                  {item.words.map((word, wi) => (
                    <button
                      key={`${item.id}-${wi}`}
                      type="button"
                      onClick={() => appendWord(item.id, word)}
                      className="rounded-md border border-border bg-muted/60 px-2.5 py-1 text-sm text-foreground hover:bg-muted transition-colors"
                    >
                      {word}
                    </button>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <Input
                    value={values[item.id] ?? ''}
                    onChange={(e) => { setValues((p) => ({ ...p, [item.id]: e.target.value })); if (checked) setChecked(false); }}
                    placeholder="Type or tap words to build the sentence..."
                    aria-label={`Sentence ${idx + 1}`}
                    className={`${ok ? 'border-emerald-600 bg-emerald-50 dark:bg-emerald-950/30' : ''} ${wrong ? 'border-destructive bg-destructive/10' : ''}`}
                  />
                  {ok && <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />}
                  {wrong && <XCircle className="h-5 w-5 text-destructive shrink-0" />}
                </div>
                {wrong && (
                  <p className="text-xs font-medium text-emerald-700 dark:text-emerald-400">
                    Answer: {item.sentence}
                  </p>
                )}
              </div>
            );
          })}
        </div>
        <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-border">
          <Button onClick={handleCheck}>Check Answers</Button>
          <Button variant="outline" onClick={() => { setValues({}); setChecked(false); }} className="gap-1.5">
            <RotateCcw className="h-4 w-4" /> Reset
          </Button>
          {checked && (
            <span className="text-sm font-semibold text-foreground ml-auto">
              Score: {score} / {total}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export const TransformationExercise = ({ onTrack }: { onTrack: TrackFn }) => {
  const [values, setValues] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);

  const total = TRANSFORM_ITEMS.length;
  const score = TRANSFORM_ITEMS.filter((item) => isAnswerAccepted(values[item.id] ?? '', item.accepted)).length;

  const handleCheck = () => {
    setChecked(true);
    onTrack({
      activityTitle: 'Mixed Conditionals — Sentence Transformation',
      activityId: 'mixed-conditionals-transformation',
      activityType: 'transformation',
      score,
      total,
    });
  };

  return (
    <Card className="service-card">
      <CardContent className="p-6 space-y-5">
        <div>
          <h3 className="text-xl font-semibold font-merriweather text-foreground">5. Sentence Transformation</h3>
          <p className="text-sm text-muted-foreground mt-1">Rewrite each real situation as a mixed conditional sentence.</p>
        </div>
        <div className="space-y-4">
          {TRANSFORM_ITEMS.map((item, idx) => {
            const ok = checked && isAnswerAccepted(values[item.id] ?? '', item.accepted);
            const wrong = checked && !ok;
            return (
              <div key={item.id} className="space-y-1.5">
                <p className="text-sm italic text-foreground">
                  {idx + 1}. &ldquo;{item.situation}&rdquo;
                </p>
                <div className="flex items-center gap-2">
                  <Input
                    value={values[item.id] ?? ''}
                    onChange={(e) => { setValues((p) => ({ ...p, [item.id]: e.target.value })); if (checked) setChecked(false); }}
                    placeholder={item.placeholder}
                    aria-label={`Transformation ${idx + 1}`}
                    className={`${ok ? 'border-emerald-600 bg-emerald-50 dark:bg-emerald-950/30' : ''} ${wrong ? 'border-destructive bg-destructive/10' : ''}`}
                  />
                  {ok && <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />}
                  {wrong && <XCircle className="h-5 w-5 text-destructive shrink-0" />}
                </div>
                {wrong && (
                  <p className="text-xs font-medium text-emerald-700 dark:text-emerald-400">
                    Model answer: {item.accepted[0]}
                  </p>
                )}
              </div>
            );
          })}
        </div>
        <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-border">
          <Button onClick={handleCheck}>Check Answers</Button>
          <Button variant="outline" onClick={() => { setValues({}); setChecked(false); }} className="gap-1.5">
            <RotateCcw className="h-4 w-4" /> Reset
          </Button>
          {checked && (
            <span className="text-sm font-semibold text-foreground ml-auto">
              Score: {score} / {total}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export const ErrorCorrectionExercise = ({ onTrack }: { onTrack: TrackFn }) => {
  const [values, setValues] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);

  const total = ERROR_ITEMS.length;
  const score = ERROR_ITEMS.filter((item) => isAnswerAccepted(values[item.id] ?? '', item.accepted)).length;

  const handleCheck = () => {
    setChecked(true);
    onTrack({
      activityTitle: 'Mixed Conditionals — Error Correction',
      activityId: 'mixed-conditionals-error-correction',
      activityType: 'error-correction',
      score,
      total,
    });
  };

  return (
    <Card className="service-card">
      <CardContent className="p-6 space-y-5">
        <div>
          <h3 className="text-xl font-semibold font-merriweather text-foreground">6. Error Correction</h3>
          <p className="text-sm text-muted-foreground mt-1">Replace the underlined mistake with the correct verb form.</p>
        </div>
        <div className="space-y-4">
          {ERROR_ITEMS.map((item, idx) => {
            const ok = checked && isAnswerAccepted(values[item.id] ?? '', item.accepted);
            const wrong = checked && !ok;
            return (
              <div key={item.id} className="rounded-lg border border-border bg-muted/30 p-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-foreground">
                  {idx + 1}. {item.before}
                  <u className="decoration-destructive decoration-2 underline-offset-4 font-medium">{item.wrong}</u>
                  {item.after}
                </p>
                <div className="flex items-center gap-2 shrink-0">
                  <Input
                    value={values[item.id] ?? ''}
                    onChange={(e) => { setValues((p) => ({ ...p, [item.id]: e.target.value })); if (checked) setChecked(false); }}
                    placeholder="Type correction..."
                    aria-label={`Correction for sentence ${idx + 1}`}
                    className={`w-48 bg-background ${ok ? 'border-emerald-600 bg-emerald-50 dark:bg-emerald-950/30' : ''} ${wrong ? 'border-destructive bg-destructive/10' : ''}`}
                  />
                  {ok && <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />}
                  {wrong && (
                    <span className="text-xs font-medium text-emerald-700 dark:text-emerald-400 whitespace-nowrap">
                      {item.accepted[0]}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-border">
          <Button onClick={handleCheck}>Check Answers</Button>
          <Button variant="outline" onClick={() => { setValues({}); setChecked(false); }} className="gap-1.5">
            <RotateCcw className="h-4 w-4" /> Reset
          </Button>
          {checked && (
            <span className="text-sm font-semibold text-foreground ml-auto">
              Score: {score} / {total}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};