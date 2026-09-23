import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Settings, Users } from "lucide-react";

const OBJECTS = [
  { answer: "USB-C hub", clue: "It’s a small rectangular device with several ports. It’s made of metal or plastic and is used for connecting a laptop to screens and other devices." },
  { answer: "wireless charger", clue: "It’s a flat circular or rectangular object. You put a phone on top of it to charge the battery without a cable." },
  { answer: "hole punch", clue: "It has a metal lever and a base. You press the top down to make two holes in paper." },
  { answer: "webcam", clue: "It’s a small camera that fits above a screen. It’s used for video calls." },
  { answer: "noise-cancelling headset", clue: "You wear it over your ears. It has a microphone and reduces background sound during calls." },
  { answer: "portable SSD", clue: "It’s a small, light rectangular device used for storing and transferring large files securely." },
];

const SpeakingEquipmentExercise = () => (
  <div className="space-y-8">
    <Card><CardHeader><CardTitle className="flex items-center gap-2 font-serif text-xl"><MessageCircle className="h-5 w-5 text-primary" />Describe an object when you don’t know its name</CardTitle></CardHeader><CardContent className="grid gap-3 sm:grid-cols-2 text-sm"><p className="rounded-md bg-muted p-3"><strong>Parts:</strong> It has a handle / button / cable / cover…</p><p className="rounded-md bg-muted p-3"><strong>Shape:</strong> It’s rectangular / circular / curved…</p><p className="rounded-md bg-muted p-3"><strong>Material:</strong> It’s made of metal / plastic / rubber…</p><p className="rounded-md bg-muted p-3"><strong>Purpose:</strong> It’s used for cutting / connecting / storing…</p><p className="rounded-md bg-muted p-3"><strong>How it works:</strong> You press / plug in / slide / attach…</p><p className="rounded-md bg-muted p-3"><strong>Clarifying:</strong> Do you mean…? / Is it the thing that…?</p></CardContent></Card>
    <Card><CardHeader><CardTitle className="flex items-center gap-2 font-serif text-xl"><Users className="h-5 w-5 text-primary" />1. Guess the workplace object</CardTitle></CardHeader><CardContent className="grid gap-4 md:grid-cols-2">{OBJECTS.map((object, index) => <details key={object.answer} className="rounded-md border bg-muted/30 p-4"><summary className="cursor-pointer font-semibold text-primary">Object {index + 1}</summary><p className="mt-3 text-sm leading-6">{object.clue}</p><p className="mt-3 border-t pt-2 text-sm"><strong>Answer:</strong> {object.answer}</p></details>)}</CardContent></Card>
    <Card><CardHeader><CardTitle className="flex items-center gap-2 font-serif text-xl"><Settings className="h-5 w-5 text-primary" />2. Play the gizmo game</CardTitle></CardHeader><CardContent className="space-y-4 text-sm"><p>Choose an unfamiliar tool or device. One student learns its real purpose. Two students invent a purpose. Each speaker has 45 seconds to describe its parts, shape, material, operation and use. The group votes for the true description.</p><div className="rounded-md border-l-4 border-primary bg-muted p-4"><strong>Challenge:</strong> Do not say the object’s name. Use at least one phrase from each language group above.</div></CardContent></Card>
    <Card><CardHeader><CardTitle className="font-serif text-xl">3. Troubleshooting role-play</CardTitle></CardHeader><CardContent className="grid gap-4 md:grid-cols-2 text-sm"><div className="rounded-md border p-4"><strong>Employee</strong><p className="mt-2">Your video call equipment keeps disconnecting. Describe the hub, cables, lights and what happens. Explain what you have already tried and how urgent the meeting is.</p></div><div className="rounded-md border p-4"><strong>Technical support</strong><p className="mt-2">Ask questions, identify the equipment, give two troubleshooting instructions, then decide whether it needs updating, repairing or replacing.</p></div></CardContent></Card>
  </div>
);

export default SpeakingEquipmentExercise;