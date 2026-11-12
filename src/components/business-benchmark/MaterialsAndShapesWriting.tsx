import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const MaterialsAndShapesWriting = () => {
  const [answers, setAnswers] = useState({ materials: "", shapes: "", extraMaterials: "", extraShapes: "" });

  const updateAnswer = (field: keyof typeof answers, value: string) => {
    setAnswers((current) => ({ ...current, [field]: value }));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-serif text-xl">Materials and shape adjectives</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-sm text-muted-foreground">Look back at the vocabulary and object descriptions in this module. Write five materials and three shape adjectives in the table.</p>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="min-w-0 space-y-2">
            <Label htmlFor="equipment-materials">Materials</Label>
            <Textarea id="equipment-materials" rows={6} value={answers.materials} onChange={(event) => updateAnswer("materials", event.target.value)} placeholder="Write five materials…" className="text-base leading-relaxed" />
          </div>
          <div className="min-w-0 space-y-2">
            <Label htmlFor="equipment-shapes">Shape adjectives</Label>
            <Textarea id="equipment-shapes" rows={6} value={answers.shapes} onChange={(event) => updateAnswer("shapes", event.target.value)} placeholder="Write three shape adjectives…" className="text-base leading-relaxed" />
          </div>
        </div>
        <div className="space-y-4 border-t pt-5">
          <p className="text-sm text-muted-foreground">Add four more materials and four more shape adjectives to the table. Use a dictionary if necessary. Then compare your answers with a partner.</p>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="min-w-0 space-y-2">
              <Label htmlFor="equipment-extra-materials">Four more materials</Label>
              <Textarea id="equipment-extra-materials" rows={5} value={answers.extraMaterials} onChange={(event) => updateAnswer("extraMaterials", event.target.value)} placeholder="Add your own materials…" className="text-base leading-relaxed" />
            </div>
            <div className="min-w-0 space-y-2">
              <Label htmlFor="equipment-extra-shapes">Four more shape adjectives</Label>
              <Textarea id="equipment-extra-shapes" rows={5} value={answers.extraShapes} onChange={(event) => updateAnswer("extraShapes", event.target.value)} placeholder="Add your own shape adjectives…" className="text-base leading-relaxed" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MaterialsAndShapesWriting;