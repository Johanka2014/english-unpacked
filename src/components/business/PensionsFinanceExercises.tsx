import { ArrowRight, CheckCircle2, RotateCcw, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  ALL_PENSION_GAPS,
  GENERAL_FINANCE_MC,
  PENSION_GAP_BLOCKS,
  PRODUCT_DEFINITIONS,
  PRODUCT_TERMS,
  scoreSectionA,
  scoreSectionB,
  scoreSectionC,
} from '@/data/pensionsFinance';

interface SectionAProps {
  answers: Record<number, string>;
  checked: boolean;
  onChange: (id: number, value: string) => void;
  onCheck: () => void;
  onReset: () => void;
  onNext: () => void;
}

export const SectionAPensions = ({
  answers,
  checked,
  onChange,
  onCheck,
  onReset,
  onNext,
}: SectionAProps) => {
  const score = scoreSectionA(answers);
  const total = ALL_PENSION_GAPS.length;

  return (
    <Card className="service-card">
      <CardContent className="p-6 space-y-6">
        <div>
          <h2 className="text-xl font-bold font-merriweather text-foreground">A. Pensions</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Select the correct word or phrase to complete each sentence.
          </p>
        </div>

        <div className="space-y-5 text-foreground leading-loose">
          {PENSION_GAP_BLOCKS.map((block, bi) => (
            <div key={bi} className="space-y-1.5">
              {block.heading && (
                <h3 className="text-base font-bold font-merriweather text-foreground pt-2">
                  {block.heading}
                </h3>
              )}
              <p className="leading-loose">
                {block.segments.map((seg, si) => {
                  if (seg.text !== undefined) return <span key={si}>{seg.text}</span>;
                  const gap = seg.gap!;
                  const val = answers[gap.id] ?? '';
                  const ok = checked && val === gap.answer;
                  const wrong = checked && !ok;
                  return (
                    <span key={si} className="inline-flex flex-wrap items-center gap-1.5 align-middle mx-1 my-0.5">
                      <Select value={val} onValueChange={(v) => onChange(gap.id, v)}>
                        <SelectTrigger
                          aria-label={`Gap ${gap.id}`}
                          className={`inline-flex h-8 w-auto min-w-[140px] bg-background text-sm ${
                            ok ? 'border-emerald-600 bg-emerald-50 dark:bg-emerald-950/30' : ''
                          } ${wrong ? 'border-destructive bg-destructive/10' : ''}`}
                        >
                          <SelectValue placeholder="select..." />
                        </SelectTrigger>
                        <SelectContent position="popper">
                          {gap.options.map((opt) => (
                            <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {wrong && (
                        <span className="text-xs font-medium text-emerald-700 dark:text-emerald-400">
                          ({gap.answer})
                        </span>
                      )}
                    </span>
                  );
                })}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border">
          <Button onClick={onCheck}>Check Answers</Button>
          <Button variant="outline" onClick={onReset} className="gap-1.5">
            <RotateCcw className="h-4 w-4" /> Reset
          </Button>
          {checked && (
            <>
              <span className="text-sm font-semibold text-foreground ml-auto">
                Score: {score} / {total}
              </span>
              <Button variant="secondary" onClick={onNext} className="gap-1.5">
                Next: Section B <ArrowRight className="h-4 w-4" />
              </Button>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

interface SectionBProps {
  answers: Record<string, string>;
  checked: boolean;
  onChange: (id: string, value: string) => void;
  onCheck: () => void;
  onReset: () => void;
  onNext: () => void;
}

export const SectionBProducts = ({
  answers,
  checked,
  onChange,
  onCheck,
  onReset,
  onNext,
}: SectionBProps) => {
  const score = scoreSectionB(answers);
  const total = PRODUCT_DEFINITIONS.length;
  const termById = Object.fromEntries(PRODUCT_TERMS.map((t) => [t.id, t.text]));

  return (
    <Card className="service-card">
      <CardContent className="p-6 space-y-6">
        <div>
          <h2 className="text-xl font-bold font-merriweather text-foreground">B. Financial Products</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Match each financial product with its correct benefit.
          </p>
        </div>

        <div className="rounded-lg border border-border bg-muted/30 p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
            Products to match
          </p>
          <div className="flex flex-wrap gap-2">
            {PRODUCT_TERMS.map((t) => (
              <span
                key={t.id}
                className="rounded-md border border-border bg-background px-2.5 py-1 text-sm font-medium text-foreground"
              >
                {t.id}. {t.text}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          {PRODUCT_DEFINITIONS.map((def) => {
            const val = answers[def.id] ?? '';
            const ok = checked && Number(val) === def.answer;
            const wrong = checked && !ok;
            return (
              <div
                key={def.id}
                className="rounded-lg border border-border bg-muted/20 p-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between"
              >
                <p className="text-sm sm:text-base text-foreground">
                  <span className="font-bold text-brand-royal mr-1.5">{def.id}.</span>
                  {def.text}
                </p>
                <div className="flex items-center gap-2 shrink-0">
                  <Select value={val} onValueChange={(v) => onChange(def.id, v)}>
                    <SelectTrigger
                      aria-label={`Product for ${def.id}`}
                      className={`w-full sm:w-56 bg-background ${
                        ok ? 'border-emerald-600' : ''
                      } ${wrong ? 'border-destructive' : ''}`}
                    >
                      <SelectValue placeholder="Choose product..." />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      {PRODUCT_TERMS.map((t) => (
                        <SelectItem key={t.id} value={String(t.id)}>
                          {t.id}. {t.text}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {ok && <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />}
                  {wrong && (
                    <span className="text-xs font-medium text-emerald-700 dark:text-emerald-400 whitespace-nowrap">
                      {def.answer}. {termById[def.answer]}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border">
          <Button onClick={onCheck}>Check Answers</Button>
          <Button variant="outline" onClick={onReset} className="gap-1.5">
            <RotateCcw className="h-4 w-4" /> Reset
          </Button>
          {checked && (
            <>
              <span className="text-sm font-semibold text-foreground ml-auto">
                Score: {score} / {total}
              </span>
              <Button variant="secondary" onClick={onNext} className="gap-1.5">
                Next: Section C <ArrowRight className="h-4 w-4" />
              </Button>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

interface SectionCProps {
  answers: Record<number, string>;
  checked: boolean;
  onChange: (id: number, value: string) => void;
  onCheck: () => void;
  onReset: () => void;
  onNext: () => void;
}

export const SectionCGeneralFinance = ({
  answers,
  checked,
  onChange,
  onCheck,
  onReset,
  onNext,
}: SectionCProps) => {
  const score = scoreSectionC(answers);
  const total = GENERAL_FINANCE_MC.length;

  return (
    <Card className="service-card">
      <CardContent className="p-6 space-y-6">
        <div>
          <h2 className="text-xl font-bold font-merriweather text-foreground">C. General Finance</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Choose the best word or phrase to complete each sentence.
          </p>
        </div>

        <div className="space-y-5">
          {GENERAL_FINANCE_MC.map((q) => {
            const pick = answers[q.id];
            return (
              <div key={q.id} className="space-y-2.5">
                <p className="font-medium text-foreground">
                  {q.id}. {q.prompt}
                </p>
                <div className="grid gap-2 sm:grid-cols-3">
                  {q.options.map((opt) => {
                    const isPicked = pick === opt.id;
                    const isCorrect = opt.id === q.answer;
                    let cls = 'border-border bg-background text-foreground hover:bg-muted';
                    if (checked && isCorrect) {
                      cls = 'border-emerald-600 bg-emerald-50 text-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-200';
                    } else if (checked && isPicked && !isCorrect) {
                      cls = 'border-destructive bg-destructive/10 text-destructive';
                    } else if (!checked && isPicked) {
                      cls = 'border-primary bg-primary/10 text-primary font-medium';
                    }
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => onChange(q.id, opt.id)}
                        className={`flex items-center justify-between rounded-lg border px-3.5 py-2.5 text-left text-sm transition-colors ${cls}`}
                      >
                        <span>
                          <strong className="mr-1.5">{opt.id})</strong>
                          {opt.text}
                        </span>
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

        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border">
          <Button onClick={onCheck}>Check Answers</Button>
          <Button variant="outline" onClick={onReset} className="gap-1.5">
            <RotateCcw className="h-4 w-4" /> Reset
          </Button>
          {checked && (
            <>
              <span className="text-sm font-semibold text-foreground ml-auto">
                Score: {score} / {total}
              </span>
              <Button variant="secondary" onClick={onNext} className="gap-1.5">
                View Results <ArrowRight className="h-4 w-4" />
              </Button>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};