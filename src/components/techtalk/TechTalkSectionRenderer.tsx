import { useState } from 'react';
import { TTActivity } from '@/data/techTalkData';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Info, ChevronDown, ChevronUp, KeyRound } from 'lucide-react';
import InfoSection from '@/components/presentations/InfoSection';
import MatchingExercise from '@/components/presentations/MatchingExercise';
import MultipleChoiceQuiz from '@/components/presentations/MultipleChoiceQuiz';
import TechTalkAudio from './TechTalkAudio';

const AnswerKey = ({ answers }: { answers: string[] }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="mt-3">
      <Button variant="ghost" size="sm" className="gap-1 h-7" onClick={() => setShow(s => !s)}>
        <KeyRound className="h-3.5 w-3.5" />
        {show ? 'Hide answer key' : 'Show answer key'}
        {show ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
      </Button>
      {show && (
        <ul className="mt-2 space-y-1 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200/60 rounded-lg p-3 text-sm">
          {answers.map((a, i) => (
            <li key={i} className="flex items-start gap-2 text-emerald-900 dark:text-emerald-200">
              <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" /> <span>{a}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const FillBlanks = ({ a }: { a: TTActivity }) => {
  const [reveal, setReveal] = useState(false);
  return (
    <InfoSection title={a.title || 'Fill in the blanks'}>
      <div className="space-y-3">
        {a.blanks?.map((b, i) => (
          <div key={i} className="p-3 rounded-lg border border-border">
            <p className="text-foreground">
              <span className="font-semibold text-muted-foreground mr-2">{i + 1}.</span>
              {b.prompt}
            </p>
            {reveal && (
              <p className="mt-1 text-sm text-green-700 dark:text-green-400 flex items-center gap-1">
                <CheckCircle2 className="h-4 w-4" /> {b.answer}
              </p>
            )}
          </div>
        ))}
        <Button variant="outline" size="sm" onClick={() => setReveal(r => !r)}>
          {reveal ? 'Hide answers' : 'Show answers'}
        </Button>
      </div>
    </InfoSection>
  );
};

const WordList = ({ a }: { a: TTActivity }) => (
  <InfoSection title={a.title || 'Key vocabulary'}>
    <div className="flex flex-wrap gap-2">
      {a.words?.map((w) => (
        <span key={w} className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">{w}</span>
      ))}
    </div>
  </InfoSection>
);

const Discussion = ({ a }: { a: TTActivity }) => (
  <InfoSection title={a.title || 'Discussion'}>
    {a.body && <p className="text-foreground mb-3 whitespace-pre-line">{a.body}</p>}
    {a.bullets && (
      <ul className="space-y-2 list-disc list-inside text-foreground">
        {a.bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
    )}
    {a.answers && <AnswerKey answers={a.answers} />}
  </InfoSection>
);

const Reading = ({ a }: { a: TTActivity }) => (
  <InfoSection title={a.title || 'Reading'}>
    <div className="space-y-3 text-foreground leading-relaxed">
      {a.passage?.map((p, i) => <p key={i}>{p}</p>)}
    </div>
  </InfoSection>
);

const LanguageNote = ({ a }: { a: TTActivity }) => (
  <Card className="border-l-4 border-l-blue-500 bg-blue-50/40 dark:bg-blue-950/20">
    <CardContent className="p-5">
      <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
        <Info className="h-4 w-4 text-blue-600" /> {a.title || 'Language note'}
      </h4>
      {a.body && <p className="text-foreground whitespace-pre-line">{a.body}</p>}
    </CardContent>
  </Card>
);

const Task = ({ a }: { a: TTActivity }) => (
  <Card className="border-l-4 border-l-primary">
    <CardContent className="p-5">
      <h4 className="font-semibold text-foreground mb-2">{a.title || 'Task'}</h4>
      {a.body && <p className="text-foreground whitespace-pre-line">{a.body}</p>}
      {a.bullets && (
        <ul className="mt-2 space-y-1 list-disc list-inside text-foreground">
          {a.bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      )}
      {a.answers && <AnswerKey answers={a.answers} />}
    </CardContent>
  </Card>
);

const Note = ({ a }: { a: TTActivity }) => (
  <Card className="border-dashed bg-amber-50/40 dark:bg-amber-950/10">
    <CardContent className="p-4">
      <h4 className="font-semibold text-foreground mb-1 text-sm">{a.title || 'Note'}</h4>
      {a.body && <p className="text-sm text-muted-foreground whitespace-pre-line">{a.body}</p>}
    </CardContent>
  </Card>
);

const TechTalkSectionRenderer = ({ activities }: { activities: TTActivity[] }) => (
  <div className="space-y-6">
    {activities.map((a, i) => {
      switch (a.type) {
        case 'audio': return <TechTalkAudio key={i} track={a.track || '?'} title={a.title} script={a.script} />;
        case 'intro':
        case 'discussion': return <Discussion key={i} a={a} />;
        case 'reading': return <Reading key={i} a={a} />;
        case 'word-list': return <WordList key={i} a={a} />;
        case 'fill-blanks': return <FillBlanks key={i} a={a} />;
        case 'language-note': return <LanguageNote key={i} a={a} />;
        case 'matching':
          return (
            <MatchingExercise
              key={i}
              title={a.title || 'Matching exercise'}
              description={a.body}
              pairs={a.pairs || []}
              leftLabel="Item"
              rightLabel="Match"
            />
          );
        case 'multiple-choice':
          return (
            <MultipleChoiceQuiz
              key={i}
              title={a.title || 'Quiz'}
              description={a.body || ''}
              questions={(a.mcq || []).map((q, idx) => ({
                id: idx + 1,
                text: q.question,
                options: q.options,
                answer: q.options[q.answerIndex],
              }))}
            />
          );
        case 'task': return <Task key={i} a={a} />;
        case 'note': return <Note key={i} a={a} />;
        default: return null;
      }
    })}
  </div>
);

export default TechTalkSectionRenderer;
