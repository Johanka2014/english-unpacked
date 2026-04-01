import { useState } from 'react';
import MultipleChoiceQuiz from '@/components/presentations/MultipleChoiceQuiz';
import MatchingExercise from '@/components/presentations/MatchingExercise';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CheckCircle2, XCircle } from 'lucide-react';

/* ─── Activity 3: True / False ─── */
const TrueFalseActivity = () => {
  const statements = [
    { id: 1, text: 'The job is based in Northern Ireland and doesn\'t require much travelling.', answer: false, correction: 'The job is based in the U.K. and involves extensive travelling.' },
    { id: 2, text: 'The training manager is responsible for three people.', answer: false, correction: 'The training manager is responsible for a small team of U.K. trainees and 2 administrators.' },
    { id: 3, text: 'The job is for somebody with an extensive training background.', answer: true },
    { id: 4, text: 'The training manager reports directly to the Board of Directors.', answer: false, correction: 'The training manager reports to the general manager.' },
    { id: 5, text: 'The training manager is responsible for conducting an audit of training requirements and preparing a new training manual.', answer: true },
  ];

  const [answers, setAnswers] = useState<Record<number, boolean | null>>({});
  const [checked, setChecked] = useState(false);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Activity 3: True or False?</CardTitle>
        <p className="text-muted-foreground text-sm">Read the Training Manager job description above and decide if the statements are true or false. Correct the false statements.</p>
      </CardHeader>
      <CardContent className="space-y-4">
        {statements.map((s) => (
          <div key={s.id} className="p-4 rounded-lg border bg-muted/30">
            <p className="mb-3 font-medium">{s.id}. {s.text}</p>
            <div className="flex gap-3">
              <Button size="sm" variant={answers[s.id] === true ? 'default' : 'outline'} onClick={() => !checked && setAnswers((a) => ({ ...a, [s.id]: true }))}>True</Button>
              <Button size="sm" variant={answers[s.id] === false ? 'default' : 'outline'} onClick={() => !checked && setAnswers((a) => ({ ...a, [s.id]: false }))}>False</Button>
            </div>
            {checked && answers[s.id] !== null && answers[s.id] !== undefined && (
              <div className={`mt-3 flex items-start gap-2 text-sm ${answers[s.id] === s.answer ? 'text-green-700' : 'text-red-700'}`}>
                {answers[s.id] === s.answer ? <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" /> : <XCircle className="h-4 w-4 mt-0.5 shrink-0" />}
                <span>{answers[s.id] === s.answer ? 'Correct!' : `Incorrect. ${s.correction || ''}`}</span>
              </div>
            )}
          </div>
        ))}
        <Button className="mt-4" onClick={() => setChecked(true)} disabled={Object.keys(answers).length < statements.length}>Check Answers</Button>
      </CardContent>
    </Card>
  );
};

/* ─── Gap Fill Component ─── */
const GapFillExercise = ({ title, description, sentences }: { title: string; description: string; sentences: { id: number; before: string; blank: string; after: string }[] }) => {
  const [values, setValues] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        {sentences.map((s) => {
          const isCorrect = checked && values[s.id]?.toLowerCase().trim() === s.blank.toLowerCase();
          const isWrong = checked && values[s.id]?.toLowerCase().trim() !== s.blank.toLowerCase();
          return (
            <div key={s.id} className="flex flex-wrap items-center gap-2">
              <span className="text-sm">{s.before}</span>
              <Input
                className={`w-40 inline-block ${checked ? (isCorrect ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50') : ''}`}
                value={values[s.id] || ''}
                onChange={(e) => !checked && setValues((v) => ({ ...v, [s.id]: e.target.value }))}
                disabled={checked}
              />
              <span className="text-sm">{s.after}</span>
              {isWrong && <span className="text-xs text-red-600">→ {s.blank}</span>}
            </div>
          );
        })}
        <Button className="mt-4" onClick={() => setChecked(true)}>Check Answers</Button>
      </CardContent>
    </Card>
  );
};

const VocabularyUnit1 = () => {
  return (
    <div className="space-y-12">
      {/* Useful Language Box */}
      <Card className="border-teal-200 bg-teal-50/50 dark:bg-teal-950/20 dark:border-teal-800">
        <CardHeader>
          <CardTitle className="text-xl text-teal-800 dark:text-teal-200">Useful Language: The Language of Job Descriptions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm">
          <p>Keep job descriptions simple so that they are easy for job applicants to understand. Avoid complicated phrases, company jargon, or abbreviations.</p>
          <div>
            <p className="font-semibold mb-2">Useful verbs for key responsibilities:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 list-disc list-inside text-muted-foreground">
              <li>to develop general training programmes</li>
              <li>to work closely with branch managers</li>
              <li>to implement new training courses</li>
              <li>to prepare a staff training manual</li>
              <li>to carry out an initial training audit</li>
              <li>to assess customer service</li>
              <li>to be responsible for the training budget</li>
              <li>to identify future needs</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-2">Other useful 'doing' verbs:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 list-disc list-inside text-muted-foreground">
              <li>to advise / to inform</li>
              <li>to plan / to organize</li>
              <li>to maintain / to keep at the same level</li>
              <li>to support / to assist</li>
              <li>to monitor / to check</li>
              <li>to supply / to provide</li>
            </ul>
          </div>
          <div className="bg-teal-100/60 dark:bg-teal-900/30 p-3 rounded-lg text-xs">
            <p><strong>Remember:</strong> people work <em>for</em> or <em>at</em> a company • they work <em>in</em> a department or team • they are responsible <em>to</em> or accountable <em>to</em> their boss/manager</p>
          </div>
        </CardContent>
      </Card>

      {/* Activity 3 */}
      <TrueFalseActivity />

      {/* Activity 4: Verb selection */}
      <MultipleChoiceQuiz
        title="Activity 4: Choose the Correct Verbs"
        description="Choose the correct verbs to complete the sentences from the job description."
        questions={[
          { id: 1, text: 'The training manager ___ the general manager.', options: ['reports to', 'manages', 'monitors'], answer: 'reports to' },
          { id: 2, text: 'The suitable applicant must be able to ___ closely with branch offices.', options: ['develop', 'work', 'implement'], answer: 'work' },
          { id: 3, text: 'We need to ___ new training courses and ___ needs for the future.', options: ['implement / identify', 'contribute / develop', 'train / manage'], answer: 'implement / identify' },
          { id: 4, text: 'There is hands-on work which involves ___ training courses.', options: ['carrying out', 'ensuring', 'contributing'], answer: 'carrying out' },
          { id: 5, text: 'First you need to ___ a new staff training manual.', options: ['prepare', 'maintain', 'operate'], answer: 'prepare' },
          { id: 6, text: 'The job ___ a lot of travelling.', options: ['involves', 'maintains', 'ensures'], answer: 'involves' },
        ]}
      />

      {/* Activity 5: Manager verbs gap-fill */}
      <GapFillExercise
        title="Activity 5: Manager Verbs"
        description="A manager should be able to... Complete each gap with a verb from the word bank: build, develop, ensure, identify, improve, motivate, react to"
        sentences={[
          { id: 1, before: '___', blank: 'improve', after: 'staff performance.' },
          { id: 2, before: '___', blank: 'build', after: 'an effective team.' },
          { id: 3, before: '___', blank: 'react to', after: 'change.' },
          { id: 4, before: '___', blank: 'motivate', after: 'staff.' },
          { id: 5, before: '___', blank: 'develop', after: 'creativity.' },
          { id: 6, before: '___', blank: 'identify', after: 'problems.' },
          { id: 7, before: '___', blank: 'ensure', after: 'deadlines are met.' },
        ]}
      />

      {/* Activity 6: Person specification matching */}
      <MatchingExercise
        title="Activity 6: Person Specification Vocabulary"
        description="Match these words and phrases from the person specification with their definitions."
        pairs={[
          { id: 1, left: 'to work on your own initiative', right: 'to work independently, without anyone telling you what to do' },
          { id: 2, left: 'leadership', right: 'the ability to head a group or company' },
          { id: 3, left: 'to coordinate', right: 'to organize the different parts of an activity or the people involved so that everything works well' },
          { id: 4, left: 'interpersonal skills', right: 'the ability to develop good relationships between yourself and others' },
          { id: 5, left: 'sound knowledge', right: 'a good level of information about or understanding of something' },
          { id: 6, left: 'training audit', right: 'a careful examination to find out how much training is done and whether it is effective and necessary' },
          { id: 7, left: 'open lines of communication', right: 'creating and maintaining an atmosphere in which people communicate easily and effectively' },
        ]}
      />

      {/* Activity 12: Word formation */}
      <GapFillExercise
        title="Activity 12: Word Formation — Employ & Recruit"
        description="Complete the sentences with the correct form of 'employ' or 'recruit'. You might need to add prefixes or suffixes."
        sentences={[
          { id: 1, before: 'Levels of', blank: 'employment', after: 'are high.' },
          { id: 2, before: 'There are more people on the job markets when', blank: 'unemployment', after: 'rises.' },
          { id: 3, before: 'She told her', blank: 'employer', after: 'she was looking for another job.' },
          { id: 4, before: 'We engaged six new', blank: 'employees', after: 'in the last quarter.' },
          { id: 5, before: 'We', blank: 're-employed', after: 'her in the same position when she returned from maternity leave.' },
          { id: 6, before: 'Last year we', blank: 'recruited', after: 'two team leaders for our call centre.' },
          { id: 7, before: "We've revised our overall", blank: 'recruitment', after: 'procedures because of the new employment legislation.' },
        ]}
      />
    </div>
  );
};

export default VocabularyUnit1;
