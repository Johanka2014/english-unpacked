import { useState } from 'react';
import { Check, RotateCcw, ImageOff, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useActivityTracking } from '@/hooks/useActivityTracking';
import { cn } from '@/lib/utils';
import { floorMatches, type MoversQuestion } from '@/data/moversData';

export function PendingMaterial({ listening = false, children }: { listening?: boolean; children: React.ReactNode }) {
  const Icon = listening ? Headphones : ImageOff;
  return <p className="flex items-center gap-2 text-sm text-muted-foreground border border-dashed border-border rounded-md p-4 my-4"><Icon className="h-5 w-5 shrink-0" />{children}</p>;
}

export function MoversTextExercise({ title, instruction, questions, bank, letters = false, numeric = false, children }: {
  title: string; instruction: string; questions: MoversQuestion[]; bank?: string[];
  letters?: boolean; numeric?: boolean; children?: React.ReactNode;
}) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);
  const track = useActivityTracking();
  const correct = (q: MoversQuestion) => (answers[q.id] ?? '').trim().toLowerCase() === q.answer;
  const score = questions.filter(correct).length;
  const reset = () => { setAnswers({}); setChecked(false); };
  return <section aria-label={title} className="py-8 border-b border-border">
    <h2 className="font-fredoka text-2xl font-semibold text-brand-navy mb-2">{title}</h2>
    <p className="text-muted-foreground mb-5">{instruction}</p>
    {children}
    {bank && <div className="flex flex-wrap gap-2 mb-5">{bank.map(word => <span key={word} className="bg-secondary text-secondary-foreground border border-border rounded-md px-4 py-2 font-semibold">{word}</span>)}</div>}
    <div className={cn('grid gap-4', letters ? 'sm:grid-cols-2 lg:grid-cols-5' : 'md:grid-cols-2')}>
      {questions.map((q, index) => <div key={q.id} className="bg-secondary/50 rounded-md p-4">
        <label className="flex flex-wrap items-center gap-2 text-lg" htmlFor={q.id}>
          <span className="text-sm text-muted-foreground w-5">{index + 1}.</span><span>{q.before}</span>
          <Input id={q.id} aria-label={`${title} answer ${index + 1}`} autoComplete="off" spellCheck={false}
            inputMode={numeric ? 'numeric' : 'text'} maxLength={letters ? 1 : undefined}
            className={cn('inline-block text-center text-lg h-11', letters ? 'w-12' : 'w-28', checked && (correct(q) ? 'movers-correct' : 'border-destructive bg-destructive/5'))}
            value={answers[q.id] ?? ''} onChange={e => { setAnswers(prev => ({ ...prev, [q.id]: e.target.value })); setChecked(false); }} />
          {q.after && <span>{q.after}</span>}
        </label>
        {checked && <p className={cn('mt-2 text-sm', correct(q) ? 'movers-success-text' : 'text-destructive')}>{correct(q) ? 'Correct' : `Answer: ${q.answer}`}</p>}
      </div>)}
    </div>
    <div className="flex flex-wrap items-center gap-3 mt-6">
      <Button onClick={() => { setChecked(true); track({ activityTitle: `Movers — ${title}`, activityType: letters ? 'spelling' : 'type-blanks', score, total: questions.length }); }}><Check className="h-4 w-4 mr-2" />Check answers</Button>
      <Button variant="outline" onClick={reset}><RotateCcw className="h-4 w-4 mr-2" />Try again</Button>
      <p role="status" className="font-semibold">{checked ? `${score} / ${questions.length} correct${score === questions.length ? ' — Excellent!' : ''}` : ''}</p>
    </div>
  </section>;
}

export function MoversFloorMatch() {
  const [placed, setPlaced] = useState<Record<string, string>>({});
  const [selected, setSelected] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);
  const track = useActivityTracking();
  const place = (floor: string, item: string) => {
    if (!floorMatches.some(match => match.id === item)) return;
    setPlaced(prev => Object.fromEntries([...Object.entries(prev).filter(([key, value]) => key !== floor && value !== item), [floor, item]]));
    setSelected(null); setChecked(false);
  };
  const score = floorMatches.filter(match => placed[match.id] === match.id).length;
  return <section aria-label="Who is on which floor?" className="py-8 border-b border-border">
    <h2 className="font-fredoka text-2xl font-semibold text-brand-navy">Who is on which floor?</h2>
    <PendingMaterial>The building picture is awaiting upload. This matching task will be ready with the picture.</PendingMaterial>
    <fieldset disabled className="opacity-60">
      <div className="flex flex-wrap gap-2 mb-5">{[...floorMatches].reverse().filter(m => !Object.values(placed).includes(m.id)).map(m => <Button key={m.id} draggable variant={selected === m.id ? 'default' : 'outline'} aria-pressed={selected === m.id} onClick={() => setSelected(m.id)} onDragStart={e => e.dataTransfer.setData('text/plain', m.id)}>{m.item}</Button>)}</div>
      <div className="grid md:grid-cols-2 gap-3">{floorMatches.map(m => <div key={m.id} className="flex items-center gap-3">
        <span className="w-36 shrink-0 font-medium">{m.floor}</span>
        <Button variant="outline" aria-label={`Match ${m.floor}`} className={cn('h-auto min-h-12 flex-1 border-dashed whitespace-normal', checked && (placed[m.id] === m.id ? 'movers-correct' : 'border-destructive'))}
          onDragOver={e => e.preventDefault()} onDrop={e => { e.preventDefault(); place(m.id, e.dataTransfer.getData('text/plain')); }}
          onClick={() => { if (selected) place(m.id, selected); else { setPlaced(prev => { const next = { ...prev }; delete next[m.id]; return next; }); setChecked(false); } }}>
          {floorMatches.find(item => item.id === placed[m.id])?.item ?? '—'}
        </Button>
        {checked && placed[m.id] !== m.id && <span className="text-sm text-destructive">{m.item}</span>}
      </div>)}</div>
      <div className="flex flex-wrap items-center gap-3 mt-6"><Button onClick={() => { setChecked(true); track({ activityTitle: 'Movers — Floors', activityType: 'matching', score, total: floorMatches.length }); }}><Check className="h-4 w-4 mr-2" />Check answers</Button><Button variant="outline" onClick={() => { setPlaced({}); setSelected(null); setChecked(false); }}><RotateCcw className="h-4 w-4 mr-2" />Reset</Button><p role="status">{checked && `${score} / 6 correct`}</p></div>
    </fieldset>
  </section>;
}