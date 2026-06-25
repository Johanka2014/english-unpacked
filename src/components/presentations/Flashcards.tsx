import { useMemo, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, RotateCcw, Shuffle, Eye } from 'lucide-react';

export interface FlashcardItem {
  term: string;
  definition: string;
  example?: string;
}

interface Props {
  title: string;
  description?: string;
  cards: FlashcardItem[];
}

const shuffleArray = <T,>(arr: T[]): T[] => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const Flashcards = ({ title, description, cards }: Props) => {
  const [order, setOrder] = useState<FlashcardItem[]>(() => cards);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const current = order[index];
  const total = order.length;
  const progress = useMemo(() => `${index + 1} / ${total}`, [index, total]);

  const next = () => {
    setFlipped(false);
    setIndex((i) => (i + 1) % total);
  };
  const prev = () => {
    setFlipped(false);
    setIndex((i) => (i - 1 + total) % total);
  };
  const shuffle = () => {
    setOrder(shuffleArray(cards));
    setIndex(0);
    setFlipped(false);
  };
  const reset = () => {
    setOrder(cards);
    setIndex(0);
    setFlipped(false);
  };

  return (
    <Card className="service-card">
      <CardContent className="p-6">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="text-2xl font-semibold font-merriweather text-foreground">{title}</h3>
          <span className="text-sm text-muted-foreground shrink-0 mt-1">{progress}</span>
        </div>
        {description && <p className="text-muted-foreground mb-4 text-sm">{description}</p>}

        <button
          type="button"
          onClick={() => setFlipped((f) => !f)}
          className="group relative w-full min-h-[220px] rounded-xl border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10 hover:from-primary/10 hover:to-primary/20 transition-all p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md"
          aria-label="Flip flashcard"
        >
          {!flipped ? (
            <>
              <span className="text-xs uppercase tracking-wider text-primary/70 mb-3">Term</span>
              <span className="text-3xl md:text-4xl font-bold text-foreground font-merriweather">
                {current.term}
              </span>
              <span className="mt-6 inline-flex items-center gap-1 text-xs text-muted-foreground">
                <Eye className="h-3.5 w-3.5" /> Click to reveal definition
              </span>
            </>
          ) : (
            <>
              <span className="text-xs uppercase tracking-wider text-primary/70 mb-3">Definition</span>
              <span className="text-lg md:text-xl text-foreground leading-relaxed max-w-xl">
                {current.definition}
              </span>
              {current.example && (
                <span className="mt-4 text-sm italic text-muted-foreground max-w-xl">
                  e.g. {current.example}
                </span>
              )}
            </>
          )}
        </button>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-2">
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={prev} className="gap-1">
              <ArrowLeft className="h-4 w-4" /> Prev
            </Button>
            <Button size="sm" onClick={next} className="gap-1">
              Next <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="sm" onClick={shuffle} className="gap-1">
              <Shuffle className="h-4 w-4" /> Shuffle
            </Button>
            <Button variant="ghost" size="sm" onClick={reset} className="gap-1">
              <RotateCcw className="h-4 w-4" /> Reset
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Flashcards;
