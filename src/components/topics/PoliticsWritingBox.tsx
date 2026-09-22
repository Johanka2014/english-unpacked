import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

interface PoliticsWritingBoxProps {
  storageKey: string;
  model: string;
}

const PoliticsWritingBox = ({ storageKey, model }: PoliticsWritingBoxProps) => {
  const [text, setText] = useState(() => localStorage.getItem(storageKey) || '');
  const [showModel, setShowModel] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => localStorage.setItem(storageKey, text), 400);
    return () => clearTimeout(timer);
  }, [text, storageKey]);

  const words = text.trim() ? text.trim().split(/\s+/).length : 0;

  return (
    <div className="space-y-3">
      <Textarea
        rows={9}
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Write your essay here… (180–220 words)"
        className="min-h-[210px] text-base leading-relaxed bg-background"
        aria-label="Your opinion essay"
      />
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-xs text-muted-foreground">
          {words} word{words === 1 ? '' : 's'} · saved automatically
        </span>
        <div className="flex flex-wrap gap-2 sm:ml-auto">
          <Button variant="outline" size="sm" onClick={() => setShowModel((current) => !current)}>
            {showModel ? 'Hide model answer' : 'Show model answer'}
          </Button>
          <Button variant="ghost" size="sm" onClick={() => setText('')}>Clear</Button>
        </div>
      </div>
      {showModel && (
        <div className="rounded-md border border-primary/30 bg-primary/5 p-4 text-sm text-foreground">
          <p className="font-semibold text-primary mb-1">Model answer</p>
          <p className="leading-relaxed">{model}</p>
        </div>
      )}
    </div>
  );
};

export default PoliticsWritingBox;