import { useState, useMemo } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { BookOpen, PenLine, CheckCircle2, XCircle, GraduationCap, Newspaper, Mail, PartyPopper, Sparkles } from 'lucide-react';

// ───────────────────────── Helpers ─────────────────────────

const normalise = (s: string) =>
  s.trim().toLowerCase().replace(/[’']/g, "'").replace(/\s+/g, ' ');

const isCorrect = (value: string, answers: string[]) =>
  answers.some((a) => normalise(value) === normalise(a));

const FeedbackIcon = ({ state }: { state: 'idle' | 'correct' | 'wrong' }) => {
  if (state === 'correct') return <CheckCircle2 className="w-4 h-4 text-emerald-600" />;
  if (state === 'wrong') return <XCircle className="w-4 h-4 text-rose-600" />;
  return null;
};

const inputClass = (state: 'idle' | 'correct' | 'wrong') =>
  `inline-flex h-8 w-32 px-2 text-sm ${
    state === 'correct'
      ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-200'
      : state === 'wrong'
      ? 'border-rose-500 bg-rose-50 dark:bg-rose-950/30 text-rose-800 dark:text-rose-200'
      : ''
  }`;

// ───────────────────────── B1/B2: Past Simple forms & use ─────────────────────────

const PastSimpleReference = () => (
  <Card className="service-card">
    <CardContent className="p-6 space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-primary" />
          <h3 className="text-xl font-semibold font-merriweather text-foreground">B1 · Past Simple — Forms</h3>
        </div>
        <span className="text-xs font-bold tracking-wider bg-primary text-primary-foreground px-3 py-1.5 rounded-full">REFERENCE</span>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {/* Regular */}
        <div className="rounded-lg border border-emerald-200 dark:border-emerald-900 bg-emerald-50 dark:bg-emerald-950/30 p-4">
          <p className="font-semibold text-emerald-800 dark:text-emerald-300 mb-3">Regular verbs (+ -ed/-d)</p>
          <ul className="text-sm space-y-1.5 text-emerald-900 dark:text-emerald-100">
            <li><strong>+</strong> I/you/he… <strong>verb-ed</strong> — <em>I phoned you.</em></li>
            <li><strong>−</strong> I/you/he… <strong>didn't</strong> + verb — <em>She didn't phone me.</em></li>
            <li><strong>?</strong> <strong>Did</strong> I/you/he… + verb — <em>Did you phone me?</em></li>
          </ul>
          <p className="text-xs mt-3 text-muted-foreground">want → wanted · hope → hoped · shop → shopped</p>
        </div>

        {/* Irregular */}
        <div className="rounded-lg border border-orange-200 dark:border-orange-900 bg-orange-50 dark:bg-orange-950/30 p-4">
          <p className="font-semibold text-orange-800 dark:text-orange-300 mb-3">Irregular verbs</p>
          <ul className="text-sm space-y-1.5 text-orange-900 dark:text-orange-100">
            <li><strong>+</strong> I/you/he… <strong>irregular past</strong> — <em>I went to the cinema.</em></li>
            <li><strong>−</strong> I/you/he… <strong>didn't</strong> + verb — <em>They didn't go.</em></li>
            <li><strong>?</strong> <strong>Did</strong> I/you/he… + verb — <em>Did you go?</em></li>
          </ul>
          <p className="text-xs mt-3 text-muted-foreground">buy → bought · go → went · make → made</p>
        </div>

        {/* to be */}
        <div className="rounded-lg border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-950/30 p-4">
          <p className="font-semibold text-blue-800 dark:text-blue-300 mb-3">To be (was / were)</p>
          <ul className="text-sm space-y-1.5 text-blue-900 dark:text-blue-100">
            <li><strong>+</strong> I/he/she/it <strong>was</strong> · you/we/they <strong>were</strong></li>
            <li><strong>−</strong> <strong>wasn't / weren't</strong> — <em>They weren't there.</em></li>
            <li><strong>?</strong> <strong>Was</strong> she…? / <strong>Were</strong> you…?</li>
          </ul>
          <p className="text-xs mt-3 text-muted-foreground">I was there. — They weren't there.</p>
        </div>
      </div>

      <div className="rounded-lg border border-indigo-200 dark:border-indigo-900 bg-indigo-50 dark:bg-indigo-950/30 p-4">
        <p className="font-semibold text-indigo-800 dark:text-indigo-300 mb-2">B2 · When do we use the past simple?</p>
        <p className="text-sm text-indigo-900 dark:text-indigo-100">
          For <strong>completed actions, events and situations in the past</strong>:
        </p>
        <ul className="text-sm mt-2 space-y-1 list-disc list-inside text-indigo-900 dark:text-indigo-100">
          <li><em>I <strong>wanted</strong> to see the new film.</em></li>
          <li><em>Your phone <strong>was</strong> on but you <strong>didn't answer</strong>.</em></li>
          <li><em>She <strong>left</strong> the desk and <strong>ran</strong> out of the building.</em></li>
        </ul>
      </div>
    </CardContent>
  </Card>
);

// ───────────────────────── B3/B4: Past Continuous forms & use ─────────────────────────

const PastContinuousReference = () => (
  <Card className="service-card">
    <CardContent className="p-6 space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-primary" />
          <h3 className="text-xl font-semibold font-merriweather text-foreground">B3 · Past Continuous — Forms</h3>
        </div>
        <span className="text-xs font-bold tracking-wider bg-primary text-primary-foreground px-3 py-1.5 rounded-full">was/were + -ing</span>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="rounded-lg border border-emerald-200 dark:border-emerald-900 bg-emerald-50 dark:bg-emerald-950/30 p-4">
          <p className="font-semibold text-emerald-800 dark:text-emerald-300 mb-2">+ Positive</p>
          <p className="text-sm text-emerald-900 dark:text-emerald-100">
            I/he/she/it <strong>was</strong> + verb-<strong>ing</strong><br/>
            you/we/they <strong>were</strong> + verb-<strong>ing</strong>
          </p>
          <p className="text-xs mt-2 italic">I was having a coffee.</p>
        </div>
        <div className="rounded-lg border border-rose-200 dark:border-rose-900 bg-rose-50 dark:bg-rose-950/30 p-4">
          <p className="font-semibold text-rose-800 dark:text-rose-300 mb-2">− Negative</p>
          <p className="text-sm text-rose-900 dark:text-rose-100">
            I/he/she/it <strong>wasn't</strong> + verb-<strong>ing</strong><br/>
            you/we/they <strong>weren't</strong> + verb-<strong>ing</strong>
          </p>
          <p className="text-xs mt-2 italic">We weren't having a coffee.</p>
        </div>
        <div className="rounded-lg border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-950/30 p-4">
          <p className="font-semibold text-blue-800 dark:text-blue-300 mb-2">? Question</p>
          <p className="text-sm text-blue-900 dark:text-blue-100">
            <strong>Was</strong> I/he/she/it + verb-<strong>ing</strong>?<br/>
            <strong>Were</strong> you/we/they + verb-<strong>ing</strong>?
          </p>
          <p className="text-xs mt-2 italic">Were you having a coffee?</p>
        </div>
      </div>

      <div className="rounded-lg border border-amber-200 dark:border-amber-900 bg-amber-50 dark:bg-amber-950/30 p-3 text-sm text-amber-900 dark:text-amber-200">
        ⚠ We do <strong>not</strong> use state verbs (know, like, want, believe…) in the past continuous.
      </div>

      <div className="rounded-lg border border-indigo-200 dark:border-indigo-900 bg-indigo-50 dark:bg-indigo-950/30 p-4 space-y-3">
        <p className="font-semibold text-indigo-800 dark:text-indigo-300">B4 · When do we use the past continuous?</p>
        <div className="text-sm text-indigo-900 dark:text-indigo-100 space-y-2">
          <p>① For an <strong>unfinished activity around a time</strong> in the past:<br/>
            <em>At nine o'clock I was sitting in the cinema.</em></p>
          <p>② For a <strong>past activity interrupted by a past event</strong> (use <em>when</em> + past simple):<br/>
            <em>I was talking to the manager <strong>when</strong> you rang me.</em></p>
          <p>③ For <strong>two activities at the same time</strong> (often with <em>while</em> or <em>and</em>):<br/>
            <em>I was having a coffee <strong>while</strong> I was waiting.</em></p>
        </div>
      </div>
    </CardContent>
  </Card>
);

// ───────────────────────── C1: Postcard past simple gap-fill ─────────────────────────

type GapItem = { prompt: string; answers: string[]; hint?: string };

const C1_GAPS: GapItem[] = [
  { prompt: 'make', answers: ['made'] },
  { prompt: 'visit', answers: ['visited'] },
  { prompt: 'see', answers: ['saw'] },
  { prompt: 'not work', answers: ["didn't work", 'did not work'] },
  { prompt: 'be', answers: ['was'] },
  { prompt: 'have', answers: ['had'] },
  { prompt: 'go', answers: ['went'] },
  { prompt: 'eat', answers: ['ate'] },
  { prompt: 'spend', answers: ['spent'] },
  { prompt: 'find', answers: ['found'] },
  { prompt: 'buy', answers: ['bought'] },
  { prompt: 'you / go', answers: ['did you go'] },
];

const PostcardExercise = () => {
  const [values, setValues] = useState<string[]>(Array(C1_GAPS.length).fill(''));
  const [checked, setChecked] = useState(false);

  const states = useMemo(
    () =>
      values.map((v, i) =>
        !checked ? 'idle' : isCorrect(v, C1_GAPS[i].answers) ? 'correct' : 'wrong'
      ) as Array<'idle' | 'correct' | 'wrong'>,
    [values, checked]
  );

  const Gap = ({ i }: { i: number }) => (
    <span className="inline-flex items-center gap-1 mx-1 align-middle">
      <Input
        value={values[i]}
        onChange={(e) => {
          const next = [...values];
          next[i] = e.target.value;
          setValues(next);
          setChecked(false);
        }}
        placeholder={C1_GAPS[i].prompt}
        className={inputClass(states[i])}
      />
      <FeedbackIcon state={states[i]} />
    </span>
  );

  return (
    <Card className="service-card">
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center gap-2">
          <Mail className="w-5 h-5 text-primary" />
          <h3 className="text-xl font-semibold font-merriweather">C1 · The Brighton Postcard</h3>
        </div>
        <p className="text-sm text-muted-foreground">Read Jenny's postcard and put each verb in brackets into the past simple.</p>

        <div className="rounded-lg border bg-card p-5 leading-9 text-[15px]">
          Hi Niki. We <Gap i={0} /> a trip to Brighton last week. We <Gap i={1} /> the Pavilion, and
          <Gap i={2} /> the nineteenth-century kitchen. I'm glad I <Gap i={3} /> there in those days.
          The dining-room <Gap i={4} /> my favourite room. We <Gap i={5} /> coffee in the restaurant,
          then we <Gap i={6} /> for a walk by the sea and <Gap i={7} /> some fish and chips for lunch.
          We <Gap i={8} /> the afternoon shopping. We <Gap i={9} /> some funny little shops where we
          <Gap i={10} /> some unusual clothes. <Gap i={11} /> anywhere interesting in the holidays?
          <br/>Love, Jenny.
        </div>

        <Button onClick={() => setChecked(true)}>Check answers</Button>
      </CardContent>
    </Card>
  );
};

// ───────────────────────── C2: Party preparation (past continuous) ─────────────────────────

type PartyRow = { time: string; tanya: string; tony: string };
const PARTY: PartyRow[] = [
  { time: '10 am', tanya: 'make a shopping list', tony: 'email their friends' },
  { time: '1 pm', tanya: 'buy the drinks', tony: 'choose the music' },
  { time: '3 pm', tanya: 'tidy the house', tony: 'prepare the food' },
  { time: '6 pm', tanya: 'blow up the balloons', tony: 'decorate the rooms' },
  { time: '7 pm', tanya: 'iron her dress', tony: 'have a shower' },
];

// Model answers for checking
const PARTY_ANSWERS = [
  'at ten o\'clock tanya was making a shopping list and tony was emailing their friends',
  'at one o\'clock tanya was buying the drinks and tony was choosing the music',
  'at three o\'clock tanya was tidying the house and tony was preparing the food',
  'at six o\'clock tanya was blowing up the balloons and tony was decorating the rooms',
  'at seven o\'clock tanya was ironing her dress and tony was having a shower',
];

const PartyExercise = () => {
  const [values, setValues] = useState<string[]>(['At ten o\'clock Tanya was making a shopping list and Tony was emailing their friends.', '', '', '', '']);
  const [checked, setChecked] = useState(false);
  const [reveal, setReveal] = useState(false);

  return (
    <Card className="service-card">
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center gap-2">
          <PartyPopper className="w-5 h-5 text-primary" />
          <h3 className="text-xl font-semibold font-merriweather">C2 · Tanya & Tony's Party</h3>
        </div>
        <p className="text-sm text-muted-foreground">Write sentences in the <strong>past continuous</strong> showing what they were doing at each time. The first one is done for you.</p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border rounded-lg overflow-hidden">
            <thead className="bg-muted/50">
              <tr><th className="p-2 text-left">Time</th><th className="p-2 text-left">Tanya</th><th className="p-2 text-left">Tony</th></tr>
            </thead>
            <tbody>
              {PARTY.map((r) => (
                <tr key={r.time} className="border-t"><td className="p-2 font-semibold">{r.time}</td><td className="p-2">{r.tanya}</td><td className="p-2">{r.tony}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="space-y-3">
          {PARTY.map((r, i) => {
            const state = !checked || i === 0 ? 'idle' : isCorrect(values[i].replace(/\.$/, ''), [PARTY_ANSWERS[i]]) ? 'correct' : 'wrong';
            return (
              <div key={i} className="flex items-start gap-2">
                <span className="text-sm font-semibold w-6 pt-2">{i + 1}</span>
                <Textarea
                  rows={2}
                  value={values[i]}
                  disabled={i === 0}
                  onChange={(e) => {
                    const next = [...values]; next[i] = e.target.value; setValues(next); setChecked(false);
                  }}
                  placeholder={`At ${r.time === '1 pm' ? 'one' : r.time === '3 pm' ? 'three' : r.time === '6 pm' ? 'six' : 'seven'} o'clock Tanya was…`}
                  className={`text-sm ${state === 'correct' ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30' : state === 'wrong' ? 'border-rose-500 bg-rose-50 dark:bg-rose-950/30' : ''}`}
                />
                <FeedbackIcon state={state} />
              </div>
            );
          })}
        </div>

        <div className="flex gap-2 flex-wrap">
          <Button onClick={() => setChecked(true)}>Check answers</Button>
          <Button variant="outline" onClick={() => setReveal((r) => !r)}>{reveal ? 'Hide' : 'Show'} model answers</Button>
        </div>

        {reveal && (
          <div className="rounded-lg bg-muted/50 p-4 text-sm space-y-1">
            {PARTY_ANSWERS.map((a, i) => (
              <p key={i}><strong>{i + 1}.</strong> {a.charAt(0).toUpperCase() + a.slice(1)}.</p>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

// ───────────────────────── C3: Combined past continuous + past simple ─────────────────────────

type C3Item = { a: string; b: string; aAns: string[]; bAns: string[]; sentence: (a: React.ReactNode, b: React.ReactNode) => React.ReactNode };

const C3_ITEMS: C3Item[] = [
  // Item 1 done as example
  { a: 'cook', b: 'meet', aAns: ['were cooking'], bAns: ['met'],
    sentence: (a, b) => <>My parents {a} in a restaurant when they {b}.</> },
  { a: 'study', b: 'fall', aAns: ['was studying'], bAns: ['fell'],
    sentence: (a, b) => <>I {a} grammar when I {b} asleep.</> },
  { a: 'cook', b: 'burn', aAns: ['was cooking'], bAns: ['burnt', 'burned'],
    sentence: (a, b) => <>The chef {a} spaghetti when he {b} his hand.</> },
  { a: 'stay', b: 'paint', aAns: ['was staying'], bAns: ['painted'],
    sentence: (a, b) => <>The artist {a} in the South of France when she {b} her most famous picture.</> },
  { a: 'tidy', b: 'discover', aAns: ['was tidying'], bAns: ['discovered'],
    sentence: (a, b) => <>The scientist {a} his laboratory when he {b} the new drug.</> },
  { a: 'climb', b: 'see', aAns: ['were climbing'], bAns: ['saw'],
    sentence: (a, b) => <>We {a} the wall when the gardener {b} us.</> },
];

const C3Exercise = () => {
  const [values, setValues] = useState<{a: string; b: string}[]>(C3_ITEMS.map(() => ({ a: '', b: '' })));
  const [checked, setChecked] = useState(false);

  return (
    <Card className="service-card">
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center gap-2">
          <PenLine className="w-5 h-5 text-primary" />
          <h3 className="text-xl font-semibold font-merriweather">C3 · Interrupted Actions</h3>
        </div>
        <p className="text-sm text-muted-foreground">
          Complete each sentence with a verb from <strong>Box A in the past continuous</strong> and a verb from <strong>Box B in the past simple</strong>.
        </p>

        <div className="grid sm:grid-cols-2 gap-3">
          <div className="rounded-lg border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-950/30 p-3 text-sm">
            <p className="font-semibold text-blue-800 dark:text-blue-300 mb-1">Box A (past continuous)</p>
            <p>climb · cook · dance · stay · study · tidy · work</p>
          </div>
          <div className="rounded-lg border border-emerald-200 dark:border-emerald-900 bg-emerald-50 dark:bg-emerald-950/30 p-3 text-sm">
            <p className="font-semibold text-emerald-800 dark:text-emerald-300 mb-1">Box B (past simple)</p>
            <p>burn · discover · meet · fall · paint · play · see</p>
          </div>
        </div>

        <div className="rounded-lg border bg-muted/30 p-3 text-sm italic">
          Example: I <strong>was dancing</strong> with my boyfriend when the disc jockey <strong>played</strong> our favourite song.
        </div>

        <div className="space-y-3">
          {C3_ITEMS.map((item, i) => {
            const aState = !checked ? 'idle' : isCorrect(values[i].a, item.aAns) ? 'correct' : 'wrong';
            const bState = !checked ? 'idle' : isCorrect(values[i].b, item.bAns) ? 'correct' : 'wrong';
            const A = (
              <span className="inline-flex items-center gap-1 mx-1 align-middle">
                <Input value={values[i].a} placeholder="(past cont.)" className={inputClass(aState)}
                  onChange={(e) => { const n = [...values]; n[i] = { ...n[i], a: e.target.value }; setValues(n); setChecked(false); }} />
                <FeedbackIcon state={aState} />
              </span>
            );
            const B = (
              <span className="inline-flex items-center gap-1 mx-1 align-middle">
                <Input value={values[i].b} placeholder="(past simple)" className={inputClass(bState)}
                  onChange={(e) => { const n = [...values]; n[i] = { ...n[i], b: e.target.value }; setValues(n); setChecked(false); }} />
                <FeedbackIcon state={bState} />
              </span>
            );
            return (
              <div key={i} className="text-[15px] leading-9 border-b pb-3 last:border-0">
                <span className="font-semibold mr-1">{i + 2}.</span>{item.sentence(A, B)}
              </div>
            );
          })}
        </div>

        <Button onClick={() => setChecked(true)}>Check answers</Button>
      </CardContent>
    </Card>
  );
};

// ───────────────────────── C4: Underline the best tense ─────────────────────────

type C4Item = { id: number; options: [string, string]; correct: 0 | 1 };
const C4_ITEMS: C4Item[] = [
  { id: 1, options: ['happened', 'was happening'], correct: 0 },
  { id: 2, options: ['went', 'were going'], correct: 0 },
  { id: 3, options: ['met', 'were meeting'], correct: 0 },
  { id: 4, options: ['invited', 'were inviting'], correct: 0 },
  { id: 5, options: ["didn't go", "weren't going"], correct: 0 },
  { id: 6, options: ["didn't get", "weren't getting"], correct: 0 },
  { id: 7, options: ['watched', 'was watching'], correct: 1 },
  { id: 8, options: ['had', 'was having'], correct: 1 },
  { id: 9, options: ['read', 'was reading'], correct: 1 },
  { id: 10, options: ['rang', 'was ringing'], correct: 0 },
  { id: 11, options: ['looked', 'was looking'], correct: 0 },
  { id: 12, options: ['stood', 'was standing'], correct: 1 },
  { id: 13, options: ['went', 'was going'], correct: 0 },
  { id: 14, options: ["didn't open", "wasn't opening"], correct: 0 },
  { id: 15, options: ['got', 'were getting'], correct: 0 },
  { id: 16, options: ['had', 'were having'], correct: 0 },
];

const C4Exercise = () => {
  const [picks, setPicks] = useState<Record<number, 0 | 1 | undefined>>({});
  const [checked, setChecked] = useState(false);

  const Pick = ({ item }: { item: C4Item }) => {
    const choice = picks[item.id];
    const state = !checked || choice === undefined ? 'idle' : choice === item.correct ? 'correct' : 'wrong';
    return (
      <span className="inline-flex items-center gap-1 align-middle mx-1">
        <span className="text-xs font-bold text-muted-foreground">{item.id}</span>
        {item.options.map((opt, idx) => {
          const selected = choice === idx;
          const isRight = checked && idx === item.correct;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => { setPicks((p) => ({ ...p, [item.id]: idx as 0 | 1 })); setChecked(false); }}
              className={`px-2 py-0.5 rounded text-sm border transition-colors ${
                selected
                  ? state === 'correct'
                    ? 'bg-emerald-500 text-white border-emerald-600'
                    : state === 'wrong'
                    ? 'bg-rose-500 text-white border-rose-600'
                    : 'bg-primary text-primary-foreground border-primary'
                  : checked && isRight
                  ? 'bg-emerald-100 dark:bg-emerald-950/40 border-emerald-400 text-emerald-800 dark:text-emerald-200'
                  : 'bg-muted/50 border-border hover:bg-muted'
              }`}
            >
              {opt}
            </button>
          );
        })}
        <FeedbackIcon state={state} />
      </span>
    );
  };

  return (
    <Card className="service-card">
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center gap-2">
          <Mail className="w-5 h-5 text-primary" />
          <h3 className="text-xl font-semibold font-merriweather">C4 · Annette's Email</h3>
        </div>
        <p className="text-sm text-muted-foreground">Click the best tense for each verb.</p>

        <div className="rounded-lg border bg-card p-5 leading-9 text-[15px]">
          Hi Bea,<br/>
          A funny thing <Pick item={C4_ITEMS[0]} /> to me and my flatmates on Saturday. On Friday night we
          <Pick item={C4_ITEMS[1]} /> to the college party. There were some new students there and we
          <Pick item={C4_ITEMS[2]} /> someone called Lucas. We <Pick item={C4_ITEMS[3]} /> him to Sunday lunch.
          It was a great party so we <Pick item={C4_ITEMS[4]} /> home until three o'clock.
          Of course, we <Pick item={C4_ITEMS[5]} /> up early on Saturday morning. At half past twelve I
          <Pick item={C4_ITEMS[6]} /> TV in my pyjamas, Marie <Pick item={C4_ITEMS[7]} /> a shower and
          Wendy <Pick item={C4_ITEMS[8]} /> a magazine. Suddenly someone <Pick item={C4_ITEMS[9]} /> the
          doorbell. I <Pick item={C4_ITEMS[10]} /> out of the window to see who was there. Lucas
          <Pick item={C4_ITEMS[11]} /> on the step. I <Pick item={C4_ITEMS[12]} /> to the door but I
          <Pick item={C4_ITEMS[13]} /> it. I said 'Hello?' and he said 'Hello, I've come for lunch.' Oh no! He'd got the wrong day!!
          We <Pick item={C4_ITEMS[14]} /> dressed in three minutes! Luckily we <Pick item={C4_ITEMS[15]} /> enough food, and he seemed to enjoy it.
          <br/>Love, Annette
        </div>

        <Button onClick={() => setChecked(true)}>Check answers</Button>
      </CardContent>
    </Card>
  );
};

// ───────────────────────── C5: Newspaper article — mixed tenses ─────────────────────────

const C5_GAPS: GapItem[] = [
  { prompt: 'want', answers: ['wanted'] },
  { prompt: 'be', answers: ['was'] },
  { prompt: 'count', answers: ['was counting'] },
  { prompt: 'choose', answers: ['chose'] },
  { prompt: 'wrap', answers: ['wrapped'] },
  { prompt: 'wait', answers: ['was waiting'] },
  { prompt: 'decide', answers: ['decided'] },
  { prompt: 'find', answers: ['found'] },
  { prompt: 'run', answers: ['ran'] },
  { prompt: 'look', answers: ['looked'] },
  { prompt: 'search', answers: ['was searching'] },
  { prompt: 'look', answers: ['were looking'] },
  { prompt: 'knock', answers: ['knocked'] },
  { prompt: 'wave', answers: ['waved'] },
];

const NewspaperExercise = () => {
  const [values, setValues] = useState<string[]>(Array(C5_GAPS.length).fill(''));
  const [checked, setChecked] = useState(false);
  const states = useMemo(
    () => values.map((v, i) => !checked ? 'idle' : isCorrect(v, C5_GAPS[i].answers) ? 'correct' : 'wrong') as Array<'idle'|'correct'|'wrong'>,
    [values, checked]
  );

  const Gap = ({ i }: { i: number }) => (
    <span className="inline-flex items-center gap-1 mx-1 align-middle">
      <Input
        value={values[i]}
        onChange={(e) => { const n = [...values]; n[i] = e.target.value; setValues(n); setChecked(false); }}
        placeholder={C5_GAPS[i].prompt}
        className={inputClass(states[i])}
      />
      <FeedbackIcon state={states[i]} />
    </span>
  );

  return (
    <Card className="service-card">
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center gap-2">
          <Newspaper className="w-5 h-5 text-primary" />
          <h3 className="text-xl font-semibold font-merriweather">C5 · An Honest Customer</h3>
        </div>
        <p className="text-sm text-muted-foreground">Put each verb in brackets into the correct tense — <strong>past simple</strong> or <strong>past continuous</strong>.</p>

        <div className="rounded-lg border bg-card p-5 leading-9 text-[15px]">
          <p className="font-merriweather font-bold text-lg mb-2">An honest customer</p>
          Yesterday Jon Atkins <strong>went</strong> into Harpers' Art Gallery at the end of the afternoon. He
          <Gap i={0} /> to buy a present for his mother. It <Gap i={1} /> nearly closing time and owner Michael Harper
          <Gap i={2} /> the money. Quickly Jon <Gap i={3} /> a small picture and Mr Harper <Gap i={4} /> it for him.
          While he <Gap i={5} /> for his bus, Jon <Gap i={6} /> to look at the picture again. In the parcel he
          <Gap i={7} /> £500 in cash as well as the picture. He <Gap i={8} /> back to the shop. It was closed so Jon
          <Gap i={9} /> through the window. Michael Harper <Gap i={10} /> under the counter, and his assistants
          <Gap i={11} /> in all the cupboards and drawers. 'I <Gap i={12} /> on the window and <Gap i={13} /> the money at them' said Jon.
        </div>

        <Button onClick={() => setChecked(true)}>Check answers</Button>
      </CardContent>
    </Card>
  );
};

// ───────────────────────── D: Exam practice — grammar focus + writing ─────────────────────────

const EXAM_GAPS: GapItem[] = [
  { prompt: 'carry', answers: ['was carrying'] },
  { prompt: 'stop', answers: ['stopped'] },
  { prompt: 'look', answers: ['looked'] },
  { prompt: 'follow', answers: ['was following'] },
  { prompt: 'drop', answers: ['dropped'] },
  { prompt: 'run', answers: ['ran'] },
];

const ExamPractice = () => {
  const [values, setValues] = useState<string[]>(Array(EXAM_GAPS.length).fill(''));
  const [checked, setChecked] = useState(false);
  const [story, setStory] = useState('');
  const states = useMemo(
    () => values.map((v, i) => !checked ? 'idle' : isCorrect(v, EXAM_GAPS[i].answers) ? 'correct' : 'wrong') as Array<'idle'|'correct'|'wrong'>,
    [values, checked]
  );

  const Gap = ({ i }: { i: number }) => (
    <span className="inline-flex items-center gap-1 mx-1 align-middle">
      <Input value={values[i]} onChange={(e) => { const n = [...values]; n[i] = e.target.value; setValues(n); setChecked(false); }}
        placeholder={EXAM_GAPS[i].prompt} className={inputClass(states[i])} />
      <FeedbackIcon state={states[i]} />
    </span>
  );

  return (
    <Card className="service-card">
      <CardContent className="p-6 space-y-5">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-primary" />
            <h3 className="text-xl font-semibold font-merriweather">D · Exam Practice — Writing Part 3</h3>
          </div>
          <span className="text-xs font-bold tracking-wider bg-purple-600 text-white px-3 py-1.5 rounded-full">B1 PRELIMINARY</span>
        </div>

        <div className="rounded-lg border bg-card p-5 space-y-3">
          <p className="text-sm font-semibold">Grammar focus task</p>
          <p className="text-sm text-muted-foreground">Read the opening of the story and put each verb into the correct past tense.</p>
          <div className="leading-9 text-[15px]">
            A man <strong>was walking</strong> slowly towards the café. He <Gap i={0} /> a huge box. Suddenly he
            <Gap i={1} /> and <Gap i={2} /> around him. A woman <Gap i={3} /> him. He <Gap i={4} /> the box and
            <Gap i={5} /> towards the café.
          </div>
          <Button size="sm" onClick={() => setChecked(true)}>Check answers</Button>
        </div>

        <div className="rounded-lg border-2 border-dashed border-purple-300 dark:border-purple-800 bg-purple-50 dark:bg-purple-950/20 p-5 space-y-3">
          <p className="font-semibold text-purple-800 dark:text-purple-300 flex items-center gap-2">
            <Sparkles className="w-4 h-4" /> Your turn — write your story (~100 words)
          </p>
          <p className="text-sm text-purple-900 dark:text-purple-200">
            Your story <strong>must</strong> begin with this sentence:
          </p>
          <p className="italic text-sm bg-white/60 dark:bg-black/20 p-2 rounded">
            One day last week I was sitting in a café in the market square.
          </p>
          <ul className="text-xs text-purple-900 dark:text-purple-200 list-disc list-inside space-y-1">
            <li>Who are the people in your story?</li>
            <li>What were they doing in the market square?</li>
            <li>What happened?</li>
            <li>How does your story end?</li>
            <li>Mix past simple and past continuous!</li>
          </ul>
          <Textarea
            rows={8}
            value={story}
            onChange={(e) => setStory(e.target.value)}
            placeholder="One day last week I was sitting in a café in the market square..."
            className="bg-white dark:bg-black/30"
          />
          <p className="text-xs text-purple-700 dark:text-purple-300">Word count: {story.trim().split(/\s+/).filter(Boolean).length}</p>
        </div>
      </CardContent>
    </Card>
  );
};

// ───────────────────────── Main export ─────────────────────────

const PastTensesCambridgeLesson = () => (
  <div className="space-y-8">
    <div className="text-center max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold font-merriweather text-foreground mb-3">
        Past Simple &amp; Past Continuous
      </h2>
      <p className="text-muted-foreground">
        A complete grammar workshop based on <em>Cambridge Grammar for PET</em>, Unit 5. Study the rules, practise with five exercises, then tackle the official Writing Part 3 exam task.
      </p>
    </div>

    <PastSimpleReference />
    <PastContinuousReference />
    <PostcardExercise />
    <PartyExercise />
    <C3Exercise />
    <C4Exercise />
    <NewspaperExercise />
    <ExamPractice />
  </div>
);

export default PastTensesCambridgeLesson;
