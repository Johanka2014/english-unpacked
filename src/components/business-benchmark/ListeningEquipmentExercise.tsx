import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import audioAsset from "@/assets/bb-preint-mod5-track6.mp3.asset.json";
import EquipmentActivity from "./EquipmentActivity";

const QUESTIONS = [
  { id: "l1", prompt: "Which speaker is describing a real tool?", options: ["Speaker 1", "Speaker 2", "Speaker 3"], answer: "Speaker 2", hint: "It is used to hold two pieces of metal together temporarily." },
  { id: "l2", prompt: "What industry is the real tool used in?", options: ["Construction", "Aircraft manufacturing", "Food production"], answer: "Aircraft manufacturing" },
  { id: "l3", prompt: "What does the tool do?", options: ["Measures a curve", "Makes a permanent weld", "Fits a temporary rivet"], answer: "Fits a temporary rivet" },
  { id: "l4", prompt: "Which phrase means 'not permanent'?", options: ["temporary", "circular", "flexible"], answer: "temporary" },
  { id: "l5", prompt: "Why do all three descriptions sound possible?", options: ["They use precise language for parts, shape and purpose", "They name the object immediately", "They only describe its colour"], answer: "They use precise language for parts, shape and purpose" },
];

const ListeningEquipmentExercise = () => (
  <div className="space-y-8">
    <Card>
      <CardHeader><CardTitle className="font-serif text-xl">Track 6 — The gizmo game</CardTitle></CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">Three people describe the same unfamiliar object. Two invent a purpose; one tells the truth. Listen first without reading.</p>
        <audio controls preload="metadata" className="w-full"><source src={audioAsset.url} type="audio/mpeg" />Your browser does not support audio playback.</audio>
        <Accordion type="single" collapsible>
          <AccordionItem value="transcript"><AccordionTrigger>Show transcript summary</AccordionTrigger><AccordionContent className="space-y-3 text-sm">
            <p><strong>Speaker 1</strong> describes the object by its handle, metal body and moving parts, then invents a possible use.</p>
            <p><strong>Speaker 2</strong> says it is used in aircraft manufacturing. It puts a temporary rivet into two sheets of metal so they stay together before permanent fixing.</p>
            <p><strong>Speaker 3</strong> gives another convincing but invented explanation, using shape, material and purpose language.</p>
          </AccordionContent></AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
    <EquipmentActivity title="Listen for purpose and detail" instructions="Choose the best answer. The exact name matters less than understanding what the object is for." questions={QUESTIONS} activityType="listening" />
    <Card><CardHeader><CardTitle className="font-serif text-xl">Useful listening language</CardTitle></CardHeader><CardContent className="grid gap-3 sm:grid-cols-2 text-sm"><p className="rounded-md bg-muted p-3"><strong>Parts:</strong> It has a handle / lever / metal ring.</p><p className="rounded-md bg-muted p-3"><strong>Purpose:</strong> It’s used for holding / fixing / cutting…</p><p className="rounded-md bg-muted p-3"><strong>Operation:</strong> You press / pull / fit it onto…</p><p className="rounded-md bg-muted p-3"><strong>Uncertainty:</strong> It looks like… / It could be…</p></CardContent></Card>
  </div>
);

export default ListeningEquipmentExercise;