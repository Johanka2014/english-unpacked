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

const shuffleWords = (sentence: string) => {
  const words = sentence.split(/\s+/);
  const shuffled = [...words];
  do {
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
  } while (shuffled.join(' ') === sentence);
  return shuffled;
};

const WordOrderSentence = ({ sentence, index }: { sentence: string; index: number }) => {
  const [pool, setPool] = useState<string[]>(() => shuffleWords(sentence));
  const [picked, setPicked] = useState<string[]>([]);
  const [result, setResult] = useState<'correct' | 'incorrect' | null>(null);

  const pick = (i: number) => {
    if (result === 'correct') return;
    setPicked((p) => [...p, pool[i]]);
    setPool((p) => p.filter((_, idx) => idx !== i));
    setResult(null);
  };

  const unpick = (i: number) => {
    if (result === 'correct') return;
    setPool((p) => [...p, picked[i]]);
    setPicked((p) => p.filter((_, idx) => idx !== i));
    setResult(null);
  };

  const check = () => setResult(picked.join(' ') === sentence ? 'correct' : 'incorrect');
  const reset = () => {
    setPool(shuffleWords(sentence));
    setPicked([]);
    setResult(null);
  };

  return (
    <div className="p-3 rounded-lg border border-border space-y-3">
      <p className="text-xs font-semibold text-muted-foreground">Sentence {index + 1}</p>
      <div
        className={`flex flex-wrap gap-1.5 min-h-[2.5rem] p-2 rounded-md border bg-background ${
          result === 'correct' ? 'border-green-500' : result === 'incorrect' ? 'border-red-500' : 'border-border'
        }`}
        aria-live="polite"
        aria-label={`Your answer for sentence ${index + 1}`}
      >
        {picked.map((w, i) => (
          <button
            key={`picked-${i}`}
            type="button"
            onClick={() => unpick(i)}
            className="px-2.5 py-1 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {w}
          </button>
        ))}
        {picked.length === 0 && (
          <span className="text-sm text-muted-foreground italic px-1 py-1">Tap the words below to build the sentence…</span>
        )}
      </div>
      <div className="flex flex-wrap gap-1.5" aria-label={`Available words for sentence ${index + 1}`}>
        {pool.map((w, i) => (
          <button
            key={`pool-${i}`}
            type="button"
            onClick={() => pick(i)}
            className="px-2.5 py-1 rounded-md bg-muted text-foreground text-sm font-medium border border-border hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {w}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <Button size="sm" onClick={check} disabled={picked.length === 0}>Check</Button>
        <Button variant="outline" size="sm" onClick={reset}>Reset</Button>
        {result === 'correct' && (
          <span className="text-sm text-green-600 flex items-center gap-1">
            <CheckCircle2 className="h-4 w-4" /> Correct!
          </span>
        )}
        {result === 'incorrect' && <span className="text-sm text-red-600">Not quite — try again.</span>}
      </div>
    </div>
  );
};

const WordOrder = ({ activity }: { activity: Activity }) => (
  <InfoSection title={activity.title || 'Word order'}>
    {activity.body && <p className="text-muted-foreground mb-3">{activity.body}</p>}
    <div className="space-y-4">
      {activity.sentences?.map((s, i) => <WordOrderSentence key={i} sentence={s} index={i} />)}
    </div>
  </InfoSection>
);

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


const NewspaperReading = ({ activity }: { activity: Activity }) => (
  <article className="rounded-lg border border-border bg-muted/40 shadow-sm overflow-hidden">
    <div className="border-b-4 border-double border-foreground/40 px-4 sm:px-6 py-3 bg-background/60">
      <p className="text-[0.65rem] sm:text-xs uppercase tracking-[0.25em] text-muted-foreground text-center">
        {activity.source || 'The Daily Cover'}
      </p>
    </div>
    <div className="px-4 sm:px-8 py-5 sm:py-7">
      <h3 className="font-merriweather text-xl sm:text-3xl font-bold text-foreground leading-tight text-center">
        {activity.title || 'Reading'}
      </h3>
      <div className="mx-auto my-4 h-px w-24 bg-foreground/30" />
      {activity.body && (
        <p className="text-sm italic text-muted-foreground text-center mb-4">{activity.body}</p>
      )}
      <div className="space-y-4 text-foreground leading-7 text-justify font-merriweather text-[0.95rem] sm:columns-2 sm:gap-8 [&>p]:break-inside-avoid">
        {activity.passage?.map((p, i) => (
          <p
            key={i}
            className={i === 0 ? 'first-letter:float-left first-letter:mr-2 first-letter:text-5xl first-letter:font-bold first-letter:leading-[0.85] first-letter:text-primary' : ''}
          >
            {p}
          </p>
        ))}
      </div>
    </div>
  </article>
);

const Reading = ({ activity }: { activity: Activity }) =>
  activity.newspaper ? (
    <NewspaperReading activity={activity} />
  ) : (
    <InfoSection title={activity.title || 'Reading'}>
      <div className="space-y-3 text-foreground leading-relaxed">
        {activity.passage?.map((p, i) => <p key={i}>{p}</p>)}
      </div>
    </InfoSection>
  );

const Task = ({ activity }: { activity: Activity }) => {
  const content = (
    <>
      <h4 className="font-semibold text-foreground mb-2">{activity.title || 'Task'}</h4>
      {activity.body && <p className="text-foreground">{activity.body}</p>}
      {activity.bullets && (
        <ul className="mt-2 space-y-1 list-disc list-inside text-foreground">
          {activity.bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      )}
    </>
  );

  const imageSize = activity.imageSize || 'lg';
  const imageClasses =
    imageSize === 'sm'
      ? 'h-auto max-h-[260px] w-auto mx-auto rounded-xl object-contain shadow-sm'
      : imageSize === 'md'
      ? 'h-auto max-h-[380px] w-auto mx-auto rounded-xl object-contain shadow-sm'
      : 'w-full h-auto rounded-xl object-cover shadow-sm';

  return (
    <Card className="border-l-4 border-l-primary">
      <CardContent className="p-5">
        {activity.image ? (
          <div className={`grid gap-5 md:grid-cols-2 ${imageSize === 'lg' ? 'items-center' : 'items-start'}`}>
            <div>{content}</div>
            <img
              src={activity.image}
              alt={activity.imageAlt || ''}
              loading="lazy"
              width={768}
              height={1024}
              className={imageClasses}
            />
          </div>
        ) : (
          content
        )}
      </CardContent>
    </Card>
  );
};


const GappedSentences = ({ activity }: { activity: Activity }) => {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);
  const key = (g: string) => activity.gapAnswers?.find((a) => a.gap === g)?.letter;

  const renderParagraph = (text: string, i: number) => {
    const parts = text.split(/(\{\{\d+\}\})/g);
    return (
      <p key={i} className="text-foreground leading-7">
        {parts.map((part, j) => {
          const m = part.match(/^\{\{(\d+)\}\}$/);
          if (!m) return <span key={j}>{part}</span>;
          const gap = m[1];
          const correct = checked && answers[gap] === key(gap);
          const wrong = checked && answers[gap] && answers[gap] !== key(gap);
          return (
            <span key={j} className="inline-flex items-center gap-1 align-middle mx-1">
              <span className="text-sm font-semibold text-primary">{gap}</span>
              <select
                value={answers[gap] || ''}
                onChange={(e) => {
                  setAnswers((a) => ({ ...a, [gap]: e.target.value }));
                  setChecked(false);
                }}
                aria-label={`Answer for gap ${gap}`}
                className={`px-2 py-1 rounded-md border bg-background text-foreground text-sm ${
                  correct ? 'border-green-500' : wrong ? 'border-red-500' : 'border-border'
                }`}
              >
                <option value="">—</option>
                {activity.gapOptions?.map((o) => (
                  <option key={o.letter} value={o.letter}>{o.letter}</option>
                ))}
              </select>
            </span>
          );
        })}
      </p>
    );
  };

  const articleTitle = (activity.title || 'Gapped text').replace(/^\w+\s*·\s*/, '');

  return (
    <InfoSection title={activity.title || 'Gapped text'}>
      {activity.body && <p className="text-muted-foreground mb-3">{activity.body}</p>}
      <article className="rounded-lg border border-border bg-card shadow-sm overflow-hidden">
        <header className="border-b-2 border-double border-border px-6 pt-5 pb-4">
          <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-1">News feature</p>
          <h3 className="font-merriweather font-bold text-xl sm:text-2xl text-foreground leading-snug">{articleTitle}</h3>
          <p className="text-xs text-muted-foreground mt-2 italic">An interview with Gary Anderson, designer of the recycling symbol</p>
        </header>
        <div className="px-6 py-5 space-y-4 font-merriweather text-[0.95rem] first:[&_p]:text-justify [&_p]:text-justify">
          {activity.gapParagraphs?.map(renderParagraph)}
        </div>
      </article>
      <div className="mt-5 rounded-lg border border-border bg-muted/40 p-4 space-y-2">
        {activity.gapOptions?.map((o) => (
          <p key={o.letter} className="text-sm text-foreground">
            <span className="font-semibold text-primary mr-2">{o.letter}</span>
            {o.text}
          </p>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-2 mt-4">
        <Button size="sm" onClick={() => setChecked(true)}>Check answers</Button>
        <Button variant="outline" size="sm" onClick={() => { setAnswers({}); setChecked(false); }}>Reset</Button>
        {checked && (
          <span className="text-sm text-muted-foreground">
            {activity.gapAnswers?.filter((a) => answers[a.gap] === a.letter).length} / {activity.gapAnswers?.length} correct
          </span>
        )}
      </div>
    </InfoSection>
  );
};

const renderActivity = (a: Activity, idx: number) => {
  switch (a.type) {
    case 'discussion':
    case 'intro':
      return <Discussion activity={a} />;
    case 'reading':
      return <Reading activity={a} />;
    case 'gapped-sentences':
      return <GappedSentences activity={a} />;
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
          showPhraseBank={a.phraseBank}
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
    case 'word-order':
      return <WordOrder activity={a} />;
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
