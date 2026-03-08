import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { CheckCircle2, XCircle, RotateCcw } from 'lucide-react';

interface Situation {
  id: number;
  text: string;
  correctDept: string;
}

const departments = [
  { letter: 'a', name: 'Personnel' },
  { letter: 'b', name: 'Accounts' },
  { letter: 'c', name: 'Technical support' },
  { letter: 'd', name: 'Quality control' },
  { letter: 'e', name: 'Sales' },
  { letter: 'f', name: 'Marketing' },
  { letter: 'g', name: 'Research and development' },
  { letter: 'h', name: 'Production' },
];

const situations: Situation[] = [
  { id: 1, text: 'Mr Mitchell is a marketing executive who has received several complaints from customers about faulty goods.', correctDept: 'd' },
  { id: 2, text: 'Mr Davies is a consultant who thinks he has not been paid for an invoice.', correctDept: 'b' },
  { id: 3, text: 'Mr Finer has just received the results of some laboratory tests on a possible new product.', correctDept: 'g' },
  { id: 4, text: 'Ms Slater is a sales executive who is interested in working for the company.', correctDept: 'a' },
  { id: 5, text: 'Ms Evans works in the company as a secretary and she has a problem with her computer.', correctDept: 'c' },
  { id: 6, text: 'Mr Martin is a retailer who is interested in stocking the company\'s products.', correctDept: 'e' },
];

const DepartmentMatchingExercise = () => {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);

  const handleSelect = (id: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
    setChecked(false);
  };

  const handleCheck = () => setChecked(true);
  const handleReset = () => { setAnswers({}); setChecked(false); };

  const allFilled = situations.every((s) => answers[s.id]);
  const score = checked ? situations.filter((s) => answers[s.id] === s.correctDept).length : 0;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Company Departments</CardTitle>
        <p className="text-sm text-muted-foreground">
          Look at the list of departments (a–h) and read people's situations (1–6).
          Decide which department each person should ask to speak to when phoning the company.
          There are more departments than you need.
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Department list */}
        <div className="flex flex-wrap gap-2">
          {departments.map((d) => (
            <span key={d.letter} className="text-sm rounded-full border px-3 py-1 bg-muted/50 text-foreground">
              <span className="font-semibold">{d.letter}</span> {d.name}
            </span>
          ))}
        </div>

        {/* Situations */}
        <div className="space-y-3">
          {situations.map((s) => {
            const isCorrect = checked && answers[s.id] === s.correctDept;
            const isWrong = checked && answers[s.id] && answers[s.id] !== s.correctDept;
            const correctName = departments.find((d) => d.letter === s.correctDept)?.name;

            return (
              <div
                key={s.id}
                className={`flex flex-col sm:flex-row sm:items-center gap-3 rounded-lg border-2 p-3 transition-colors ${
                  isCorrect
                    ? 'border-green-500 bg-green-50 dark:bg-green-950/30'
                    : isWrong
                    ? 'border-red-400 bg-red-50 dark:bg-red-950/30'
                    : 'border-border bg-card'
                }`}
              >
                <span className="text-sm font-bold text-muted-foreground w-5 shrink-0">{s.id}</span>
                <p className="text-sm text-foreground flex-1">{s.text}</p>
                <div className="flex items-center gap-2 shrink-0">
                  <Select
                    value={answers[s.id] || ''}
                    onValueChange={(v) => handleSelect(s.id, v)}
                  >
                    <SelectTrigger className="h-8 w-20 text-sm">
                      <SelectValue placeholder="..." />
                    </SelectTrigger>
                    <SelectContent>
                      {departments.map((d) => (
                        <SelectItem key={d.letter} value={d.letter}>
                          {d.letter} – {d.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {isCorrect && <CheckCircle2 className="h-4 w-4 text-green-600" />}
                  {isWrong && <XCircle className="h-4 w-4 text-red-500" />}
                </div>
                {isWrong && (
                  <p className="text-xs text-red-600 sm:ml-8">Correct: {s.correctDept} – {correctName}</p>
                )}
              </div>
            );
          })}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4">
          <Button onClick={handleCheck} disabled={!allFilled || checked}>Check Answers</Button>
          <Button variant="outline" onClick={handleReset} className="gap-2">
            <RotateCcw className="h-4 w-4" /> Reset
          </Button>
          {checked && (
            <span className="text-sm font-medium text-muted-foreground">Score: {score}/{situations.length}</span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default DepartmentMatchingExercise;
