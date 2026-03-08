import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { CheckCircle2, XCircle, RotateCcw } from 'lucide-react';

interface Person {
  name: string;
  description: string;
}

interface OrgPosition {
  id: number;
  correctName: string;
  surname: string;
  jobTitle: string;
  level: number;
}

const people: Person[] = [
  { name: 'Leila', description: 'My job is to make sure that the company is producing what people want to buy.' },
  { name: 'Jenny', description: "I'm responsible for recruitment and issues to do with staff welfare." },
  { name: 'Kevin', description: 'I have general responsibility for the entire company. I represent the company in the financial community and the business world.' },
  { name: 'Guy', description: 'I lead the team which makes our products.' },
  { name: 'Richard', description: 'I do the bookkeeping and the payroll.' },
  { name: 'Gamal', description: "I'm responsible for money planning." },
  { name: 'Bernard', description: "I'm in charge of the people who sell our products." },
  { name: 'Diane', description: "I'm responsible for the whole company when Kevin is not here." },
  { name: 'Beverley', description: 'My area of responsibility is finding and testing out new products.' },
];

const positions: OrgPosition[] = [
  { id: 1, correctName: 'Kevin', surname: 'Thompson', jobTitle: 'Managing Director', level: 0 },
  { id: 2, correctName: 'Diane', surname: 'Drew', jobTitle: 'Assistant Managing Director', level: 1 },
  { id: 3, correctName: 'Bernard', surname: 'Yates', jobTitle: 'Sales Director', level: 2 },
  { id: 4, correctName: 'Gamal', surname: 'Asaad', jobTitle: 'Finance Director', level: 2 },
  { id: 5, correctName: 'Leila', surname: 'Smith', jobTitle: 'Marketing Director', level: 2 },
  { id: 6, correctName: 'Beverley', surname: 'Green', jobTitle: 'Research and Development Manager', level: 3 },
  { id: 7, correctName: 'Jenny', surname: 'Tandy', jobTitle: 'Human Resources Manager', level: 3 },
  { id: 8, correctName: 'Guy', surname: 'Laporte', jobTitle: 'Production Manager', level: 3 },
  { id: 9, correctName: 'Richard', surname: 'Ray', jobTitle: 'Accountant', level: 3 },
];

const names = people.map((p) => p.name).sort();

const OrganigramExercise = () => {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);

  const handleSelect = (posId: number, name: string) => {
    setAnswers((prev) => ({ ...prev, [posId]: name }));
    setChecked(false);
  };

  const handleCheck = () => setChecked(true);

  const handleReset = () => {
    setAnswers({});
    setChecked(false);
  };

  const allFilled = positions.every((p) => answers[p.id]);
  const score = checked ? positions.filter((p) => answers[p.id] === p.correctName).length : 0;

  // Group positions by level
  const levels = [0, 1, 2, 3];

  return (
    <Card className="mb-10">
      <CardHeader>
        <CardTitle className="text-xl">Getting Started</CardTitle>
        <p className="text-sm text-muted-foreground">
          Read the introductions and write the correct first names on the organigram below.
        </p>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* People introductions */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {people.map((p) => (
            <div
              key={p.name}
              className="rounded-lg border bg-muted/40 p-3"
            >
              <p className="text-sm text-foreground">
                <span className="font-semibold">{p.name}:</span>{' '}
                <span className="italic">"{p.description}"</span>
              </p>
            </div>
          ))}
        </div>

        {/* Organigram */}
        <div className="space-y-4">
          {levels.map((level) => {
            const positionsAtLevel = positions.filter((p) => p.level === level);
            return (
              <div key={level} className="flex flex-wrap justify-center gap-3">
                {positionsAtLevel.map((pos) => {
                  const isCorrect = checked && answers[pos.id] === pos.correctName;
                  const isWrong = checked && answers[pos.id] && answers[pos.id] !== pos.correctName;

                  return (
                    <div
                      key={pos.id}
                      className={`rounded-lg border-2 p-3 w-full sm:w-56 transition-colors ${
                        isCorrect
                          ? 'border-green-500 bg-green-50 dark:bg-green-950/30'
                          : isWrong
                          ? 'border-red-400 bg-red-50 dark:bg-red-950/30'
                          : 'border-border bg-card'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-muted-foreground">{pos.id}</span>
                        <Select
                          value={answers[pos.id] || ''}
                          onValueChange={(v) => handleSelect(pos.id, v)}
                        >
                          <SelectTrigger className="h-8 w-28 text-sm">
                            <SelectValue placeholder="Name..." />
                          </SelectTrigger>
                          <SelectContent>
                            {names.map((n) => (
                              <SelectItem key={n} value={n}>
                                {n}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <span className="text-sm font-medium text-foreground">{pos.surname}</span>
                        {isCorrect && <CheckCircle2 className="h-4 w-4 text-green-600 ml-auto" />}
                        {isWrong && <XCircle className="h-4 w-4 text-red-500 ml-auto" />}
                      </div>
                      <p className="text-xs text-muted-foreground font-medium">{pos.jobTitle}</p>
                      {isWrong && checked && (
                        <p className="text-xs text-red-600 mt-1">
                          Correct: {pos.correctName}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4">
          <Button onClick={handleCheck} disabled={!allFilled || checked}>
            Check Answers
          </Button>
          <Button variant="outline" onClick={handleReset} className="gap-2">
            <RotateCcw className="h-4 w-4" /> Reset
          </Button>
          {checked && (
            <span className="text-sm font-medium text-muted-foreground">
              Score: {score}/{positions.length}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default OrganigramExercise;
