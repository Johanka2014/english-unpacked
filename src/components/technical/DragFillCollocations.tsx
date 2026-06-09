import { useState, useMemo, useCallback } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RotateCcw, Shuffle, CheckCircle2, XCircle } from 'lucide-react';
import type { FillBlanksItem } from '@/data/engineeringData';

interface Props {
  title: string;
  body?: string;
  blanks: FillBlanksItem[];
}

const shuffle = <T,>(arr: T[], seed: number): T[] => {
  const a = [...arr];
  let s = seed || 1;
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const DragFillCollocations = ({ title, body, blanks }: Props) => {
  const [seed, setSeed] = useState(() => Math.floor(Math.random() * 10000) + 1);
  const [filled, setFilled] = useState<Record<number, string | null>>({});
  const [results, setResults] = useState<Record<number, 'correct' | 'incorrect' | null>>({});
  const [dragged, setDragged] = useState<{ word: string; from: 'bank' | number } | null>(null);

  const allWords = useMemo(() => shuffle(blanks.map((b) => b.answer), seed), [blanks, seed]);

  const placedWords = useMemo(() => new Set(Object.values(filled).filter(Boolean) as string[]), [filled]);
  const bank = allWords.filter((w) => !placedWords.has(w));

  const handleDrop = useCallback(
    (gapIdx: number) => {
      if (!dragged) return;
      setFilled((prev) => {
        const next = { ...prev };
        // if word coming from another gap, clear it
        if (typeof dragged.from === 'number') next[dragged.from] = null;
        next[gapIdx] = dragged.word;
        return next;
      });
      setResults((r) => ({ ...r, [gapIdx]: null }));
      setDragged(null);
    },
    [dragged],
  );

  const handleDropOnBank = useCallback(() => {
    if (!dragged || dragged.from === 'bank') return;
    setFilled((prev) => ({ ...prev, [dragged.from as number]: null }));
    setResults((r) => ({ ...r, [dragged.from as number]: null }));
    setDragged(null);
  }, [dragged]);

  const check = () => {
    const r: Record<number, 'correct' | 'incorrect'> = {};
    blanks.forEach((b, i) => {
      r[i] = (filled[i] || '').toLowerCase() === b.answer.toLowerCase() ? 'correct' : 'incorrect';
    });
    setResults(r);
  };

  const reset = () => {
    setFilled({});
    setResults({});
  };

  const reshuffle = () => {
    setSeed((s) => s + 1);
    reset();
  };

  // Click-to-place fallback for touch / accessibility
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const handleWordClick = (word: string) => {
    setSelectedWord((s) => (s === word ? null : word));
  };
  const handleGapClick = (gapIdx: number) => {
    if (selectedWord) {
      setFilled((prev) => {
        const next = { ...prev };
        // remove from any other gap
        Object.keys(next).forEach((k) => {
          if (next[Number(k)] === selectedWord) next[Number(k)] = null;
        });
        next[gapIdx] = selectedWord;
        return next;
      });
      setResults((r) => ({ ...r, [gapIdx]: null }));
      setSelectedWord(null);
    } else if (filled[gapIdx]) {
      setFilled((prev) => ({ ...prev, [gapIdx]: null }));
      setResults((r) => ({ ...r, [gapIdx]: null }));
    }
  };

  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
        {body && <p className="text-muted-foreground mb-4 text-sm">{body}</p>}
        <p className="text-xs text-muted-foreground mb-3 italic">
          Drag a collocation onto a gap, or tap a word and then tap the gap.
        </p>

        <div
          className="flex flex-wrap gap-2 bg-primary/5 border border-primary/20 p-4 rounded-lg mb-6"
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDropOnBank}
        >
          {bank.length === 0 ? (
            <span className="text-sm italic text-muted-foreground">All collocations placed.</span>
          ) : (
            bank.map((word) => (
              <button
                key={word}
                draggable
                onDragStart={() => setDragged({ word, from: 'bank' })}
                onClick={() => handleWordClick(word)}
                className={`px-3 py-1.5 rounded-md border bg-card text-sm font-medium cursor-grab active:cursor-grabbing transition-all ${
                  selectedWord === word ? 'ring-2 ring-primary border-primary' : 'border-border hover:shadow-sm'
                }`}
              >
                {word}
              </button>
            ))
          )}
        </div>

        <div className="space-y-3">
          {blanks.map((b, i) => {
            const parts = b.prompt.split('___');
            const word = filled[i];
            const result = results[i];
            return (
              <div key={i} className="flex items-start gap-2 text-foreground leading-relaxed">
                <span className="flex-1">
                  {parts.map((p, pi) => (
                    <span key={pi}>
                      {p}
                      {pi < parts.length - 1 && (
                        <span
                          onDragOver={(e) => e.preventDefault()}
                          onDrop={() => handleDrop(i)}
                          onClick={() => handleGapClick(i)}
                          className={`inline-block min-w-[140px] mx-1 px-2 py-1 align-middle border-2 border-dashed rounded cursor-pointer transition-colors ${
                            result === 'correct'
                              ? 'border-green-500 bg-green-50 dark:bg-green-950/30'
                              : result === 'incorrect'
                              ? 'border-red-500 bg-red-50 dark:bg-red-950/30'
                              : 'border-primary/40 bg-background hover:bg-primary/5'
                          }`}
                        >
                          {word ? (
                            <span
                              draggable
                              onDragStart={(e) => {
                                e.stopPropagation();
                                setDragged({ word, from: i });
                              }}
                              className="font-medium cursor-grab active:cursor-grabbing"
                            >
                              {word}
                            </span>
                          ) : (
                            <span className="text-muted-foreground/60 text-xs">drop here</span>
                          )}
                        </span>
                      )}
                    </span>
                  ))}
                </span>
                {result === 'correct' && <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />}
                {result === 'incorrect' && <XCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />}
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          <Button onClick={check} className="bg-primary">Check answers</Button>
          <Button variant="outline" onClick={reset} className="gap-2">
            <RotateCcw className="h-4 w-4" /> Reset
          </Button>
          <Button variant="outline" onClick={reshuffle} className="gap-2">
            <Shuffle className="h-4 w-4" /> Shuffle
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default DragFillCollocations;
