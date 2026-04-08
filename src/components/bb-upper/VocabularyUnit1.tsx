import { useState, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RotateCcw, GripVertical } from 'lucide-react';

const BENEFITS = [
  'A bonus scheme',
  'Responsibility',
  'A high salary',
  'An in-house training scheme',
  'The opportunity to travel',
  'A permanent contract',
  'Long holidays',
  'Rapid promotion',
];

const USEFUL_LANGUAGE = [
  'I think …… would be the most attractive because …… .',
  "I'm not sure about that. For me, …… would be more useful than …… because …… .",
  "Perhaps you're right. And I don't think …… is as important as …… .",
];

const VocabularyUnit1 = () => {
  const [items, setItems] = useState(() => [...BENEFITS]);
  const [dragIdx, setDragIdx] = useState<number | null>(null);

  const handleDragStart = useCallback((idx: number) => {
    setDragIdx(idx);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent, idx: number) => {
    e.preventDefault();
    if (dragIdx === null || dragIdx === idx) return;
    setItems((prev) => {
      const updated = [...prev];
      const [moved] = updated.splice(dragIdx, 1);
      updated.splice(idx, 0, moved);
      return updated;
    });
    setDragIdx(idx);
  }, [dragIdx]);

  const handleDragEnd = useCallback(() => {
    setDragIdx(null);
  }, []);

  const handleReset = () => {
    setItems([...BENEFITS]);
    setDragIdx(null);
  };

  return (
    <div className="space-y-10">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Activity 1</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Left – ranking activity (60%) */}
            <div className="md:col-span-3 space-y-5">
              <div>
                <p className="text-sm font-semibold text-foreground mb-2">
                  <span className="text-primary font-bold mr-2">1</span>
                  Work in pairs. Look at these benefits of working for a company and discuss the following.
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-4">
                  <li>Which benefits do you think would be most attractive to someone who has just finished their studies and is looking for their first job?</li>
                  <li>Put the benefits in order from the most attractive to the least attractive.</li>
                </ul>
              </div>

              <p className="text-xs text-muted-foreground italic">Drag items to reorder from most attractive (top) to least attractive (bottom).</p>

              <div className="space-y-2">
                {items.map((item, idx) => (
                  <div
                    key={item}
                    draggable
                    onDragStart={() => handleDragStart(idx)}
                    onDragOver={(e) => handleDragOver(e, idx)}
                    onDragEnd={handleDragEnd}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg border bg-card text-card-foreground shadow-sm cursor-grab active:cursor-grabbing transition-all ${
                      dragIdx === idx ? 'ring-2 ring-primary/40 scale-[1.02]' : 'hover:shadow-md'
                    }`}
                  >
                    <span className="text-xs font-bold text-primary w-5 text-center">{idx + 1}</span>
                    <GripVertical className="h-4 w-4 text-muted-foreground shrink-0" />
                    <span className="text-sm font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <Button variant="outline" size="sm" onClick={handleReset} className="gap-2">
                <RotateCcw className="h-3.5 w-3.5" /> Reset
              </Button>
            </div>

            {/* Right – useful language (40%) */}
            <div className="md:col-span-2 flex flex-col gap-6">
              <div className="rounded-xl border border-primary/20 bg-primary/5 p-5 space-y-4">
                <h3 className="text-lg font-bold text-foreground">Useful language</h3>
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Giving opinions: agreeing and disagreeing</h4>
                  <ul className="space-y-2">
                    {USEFUL_LANGUAGE.map((phrase, i) => (
                      <li key={i} className="text-sm text-muted-foreground italic">{phrase}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Activity 2 */}
          <div className="mt-8 pt-6 border-t border-border">
            <p className="text-sm font-semibold text-foreground">
              <span className="text-primary font-bold mr-2">2</span>
              Change partners and summarise what the attractions of a company training scheme would be for a new member of staff.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VocabularyUnit1;
