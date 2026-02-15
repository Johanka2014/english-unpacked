import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, ArrowRight, Home, CheckCircle, XCircle, PenLine, BookOpen, AlertTriangle, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { verbPatternModules, type VerbPatternModule } from '@/data/verbPatternData';

const VerbPatternPractice = () => {
  const [selectedUnit, setSelectedUnit] = useState<VerbPatternModule | null>(null);
  const [answers, setAnswers] = useState<string[]>([]);
  const [checked, setChecked] = useState(false);
  const [results, setResults] = useState<boolean[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedUnit]);

  const openUnit = (mod: VerbPatternModule) => {
    setSelectedUnit(mod);
    setAnswers(new Array(mod.questions.length).fill(''));
    setChecked(false);
    setResults([]);
  };

  const goToDashboard = () => {
    setSelectedUnit(null);
    setChecked(false);
  };

  const navigateUnit = (direction: -1 | 1) => {
    if (!selectedUnit) return;
    const idx = verbPatternModules.findIndex(m => m.id === selectedUnit.id);
    const next = verbPatternModules[idx + direction];
    if (next) openUnit(next);
  };

  const checkAnswers = () => {
    if (!selectedUnit) return;
    const res = selectedUnit.questions.map((q, i) =>
      answers[i].trim().toLowerCase() === q.a.toLowerCase()
    );
    setResults(res);
    setChecked(true);
  };

  const resetQuiz = () => {
    if (!selectedUnit) return;
    setAnswers(new Array(selectedUnit.questions.length).fill(''));
    setChecked(false);
    setResults([]);
  };

  const score = results.filter(Boolean).length;
  const total = results.length;

  // Dashboard view
  if (!selectedUnit) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="container mx-auto px-4 py-20">
          <div className="mb-4 max-w-6xl mx-auto">
            <Link to="/members/activities?tab=grammar">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <ArrowLeft className="h-4 w-4 mr-1" /> Back to Practice Activities
              </Button>
            </Link>
          </div>
          <div className="mb-10 text-center">
            <Badge className="mb-4" variant="secondary">Grammar Practice</Badge>
            <h1 className="text-4xl font-bold text-foreground mb-2">Verb Pattern Practice</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Units 53–68: Master verb patterns with interactive exercises
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-6xl mx-auto">
            {verbPatternModules.map((mod, idx) => (
              <Card
                key={mod.id}
                className="cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-200 bg-gradient-to-br from-card to-blue-50 dark:to-blue-950/20 border-primary/20 hover:border-primary/40"
                onClick={() => openUnit(mod)}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between mb-1">
                    <Badge className={`text-xs ${idx % 3 === 0 ? 'bg-brand-navy text-white' : idx % 3 === 1 ? 'bg-brand-royal text-white' : 'bg-brand-accent text-white'}`}>Unit {mod.id}</Badge>
                    <ArrowRight className="h-4 w-4 text-primary" />
                  </div>
                  <CardTitle className="text-lg text-brand-navy dark:text-brand-royal">{mod.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{mod.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Unit detail view
  const unitIdx = verbPatternModules.findIndex(m => m.id === selectedUnit.id);
  const hasPrev = unitIdx > 0;
  const hasNext = unitIdx < verbPatternModules.length - 1;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
        <main className="container mx-auto px-4 py-20">
          <div className="mb-4 max-w-6xl mx-auto">
            <Link to="/members/activities?tab=grammar">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <ArrowLeft className="h-4 w-4 mr-1" /> Back to Practice Activities
              </Button>
            </Link>
          </div>
        {/* Navigation bar */}
        <div className="flex items-center justify-between mb-6 max-w-6xl mx-auto">
          <Button variant="ghost" size="sm" disabled={!hasPrev} onClick={() => navigateUnit(-1)}>
            <ArrowLeft className="h-4 w-4 mr-1" /> Previous
          </Button>
          <Button variant="outline" size="sm" onClick={goToDashboard}>
            <Home className="h-4 w-4 mr-1" /> All Units
          </Button>
          <Button variant="ghost" size="sm" disabled={!hasNext} onClick={() => navigateUnit(1)}>
            Next <ArrowRight className="h-4 w-4 ml-1" />
          </Button>
        </div>

        <div className="space-y-8 max-w-6xl mx-auto">
           {/* Explanation panel */}
          <div>
            <Card className="bg-gradient-to-br from-card via-blue-50 dark:via-blue-950/20 to-card border-primary/20">
              <CardHeader className="border-b border-primary/10">
                <div className="flex items-center gap-3 mb-1">
                  <Badge className="bg-brand-navy text-white">Unit {selectedUnit.id}</Badge>
                  <CardTitle className="text-2xl text-brand-navy dark:text-brand-royal">{selectedUnit.title}</CardTitle>
                </div>
                <p className="text-muted-foreground">{selectedUnit.subtitle}</p>
              </CardHeader>
              <CardContent className="space-y-2">
                {selectedUnit.explanation.map((line, i) => (
                  <p key={i} className="text-sm text-foreground/80">{line}</p>
                ))}
                {selectedUnit.tip && (
                  <div className={`mt-4 flex gap-2 rounded-lg border p-3 text-sm ${
                    selectedUnit.tip.type === 'warning'
                      ? 'border-destructive/30 bg-destructive/5 text-destructive'
                      : 'border-primary/30 bg-primary/5 text-primary'
                  }`}>
                    {selectedUnit.tip.type === 'warning' ? (
                      <AlertTriangle className="h-4 w-4 mt-0.5 shrink-0" />
                    ) : (
                      <Info className="h-4 w-4 mt-0.5 shrink-0" />
                    )}
                    <span>{selectedUnit.tip.text}</span>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

           {/* Quiz panel */}
          <div>
            <Card className="bg-gradient-to-br from-card via-orange-50 dark:via-orange-950/10 to-card border-brand-accent/20">
              <CardHeader className="pb-3 border-b border-brand-accent/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <PenLine className="h-5 w-5 text-brand-accent" />
                    <CardTitle className="text-lg text-brand-navy dark:text-brand-royal">Practice</CardTitle>
                  </div>
                  <Badge className="bg-brand-accent text-white">Quiz</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-5">
                {selectedUnit.questions.map((q, i) => (
                  <div key={i}>
                    <p className="text-sm font-medium text-foreground mb-1.5">
                      <span className="text-brand-royal font-bold">{i + 1}.</span> {q.q}
                    </p>
                    <Input
                      value={answers[i]}
                      onChange={e => {
                        const next = [...answers];
                        next[i] = e.target.value;
                        setAnswers(next);
                      }}
                      placeholder="Type answer here..."
                      disabled={checked}
                      className={checked ? (
                        results[i]
                          ? 'border-green-500 bg-green-50 dark:bg-green-950/20'
                          : 'border-red-500 bg-red-50 dark:bg-red-950/20'
                      ) : 'border-primary/30 focus:border-primary/60'}
                    />
                    {checked && (
                      <div className={`flex items-center gap-1 mt-1 text-xs font-medium ${
                        results[i] ? 'text-green-600' : 'text-red-500'
                      }`}>
                        {results[i] ? (
                          <><CheckCircle className="h-3 w-3" /> Correct!</>
                        ) : (
                          <><XCircle className="h-3 w-3" /> Answer: {q.a}</>
                        )}
                      </div>
                    )}
                  </div>
                ))}

                <div className="border-t border-primary/10 pt-4 space-y-3">
                  {!checked ? (
                    <Button className="w-full bg-brand-royal hover:bg-brand-navy text-white font-semibold" onClick={checkAnswers}>
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
                      <Button variant="outline" className="w-full border-brand-royal text-brand-royal hover:bg-brand-royal hover:text-white" onClick={resetQuiz}>
                        Try Again
                      </Button>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VerbPatternPractice;
