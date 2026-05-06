import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const AUDIO_URL = "/audio/bb-upper/unit8-listening-3.mp3";

const fields = [
  { id: "quantity", label: "Quantity", placeholder: "e.g. 3,000" },
  { id: "price", label: "Price (per unit)", placeholder: "e.g. €10" },
  { id: "discount", label: "Discount", placeholder: "e.g. 5%" },
  { id: "payment", label: "Payment terms", placeholder: "e.g. 30 days" },
  { id: "delivery", label: "Delivery date", placeholder: "e.g. 2 weeks" },
];

const Listening2Unit8 = () => {
  const [vals, setVals] = useState<Record<string, string>>({});

  return (
    <div className="space-y-8">
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-2 font-merriweather text-foreground">Negotiating — Listening</h3>
          <p className="text-muted-foreground mb-4">
            Listen to Tessa, Susie and Jack negotiating a deal and note down the terms of their <strong>final agreement</strong>.
            Then listen again, reading the transcript to check.
          </p>
          <audio controls src={AUDIO_URL} className="w-full mb-6" />

          <div className="grid sm:grid-cols-2 gap-4">
            {fields.map((f) => (
              <div key={f.id}>
                <label className="text-sm font-semibold text-foreground mb-1 block">{f.label}</label>
                <Input value={vals[f.id] || ""} placeholder={f.placeholder} onChange={(e) => setVals((p) => ({ ...p, [f.id]: e.target.value }))} />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="service-card">
        <CardContent className="p-6">
          <Accordion type="single" collapsible>
            <AccordionItem value="t" className="border-none">
              <AccordionTrigger className="text-2xl font-semibold font-merriweather text-foreground hover:no-underline">📄 Transcript extract</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3 text-foreground leading-relaxed text-sm">
                  <p><strong>Jack:</strong> Right. Let's think about it, and then we'll come back to you on that to sort out the details if we think it's what we want. OK?</p>
                  <p><strong>Tessa:</strong> Fine.</p>
                  <p><strong>Susie:</strong> Now, what else have you got?</p>
                  <p><strong>Tessa:</strong> Well, there's this wine-bottle opener. This really does sell well.</p>
                  <p><strong>Jack:</strong> One more question about the talking weighing machine. Does it come supplied with a battery, or do customers have to pay extra for that?</p>
                  <p><strong>Tessa:</strong> No, it comes with the battery included.</p>
                  <p className="italic text-muted-foreground">… continue listening for the negotiation of price, discount, payment terms and delivery for the final order.</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default Listening2Unit8;
