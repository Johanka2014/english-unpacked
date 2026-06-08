import { Card, CardContent } from '@/components/ui/card';
import { Headphones } from 'lucide-react';

interface EngineeringAudioProps {
  track: string; // e.g. "1.1"
  title?: string;
}

const EngineeringAudio = ({ track, title }: EngineeringAudioProps) => (
  <Card className="bg-muted/40 border-dashed">
    <CardContent className="p-4 flex items-center gap-3">
      <div className="p-2 rounded-lg bg-primary/10 text-primary">
        <Headphones className="h-5 w-5" />
      </div>
      <div className="flex-1">
        <div className="text-sm font-semibold text-foreground">
          ▶ Audio {track}{title ? ` — ${title}` : ''}
        </div>
        <p className="text-xs text-muted-foreground mt-0.5">
          🎧 Audio coming soon. Work through the printed prompts below in the meantime.
        </p>
        <audio controls className="w-full mt-2 opacity-60" aria-disabled>
          <source src="" />
        </audio>
      </div>
    </CardContent>
  </Card>
);

export default EngineeringAudio;
