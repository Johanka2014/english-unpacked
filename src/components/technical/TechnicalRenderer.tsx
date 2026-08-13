import { Activity } from '@/data/technicalEnglishData';
import { Card, CardContent } from '@/components/ui/card';
import InfoSection from '@/components/presentations/InfoSection';
import MatchingExercise from '@/components/presentations/MatchingExercise';
import MultipleChoiceQuiz from '@/components/presentations/MultipleChoiceQuiz';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import DragFillCollocations from './DragFillCollocations';
import TypeBlanks from './TypeBlanks';
import NotesBoxes from './NotesBoxes';
import AudioWithTranscript from './AudioWithTranscript';
import Flashcards from '@/components/presentations/Flashcards';


const FillBlanks = ({ activity }: { activity: Activity }) => {
  const [reveal, setReveal] = useState(false);
  return (
    <InfoSection title={activity.title || 'Fill in the blanks'}>
      {activity.body && <p className="text-muted-foreground mb-3">{activity.body}</p>}
      <div className="space-y-3">
        {activity.blanks?.map((b, i) => (
          <div key={i} className="p-3 rounded-lg border border-border">
            <p className="text-foreground">{b.prompt}</p>
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

const Discussion = ({ activity }: { activity: Activity }) => {
  const content = (
    <>
      {activity.body && <p className="text-foreground mb-3">{activity.body}</p>}
      {activity.bullets && (
        <ul className="space-y-2 list-disc list-inside text-foreground">
          {activity.bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      )}
    </>
  );

  if (activity.image) {
    return (
      <InfoSection title={activity.title || 'Discussion'}>
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 items-center">
          <div>{content}</div>
          <img
            src={activity.image}
            alt={activity.imageAlt || ''}
            loading="lazy"
            width={1024}
            height={768}
            className="w-full h-auto rounded-xl object-cover shadow-sm"
          />
        </div>
      </InfoSection>
    );
  }

  return <InfoSection title={activity.title || 'Discussion'}>{content}</InfoSection>;
};


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

const renderActivity = (a: Activity, idx: number) => {
  switch (a.type) {
    case 'discussion':
    case 'intro':
      return <Discussion activity={a} />;
    case 'reading':
      return <Reading activity={a} />;
    case 'word-list':
      return <WordList activity={a} />;
    case 'flashcards':
      return (
        <Flashcards
          title={a.title || 'Flashcards'}
          description={a.body}
          cards={a.cards || []}
        />
      );
    case 'notes':
      return (
        <NotesBoxes
          title={a.title || 'Write your answers'}
          body={a.body}
          fields={a.fields || []}
          storageKey={`${a.title || 'notes'}-${idx}`}
        />
      );
    case 'audio':
      return null; // rendered by the audio wrapper below
    case 'fill-blanks':
      return <FillBlanks activity={a} />;
    case 'drag-fill':
      return (
        <DragFillCollocations
          title={a.title || 'Drag to complete'}
          body={a.body}
          blanks={a.blanks || []}
        />
      );
    case 'type-blanks':
      return (
        <TypeBlanks
          title={a.title || 'Type to complete'}
          body={a.body}
          blanks={a.blanks || []}
        />
      );
    case 'matching':
      return (
        <MatchingExercise
          title={a.title || 'Matching exercise'}
          description={a.body || ''}
          pairs={a.pairs || []}
          leftLabel="Item"
          rightLabel="Match"
        />
      );
    case 'multiple-choice':
      return (
        <MultipleChoiceQuiz
          title={a.title || 'Quiz'}
          description={a.body || ''}
          questions={(a.mcq || []).map((q, i) => ({
            id: i + 1,
            text: q.question,
            options: q.options,
            answer: q.options[q.answerIndex],
          }))}
        />
      );
    case 'task':
      return <Task activity={a} />;
    default:
      return null;
  }
};

const TechnicalRenderer = ({ activities }: { activities: Activity[] }) => {
  return (
    <div className="space-y-6">
      {activities.map((a, idx) => (
        <div key={idx} className="space-y-3">
          {a.audioSrc && (
            <AudioWithTranscript
              src={a.audioSrc}
              label={a.track ? `Audio ${a.track}` : a.title}
              transcript={a.transcript}
            />
          )}
          {renderActivity(a, idx)}
        </div>
      ))}
    </div>
  );
};


export default TechnicalRenderer;
