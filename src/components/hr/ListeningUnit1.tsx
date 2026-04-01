import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { CheckCircle2, XCircle, Headphones } from 'lucide-react';
import MatchingExercise from '@/components/presentations/MatchingExercise';

/* ─── Activity 9: Tick recruitment sources ─── */
const Activity9 = () => {
  const sources = [
    { id: 'national', text: 'National newspapers', mentioned: false },
    { id: 'intranet', text: 'Company intranet', mentioned: true },
    { id: 'local', text: 'Local newspapers', mentioned: false },
    { id: 'wordofmouth', text: 'Word of mouth', mentioned: false },
    { id: 'agencies', text: 'Recruitment agencies', mentioned: true },
    { id: 'trade', text: 'Trade magazines', mentioned: true },
    { id: 'internet', text: 'Internet', mentioned: true },
    { id: 'intlmags', text: 'International business magazines', mentioned: false },
  ];

  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [checked, setChecked] = useState(false);

  const toggle = (id: string) => {
    if (checked) return;
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2">
          <Headphones className="h-5 w-5" /> Activity 9: Recruitment Sources
        </CardTitle>
        <p className="text-muted-foreground text-sm">Listen to the conversation between Jackie Branigan, head of HR, and David Grundy, her recruitment officer. Tick the types of recruitment sources they mention.</p>
      </CardHeader>
      <CardContent>
        {/* Audio placeholder */}
        <div className="mb-6 p-4 rounded-lg border-2 border-dashed border-muted-foreground/20 flex items-center gap-3">
          <Headphones className="h-6 w-6 text-muted-foreground" />
          <div>
            <p className="text-sm font-medium">Audio Track 1</p>
            <p className="text-xs text-muted-foreground">Audio will be added here</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {sources.map((s) => (
            <div
              key={s.id}
              className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                checked
                  ? selected.has(s.id) === s.mentioned
                    ? 'bg-green-50 border-green-200 dark:bg-green-950/20'
                    : 'bg-red-50 border-red-200 dark:bg-red-950/20'
                  : selected.has(s.id)
                    ? 'bg-primary/5 border-primary/30'
                    : 'bg-muted/30'
              }`}
              onClick={() => toggle(s.id)}
            >
              <Checkbox checked={selected.has(s.id)} />
              <span className="text-sm">{s.text}</span>
              {checked && (
                selected.has(s.id) === s.mentioned
                  ? <CheckCircle2 className="h-4 w-4 text-green-600 ml-auto" />
                  : <XCircle className="h-4 w-4 text-red-600 ml-auto" />
              )}
            </div>
          ))}
        </div>
        <Button onClick={() => setChecked(true)}>Check Answers</Button>
      </CardContent>
    </Card>
  );
};

/* ─── Activity 10: True/False ─── */
const Activity10 = () => {
  const statements = [
    { id: 1, text: 'Jackie is responsible for the recruitment of the personnel in Madrid.', answer: true },
    { id: 2, text: 'Francisco Menendez is general manager of the Madrid office.', answer: true },
    { id: 3, text: 'The personnel officer they are looking for must have 2–5 years\' generalist HR experience.', answer: true },
    { id: 4, text: 'Applicants should have either a qualification in human resources management or a university degree.', answer: false },
    { id: 5, text: 'English is not important for the job.', answer: false },
    { id: 6, text: 'David is confident that they will have good applicants from inside the company.', answer: false },
    { id: 7, text: 'There are not many job advertisements in the Spanish HR paper.', answer: false },
    { id: 8, text: 'David is offering applicants interviews in the U.K. and in Madrid.', answer: true },
    { id: 9, text: 'They are looking for a personnel officer because of a recent merger.', answer: true },
    { id: 10, text: 'Jackie will conduct the interviews.', answer: false },
  ];

  const [answers, setAnswers] = useState<Record<number, boolean | null>>({});
  const [checked, setChecked] = useState(false);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2">
          <Headphones className="h-5 w-5" /> Activity 10: True or False?
        </CardTitle>
        <p className="text-muted-foreground text-sm">Listen again and decide whether the following statements about the conversation are true or false.</p>
      </CardHeader>
      <CardContent className="space-y-3">
        {statements.map((s) => (
          <div key={s.id} className="p-3 rounded-lg border bg-muted/30">
            <p className="mb-2 text-sm">{s.id}. {s.text}</p>
            <div className="flex gap-3">
              <Button size="sm" variant={answers[s.id] === true ? 'default' : 'outline'} onClick={() => !checked && setAnswers((a) => ({ ...a, [s.id]: true }))}>True</Button>
              <Button size="sm" variant={answers[s.id] === false ? 'default' : 'outline'} onClick={() => !checked && setAnswers((a) => ({ ...a, [s.id]: false }))}>False</Button>
            </div>
            {checked && answers[s.id] !== undefined && (
              <div className={`mt-2 flex items-center gap-1 text-xs ${answers[s.id] === s.answer ? 'text-green-700' : 'text-red-700'}`}>
                {answers[s.id] === s.answer ? <CheckCircle2 className="h-3 w-3" /> : <XCircle className="h-3 w-3" />}
                <span>{answers[s.id] === s.answer ? 'Correct!' : `Incorrect — the answer is ${s.answer ? 'True' : 'False'}.`}</span>
              </div>
            )}
          </div>
        ))}
        <Button className="mt-4" onClick={() => setChecked(true)} disabled={Object.keys(answers).length < statements.length}>Check Answers</Button>
      </CardContent>
    </Card>
  );
};

const ListeningUnit1 = () => {
  return (
    <div className="space-y-12">
      <Activity9 />
      <Activity10 />

      {/* Activity 11: Vocabulary matching */}
      <MatchingExercise
        title="Activity 11: Vocabulary from the Conversation"
        description="Match the words and phrases from the conversation with their meanings."
        pairs={[
          { id: '1', left: 'have a word about', right: 'discuss something' },
          { id: '2', left: 'cleared', right: '(have been) given official approval' },
          { id: '3', left: 'intranet', right: "an organization's private computer network" },
          { id: '4', left: 'in-house', right: 'inside a company' },
          { id: '5', left: 'merger', right: 'when two companies become one' },
          { id: '6', left: 'trade paper', right: 'newspaper or magazine for a specific profession' },
          { id: '7', left: 'keep (sb) posted', right: 'keep somebody informed' },
          { id: '8', left: 'disciplinary procedures', right: 'ways of warning employees that they are breaking the rules' },
        ]}
      />
    </div>
  );
};

export default ListeningUnit1;
