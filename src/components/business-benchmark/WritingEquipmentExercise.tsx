import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import useActivityTracking from "@/hooks/useActivityTracking";

const WritingEquipmentExercise = () => {
  const track = useActivityTracking();
  const [form, setForm] = useState({ reporter: "", location: "", equipment: "", fault: "", action: "", assigned: "" });
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState(() => localStorage.getItem("bb-mod5-equipment-email") || "");
  const [ticket, setTicket] = useState(() => localStorage.getItem("bb-mod5-support-ticket") || "");
  const expected = { reporter: "richard parker", location: "seminar room 2", equipment: "projector", fault: "bulb needs changing", action: "change the bulb", assigned: "murat yuzgun" };
  const normalize = (value: string) => value.trim().toLowerCase().replace(/[.,]/g, "");
  const score = Object.entries(expected).filter(([key, value]) => normalize(form[key as keyof typeof form]).includes(value)).length;
  const emailWords = useMemo(() => email.trim() ? email.trim().split(/\s+/).length : 0, [email]);

  return (
    <div className="space-y-8">
      <Card><CardHeader><CardTitle className="font-serif text-xl">1. Complete a repairs request</CardTitle></CardHeader><CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">Use the emails from Reading. Fill in a concise request that technical support can act on.</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {Object.keys(form).map((key) => <label key={key} className="space-y-1 text-sm capitalize">{key}<Input value={form[key as keyof typeof form]} onChange={(event) => setForm((current) => ({ ...current, [key]: event.target.value }))} className={checked && !normalize(form[key as keyof typeof form]).includes(expected[key as keyof typeof expected]) ? "border-destructive" : ""} /></label>)}
        </div>
        <div className="flex items-center gap-3"><Button onClick={() => { setChecked(true); track({ activityTitle: "BB Module 5 — repairs request", activityType: "form", score, total: 6 }); }}>Check form</Button>{checked && <span className="text-sm text-muted-foreground">{score} / 6 key details</span>}</div>
      </CardContent></Card>

      <Card><CardHeader><CardTitle className="font-serif text-xl">2. Write about faulty leased equipment</CardTitle></CardHeader><CardContent className="space-y-4">
        <div className="rounded-md bg-muted p-4 text-sm"><strong>Situation:</strong> Your leased paper-and-cardboard shredder keeps stopping. It needs repairing. Write to Fastequip, explain the fault, say what you have tried, explain why it is urgent, and request action. Aim for 60–100 words.</div>
        <Textarea rows={8} value={email} onChange={(event) => { setEmail(event.target.value); localStorage.setItem("bb-mod5-equipment-email", event.target.value); }} placeholder="Dear Fastequip Support, …" />
        <div className="flex flex-wrap items-center gap-3"><span className="text-sm text-muted-foreground">{emailWords} words</span><Button variant="outline" onClick={() => track({ activityTitle: "BB Module 5 — complaint email", activityType: "writing", score: emailWords >= 60 ? 1 : 0, total: 1 })}>Save result</Button></div>
        <Accordion type="single" collapsible><AccordionItem value="model"><AccordionTrigger>Show model answer</AccordionTrigger><AccordionContent className="text-sm leading-6">Dear Fastequip Support,<br /><br />Our leased paper-and-cardboard shredder keeps stopping after a few minutes. We have switched it off, cleared the feed and restarted it, but the problem continues. We need it for confidential documents, so please arrange a repair as soon as possible. If it cannot be repaired this week, could you provide a replacement?<br /><br />Kind regards,<br />Alex Novak</AccordionContent></AccordionItem></Accordion>
      </CardContent></Card>

      <Card><CardHeader><CardTitle className="font-serif text-xl">3. Modern support ticket</CardTitle></CardHeader><CardContent className="space-y-4"><p className="text-sm text-muted-foreground">Describe a real or imagined issue. Include the device, user or location, symptoms, troubleshooting already attempted, urgency and requested action.</p><Textarea rows={7} value={ticket} onChange={(event) => { setTicket(event.target.value); localStorage.setItem("bb-mod5-support-ticket", event.target.value); }} placeholder="Device: USB-C meeting-room hub…" /></CardContent></Card>
    </div>
  );
};

export default WritingEquipmentExercise;