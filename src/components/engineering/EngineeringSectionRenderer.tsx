import { Activity } from '@/data/engineeringData';
import { Card, CardContent } from '@/components/ui/card';
import InfoSection from '@/components/presentations/InfoSection';
import MatchingExercise from '@/components/presentations/MatchingExercise';
import MultipleChoiceQuiz from '@/components/presentations/MultipleChoiceQuiz';
import EngineeringAudio from './EngineeringAudio';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

const FillBlanks = ({ activity }: { activity: Activity }) => {
  const [reveal, setReveal] = useState(false);
  return (
    <InfoSection title={activity.title || 'Fill in the blanks'}>
      <div className="space-y-3">
        {activity.blanks?.map((b, i) => (
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
        <Button variant="outline" size="sm" onClick={() => setReveal((r) => !r)}>
          {reveal ? 'Hide answers' : 'Show answers'}
        </Button>
      </div>
    </InfoSection>
  );
};

const WordList = ({ activity }: { activity: Activity }) => (
  <InfoSection title={activity.title || 'Key vocabulary'}>
    <div className="flex flex-wrap gap-2">
      {activity.words?.map((w) => (
        <span key={w} className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
          {w}
        </span>
      ))}
    </div>
  </InfoSection>
);

const Discussion = ({ activity }: { activity: Activity }) => (
  <InfoSection title={activity.title || 'Discussion'}>
    {activity.body && <p className="text-foreground mb-3">{activity.body}</p>}
    {activity.bullets && (
      <ul className="space-y-2 list-disc list-inside text-foreground">
        {activity.bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
    )}
  </InfoSection>
);

const Reading = ({ activity }: { activity: Activity }) => (
  <InfoSection title={activity.title || 'Reading'}>
    <div className="space-y-3 text-foreground leading-relaxed">
      {activity.passage?.map((p, i) => <p key={i}>{p}</p>)}
    </div>
  </InfoSection>
);

const Task = ({ activity }: { activity: Activity }) => (
  <Card className="border-l-4 border-l-primary">
    <CardContent className="p-5">
      <h4 className="font-semibold text-foreground mb-2">{activity.title || 'Task'}</h4>
      {activity.body && <p className="text-foreground">{activity.body}</p>}
      {activity.bullets && (
        <ul className="mt-2 space-y-1 list-disc list-inside text-foreground">
          {activity.bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      )}
    </CardContent>
  </Card>
);

const EngineeringSectionRenderer = ({ activities }: { activities: Activity[] }) => {
  return (
    <div className="space-y-6">
      {activities.map((a, idx) => {
        switch (a.type) {
          case 'audio':
            return <EngineeringAudio key={idx} track={a.track || '?'} title={a.title} />;
          case 'discussion':
          case 'intro':
            return <Discussion key={idx} activity={a} />;
          case 'reading':
            return <Reading key={idx} activity={a} />;
          case 'word-list':
            return <WordList key={idx} activity={a} />;
          case 'fill-blanks':
            return <FillBlanks key={idx} activity={a} />;
          case 'matching':
            return (
              <MatchingExercise
                key={idx}
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
                key={idx}
                title={a.title || 'Quiz'}
                questions={(a.mcq || []).map((q) => ({
                  question: q.question,
                  options: q.options,
                  correctAnswer: q.answerIndex,
                }))}
              />
            );
          case 'task':
            return <Task key={idx} activity={a} />;
          default:
            return null;
        }
      })}
    </div>
  );
};

export default EngineeringSectionRenderer;
