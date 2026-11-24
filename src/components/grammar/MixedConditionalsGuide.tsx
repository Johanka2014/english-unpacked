import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MIXED_PATTERNS, type ConditionalTime } from '@/data/mixedConditionals';

const VERB_CLASS: Record<ConditionalTime, string> = {
  past: 'font-semibold text-destructive',
  present: 'font-semibold text-emerald-700 dark:text-emerald-400',
  future: 'font-semibold text-purple-700 dark:text-purple-400',
};

const BORDER_CLASS: Record<ConditionalTime, string> = {
  past: 'border-l-4 border-l-destructive',
  present: 'border-l-4 border-l-emerald-600',
  future: 'border-l-4 border-l-purple-600',
};

interface Props {
  onStartPractice: () => void;
}

const MixedConditionalsGuide = ({ onStartPractice }: Props) => (
  <div className="space-y-6">
    <Card className="service-card">
      <CardContent className="p-6 space-y-4">
        <p className="text-foreground leading-relaxed">
          Sometimes Unreal Conditional sentences are mixed. This means that the time in the <em>if</em>-clause is not the same as the time in the result. Study the six patterns below to see how past, present, and future forms combine.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm text-emerald-900 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-200">
            <span className="font-semibold mr-1">Green</span> = Present Unreal Conditional
          </span>
          <span className="inline-flex items-center rounded-full border border-destructive/30 bg-destructive/10 px-3 py-1 text-sm text-destructive">
            <span className="font-semibold mr-1">Red</span> = Past Unreal Conditional
          </span>
          <span className="inline-flex items-center rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-sm text-purple-900 dark:border-purple-800 dark:bg-purple-950/40 dark:text-purple-200">
            <span className="font-semibold mr-1">Purple</span> = Future Unreal Conditional
          </span>
        </div>
      </CardContent>
    </Card>

    <div className="grid gap-6 md:grid-cols-2">
      {MIXED_PATTERNS.map((pattern) => (
        <Card key={pattern.id} className={`service-card ${BORDER_CLASS[pattern.from]}`}>
          <CardContent className="p-6 space-y-4">
            <h3 className="text-lg font-bold font-merriweather text-foreground border-b border-border pb-2">
              {pattern.label}
            </h3>
            <div className="space-y-3">
              {pattern.examples.map((ex, idx) => (
                <div key={idx} className="rounded-lg bg-muted/40 p-3.5 border border-border/60">
                  <p className="text-base text-foreground leading-relaxed">
                    {ex.beforeFirst}
                    <span className={VERB_CLASS[ex.firstTime]}>{ex.firstVerb}</span>
                    {ex.between}
                    <span className={VERB_CLASS[ex.secondTime]}>{ex.secondVerb}</span>
                    {ex.afterSecond}
                  </p>
                  <p className="text-sm text-muted-foreground italic mt-1">{ex.explanation}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>

    <div className="text-center pt-2">
      <Button onClick={onStartPractice} size="lg" className="gap-2">
        Go to Practice Exercises <ArrowRight className="h-4 w-4" />
      </Button>
    </div>
  </div>
);

export default MixedConditionalsGuide;