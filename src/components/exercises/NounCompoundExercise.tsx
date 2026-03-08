import { useState, useMemo } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { GrammarExercise } from '@/data/b1GrammarData';

const NounCompoundExercise = ({ exercise }: { exercise: GrammarExercise }) => {
  const groups = exercise.compoundGroups!;

  // Part 1: compound matching
  const shuffledB = useMemo(() => [...groups.groupB].sort(() => Math.random() - 0.5), [groups.groupB]);
  const [selectedA, setSelectedA] = useState<string | null>(null);
  const [matched, setMatched] = useState<Map<string, string>>(new Map());
  const [wrongPair, setWrongPair] = useState<string | null>(null);
  const [part1Complete, setPart1Complete] = useState(false);

  // Part 2: fill blanks
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);

  const usedA = new Set(matched.keys());
  const usedB = new Set(matched.values());

  const handleClickA = (word: string) => {
    if (part1Complete || usedA.has(word)) return;
    setSelectedA(word);
    setWrongPair(null);
  };

  const handleClickB = (word: string) => {
    if (part1Complete || usedB.has(word) || !selectedA) return;
    const isCorrect = groups.compounds.some(c => c.a === selectedA && c.b === word);
    if (isCorrect) {
      const next = new Map(matched);
      next.set(selectedA, word);
      setMatched(next);
      setSelectedA(null);
      setWrongPair(null);
      if (next.size === groups.compounds.length) {
        setPart1Complete(true);
      }
    } else {
      setWrongPair(word);
      setTimeout(() => setWrongPair(null), 800);
      setSelectedA(null);
    }
  };

  const compoundList = Array.from(matched.entries()).map(([a, b]) => `${a} ${b}`);

  const score = checked
    ? exercise.items.filter(item => (answers[item.id] || '').trim().toLowerCase() === item.answer.toLowerCase()).length
    : 0;

  return (
    <Card className="service-card">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2 font-merriweather text-foreground">{exercise.title}</h3>
        <p className="text-muted-foreground mb-6">{exercise.instruction}</p>

        {/* Part 1: Match compounds */}
        <div className="flex flex-col md:flex-row gap-6 mb-6">
          <div className="flex-1">
            <h4 className="font-semibold mb-2 text-sm text-muted-foreground">A</h4>
            <div className="flex flex-wrap gap-2">
              {groups.groupA.map(word => (
                <button
                  key={word}
                  onClick={() => handleClickA(word)}
                  disabled={usedA.has(word) || part1Complete}
                  className={`px-3 py-1.5 rounded-md text-sm border transition-all ${
                    usedA.has(word)
                      ? 'line-through opacity-40 border-border bg-muted cursor-default'
                      : selectedA === word
                      ? 'border-primary bg-primary/10 text-primary font-medium'
                      : 'border-border bg-background hover:bg-muted cursor-pointer'
                  }`}
                >
                  {word}
                </button>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <h4 className="font-semibold mb-2 text-sm text-muted-foreground">B</h4>
            <div className="flex flex-wrap gap-2">
              {shuffledB.map(word => (
                <button
                  key={word}
                  onClick={() => handleClickB(word)}
                  disabled={usedB.has(word) || part1Complete}
                  className={`px-3 py-1.5 rounded-md text-sm border transition-all ${
                    usedB.has(word)
                      ? 'line-through opacity-40 border-border bg-muted cursor-default'
                      : wrongPair === word
                      ? 'border-destructive bg-destructive/10 text-destructive'
                      : 'border-border bg-background hover:bg-muted cursor-pointer'
                  }`}
                >
                  {word}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Matched compounds display */}
        {matched.size > 0 && (
          <div className="mb-6 p-4 bg-muted/50 rounded-lg border border-border">
            <p className="text-sm font-medium text-muted-foreground mb-2">Compound nouns formed:</p>
            <div className="flex flex-wrap gap-2">
              {compoundList.map(compound => (
                <span key={compound} className="px-3 py-1 rounded-full text-sm bg-green-100 dark:bg-green-950/40 text-green-700 dark:text-green-400 border border-green-300 dark:border-green-800">
                  {compound}
                </span>
              ))}
            </div>
          </div>
        )}

        {!part1Complete && matched.size < groups.compounds.length && (
          <p className="text-sm text-muted-foreground italic mb-4">
            Click a word from A, then click its match from B. {groups.compounds.length - matched.size} remaining.
          </p>
        )}

        {/* Part 2: Fill in sentences */}
        {part1Complete && (
          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-sm font-medium text-muted-foreground mb-4">Now complete the sentences using the compound nouns:</p>
            <div className="space-y-4">
              {exercise.items.map(item => {
                const userAnswer = answers[item.id] || '';
                const isCorrect = checked && userAnswer.trim().toLowerCase() === item.answer.toLowerCase();
                const isWrong = checked && userAnswer.trim() !== '' && !isCorrect;

                return (
                  <div key={item.id} className="flex items-start gap-3">
                    <span className="text-sm font-medium text-muted-foreground mt-2 w-6">{item.id}.</span>
                    <div className="flex-1">
                      <p className="text-sm text-foreground mb-1">{item.prompt}</p>
                      <input
                        type="text"
                        value={userAnswer}
                        onChange={e => setAnswers(prev => ({ ...prev, [item.id]: e.target.value }))}
                        className={`w-full max-w-xs border rounded-md px-3 py-1.5 text-sm transition-colors ${
                          isCorrect ? 'border-green-500 bg-green-50 dark:bg-green-950/30' :
                          isWrong ? 'border-destructive bg-destructive/10' :
                          'border-border bg-background'
                        }`}
                        disabled={checked}
                        placeholder="Type compound noun..."
                      />
                      {isWrong && <p className="text-xs text-destructive mt-1">Correct answer: {item.answer}</p>}
                    </div>
                  </div>
                );
              })}
            </div>
            {!checked ? (
              <Button onClick={() => setChecked(true)} className="mt-6">
                Check Answers
              </Button>
            ) : (
              <div className="mt-4 p-3 bg-muted rounded-lg">
                <p className="text-sm font-medium text-foreground">
                  Score: {score} / {exercise.items.length}
                </p>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default NounCompoundExercise;
