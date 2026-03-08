import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { CheckCircle2, XCircle, RotateCcw } from 'lucide-react';

const jobs = [
  { id: 1, text: "I'm a nurse." },
  { id: 2, text: 'I work in marketing.' },
  { id: 3, text: "I'm a manager on a construction site." },
  { id: 4, text: "I'm a PA." },
  { id: 5, text: "I'm an IT programmer." },
  { id: 6, text: "I'm a project manager." },
  { id: 7, text: "I'm an architect." },
  { id: 8, text: "I'm a banker." },
];

const responsibilities = [
  { letter: 'A', text: "I'm responsible for making sure that our projects come in on schedule and within budget." },
  { letter: 'B', text: "My job involves managing my customers' money effectively and profitably." },
  { letter: 'C', text: 'My company develops websites for clients.' },
  { letter: 'D', text: 'My main responsibility is to promote new products ahead of their launch.' },
  { letter: 'E', text: "I'm in charge of designing new buildings for our clients." },
  { letter: 'F', text: 'I help to look after people when they are sick.' },
  { letter: 'G', text: "My job entails organizing my boss's affairs." },
  { letter: 'H', text: 'I oversee a team of 250 builders and twenty administrative staff.' },
];

const correctAnswers: Record<number, string> = {
  1: 'F',
  2: 'D',
  3: 'H',
  4: 'G',
  5: 'C',
  6: 'A',
  7: 'E',
  8: 'B',
};

const JobResponsibilitiesExercise = () => {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);

  const handleSelect = (id: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
    setChecked(false);
  };

  const handleCheck = () => setChecked(true);
  const handleReset = () => { setAnswers({}); setChecked(false); };

  const allFilled = jobs.every((j) => answers[j.id]);
  const score = checked ? jobs.filter((j) => answers[j.id] === correctAnswers[j.id]).length : 0;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Job Responsibilities</CardTitle>
        <p className="text-sm text-muted-foreground">
          Match the sentences on the left with their corresponding responsibilities on the right.
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Responsibilities reference */}
        <div className="grid gap-2 sm:grid-cols-2">
          {responsibilities.map((r) => (
            <div key={r.letter} className="rounded-lg border bg-muted/40 p-3">
              <p className="text-sm text-foreground">
                <span className="font-semibold">{r.letter}</span>{' '}
                <span className="italic">{r.text}</span>
              </p>
            </div>
          ))}
        </div>

        {/* Matching */}
        <div className="space-y-3">
          {jobs.map((j) => {
            const isCorrect = checked && answers[j.id] === correctAnswers[j.id];
            const isWrong = checked && answers[j.id] && answers[j.id] !== correctAnswers[j.id];

            return (
              <div
                key={j.id}
                className={`flex flex-col sm:flex-row sm:items-center gap-3 rounded-lg border-2 p-3 transition-colors ${
                  isCorrect
                    ? 'border-green-500 bg-green-50 dark:bg-green-950/30'
                    : isWrong
                    ? 'border-red-400 bg-red-50 dark:bg-red-950/30'
                    : 'border-border bg-card'
                }`}
              >
                <span className="text-sm font-bold text-muted-foreground w-5 shrink-0">{j.id}</span>
                <p className="text-sm text-foreground flex-1">{j.text}</p>
                <div className="flex items-center gap-2 shrink-0">
                  <Select value={answers[j.id] || ''} onValueChange={(v) => handleSelect(j.id, v)}>
                    <SelectTrigger className="h-8 w-16 text-sm">
                      <SelectValue placeholder="..." />
                    </SelectTrigger>
                    <SelectContent>
                      {responsibilities.map((r) => (
                        <SelectItem key={r.letter} value={r.letter}>{r.letter}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {isCorrect && <CheckCircle2 className="h-4 w-4 text-green-600" />}
                  {isWrong && <XCircle className="h-4 w-4 text-red-500" />}
                </div>
                {isWrong && (
                  <p className="text-xs text-red-600 sm:ml-8">Correct: {correctAnswers[j.id]}</p>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <Button onClick={handleCheck} disabled={!allFilled || checked}>Check Answers</Button>
          <Button variant="outline" onClick={handleReset} className="gap-2">
            <RotateCcw className="h-4 w-4" /> Reset
          </Button>
          {checked && (
            <span className="text-sm font-medium text-muted-foreground">Score: {score}/{jobs.length}</span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default JobResponsibilitiesExercise;
