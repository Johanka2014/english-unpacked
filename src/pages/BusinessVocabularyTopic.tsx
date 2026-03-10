import { useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, BookOpen, PenLine, ClipboardCheck, Lock, Lightbulb } from 'lucide-react';
import { businessVocabSections } from '@/data/businessVocabularyData';
import type { PracticeExercise, TestExercise } from '@/data/businessVocabularyData';
import SEO from '@/components/SEO';

// ── Sub-components ─────────────────────────────────────────────────────

const TheoryView = ({ sections }: { sections: NonNullable<typeof import('@/data/businessVocabularyData').businessVocabSections[0]['topics'][0]['theory']> }) => (
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
                {s.notes.map((n, j) => (
                  <li key={j} dangerouslySetInnerHTML={{ __html: n }} />
                ))}
              </ul>
            </div>
          )}
        </CardContent>
      </Card>
    ))}
  </div>
);

const PracticeView = ({ exercises }: { exercises: PracticeExercise[] }) => {
  const [answers, setAnswers] = useState<Record<string, Record<number, string>>>({});
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const handleChange = (exId: string, itemId: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [exId]: { ...prev[exId], [itemId]: value } }));
  };

  const checkExercise = (exId: string) => {
    setChecked((prev) => ({ ...prev, [exId]: true }));
  };

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
                      {isWrong && (
                        <p className="text-xs text-red-600 mt-1">Correct answer: {item.answer}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            {!checked[ex.id] && (
              <Button onClick={() => checkExercise(ex.id)} className="mt-6 bg-brand-royal hover:bg-brand-navy">
                Check Answers
              </Button>
            )}
            {checked[ex.id] && (
              <p className="mt-4 text-sm text-muted-foreground">
                Score: {ex.items.filter((item) => (answers[ex.id]?.[item.id] || '').trim().toLowerCase() === item.answer.toLowerCase()).length} / {ex.items.length}
              </p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

const TestView = ({ exercises }: { exercises: TestExercise[] }) => {
  const [answers, setAnswers] = useState<Record<string, Record<number, string>>>({});
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const handleChange = (exId: string, itemId: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [exId]: { ...prev[exId], [itemId]: value } }));
  };

  const checkExercise = (exId: string) => {
    setChecked((prev) => ({ ...prev, [exId]: true }));
  };

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

                if (ex.type === 'classify') {
                  const allAnswers = ex.items.map(i => i.answer);
                  const options = [...new Set(allAnswers)].sort();
                  return (
                    <div key={item.id} className="p-3 border border-border rounded-lg">
                      <p className="text-sm text-foreground mb-2">{item.id}. {item.prompt}</p>
                      <div className="flex gap-2 flex-wrap">
                        {options.map((opt) => (
                          <button
                            key={opt}
                            onClick={() => !isChecked && handleChange(ex.id, item.id, opt)}
                            className={`px-3 py-1 text-xs rounded-full border transition-colors ${
                              userAnswer === opt
                                ? isChecked
                                  ? isCorrect ? 'bg-green-100 border-green-500 text-green-800' : 'bg-red-100 border-red-500 text-red-800'
                                  : 'bg-brand-royal/10 border-brand-royal text-brand-royal'
                                : 'border-border hover:border-brand-royal/50'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                      {isWrong && <p className="text-xs text-red-600 mt-1">Correct: {item.answer}</p>}
                    </div>
                  );
                }

                return (
                  <div key={item.id} className="flex items-start gap-3">
                    <span className="text-sm font-medium text-muted-foreground mt-2 w-6">{item.id}.</span>
                    <div className="flex-1">
                      <p className="text-sm text-foreground mb-1">{item.prompt}</p>
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
                      {isWrong && <p className="text-xs text-red-600 mt-1">Correct answer: {item.answer}</p>}
                    </div>
                  </div>
                );
              })}
            </div>
            {!checked[ex.id] && (
              <Button onClick={() => checkExercise(ex.id)} className="mt-6 bg-brand-royal hover:bg-brand-navy">
                Check Answers
              </Button>
            )}
            {checked[ex.id] && (
              <p className="mt-4 text-sm text-muted-foreground">
                Score: {ex.items.filter((item) => (answers[ex.id]?.[item.id] || '').trim().toLowerCase() === item.answer.toLowerCase()).length} / {ex.items.length}
              </p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

// ── Main page ──────────────────────────────────────────────────────────

const BusinessVocabularyTopic = () => {
  const { sectionId, topicId } = useParams<{ sectionId: string; topicId: string }>();
  const [activeTab, setActiveTab] = useState<'theory' | 'practice' | 'tests' | null>(null);

  const section = businessVocabSections.find((s) => s.id === sectionId);
  const topic = section?.topics.find((t) => t.id === topicId);

  if (!section) return <Navigate to="/business-vocabulary" replace />;
  if (!topic) return <Navigate to={`/business-vocabulary/${sectionId}`} replace />;

  const hasContent = !!(topic.theory || topic.practice || topic.test);

  const tiles = [
    { key: 'theory' as const, label: 'Theory', icon: BookOpen, color: 'from-blue-600 to-blue-800', available: !!topic.theory },
    { key: 'practice' as const, label: 'Practice', icon: PenLine, color: 'from-emerald-600 to-emerald-800', available: !!topic.practice },
    { key: 'tests' as const, label: 'Tests', icon: ClipboardCheck, color: 'from-amber-600 to-amber-800', available: !!topic.test },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${topic.number}. ${topic.title} - Business Vocabulary`}
        description={`Learn and practise business vocabulary: ${topic.title}`}
      />
      <Navigation />

      <section className="pt-24 pb-8 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-6">
            <Link to={`/business-vocabulary/${sectionId}`}>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <ArrowLeft className="h-4 w-4 mr-1" /> Back to {section.title}
              </Button>
            </Link>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold font-merriweather text-foreground mb-2">
            {topic.number}. {topic.title}
          </h1>
          {topic.subtopics.length > 0 && (
            <p className="text-muted-foreground mb-8">{topic.subtopics.join(' • ')}</p>
          )}

          {!hasContent && (
            <Card className="service-card">
              <CardContent className="p-12 text-center">
                <Lock className="w-12 h-12 text-muted-foreground/40 mx-auto mb-4" />
                <h2 className="text-xl font-semibold text-foreground mb-2">Coming Soon</h2>
                <p className="text-muted-foreground">This topic is being prepared. Check back soon!</p>
              </CardContent>
            </Card>
          )}

          {hasContent && !activeTab && (
            <div className="grid md:grid-cols-3 gap-6">
              {tiles.map((tile) => (
                <button
                  key={tile.key}
                  onClick={() => tile.available && setActiveTab(tile.key)}
                  className="text-left"
                  disabled={!tile.available}
                >
                  <Card className={`overflow-hidden cursor-pointer group shadow-lg hover:shadow-xl transition-all duration-300 h-full ${!tile.available ? 'opacity-50' : ''}`}>
                    <div className={`relative h-36 bg-gradient-to-br ${tile.color} flex items-center justify-center`}>
                      <tile.icon className="w-16 h-16 text-white/30 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <CardHeader>
                      <CardTitle className="font-merriweather text-center">{tile.label}</CardTitle>
                    </CardHeader>
                  </Card>
                </button>
              ))}
            </div>
          )}

          {activeTab && (
            <div>
              <Button variant="ghost" size="sm" onClick={() => setActiveTab(null)} className="mb-6 text-muted-foreground hover:text-foreground">
                <ArrowLeft className="h-4 w-4 mr-1" /> Back to {topic.title}
              </Button>

              {/* Tab switcher */}
              <div className="flex gap-2 mb-8">
                {tiles.filter((t) => t.available).map((tile) => (
                  <Button
                    key={tile.key}
                    variant={activeTab === tile.key ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setActiveTab(tile.key)}
                    className={activeTab === tile.key ? 'bg-brand-royal hover:bg-brand-navy' : ''}
                  >
                    <tile.icon className="w-4 h-4 mr-1" />
                    {tile.label}
                  </Button>
                ))}
              </div>

              {activeTab === 'theory' && topic.theory && <TheoryView sections={topic.theory} />}
              {activeTab === 'practice' && topic.practice && <PracticeView exercises={topic.practice} />}
              {activeTab === 'tests' && topic.test && <TestView exercises={topic.test} />}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BusinessVocabularyTopic;
