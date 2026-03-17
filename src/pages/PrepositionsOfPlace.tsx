import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, CheckCircle, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ChoiceQuestion {
  before: string;
  optionA: string;
  optionB: string;
  after: string;
  answer: string;
}

const questions: ChoiceQuestion[] = [
  { before: "Don't stand ", optionA: "in front of", optionB: "over", after: " me. I can't see.", answer: "in front of" },
  { before: "We are flying ", optionA: "up", optionB: "over", after: " Paris now. Can you see the Eiffel Tower ", answer: "over" },
  { before: "Can you see the Eiffel Tower ", optionA: "behind", optionB: "below", after: " us?", answer: "below" },
  { before: "My flat is on the first floor. There are two more floors ", optionA: "above", optionB: "under", after: " me.", answer: "above" },
  { before: "I was driving ", optionA: "in front of", optionB: "behind", after: " a red car. I could see the number plates.", answer: "behind" },
  { before: "He took off his clothes and fell ", optionA: "into", optionB: "out of", after: " the water.", answer: "into" },
  { before: "They began walking ", optionA: "up", optionB: "over", after: " the hill. They wanted to visit the castle at the top.", answer: "up" },
];

const PrepositionsOfPlace = () => {
  const [selected, setSelected] = useState<(string | null)[]>(new Array(questions.length).fill(null));
  const [checked, setChecked] = useState(false);
  const [results, setResults] = useState<boolean[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSelect = (qIdx: number, option: string) => {
    if (checked) return;
    const next = [...selected];
    next[qIdx] = option;
    setSelected(next);
  };

  const checkAnswers = () => {
    const res = questions.map((q, i) => selected[i] === q.answer);
    setResults(res);
    setChecked(true);
  };

  const resetQuiz = () => {
    setSelected(new Array(questions.length).fill(null));
    setChecked(false);
    setResults([]);
  };

  const score = results.filter(Boolean).length;
  const total = questions.length;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-20 max-w-3xl">
        <div className="mb-4">
          <Link to="/prepositions">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4 mr-1" /> Back to Prepositions
            </Button>
          </Link>
        </div>

        <div className="mb-8 text-center">
          <Badge className="mb-4" variant="secondary">Grammar Practice</Badge>
          <h1 className="text-3xl font-bold text-foreground mb-2">Prepositions of Place</h1>
          <p className="text-muted-foreground">Choose the correct preposition to complete each sentence.</p>
        </div>

        <Card className="bg-gradient-to-br from-card via-emerald-50 dark:via-emerald-950/10 to-card border-brand-accent/20">
          <CardHeader className="pb-3 border-b border-brand-accent/20">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg text-brand-navy dark:text-brand-royal">
                Choose the correct word
              </CardTitle>
              <Badge className="bg-brand-accent text-white">Multiple Choice</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-5 pt-5">
            {questions.map((q, qIdx) => {
              const isCorrect = checked ? results[qIdx] : undefined;
              return (
                <div key={qIdx} className="space-y-2">
                  <div className="flex flex-wrap items-center gap-y-1">
                    <span className="text-brand-royal font-bold text-sm mr-2">{qIdx + 1}.</span>
                    <span className="text-sm font-medium text-foreground">{q.before}</span>
                    <button
                      onClick={() => handleSelect(qIdx, q.optionA)}
                      disabled={checked}
                      className={`mx-1 px-3 py-1 rounded-md text-sm font-semibold border transition-all ${
                        checked && q.answer === q.optionA
                          ? 'border-green-500 bg-green-50 dark:bg-green-950/20 text-green-700'
                          : checked && selected[qIdx] === q.optionA && q.answer !== q.optionA
                          ? 'border-red-500 bg-red-50 dark:bg-red-950/20 text-red-700 line-through'
                          : selected[qIdx] === q.optionA
                          ? 'border-primary bg-primary/10 text-primary'
                          : 'border-border hover:border-primary/50 hover:bg-primary/5'
                      }`}
                    >
                      {q.optionA}
                    </button>
                    <span className="text-muted-foreground font-medium">/</span>
                    <button
                      onClick={() => handleSelect(qIdx, q.optionB)}
                      disabled={checked}
                      className={`mx-1 px-3 py-1 rounded-md text-sm font-semibold border transition-all ${
                        checked && q.answer === q.optionB
                          ? 'border-green-500 bg-green-50 dark:bg-green-950/20 text-green-700'
                          : checked && selected[qIdx] === q.optionB && q.answer !== q.optionB
                          ? 'border-red-500 bg-red-50 dark:bg-red-950/20 text-red-700 line-through'
                          : selected[qIdx] === q.optionB
                          ? 'border-primary bg-primary/10 text-primary'
                          : 'border-border hover:border-primary/50 hover:bg-primary/5'
                      }`}
                    >
                      {q.optionB}
                    </button>
                    <span className="text-sm font-medium text-foreground">{q.after}</span>
                    {checked && (
                      <span className="ml-2">
                        {isCorrect ? (
                          <CheckCircle className="h-4 w-4 text-green-600 inline" />
                        ) : (
                          <XCircle className="h-4 w-4 text-red-500 inline" />
                        )}
                      </span>
                    )}
                  </div>
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
                    <p className={`text-sm font-bold ${score === total ? 'text-green-600' : 'text-brand-royal'}`}>
                      You got {score} out of {total} correct!
                    </p>
                    <Progress value={(score / total) * 100} className="mt-2" />
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
      </main>
      <Footer />
    </div>
  );
};

export default PrepositionsOfPlace;
