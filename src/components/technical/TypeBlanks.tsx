import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, XCircle, RotateCcw } from 'lucide-react';
import type { FillBlanksItem } from '@/data/engineeringData';

interface Props {
  title: string;
  body?: string;
  blanks: FillBlanksItem[];
}

// Splits a prompt like "...is known as a b___." into
// { before: "...is known as a ", hint: "b", after: "." }
// Falls back to plain ___ if no leading letter is found.
const parsePrompt = (prompt: string) => {
  const match = prompt.match(/([a-zA-Z])(_{2,})/);
  if (match && match.index !== undefined) {
    return {
      before: prompt.slice(0, match.index),
      hint: match[1],
      after: prompt.slice(match.index + match[0].length),
    };
  }
  const idx = prompt.indexOf('___');
  if (idx !== -1) {
    return { before: prompt.slice(0, idx), hint: '', after: prompt.slice(idx + 3) };
  }
  return { before: prompt, hint: '', after: '' };
};

const TypeBlanks = ({ title, body, blanks }: Props) => {
  const [values, setValues] = useState<Record<number, string>>({});
  const [results, setResults] = useState<Record<number, 'correct' | 'incorrect' | null>>({});

  const check = () => {
    const r: Record<number, 'correct' | 'incorrect'> = {};
    blanks.forEach((b, i) => {
      const parsed = parsePrompt(b.prompt);
      const typed = (values[i] || '').trim().toLowerCase();
      // Accept either the full word, or just the part after the hint letter.
      const expectedFull = b.answer.toLowerCase();
      const expectedRest = parsed.hint
        ? expectedFull.startsWith(parsed.hint.toLowerCase())
          ? expectedFull.slice(1)
          : expectedFull
        : expectedFull;
      r[i] = typed === expectedFull || typed === expectedRest ? 'correct' : 'incorrect';
    });
    setResults(r);
  };

  const reset = () => {
    setValues({});
    setResults({});
  };

  const phraseBank = blanks.map((b) => b.answer);

  const insertPhrase = (phrase: string) => {
    const active = document.activeElement as HTMLInputElement | null;
    if (active && active.tagName === 'INPUT' && active.dataset.blankIndex) {
      const idx = Number(active.dataset.blankIndex);
      setValues((v) => ({ ...v, [idx]: phrase }));
      setResults((r) => ({ ...r, [idx]: null }));
      active.blur();
    }
  };

  return (
    <Card>
      <CardContent className="p-4 sm:p-6">
        <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
        {body && <p className="text-muted-foreground mb-4 text-sm">{body}</p>}

        <div className="mb-4">
          <p className="text-xs font-medium text-muted-foreground mb-2">Phrase bank — click a phrase to use it:</p>
          <div className="flex flex-wrap gap-2">
            {phraseBank.map((phrase, i) => (
              <button
                key={i}
                type="button"
                onClick={() => insertPhrase(phrase)}
                className="flex-1 min-w-[140px] max-w-full px-3 py-2 text-sm rounded-md border border-primary/30 bg-primary/10 text-primary hover:bg-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors text-left whitespace-normal break-words"
              >
                {phrase}
              </button>
            ))}
          </div>
        </div>

        <p className="text-xs text-muted-foreground mb-4 italic">
          The first letter is given. Type the rest of the word in the box.
        </p>

        <div className="space-y-3">
          {blanks.map((b, i) => {
            const { before, hint, after } = parsePrompt(b.prompt);
            const result = results[i];
            return (
              <div key={i} className="flex items-start gap-2 text-foreground leading-relaxed">
                <span className="flex-1">
                  {before}
                  {hint && <span className="font-semibold">{hint}</span>}
                  <input
                    type="text"
                    data-blank-index={i}
                    value={values[i] || ''}
                    onChange={(e) => {
                      setValues((v) => ({ ...v, [i]: e.target.value }));
                      setResults((r) => ({ ...r, [i]: null }));
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') check();
                    }}
                    className={`mx-1 inline-block px-2 py-0.5 min-w-[120px] border-b-2 bg-background outline-none transition-colors ${
                      result === 'correct'
                        ? 'border-green-500 text-green-700 dark:text-green-400'
                        : result === 'incorrect'
                        ? 'border-red-500 text-red-700 dark:text-red-400'
                        : 'border-primary/40 focus:border-primary'
                    }`}
                    aria-label={`Answer ${i + 1}`}
                  />
                  {after}
                </span>
                {result === 'correct' && <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />}
                {result === 'incorrect' && (
                  <span className="flex items-center gap-1 shrink-0 mt-0.5">
                    <XCircle className="h-5 w-5 text-red-600" />
                    <span className="text-xs text-red-600">{b.answer}</span>
                  </span>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          <Button onClick={check} className="bg-primary">Check answers</Button>
          <Button variant="outline" onClick={reset} className="gap-2">
            <RotateCcw className="h-4 w-4" /> Reset
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TypeBlanks;
