import { useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, CheckCircle2, XCircle, Clock, BookOpen, Sparkles } from 'lucide-react';
import { connectedSpeechLessons } from '@/data/connectedSpeechData';
import SpeakButton from '@/components/pronunciation/SpeakButton';
import { cn } from '@/lib/utils';

const difficultyClasses: Record<string, string> = {
  Beginner: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  Intermediate: 'bg-amber-50 text-amber-700 border-amber-200',
  Advanced: 'bg-rose-50 text-rose-700 border-rose-200',
};

const ConnectedSpeechLesson = () => {
  const { lessonId } = useParams<{ lessonId: string }>();
  const lesson = connectedSpeechLessons.find((l) => l.id === lessonId);

  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);

  if (!lesson) return <Navigate to="/connected-speech" replace />;

  const Icon = lesson.icon;
  const score = lesson.quiz.filter((q) => answers[q.id] === q.answer).length;

  const reset = () => {
    setAnswers({});
    setChecked(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${lesson.title} - Connected Speech`}
        description={lesson.description}
      />
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-[35vh] flex items-center justify-center text-white overflow-hidden bg-gradient-to-br from-brand-navy to-brand-royal pt-20">
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 py-10">
          <div className="inline-flex items-center justify-center bg-white/20 p-4 rounded-full mb-4">
            <Icon className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3 font-merriweather">
            {lesson.number}. {lesson.title}
          </h1>
          <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto">{lesson.subtitle}</p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <span className={cn('px-2 py-0.5 rounded-full text-xs font-medium border', difficultyClasses[lesson.difficulty])}>
              {lesson.difficulty}
            </span>
            <span className="inline-flex items-center text-xs text-white/80">
              <Clock className="h-3 w-3 mr-1" /> {lesson.duration}
            </span>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          <div>
            <Link to="/connected-speech">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <ArrowLeft className="h-4 w-4 mr-1" /> Back to Connected Speech
              </Button>
            </Link>
          </div>

          {/* Theory */}
          <Card className="service-card">
            <CardHeader>
              <CardTitle className="font-merriweather flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-brand-royal" /> Theory
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              {lesson.theory.map((t, i) => (
                <div key={i}>
                  <h3 className="font-semibold text-foreground mb-1">{t.heading}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t.body}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Examples */}
          <Card className="service-card">
            <CardHeader>
              <CardTitle className="font-merriweather flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-brand-royal" /> Examples
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                {lesson.examples.map((ex, i) => (
                  <div
                    key={i}
                    className="flex flex-wrap items-center justify-between gap-3 bg-muted/30 border border-border rounded-lg p-3"
                  >
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <span className="font-semibold text-foreground">{ex.phrase}</span>
                      <span className="text-sm text-muted-foreground font-mono">{ex.ipa}</span>
                      <span className="text-sm text-brand-royal font-mono">→ {ex.connected}</span>
                    </div>
                    <SpeakButton text={ex.phrase} />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quiz */}
          <Card className="service-card">
            <CardHeader>
              <CardTitle className="font-merriweather flex items-center gap-2">
                Practice Quiz
                {checked && (
                  <Badge variant="secondary" className="ml-2">
                    Score: {score} / {lesson.quiz.length}
                  </Badge>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {lesson.quiz.map((q, idx) => {
                const selected = answers[q.id];
                return (
                  <div key={q.id} className="space-y-2">
                    <p className="font-medium text-foreground">
                      {idx + 1}. {q.question}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {q.options.map((opt) => {
                        const isSelected = selected === opt;
                        const isCorrect = checked && opt === q.answer;
                        const isWrong = checked && isSelected && opt !== q.answer;
                        return (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => !checked && setAnswers((a) => ({ ...a, [q.id]: opt }))}
                            disabled={checked}
                            className={cn(
                              'text-left text-sm border rounded-md px-3 py-2 transition-colors',
                              !checked && isSelected && 'border-brand-royal bg-brand-royal/5',
                              !checked && !isSelected && 'border-border hover:bg-muted/50',
                              isCorrect && 'border-green-500 bg-green-50 text-green-900',
                              isWrong && 'border-red-500 bg-red-50 text-red-900',
                            )}
                          >
                            <span className="inline-flex items-center gap-2">
                              {isCorrect && <CheckCircle2 className="h-4 w-4 text-green-600" />}
                              {isWrong && <XCircle className="h-4 w-4 text-red-600" />}
                              {opt}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                    {checked && (
                      <p className="text-sm text-muted-foreground italic">{q.explanation}</p>
                    )}
                  </div>
                );
              })}

              <div className="flex gap-3">
                {!checked ? (
                  <Button
                    onClick={() => setChecked(true)}
                    disabled={Object.keys(answers).length < lesson.quiz.length}
                    className="bg-brand-royal hover:bg-brand-navy"
                  >
                    Check Answers
                  </Button>
                ) : (
                  <Button onClick={reset} variant="outline">
                    Reset Quiz
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConnectedSpeechLesson;
