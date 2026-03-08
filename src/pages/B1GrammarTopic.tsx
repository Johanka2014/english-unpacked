import { useState, useMemo, useCallback } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, BookOpen, PenLine, ClipboardCheck, Lock } from 'lucide-react';
import { b1GrammarSections } from '@/data/b1GrammarData';
import type { GrammarExercise } from '@/data/b1GrammarData';
import SEO from '@/components/SEO';

// ── Theory View ────────────────────────────────────────────────────────

const TheoryView = ({ sections }: { sections: NonNullable<typeof b1GrammarSections[0]['modules'][0]['theory']> }) => (
  <div className="space-y-8">
    {sections.map((s, i) => (
      <Card key={i} className="service-card">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-4 font-merriweather text-foreground">{s.heading}</h3>
          <div className="prose prose-sm max-w-none text-muted-foreground" dangerouslySetInnerHTML={{ __html: s.content }} />
          {s.notes && s.notes.length > 0 && (
            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
              <p className="font-semibold text-sm text-blue-800 dark:text-blue-300 mb-2">📝 Note:</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-blue-700 dark:text-blue-400">
                {s.notes.map((n, j) => <li key={j} dangerouslySetInnerHTML={{ __html: n }} />)}
              </ul>
            </div>
          )}
        </CardContent>
      </Card>
    ))}
  </div>
);

// ── Exercises View ─────────────────────────────────────────────────────

const ExercisesView = ({ exercises }: { exercises: GrammarExercise[] }) => {
  const [answers, setAnswers] = useState<Record<string, Record<number, string>>>({});
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const handleChange = (exId: string, itemId: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [exId]: { ...prev[exId], [itemId]: value } }));
  };

  const checkExercise = (exId: string) => setChecked((prev) => ({ ...prev, [exId]: true }));

  return (
    <div className="space-y-8">
      {exercises.map((ex) => (
        <Card key={ex.id} className="service-card">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2 font-merriweather text-foreground">{ex.title}</h3>
            <p className="text-muted-foreground mb-6">{ex.instruction}</p>
            <div className="space-y-4">
              {ex.items.map((item) => {
                const userAnswer = answers[ex.id]?.[item.id] || '';
                const isChecked = checked[ex.id];
                const isCorrect = isChecked && userAnswer.trim().toLowerCase() === item.answer.toLowerCase();
                const isWrong = isChecked && userAnswer.trim() !== '' && !isCorrect;

                return (
                  <div key={item.id} className="flex items-start gap-3">
                    <span className="text-sm font-medium text-muted-foreground mt-2 w-6">{item.id}.</span>
                    <div className="flex-1">
                      <p className="text-sm text-foreground mb-1" dangerouslySetInnerHTML={{ __html: item.prompt }} />
                      {ex.type === 'multiple-choice' && item.options ? (
                        <div className="flex gap-2 flex-wrap">
                          {item.options.map((opt) => (
                            <button
                              key={opt}
                              onClick={() => !isChecked && handleChange(ex.id, item.id, opt)}
                              className={`px-3 py-1.5 rounded-md text-sm border transition-colors ${
                                userAnswer === opt
                                  ? isChecked
                                    ? isCorrect ? 'border-green-500 bg-green-50 dark:bg-green-950/30 text-green-700' : 'border-red-500 bg-red-50 dark:bg-red-950/30 text-red-700'
                                    : 'border-primary bg-primary/10 text-primary'
                                  : isChecked && opt === item.answer ? 'border-green-500 bg-green-50 dark:bg-green-950/30 text-green-700' : 'border-border bg-background text-foreground hover:bg-muted'
                              }`}
                              disabled={isChecked}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      ) : (
                        <input
                          type="text"
                          value={userAnswer}
                          onChange={(e) => handleChange(ex.id, item.id, e.target.value)}
                          className={`w-full max-w-xs border rounded-md px-3 py-1.5 text-sm transition-colors ${
                            isCorrect ? 'border-green-500 bg-green-50 dark:bg-green-950/30' :
                            isWrong ? 'border-red-500 bg-red-50 dark:bg-red-950/30' :
                            'border-border bg-background'
                          }`}
                          disabled={isChecked}
                        />
                      )}
                      {isWrong && <p className="text-xs text-red-600 mt-1">Correct answer: {item.answer}</p>}
                    </div>
                  </div>
                );
              })}
            </div>
            {!checked[ex.id] && (
              <Button onClick={() => checkExercise(ex.id)} className="mt-6">
                Check Answers
              </Button>
            )}
            {checked[ex.id] && (
              <div className="mt-4 p-3 bg-muted rounded-lg">
                <p className="text-sm font-medium text-foreground">
                  Score: {ex.items.filter((item) => (answers[ex.id]?.[item.id] || '').trim().toLowerCase() === item.answer.toLowerCase()).length} / {ex.items.length}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

// ── Main Page ──────────────────────────────────────────────────────────

const B1GrammarTopic = () => {
  const { sectionId, moduleId } = useParams<{ sectionId: string; moduleId: string }>();
  const [activeTab, setActiveTab] = useState<'theory' | 'exercises' | 'exam' | null>(null);

  const section = b1GrammarSections.find((s) => s.id === sectionId);
  if (!section) return <Navigate to="/b1-grammar" replace />;

  const mod = section.modules.find((m) => m.id === moduleId);
  if (!mod) return <Navigate to={`/b1-grammar/${sectionId}`} replace />;

  const hasContent = !!(mod.theory || mod.exercises);

  const tiles = [
    { key: 'theory' as const, label: 'Grammar', icon: BookOpen, available: !!mod.theory, color: 'from-blue-600 to-blue-800' },
    { key: 'exercises' as const, label: 'Exercises', icon: PenLine, available: !!mod.exercises, color: 'from-emerald-600 to-emerald-800' },
    { key: 'exam' as const, label: 'Exam Practice', icon: ClipboardCheck, available: !!mod.examPractice, color: 'from-purple-600 to-purple-800' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO title={`${mod.title} - B1 Grammar`} description={mod.subtitle} />
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-[35vh] flex items-center justify-center text-white overflow-hidden bg-gradient-to-br from-brand-navy to-brand-royal">
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 pt-20">
          <p className="text-white/70 text-sm mb-2 uppercase tracking-wider">{section.title}</p>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight font-merriweather">
            {mod.number}. {mod.title}
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">{mod.subtitle}</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-6 max-w-5xl mx-auto">
            <Link to={`/b1-grammar/${sectionId}`}>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <ArrowLeft className="h-4 w-4 mr-1" /> Back to {section.title}
              </Button>
            </Link>
          </div>

          {!hasContent ? (
            <div className="text-center py-20 max-w-md mx-auto">
              <Lock className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-foreground mb-2 font-merriweather">Coming Soon</h2>
              <p className="text-muted-foreground">Content for this module is being prepared.</p>
            </div>
          ) : activeTab === null ? (
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {tiles.map((tile) => {
                const Icon = tile.icon;
                return (
                  <button
                    key={tile.key}
                    onClick={() => tile.available && setActiveTab(tile.key)}
                    disabled={!tile.available}
                    className="text-left"
                  >
                    <Card className={`service-card overflow-hidden cursor-pointer group shadow-lg hover:shadow-xl transition-all duration-300 h-full ${!tile.available ? 'opacity-50' : ''}`}>
                      <div className={`relative h-40 overflow-hidden bg-gradient-to-br ${tile.color} flex items-center justify-center`}>
                        <Icon className="w-16 h-16 text-white/30" />
                        {!tile.available && (
                          <div className="absolute bottom-3 right-3 bg-amber-500/90 text-white text-xs px-2 py-1 rounded-full">Coming soon</div>
                        )}
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold font-merriweather text-foreground">{tile.label}</h3>
                      </CardContent>
                    </Card>
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="max-w-4xl mx-auto">
              <Button variant="outline" onClick={() => setActiveTab(null)} className="mb-6">
                <ArrowLeft className="h-4 w-4 mr-1" /> Back to module overview
              </Button>
              {activeTab === 'theory' && mod.theory && <TheoryView sections={mod.theory} />}
              {activeTab === 'exercises' && mod.exercises && <ExercisesView exercises={mod.exercises} />}
              {activeTab === 'exam' && mod.examPractice && (
                <div className="text-center py-20 max-w-md mx-auto">
                  <ClipboardCheck className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
                  <h2 className="text-2xl font-semibold text-foreground mb-2 font-merriweather">Exam Practice</h2>
                  <p className="text-muted-foreground">{mod.examPractice.description} — coming soon.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default B1GrammarTopic;
