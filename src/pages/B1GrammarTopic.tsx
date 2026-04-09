import { useState, useMemo, useCallback } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, BookOpen, PenLine, ClipboardCheck, Lock } from 'lucide-react';
import { b1GrammarSections } from '@/data/b1GrammarData';
import type { GrammarExercise, EmailSegment, ExamReadingPart1Question, GrammarFocusTaskItem } from '@/data/b1GrammarData';
import SEO from '@/components/SEO';
import NounCompoundExercise from '@/components/exercises/NounCompoundExercise';

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

// ── Matching Drag-Drop Exercise ────────────────────────────────────────

const MatchingDragDropExercise = ({ exercise }: { exercise: GrammarExercise }) => {
  const shuffledRight = useMemo(
    () => [...exercise.items].sort(() => Math.random() - 0.5),
    [exercise.items]
  );

  const [assignments, setAssignments] = useState<Record<number, string>>({});
  const [draggedAnswer, setDraggedAnswer] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);

  const usedAnswers = new Set(Object.values(assignments));

  const handleDragStart = (answer: string) => {
    setDraggedAnswer(answer);
  };

  const handleDrop = useCallback((itemId: number) => {
    if (!draggedAnswer) return;
    // Remove the answer from any other slot first
    setAssignments((prev) => {
      const next = { ...prev };
      for (const key of Object.keys(next)) {
        if (next[Number(key)] === draggedAnswer) delete next[Number(key)];
      }
      next[itemId] = draggedAnswer;
      return next;
    });
    setDraggedAnswer(null);
  }, [draggedAnswer]);

  const handleRemove = (itemId: number) => {
    if (checked) return;
    setAssignments((prev) => {
      const next = { ...prev };
      delete next[itemId];
      return next;
    });
  };

  const score = checked
    ? exercise.items.filter((item) => assignments[item.id]?.toLowerCase() === item.answer.toLowerCase()).length
    : 0;

  return (
    <Card className="service-card">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2 font-merriweather text-foreground">{exercise.title}</h3>
        <p className="text-muted-foreground mb-6">{exercise.instruction}</p>

        {/* Draggable answer bank */}
        <div className="mb-6">
          <p className="text-sm font-medium text-muted-foreground mb-2">Drag the sentence endings to match:</p>
          <div className="flex flex-wrap gap-2">
            {shuffledRight.map((item, idx) => {
              const letterLabel = String.fromCharCode(97 + idx);
              const isUsed = usedAnswers.has(item.answer);
              return (
                <div
                  key={item.id}
                  draggable={!isUsed && !checked}
                  onDragStart={() => handleDragStart(item.answer)}
                  className={`px-3 py-2 rounded-lg border text-sm transition-all select-none ${
                    isUsed
                      ? 'opacity-30 cursor-default border-border bg-muted'
                      : 'cursor-grab active:cursor-grabbing border-primary/30 bg-primary/5 hover:bg-primary/10 hover:border-primary/50'
                  }`}
                >
                  <span className="font-bold mr-1.5 text-primary">{letterLabel}</span>
                  {item.answer}
                </div>
              );
            })}
          </div>
        </div>

        {/* Drop targets */}
        <div className="space-y-3">
          {exercise.items.map((item) => {
            const assigned = assignments[item.id];
            const isCorrect = checked && assigned?.toLowerCase() === item.answer.toLowerCase();
            const isWrong = checked && assigned && !isCorrect;

            return (
              <div
                key={item.id}
                className="flex items-center gap-3"
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => handleDrop(item.id)}
              >
                <span className="text-sm font-bold text-muted-foreground w-6 shrink-0">{item.id}</span>
                <span className="text-sm text-foreground whitespace-nowrap">{item.prompt}</span>
                <div
                  className={`flex-1 min-h-[40px] rounded-lg border-2 border-dashed px-3 py-2 text-sm flex items-center transition-colors ${
                    assigned
                      ? isCorrect
                        ? 'border-green-500 bg-green-50 dark:bg-green-950/30 text-green-700 dark:text-green-400'
                        : isWrong
                        ? 'border-red-500 bg-red-50 dark:bg-red-950/30 text-red-700 dark:text-red-400'
                        : 'border-primary/40 bg-primary/5 text-foreground cursor-pointer'
                      : 'border-muted-foreground/30 bg-muted/30 text-muted-foreground'
                  }`}
                  onClick={() => !checked && handleRemove(item.id)}
                >
                  {assigned || <span className="italic text-muted-foreground/50">Drop answer here</span>}
                </div>
              </div>
            );
          })}
        </div>

        {checked && (
          <div className="mt-2 space-y-1">
            {exercise.items
              .filter((item) => assignments[item.id]?.toLowerCase() !== item.answer.toLowerCase())
              .map((item) => (
                <p key={item.id} className="text-xs text-red-600">
                  {item.id}. Correct: {item.answer}
                </p>
              ))}
          </div>
        )}

        {!checked ? (
          <Button
            onClick={() => setChecked(true)}
            className="mt-6"
            disabled={Object.keys(assignments).length < exercise.items.length}
          >
            Check Answers
          </Button>
        ) : (
          <div className="mt-4 p-3 bg-muted rounded-lg">
            <p className="text-sm font-medium text-foreground">
              Score: {score} / {exercise.items.length}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

// ── Error Correction Email Exercise ───────────────────────────────────

const ErrorCorrectionEmailExercise = ({ exercise }: { exercise: GrammarExercise }) => {
  const segments = exercise.emailSegments || [];
  const errorIndices = segments.reduce<number[]>((acc, seg, i) => {
    if (seg.error) acc.push(i);
    return acc;
  }, []);

  const [edits, setEdits] = useState<Record<number, string>>(() => {
    const init: Record<number, string> = {};
    errorIndices.forEach((i) => { init[i] = segments[i].error!; });
    return init;
  });
  const [checked, setChecked] = useState(false);

  const score = checked
    ? errorIndices.filter((i) => edits[i]?.trim().toLowerCase() === segments[i].correction!.toLowerCase()).length
    : 0;

  return (
    <Card className="service-card">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2 font-merriweather text-foreground">{exercise.title}</h3>
        <p className="text-muted-foreground mb-6">{exercise.instruction}</p>

        <div className="bg-background border border-border rounded-lg p-6 shadow-inner">
          {/* Email header */}
          <div className="border-b border-border pb-3 mb-4 space-y-1 text-sm text-muted-foreground">
            <p><span className="font-semibold text-foreground">From:</span> Duncan</p>
            <p><span className="font-semibold text-foreground">To:</span> Marta</p>
            <p><span className="font-semibold text-foreground">Subject:</span> Great news!</p>
          </div>

          {/* Email body */}
          <div className="text-sm leading-relaxed text-foreground whitespace-pre-wrap">
            {segments.map((seg, i) => {
              if (seg.text != null) {
                return <span key={i}>{seg.text}</span>;
              }
              // Error segment — editable input
              const val = edits[i] || '';
              const isCorrect = checked && val.trim().toLowerCase() === seg.correction!.toLowerCase();
              const isWrong = checked && !isCorrect;

              return (
                <span key={i} className="inline-block mx-0.5 align-baseline">
                  <input
                    type="text"
                    value={val}
                    onChange={(e) => !checked && setEdits((prev) => ({ ...prev, [i]: e.target.value }))}
                    disabled={checked}
                    className={`border-b-2 bg-transparent outline-none text-sm px-1 py-0.5 min-w-[80px] transition-colors ${
                      checked
                        ? isCorrect
                          ? 'border-green-500 text-green-700 dark:text-green-400 font-semibold'
                          : 'border-red-500 text-red-600 dark:text-red-400 line-through'
                        : 'border-primary/40 text-primary font-medium focus:border-primary'
                    }`}
                    style={{ width: `${Math.max(val.length, 8)}ch` }}
                  />
                  {isWrong && (
                    <span className="text-xs text-green-600 dark:text-green-400 ml-1 font-semibold">
                      ({seg.correction})
                    </span>
                  )}
                </span>
              );
            })}
          </div>
        </div>

        {!checked ? (
          <Button onClick={() => setChecked(true)} className="mt-6">
            Check Answers
          </Button>
        ) : (
          <div className="mt-4 p-3 bg-muted rounded-lg">
            <p className="text-sm font-medium text-foreground">
              Score: {score} / {errorIndices.length}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

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
      {exercises.map((ex) => {
        if (ex.type === 'matching') {
          return <MatchingDragDropExercise key={ex.id} exercise={ex} />;
        }
        if (ex.type === 'noun-compound') {
          return <NounCompoundExercise key={ex.id} exercise={ex} />;
        }
        if (ex.type === 'error-correction' && ex.emailSegments) {
          return <ErrorCorrectionEmailExercise key={ex.id} exercise={ex} />;
        }
        if (ex.type === 'context-fill' && ex.contextText) {
          return <ContextFillExercise key={ex.id} exercise={ex} />;
        }

        return (
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
        );
      })}
    </div>
  );
};

// ── Exam Practice: Reading Part 2 ─────────────────────────────────────

interface ExamPracticeData {
  description: string;
  type: string;
  intro: string;
  people: { id: number; name: string; description: string }[];
  options: { letter: string; title: string; description: string }[];
  answers: Record<number, string>;
  grammarFocusTask?: {
    instruction: string;
    items: { id: number; sentence: string; adjectives: string[]; answer: string }[];
  };
}

// ── Grammar Focus Task ─────────────────────────────────────────────────

const GrammarFocusTask = ({ task }: { task: NonNullable<ExamPracticeData['grammarFocusTask']> }) => {
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);

  const score = checked
    ? task.items.filter((item) => userAnswers[item.id]?.trim().toLowerCase() === item.answer.toLowerCase()).length
    : 0;

  return (
    <Card className="service-card mt-8">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2 font-merriweather text-foreground">Grammar Focus Task</h3>
        <p className="text-muted-foreground text-sm mb-6">{task.instruction}</p>

        <div className="space-y-4">
          {task.items.map((item) => {
            const isCorrect = checked && userAnswers[item.id]?.trim().toLowerCase() === item.answer.toLowerCase();
            const isWrong = checked && !isCorrect;
            const parts = item.sentence.split('___');

            return (
              <div key={item.id} className="flex items-start gap-3">
                <span className="text-sm font-bold text-primary mt-2 shrink-0">{item.id}.</span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-1 text-sm text-foreground">
                    <span>{parts[0]}</span>
                    <span className="italic text-muted-foreground font-medium">
                      {item.adjectives.join(' / ')}
                    </span>
                    <span>{parts[1]}</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Type the adjectives in order…"
                    value={userAnswers[item.id] || ''}
                    onChange={(e) => !checked && setUserAnswers((prev) => ({ ...prev, [item.id]: e.target.value }))}
                    disabled={checked}
                    className={`mt-2 w-full max-w-xs border rounded-lg px-3 py-2 text-sm bg-card text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors ${
                      checked
                        ? isCorrect
                          ? 'border-green-500 bg-green-50 dark:bg-green-950/30'
                          : 'border-red-500 bg-red-50 dark:bg-red-950/30'
                        : 'border-border focus:border-primary'
                    }`}
                  />
                  {isWrong && (
                    <p className="text-xs text-red-600 mt-1">Correct: <strong>{item.answer}</strong></p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {!checked ? (
          <Button
            onClick={() => setChecked(true)}
            className="mt-6"
            disabled={Object.keys(userAnswers).length < task.items.length}
          >
            Check Answers
          </Button>
        ) : (
          <div className="mt-6 flex items-center gap-4">
            <div className="p-3 bg-muted rounded-lg">
              <p className="text-sm font-medium text-foreground">
                Score: {score} / {task.items.length}
              </p>
            </div>
            <Button variant="outline" onClick={() => { setChecked(false); setUserAnswers({}); }}>
              Try Again
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const ExamPracticeReadingPart2 = ({ examPractice }: { examPractice: ExamPracticeData }) => {
  const { people, options, answers, intro } = examPractice;
  const [assignments, setAssignments] = useState<Record<number, string>>({});
  const [draggedLetter, setDraggedLetter] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);

  const usedLetters = new Set(Object.values(assignments));

  const handleDrop = useCallback((personId: number) => {
    if (!draggedLetter) return;
    setAssignments((prev) => {
      const next = { ...prev };
      // Remove letter from any other person
      for (const key of Object.keys(next)) {
        if (next[Number(key)] === draggedLetter) delete next[Number(key)];
      }
      next[personId] = draggedLetter;
      return next;
    });
    setDraggedLetter(null);
  }, [draggedLetter]);

  const handleRemove = (personId: number) => {
    if (checked) return;
    setAssignments((prev) => {
      const next = { ...prev };
      delete next[personId];
      return next;
    });
  };

  const score = checked
    ? people.filter((p) => assignments[p.id] === answers[p.id]).length
    : 0;

  return (
    <div className="space-y-6">
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2 font-merriweather text-foreground">Reading Part 2</h3>
          <p className="text-muted-foreground text-sm">{intro}</p>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Left: People with drop zones */}
        <div className="space-y-4">
          <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider">People</h4>
          {people.map((person) => {
            const assigned = assignments[person.id];
            const isCorrect = checked && assigned === answers[person.id];
            const isWrong = checked && assigned && !isCorrect;

            return (
              <div
                key={person.id}
                className="border border-border rounded-lg p-4 bg-card"
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => handleDrop(person.id)}
              >
                <div className="flex items-start gap-3">
                  <span className="text-sm font-bold text-primary mt-0.5">{person.id}.</span>
                  <div className="flex-1">
                    <p className="text-sm text-foreground mb-3">{person.description}</p>
                    <div
                      className={`min-h-[40px] rounded-lg border-2 border-dashed px-3 py-2 text-sm flex items-center gap-2 transition-colors cursor-pointer ${
                        assigned
                          ? isCorrect
                            ? 'border-green-500 bg-green-50 dark:bg-green-950/30 text-green-700 dark:text-green-400'
                            : isWrong
                            ? 'border-red-500 bg-red-50 dark:bg-red-950/30 text-red-700 dark:text-red-400'
                            : 'border-primary/40 bg-primary/5 text-foreground'
                          : 'border-muted-foreground/30 bg-muted/30 text-muted-foreground'
                      }`}
                      onClick={() => !checked && handleRemove(person.id)}
                    >
                      {assigned ? (
                        <>
                          <span className="font-bold text-lg">{assigned}</span>
                          <span>— {options.find((o) => o.letter === assigned)?.title}</span>
                        </>
                      ) : (
                        <span className="italic text-muted-foreground/50">Drop answer here</span>
                      )}
                    </div>
                    {isWrong && (
                      <p className="text-xs text-red-600 mt-1">
                        Correct: {answers[person.id]} — {options.find((o) => o.letter === answers[person.id])?.title}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          {!checked ? (
            <Button
              onClick={() => setChecked(true)}
              className="mt-2"
              disabled={Object.keys(assignments).length < people.length}
            >
              Check Answers
            </Button>
          ) : (
            <div className="mt-2 p-3 bg-muted rounded-lg">
              <p className="text-sm font-medium text-foreground">
                Score: {score} / {people.length}
              </p>
            </div>
          )}
        </div>

        {/* Right: Cycle trip options (draggable) */}
        <div className="space-y-3">
          <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider">Recommended Cycle Rides from Ailsea</h4>
          {options.map((opt) => {
            const isUsed = usedLetters.has(opt.letter);
            return (
              <div
                key={opt.letter}
                draggable={!isUsed && !checked}
                onDragStart={() => setDraggedLetter(opt.letter)}
                className={`border rounded-lg p-4 transition-all select-none ${
                  isUsed
                    ? 'opacity-30 cursor-default border-border bg-muted'
                    : 'cursor-grab active:cursor-grabbing border-primary/30 bg-card hover:border-primary/50 hover:shadow-md'
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="font-bold text-lg text-primary shrink-0">{opt.letter}</span>
                  <div>
                    <p className="font-semibold text-sm text-foreground mb-1">{opt.title}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{opt.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {examPractice.grammarFocusTask && (
        <GrammarFocusTask task={examPractice.grammarFocusTask} />
      )}
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

  const hasContent = !!(mod.theory || mod.exercises || mod.examPractice?.people || mod.examPractice?.readingPart1);

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
                mod.examPractice.people && mod.examPractice.options && mod.examPractice.answers
                  ? <ExamPracticeReadingPart2 examPractice={mod.examPractice as ExamPracticeData} />
                  : (
                    <div className="text-center py-20 max-w-md mx-auto">
                      <ClipboardCheck className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
                      <h2 className="text-2xl font-semibold text-foreground mb-2 font-merriweather">Exam Practice</h2>
                      <p className="text-muted-foreground">{mod.examPractice.description} — coming soon.</p>
                    </div>
                  )
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
