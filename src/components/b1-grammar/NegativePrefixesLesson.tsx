import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CheckCircle2, XCircle, ExternalLink, RotateCcw } from 'lucide-react';
import { useActivityTracking } from '@/hooks/useActivityTracking';
import { ADD_PREFIX, SENTENCES, COMPLETE_WORDS, ARTICLE, WORDWALL, isPrefixAnswerCorrect } from '@/data/negativePrefixes';

const RULES = [
  { p: 'un-', use: 'adjectives, adverbs & verbs', ex: 'unhappy, unaware, unlock, unwrap' },
  { p: 'in-', use: 'adjectives (most common)', ex: 'inactive, indirect, insane' },
  { p: 'im-', use: 'before m or p', ex: 'impossible, impolite, immoral' },
  { p: 'il-', use: 'before l', ex: 'illegal, illogical' },
  { p: 'ir-', use: 'before r', ex: 'irregular, irresponsible, irrelevant' },
  { p: 'dis-', use: 'verbs, some adjectives & adverbs', ex: 'disappear, disagree, dishonestly' },
  { p: 'mis-', use: 'verbs = wrongly / badly', ex: 'misunderstand, mishear, misbehave' },
];

type Item = { label: React.ReactNode; answers: string[] };

const GapSet = ({ title, instructions, items }: { title: string; instructions: string; items: Item[] }) => {
  const [vals, setVals] = useState<string[]>(items.map(() => ''));
  const [checked, setChecked] = useState(false);
  const track = useActivityTracking();
  const score = items.filter((it, i) => isPrefixAnswerCorrect(vals[i], it.answers)).length;
  return (
    <Card className="service-card"><CardContent className="p-6 space-y-4">
      <h3 className="text-xl font-semibold font-merriweather text-foreground">{title}</h3>
      <p className="text-muted-foreground">{instructions}</p>
      <ol className="space-y-3">
        {items.map((it, i) => {
          const ok = isPrefixAnswerCorrect(vals[i], it.answers);
          return (
            <li key={i} className="flex flex-wrap items-center gap-2">
              <span className="font-semibold text-primary w-6">{i + 1}.</span>
              <span className="text-foreground">{it.label}</span>
              <Input value={vals[i]} aria-label={`${title} answer ${i + 1}`} autoComplete="off" spellCheck={false}
                aria-invalid={checked && !ok}
                className={`w-44 ${checked && !ok ? 'border-destructive' : ''}`}
                onChange={e => { const v = [...vals]; v[i] = e.target.value; setVals(v); setChecked(false); }} />
              {checked && (ok ? <CheckCircle2 className="h-5 w-5 text-primary" /> :
                <span className="flex items-center gap-1 text-sm text-destructive"><XCircle className="h-5 w-5" />{it.answers[0]}</span>)}
            </li>
          );
        })}
      </ol>
      <div className="flex flex-wrap items-center gap-3">
        <Button onClick={() => { setChecked(true); track({ activityTitle: `Negative Prefixes — ${title}`, activityType: 'gap-fill', score, total: items.length }); }}>Check answers</Button>
        <Button variant="outline" onClick={() => { setVals(items.map(() => '')); setChecked(false); }}><RotateCcw className="h-4 w-4 mr-1" />Reset</Button>
        {checked && <span className="font-semibold text-foreground">{score} / {items.length}</span>}
      </div>
    </CardContent></Card>
  );
};

const NegativePrefixesLesson = () => (
  <div className="space-y-8">
    <Card className="service-card"><CardContent className="p-6 space-y-4">
      <h3 className="text-xl font-semibold font-merriweather text-foreground">What are negative prefixes?</h3>
      <p className="text-foreground">A prefix goes at the <strong>start</strong> of a word and changes its meaning, usually to the opposite. Prefixes do <strong>not</strong> change the part of speech: <em>aware</em> (adj) → <em>unaware</em> (adj).</p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border border-border rounded-lg">
          <thead className="bg-muted"><tr><th className="p-2 text-left">Prefix</th><th className="p-2 text-left">Used with</th><th className="p-2 text-left">Examples</th></tr></thead>
          <tbody>{RULES.map(r => <tr key={r.p} className="border-t border-border"><td className="p-2 font-semibold text-primary">{r.p}</td><td className="p-2">{r.use}</td><td className="p-2 italic">{r.ex}</td></tr>)}</tbody>
        </table>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg bg-muted p-4"><p className="font-semibold mb-1">Common mistakes</p>
          <p>✗ You must <em>unconnect</em> the cables. ✓ <em>disconnect</em></p>
          <p>✗ He was expelled for <em>disbehaving</em>. ✓ <em>misbehaving</em></p></div>
        <div className="rounded-lg bg-muted p-4"><p className="font-semibold mb-1">Exam tip (FCE Use of English Part 3)</p>
          <p>Read the whole sentence: is the meaning positive or negative? If negative, you probably need a prefix — and maybe a suffix too (<em>success → unsuccessful</em>).</p></div>
      </div>
    </CardContent></Card>

    <GapSet title="1. Add a negative prefix" instructions="Write the opposite of each word."
      items={ADD_PREFIX.map(i => ({ label: <em>{i.base}</em>, answers: i.answers }))} />
    <GapSet title="2. Complete the sentences" instructions="Use the words you formed in exercise 1."
      items={SENTENCES.map(s => ({ label: s.text, answers: s.answers }))} />
    <GapSet title="3. Complete the words" instructions="Add un-, in-, im-, il-, ir-, dis- or mis- and type the full word."
      items={COMPLETE_WORDS.map(i => ({ label: <em>…{i.base}</em>, answers: i.answers }))} />
    <GapSet title="4. Lost in translation" instructions="Exam practice: form a word from the word in CAPITALS to complete the story."
      items={ARTICLE.map(a => ({ label: <>{a.before} <strong className="text-primary">({a.base})</strong></>, answers: a.answers }))} />

    <Card className="service-card"><CardContent className="p-6 space-y-3">
      <h3 className="text-xl font-semibold font-merriweather text-foreground">5. Wordwall games</h3>
      <div className="flex flex-wrap gap-3">
        {WORDWALL.map(w => <Button key={w.url} asChild variant="outline"><a href={w.url} target="_blank" rel="noopener noreferrer">{w.title}<ExternalLink className="h-4 w-4 ml-2" /></a></Button>)}
      </div>
    </CardContent></Card>
  </div>
);

export default NegativePrefixesLesson;
