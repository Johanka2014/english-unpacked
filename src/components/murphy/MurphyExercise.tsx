import { useMemo, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, X, RotateCcw } from 'lucide-react';
import { useActivityTracking } from '@/hooks/useActivityTracking';
import type { MurphyExercise as MurphyExerciseType } from '@/data/murphyGrammarData';

const normalise = (value: string) =>
  value
    .toLowerCase()
    .replace(/[’‘`´]/g, "'")
    .replace(/[.,!?;]+$/g, '')
    .replace(/\s+/g, ' ')
    .trim();

const isCorrect = (given: string, answer: string) =>
  answer
    .split('|')
    .map((a) => normalise(a))
    .includes(normalise(given));

const promptParts = (prompt: string) => prompt.split('___');

const ConversationBubble = ({
  children,
  speaker,
  side = 'left',
}: {
  children: React.ReactNode;
  speaker?: string;
  side?: 'left' | 'right';
}) => (
  <div className={`flex flex-col ${side === 'right' ? 'items-end' : 'items-start'} gap-1`}>
    {speaker && (
      <span className={`text-xs font-semibold uppercase tracking-wide ${side === 'right' ? 'text-primary/80' : 'text-muted-foreground'}`}>
        {speaker}
      </span>
    )}
    <div
      className={`relative max-w-[90%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed shadow-sm ${
        side === 'right'
          ? 'bg-primary/10 text-foreground rounded-br-none border border-primary/20'
          : 'bg-muted text-foreground rounded-bl-none border border-border'
      }`}
    >
      {children}
    </div>
  </div>
);

const MurphyExercise = ({ exercise }: { exercise: MurphyExerciseType }) => {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);
  const track = useActivityTracking();

  const shuffledOptions = useMemo(() => {
    if (exercise.type !== 'matching') return [];
    return [...exercise.items].map((i) => i.answer).sort(() => Math.random() - 0.5);
  }, [exercise]);

  const score = exercise.items.filter((item) => isCorrect(answers[item.id] ?? '', item.answer)).length;

  const handleCheck = () => {
    setChecked(true);
    track({
      activityTitle: exercise.title,
      activityType: exercise.type,
      score: exercise.items.filter((item) => isCorrect(answers[item.id] ?? '', item.answer)).length,
      total: exercise.items.length,
      activityId: exercise.id,
    });
  };

  const handleReset = () => {
    setAnswers({});
    setChecked(false);
  };

  const setAnswer = (id: number, value: string) => {
    if (checked) return;
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const statusIcon = (id: number, item: { answer: string }) => {
    if (!checked) return null;
    return isCorrect(answers[id] ?? '', item.answer) ? (
      <Check className="h-4 w-4 text-green-600 shrink-0" aria-label="Correct" />
    ) : (
      <X className="h-4 w-4 text-red-600 shrink-0" aria-label="Incorrect" />
    );
  };

  const isConversation = exercise.layout === 'conversation';
  const imageRight = exercise.imagePosition !== 'left';

  const cardBody = (
    <>
      <h3 className="text-xl font-semibold mb-1 font-merriweather text-foreground">{exercise.title}</h3>
      <p className="text-muted-foreground mb-5">{exercise.instruction}</p>

      {exercise.wordBank && exercise.wordBank.length > 0 && (
        <div className="mb-6 flex flex-wrap gap-2 p-4 rounded-lg bg-muted/50 border border-border">
          {exercise.wordBank.map((word) => (
            <span
              key={word}
              className="px-3 py-1.5 rounded-md bg-background border border-border text-sm font-medium text-foreground"
            >
              {word}
            </span>
          ))}
        </div>
      )}

      <ol className="space-y-4">
        {exercise.items.map((item) => {
          const value = answers[item.id] ?? '';
          const correct = checked && isCorrect(value, item.answer);
          const wrong = checked && !correct;
          const parts = promptParts(item.prompt);

          return (
            <li key={item.id} className="flex gap-3 items-start">
              <span className="text-sm font-bold text-muted-foreground w-6 shrink-0 pt-2">{item.id}</span>
              <div className="flex-1 min-w-0">
                {item.context && (
                  <p className="text-sm text-muted-foreground italic mb-1">{item.context}</p>
                )}

                {exercise.type === 'choice' && item.options ? (
                  <div className="space-y-2">
                    <p className="text-sm text-foreground leading-relaxed">{item.prompt}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.options.map((option) => {
                        const selected = value === option;
                        const optionCorrect = checked && isCorrect(option, item.answer);
                        return (
                          <button
                            key={option}
                            type="button"
                            onClick={() => setAnswer(item.id, option)}
                            disabled={checked}
                            className={`px-3 py-1.5 rounded-md border text-sm transition-colors ${
                              checked
                                ? optionCorrect
                                  ? 'border-green-500 bg-green-50 dark:bg-green-950/30 text-green-700 dark:text-green-400 font-semibold'
                                  : selected
                                    ? 'border-red-500 bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 line-through'
                                    : 'border-border bg-background text-muted-foreground'
                                : selected
                                  ? 'border-primary bg-primary/10 text-foreground font-medium'
                                  : 'border-border bg-background text-foreground hover:bg-muted'
                            }`}
                          >
                            {option}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ) : exercise.type === 'matching' ? (
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm text-foreground">{item.prompt}</span>
                    <select
                      aria-label={`Answer for item ${item.id}`}
                      value={value}
                      disabled={checked}
                      onChange={(e) => setAnswer(item.id, e.target.value)}
                      className={`text-sm rounded-md border px-2 py-1.5 bg-background max-w-full ${
                        checked
                          ? correct
                            ? 'border-green-500 text-green-700 dark:text-green-400'
                            : 'border-red-500 text-red-600 dark:text-red-400'
                          : 'border-border text-foreground'
                      }`}
                    >
                      <option value="">Choose…</option>
                      {shuffledOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    {statusIcon(item.id, item)}
                  </div>
                ) : (
                  <div className="flex flex-wrap items-center gap-x-1.5 gap-y-2 text-sm text-foreground leading-relaxed">
                    {parts.map((part, index) => (
                      <span key={index} className="contents">
                        {part && <span>{part}</span>}
                        {index < parts.length - 1 && (
                          <input
                            type="text"
                            aria-label={`Answer for item ${item.id}`}
                            value={value}
                            disabled={checked}
                            onChange={(e) => setAnswer(item.id, e.target.value)}
                            placeholder={item.hint}
                            className={`border-b-2 bg-transparent outline-none px-1 py-0.5 min-w-[140px] flex-1 max-w-full transition-colors ${
                              checked
                                ? correct
                                  ? 'border-green-500 text-green-700 dark:text-green-400 font-semibold'
                                  : 'border-red-500 text-red-600 dark:text-red-400'
                                : 'border-primary/40 focus:border-primary text-foreground'
                            }`}
                          />
                        )}
                      </span>
                    ))}
                    {item.hint && !checked && (
                      <span className="text-xs text-muted-foreground">({item.hint})</span>
                    )}
                    {statusIcon(item.id, item)}
                  </div>
                )}

                {checked && !correct && (
                  <p className="text-xs text-green-700 dark:text-green-400 mt-1">
                    Answer: {item.answer.split('|')[0]}
                  </p>
                )}
              </div>
            </li>
          );
        })}
      </ol>

      <div className="mt-6 flex items-center gap-3 flex-wrap">
        {!checked ? (
          <Button onClick={handleCheck} className="bg-primary hover:bg-primary/90">
            Check Answers
          </Button>
        ) : (
          <>
            <div className="px-4 py-2 rounded-lg bg-muted">
              <p className="text-sm font-medium text-foreground">
                Score: {score} / {exercise.items.length}
              </p>
            </div>
            <Button variant="outline" onClick={handleReset} className="gap-2">
              <RotateCcw className="h-4 w-4" /> Try again
            </Button>
          </>
        )}
      </div>
    </>
  );

  const conversationBody = (
    <>
      <h3 className="text-xl font-semibold mb-1 font-merriweather text-foreground">{exercise.title}</h3>
      <p className="text-muted-foreground mb-5">{exercise.instruction}</p>

      <div className="space-y-6">
        {exercise.items.map((item) => {
          const value = answers[item.id] ?? '';
          const correct = checked && isCorrect(value, item.answer);
          const wrong = checked && !correct;

          if (exercise.type === 'matching') {
            return (
              <div key={item.id} className="flex flex-col sm:flex-row gap-3 sm:gap-6 items-stretch sm:items-center">
                <div className="flex-1">
                  <ConversationBubble speaker="Speaker A" side="left">
                    {item.prompt}
                  </ConversationBubble>
                </div>
                <div className="flex-1">
                  <ConversationBubble speaker="Speaker B" side="right">
                    <div className="flex items-center gap-2 flex-wrap">
                      <select
                        aria-label={`Answer for item ${item.id}`}
                        value={value}
                        disabled={checked}
                        onChange={(e) => setAnswer(item.id, e.target.value)}
                        className={`text-sm rounded-md border px-2 py-1.5 bg-background max-w-full ${
                          checked
                            ? correct
                              ? 'border-green-500 text-green-700 dark:text-green-400'
                              : 'border-red-500 text-red-600 dark:text-red-400'
                            : 'border-border text-foreground'
                        }`}
                      >
                        <option value="">Choose a reply…</option>
                        {shuffledOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      {statusIcon(item.id, item)}
                    </div>
                  </ConversationBubble>
                  {checked && !correct && (
                    <p className="text-xs text-green-700 dark:text-green-400 mt-1 text-right">
                      Answer: {item.answer.split('|')[0]}
                    </p>
                  )}
                </div>
              </div>
            );
          }

          // multiple-choice conversation (e.g. "ADAM: What ___ here?")
          if (exercise.type === 'choice' && item.options) {
            const speakerMatch = item.prompt.match(/^([A-Za-z]+):\s*/);
            const speaker = speakerMatch?.[1] ?? (item.id % 2 === 1 ? 'A' : 'B');
            const text = speakerMatch ? item.prompt.slice(speakerMatch[0].length) : item.prompt;
            const side = /^(a|adam)/i.test(speaker) ? 'left' : 'right';
            return (
              <div key={item.id} className="space-y-2">
                <ConversationBubble speaker={speaker} side={side}>
                  <p className="text-sm text-foreground leading-relaxed mb-2">{text}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.options.map((option) => {
                      const selected = value === option;
                      const optionCorrect = checked && isCorrect(option, item.answer);
                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() => setAnswer(item.id, option)}
                          disabled={checked}
                          className={`px-3 py-1.5 rounded-md border text-sm transition-colors ${
                            checked
                              ? optionCorrect
                                ? 'border-green-500 bg-green-50 dark:bg-green-950/30 text-green-700 dark:text-green-400 font-semibold'
                                : selected
                                  ? 'border-red-500 bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 line-through'
                                  : 'border-border bg-background text-muted-foreground'
                              : selected
                                ? 'border-primary bg-primary/10 text-foreground font-medium'
                                : 'border-border bg-background text-foreground hover:bg-muted'
                          }`}
                        >
                          {option}
                        </button>
                      );
                    })}
                    {statusIcon(item.id, item)}
                  </div>
                </ConversationBubble>
                {checked && !correct && (
                  <p className="text-xs text-green-700 dark:text-green-400 mt-1">
                    Answer: {item.answer.split('|')[0]}
                  </p>
                )}
              </div>
            );
          }

          // gap-fill conversation
          const parts = promptParts(item.prompt);
          return (
            <div key={item.id} className="space-y-2">
              {item.context && (
                <ConversationBubble speaker="A" side="left">
                  {item.context.replace(/^[AB]:\s*/, '')}
                </ConversationBubble>
              )}
              <ConversationBubble speaker="B" side="right">
                <div className="flex flex-wrap items-center gap-x-1.5 gap-y-2">
                  {parts.map((part, index) => (
                    <span key={index} className="contents">
                      {part && <span>{part.replace(/^[AB]:\s*/, '')}</span>}
                      {index < parts.length - 1 && (
                        <input
                          type="text"
                          aria-label={`Answer for item ${item.id}`}
                          value={value}
                          disabled={checked}
                          onChange={(e) => setAnswer(item.id, e.target.value)}
                          placeholder={item.hint}
                          className={`border-b-2 bg-transparent outline-none px-1 py-0.5 min-w-[120px] flex-1 max-w-full transition-colors ${
                            checked
                              ? correct
                                ? 'border-green-500 text-green-700 dark:text-green-400 font-semibold'
                                : 'border-red-500 text-red-600 dark:text-red-400'
                              : 'border-primary/40 focus:border-primary text-foreground'
                          }`}
                        />
                      )}
                    </span>
                  ))}
                  {item.hint && !checked && (
                    <span className="text-xs text-muted-foreground">({item.hint})</span>
                  )}
                  {statusIcon(item.id, item)}
                </div>
              </ConversationBubble>
              {checked && !correct && (
                <p className="text-xs text-green-700 dark:text-green-400 mt-1">
                  Answer: {item.answer.split('|')[0]}
                </p>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-8 flex items-center gap-3 flex-wrap">
        {!checked ? (
          <Button onClick={handleCheck} className="bg-primary hover:bg-primary/90">
            Check Answers
          </Button>
        ) : (
          <>
            <div className="px-4 py-2 rounded-lg bg-muted">
              <p className="text-sm font-medium text-foreground">
                Score: {score} / {exercise.items.length}
              </p>
            </div>
            <Button variant="outline" onClick={handleReset} className="gap-2">
              <RotateCcw className="h-4 w-4" /> Try again
            </Button>
          </>
        )}
      </div>
    </>
  );

  return (
    <Card
      className={`service-card overflow-hidden ${
        isConversation
          ? 'bg-gradient-to-br from-amber-50/80 via-background to-orange-50/60 dark:from-amber-950/20 dark:via-background dark:to-orange-950/10'
          : ''
      }`}
    >
      <CardContent className="p-0">
        {isConversation && exercise.image ? (
          <div
            className={`grid gap-0 ${
              imageRight ? 'lg:grid-cols-[1fr_260px]' : 'lg:grid-cols-[260px_1fr]'
            }`}
          >
            {!imageRight && (
              <div className="hidden lg:block bg-muted/30 border-r border-border">
                <img
                  src={exercise.image}
                  alt={exercise.imageAlt ?? exercise.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="p-6">{conversationBody}</div>
            {imageRight && (
              <div className="hidden lg:block bg-muted/30 border-l border-border">
                <img
                  src={exercise.image}
                  alt={exercise.imageAlt ?? exercise.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        ) : (
          <div className="p-6">{cardBody}</div>
        )}
      </CardContent>
    </Card>
  );
};

export default MurphyExercise;
