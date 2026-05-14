import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  Clock, History, CheckSquare, Undo2, ArrowRight, ArrowLeft,
  Home, RefreshCw, Trophy, Rocket, CalendarClock, GraduationCap, BookOpen,
} from 'lucide-react';
import TenseMasterPanel from '@/components/tense-master/TenseMasterPanel';
import { generalQuiz, type Question, type TenseMasterType } from '@/data/tenseMasterData';

type View =
  | { kind: 'home' }
  | { kind: 'tense'; type: TenseMasterType }
  | { kind: 'quiz' };

const homeCards: { title: string; desc: string; icon: typeof Clock; type: TenseMasterType; color: string }[] = [
  { title: 'Present Tenses', desc: 'I do vs I am doing', icon: Clock, type: 'present', color: 'text-brand-royal' },
  { title: 'Past Tenses', desc: 'I did vs I was doing', icon: History, type: 'past', color: 'text-rose-600' },
  { title: 'Present Perfect', desc: 'I have done / been doing', icon: CheckSquare, type: 'perfect', color: 'text-teal-600' },
  { title: 'Past Perfect', desc: 'I had done / been doing', icon: Undo2, type: 'pastPerfect', color: 'text-purple-600' },
  { title: 'Future Tenses', desc: 'I will / am going to do', icon: Rocket, type: 'future', color: 'text-amber-600' },
  { title: 'Future Perfect', desc: 'I will have done / been doing', icon: CalendarClock, type: 'futurePerfect', color: 'text-orange-600' },
];

const TenseMasterWrapper = () => {
  const [view, setView] = useState<View>({ kind: 'home' });
  const navigate = useNavigate();

  // General quiz state
  const [qIndex, setQIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [complete, setComplete] = useState(false);

  const startGeneralQuiz = () => {
    setView({ kind: 'quiz' });
    setQIndex(0);
    setScore(0);
    setSelected(null);
    setShowFeedback(false);
    setComplete(false);
    window.scrollTo(0, 0);
  };

  const handleAnswer = (idx: number) => {
    if (showFeedback) return;
    setSelected(idx);
    setShowFeedback(true);
    if (idx === generalQuiz[qIndex].correct) setScore((s) => s + 1);
  };

  const next = () => {
    if (qIndex < generalQuiz.length - 1) {
      setQIndex((i) => i + 1);
      setSelected(null);
      setShowFeedback(false);
    } else {
      setComplete(true);
    }
  };

  const goHome = () => {
    setView({ kind: 'home' });
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-20 min-h-screen">
        {view.kind === 'home' && (
          <div className="text-center py-12 animate-fade-in">
            <div className="mb-6 max-w-6xl mx-auto text-left">
              <Button variant="ghost" size="sm" onClick={() => navigate('/b1-grammar/tenses')} className="text-muted-foreground hover:text-foreground">
                <ArrowLeft className="h-4 w-4 mr-1" /> Back to B1 Grammar — Tenses
              </Button>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-merriweather">
              Master English Tenses
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
              Interactive grammar guide based on Cambridge Grammar in Use
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {homeCards.map((card) => (
                <Card
                  key={card.type}
                  className="service-card cursor-pointer hover:shadow-lg transition-all group"
                  onClick={() => { setView({ kind: 'tense', type: card.type }); window.scrollTo(0, 0); }}
                >
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform ${card.color}`}>
                      <card.icon className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-lg">{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">{card.desc}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="service-card mt-12 max-w-4xl mx-auto text-left">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-brand-royal" />
                  <CardTitle>Course Overview</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  This interactive guide is designed to help you master the nuances of English verb tenses.
                  Based on standard EFL curriculums, we focus on the differences between
                  <strong> Simple</strong> and <strong>Continuous</strong> forms.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Present Continuous', 'Present Simple', 'Past Simple', 'Past Continuous', 'Present Perfect', 'Past Perfect', 'Future', 'Future Perfect'].map((t) => (
                    <Badge key={t} variant="secondary">{t}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="mt-12">
              <Button size="lg" className="bg-brand-royal hover:bg-brand-navy" onClick={startGeneralQuiz}>
                <GraduationCap className="w-5 h-5 mr-2" /> Take General Quiz
              </Button>
            </div>
          </div>
        )}

        {view.kind === 'tense' && (
          <div>
            <div className="max-w-5xl mx-auto mb-6">
              <Button variant="ghost" size="sm" onClick={goHome}>
                <ArrowLeft className="h-4 w-4 mr-1" /> Back to all tenses
              </Button>
            </div>
            <TenseMasterPanel type={view.type} />
          </div>
        )}

        {view.kind === 'quiz' && (
          <div className="max-w-2xl mx-auto w-full animate-fade-in">
            {complete ? (
              <Card className="service-card p-10 text-center">
                <div className="w-24 h-24 bg-gradient-to-tr from-brand-royal to-purple-600 rounded-full mx-auto flex items-center justify-center mb-6">
                  <Trophy className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-2 font-merriweather">Quiz Complete!</h2>
                <div className="text-6xl font-black text-brand-royal mb-2 mt-6">
                  {score} / {generalQuiz.length}
                </div>
                <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-10">Your Score</p>
                <div className="flex gap-4 justify-center">
                  <Button variant="outline" onClick={goHome}>
                    <Home className="w-4 h-4 mr-2" /> Home
                  </Button>
                  <Button className="bg-brand-royal hover:bg-brand-navy" onClick={startGeneralQuiz}>
                    <RefreshCw className="w-4 h-4 mr-2" /> Try Again
                  </Button>
                </div>
              </Card>
            ) : (() => {
              const q = generalQuiz[qIndex];
              const total = generalQuiz.length;
              const progress = ((qIndex + 1) / total) * 100;
              return (
                <>
                  <Card className="service-card p-8">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest">
                        Question {qIndex + 1}/{total}
                      </span>
                      <Badge className="bg-teal-100 text-teal-700">Score: {score}</Badge>
                    </div>
                    <Progress value={progress} className="mb-6 h-2" />
                    <div className="mb-8">
                      <h3 className="text-xl md:text-2xl font-medium text-foreground leading-normal">{q.q}</h3>
                    </div>
                    <div className="grid gap-3 mb-6">
                      {q.options.map((opt, idx) => {
                        let cls = 'w-full text-left p-4 rounded-xl border-2 transition-all font-medium';
                        if (showFeedback) {
                          if (idx === q.correct) cls += ' border-teal-500 bg-teal-50 text-teal-700';
                          else if (idx === selected && idx !== q.correct) cls += ' border-red-500 bg-red-50 text-red-700';
                          else cls += ' border-muted opacity-50';
                        } else {
                          cls += ' border-muted hover:border-brand-royal hover:bg-brand-royal/5 text-foreground';
                        }
                        return (
                          <button key={idx} onClick={() => handleAnswer(idx)} disabled={showFeedback} className={cls}>
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                    {showFeedback && (
                      <div className={`rounded-xl p-4 mb-4 ${selected === q.correct ? 'bg-teal-100 text-teal-800' : 'bg-red-100 text-red-800'}`}>
                        <p className="text-sm font-semibold">
                          {selected === q.correct ? `✓ ${q.feedback}` : `✗ Incorrect. The correct answer was "${q.options[q.correct]}".`}
                        </p>
                      </div>
                    )}
                    {showFeedback && (
                      <div className="flex justify-end mt-4">
                        <Button className="bg-brand-royal hover:bg-brand-navy" onClick={next}>
                          {qIndex === total - 1 ? 'Finish Quiz' : 'Next Question'}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    )}
                  </Card>
                  <div className="mt-4 text-center">
                    <Button variant="ghost" size="sm" onClick={goHome}>
                      <ArrowLeft className="w-4 h-4 mr-2" /> Exit Quiz
                    </Button>
                  </div>
                </>
              );
            })()}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default TenseMasterWrapper;

// Re-export for compatibility — types used by other files
export type { Question } from '@/data/tenseMasterData';
