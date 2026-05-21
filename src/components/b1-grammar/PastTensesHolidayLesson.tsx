import { useState, useMemo, useCallback } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Sparkles, BookOpen, Volume2, Plane, MessageCircle, HelpCircle, Globe2, PenLine, Mic, Shuffle, PenTool } from 'lucide-react';
import towerBridgeImg from '@/assets/holiday/tower-bridge.jpg';
import greatWallImg from '@/assets/holiday/great-wall.jpg';
import itsukushimaImg from '@/assets/holiday/itsukushima.jpg';
import tajMahalImg from '@/assets/holiday/taj-mahal.jpg';

// ───────────────────────── Activity 1: Grammar reference ─────────────────────────

type FlipCard = {
  title: string;
  symbol: React.ReactNode;
  tagline: string;
  /** tailwind classes for front face background + border */
  frontTheme: string;
  /** title colour */
  titleColor: string;
  /** back face theme */
  backTheme: string;
  examples: { label?: string; text: React.ReactNode }[];
};

const FLIP_CARDS: FlipCard[] = [
  {
    title: 'Regular Verbs',
    symbol: <span className="text-4xl font-bold text-green-600 dark:text-green-400"><span className="mr-1">+</span>ed</span>,
    tagline: 'Most verbs',
    frontTheme: 'bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-900',
    titleColor: 'text-green-700 dark:text-green-400',
    backTheme: 'bg-green-600 text-white',
    examples: [
      { text: <>walk → walk<strong>ed</strong></> },
      { text: <>play → play<strong>ed</strong></> },
      { text: <>visit → visit<strong>ed</strong></> },
      { text: <>I <strong>walked</strong> on the beach.</> },
    ],
  },
  {
    title: 'Spelling',
    symbol: <PenTool className="w-10 h-10 text-purple-600 dark:text-purple-400" />,
    tagline: 'y → ied / double consonant',
    frontTheme: 'bg-purple-50 dark:bg-purple-950/30 border-purple-200 dark:border-purple-900',
    titleColor: 'text-purple-700 dark:text-purple-400',
    backTheme: 'bg-purple-600 text-white',
    examples: [
      { text: <>study → stud<strong>ied</strong></> },
      { text: <>try → tr<strong>ied</strong></> },
      { text: <>stop → sto<strong>pped</strong></> },
      { text: <>plan → pla<strong>nned</strong></> },
    ],
  },
  {
    title: 'Irregular',
    symbol: <Shuffle className="w-10 h-10 text-orange-600 dark:text-orange-400" strokeWidth={2.5} />,
    tagline: 'They change completely!',
    frontTheme: 'bg-orange-50 dark:bg-orange-950/30 border-orange-200 dark:border-orange-900',
    titleColor: 'text-orange-700 dark:text-orange-400',
    backTheme: 'bg-orange-500 text-white',
    examples: [
      { text: <>go → <strong>went</strong></> },
      { text: <>have → <strong>had</strong></> },
      { text: <>see → <strong>saw</strong></> },
      { text: <>eat → <strong>ate</strong></> },
    ],
  },
  {
    title: 'Negatives',
    symbol: <span className="text-3xl font-bold text-red-600 dark:text-red-400">didn't</span>,
    tagline: '+ Base Verb',
    frontTheme: 'bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-900',
    titleColor: 'text-red-700 dark:text-red-400',
    backTheme: 'bg-red-500 text-white',
    examples: [
      { text: <>I <strong>didn't go</strong> to school.</> },
      { text: <>She <strong>didn't eat</strong> breakfast.</> },
      { text: <>We <strong>didn't see</strong> the film.</> },
      { text: <>Did you <strong>go</strong>? — base form!</> },
    ],
  },
];

const GrammarFlipCard = ({ card }: { card: FlipCard }) => (
  <div className="group [perspective:1200px] h-56">
    <div className="relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
      {/* Front */}
      <div className={`absolute inset-0 [backface-visibility:hidden] rounded-2xl border-2 ${card.frontTheme} p-5 flex flex-col items-center justify-between text-center shadow-sm`}>
        <h4 className={`font-merriweather font-bold text-lg ${card.titleColor}`}>{card.title}</h4>
        <div className="flex-1 flex items-center justify-center">{card.symbol}</div>
        <p className="text-xs text-muted-foreground">{card.tagline}</p>
      </div>
      {/* Back */}
      <div className={`absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl ${card.backTheme} p-5 flex flex-col justify-center shadow-md`}>
        <p className="text-xs uppercase tracking-wider opacity-80 mb-2 font-semibold">Examples</p>
        <ul className="space-y-1.5 text-sm">
          {card.examples.map((ex, i) => (
            <li key={i}>{ex.text}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const GrammarReference = () => (
  <Card className="service-card">
    <CardContent className="p-6 space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-primary" />
          <h3 className="text-xl font-semibold font-merriweather text-foreground">Grammar Lab: The Past Simple</h3>
        </div>
        <span className="text-xs font-bold tracking-wider bg-primary text-primary-foreground px-3 py-1.5 rounded-full">RULES & PATTERNS</span>
      </div>
      <p className="text-center text-sm text-muted-foreground">Hover over the cards to discover the rules for forming the past tense.</p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {FLIP_CARDS.map((c) => <GrammarFlipCard key={c.title} card={c} />)}
      </div>

      <div className="space-y-4">
        <div className="rounded-lg border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30 p-4">
          <div className="flex items-center gap-2 mb-2">
            <Volume2 className="w-4 h-4 text-amber-700 dark:text-amber-300" />
            <p className="font-semibold text-amber-800 dark:text-amber-300">Pronunciation: /ɜː/ and was / were</p>
          </div>
          <p className="text-sm text-amber-900 dark:text-amber-200">
            Practise the sound in: <em>n<strong>ur</strong>se · w<strong>or</strong>k · h<strong>er</strong> · w<strong>or</strong>d · f<strong>ir</strong>st</em>.
            Then: <em>W<strong>ere</strong> they famous? · W<strong>as</strong> she a teacher? · He w<strong>as</strong> a soldier. · They w<strong>ere</strong> waitresses.</em>
          </p>
        </div>

        <div className="rounded-lg border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30 p-4">
          <div className="flex items-center gap-2 mb-2">
            <Volume2 className="w-4 h-4 text-amber-700 dark:text-amber-300" />
            <p className="font-semibold text-amber-800 dark:text-amber-300">Pronunciation: regular verbs in the past tense</p>
          </div>
          <p className="text-sm text-amber-900 dark:text-amber-200 mb-3">
            Practise the <em>/d/</em>, <em>/t/</em> and <em>/ɪd/</em> endings of regular past tense verbs with this interactive Wordwall activity.
          </p>
          <a
            href="https://wordwall.net/resource/87761877"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-amber-600 hover:bg-amber-700 text-white font-semibold text-sm shadow-sm transition-colors"
          >
            <Volume2 className="w-4 h-4" />
            Open Wordwall activity
            <span aria-hidden>↗</span>
          </a>
        </div>
      </div>

    </CardContent>
  </Card>
);

// ───────────────────── Activity 2: Irregular verbs (two stages) ─────────────────────

const IRREGULAR_VERBS: { present: string; past: string }[] = [
  { present: 'sing', past: 'sang' },
  { present: 'come', past: 'came' },
  { present: 'run', past: 'ran' },
  { present: 'drink', past: 'drank' },
  { present: 'fall', past: 'fell' },
  { present: 'give', past: 'gave' },
  { present: 'ride', past: 'rode' },
  { present: 'ring', past: 'rang' },
  { present: 'swim', past: 'swam' },
  { present: 'win', past: 'won' },
  { present: 'throw', past: 'threw' },
  { present: 'write', past: 'wrote' },
  { present: 'sit', past: 'sat' },
];

const IrregularStageA = () => {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);

  const score = IRREGULAR_VERBS.filter((v, i) => (answers[i] || '').trim().toLowerCase() === v.past).length;

  return (
    <div>
      <p className="text-sm font-medium text-foreground mb-3">Stage A — Type the past simple form for each verb.</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {IRREGULAR_VERBS.map((v, i) => {
          const val = answers[i] || '';
          const isCorrect = checked && val.trim().toLowerCase() === v.past;
          const isWrong = checked && !isCorrect;
          return (
            <div key={v.present} className="rounded-lg border border-border bg-card p-3">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">{v.present}</p>
              <p className="text-[10px] text-muted-foreground/70 mb-2">→ past simple</p>
              <Input
                value={val}
                onChange={(e) => !checked && setAnswers((p) => ({ ...p, [i]: e.target.value }))}
                disabled={checked}
                placeholder="..."
                className={
                  isCorrect ? 'border-green-500 bg-green-50 dark:bg-green-950/30 text-green-700' :
                  isWrong ? 'border-red-500 bg-red-50 dark:bg-red-950/30' : ''
                }
              />
              {isWrong && <p className="text-[11px] text-green-700 dark:text-green-400 mt-1 font-semibold">{v.past}</p>}
            </div>
          );
        })}
      </div>
      <div className="mt-5 flex items-center gap-3">
        {!checked ? (
          <Button onClick={() => setChecked(true)}>Check Answers</Button>
        ) : (
          <>
            <div className="px-3 py-2 bg-muted rounded-lg text-sm font-medium">
              Score: {score} / {IRREGULAR_VERBS.length}
            </div>
            <Button variant="outline" onClick={() => { setChecked(false); setAnswers({}); }}>Try Again</Button>
          </>
        )}
      </div>
    </div>
  );
};

const SENTENCE_BUILDER_ITEMS: { id: number; before: string; answer: string; after: string }[] = [
  { id: 1, before: 'The dog ', answer: 'came', after: ' when he called.' },
  { id: 2, before: 'He ', answer: 'ran', after: ' for a long time last week.' },
  { id: 3, before: 'I ', answer: 'drank', after: ' two bottles of water today.' },
  { id: 4, before: 'He ', answer: 'fell', after: ' into the sand.' },
  { id: 5, before: 'Yesterday she ', answer: 'sang', after: ' a song.' },
  { id: 6, before: 'Yesterday he ', answer: 'rode', after: ' his horse.' },
  { id: 7, before: 'My phone ', answer: 'rang', after: ' three times in the meeting.' },
  { id: 8, before: 'She ', answer: 'swam', after: ' across the lake.' },
];

const IrregularStageB = () => {
  const shuffled = useMemo(() => [...SENTENCE_BUILDER_ITEMS].map(i => i.answer).sort(() => Math.random() - 0.5), []);
  const [assignments, setAssignments] = useState<Record<number, string>>({});
  const [dragged, setDragged] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);

  const used = new Set(Object.values(assignments));
  const score = SENTENCE_BUILDER_ITEMS.filter((it) => assignments[it.id] === it.answer).length;

  const handleDrop = useCallback((id: number) => {
    if (!dragged) return;
    setAssignments((p) => {
      const next = { ...p };
      for (const k of Object.keys(next)) if (next[Number(k)] === dragged) delete next[Number(k)];
      next[id] = dragged;
      return next;
    });
    setDragged(null);
  }, [dragged]);

  return (
    <div className="mt-8 border-t border-border pt-6">
      <p className="text-sm font-medium text-foreground mb-3">Stage B — Drag the right past form into each sentence.</p>

      <div className="flex flex-wrap gap-2 mb-5">
        {shuffled.map((word) => {
          const isUsed = used.has(word);
          return (
            <div
              key={word}
              draggable={!isUsed && !checked}
              onDragStart={() => setDragged(word)}
              className={`px-3 py-2 rounded-lg border text-sm select-none transition-all ${
                isUsed
                  ? 'opacity-30 border-border bg-muted'
                  : 'cursor-grab active:cursor-grabbing border-primary/30 bg-primary/5 hover:border-primary/50'
              }`}
            >
              {word}
            </div>
          );
        })}
      </div>

      <div className="space-y-2">
        {SENTENCE_BUILDER_ITEMS.map((it) => {
          const assigned = assignments[it.id];
          const isCorrect = checked && assigned === it.answer;
          const isWrong = checked && assigned && !isCorrect;
          return (
            <div
              key={it.id}
              className="flex flex-wrap items-center gap-1 text-sm text-foreground py-1.5"
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleDrop(it.id)}
            >
              <span className="text-xs font-bold text-muted-foreground w-5">{it.id}.</span>
              <span>{it.before}</span>
              <span
                onClick={() => !checked && setAssignments((p) => { const n = { ...p }; delete n[it.id]; return n; })}
                className={`inline-flex min-w-[80px] justify-center px-2 py-1 rounded border-2 border-dashed text-sm ${
                  assigned
                    ? isCorrect
                      ? 'border-green-500 bg-green-50 dark:bg-green-950/30 text-green-700 dark:text-green-400 font-semibold'
                      : isWrong
                      ? 'border-red-500 bg-red-50 dark:bg-red-950/30 text-red-700 dark:text-red-400 line-through'
                      : 'border-primary/40 bg-primary/5 cursor-pointer'
                    : 'border-muted-foreground/30 bg-muted/30 text-muted-foreground/50 italic'
                }`}
              >
                {assigned || 'drop here'}
              </span>
              <span>{it.after}</span>
              {isWrong && <span className="text-xs text-green-700 dark:text-green-400 ml-1">({it.answer})</span>}
            </div>
          );
        })}
      </div>

      <div className="mt-5 flex items-center gap-3">
        {!checked ? (
          <Button onClick={() => setChecked(true)} disabled={Object.keys(assignments).length < SENTENCE_BUILDER_ITEMS.length}>
            Check Answers
          </Button>
        ) : (
          <>
            <div className="px-3 py-2 bg-muted rounded-lg text-sm font-medium">
              Score: {score} / {SENTENCE_BUILDER_ITEMS.length}
            </div>
            <Button variant="outline" onClick={() => { setChecked(false); setAssignments({}); }}>Try Again</Button>
          </>
        )}
      </div>
    </div>
  );
};

const IrregularVerbsActivity = () => (
  <Card className="service-card">
    <CardContent className="p-6">
      <div className="flex items-center gap-2 mb-2">
        <Sparkles className="w-5 h-5 text-primary" />
        <h3 className="text-xl font-semibold font-merriweather text-foreground">2 · Irregular verbs game</h3>
      </div>
      <p className="text-sm text-muted-foreground mb-6">
        Many English verbs change form completely in the past simple. Learn 13 of the most common irregulars, then use them in sentences.
      </p>
      <IrregularStageA />
      <IrregularStageB />
    </CardContent>
  </Card>
);

// ───────────────────────── Activity 3: Holiday collocations ─────────────────────────

const COLLOCATIONS: { id: number; noun: string; answer: string }[] = [
  { id: 1, noun: 'photographs', answer: 'take' },
  { id: 2, noun: 'sightseeing', answer: 'go' },
  { id: 3, noun: 'souvenirs', answer: 'buy' },
  { id: 4, noun: 'economy class', answer: 'fly' },
  { id: 5, noun: 'at a hotel', answer: 'stay' },
  { id: 6, noun: 'shopping', answer: 'go' },
  { id: 7, noun: 'the local food', answer: 'try' },
  { id: 8, noun: 'an art gallery', answer: 'visit' },
  { id: 9, noun: 'postcards', answer: 'write' },
];

const VERB_BANK = ['try', 'visit', 'go', 'stay', 'take', 'write', 'fly', 'buy'];

const HolidayCollocations = () => {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);
  const score = COLLOCATIONS.filter((c) => answers[c.id] === c.answer).length;

  return (
    <Card className="service-card">
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <Plane className="w-5 h-5 text-primary" />
          <h3 className="text-xl font-semibold font-merriweather text-foreground">3 · Holiday vocabulary — collocations</h3>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          Pick the right verb to go with each noun. Some verbs are used more than once.
        </p>

        <div className="rounded-lg border border-border bg-muted/30 px-4 py-3 mb-5 flex flex-wrap gap-2">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mr-2 self-center">Verbs:</span>
          {VERB_BANK.map((v) => (
            <span key={v} className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">{v}</span>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {COLLOCATIONS.map((c) => {
            const val = answers[c.id] || '';
            const isCorrect = checked && val.trim().toLowerCase() === c.answer;
            const isWrong = checked && !isCorrect;
            return (
              <div key={c.id} className="flex items-center gap-2">
                <Input
                  value={val}
                  onChange={(e) => !checked && setAnswers((p) => ({ ...p, [c.id]: e.target.value }))}
                  disabled={checked}
                  placeholder="verb"
                  className={`w-24 ${
                    isCorrect ? 'border-green-500 bg-green-50 dark:bg-green-950/30' :
                    isWrong ? 'border-red-500 bg-red-50 dark:bg-red-950/30' : ''
                  }`}
                />
                <span className="text-sm text-foreground">{c.noun}</span>
                {isWrong && <span className="text-xs text-green-700 dark:text-green-400">({c.answer})</span>}
              </div>
            );
          })}
        </div>

        <div className="mt-5 flex items-center gap-3">
          {!checked ? (
            <Button onClick={() => setChecked(true)}>Check Answers</Button>
          ) : (
            <>
              <div className="px-3 py-2 bg-muted rounded-lg text-sm font-medium">
                Score: {score} / {COLLOCATIONS.length}
              </div>
              <Button variant="outline" onClick={() => { setChecked(false); setAnswers({}); }}>Try Again</Button>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

// ───────────────────────── Activity 4: Bali dialogue ─────────────────────────

const DIALOGUE_BLANKS = ['beautiful', 'long', 'sunbathing', 'food'];

const COMPREHENSION_QS: { id: number; q: string; answers: string[] }[] = [
  { id: 1, q: 'Where did Julie go for her last holiday?', answers: ['bali', 'she went to bali', 'to bali'] },
  { id: 2, q: 'How were the beaches?', answers: ['beautiful', 'they were beautiful', 'the beaches were beautiful'] },
  { id: 3, q: 'How long did she stay?', answers: ['ten days', 'about ten days', 'for ten days', 'for about ten days', 'she stayed for about ten days'] },
  { id: 4, q: 'What did she do there?', answers: ['she went sunbathing and tried lots of local food', 'sunbathing and tried local food', 'sunbathing and local food', 'went sunbathing and tried local food'] },
];

const QUESTION_RECON: { id: number; before: string; after: string; answers: string[] }[] = [
  { id: 1, before: 'So, Julie, ', after: ' for your last holiday?', answers: ['where did you go'] },
  { id: 2, before: 'Really? ', after: '?', answers: ['how was it'] },
  { id: 3, before: '', after: '?', answers: ['how long did you stay'] },
  { id: 4, before: '', after: '?', answers: ['what did you do there', 'what did you do'] },
];

const BaliDialogue = () => {
  const [gaps, setGaps] = useState<Record<number, string>>({});
  const [gapsChecked, setGapsChecked] = useState(false);
  const [draggedWord, setDraggedWord] = useState<string | null>(null);
  const [comp, setComp] = useState<Record<number, string>>({});
  const [compChecked, setCompChecked] = useState(false);
  const [recon, setRecon] = useState<Record<number, string>>({});
  const [reconChecked, setReconChecked] = useState(false);

  const used = new Set(Object.values(gaps));
  const gapScore = DIALOGUE_BLANKS.filter((w, i) => gaps[i + 1] === w).length;
  const compScore = COMPREHENSION_QS.filter((q) => q.answers.includes((comp[q.id] || '').trim().toLowerCase())).length;
  const reconScore = QUESTION_RECON.filter((q) => q.answers.includes((recon[q.id] || '').trim().toLowerCase().replace(/\?+$/, ''))).length;

  const renderGap = (i: number) => {
    const v = gaps[i];
    const ok = gapsChecked && v === DIALOGUE_BLANKS[i - 1];
    const bad = gapsChecked && v && !ok;
    return (
      <span
        onDragOver={(e) => e.preventDefault()}
        onDrop={() => {
          if (!draggedWord) return;
          setGaps((p) => {
            const n = { ...p };
            for (const k of Object.keys(n)) if (n[Number(k)] === draggedWord) delete n[Number(k)];
            n[i] = draggedWord;
            return n;
          });
          setDraggedWord(null);
        }}
        onClick={() => !gapsChecked && setGaps((p) => { const n = { ...p }; delete n[i]; return n; })}
        className={`inline-block min-w-[90px] text-center px-2 py-0.5 mx-0.5 rounded border-2 border-dashed text-sm cursor-pointer ${
          v
            ? ok ? 'border-green-500 bg-green-50 dark:bg-green-950/30 text-green-700 font-semibold'
            : bad ? 'border-red-500 bg-red-50 dark:bg-red-950/30 text-red-700 line-through'
            : 'border-primary/40 bg-primary/5'
            : 'border-muted-foreground/30 bg-muted/30 text-muted-foreground/50 italic'
        }`}
      >
        {v || '...'}
      </span>
    );
  };

  return (
    <Card className="service-card">
      <CardContent className="p-6 space-y-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <MessageCircle className="w-5 h-5 text-primary" />
            <h3 className="text-xl font-semibold font-merriweather text-foreground">4 · Listen in — Tom &amp; Julie talk about Bali</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            This is the kind of conversation you'll have in a moment. First, drag the missing words into the dialogue.
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {DIALOGUE_BLANKS.map((w) => {
              const isUsed = used.has(w);
              return (
                <div
                  key={w}
                  draggable={!isUsed && !gapsChecked}
                  onDragStart={() => setDraggedWord(w)}
                  className={`px-3 py-1.5 rounded-lg border text-sm select-none transition-all ${
                    isUsed
                      ? 'opacity-30 border-border bg-muted'
                      : 'cursor-grab active:cursor-grabbing border-primary/30 bg-primary/5 hover:border-primary/50'
                  }`}
                >
                  {w}
                </div>
              );
            })}
          </div>

          <div className="rounded-lg border-l-4 border-primary bg-muted/30 p-4 text-sm leading-relaxed space-y-1.5">
            <p><strong className="text-primary">Tom:</strong> So, Julie, where did you go for your last holiday?</p>
            <p><strong className="text-primary">Julie:</strong> I went to Bali.</p>
            <p><strong className="text-primary">Tom:</strong> Really? How was it?</p>
            <p><strong className="text-primary">Julie:</strong> Wonderful! The beaches were {renderGap(1)}, and the weather was great!</p>
            <p><strong className="text-primary">Tom:</strong> How {renderGap(2)} did you stay?</p>
            <p><strong className="text-primary">Julie:</strong> I stayed for about ten days.</p>
            <p><strong className="text-primary">Tom:</strong> What did you do there?</p>
            <p><strong className="text-primary">Julie:</strong> Well, I went {renderGap(3)}, and tried lots of local {renderGap(4)}.</p>
          </div>

          <div className="mt-4 flex items-center gap-3">
            {!gapsChecked ? (
              <Button onClick={() => setGapsChecked(true)} disabled={Object.keys(gaps).length < 4}>Check Answers</Button>
            ) : (
              <>
                <div className="px-3 py-2 bg-muted rounded-lg text-sm font-medium">Score: {gapScore} / 4</div>
                <Button variant="outline" onClick={() => { setGapsChecked(false); setGaps({}); }}>Try Again</Button>
              </>
            )}
          </div>
        </div>

        <div className="border-t border-border pt-6">
          <p className="font-semibold text-foreground mb-3">Comprehension — write short answers.</p>
          <div className="space-y-3">
            {COMPREHENSION_QS.map((q) => {
              const v = comp[q.id] || '';
              const ok = compChecked && q.answers.includes(v.trim().toLowerCase());
              const bad = compChecked && !ok;
              return (
                <div key={q.id} className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <p className="text-sm text-foreground sm:w-1/2"><strong>{q.id})</strong> {q.q}</p>
                  <Input
                    value={v}
                    disabled={compChecked}
                    onChange={(e) => setComp((p) => ({ ...p, [q.id]: e.target.value }))}
                    className={`sm:w-1/2 ${
                      ok ? 'border-green-500 bg-green-50 dark:bg-green-950/30' :
                      bad ? 'border-red-500 bg-red-50 dark:bg-red-950/30' : ''
                    }`}
                    placeholder="Your answer..."
                  />
                </div>
              );
            })}
          </div>
          <div className="mt-4 flex items-center gap-3">
            {!compChecked ? (
              <Button onClick={() => setCompChecked(true)}>Check Answers</Button>
            ) : (
              <>
                <div className="px-3 py-2 bg-muted rounded-lg text-sm font-medium">Score: {compScore} / 4</div>
                <Button variant="outline" onClick={() => { setCompChecked(false); setComp({}); }}>Try Again</Button>
              </>
            )}
          </div>
        </div>

        <div className="border-t border-border pt-6">
          <p className="font-semibold text-foreground mb-1">Question practice — rebuild Tom's questions.</p>
          <p className="text-xs text-muted-foreground mb-3">Use the answers Julie gives to help you.</p>
          <div className="rounded-lg bg-muted/30 p-4 space-y-2 text-sm">
            {QUESTION_RECON.map((q) => {
              const v = recon[q.id] || '';
              const ok = reconChecked && q.answers.includes(v.trim().toLowerCase().replace(/\?+$/, ''));
              const bad = reconChecked && !ok;
              return (
                <div key={q.id} className="flex flex-col gap-1">
                  <div className="flex flex-wrap items-center gap-1">
                    <strong className="text-primary">Tom:</strong>
                    <span>{q.before}</span>
                    <Input
                      value={v}
                      disabled={reconChecked}
                      onChange={(e) => setRecon((p) => ({ ...p, [q.id]: e.target.value }))}
                      className={`inline-block w-64 ${
                        ok ? 'border-green-500 bg-green-50 dark:bg-green-950/30' :
                        bad ? 'border-red-500 bg-red-50 dark:bg-red-950/30' : ''
                      }`}
                    />
                    <span>{q.after}</span>
                  </div>
                  {bad && <p className="text-xs text-green-700 dark:text-green-400 ml-12">{q.answers[0]}</p>}
                </div>
              );
            })}
          </div>
          <div className="mt-4 flex items-center gap-3">
            {!reconChecked ? (
              <Button onClick={() => setReconChecked(true)}>Check Answers</Button>
            ) : (
              <>
                <div className="px-3 py-2 bg-muted rounded-lg text-sm font-medium">Score: {reconScore} / 4</div>
                <Button variant="outline" onClick={() => { setReconChecked(false); setRecon({}); }}>Try Again</Button>
              </>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// ───────────────────────── Activity 5: Mixed past simple practice ─────────────────────────

const REWRITES: { id: number; prompt: string; answer: string }[] = [
  { id: 1, prompt: 'She has cereal for breakfast.', answer: 'she had cereal for breakfast yesterday' },
  { id: 2, prompt: 'Do you go to the cinema?', answer: 'did you go to the cinema yesterday' },
  { id: 3, prompt: "We don't have lunch.", answer: "we didn't have lunch yesterday" },
  { id: 4, prompt: 'They go home at 8.00.', answer: 'they went home at 8.00 yesterday' },
  { id: 5, prompt: 'What time do you get up?', answer: 'what time did you get up yesterday' },
  { id: 6, prompt: "She doesn't go to school by bus.", answer: "she didn't go to school by bus yesterday" },
  { id: 7, prompt: 'Jack gets up late.', answer: 'jack got up late yesterday' },
  { id: 8, prompt: 'What do you have for dinner?', answer: 'what did you have for dinner yesterday' },
];

const MINI_DIALOGUES: { id: number; before: string; after: string; answer: string; hint: string }[] = [
  { id: 1, before: 'A: What ', after: ' you ___ for lunch today? (have)', answer: 'did', hint: 'auxiliary' },
  { id: 2, before: 'A: What did you ', after: ' for lunch today? (have)', answer: 'have', hint: 'main verb' },
  { id: 3, before: 'B: I ', after: ' fish.', answer: 'had', hint: 'past of have' },
  { id: 4, before: 'Carla ', after: ' to her English class today. (not go)', answer: "didn't go", hint: 'negative' },
  { id: 5, before: 'A: Where did you ', after: ' last night? (go)', answer: 'go', hint: 'after did' },
];

const MixedPractice = () => {
  const [rewrites, setRewrites] = useState<Record<number, string>>({});
  const [rChecked, setRChecked] = useState(false);
  const [dialogs, setDialogs] = useState<Record<number, string>>({});
  const [dChecked, setDChecked] = useState(false);

  const norm = (s: string) => s.trim().toLowerCase().replace(/[?.]+$/, '');
  const rScore = REWRITES.filter((r) => norm(rewrites[r.id] || '') === r.answer).length;
  const dScore = MINI_DIALOGUES.filter((d) => norm(dialogs[d.id] || '') === d.answer.toLowerCase()).length;

  return (
    <Card className="service-card">
      <CardContent className="p-6 space-y-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <PenLine className="w-5 h-5 text-primary" />
            <h3 className="text-xl font-semibold font-merriweather text-foreground">5 · Past simple — mixed practice</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            <strong>a.</strong> Rewrite each sentence in the past simple, ending with <em>yesterday</em>. Example: <em>I don't go to the gym.</em> → <em>I didn't go to the gym yesterday.</em>
          </p>

          <div className="space-y-3">
            {REWRITES.map((r) => {
              const v = rewrites[r.id] || '';
              const ok = rChecked && norm(v) === r.answer;
              const bad = rChecked && !ok;
              return (
                <div key={r.id} className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <p className="text-sm text-foreground sm:w-1/2"><strong>{r.id}.</strong> {r.prompt}</p>
                  <div className="sm:w-1/2">
                    <Input
                      value={v}
                      disabled={rChecked}
                      onChange={(e) => setRewrites((p) => ({ ...p, [r.id]: e.target.value }))}
                      className={
                        ok ? 'border-green-500 bg-green-50 dark:bg-green-950/30' :
                        bad ? 'border-red-500 bg-red-50 dark:bg-red-950/30' : ''
                      }
                    />
                    {bad && <p className="text-xs text-green-700 dark:text-green-400 mt-1">{r.answer.charAt(0).toUpperCase() + r.answer.slice(1)}.</p>}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-4 flex items-center gap-3">
            {!rChecked ? (
              <Button onClick={() => setRChecked(true)}>Check Answers</Button>
            ) : (
              <>
                <div className="px-3 py-2 bg-muted rounded-lg text-sm font-medium">Score: {rScore} / {REWRITES.length}</div>
                <Button variant="outline" onClick={() => { setRChecked(false); setRewrites({}); }}>Try Again</Button>
              </>
            )}
          </div>
        </div>

        <div className="border-t border-border pt-6">
          <p className="text-sm text-muted-foreground mb-4">
            <strong>b.</strong> Complete each gap with the correct past simple form (+, −, or ?).
          </p>
          <div className="space-y-2">
            {MINI_DIALOGUES.map((d) => {
              const v = dialogs[d.id] || '';
              const ok = dChecked && norm(v) === d.answer.toLowerCase();
              const bad = dChecked && !ok;
              return (
                <div key={d.id} className="flex flex-wrap items-center gap-1 text-sm">
                  <span className="text-xs font-bold text-muted-foreground w-5">{d.id}.</span>
                  <span>{d.before}</span>
                  <Input
                    value={v}
                    disabled={dChecked}
                    onChange={(e) => setDialogs((p) => ({ ...p, [d.id]: e.target.value }))}
                    className={`inline-block w-28 ${
                      ok ? 'border-green-500 bg-green-50 dark:bg-green-950/30' :
                      bad ? 'border-red-500 bg-red-50 dark:bg-red-950/30' : ''
                    }`}
                  />
                  <span>{d.after}</span>
                  {bad && <span className="text-xs text-green-700 dark:text-green-400 ml-1">({d.answer})</span>}
                </div>
              );
            })}
          </div>
          <div className="mt-4 flex items-center gap-3">
            {!dChecked ? (
              <Button onClick={() => setDChecked(true)}>Check Answers</Button>
            ) : (
              <>
                <div className="px-3 py-2 bg-muted rounded-lg text-sm font-medium">Score: {dScore} / {MINI_DIALOGUES.length}</div>
                <Button variant="outline" onClick={() => { setDChecked(false); setDialogs({}); }}>Try Again</Button>
              </>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// ───────────────────────── Activity 6: Country quiz + imagination ─────────────────────────

const COUNTRIES: { id: number; img: string; alt: string; answer: string; accepted: string[] }[] = [
  {
    id: 1,
    img: towerBridgeImg,
    alt: 'Tower Bridge in London',
    answer: 'the UK',
    accepted: ['uk', 'the uk', 'england', 'united kingdom', 'the united kingdom', 'britain', 'great britain'],
  },
  {
    id: 2,
    img: greatWallImg,
    alt: 'The Great Wall of China',
    answer: 'China',
    accepted: ['china'],
  },
  {
    id: 3,
    img: itsukushimaImg,
    alt: 'Itsukushima torii gate in Japan',
    answer: 'Japan',
    accepted: ['japan'],
  },
  {
    id: 4,
    img: tajMahalImg,
    alt: 'The Taj Mahal in India',
    answer: 'India',
    accepted: ['india'],
  },
];

const WH_WORDS = ['Who', 'When', 'How', 'Where', 'Why', 'What'];

const CountryQuiz = () => {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);
  const score = COUNTRIES.filter((c) => c.accepted.includes((answers[c.id] || '').trim().toLowerCase())).length;

  return (
    <Card className="service-card">
      <CardContent className="p-6 space-y-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Globe2 className="w-5 h-5 text-primary" />
            <h3 className="text-xl font-semibold font-merriweather text-foreground">6 · Quiz Time — name the country</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-4">Where would you go on holiday? Identify each famous landmark.</p>

          <div className="grid sm:grid-cols-2 gap-4">
            {COUNTRIES.map((c) => {
              const v = answers[c.id] || '';
              const ok = checked && c.accepted.includes(v.trim().toLowerCase());
              const bad = checked && !ok;
              return (
                <div key={c.id} className="rounded-lg border border-border overflow-hidden bg-card">
                  <img src={c.img} alt={c.alt} loading="lazy" className="w-full h-44 object-cover" />
                  <div className="p-3 flex items-center gap-2">
                    <span className="text-sm font-bold text-muted-foreground">{c.id})</span>
                    <Input
                      value={v}
                      disabled={checked}
                      placeholder="Which country?"
                      onChange={(e) => setAnswers((p) => ({ ...p, [c.id]: e.target.value }))}
                      className={
                        ok ? 'border-green-500 bg-green-50 dark:bg-green-950/30' :
                        bad ? 'border-red-500 bg-red-50 dark:bg-red-950/30' : ''
                      }
                    />
                    {bad && <span className="text-xs text-green-700 dark:text-green-400 whitespace-nowrap">({c.answer})</span>}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-4 flex items-center gap-3">
            {!checked ? (
              <Button onClick={() => setChecked(true)}>Check Answers</Button>
            ) : (
              <>
                <div className="px-3 py-2 bg-muted rounded-lg text-sm font-medium">Score: {score} / {COUNTRIES.length}</div>
                <Button variant="outline" onClick={() => { setChecked(false); setAnswers({}); }}>Try Again</Button>
              </>
            )}
          </div>
        </div>

        <div className="border-t border-border pt-5">
          <div className="flex items-center gap-2 mb-2">
            <HelpCircle className="w-4 h-4 text-primary" />
            <p className="font-semibold text-foreground">Question words you'll need</p>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {WH_WORDS.map((w) => (
              <span key={w} className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold">{w}</span>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mb-2">
            <strong>Imagine</strong> you went to <em>one</em> of these countries last year. Write 2–3 sentences in the past simple about your trip.
          </p>
          <Textarea
            placeholder="Last year I went to..."
            rows={4}
            className="w-full"
          />
          <p className="text-xs text-muted-foreground mt-2 italic">No auto-check — read your sentences aloud to a partner or your teacher.</p>
        </div>
      </CardContent>
    </Card>
  );
};

// ───────────────────────── Activity 7: Final speaking task ─────────────────────────

const STARTERS: { q: string; starter: string }[] = [
  { q: 'Where did you go?', starter: 'Last summer / Last year I went to…' },
  { q: 'Who did you go with?', starter: 'I went with…' },
  { q: 'How long did you stay?', starter: 'I stayed for…' },
  { q: 'Where did you stay?', starter: 'We stayed in / at…' },
  { q: 'What did you do?', starter: 'We tried…, visited…, took…, went…' },
  { q: 'What was the best part?', starter: 'The best part was…' },
  { q: 'Would you go back?', starter: 'I would / wouldn\'t go back because…' },
];

const DISCUSSION = [
  'Where did you go on your last holiday?',
  'What was your best holiday? Why did you like it?',
  'Which do you like more: foreign or domestic holidays?',
  'Do you take photographs or make home videos when on holiday?',
  'Which places are popular in your country with foreign tourists?',
];

const YourTurnSpeaking = () => (
  <Card className="border-2 border-brand-orange/40 bg-gradient-to-br from-orange-50/50 to-amber-50/30 dark:from-orange-950/20 dark:to-amber-950/10 shadow-lg">
    <CardContent className="p-6 space-y-6">
      <div className="flex items-center gap-2">
        <Mic className="w-6 h-6 text-brand-orange" />
        <h3 className="text-2xl font-bold font-merriweather text-foreground">7 · Your turn — tell me about your last holiday</h3>
      </div>
      <p className="text-sm text-foreground">
        You've now got the grammar, the verbs, the vocabulary and a model conversation. Put it all together and talk about <strong>your last holiday in detail</strong>. Use the structure below — tick each one off as you say it.
      </p>

      <div className="rounded-lg bg-white dark:bg-card border border-border p-5">
        <p className="font-semibold text-foreground mb-3">Your structure (cover every box)</p>
        <ul className="space-y-2.5">
          {STARTERS.map((s, i) => (
            <li key={i} className="flex items-start gap-3 text-sm">
              <input type="checkbox" className="mt-1 h-4 w-4 accent-brand-orange" />
              <div>
                <p className="text-foreground"><strong>{s.q}</strong></p>
                <p className="text-muted-foreground italic">→ {s.starter}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-lg bg-white dark:bg-card border border-border p-5">
        <p className="font-semibold text-foreground mb-1">Make notes here first (optional)</p>
        <p className="text-xs text-muted-foreground mb-3">Jot down key words, then put your notes away and speak from memory.</p>
        <Textarea rows={5} placeholder="My last holiday..." className="w-full" />
      </div>

      <div className="rounded-lg bg-white dark:bg-card border border-border p-5">
        <p className="font-semibold text-foreground mb-3">Then — go deeper. Discuss with a partner or your teacher:</p>
        <ul className="list-disc list-inside space-y-1.5 text-sm text-foreground">
          {DISCUSSION.map((d, i) => <li key={i}>{d}</li>)}
        </ul>
      </div>

      <div className="rounded-lg bg-brand-orange/10 border border-brand-orange/30 p-4 text-sm text-foreground">
        <p className="font-semibold mb-1">🎯 Goal check</p>
        Can you talk for at least <strong>one minute</strong> about your last holiday using past simple — without stopping? If yes, you've nailed this lesson.
      </div>
    </CardContent>
  </Card>
);

// ───────────────────────── Main export ─────────────────────────

const PastTensesHolidayLesson = () => (
  <div className="space-y-8">
    <Card className="service-card bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-cyan-950/30 dark:to-teal-950/20 border-cyan-200 dark:border-cyan-800">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold font-merriweather text-foreground mb-2">Talking About My Holiday</h2>
        <p className="text-sm text-foreground">
          By the end of this lesson you'll be able to talk in detail about the last holiday you went on — using past simple,
          holiday vocabulary, and natural follow-up questions. Work through the 7 activities in order; the final one is your speaking goal.
        </p>
      </CardContent>
    </Card>

    <GrammarReference />
    <IrregularVerbsActivity />
    <HolidayCollocations />
    <BaliDialogue />
    <MixedPractice />
    <CountryQuiz />
    <YourTurnSpeaking />
  </div>
);

export default PastTensesHolidayLesson;
