import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Headphones, ChevronDown, ChevronUp } from 'lucide-react';

interface Props {
  track: string;
  title?: string;
  script?: string[];
}

const TechTalkAudio = ({ track, title, script }: Props) => {
  const [show, setShow] = useState(false);
  return (
    <Card className="bg-muted/40 border-dashed">
      <CardContent className="p-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10 text-primary">
            <Headphones className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-semibold text-foreground">
              ▶ Audio {track}{title ? ` — ${title}` : ''}
            </div>
            <p className="text-xs text-muted-foreground mt-0.5">
              🎧 Audio coming soon. Work through the printed prompts in the meantime.
            </p>
            <audio controls className="w-full mt-2 opacity-60" aria-disabled>
              <source src="" />
            </audio>
          </div>
        </div>
        {script && script.length > 0 && (
          <div className="mt-3 pt-3 border-t border-border/50">
            <Button variant="ghost" size="sm" className="gap-1 h-7" onClick={() => setShow(s => !s)}>
              {show ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
              {show ? 'Hide audio script' : 'Show audio script'}
            </Button>
            {show && (
              <div className="mt-2 space-y-2 text-sm text-foreground bg-background/60 rounded-lg p-3">
                {script.map((line, i) => <p key={i}>{line}</p>)}
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TechTalkAudio;
