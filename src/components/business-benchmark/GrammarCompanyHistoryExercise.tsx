import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, XCircle, RotateCcw, BookOpen } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

/* ─── Exercise 5.1 ─── */
const LAURA_TEXT = `I usually get up at 7 o'clock and have a big breakfast. I walk to work, which takes me about half an hour. I start work at 8.45. I never have lunch. I finish work at 5 o'clock. I'm always tired when I get home. I usually cook a meal in the evening. I don't usually go out. I go to bed at about 11 o'clock, and I always sleep well.`;

interface GapSentence {
  id: string;
  before: string;
  after: string;
  answer: string;
}

const EX_5_1: GapSentence[] = [
  { id: '1', before: '1  She ', after: ' at 7 o\'clock.', answer: 'got up' },
  { id: '2', before: '2  She ', after: ' a big breakfast.', answer: 'had' },
  { id: '3', before: '3  She ', after: ' to work.', answer: 'walked' },
  { id: '4', before: '4  It ', after: ' her about half an hour to get to work.', answer: 'took' },
  { id: '5', before: '5  She ', after: ' work at 8.45.', answer: 'started' },
  { id: '6', before: '6  She ', after: ' lunch.', answer: "didn't have" },
  { id: '7', before: '7  She ', after: ' work at 5 o\'clock.', answer: 'finished' },
  { id: '8', before: '8  She ', after: ' tired when she got home.', answer: 'was' },
  { id: '9', before: '9  She ', after: ' a meal yesterday evening.', answer: 'cooked' },
  { id: '10', before: '10  She ', after: ' out yesterday evening.', answer: "didn't go" },
  { id: '11', before: '11  She ', after: ' to bed at 11 o\'clock.', answer: 'went' },
  { id: '12', before: '12  She ', after: ' well last night.', answer: 'slept' },
];

/* ─── Exercise 5.2 ─── */
const WORD_BANK_5_2 = ['buy', 'catch', 'cost', 'fall', 'hurt', 'sell', 'spend', 'teach', 'throw', 'write'];

const EX_5_2: GapSentence[] = [
  { id: 'a', before: '1  Mozart ', after: ' more than 600 pieces of music.', answer: 'wrote' },
  { id: 'b', before: '2  \'How did you learn to drive?\' \'My father ', after: ' me.\'', answer: 'taught' },
  { id: 'c', before: '3  We couldn\'t afford to keep our car, so we ', after: ' it.', answer: 'sold' },
  { id: 'd', before: '4  Dave ', after: ' down the stairs this morning and ', answer: 'fell' },
  { id: 'd2', before: '', after: ' his leg.', answer: 'hurt' },
  { id: 'e', before: '5  Joe ', after: ' the ball to Sue, who ', answer: 'threw' },
  { id: 'e2', before: '', after: ' it.', answer: 'caught' },
  { id: 'f', before: '6  Ann ', after: ' a lot of money yesterday. She ', answer: 'spent' },
  { id: 'f2', before: '', after: ' a dress which ', answer: 'bought' },
  { id: 'f3', before: '', after: ' £100.', answer: 'cost' },
];

/* ─── Exercise 5.3 ─── */
interface QuestionExercise {
  id: string;
  prompt: string;
  answer: string;
}

const EX_5_3: QuestionExercise[] = [
  { id: 'q1', prompt: 'To the U.S. We went on a trip from San Francisco to Denver.', answer: 'Where did you go?' },
  { id: 'q2', prompt: 'Yes, we hired a car in San Francisco.', answer: 'How did you travel?' },
  { id: 'q3', prompt: 'Two weeks.', answer: 'How long did it take?' },
  { id: 'q4', prompt: 'Yes, small hotels or motels.', answer: 'Where did you stay?' },
  { id: 'q5', prompt: 'Yes, but it was very hot – sometimes too hot.', answer: 'Was the weather good?' },
  { id: 'q6', prompt: 'Of course. It was wonderful.', answer: 'Did you visit the Grand Canyon?' },
];

/* ─── Exercise 5.4 ─── */
interface PosNegSentence {
  id: string;
  before: string;
  after: string;
  answer: string;
  hint: string;
}

const EX_5_4: PosNegSentence[] = [
  { id: 'p1', before: '1  It was warm, so I ', after: ' my coat.', answer: 'took off', hint: 'take' },
  { id: 'p2', before: '2  The film wasn\'t very good. I ', after: ' it much.', answer: "didn't enjoy", hint: 'enjoy' },
  { id: 'p3', before: '3  I knew Sarah was busy, so I ', after: ' her.', answer: "didn't disturb", hint: 'disturb' },
  { id: 'p4', before: '4  We were very tired, so we ', after: ' the party early.', answer: 'left', hint: 'leave' },
  { id: 'p5', before: '5  The bed was very uncomfortable. I ', after: ' well.', answer: "didn't sleep", hint: 'sleep' },
  { id: 'p6', before: '6  The window was open and a bird ', after: ' into the room.', answer: 'flew', hint: 'fly' },
  { id: 'p7', before: '7  The hotel wasn\'t very expensive. It ', after: ' much to stay there.', answer: "didn't cost", hint: 'cost' },
  { id: 'p8', before: '8  I was in a hurry, so I ', after: ' time to phone you.', answer: "didn't have", hint: 'have' },
  { id: 'p9', before: '9  It was hard carrying the bags. They ', after: ' very heavy.', answer: 'were', hint: 'be' },
];

/* ─── Reusable gap-fill renderer ─── */
const GapFillExercise = ({
  title,
  instruction,
  gaps,
  wordBank,
}: {
  title: string;
  instruction: string;
  gaps: { id: string; before: string; after: string; answer: string; hint?: string }[];
  wordBank?: string[];
}) => {
  const [answers, setAnswers] = useState<Record<string, string>>(() => {
    const init: Record<string, string> = {};
    gaps.forEach((g) => (init[g.id] = ''));
    return init;
  });
  const [checked, setChecked] = useState(false);

  const normalize = (s: string) => s.trim().toLowerCase().replace(/['']/g, "'");
  const isCorrect = (id: string) => {
    const gap = gaps.find((g) => g.id === id);
    if (!gap) return false;
    return normalize(answers[id]) === normalize(gap.answer);
  };

  const score = checked ? gaps.filter((g) => isCorrect(g.id)).length : null;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        <p className="text-sm text-muted-foreground">{instruction}</p>

        {wordBank && (
          <div className="flex flex-wrap gap-2 rounded-lg border border-border bg-muted/20 p-4">
            {wordBank.map((w) => (
              <span key={w} className="px-3 py-1.5 rounded-md bg-accent text-accent-foreground text-sm font-medium border border-border">
                {w}
              </span>
            ))}
          </div>
        )}

        <div className="space-y-3">
          {gaps.map((gap) => (
            <div key={gap.id} className="flex flex-wrap items-baseline text-sm text-foreground leading-relaxed">
              <span>{gap.before}</span>
              <span className="inline-flex items-center mx-1">
                <input
                  type="text"
                  value={answers[gap.id]}
                  onChange={(e) => {
                    setAnswers((prev) => ({ ...prev, [gap.id]: e.target.value }));
                    if (checked) setChecked(false);
                  }}
                  className={`border-b-2 bg-transparent text-center text-sm font-medium outline-none w-40 py-0.5 transition-colors ${
                    checked
                      ? isCorrect(gap.id)
                        ? 'border-green-500 text-green-700'
                        : 'border-destructive text-destructive'
                      : 'border-primary/40 focus:border-primary'
                  }`}
                  placeholder={gap.hint ? `(${gap.hint})` : '……'}
                />
                {checked && (
                  isCorrect(gap.id)
                    ? <CheckCircle2 className="h-4 w-4 text-green-500 ml-1 shrink-0" />
                    : <span className="inline-flex items-center">
                        <XCircle className="h-4 w-4 text-destructive ml-1 shrink-0" />
                        <span className="text-xs text-green-600 font-medium ml-1 whitespace-nowrap">({gap.answer})</span>
                      </span>
                )}
              </span>
              <span>{gap.after}</span>
            </div>
          ))}
        </div>

        {checked && score !== null && (
          <p className={`text-sm font-medium ${score === gaps.length ? 'text-green-600' : 'text-muted-foreground'}`}>
            Score: {score} / {gaps.length}
          </p>
        )}

        <div className="flex gap-3">
          <Button onClick={() => setChecked(true)} className="bg-primary hover:bg-primary/90">Check Answers</Button>
          <Button
            variant="outline"
            onClick={() => {
              const init: Record<string, string> = {};
              gaps.forEach((g) => (init[g.id] = ''));
              setAnswers(init);
              setChecked(false);
            }}
            className="gap-2"
          >
            <RotateCcw className="h-3.5 w-3.5" /> Reset
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

/* ─── Main Component ─── */
const GrammarCompanyHistoryExercise = () => {
  return (
    <div className="space-y-10">
      {/* Grammar Reference */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            <CardTitle className="text-xl text-primary">Past Simple (I did)</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-5">
          {/* Section A */}
          <div className="rounded-lg border border-border bg-muted/30 p-5 space-y-3">
            <p className="font-semibold text-foreground text-sm">A  Study this example:</p>
            <p className="text-sm text-muted-foreground italic">
              Wolfgang Amadeus Mozart <strong>was</strong> an Austrian musician and composer. He <strong>lived</strong> from 1756 to 1791. He <strong>started</strong> composing at the age of five and <strong>wrote</strong> more than 600 pieces of music. He <strong>was</strong> only 35 years old when he <strong>died</strong>.
            </p>
          </div>

          {/* Section B */}
          <div className="rounded-lg border border-border bg-muted/30 p-5 space-y-3">
            <p className="font-semibold text-foreground text-sm">B  Regular verbs end in <em className="text-primary">-ed</em>; many verbs are <em className="text-primary">irregular</em>:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted-foreground ml-4">
              <span>work → <strong>worked</strong></span>
              <span>write → <strong>wrote</strong></span>
              <span>invite → <strong>invited</strong></span>
              <span>see → <strong>saw</strong></span>
              <span>stop → <strong>stopped</strong></span>
              <span>go → <strong>went</strong></span>
              <span>study → <strong>studied</strong></span>
              <span>shut → <strong>shut</strong></span>
            </div>
          </div>

          {/* Section C */}
          <div className="rounded-lg border border-border bg-muted/30 p-5 space-y-3">
            <p className="font-semibold text-foreground text-sm">C  Questions and negatives use <em className="text-primary">did/didn't</em> + infinitive:</p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-4">
              <li><strong>Did</strong> you <strong>go</strong> out last night?</li>
              <li>I <strong>didn't enjoy</strong> the film much.</li>
              <li>What <strong>did</strong> you <strong>do</strong> at the weekend?</li>
            </ul>
          </div>

          {/* Section D */}
          <div className="rounded-lg border border-border bg-muted/30 p-5 space-y-3">
            <p className="font-semibold text-foreground text-sm">D  The past of <em>be</em> (am/is/are) is <em className="text-primary">was/were</em>:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-sm text-muted-foreground ml-4">
              <span>I/he/she/it → <strong>was / wasn't</strong></span>
              <span>we/you/they → <strong>were / weren't</strong></span>
            </div>
            <p className="text-xs text-muted-foreground ml-4">
              <strong>NB</strong> We do not use <em>did</em> in negatives and questions with was/were.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Exercise 5.1 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Exercise 5.1</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground font-medium">Read what Laura says about a typical working day:</p>
          <div className="rounded-lg border border-border bg-muted/20 p-4">
            <p className="text-sm text-foreground italic leading-relaxed">{LAURA_TEXT}</p>
          </div>
          <p className="text-sm text-muted-foreground">
            Yesterday was a typical working day for Laura. Write what she did or didn't do yesterday.
          </p>
        </CardContent>
      </Card>

      <GapFillExercise
        title=""
        instruction=""
        gaps={EX_5_1}
      />

      {/* Exercise 5.2 */}
      <GapFillExercise
        title="Exercise 5.2"
        instruction="Complete the sentences using the following verbs in the correct form."
        gaps={EX_5_2}
        wordBank={WORD_BANK_5_2}
      />

      {/* Exercise 5.3 */}
      <GapFillExercise
        title="Exercise 5.3"
        instruction="You ask James about his holiday. Write the questions you asked him."
        gaps={EX_5_3.map((q) => ({
          id: q.id,
          before: `${q.id.replace('q', '')}  `,
          after: '',
          answer: q.answer,
          hint: q.prompt,
        }))}
      />

      {/* Exercise 5.4 */}
      <GapFillExercise
        title="Exercise 5.4"
        instruction="Complete the sentences. Put the verb into the correct form, positive or negative."
        gaps={EX_5_4}
      />

      {/* Discussion */}
      <Accordion type="single" collapsible>
        <AccordionItem value="discussion">
          <AccordionTrigger className="text-primary font-semibold">
            💬 Over to You: Discussion
          </AccordionTrigger>
          <AccordionContent className="text-sm text-muted-foreground space-y-2 pt-2">
            <p>Think about a famous company you know. Prepare a short talk about its history using the past simple. Consider:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>When was the company founded?</li>
              <li>Who set it up?</li>
              <li>What products or services did it launch first?</li>
              <li>How did it grow over the years?</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default GrammarCompanyHistoryExercise;
