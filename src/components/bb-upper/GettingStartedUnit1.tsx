import { useState, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RotateCcw } from 'lucide-react';
import handshakeImg from '@/assets/bb-upper-unit1-handshake.jpg';

const ITEMS = [
  'articles', 'complaints', 'enquiries', 'memos', 'proposals', 'reports',
  'meetings', 'negotiations', 'notes', 'telephoning',
  'applications', 'presentations', 'giving information', 'error correction', 'visits',
  'interviews', 'letters', 'emails',
];

const CATEGORIES = ['Writing', 'Reading', 'Speaking', 'Grammar', 'Listening'];

const GettingStartedUnit1 = () => {
  const [bank, setBank] = useState(() => [...ITEMS].sort(() => Math.random() - 0.5));
  const [columns, setColumns] = useState<Record<string, string[]>>(() => {
    const init: Record<string, string[]> = {};
    CATEGORIES.forEach((c) => (init[c] = []));
    return init;
  });
  const [draggedItem, setDraggedItem] = useState<string | null>(null);
  const [dragSource, setDragSource] = useState<string | null>(null);

  const handleDragStart = useCallback((item: string, source: string) => {
    setDraggedItem(item);
    setDragSource(source);
  }, []);

  const handleDropOnCategory = useCallback((catName: string) => {
    if (!draggedItem) return;
    // Remove from bank
    setBank((prev) => prev.filter((i) => i !== draggedItem));
    // Remove from any other category
    setColumns((prev) => {
      const updated = { ...prev };
      Object.keys(updated).forEach((key) => {
        updated[key] = updated[key].filter((i) => i !== draggedItem);
      });
      // Add to target (avoid duplicates)
      if (!updated[catName].includes(draggedItem)) {
        updated[catName] = [...updated[catName], draggedItem];
      }
      return updated;
    });
    setDraggedItem(null);
    setDragSource(null);
  }, [draggedItem]);

  const handleDropOnBank = useCallback(() => {
    if (!draggedItem || dragSource === 'bank') return;
    setColumns((prev) => {
      const updated = { ...prev };
      Object.keys(updated).forEach((key) => {
        updated[key] = updated[key].filter((i) => i !== draggedItem);
      });
      return updated;
    });
    setBank((prev) => prev.includes(draggedItem) ? prev : [...prev, draggedItem]);
    setDraggedItem(null);
    setDragSource(null);
  }, [draggedItem, dragSource]);

  const handleReset = () => {
    setBank([...ITEMS].sort(() => Math.random() - 0.5));
    setColumns(() => {
      const init: Record<string, string[]> = {};
      CATEGORIES.forEach((c) => (init[c] = []));
      return init;
    });
  };

  return (
    <div className="space-y-10">
      {/* Activity 1 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Activity 1</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-3 space-y-6">
              <p className="text-sm font-semibold text-foreground">
                <span className="text-primary font-bold mr-2">1</span>
                Work in pairs. Ask each other these questions.
              </p>

              <div className="bg-muted/40 rounded-lg border border-border p-5">
                <h3 className="text-lg font-bold text-foreground text-center mb-4">
                  What do you do?
                </h3>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded">
                      If you work…
                    </span>
                    <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                      <li>What do you do?</li>
                      <li>How long have you been doing your present job?</li>
                      <li>What qualifications and/or training have you had?</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded">
                      If you are a student…
                    </span>
                    <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                      <li>What are you studying?</li>
                      <li>What job would you like to do when you have finished?</li>
                      <li>What qualifications will you need?</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-border">
                  <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                    <li>What skills do you need/will you need for your job?</li>
                    <li>How do you/will you keep your skills up to date?</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 flex items-stretch">
              <img
                src={handshakeImg}
                alt="Two businesspeople smiling and shaking hands"
                className="rounded-lg shadow-md w-full object-cover"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Activity 2 – Drag & Drop Classification */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Activity 2</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <p className="text-sm font-semibold text-foreground mb-1">
              <span className="text-primary font-bold mr-2">2</span>
              Here are some practical things you will learn to do on this course.
            </p>
            <p className="text-sm text-muted-foreground">
              Classify them in the boxes below. Most can go in more than one box. Discuss your choices with a partner.
            </p>
          </div>

          {/* Word bank */}
          <div
            className="rounded-lg border-2 border-dashed border-primary/30 bg-primary/5 p-4 min-h-[60px]"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDropOnBank}
          >
            <h4 className="font-semibold text-sm text-muted-foreground mb-3">Word Bank</h4>
            <div className="flex flex-wrap gap-2">
              {bank.map((item) => (
                <span
                  key={item}
                  draggable
                  onDragStart={() => handleDragStart(item, 'bank')}
                  className="inline-block px-3 py-1.5 rounded-md bg-accent text-accent-foreground text-sm font-medium cursor-grab active:cursor-grabbing shadow-sm hover:shadow-md transition-shadow border border-border"
                >
                  {item}
                </span>
              ))}
              {bank.length === 0 && (
                <p className="text-xs text-muted-foreground italic">All items placed — drag items back here to rearrange.</p>
              )}
            </div>
          </div>

          {/* Category columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {CATEGORIES.map((cat) => (
              <div
                key={cat}
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => handleDropOnCategory(cat)}
                className="rounded-lg border-2 border-dashed border-border bg-muted/30 p-3 min-h-[160px] transition-colors hover:border-primary/40"
              >
                <h4 className="font-bold text-sm text-foreground mb-2 pb-2 border-b border-border">{cat}</h4>
                <div className="space-y-1.5">
                  {columns[cat].map((item) => (
                    <span
                      key={item}
                      draggable
                      onDragStart={() => handleDragStart(item, cat)}
                      className="block px-2 py-1 rounded bg-accent text-accent-foreground text-xs font-medium cursor-grab active:cursor-grabbing shadow-sm border border-border"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <Button variant="outline" size="sm" onClick={handleReset} className="gap-2">
            <RotateCcw className="h-3.5 w-3.5" /> Reset
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default GettingStartedUnit1;
