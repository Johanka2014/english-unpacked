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

const VideoEmbed = ({ activity }: { activity: Activity }) => {
  if (!activity.videoId) return null;
  return (
    <Card>
      <CardContent className="p-4 sm:p-6">
        <h3 className="text-lg font-semibold mb-3 text-foreground">
          {activity.videoLabel || activity.title || 'Video'}
        </h3>
        <div className="relative w-full overflow-hidden rounded-lg" style={{ paddingTop: '56.25%' }}>
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube.com/embed/${activity.videoId}`}
            title={activity.videoLabel || activity.title || 'Lesson video'}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>
        <a
          href={`https://www.youtube.com/watch?v=${activity.videoId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-sm text-primary underline underline-offset-4"
        >
          Open the video on YouTube
        </a>
      </CardContent>
    </Card>
  );
};


const EmbedActivity = ({ activity }: { activity: Activity }) => {
  if (!activity.embedUrl) return null;
  return (
    <Card>
      <CardContent className="p-4 sm:p-6">
        <h3 className="text-lg font-semibold mb-3 text-foreground">
          {activity.title || 'Interactive activity'}
        </h3>
        {activity.body && <p className="text-muted-foreground mb-3">{activity.body}</p>}
        <iframe
          src={activity.embedUrl}
          title={activity.title || 'Interactive activity'}
          className="w-full max-w-full rounded-lg border border-border"
          height={activity.embedHeight || 420}
          allowFullScreen
          loading="lazy"
        />
      </CardContent>
    </Card>
  );
};

const FillBlanks = ({ activity }: { activity: Activity }) => {
  const [reveal, setReveal] = useState(false);
  const [values, setValues] = useState<Record<number, string>>({});
  const [results, setResults] = useState<Record<number, 'correct' | 'incorrect' | null>>({});

  const check = () => {
    const r: Record<number, 'correct' | 'incorrect'> = {};
    activity.blanks?.forEach((b, i) => {
      const typed = (values[i] || '').trim().toLowerCase();
      const expected = b.answer.toLowerCase();
      r[i] = typed === expected ? 'correct' : 'incorrect';
    });
    setResults(r);
  };

  return (
    <InfoSection title={activity.title || 'Fill in the blanks'}>
      {activity.body && <p className="text-muted-foreground mb-3">{activity.body}</p>}
      <div className="space-y-3">
        {activity.blanks?.map((b, i) => (
          <div key={i} className="p-3 rounded-lg border border-border">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="text-foreground flex-shrink-0">{b.prompt}</span>
              <input
                type="text"
                value={values[i] || ''}
                onChange={(e) => {
                  setValues((v) => ({ ...v, [i]: e.target.value }));
                  setResults((r) => ({ ...r, [i]: null }));
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') check();
                }}
                placeholder="Type your answer"
                className={`flex-1 px-3 py-1.5 rounded-md border bg-background text-foreground outline-none transition-colors ${
                  results[i] === 'correct'
                    ? 'border-green-500 focus:border-green-500'
                    : results[i] === 'incorrect'
                    ? 'border-red-500 focus:border-red-500'
                    : 'border-border focus:border-primary'
                }`}
                aria-label={b.prompt || `Answer ${i + 1}`}
              />
              {results[i] === 'correct' && (
                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" aria-hidden="true" />
              )}
              {results[i] === 'incorrect' && (
                <span className="text-sm text-red-600 shrink-0">{b.answer}</span>
              )}
            </div>
            {reveal && (
              <p className="mt-2 text-sm text-green-700 dark:text-green-400 flex items-center gap-1">
                <CheckCircle2 className="h-4 w-4" /> {b.answer}
              </p>
            )}
          </div>
        ))}
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" onClick={() => setReveal((r) => !r)}>
            {reveal ? 'Hide answers' : 'Show answers'}
          </Button>
          <Button size="sm" onClick={check}>
            Check answers
          </Button>
        </div>
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
    case 'video':
      return <VideoEmbed activity={a} />;
    case 'embed':
      return <EmbedActivity activity={a} />;
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
      return a.body || a.bullets ? <Discussion activity={a} /> : null;

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
