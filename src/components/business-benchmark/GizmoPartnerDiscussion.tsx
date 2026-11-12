import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const GizmoPartnerDiscussion = () => {
  const [speaker, setSpeaker] = useState("");

  return (
    <Card>
      <CardHeader><CardTitle className="font-serif text-xl">5. Work with a partner</CardTitle></CardHeader>
      <CardContent className="space-y-5">
        <p className="text-sm leading-relaxed">Work with a partner and decide which speaker is telling the truth. Check your answer with your teacher.</p>
        <RadioGroup aria-label="Which speaker is telling the truth?" value={speaker} onValueChange={setSpeaker} className="gap-4 sm:grid-cols-3">
          {[1, 2, 3].map((number) => (
            <div key={number} className="flex min-h-10 items-center gap-3">
              <RadioGroupItem id={`gizmo-partner-speaker-${number}`} value={String(number)} />
              <Label htmlFor={`gizmo-partner-speaker-${number}`} className="cursor-pointer">Speaker {number}</Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  );
};

export default GizmoPartnerDiscussion;