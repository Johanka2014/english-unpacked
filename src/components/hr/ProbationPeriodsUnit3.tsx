import { useMemo, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, XCircle, RotateCcw } from 'lucide-react';
import MatchingExercise from '@/components/presentations/MatchingExercise';
import MultipleChoiceQuiz from '@/components/presentations/MultipleChoiceQuiz';

// ── Activity 4: Reading — Match articles to headlines ────────────────────

const headlines = [
  { id: 'a', text: 'Growth in social networking Business Pages' },
  { id: 'b', text: 'UK firm fires telesales assistant for tweeting' },
  { id: 'c', text: 'Tribunal rules that dismissal was unfair' },
  { id: 'd', text: 'Job seekers forget their online profile' },
];

const articles = [
  {
    id: 1,
    text:
      "Lenny Rauwolf, a telesales assistant from Ringmer, Sussex, has lost his job after tweeting about his boss. 'I hate my job – my boss understands nothing, and belongs in a zoo,' he tweeted. Twenty minutes later, after a brief hearing with his manager and the head of HR, Rauwolf, 24, was dismissed and told to leave the building immediately. In a letter he received later, the company told him his contract had been terminated on the grounds of gross professional misconduct and wasting company time.",
    answer: 'b',
  },
  {
    id: 2,
    text:
      "Amina Joubert, a nurse in a private hospital, was wrongly dismissed, an employment tribunal has ruled. Joubert was found guilty at a disciplinary hearing of putting the hospital's reputation at risk after posting negative remarks about her workplace on a social networking site. The tribunal found that the grounds for dismissal were insufficient and that the hospital had acted unreasonably.",
    answer: 'c',
  },
  {
    id: 3,
    text:
      "A new survey in the US reveals that checking a job applicant's online presence has become standard procedure in most large companies. The survey concludes with three points of advice for job seekers: (1) Don't post anything which you don't want everyone to see (2) Remember to select your privacy settings (3) Only allow people you know well to join your network.",
    answer: 'd',
  },
  {
    id: 4,
    text:
      'International brands are increasingly turning to social networking sites in their bid to interact with their customers. The demographic information they get from visits to their page costs nothing and is invaluable to marketing strategy planners. Sites like Facebook can now offer over 800 million potential customers and advertising can be accurately pinpointed.',
    answer: 'a',
  },
];

const HeadlineMatchingActivity = () => {
  const [selections, setSelections] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState<Record<number, boolean>>({});
  const shuffledHeadlines = useMemo(
    () => [...headlines].sort(() => Math.random() - 0.5),
    []
  );

  const handleCheck = () => {
    const newChecked: Record<number, boolean> = {};
    articles.forEach((a) => {
      newChecked[a.id] = selections[a.id] === a.answer;
    });
    setChecked(newChecked);
  };

  const handleReset = () => {
    setSelections({});
    setChecked({});
  };

  const correctCount = Object.values(checked).filter(Boolean).length;
  const hasResults = Object.keys(checked).length > 0;

  return (
    <Card className="service-card">
      <CardContent className="p-6">
        <h3 className="text-2xl font-semibold mb-2 font-merriweather text-foreground">
          Activity 4: Reading Comprehension
        </h3>
        <p className="text-muted-foreground mb-6">
          Read the newspaper articles 1–4 and match them to the headlines a–d.
        </p>

        <div className="space-y-6">
          {articles.map((article) => {
            const state = checked[article.id];
            const border =
              state === undefined
                ? 'border-border'
                : state
                ? 'border-green-500 bg-green-50 dark:bg-green-950/20'
                : 'border-red-500 bg-red-50 dark:bg-red-950/20';
            return (
              <div key={article.id} className={`p-4 rounded-lg border-2 ${border}`}>
                <div className="p-4 rounded-md mb-4 bg-orange-50 dark:bg-orange-950/20 border-l-4 border-orange-400">
                  <p className="font-bold text-foreground mb-2">Article {article.id}</p>
                  <p className="text-foreground/90 text-sm leading-relaxed">{article.text}</p>
                </div>
                <div className="flex items-center gap-3 flex-wrap">
                  <label className="font-semibold text-foreground">Matching headline:</label>
                  <select
                    value={selections[article.id] || ''}
                    onChange={(e) =>
                      setSelections((prev) => ({ ...prev, [article.id]: e.target.value }))
                    }
                    className="border border-input rounded-md p-2 bg-background text-foreground min-w-[280px]"
                  >
                    <option value="">Choose a headline...</option>
                    {shuffledHeadlines.map((h) => (
                      <option key={h.id} value={h.id}>
                        {h.id}. {h.text}
                      </option>
                    ))}
                  </select>
                  {state === true && <CheckCircle2 className="h-5 w-5 text-green-600" />}
                  {state === false && <XCircle className="h-5 w-5 text-red-600" />}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex items-center justify-center gap-4 flex-wrap">
          <Button onClick={handleCheck} className="bg-primary hover:bg-primary/90">
            Check Answers
          </Button>
          <Button onClick={handleReset} variant="outline" className="gap-2">
            <RotateCcw className="h-4 w-4" /> Reset
          </Button>
          {hasResults && (
            <span className="text-sm font-medium text-muted-foreground">
              Score: {correctCount} / {articles.length}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

// ── Main Lesson ──────────────────────────────────────────────────────────

const ProbationPeriodsUnit3 = () => {
  return (
    <div className="space-y-12">
      <Card className="service-card">
        <CardContent className="p-6">
          <h2 className="text-2xl md:text-3xl font-bold font-merriweather text-foreground mb-2">
            Managing New Staff: The Probation Period
          </h2>
          <p className="text-muted-foreground">
            Explore the language of probation, performance, disciplinary hearings and dismissals
            through matching games, gap-fills, a reading task and discussion prompts.
          </p>
        </CardContent>
      </Card>

      {/* Activity 1: Probation Vocabulary Matching */}
      <MatchingExercise
        title="Activity 1: Match the Vocabulary"
        description="Match each term to its correct definition."
        leftLabel="Term"
        rightLabel="Definition"
        pairs={[
          { id: 1, left: 'Probation period', right: 'A set time at the start of a new job for the employer to see if the new employee is suitable.' },
          { id: 2, left: 'Performance issues', right: 'When an employee is not doing their job to the required standard.' },
          { id: 3, left: 'Lack of initiative', right: 'When an employee does not take action without being told to.' },
          { id: 4, left: 'Poor timekeeping', right: 'Being frequently late for work or taking long breaks.' },
          { id: 5, left: 'Not a good fit', right: "When an employee's personality or work style does not match the company culture." },
          { id: 6, left: 'To give feedback', right: "To provide information about someone's performance." },
          { id: 7, left: 'To raise concerns', right: 'To talk about problems or worries you have.' },
          { id: 8, left: 'To terminate a contract', right: "To officially end a person's employment." },
        ]}
      />

      {/* Activity 2: Gap Fill Sentences */}
      <MultipleChoiceQuiz
        title="Activity 2: Complete the Sentences"
        description="Choose the correct word or phrase to complete each sentence."
        questions={[
          {
            id: 1,
            text: 'If an employee is often late, the manager needs to talk to them about their ______.',
            options: ['Performance issues', 'Poor timekeeping', 'Lack of initiative'],
            answer: 'Poor timekeeping',
          },
          {
            id: 2,
            text: 'After several warnings, the company decided to ______.',
            options: ['extend probation', 'give feedback', 'terminate a contract'],
            answer: 'terminate a contract',
          },
          {
            id: 3,
            text: 'A good manager knows how to ______ that is both constructive and clear.',
            options: ['give feedback', 'not be a good fit', 'raise concerns'],
            answer: 'give feedback',
          },
          {
            id: 4,
            text: 'He never offers new ideas or starts tasks by himself; he shows a real ______.',
            options: ['Probation period', 'Unprofessional behaviour', 'Lack of initiative'],
            answer: 'Lack of initiative',
          },
          {
            id: 5,
            text: 'Although his work was good, his attitude was a problem. He was ______.',
            options: ['Not a good fit', 'Performance issues', 'Poor timekeeping'],
            answer: 'Not a good fit',
          },
          {
            id: 6,
            text: 'The first three months of my new job is a ______.',
            options: ['Probation period', 'To extend probation', 'Lack of initiative'],
            answer: 'Probation period',
          },
        ]}
      />

      {/* Activity 3: Disciplinary Vocabulary */}
      <MatchingExercise
        title="Activity 3: Match More Vocabulary"
        description="Vocabulary related to disciplinary actions. Match the words to their definitions."
        leftLabel="Word"
        rightLabel="Definition"
        pairs={[
          { id: 1, left: 'Misconduct', right: 'Bad behaviour' },
          { id: 2, left: 'Gross', right: 'Very serious' },
          { id: 3, left: 'Disciplinary', right: 'Related to punishment' },
          { id: 4, left: 'Hearing', right: 'A meeting to find out the facts (e.g., in a court)' },
          { id: 5, left: 'Notice', right: 'A warning that something is going to happen' },
          { id: 6, left: 'Appealed', right: 'Formally asked a court to change its decision' },
          { id: 7, left: 'Tribunal', right: 'A special court of law' },
          { id: 8, left: 'Unfair', right: 'Not fair or reasonable' },
          { id: 9, left: 'Grounds', right: 'Reasons' },
          { id: 10, left: 'Firing', right: 'Dismissing someone from a job' },
        ]}
      />

      {/* Activity 4: Reading */}
      <HeadlineMatchingActivity />

      {/* Activity 5: Discussion */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">
            Activity 5: Discussion Topics
          </h3>
          <p className="text-muted-foreground mb-4">
            Discuss these questions with a partner or in a group. What is the best advice?
          </p>
          <ol className="space-y-3 text-foreground">
            {[
              'What is the most serious problem a new employee can have during their probation? Why?',
              'What is the best way for a manager to give feedback to a new employee who is making mistakes?',
              'Imagine you are a manager. A new employee is always 15 minutes late for work. What do you do and say?',
              'What are three important pieces of advice you would give to someone starting a new job to make sure they pass their probation period?',
              'Do you think probation periods are fair? Why or why not?',
            ].map((q, i) => (
              <li key={i} className="flex gap-3">
                <span className="font-bold text-primary">{i + 1}.</span>
                <span>{q}</span>
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProbationPeriodsUnit3;
