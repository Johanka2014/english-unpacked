import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle, XCircle, PenLine } from 'lucide-react';

interface GapItem {
  answer: string;
}

interface DropdownQuestion {
  segments: string[];
  gaps: GapItem[];
}

const OPTIONS = ['about', 'to', 'for', 'with', 'from', 'in', 'as'];

const exercises: DropdownQuestion[] = [
  { segments: ["Can we talk ", " the project?"], gaps: [{ answer: 'about' }] },
  { segments: ["I need to talk ", " my manager."], gaps: [{ answer: 'to' }] },
  { segments: ["She works ", " a large company."], gaps: [{ answer: 'for' }] },
  { segments: ["He works ", " a software engineer."], gaps: [{ answer: 'as' }] },
  { segments: ["I applied ", " the marketing position."], gaps: [{ answer: 'for' }] },
  { segments: ["She applied ", " that university."], gaps: [{ answer: 'to' }] },
  { segments: ["I'm waiting ", " the bus."], gaps: [{ answer: 'for' }] },
  { segments: ["I borrowed a pen ", " my colleague."], gaps: [{ answer: 'from' }] },
  { segments: ["I completely agree ", " you."], gaps: [{ answer: 'with' }] },
  { segments: ["She works ", " a small office ", " the city centre."], gaps: [{ answer: 'in' }, { answer: 'in' }] },
  { segments: ["He writes ", " a travel magazine."], gaps: [{ answer: 'for' }] },
  { segments: ["I wrote ", " my friend yesterday."], gaps: [{ answer: 'to' }] },
  { segments: ["Who is going to pay ", " dinner?"], gaps: [{ answer: 'for' }] },
  { segments: ["I love listening ", " classical music."], gaps: [{ answer: 'to' }] },
  { segments: ["Can I ask ", " some help?"], gaps: [{ answer: 'for' }] },
];

const VerbPrepositionDropdownExercise = () => {
  const totalGaps = exercises.reduce((sum, ex) => sum + ex.gaps.length, 0);
  const [answers, setAnswers] = useState<string[]>(new Array(totalGaps).fill(''));
  const [checked, setChecked] = useState(false);
  const [results, setResults] = useState<boolean[]>([]);

  const setAnswer = (globalIdx: number, value: string) => {
    const next = [...answers];
    next[globalIdx] = value;
    setAnswers(next);
  };

  const checkAnswers = () => {
    let gapIdx = 0;
    const res: boolean[] = [];
    exercises.forEach((ex) => {
      ex.gaps.forEach((gap) => {
        res.push(answers[gapIdx].toLowerCase() === gap.answer.toLowerCase());
        gapIdx++;
      });
    });
    setResults(res);
    setChecked(true);
  };

  const resetQuiz = () => {
    setAnswers(new Array(totalGaps).fill(''));
    setChecked(false);
    setResults([]);
  };

  const score = results.filter(Boolean).length;
  let globalGapIdx = 0;

  return (
    <Card className="bg-gradient-to-br from-card via-orange-50 dark:via-orange-950/10 to-card border-brand-accent/20">
      <CardHeader className="pb-3 border-b border-brand-accent/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <PenLine className="h-5 w-5 text-brand-accent" />
            <CardTitle className="text-lg text-brand-navy dark:text-brand-royal">
              Choose the correct preposition
            </CardTitle>
          </div>
          <Badge className="bg-brand-accent text-white">Dropdown</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-5 pt-5">
        {exercises.map((ex, qIdx) => {
          const gapStartIdx = globalGapIdx;
          const gapElements: JSX.Element[] = [];

          ex.segments.forEach((seg, segIdx) => {
            gapElements.push(
              <span key={`seg-${qIdx}-${segIdx}`} className="text-sm font-medium text-foreground">
                {seg}
              </span>
            );

            if (segIdx < ex.gaps.length) {
              const currentGapIdx = gapStartIdx + segIdx;
              const gap = ex.gaps[segIdx];
              const isCorrect = checked ? results[currentGapIdx] : undefined;

              gapElements.push(
                <span key={`gap-${qIdx}-${segIdx}`} className="inline-block mx-1 align-middle">
                  <Select
                    value={answers[currentGapIdx] || undefined}
                    onValueChange={(val) => setAnswer(currentGapIdx, val)}
                    disabled={checked}
                  >
                    <SelectTrigger
                      className={`w-[100px] h-8 text-sm inline-flex ${
                        checked
                          ? isCorrect
                            ? 'border-green-500 bg-green-50 dark:bg-green-950/20'
                            : 'border-red-500 bg-red-50 dark:bg-red-950/20'
                          : 'border-primary/30'
                      }`}
                    >
                      <SelectValue placeholder="—" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border border-border shadow-lg z-50">
                      {OPTIONS.map((opt) => (
                        <SelectItem key={opt} value={opt}>
                          {opt}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {checked && !isCorrect && (
                    <span className="text-xs text-red-500 font-medium ml-1">{gap.answer}</span>
                  )}
                </span>
              );
            }
          });

          globalGapIdx = gapStartIdx + ex.gaps.length;

          return (
            <div key={qIdx} className="flex flex-wrap items-center gap-y-1">
              <span className="text-brand-royal font-bold text-sm mr-1">{qIdx + 1}.</span>
              {gapElements}
              {checked && (
                <span className="ml-2">
                  {ex.gaps.every((_, gIdx) => results[gapStartIdx + gIdx]) ? (
                    <CheckCircle className="h-4 w-4 text-green-600 inline" />
                  ) : (
                    <XCircle className="h-4 w-4 text-red-500 inline" />
                  )}
                </span>
              )}
            </div>
          );
        })}

        <div className="border-t border-primary/10 pt-4 space-y-3">
          {!checked ? (
            <Button
              className="w-full bg-brand-royal hover:bg-brand-navy text-white font-semibold"
              onClick={checkAnswers}
            >
              Check Answers
            </Button>
          ) : (
            <>
              <div className="text-center bg-primary/5 p-3 rounded-lg border border-primary/20">
                <p className={`text-sm font-bold ${score === totalGaps ? 'text-green-600' : 'text-brand-royal'}`}>
                  You got {score} out of {totalGaps} correct!
                </p>
                <Progress value={(score / totalGaps) * 100} className="mt-2" />
              </div>
              <Button
                variant="outline"
                className="w-full border-brand-royal text-brand-royal hover:bg-brand-royal hover:text-white"
                onClick={resetQuiz}
              >
                Try Again
              </Button>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default VerbPrepositionDropdownExercise;
