import { useState } from 'react';
import { CheckCircle2, RotateCcw, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  FILL_BLANKS_ITEMS,
  IDENTIFY_ITEMS,
  isAnswerAccepted,
  MC_ITEMS,
  PATTERN_OPTIONS,
} from '@/data/mixedConditionals';

export type TrackFn = (payload: {
  activityTitle: string;
  activityId: string;
  activityType: string;
  score: number;
  total: number;
}) => void;

export const FillBlanksExercise = ({ onTrack }: { onTrack: TrackFn }) => {
  const [values, setValues] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);

  const total = FILL_BLANKS_ITEMS.length * 2;
  const score = FILL_BLANKS_ITEMS.reduce((acc, item) => {
    const firstOk = isAnswerAccepted(values[`${item.id}-a`] ?? '', item.firstAccepted);
    const secondOk = isAnswerAccepted(values[`${item.id}-b`] ?? '', item.secondAccepted);
    return acc + (firstOk ? 1 : 0) + (secondOk ? 1 : 0);
  }, 0);

  const handleCheck = () => {
    setChecked(true);
    onTrack({
      activityTitle: 'Mixed Conditionals — Fill in the Blanks',
      activityId: 'mixed-conditionals-fill-blanks',
      activityType: 'gap-fill',
      score,
      total,
    });
  };

  const renderGap = (key: string, cue: string, accepted: string[]) => {
    const ok = checked && isAnswerAccepted(values[key] ?? '', accepted);
    const wrong = checked && !ok;
    return (
      <span className="inline-flex flex-wrap items-center gap-1.5 align-baseline mx-1 my-1">
        <Input
          value={values[key] ?? ''}
          onChange={(e) => {
            setValues((prev) => ({ ...prev, [key]: e.target.value }));
            if (checked) setChecked(false);
          }}
          placeholder={cue}
          aria-label={`Gap (${cue})`}
          className={`inline-block h-8 w-36 sm:w-44 text-sm ${
            ok ? 'border-emerald-600 bg-emerald-50 dark:bg-emerald-950/30' : ''
          } ${wrong ? 'border-destructive bg-destructive/10' : ''}`}
        />
        {wrong && <span className="text-xs font-medium text-emerald-700 dark:text-emerald-400">({accepted[0]})</span>}
      </span>
    );
  };

  return (
    <Card className="service-card">
      <CardContent className="p-6 space-y-5">
        <div>
          <h3 className="text-xl font-semibold font-merriweather text-foreground">1. Fill in the Blanks</h3>
          <p className="text-sm text-muted-foreground mt-1">Complete each mixed conditional with the correct verb forms.</p>
        </div>
        <ol className="space-y-4">
          {FILL_BLANKS_ITEMS.map((item, idx) => (
            <li key={item.id} className="leading-loose text-foreground">
              <span className="font-semibold mr-2">{idx + 1}.</span>
              {item.beforeFirst}
              {renderGap(`${item.id}-a`, item.firstCue, item.firstAccepted)}
              {item.between}
              {renderGap(`${item.id}-b`, item.secondCue, item.secondAccepted)}
              {item.afterSecond}
            </li>
          ))}
        </ol>
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

export const MultipleChoiceExercise = ({ onTrack }: { onTrack: TrackFn }) => {
  const [selected, setSelected] = useState<Record<string, number>>({});
  const [checked, setChecked] = useState(false);

  const total = MC_ITEMS.length;
  const score = MC_ITEMS.filter((item) => selected[item.id] === item.correctIndex).length;

  const handleCheck = () => {
    setChecked(true);
    onTrack({
      activityTitle: 'Mixed Conditionals — Multiple Choice',
      activityId: 'mixed-conditionals-multiple-choice',
      activityType: 'multiple-choice',
      score,
      total,
    });
  };

  return (
    <Card className="service-card">
      <CardContent className="p-6 space-y-6">
        <div>
          <h3 className="text-xl font-semibold font-merriweather text-foreground">2. Multiple Choice</h3>
          <p className="text-sm text-muted-foreground mt-1">Choose the best option to complete each sentence.</p>
        </div>
        <div className="space-y-5">
          {MC_ITEMS.map((item, idx) => {
            const pick = selected[item.id];
            return (
              <div key={item.id} className="space-y-2">
                <p className="font-medium text-foreground">
                  {idx + 1}. {item.prompt}
                </p>
                <div className="grid gap-2 sm:grid-cols-3">
                  {item.options.map((opt, oi) => {
                    const isPicked = pick === oi;
                    const isCorrect = oi === item.correctIndex;
                    let cls = 'border-border bg-background text-foreground hover:bg-muted';
                    if (checked && isCorrect) cls = 'border-emerald-600 bg-emerald-50 text-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-200';
                    else if (checked && isPicked && !isCorrect) cls = 'border-destructive bg-destructive/10 text-destructive';
                    else if (!checked && isPicked) cls = 'border-primary bg-primary/10 text-primary font-medium';
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => { setSelected((p) => ({ ...p, [item.id]: oi })); if (checked) setChecked(false); }}
                        className={`flex items-center justify-between rounded-lg border px-3.5 py-2.5 text-left text-sm transition-colors ${cls}`}
                      >
                        <span>{opt}</span>
                        {checked && isCorrect && <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />}
                        {checked && isPicked && !isCorrect && <XCircle className="h-4 w-4 shrink-0 text-destructive" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-border">
          <Button onClick={handleCheck}>Check Answers</Button>
          <Button variant="outline" onClick={() => { setSelected({}); setChecked(false); }} className="gap-1.5">
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

export const IdentifyPatternExercise = ({ onTrack }: { onTrack: TrackFn }) => {
  const [picks, setPicks] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);

  const total = IDENTIFY_ITEMS.length;
  const score = IDENTIFY_ITEMS.filter((item) => picks[item.id] === item.answer).length;

  const handleCheck = () => {
    setChecked(true);
    onTrack({
      activityTitle: 'Mixed Conditionals — Identify the Pattern',
      activityId: 'mixed-conditionals-identify-pattern',
      activityType: 'matching',
      score,
      total,
    });
  };

  return (
    <Card className="service-card">
      <CardContent className="p-6 space-y-5">
        <div>
          <h3 className="text-xl font-semibold font-merriweather text-foreground">4. Identify the Pattern</h3>
          <p className="text-sm text-muted-foreground mt-1">Choose which time combination each sentence uses.</p>
        </div>
        <div className="space-y-4">
          {IDENTIFY_ITEMS.map((item, idx) => {
            const val = picks[item.id] ?? '';
            const ok = checked && val === item.answer;
            const wrong = checked && !ok;
            return (
              <div key={item.id} className="rounded-lg border border-border bg-muted/30 p-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-foreground italic">
                  {idx + 1}. &ldquo;{item.sentence}&rdquo;
                </p>
                <div className="flex items-center gap-2 shrink-0">
                  <Select
                    value={val}
                    onValueChange={(next) => { setPicks((p) => ({ ...p, [item.id]: next })); if (checked) setChecked(false); }}
                  >
                    <SelectTrigger
                      aria-label={`Pattern for sentence ${idx + 1}`}
                      className={`w-48 bg-background ${ok ? 'border-emerald-600' : ''} ${wrong ? 'border-destructive' : ''}`}
                    >
                      <SelectValue placeholder="Choose pattern..." />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      {PATTERN_OPTIONS.map((opt) => (
                        <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {ok && <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />}
                  {wrong && (
                    <span className="text-xs font-medium text-emerald-700 dark:text-emerald-400 whitespace-nowrap">
                      {item.answer}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-border">
          <Button onClick={handleCheck}>Check Answers</Button>
          <Button variant="outline" onClick={() => { setPicks({}); setChecked(false); }} className="gap-1.5">
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