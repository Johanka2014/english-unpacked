import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RotateCcw } from 'lucide-react';

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
  1: 'F', 2: 'D', 3: 'H', 4: 'G', 5: 'C', 6: 'A', 7: 'E', 8: 'B',
};

const JobResponsibilitiesExercise = () => {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const [matched, setMatched] = useState<Map<number, string>>(new Map());
  const [feedback, setFeedback] = useState<string | null>(null);
  const [feedbackType, setFeedbackType] = useState<'correct' | 'incorrect' | null>(null);

  const shuffledResponsibilities = useMemo(
    () => [...responsibilities].sort(() => Math.random() - 0.5),
    []
  );

  const matchedLetters = new Set(matched.values());

  const handleJobClick = (id: number) => {
    if (matched.has(id)) return;
    setSelectedJob(id);
    setFeedback(null);
  };

  const handleResponsibilityClick = (letter: string) => {
    if (matchedLetters.has(letter) || selectedJob === null) return;

    if (correctAnswers[selectedJob] === letter) {
      setMatched((prev) => new Map([...prev, [selectedJob, letter]]));
      setSelectedJob(null);
      setFeedback('Correct!');
      setFeedbackType('correct');
      if (matched.size + 1 === jobs.length) {
        setFeedback('Excellent! You matched all jobs to their responsibilities.');
      }
    } else {
      setFeedback('Not quite — try again.');
      setFeedbackType('incorrect');
      setSelectedJob(null);
    }
  };

  const handleReset = () => {
    setMatched(new Map());
    setSelectedJob(null);
    setFeedback(null);
    setFeedbackType(null);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Job Responsibilities</CardTitle>
        <p className="text-sm text-muted-foreground">
          Click a job on the left, then click its matching responsibility on the right.
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Jobs column */}
          <div className="w-full md:w-1/3">
            <h4 className="font-semibold mb-2 text-center text-sm text-muted-foreground">Jobs</h4>
            <div className="space-y-2">
              {jobs.map((j) => (
                <div
                  key={j.id}
                  onClick={() => handleJobClick(j.id)}
                  className={`p-3 rounded-lg border cursor-pointer transition-all text-sm ${
                    matched.has(j.id)
                      ? 'bg-green-50 dark:bg-green-950/30 text-green-700 dark:text-green-400 border-green-500 cursor-default'
                      : selectedJob === j.id
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'bg-card border-border hover:border-primary/50 hover:bg-accent/30'
                  }`}
                >
                  <span className="font-semibold mr-2">{j.id}</span>
                  {j.text}
                </div>
              ))}
            </div>
          </div>

          {/* Responsibilities column */}
          <div className="w-full md:w-2/3">
            <h4 className="font-semibold mb-2 text-center text-sm text-muted-foreground">Responsibilities</h4>
            <div className="space-y-2">
              {shuffledResponsibilities.map((r) => (
                <div
                  key={r.letter}
                  onClick={() => handleResponsibilityClick(r.letter)}
                  className={`p-3 rounded-lg border cursor-pointer transition-all text-sm ${
                    matchedLetters.has(r.letter)
                      ? 'bg-green-50 dark:bg-green-950/30 text-green-700 dark:text-green-400 border-green-500 cursor-default'
                      : 'bg-card border-border hover:border-primary/50 hover:bg-accent/30'
                  }`}
                >
                  <span className="font-semibold mr-2">{r.letter}</span>
                  <span className="italic">{r.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Feedback & controls */}
        <div className="flex items-center gap-4">
          <Button variant="outline" onClick={handleReset} className="gap-2">
            <RotateCcw className="h-4 w-4" /> Reset
          </Button>
          {feedback && (
            <span className={`text-sm font-semibold ${feedbackType === 'correct' ? 'text-green-600' : 'text-red-600'}`}>
              {feedback}
            </span>
          )}
          <span className="text-sm text-muted-foreground ml-auto">
            {matched.size}/{jobs.length} matched
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobResponsibilitiesExercise;
