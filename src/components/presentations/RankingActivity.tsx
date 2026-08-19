import { useState, useCallback } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RotateCcw, GripVertical, ArrowUp, ArrowDown } from 'lucide-react';

interface RankingActivityProps {
  title: string;
  description: string;
  items: string[];
  topLabel?: string;
  bottomLabel?: string;
}

const RankingActivity = ({ title, description, items, topLabel, bottomLabel }: RankingActivityProps) => {
  const [order, setOrder] = useState<string[]>(() => [...items]);
  const [dragIdx, setDragIdx] = useState<number | null>(null);

  const move = useCallback((from: number, to: number) => {
    if (to < 0 || to >= items.length || from === to) return;
    setOrder((prev) => {
      const updated = [...prev];
      const [moved] = updated.splice(from, 1);
      updated.splice(to, 0, moved);
      return updated;
    });
  }, [items.length]);

  const handleDragOver = useCallback((e: React.DragEvent, idx: number) => {
    e.preventDefault();
    if (dragIdx === null || dragIdx === idx) return;
    move(dragIdx, idx);
    setDragIdx(idx);
  }, [dragIdx, move]);

  return (
    <Card className="service-card p-0">
      <CardContent className="p-4 sm:p-6 space-y-4">
        <div>
          <h3 className="text-lg sm:text-2xl font-semibold mb-2 font-merriweather text-foreground">{title}</h3>
          <p className="text-muted-foreground text-sm sm:text-base">{description}</p>
        </div>

        <p className="text-xs text-muted-foreground italic">
          Drag the cards (or use the arrows) to reorder them{topLabel ? ` — ${topLabel} at the top` : ''}
          {bottomLabel ? `, ${bottomLabel} at the bottom` : ''}.
        </p>

        <ul className="space-y-2">
          {order.map((item, idx) => (
            <li
              key={item}
              draggable
              onDragStart={() => setDragIdx(idx)}
              onDragOver={(e) => handleDragOver(e, idx)}
              onDragEnd={() => setDragIdx(null)}
              className={`flex items-center gap-3 px-3 py-3 rounded-lg border bg-card text-card-foreground shadow-sm cursor-grab active:cursor-grabbing transition-all ${
                dragIdx === idx ? 'ring-2 ring-primary/40' : 'hover:shadow-md'
              }`}
            >
              <span className="text-xs font-bold text-primary w-5 text-center shrink-0">{idx + 1}</span>
              <GripVertical className="h-4 w-4 text-muted-foreground shrink-0" aria-hidden="true" />
              <span className="text-sm text-foreground flex-1">{item}</span>
              <span className="flex gap-1 shrink-0">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7"
                  aria-label={`Move "${item}" up`}
                  disabled={idx === 0}
                  onClick={() => move(idx, idx - 1)}
                >
                  <ArrowUp className="h-3.5 w-3.5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7"
                  aria-label={`Move "${item}" down`}
                  disabled={idx === order.length - 1}
                  onClick={() => move(idx, idx + 1)}
                >
                  <ArrowDown className="h-3.5 w-3.5" />
                </Button>
              </span>
            </li>
          ))}
        </ul>

        <Button variant="outline" size="sm" className="gap-2" onClick={() => setOrder([...items])}>
          <RotateCcw className="h-3.5 w-3.5" /> Reset order
        </Button>
      </CardContent>
    </Card>
  );
};

export default RankingActivity;
