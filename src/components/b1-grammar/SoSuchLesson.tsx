import { useState } from 'react';
import sofaCouple from '@/assets/sosuch-sofa-couple.jpg';
import airportCouple from '@/assets/sosuch-airport-couple.jpg';
import tiredWoman from '@/assets/sosuch-tired-woman.jpg';
import drivingTest from '@/assets/sosuch-driving-test.jpg';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  CheckCircle2, XCircle, Music, Play, BookOpen, Target, PenTool, Search,
  Gamepad2, AlertTriangle, Shuffle, Link2, MessagesSquare, Sparkles, GraduationCap,
} from 'lucide-react';

// ── Shared helpers ───────────────────────────────────────────────────────

const norm = (s: string) =>
  s.trim().toLowerCase().replace(/[.,!?]/g, '').replace(/\s+/g, ' ');

interface SectionShellProps {
  icon: React.ElementType;
  number: number;
  title: string;
  intro?: React.ReactNode;
  children: React.ReactNode;
}

const SectionShell = ({ icon: Icon, number, title, intro, children }: SectionShellProps) => (
  <Card className="service-card">
    <CardContent className="p-6">
      <div className="flex items-center gap-3 mb-2">
        <Icon className="h-6 w-6 text-primary" />
        <h3 className="text-2xl font-semibold font-merriweather text-foreground">
          {number}. {title}
        </h3>
      </div>
      {intro && <p className="text-muted-foreground mb-6">{intro}</p>}
      {children}
    </CardContent>
  </Card>
);

const ScoreBar = ({
  checked, score, total, onCheck, onReset, disabled,
}: { checked: boolean; score: number; total: number; onCheck: () => void; onReset: () => void; disabled?: boolean }) => (
  <div className="flex items-center gap-3 mt-6">
    {!checked ? (
      <Button onClick={onCheck} disabled={disabled}>Check answers</Button>
    ) : (
      <>
        <div className="p-3 bg-muted rounded-lg">
          <p className="text-sm font-medium text-foreground">Score: {score} / {total}</p>
        </div>
        <Button variant="outline" onClick={onReset}>Try again</Button>
      </>
    )}
  </div>
);

const WordwallEmbed = ({ src, title }: { src: string; title: string }) => (
  <div className="w-full max-w-2xl mx-auto rounded-lg overflow-hidden border border-border bg-muted/30">
    <iframe
      src={src}
      title={title}
      width="100%"
      height="420"
      style={{ maxWidth: '100%', border: 0 }}
      allowFullScreen
    />
  </div>
);

// ── Data: grammar explanation ────────────────────────────────────────────

interface Rule {
  pattern: string;
  meaning: string;
  examples: string[];
}

const soRules: Rule[] = [
  { pattern: 'so + adjective / adverb', meaning: 'very, extremely', examples: ['It’s so hot in here!', 'She could run so fast!'] },
  { pattern: 'so + adjective / adverb (+ that)', meaning: 'emphasises the degree by giving the result', examples: ['My car is so old (that) I can’t get any spare parts for it.', 'She drives so fast (that) nobody can keep up with her.'] },
  { pattern: 'so + many / much / few / little', meaning: 'emphasises a quantity or amount', examples: ['How did you make so much money?', 'There were so many people queuing (that) we went home.'] },
];

const suchRules: Rule[] = [
  { pattern: 'such + adjective + plural / uncountable noun', meaning: 'very, extremely', examples: ['She’s got such lovely hair!', 'They’re such good friends.'] },
  { pattern: 'such a / an + adjective + singular noun', meaning: 'very, extremely', examples: ['It was such a beautiful day!', 'You’re such an optimist.'] },
  { pattern: 'such (+ adjective) + noun (+ that)', meaning: 'emphasises the degree by giving the result', examples: ['It was such a hot day (that) we decided to go for a swim.', 'It was such nice weather (that) we spent the whole day on the beach.'] },
];

const comparePairs = [
  { so: 'so long', such: 'such a long time', soEx: 'I haven’t seen her for so long I’ve forgotten what she looks like.', suchEx: 'I haven’t seen her for such a long time.' },
  { so: 'so far', such: 'such a long way', soEx: 'I didn’t know it was so far.', suchEx: 'I didn’t know it was such a long way.' },
  { so: 'so much / so many', such: 'such a lot (of)', soEx: 'I’m sorry I’m late — there was so much traffic.', suchEx: 'I’m sorry I’m late — there was such a lot of traffic.' },
];

const mistakes = [
  { wrong: 'It was a so stupid story.', right: 'It was such a stupid story.', why: 'Use such (not so) before a noun.' },
  { wrong: 'a such big dog', right: 'such a big dog', why: 'The order is such + a/an + adjective + noun.' },
  { wrong: 'They are so nice people.', right: 'They are such nice people.', why: 'Use such before a plural noun.' },
  { wrong: 'I haven’t seen you for so long time.', right: 'I haven’t seen you for such a long time.', why: '“long time” is a noun phrase, so it takes such a.' },
];

// ── 1. Grammar explanation ───────────────────────────────────────────────

const RuleColumn = ({ title, rules, accent }: { title: string; rules: Rule[]; accent: string }) => (
  <div className={`rounded-lg border-2 ${accent} p-5 space-y-4 bg-background`}>
    <h4 className="text-xl font-bold font-merriweather text-primary">{title}</h4>
    {rules.map((r) => (
      <div key={r.pattern} className="space-y-1">
        <p className="text-sm font-mono font-semibold text-foreground">{r.pattern}</p>
        <p className="text-xs text-muted-foreground uppercase tracking-wide">{r.meaning}</p>
        <ul className="space-y-1 pt-1">
          {r.examples.map((e) => (
            <li key={e} className="text-sm italic text-foreground border-l-4 border-primary/40 pl-3">{e}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

const GrammarExplanation = () => (
  <SectionShell
    icon={BookOpen}
    number={1}
    title="Grammar: so and such"
    intro={<>We use <em>so</em> and <em>such</em> to make the meaning stronger. The difference is what comes after them.</>}
  >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <RuleColumn title="so" rules={soRules} accent="border-primary/40" />
      <RuleColumn title="such" rules={suchRules} accent="border-brand-orange/40" />
    </div>

    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="bg-muted/30 rounded-lg p-5 border border-border">
        <h4 className="font-semibold font-merriweather text-foreground mb-2">Leaving out <em>that</em></h4>
        <p className="text-sm text-muted-foreground mb-2">In speaking we usually leave <em>that</em> out.</p>
        <ul className="text-sm text-foreground space-y-1">
          <li className="italic border-l-4 border-primary/40 pl-3">I was so tired (that) I fell asleep.</li>
          <li className="italic border-l-4 border-primary/40 pl-3">It was such nice weather (that) we spent the day outside.</li>
        </ul>
      </div>
      <div className="bg-muted/30 rounded-lg p-5 border border-border">
        <h4 className="font-semibold font-merriweather text-foreground mb-2">Meaning &lsquo;like this&rsquo; &amp; <em>no such</em></h4>
        <ul className="text-sm text-foreground space-y-1">
          <li className="italic border-l-4 border-primary/40 pl-3">I didn&rsquo;t realise it was so old. (= as old as it is)</li>
          <li className="italic border-l-4 border-primary/40 pl-3">I didn&rsquo;t realise it was such an old house.</li>
          <li className="italic border-l-4 border-primary/40 pl-3">How can you say such a thing?</li>
          <li className="italic border-l-4 border-primary/40 pl-3">There&rsquo;s no such word. (= it does not exist)</li>
        </ul>
      </div>
    </div>

    <div className="mt-6">
      <h4 className="font-semibold font-merriweather text-foreground mb-3">Compare</h4>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
          <thead className="bg-muted">
            <tr>
              <th className="text-left p-3 font-semibold text-foreground">so</th>
              <th className="text-left p-3 font-semibold text-foreground">such</th>
            </tr>
          </thead>
          <tbody>
            {comparePairs.map((p) => (
              <tr key={p.so} className="border-t border-border align-top">
                <td className="p-3">
                  <p className="font-mono font-semibold text-foreground">{p.so}</p>
                  <p className="italic text-muted-foreground mt-1">{p.soEx}</p>
                </td>
                <td className="p-3">
                  <p className="font-mono font-semibold text-foreground">{p.such}</p>
                  <p className="italic text-muted-foreground mt-1">{p.suchEx}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </SectionShell>
);

// ── 2. Common mistakes ───────────────────────────────────────────────────

const CommonMistakes = () => (
  <SectionShell icon={AlertTriangle} number={2} title="Common mistakes" intro="These are the mistakes students make most often with so and such.">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {mistakes.map((m) => (
        <div key={m.wrong} className="rounded-lg border border-border p-4 bg-background space-y-2">
          <p className="text-sm flex items-start gap-2 text-red-700"><XCircle className="h-4 w-4 mt-0.5 shrink-0" /><span className="line-through">{m.wrong}</span></p>
          <p className="text-sm flex items-start gap-2 text-green-700"><CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" /><span className="font-medium">{m.right}</span></p>
          <p className="text-xs text-muted-foreground italic">{m.why}</p>
        </div>
      ))}
    </div>
  </SectionShell>
);

// ── Gap fill (reusable) ──────────────────────────────────────────────────

interface Gap { sentence: string; answer: string; note?: string }

const GapFill = ({
  items, number, title, intro, image, imagePosition = 'left', imageAlt, imageSize = 'md',
}: { items: Gap[]; number: number; title: string; intro: React.ReactNode; image?: string; imagePosition?: 'left' | 'right'; imageAlt?: string; imageSize?: 'sm' | 'md' }) => {

  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);
  const score = items.filter((f, i) => norm(answers[i] || '') === norm(f.answer)).length;

  const exercise = (
    <>
      <div className="space-y-4">
        {items.map((f, i) => {
          const parts = f.sentence.split('___');
          const val = answers[i] || '';
          const correct = checked && norm(val) === norm(f.answer);
          const wrong = checked && !correct;
          return (
            <div key={i} className="border-l-4 border-primary/30 pl-4">
              <p className="text-sm text-foreground flex flex-wrap items-center gap-1.5">
                <span className="text-muted-foreground mr-1">{i + 1}.</span>
                <span>{parts[0]}</span>
                <Input
                  value={val}
                  disabled={checked}
                  aria-label={`Answer ${i + 1}`}
                  onChange={(e) => setAnswers((p) => ({ ...p, [i]: e.target.value }))}
                  className={`inline-block w-28 h-7 text-sm text-center ${correct ? 'border-green-500 bg-green-50' : wrong ? 'border-red-500 bg-red-50' : ''}`}
                  placeholder="___"
                />
                <span>{parts[1]}</span>
                {correct && <CheckCircle2 className="h-4 w-4 text-green-600" />}
                {wrong && (
                  <>
                    <XCircle className="h-4 w-4 text-red-500" />
                    <span className="text-xs text-green-700 font-medium">{f.answer}</span>
                  </>
                )}
              </p>
              {checked && f.note && <p className="mt-1 text-xs text-muted-foreground italic">{f.note}</p>}
            </div>
          );
        })}
      </div>
      <ScoreBar
        checked={checked}
        score={score}
        total={items.length}
        onCheck={() => setChecked(true)}
        onReset={() => { setAnswers({}); setChecked(false); }}
      />
    </>
  );

  const imageNode = image ? (
    <div>
      <img
        src={image}
        alt={imageAlt || (imagePosition === 'right'
          ? 'A tired woman sitting at her desk at work'
          : 'A couple struggling to lift a heavy suitcase at the airport')}
        loading="lazy"
        width={1024}
        height={1536}
        className={`w-full mx-auto rounded-xl object-cover shadow-md ${
          imageSize === 'sm' ? 'max-w-[240px] max-h-[360px]' : 'max-w-sm max-h-[480px]'
        }`}
      />
    </div>
  ) : null;



  return (
    <SectionShell icon={PenTool} number={number} title={title} intro={intro}>
      {image ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {imagePosition === 'left' ? (
            <>
              {imageNode}
              <div>{exercise}</div>
            </>
          ) : (
            <>
              <div>{exercise}</div>
              {imageNode}
            </>
          )}
        </div>
      ) : (
        exercise
      )}
    </SectionShell>
  );
};

const murphyGaps: Gap[] = [
  { sentence: 'It’s difficult to understand him because he speaks ___ quietly.', answer: 'so', note: 'so + adverb' },
  { sentence: 'I like Liz and Joe. They’re ___ nice people.', answer: 'such', note: 'such + adjective + plural noun' },
  { sentence: 'It was a great holiday. We had ___ good time.', answer: 'such a', note: 'such a + adjective + singular noun' },
  { sentence: 'I was surprised that he looked ___ well after his recent illness.', answer: 'so' },
  { sentence: 'Everything is ___ expensive these days, isn’t it?', answer: 'so' },
  { sentence: 'The weather is beautiful, isn’t it? I didn’t expect it to be ___ nice day.', answer: 'such a' },
  { sentence: 'I think she works too hard. She looks ___ tired all the time.', answer: 'so' },
  { sentence: 'He always looks good. He wears ___ nice clothes.', answer: 'such' },
  { sentence: 'It was ___ boring film that I fell asleep while I was watching it.', answer: 'such a' },
  { sentence: 'I couldn’t believe the news. It was ___ shock.', answer: 'such a' },
  { sentence: 'I have to go. I didn’t realise it was ___ late.', answer: 'so' },
  { sentence: 'The food at the hotel was ___ awful.', answer: 'so' },
  { sentence: 'I’ve never eaten ___ awful food.', answer: 'such' },
  { sentence: 'They’ve got ___ much money they don’t know what to do with it.', answer: 'so' },
  { sentence: 'I didn’t realise you lived ___ long way from the city centre.', answer: 'such a' },
  { sentence: 'The party was really great. It was ___ shame you couldn’t come.', answer: 'such a' },
];

const nefGaps: Gap[] = [
  { sentence: 'My case is ___ heavy (that) I can hardly pick it up.', answer: 'so' },
  { sentence: 'It was ___ long flight (that) the children got very bored.', answer: 'such a' },
  { sentence: 'There were ___ many people at the airport (that) we couldn’t see him.', answer: 'so' },
  { sentence: 'It was ___ awful weather (that) we couldn’t leave the hotel.', answer: 'such' },
  { sentence: 'We had ___ much luggage (that) we had to ask a porter to help us.', answer: 'so' },
  { sentence: 'Jim is ___ selfish (that) he can’t think about anybody else.', answer: 'so' },
  { sentence: 'Jim is ___ selfish person (that) he can’t think about anybody else.', answer: 'such a' },
  { sentence: 'They were ___ cheap tickets (that) we decided to buy them.', answer: 'such' },
];

const dialogueGaps: Gap[] = [
  { sentence: 'Izzy: That’s ___ late! I need an early night. I’m exhausted.', answer: 'so' },
  { sentence: 'Jim: Why are you ___ tired?', answer: 'so' },
  { sentence: 'Izzy: I went to Jack’s party last night. I was having ___ fun, I didn’t want to leave!', answer: 'such' },
  { sentence: 'Jim: But I don’t want to go to the cinema on my own. It’s ___ boring.', answer: 'so' },
  { sentence: 'Jim: I’m not sure she’d like this film. She’s got ___ good taste.', answer: 'such' },
  { sentence: 'Izzy: Jim! You’re ___ rude.', answer: 'so' },
];

// ── Sentence combining ───────────────────────────────────────────────────

interface Combine { prompt: string[]; model: string }

const combines: Combine[] = [
  { prompt: ['She worked hard.', 'She made herself ill.'], model: 'She worked so hard (that) she made herself ill.' },
  { prompt: ['It was a beautiful day.', 'We decided to go to the beach.'], model: 'It was such a beautiful day (that) we decided to go to the beach.' },
  { prompt: ['I was tired.', 'I couldn’t keep my eyes open.'], model: 'I was so tired (that) I couldn’t keep my eyes open.' },
  { prompt: ['We had a good time on holiday.', 'We didn’t want to come home.'], model: 'We had such a good time on holiday (that) we didn’t want to come home.' },
  { prompt: ['She speaks English well.', 'You would think it was her native language.'], model: 'She speaks English so well (that) you would think it was her native language. / She speaks such good English (that) …' },
  { prompt: ['I’ve got a lot to do.', 'I don’t know where to begin.'], model: 'I’ve got such a lot to do (that) I don’t know where to begin. / I’ve got so much to do (that) …' },
  { prompt: ['The music was loud.', 'You could hear it from miles away.'], model: 'The music was so loud (that) you could hear it from miles away.' },
  { prompt: ['I had a big breakfast.', 'I didn’t eat anything else for the rest of the day.'], model: 'I had such a big breakfast (that) I didn’t eat anything else for the rest of the day.' },
  { prompt: ['It was horrible weather.', 'We spent the whole day indoors.'], model: 'It was such horrible weather (that) we spent the whole day indoors.' },
  { prompt: ['I was surprised.', 'I didn’t know what to say.'], model: 'I was so surprised (that) I didn’t know what to say.' },
];

const SentenceCombining = () => {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [shown, setShown] = useState(false);

  return (
    <SectionShell icon={Shuffle} number={6} title="Make one sentence" intro="Join the two sentences using so or such. Write your answer, then reveal the model answers.">
      <div className="space-y-4">
        {combines.map((c, i) => (
          <div key={i} className="border-l-4 border-primary/30 pl-4">
            <p className="text-sm text-muted-foreground mb-2">
              <span className="mr-1">{i + 1}.</span>{c.prompt[0]} + {c.prompt[1]}
            </p>
            <Textarea
              value={answers[i] || ''}
              aria-label={`Your sentence ${i + 1}`}
              onChange={(e) => setAnswers((p) => ({ ...p, [i]: e.target.value }))}
              placeholder="Write your sentence…"
              className="min-h-[60px] text-sm"
            />
            {shown && <p className="mt-2 text-sm text-green-700 italic">{c.model}</p>}
          </div>
        ))}
      </div>
      <Button variant="outline" className="mt-6" onClick={() => setShown((s) => !s)}>
        {shown ? 'Hide model answers' : 'Show model answers'}
      </Button>
    </SectionShell>
  );
};

// ── Matching ─────────────────────────────────────────────────────────────

const matchStarts = [
  'The kids were so tired that',
  'The food was so bad that',
  'She’s got so many clothes that',
  'It’s such a tiny kitchen that',
  'He eats so much sugar that',
  'They were making so much noise that',
];

const matchEnds = [
  { id: 'a', text: 'I don’t have to do much to keep it clean.' },
  { id: 'b', text: 'they went straight to bed.' },
  { id: 'c', text: 'she never wears the same thing twice.' },
  { id: 'd', text: 'his teeth will rot.' },
  { id: 'f', text: 'I couldn’t concentrate.' },
  { id: 'g', text: 'nobody could eat it.' },
];

const matchKey = ['b', 'g', 'c', 'a', 'd', 'f'];

const MatchingSection = () => {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);
  const score = matchKey.filter((k, i) => answers[i] === k).length;

  return (
    <SectionShell icon={Link2} number={7} title="Match the halves" intro="Choose the ending that completes each sentence. Example: The pianist played so badly that → the audience walked out.">
      <div className="space-y-4">
        {matchStarts.map((s, i) => (
          <div key={i} className="border-l-4 border-primary/30 pl-4">
            <p className="text-sm font-medium text-foreground mb-2"><span className="text-muted-foreground mr-1">{i + 1}.</span>{s}</p>
            <div className="flex flex-wrap gap-2">
              {matchEnds.map((e) => {
                const isSel = answers[i] === e.id;
                let cls = 'border-border bg-background hover:border-primary/50';
                if (checked) {
                  if (e.id === matchKey[i]) cls = 'border-green-500 bg-green-50 text-green-700';
                  else if (isSel) cls = 'border-red-500 bg-red-50 text-red-700';
                  else cls = 'border-border bg-background opacity-50';
                } else if (isSel) cls = 'border-primary bg-primary/10';
                return (
                  <button
                    key={e.id}
                    disabled={checked}
                    onClick={() => setAnswers((p) => ({ ...p, [i]: e.id }))}
                    className={`px-3 py-1.5 text-xs rounded-md border-2 transition-all text-left ${cls}`}
                  >
                    {e.text}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <ScoreBar checked={checked} score={score} total={matchKey.length} onCheck={() => setChecked(true)} onReset={() => { setAnswers({}); setChecked(false); }} />
    </SectionShell>
  );
};

// ── Multiple choice (10b) ────────────────────────────────────────────────

interface Choice { sentence: string; options: string[]; answer: string; note: string }

const choiceItems: Choice[] = [
  { sentence: 'Passing my driving test was ___ relief!', options: ['so', 'such a'], answer: 'such a', note: 'relief is a singular noun → such a' },
  { sentence: 'We’re having ___ awful weather that we can’t go for a swim.', options: ['such', 'such an'], answer: 'such', note: 'weather is uncountable → such (no article)' },
  { sentence: 'We had ___ terrible time that we swore we wouldn’t do it again.', options: ['so', 'such a'], answer: 'such a', note: 'such a + adjective + singular noun' },
  { sentence: 'She loved him ___ deeply that she couldn’t bear it when he was away.', options: ['so', 'such'], answer: 'so', note: 'so + adverb' },
  { sentence: 'There were ___ few people there they nearly cancelled the performance.', options: ['so', 'such'], answer: 'so', note: 'so + few' },
  { sentence: 'The film was ___ boring I wanted to leave.', options: ['so', 'such a'], answer: 'so', note: 'so + adjective (no noun)' },
  { sentence: 'I had ___ many things to do I didn’t know where to start.', options: ['so', 'such'], answer: 'so', note: 'so + many' },
  { sentence: 'It was ___ lovely day we decided to have a picnic in the park.', options: ['so', 'such a'], answer: 'such a', note: 'such a + adjective + singular noun' },
  { sentence: 'There was ___ much noise I could hardly hear myself think!', options: ['so', 'such'], answer: 'so', note: 'so + much' },
  { sentence: 'Joe was ___ angry that he started shouting at me.', options: ['so', 'such an'], answer: 'so', note: 'so + adjective' },
];

const ChoiceSection = ({
  image,
  imagePosition = 'right',
  imageAlt,
}: {
  image?: string;
  imagePosition?: 'left' | 'right';
  imageAlt?: string;
}) => {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);
  const score = choiceItems.filter((q, i) => answers[i] === q.answer).length;

  const exercise = (
    <>
      <div className="space-y-5">
        {choiceItems.map((q, i) => (
          <div key={i} className="border-l-4 border-primary/30 pl-4">
            <p className="text-sm text-foreground font-medium mb-2"><span className="text-muted-foreground mr-1">{i + 1}.</span>{q.sentence}</p>
            <div className="flex gap-2">
              {q.options.map((opt) => {
                const isSel = answers[i] === opt;
                let cls = 'border-border bg-background hover:border-primary/50';
                if (checked) {
                  if (opt === q.answer) cls = 'border-green-500 bg-green-50 text-green-700';
                  else if (isSel) cls = 'border-red-500 bg-red-50 text-red-700';
                  else cls = 'border-border bg-background opacity-50';
                } else if (isSel) cls = 'border-primary bg-primary/10';
                return (
                  <button
                    key={opt}
                    disabled={checked}
                    onClick={() => setAnswers((p) => ({ ...p, [i]: opt }))}
                    className={`px-4 py-1.5 text-sm rounded-md border-2 transition-all ${cls}`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
            {checked && <p className="mt-1.5 text-xs text-muted-foreground italic">{q.note}</p>}
          </div>
        ))}
      </div>
      <ScoreBar checked={checked} score={score} total={choiceItems.length} onCheck={() => setChecked(true)} onReset={() => { setAnswers({}); setChecked(false); }} />
    </>
  );

  const imageNode = image ? (
    <div>
      <img
        src={image}
        alt={imageAlt || ''}
        loading="lazy"
        width={1024}
        height={1536}
        className="w-full max-w-sm mx-auto rounded-xl object-cover shadow-md"
      />
    </div>
  ) : null;

  return (
    <SectionShell icon={Target} number={9} title="Choose the correct answer" intro="Pick so or such in each sentence.">
      {image ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {imagePosition === 'left' ? (
            <>
              {imageNode}
              <div>{exercise}</div>
            </>
          ) : (
            <>
              <div>{exercise}</div>
              {imageNode}
            </>
          )}
        </div>
      ) : (
        exercise
      )}
    </SectionShell>
  );
};

// ── Key word transformations ─────────────────────────────────────────────

interface KWT { first: string; word: string; before: string; after: string; accepted: string[] }

const kwtItems: KWT[] = [
  {
    first: 'I was almost two hours late because there was heavy traffic.',
    word: 'SUCH', before: 'There was', after: 'I was almost two hours late.',
    accepted: ['such heavy traffic that'],
  },
  {
    first: 'I cried because the film was sad.',
    word: 'THAT', before: 'The film was', after: 'I cried.',
    accepted: ['so sad that'],
  },
  {
    first: 'Nobody can believe she’s Spanish because her English is very good.',
    word: 'SUCH', before: 'She speaks', after: 'that nobody can believe she’s Spanish.',
    accepted: ['such good english'],
  },
  {
    first: 'If there had been fewer people in the queue, we would have waited.',
    word: 'SO', before: 'There were', after: 'in the queue that we decided not to wait.',
    accepted: ['so many people'],
  },
  {
    first: 'He couldn’t sleep because the coffee was very strong.',
    word: 'SO', before: 'The coffee was', after: 'he couldn’t sleep.',
    accepted: ['so strong that'],
  },
];

const KwtSection = () => {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);
  const score = kwtItems.filter((q, i) => q.accepted.some((a) => norm(answers[i] || '') === norm(a))).length;

  return (
    <SectionShell icon={GraduationCap} number={10} title="Key word transformations" intro="Complete the second sentence so it means the same as the first. Use between two and five words, including the word given.">
      <div className="space-y-5">
        {kwtItems.map((q, i) => {
          const val = answers[i] || '';
          const correct = checked && q.accepted.some((a) => norm(val) === norm(a));
          const wrong = checked && !correct;
          return (
            <div key={i} className="border-l-4 border-primary/30 pl-4">
              <p className="text-sm text-muted-foreground"><span className="mr-1">{i + 1}.</span>{q.first}</p>
              <p className="text-xs font-bold tracking-widest text-primary my-1">{q.word}</p>
              <p className="text-sm text-foreground flex flex-wrap items-center gap-1.5">
                <span>{q.before}</span>
                <Input
                  value={val}
                  disabled={checked}
                  aria-label={`Transformation ${i + 1}`}
                  onChange={(e) => setAnswers((p) => ({ ...p, [i]: e.target.value }))}
                  className={`inline-block w-56 h-8 text-sm ${correct ? 'border-green-500 bg-green-50' : wrong ? 'border-red-500 bg-red-50' : ''}`}
                  placeholder="2–5 words"
                />
                <span>{q.after}</span>
                {correct && <CheckCircle2 className="h-4 w-4 text-green-600" />}
              </p>
              {wrong && <p className="mt-1 text-xs text-green-700 font-medium">{q.accepted[0]}</p>}
            </div>
          );
        })}
      </div>
      <ScoreBar checked={checked} score={score} total={kwtItems.length} onCheck={() => setChecked(true)} onReset={() => { setAnswers({}); setChecked(false); }} />
    </SectionShell>
  );
};

// ── Pattern recognition (from So/Such Master) ────────────────────────────

interface PatternQ { sentence: string; options: string[]; answer: string; note: string }

const patternQuestions: PatternQ[] = [
  { sentence: 'She is so beautiful that everyone admires her.', options: ['so + adjective + that', 'such + adjective + that', 'so + noun + that'], answer: 'so + adjective + that', note: 'so + adjective (beautiful) + that clause.' },
  { sentence: 'It was such a wonderful experience!', options: ['so + adjective', 'such + a/an + adjective + noun', 'so + noun'], answer: 'such + a/an + adjective + noun', note: 'such + a + adjective + singular noun.' },
  { sentence: 'He runs so fast!', options: ['so + adverb', 'such + adverb', 'so + adjective'], answer: 'so + adverb', note: 'fast is an adverb here.' },
  { sentence: 'They have such nice neighbours.', options: ['so + adjective + noun', 'such + adjective + plural noun', 'so + plural noun'], answer: 'such + adjective + plural noun', note: 'such + adjective + plural noun.' },
  { sentence: 'There was so much traffic we missed the flight.', options: ['so + much + noun', 'such + noun', 'such a + noun'], answer: 'so + much + noun', note: 'so goes with much/many/few/little.' },
];

const PatternRecognition = () => {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);
  const score = patternQuestions.filter((q, i) => answers[i] === q.answer).length;

  return (
    <SectionShell icon={Search} number={13} title="Pattern recognition" intro="Identify which pattern each sentence uses.">
      <div className="space-y-5">
        {patternQuestions.map((q, i) => (
          <div key={i} className="border-l-4 border-primary/30 pl-4">
            <div className="p-3 bg-muted/40 rounded-md mb-2">
              <p className="text-foreground font-medium italic text-sm">&ldquo;{q.sentence}&rdquo;</p>
            </div>
            <div className="grid gap-2">
              {q.options.map((opt) => {
                const isSel = answers[i] === opt;
                let cls = 'border-border bg-background hover:border-primary/50';
                if (checked) {
                  if (opt === q.answer) cls = 'border-green-500 bg-green-50 text-green-700';
                  else if (isSel) cls = 'border-red-500 bg-red-50 text-red-700';
                  else cls = 'border-border bg-background opacity-50';
                } else if (isSel) cls = 'border-primary bg-primary/10';
                return (
                  <button
                    key={opt}
                    disabled={checked}
                    onClick={() => setAnswers((p) => ({ ...p, [i]: opt }))}
                    className={`p-2 text-sm text-left rounded-md border-2 transition-all font-mono ${cls}`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
            {checked && <p className="mt-1.5 text-xs text-muted-foreground italic">{q.note}</p>}
          </div>
        ))}
      </div>
      <ScoreBar checked={checked} score={score} total={patternQuestions.length} onCheck={() => setChecked(true)} onReset={() => { setAnswers({}); setChecked(false); }} />
    </SectionShell>
  );
};

// ── Song listening (from So/Such Master) ─────────────────────────────────

interface LyricLine { line: string; blanks: { answer: string }[] }

const lyrics: LyricLine[] = [
  { line: "I'm not saying it was your fault", blanks: [] },
  { line: 'Although you could have done more', blanks: [] },
  { line: 'Oh you’re ___ naive yet ___ true', blanks: [{ answer: 'so' }, { answer: 'so' }] },
  { line: 'How could this be done', blanks: [] },
  { line: 'By ___ smiling sweetheart', blanks: [{ answer: 'such a' }] },
  { line: 'Oh and your sweet and pretty face', blanks: [] },
  { line: 'In ___ ugly way', blanks: [{ answer: 'such an' }] },
  { line: 'Something ___ beautiful', blanks: [{ answer: 'so' }] },
  { line: 'That every time I look inside', blanks: [] },
  { line: 'I know she knows that I’m not fond of asking', blanks: [] },
  { line: 'True or false it may be', blanks: [] },
  { line: 'She’s still out to get me', blanks: [] },
];

const ListeningSection = () => {
  const allBlanks = lyrics.flatMap((l) => l.blanks);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);
  const score = allBlanks.filter((b, i) => norm(answers[i] || '') === norm(b.answer)).length;
  let blankCounter = 0;

  return (
    <SectionShell
      icon={Music}
      number={14}
      title="Listening — The Kooks, &ldquo;Naïve&rdquo;"
      intro={<>Listen to the song and fill in the missing <em>so</em> and <em>such</em> patterns.</>}
    >
      <div className="aspect-video rounded-lg overflow-hidden bg-muted mb-6 max-w-3xl mx-auto">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/jkaMiaRLgvY"
          title="The Kooks - Naive"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <div className="flex items-start gap-2 p-3 bg-primary/5 rounded-lg border border-primary/20 mb-4">
        <Play className="h-4 w-4 text-primary mt-0.5 shrink-0" />
        <p className="text-sm text-muted-foreground">Type the words you hear. Each blank is <em>so</em>, <em>such a</em> or <em>such an</em>.</p>
      </div>

      <div className="bg-muted/30 border border-border rounded-lg p-5 space-y-1.5">
        {lyrics.map((l, li) => {
          if (l.blanks.length === 0) return <p key={li} className="text-sm text-muted-foreground">{l.line}</p>;
          const parts = l.line.split('___');
          return (
            <p key={li} className="text-sm text-foreground flex flex-wrap items-center gap-1.5">
              {parts.map((part, pi) => {
                const isLast = pi === parts.length - 1;
                if (isLast) return <span key={pi}>{part}</span>;
                const bIdx = blankCounter++;
                const blank = l.blanks[pi];
                const val = answers[bIdx] || '';
                const correct = checked && norm(val) === norm(blank.answer);
                const wrong = checked && !correct;
                return (
                  <span key={pi} className="inline-flex items-center gap-1">
                    <span>{part}</span>
                    <Input
                      value={val}
                      disabled={checked}
                      aria-label={`Lyric blank ${bIdx + 1}`}
                      onChange={(e) => setAnswers((p) => ({ ...p, [bIdx]: e.target.value }))}
                      className={`inline-block w-24 h-7 text-sm text-center ${correct ? 'border-green-500 bg-green-50' : wrong ? 'border-red-500 bg-red-50' : ''}`}
                      placeholder="___"
                    />
                    {correct && <CheckCircle2 className="h-4 w-4 text-green-600" />}
                    {wrong && (
                      <>
                        <XCircle className="h-4 w-4 text-red-500" />
                        <span className="text-xs text-green-700 font-medium">{blank.answer}</span>
                      </>
                    )}
                  </span>
                );
              })}
            </p>
          );
        })}
      </div>
      <ScoreBar checked={checked} score={score} total={allBlanks.length} onCheck={() => setChecked(true)} onReset={() => { setAnswers({}); setChecked(false); }} />
    </SectionShell>
  );
};

// ── Your turn ────────────────────────────────────────────────────────────

const personalise = [
  { prompt: 'I like my best friend. He/She is so …', model: 'He’s so funny.' },
  { prompt: 'I like my best friend. He/She is such …', model: 'She’s such a kind person.' },
  { prompt: 'I like my home town. It’s so …', model: 'It’s so lively.' },
  { prompt: 'I like my home town. It’s such …', model: 'It’s such an exciting place.' },
  { prompt: 'It’s great to see you again! I haven’t seen you for so …', model: 'I haven’t seen you for so long.' },
  { prompt: 'It’s great to see you again! I haven’t seen you for such …', model: 'I haven’t seen you for such a long time.' },
  { prompt: 'It was such a hot day (that) …', model: 'It was such a hot day that we swam in the river.' },
  { prompt: 'I have so much work (that) …', model: 'I have so much work that I can’t go out tonight.' },
  { prompt: 'We were so tired (that) …', model: 'We were so tired that we fell asleep on the sofa.' },
  { prompt: 'They were playing such loud music (that) …', model: 'They were playing such loud music that the neighbours complained.' },
];

const YourTurn = () => {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [shown, setShown] = useState(false);

  return (
    <SectionShell icon={Sparkles} number={15} title="Your turn" intro="Finish each sentence with your own ideas.">
      <div className="space-y-4">
        {personalise.map((p, i) => (
          <div key={i} className="border-l-4 border-primary/30 pl-4">
            <p className="text-sm text-foreground mb-1"><span className="text-muted-foreground mr-1">{i + 1}.</span>{p.prompt}</p>
            <Textarea
              value={answers[i] || ''}
              aria-label={`Your idea ${i + 1}`}
              onChange={(e) => setAnswers((prev) => ({ ...prev, [i]: e.target.value }))}
              placeholder="Write your idea…"
              className="min-h-[54px] text-sm"
            />
            {shown && <p className="mt-1.5 text-sm text-green-700 italic">Example: {p.model}</p>}
          </div>
        ))}
      </div>
      <Button variant="outline" className="mt-6" onClick={() => setShown((s) => !s)}>
        {shown ? 'Hide example answers' : 'Show example answers'}
      </Button>
    </SectionShell>
  );
};


// ── Main ─────────────────────────────────────────────────────────────────

const SoSuchLesson = () => (
  <div className="space-y-8">
    <Card className="service-card">
      <CardContent className="p-6">
        <h2 className="text-2xl md:text-3xl font-bold font-merriweather text-foreground mb-2">So &amp; Such</h2>
        <p className="text-muted-foreground">
          Start with the grammar explanation, then work down through gap fills, matching,
          exam-style transformations, interactive games and a song. Too/Enough is coming soon.
        </p>
      </CardContent>
    </Card>

    <GrammarExplanation />
    <CommonMistakes />

    <SectionShell icon={Gamepad2} number={3} title="Game 1 — so or such?" intro="A quick warm-up quiz.">
      <WordwallEmbed src="https://wordwall.net/embed/34faf6446a194bf794e1b2406464415a?themeId=1&templateId=5&fontStackId=0" title="So or such quiz 1" />
    </SectionShell>

    <GapFill
      items={murphyGaps}
      number={4}
      title="Gap fill — so, such or such a"
      intro={<>Write <em>so</em>, <em>such</em> or <em>such a</em> in each gap.</>}
      image={tiredWoman}
      imagePosition="right"
    />

    <GapFill
      items={nefGaps}
      number={5}
      title="Gap fill — travel sentences"
      intro={<>Complete the sentences with <em>so</em>, <em>such</em> or <em>such a</em>.</>}
      image={airportCouple}
    />

    <SentenceCombining />
    <MatchingSection />

    <SectionShell icon={Gamepad2} number={8} title="Game 2 — so / such practice" intro="Another round of practice.">
      <WordwallEmbed src="https://wordwall.net/embed/5a41bebf075e4608beabdbcb9438be70?themeId=46&templateId=5&fontStackId=0" title="So or such quiz 2" />
    </SectionShell>

    <ChoiceSection
      image={drivingTest}
      imagePosition="right"
      imageAlt="A young person sitting in a car with their driving instructor, smiling happily and holding their driving licence after passing the test"
    />
    <KwtSection />

    <GapFill
      items={dialogueGaps}
      number={11}
      title="Dialogue — Jim &amp; Izzy"
      intro={<>Complete the conversation with <em>so</em> or <em>such</em>.</>}
      image={sofaCouple}
      imageAlt="A couple sitting on a sofa together in their living room and talking"
      imageSize="sm"
    />


    <SectionShell icon={MessagesSquare} number={12} title="Game 3 — match it up" intro="Match the sentence halves against the clock.">
      <WordwallEmbed src="https://wordwall.net/embed/ebc24a40f3ab47388cb94bf06008454d?themeId=1&templateId=2&fontStackId=0" title="So or such quiz 3" />
    </SectionShell>

    <PatternRecognition />
    <ListeningSection />
    <YourTurn />
    
  </div>
);

export default SoSuchLesson;
