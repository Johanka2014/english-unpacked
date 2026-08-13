import { Card, CardContent } from '@/components/ui/card';
import { Headphones } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface Props {
  src: string;
  label?: string;
  transcript?: string[];
}

const AudioWithTranscript = ({ src, label, transcript }: Props) => (
  <Card className="bg-muted/40">
    <CardContent className="p-4 sm:p-5">
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 rounded-lg bg-primary/10 text-primary">
          <Headphones className="h-5 w-5" />
        </div>
        <span className="text-sm font-semibold text-foreground">{label || 'Listen'}</span>
      </div>
      <audio controls preload="none" src={src} className="w-full">
        Your browser does not support the audio element.
      </audio>
      {transcript && transcript.length > 0 && (
        <Accordion type="single" collapsible className="mt-2">
          <AccordionItem value="transcript" className="border-b-0">
            <AccordionTrigger className="text-sm py-2">Show transcript</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2 text-sm text-foreground leading-relaxed">
                {transcript.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )}
    </CardContent>
  </Card>
);

export default AudioWithTranscript;
