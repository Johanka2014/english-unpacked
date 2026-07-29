import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, CheckCircle, XCircle, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import PrepositionDropdownExercise from '@/components/PrepositionDropdownExercise';
import inOnAtPlaceImage from '@/assets/prepositions-place-in-on-at.jpg';

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
          <p className="text-muted-foreground">Learn in, on and at for position, then practise in front of, behind, above, below and more.</p>
        </div>

        {/* Explanation: in, on, at for PLACE */}
        <Card className="mb-6 bg-gradient-to-br from-card via-orange-50 dark:via-orange-950/10 to-card border-brand-accent/20">
          <CardHeader className="pb-3 border-b border-brand-accent/20">
            <div className="flex items-center gap-3">
              <Badge className="bg-brand-accent text-white">Before you start</Badge>
              <CardTitle className="text-xl text-brand-navy dark:text-brand-royal">
                in, on, at for PLACE
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-3 pt-4 text-sm text-foreground/80">
            <p>
              <strong>in</strong>, <strong>on</strong> and <strong>at</strong> are also used for time, but here they
              describe <strong>position</strong>. The same "size" idea helps.
            </p>
            <ul className="space-y-2">
              <li>
                <strong>in</strong> = inside something with space or borders —
                <em> in Italy, in a house, in the fridge, in the street</em>
              </li>
              <li>
                <strong>on</strong> = touching a surface or a line —
                <em> on the bed, on the desk, on the ground, on the wall</em>
              </li>
              <li>
                <strong>at</strong> = a point or a place with a purpose —
                <em> at the station, at home, at the hospital, at the table</em>
              </li>
            </ul>
            <figure className="pt-2">
              <img
                src={inOnAtPlaceImage}
                alt="Infographic: IN for being inside an area such as a house, Italy or the fridge; ON for touching a surface such as a desk, wall or the ground; AT for an exact point or place such as the station, home or the table"
                loading="lazy"
                width={1536}
                height={768}
                className="w-[90%] mx-auto rounded-lg border border-brand-accent/20"
              />
              <figcaption className="mt-2 text-xs text-muted-foreground text-center">
                <strong>in</strong> = inside a space, <strong>on</strong> = on a surface, <strong>at</strong> = an exact point.
              </figcaption>
            </figure>
            <p className="rounded-lg border border-primary/30 bg-primary/5 p-3 text-primary">
              Tip: choose <strong>at</strong> when we think of the place as an activity or a meeting point
              ("she works <strong>at</strong> the hospital"), but <strong>in</strong> when we think of the
              building itself ("she is waiting <strong>in</strong> the hospital").
            </p>
          </CardContent>
        </Card>

        <div className="mb-6">
          <PrepositionDropdownExercise />
        </div>

        <Card className="mb-6 hover:shadow-lg transition-all duration-200">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg text-brand-navy dark:text-brand-royal">
                🎮 Interactive Activity: Prepositions of Place
              </CardTitle>
              <Badge variant="secondary">LearningApps</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Practice prepositions of place with this fun interactive matching activity on LearningApps.
            </p>
            <Button
              className="bg-brand-royal hover:bg-brand-navy text-white"
              asChild
            >
              <a href="https://learningapps.org/watch?v=pov7n6mqa23" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Open Activity
              </a>
            </Button>
          </CardContent>
        </Card>


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
