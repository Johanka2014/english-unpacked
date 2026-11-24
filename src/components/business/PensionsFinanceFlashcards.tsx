import { useState } from 'react';
import { ArrowLeft, ArrowRight, RotateCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PENSION_FLASHCARDS } from '@/data/pensionsFinance';

interface Props {
  onStartExercises: () => void;
}

const PensionsFinanceFlashcards = ({ onStartExercises }: Props) => {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const card = PENSION_FLASHCARDS[index] ?? PENSION_FLASHCARDS[0];

  const move = (delta: number) => {
    setFlipped(false);
    setIndex((prev) => (prev + delta + PENSION_FLASHCARDS.length) % PENSION_FLASHCARDS.length);
  };

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span className="font-medium">
          Card {index + 1} of {PENSION_FLASHCARDS.length}
        </span>
        <span className="inline-flex items-center gap-1.5 text-brand-royal font-medium">
          <RotateCw className="h-3.5 w-3.5" /> Tap card to flip
        </span>
      </div>

      <button
        type="button"
        onClick={() => setFlipped((f) => !f)}
        aria-label={flipped ? 'Show term' : 'Show definition and hint'}
        className="w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-2xl"
      >
        {!flipped ? (
          <div className="min-h-[260px] rounded-2xl border border-border bg-card shadow-md p-8 flex flex-col items-center justify-center text-center">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Term</p>
            <h2 className="text-2xl sm:text-3xl font-bold font-merriweather text-foreground">
              {card.term}
            </h2>
            <p className="text-sm text-muted-foreground mt-6">Click to reveal definition &amp; hint</p>
          </div>
        ) : (
          <div className="min-h-[260px] rounded-2xl bg-brand-navy text-white shadow-md p-8 flex flex-col items-center justify-center text-center">
            <p className="text-xs uppercase tracking-widest text-white/70 mb-3">{card.term}</p>
            <p className="text-lg sm:text-xl font-medium leading-relaxed text-white">
              {card.definition}
            </p>
            <div className="mt-6 pt-4 border-t border-white/20 w-full">
              <p className="text-xs uppercase tracking-widest text-white/70 mb-1">Hint</p>
              <p className="text-sm italic text-white/90">{card.hint}</p>
            </div>
          </div>
        )}
      </button>

      <div className="flex items-center justify-between gap-3">
        <Button variant="outline" onClick={() => move(-1)} className="flex-1 gap-2">
          <ArrowLeft className="h-4 w-4" /> Previous
        </Button>
        <Button variant="outline" onClick={() => move(1)} className="flex-1 gap-2">
          Next <ArrowRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="text-center pt-2">
        <Button onClick={onStartExercises} className="gap-2">
          Start Section A: Pensions <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default PensionsFinanceFlashcards;