import { useState, useMemo, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CheckCircle2, XCircle, BookOpen, Gamepad2, PenTool, Shuffle, Target, RotateCcw } from 'lucide-react';

// ── Theory ─────────────────────────────────────────────────────────────

const theoryBlocks = [
  {
    heading: 'What are compound adjectives?',
    content: `A compound adjective is made up of two or more words that work together to describe a noun. They are usually connected by hyphens when used before a noun. Examples: <em>well-known</em> (famous), <em>high-speed</em> (very fast), <em>old-fashioned</em> (traditional).`,
    notes: [
      'Use hyphens when the compound goes before the noun.',
      'Usually no hyphens when it comes after the noun.',
      'Acts as a single descriptive unit.',
    ],
  },
  {
    heading: 'Physical appearance',
    content: `Many compound adjectives describe how people look: <em>blue-eyed</em>, <em>dark-haired</em>, <em>broad-shouldered</em>, <em>long-legged</em>, <em>round-faced</em>, <em>square-jawed</em>.`,
  },
  {
    heading: 'Personality and character',
    content: `<strong>Positive:</strong> well-meaning, self-confident, open-minded, easy-going, kind-hearted.<br/><strong>Challenging:</strong> bad-tempered, narrow-minded, self-centred, hot-headed, absent-minded.`,
  },
  {
    heading: 'Preposition-based compounds',
    content: `<strong>Time:</strong> up-to-date, out-of-date, long-term, short-term.<br/><strong>Location:</strong> face-to-face, door-to-door, back-to-back.<br/>Pattern: <em>noun + preposition + noun</em>.`,
  },
  {
    heading: 'Other common patterns',
    content: `<strong>Number + noun:</strong> five-star, two-faced, three-dimensional, first-class.<br/><strong>Verb-based:</strong> heart-breaking, eye-catching, thought-provoking, time-consuming.<br/><strong>Modern:</strong> user-friendly, cutting-edge, open-source.`,
  },
];

// ── Word Matching Game data ────────────────────────────────────────────

interface WordPart { id: string; text: string; type: 'prefix' | 'suffix'; matches: string[] }
const wordParts: WordPart[] = [
  { id: 'well', text: 'well-', type: 'prefix', matches: ['made', 'known', 'read', 'dressed'] },
  { id: 'dark', text: 'dark-', type: 'prefix', matches: ['haired', 'skinned'] },
  { id: 'eye', text: 'eye-', type: 'prefix', matches: ['catching'] },
  { id: 'fair', text: 'fair-', type: 'prefix', matches: ['skinned', 'haired'] },
  { id: 'half', text: 'half-', type: 'prefix', matches: ['hearted', 'time'] },
  { id: 'hand', text: 'hand-', type: 'prefix', matches: ['made', 'written'] },
  { id: 'hard', text: 'hard-', type: 'prefix', matches: ['working', 'headed'] },
  { id: 'home', text: 'home-', type: 'prefix', matches: ['made', 'grown'] },
  { id: 'short', text: 'short-', type: 'prefix', matches: ['sighted', 'lived'] },
  { id: 'world', text: 'world-', type: 'prefix', matches: ['famous', 'class'] },
  { id: 'made', text: '-made', type: 'suffix', matches: ['well', 'hand', 'home'] },
  { id: 'haired', text: '-haired', type: 'suffix', matches: ['dark', 'fair'] },
  { id: 'catching', text: '-catching', type: 'suffix', matches: ['eye'] },
  { id: 'skinned', text: '-skinned', type: 'suffix', matches: ['fair', 'dark'] },
  { id: 'hearted', text: '-hearted', type: 'suffix', matches: ['half'] },
  { id: 'working', text: '-working', type: 'suffix', matches: ['hard'] },
  { id: 'sighted', text: '-sighted', type: 'suffix', matches: ['short'] },
  { id: 'famous', text: '-famous', type: 'suffix', matches: ['world'] },
  { id: 'known', text: '-known', type: 'suffix', matches: ['well'] },
  { id: 'dressed', text: '-dressed', type: 'suffix', matches: ['well'] },
  { id: 'time', text: '-time', type: 'suffix', matches: ['half'] },
  { id: 'written', text: '-written', type: 'suffix', matches: ['hand'] },
  { id: 'headed', text: '-headed', type: 'suffix', matches: ['hard'] },
  { id: 'grown', text: '-grown', type: 'suffix', matches: ['home'] },
  { id: 'class', text: '-class', type: 'suffix', matches: ['world'] },
];

// ── Section 1: Learn ───────────────────────────────────────────────────

const LearnSection = () => (
  <Card className="service-card">
    <CardContent className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <BookOpen className="h-6 w-6 text-primary" />
        <h3 className="text-2xl font-semibold font-merriweather text-foreground">1. Learn the Patterns</h3>
      </div>
      <div className="space-y-5">
        {theoryBlocks.map((b, i) => (
          <div key={i} className="border-l-4 border-primary/40 pl-4">
            <h4 className="font-semibold text-foreground mb-1">{b.heading}</h4>
            <div className="prose prose-sm max-w-none text-muted-foreground" dangerouslySetInnerHTML={{ __html: b.content }} />
            {b.notes && (
              <ul className="mt-2 list-disc list-inside text-sm text-muted-foreground space-y-0.5">
                {b.notes.map((n, j) => <li key={j}>{n}</li>)}
              </ul>
            )}
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

// ── Section 2: Word Matching (click-to-pair) ───────────────────────────

interface Match { prefix: string; suffix: string; compound: string }

const WordMatchingSection = () => {
  const prefixes = useMemo(() => wordParts.filter(p => p.type === 'prefix').sort(() => Math.random() - 0.5), []);
  const suffixes = useMemo(() => wordParts.filter(p => p.type === 'suffix').sort(() => Math.random() - 0.5), []);
  const [selected, setSelected] = useState<string | null>(null);
  const [matches, setMatches] = useState<Match[]>([]);
  const [wrongFlash, setWrongFlash] = useState<string | null>(null);

  const isMatched = (id: string) => matches.some(m => m.prefix === id || m.suffix === id);

  const handleClick = (id: string) => {
    if (isMatched(id)) return;
    if (!selected) { setSelected(id); return; }
    if (selected === id) { setSelected(null); return; }
    const a = wordParts.find(w => w.id === selected)!;
    const b = wordParts.find(w => w.id === id)!;
    if (a.type === b.type) { setSelected(id); return; }
    const valid = a.matches.includes(b.id) || b.matches.includes(a.id);
    if (valid) {
      const prefix = a.type === 'prefix' ? a : b;
      const suffix = a.type === 'suffix' ? a : b;
      setMatches(prev => [...prev, { prefix: prefix.id, suffix: suffix.id, compound: prefix.text.replace('-', '') + '-' + suffix.text.replace('-', '') }]);
      setSelected(null);
    } else {
      setWrongFlash(id);
      setTimeout(() => setWrongFlash(null), 600);
      setSelected(null);
    }
  };

  const reset = () => { setMatches([]); setSelected(null); };

  return (
    <Card className="service-card">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-2">
          <Gamepad2 className="h-6 w-6 text-primary" />
          <h3 className="text-2xl font-semibold font-merriweather text-foreground">2. Word Matching Game</h3>
        </div>
        <p className="text-muted-foreground mb-6">Click a word on the left, then click its match on the right to form a compound adjective.</p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-semibold mb-2 text-sm text-muted-foreground">First parts</h4>
            <div className="flex flex-wrap gap-2">
              {prefixes.map(w => {
                const matched = isMatched(w.id);
                const isSel = selected === w.id;
                const isWrong = wrongFlash === w.id;
                return (
                  <button key={w.id} onClick={() => handleClick(w.id)} disabled={matched}
                    className={`px-3 py-1.5 rounded-md text-sm border transition-all ${
                      matched ? 'line-through opacity-40 border-border bg-muted cursor-default' :
                      isWrong ? 'border-red-500 bg-red-50 text-red-700' :
                      isSel ? 'border-primary bg-primary/10 text-primary font-medium' :
                      'border-border bg-background hover:bg-muted cursor-pointer'
                    }`}>{w.text}</button>
                );
              })}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-sm text-muted-foreground">Second parts</h4>
            <div className="flex flex-wrap gap-2">
              {suffixes.map(w => {
                const matched = isMatched(w.id);
                const isSel = selected === w.id;
                const isWrong = wrongFlash === w.id;
                return (
                  <button key={w.id} onClick={() => handleClick(w.id)} disabled={matched}
                    className={`px-3 py-1.5 rounded-md text-sm border transition-all ${
                      matched ? 'line-through opacity-40 border-border bg-muted cursor-default' :
                      isWrong ? 'border-red-500 bg-red-50 text-red-700' :
                      isSel ? 'border-primary bg-primary/10 text-primary font-medium' :
                      'border-border bg-background hover:bg-muted cursor-pointer'
                    }`}>{w.text}</button>
                );
              })}
            </div>
          </div>
        </div>

        {matches.length > 0 && (
          <div className="p-4 bg-muted/50 rounded-lg border border-border mb-4">
            <p className="text-sm font-medium text-muted-foreground mb-2">Compound adjectives formed ({matches.length}):</p>
            <div className="flex flex-wrap gap-2">
              {matches.map((m, i) => (
                <span key={i} className="px-3 py-1 rounded-full text-sm bg-green-100 dark:bg-green-950/40 text-green-700 dark:text-green-400 border border-green-300 dark:border-green-800">
                  {m.compound}
                </span>
              ))}
            </div>
          </div>
        )}

        <Button variant="outline" size="sm" onClick={reset}>
          <RotateCcw className="h-4 w-4 mr-1" /> Reset
        </Button>
      </CardContent>
    </Card>
  );
};

// ── Section 3: Fill in the Blanks ──────────────────────────────────────

const fillSentences = [
  { id: 1, text: 'We stayed in a ___ hotel on the seafront.', answer: 'sea-front' },
  { id: 2, text: "Everybody has heard of Mel Gibson; he's a ___ actor.", answer: 'well-known' },
  { id: 3, text: 'After six hours on the beach, he had a terribly ___ face.', answer: 'sun-burnt' },
  { id: 4, text: "I can't see very clearly. I'm a bit ___.", answer: 'short-sighted' },
  { id: 5, text: "It wasn't a particularly ___ tennis racket; it broke soon after I bought it.", answer: 'well-made' },
  { id: 6, text: 'She was wearing an ___ dress that made heads turn as she walked through the room.', answer: 'eye-catching' },
  { id: 7, text: 'All these items are ___ by skilled craftsmen in a local factory.', answer: 'hand-made' },
  { id: 8, text: 'I feel a bit ___. Perhaps I should take more vitamins.', answer: 'run-down' },
  { id: 9, text: "My wife comes from a ___ family; they've always had more money than my own family.", answer: 'well-off' },
  { id: 10, text: 'My grandfather is becoming very ___. Last week he went to the library in his slippers.', answer: 'absent-minded' },
  { id: 11, text: 'To make a bit of money, my sister and I used to sell ___ cakes.', answer: 'home-made' },
  { id: 12, text: "He made a ___ attempt to take an interest, but it was obvious he didn't want to be there.", answer: 'half-hearted' },
  { id: 13, text: 'My father is a very ___ man. His favourite authors are Orhan Pamuk and Umberto Eco.', answer: 'well-read' },
];

const FillBlanksSection = () => {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);
  const score = checked ? fillSentences.filter(s => (answers[s.id] || '').trim().toLowerCase() === s.answer.toLowerCase()).length : 0;
  const reset = () => { setAnswers({}); setChecked(false); };

  return (
    <Card className="service-card">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-2">
          <PenTool className="h-6 w-6 text-primary" />
          <h3 className="text-2xl font-semibold font-merriweather text-foreground">3. Fill in the Blanks</h3>
        </div>
        <p className="text-muted-foreground mb-6">Complete each sentence with the correct compound adjective (use a hyphen).</p>

        <div className="space-y-4">
          {fillSentences.map(s => {
            const val = answers[s.id] || '';
            const correct = checked && val.trim().toLowerCase() === s.answer.toLowerCase();
            const wrong = checked && !correct;
            const parts = s.text.split('___');
            return (
              <div key={s.id} className="border-l-4 border-primary/30 pl-4">
                <p className="text-sm text-foreground flex flex-wrap items-center gap-1.5">
                  <span className="text-muted-foreground mr-1">{s.id}.</span>
                  <span>{parts[0]}</span>
                  <Input value={val} disabled={checked}
                    onChange={(e) => setAnswers(p => ({ ...p, [s.id]: e.target.value }))}
                    className={`inline-block w-40 h-7 text-sm text-center ${correct ? 'border-green-500 bg-green-50' : wrong ? 'border-red-500 bg-red-50' : ''}`}
                    placeholder="compound adjective" />
                  <span>{parts[1]}</span>
                  {correct && <CheckCircle2 className="h-4 w-4 text-green-600" />}
                  {wrong && (
                    <>
                      <XCircle className="h-4 w-4 text-red-500" />
                      <span className="text-xs text-green-700 font-medium">{s.answer}</span>
                    </>
                  )}
                </p>
              </div>
            );
          })}
        </div>

        <div className="flex items-center gap-3 mt-6">
          {!checked ? (
            <Button onClick={() => setChecked(true)} disabled={Object.keys(answers).length === 0}>Check Answers</Button>
          ) : (
            <>
              <div className="p-3 bg-muted rounded-lg">
                <p className="text-sm font-medium text-foreground">Score: {score} / {fillSentences.length}</p>
              </div>
              <Button variant="outline" onClick={reset}>Try Again</Button>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

// ── Section 4: Group Matching ──────────────────────────────────────────

const groups = [
  { letter: 'a', prefixes: ['half-', 'light-', 'broken-'], correctMatch: 'hearted' },
  { letter: 'b', prefixes: ['open-', 'narrow-', 'broad-'], correctMatch: 'minded' },
  { letter: 'c', prefixes: ['full-', 'part-', 'first-'], correctMatch: 'time' },
  { letter: 'd', prefixes: ['left-', 'right-', 'single-'], correctMatch: 'handed' },
  { letter: 'e', prefixes: ['over-', 'under-', 'un-'], correctMatch: 'stated' },
  { letter: 'f', prefixes: ['man-', 'hand-', 'self-'], correctMatch: 'made' },
];
const groupSuffixes = ['minded', 'made', 'handed', 'hearted', 'time', 'stated'];
const correctSelfAdjectives = ['self-confident', 'self-employed', 'self-taught', 'self-reliant', 'self-conscious', 'self-centered', 'self-centred', 'self-motivated', 'self-critical', 'self-aware', 'self-sufficient', 'self-assured'];

const GroupMatchingSection = () => {
  const [matches, setMatches] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);
  const [selfAdj, setSelfAdj] = useState(['', '', '', '']);
  const [selfChecked, setSelfChecked] = useState(false);

  const correctCount = groups.filter(g => matches[g.letter] === g.correctMatch).length;
  const selfCorrect = (i: number) => correctSelfAdjectives.some(c => c.toLowerCase() === selfAdj[i].trim().toLowerCase());

  return (
    <Card className="service-card">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-2">
          <Shuffle className="h-6 w-6 text-primary" />
          <h3 className="text-2xl font-semibold font-merriweather text-foreground">4. Group Matching</h3>
        </div>
        <p className="text-muted-foreground mb-6">Match each group of prefixes with the suffix that completes a compound adjective with all of them.</p>

        <div className="space-y-3 mb-6">
          {groups.map(g => {
            const isRight = checked && matches[g.letter] === g.correctMatch;
            const isWrong = checked && matches[g.letter] && matches[g.letter] !== g.correctMatch;
            return (
              <div key={g.letter} className={`flex items-center justify-between p-3 rounded-lg border ${
                isRight ? 'border-green-500 bg-green-50 dark:bg-green-950/30' : isWrong ? 'border-red-500 bg-red-50 dark:bg-red-950/30' : 'border-border bg-background'
              }`}>
                <div className="flex items-center gap-3">
                  <span className="font-bold text-primary w-5">{g.letter})</span>
                  <span className="text-sm text-foreground">{g.prefixes.join(' / ')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <select value={matches[g.letter] || ''} disabled={checked}
                    onChange={(e) => setMatches(p => ({ ...p, [g.letter]: e.target.value }))}
                    className="border border-border rounded-md px-2 py-1 text-sm bg-background">
                    <option value="">Choose...</option>
                    {groupSuffixes.map(s => <option key={s} value={s}>-{s}</option>)}
                  </select>
                  {isRight && <CheckCircle2 className="h-4 w-4 text-green-600" />}
                  {isWrong && <XCircle className="h-4 w-4 text-red-500" />}
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex items-center gap-3 mb-8">
          {!checked ? (
            <Button onClick={() => setChecked(true)} disabled={Object.keys(matches).length === 0}>Check Matches</Button>
          ) : (
            <>
              <div className="p-3 bg-muted rounded-lg">
                <p className="text-sm font-medium text-foreground">Score: {correctCount} / {groups.length}</p>
              </div>
              <Button variant="outline" onClick={() => { setMatches({}); setChecked(false); }}>Try Again</Button>
            </>
          )}
        </div>

        <div className="pt-6 border-t border-border">
          <h4 className="font-semibold text-foreground mb-2">Bonus: Find four <em>self-</em> compound adjectives</h4>
          <p className="text-muted-foreground text-sm mb-4">Type four compound adjectives that begin with <em>self-</em> (e.g. <em>self-confident</em>).</p>
          <div className="grid sm:grid-cols-2 gap-3 mb-4">
            {selfAdj.map((adj, i) => {
              const correct = selfChecked && selfCorrect(i);
              const wrong = selfChecked && adj.trim() && !correct;
              return (
                <div key={i} className="flex items-center gap-2">
                  <Input value={adj} disabled={selfChecked}
                    onChange={(e) => { const next = [...selfAdj]; next[i] = e.target.value; setSelfAdj(next); }}
                    placeholder="e.g. self-confident"
                    className={correct ? 'border-green-500 bg-green-50' : wrong ? 'border-red-500 bg-red-50' : ''} />
                  {correct && <CheckCircle2 className="h-4 w-4 text-green-600" />}
                  {wrong && <XCircle className="h-4 w-4 text-red-500" />}
                </div>
              );
            })}
          </div>
          {!selfChecked ? (
            <Button onClick={() => setSelfChecked(true)} disabled={selfAdj.every(a => !a.trim())}>Check</Button>
          ) : (
            <div className="mt-2 text-sm text-muted-foreground">
              <p className="mb-2">Examples: {correctSelfAdjectives.slice(0, 8).join(', ')}.</p>
              <Button variant="outline" size="sm" onClick={() => { setSelfAdj(['', '', '', '']); setSelfChecked(false); }}>Try Again</Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

// ── Section 5: Choose the Word ─────────────────────────────────────────

const wordBank = ['badly', 'class', 'distance', 'fashioned', 'free', 'headed', 'known', 'made', 'off', 'sighted', 'tempered', 'up', 'up'];
const chooseQuestions = [
  { id: 0, sentence: 'We bought some duty-___ perfume at the airport.', answer: 'free' },
  { id: 1, sentence: 'I made a long-___ call to London and it cost me a fortune!', answer: 'distance' },
  { id: 2, sentence: 'They seem to be very well-___; they have a great big house and two expensive cars.', answer: 'off' },
  { id: 3, sentence: "I'm fed-___ with this exercise! Will you help me, please?", answer: 'up' },
  { id: 4, sentence: "I usually travel second-___ because it's cheaper.", answer: 'class' },
  { id: 5, sentence: "This vase is hand-___ – that's why it's so expensive.", answer: 'made' },
  { id: 6, sentence: "He gets very bad-___ when he's tired and starts shouting at people.", answer: 'tempered' },
  { id: 7, sentence: 'I live in a built-___ area of the city, which is very noisy and full of traffic.', answer: 'up' },
  { id: 8, sentence: 'She is a well-___ TV personality – almost everybody recognises her in the street.', answer: 'known' },
  { id: 9, sentence: "I've never met anyone as big-___ as Jim. He has a really high opinion of himself.", answer: 'headed' },
  { id: 10, sentence: "I have to get my eyes tested – I've become very short-___ lately.", answer: 'sighted' },
  { id: 11, sentence: "A ___-maintained car won't have a very reliable engine.", answer: 'badly' },
  { id: 12, sentence: 'Will you ever get rid of those old-___ clothes?', answer: 'fashioned' },
];

const ChooseTheWordSection = () => {
  const [selected, setSelected] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);
  const score = checked ? chooseQuestions.filter(q => selected[q.id] === q.answer).length : 0;

  const usedCounts = Object.values(selected).reduce<Record<string, number>>((acc, w) => { acc[w] = (acc[w] || 0) + 1; return acc; }, {});
  const bankCounts = wordBank.reduce<Record<string, number>>((acc, w) => { acc[w] = (acc[w] || 0) + 1; return acc; }, {});

  const reset = () => { setSelected({}); setChecked(false); };

  return (
    <Card className="service-card">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-2">
          <Target className="h-6 w-6 text-primary" />
          <h3 className="text-2xl font-semibold font-merriweather text-foreground">5. Choose the Word</h3>
        </div>
        <p className="text-muted-foreground mb-4">Complete each sentence by choosing a word from the bank. Each word is used once (except <em>up</em>, used twice).</p>

        <div className="p-4 bg-muted/40 rounded-lg border border-border mb-6">
          <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-2">Word Bank</p>
          <div className="flex flex-wrap gap-2">
            {Array.from(new Set(wordBank)).map(w => {
              const remaining = (bankCounts[w] || 0) - (usedCounts[w] || 0);
              return (
                <span key={w} className={`px-3 py-1 rounded-full text-sm border ${remaining > 0 ? 'border-border bg-background text-foreground' : 'border-border bg-muted text-muted-foreground line-through opacity-50'}`}>
                  {w}{bankCounts[w] > 1 && ` ×${remaining}`}
                </span>
              );
            })}
          </div>
        </div>

        <div className="space-y-4">
          {chooseQuestions.map(q => {
            const val = selected[q.id];
            const correct = checked && val === q.answer;
            const wrong = checked && val && val !== q.answer;
            const parts = q.sentence.split('___');
            return (
              <div key={q.id} className={`p-3 rounded-lg border ${correct ? 'border-green-500 bg-green-50 dark:bg-green-950/30' : wrong ? 'border-red-500 bg-red-50 dark:bg-red-950/30' : 'border-border'}`}>
                <p className="text-sm text-foreground mb-2">
                  <span className="text-muted-foreground mr-1">{q.id + 1}.</span>
                  {parts[0]}<span className="font-bold text-primary">{val || '____'}</span>{parts[1]}
                  {correct && <CheckCircle2 className="inline h-4 w-4 ml-2 text-green-600" />}
                  {wrong && <span className="text-xs text-green-700 font-medium ml-2">→ {q.answer}</span>}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {Array.from(new Set(wordBank)).map(w => {
                    const remaining = (bankCounts[w] || 0) - (usedCounts[w] || 0);
                    const isSel = val === w;
                    const disabled = checked || (!isSel && remaining <= 0);
                    return (
                      <button key={w} disabled={disabled}
                        onClick={() => setSelected(p => {
                          const next = { ...p };
                          if (next[q.id] === w) delete next[q.id]; else next[q.id] = w;
                          return next;
                        })}
                        className={`px-2 py-1 rounded text-xs border transition-all ${
                          isSel ? 'border-primary bg-primary text-primary-foreground' :
                          disabled ? 'border-border bg-muted text-muted-foreground opacity-50 cursor-not-allowed' :
                          'border-border bg-background hover:bg-muted'
                        }`}>{w}</button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex items-center gap-3 mt-6">
          {!checked ? (
            <Button onClick={() => setChecked(true)} disabled={Object.keys(selected).length === 0}>Check Answers</Button>
          ) : (
            <>
              <div className="p-3 bg-muted rounded-lg">
                <p className="text-sm font-medium text-foreground">Score: {score} / {chooseQuestions.length}</p>
              </div>
              <Button variant="outline" onClick={reset}>Try Again</Button>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

// ── Main ───────────────────────────────────────────────────────────────

const CompoundAdjectivesLesson = () => (
  <div className="space-y-8">
    <Card className="service-card">
      <CardContent className="p-6">
        <h2 className="text-2xl md:text-3xl font-bold font-merriweather text-foreground mb-2">Compound Adjectives</h2>
        <p className="text-muted-foreground">
          Learn how to combine two or more words into single descriptive units like <em>well-known</em>, <em>short-sighted</em>, and <em>open-minded</em>. Practice through a matching game, fill-in-the-blanks, group matching, and a word-bank challenge.
        </p>
      </CardContent>
    </Card>
    <LearnSection />
    <WordMatchingSection />
    <FillBlanksSection />
    <GroupMatchingSection />
    <ChooseTheWordSection />
  </div>
);

export default CompoundAdjectivesLesson;
