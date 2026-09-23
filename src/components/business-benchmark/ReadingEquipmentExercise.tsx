import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";
import EquipmentActivity from "./EquipmentActivity";

const FASTEQUIP = [
  { id: "f1", prompt: "You can choose how frequently you make payments.", options: ["Right", "Wrong", "Doesn't say"], answer: "Right", hint: "Read section A about payment structure." },
  { id: "f2", prompt: "Payments can be adjusted to suit your cash flow.", options: ["Right", "Wrong", "Doesn't say"], answer: "Right" },
  { id: "f3", prompt: "Every application is approved immediately.", options: ["Right", "Wrong", "Doesn't say"], answer: "Wrong", hint: "Applications must be assessed first." },
  { id: "f4", prompt: "The application process is designed to be simple.", options: ["Right", "Wrong", "Doesn't say"], answer: "Right" },
  { id: "f5", prompt: "Leasing can help a business budget more easily.", options: ["Right", "Wrong", "Doesn't say"], answer: "Right" },
  { id: "f6", prompt: "Fastequip arranges delivery and installation.", options: ["Right", "Wrong", "Doesn't say"], answer: "Right" },
  { id: "f7", prompt: "Customers can renew or upgrade at the end of the agreement.", options: ["Right", "Wrong", "Doesn't say"], answer: "Right" },
  { id: "f8", prompt: "Fastequip only leases equipment made in the UK.", options: ["Right", "Wrong", "Doesn't say"], answer: "Doesn't say" },
];

const REPAIR = [
  { id: "r1", prompt: "Who reported the problem?", options: ["Richard Parker", "Maria Hawkins", "Murat Yuzgun"], answer: "Richard Parker" },
  { id: "r2", prompt: "Which room contains the faulty equipment?", options: ["Seminar room 1", "Seminar room 2", "Board room"], answer: "Seminar room 2" },
  { id: "r3", prompt: "What equipment is faulty?", options: ["A screen", "A projector", "A laptop"], answer: "A projector" },
  { id: "r4", prompt: "What needs doing?", options: ["The cable needs replacing", "The bulb needs changing", "The software needs updating"], answer: "The bulb needs changing" },
  { id: "r5", prompt: "Who is currently handling repairs?", options: ["Robert Beale", "Murat Yuzgun", "Maria Hawkins"], answer: "Murat Yuzgun" },
];

const ReadingEquipmentExercise = () => (
  <div className="space-y-8">
    <Card className="overflow-hidden rounded-sm">
      <article>
        <CardHeader className="border-b border-foreground/20 text-center">
          <p className="text-xs font-semibold uppercase text-primary">Workplace Technology</p>
          <CardTitle className="font-serif text-3xl sm:text-4xl">Leasing equipment</CardTitle>
          <p className="font-serif text-lg text-muted-foreground">A practical alternative to buying costly business technology</p>
          <p className="border-t border-foreground/20 pt-4 text-xs text-muted-foreground">Business Benchmark · Updated for today’s workplace</p>
        </CardHeader>
        <CardContent className="pt-7">
          <p className="mb-6 font-serif text-xl leading-relaxed">Equipment can become obsolete quickly. Leasing lets a company use what it needs without paying the full purchase price at once.</p>
          <div className="space-y-5 text-[15px] leading-7 lg:columns-2 lg:gap-10 lg:space-y-0">
            <section className="mb-5 break-inside-avoid border-t pt-3"><h3 className="font-serif text-lg font-bold text-primary">A — Choosing your payment structure</h3><p>Choose monthly, quarterly or annual payments. A suitable schedule protects cash flow and makes costs predictable.</p></section>
            <section className="mb-5 break-inside-avoid border-t pt-3"><h3 className="font-serif text-lg font-bold text-primary">B — Making your application</h3><p>Tell the supplier what equipment you need and how you plan to use it. The application is assessed, and an agreement is prepared once it is approved.</p></section>
            <section className="mb-5 break-inside-avoid border-t pt-3"><h3 className="font-serif text-lg font-bold text-primary">C — Advantages of leasing</h3><p>The supplier can arrange delivery and installation. At the end of the agreement, you may return, renew or upgrade the equipment.</p></section>
            <section className="mb-5 break-inside-avoid border-t pt-3"><h3 className="font-serif text-lg font-bold text-primary">Today’s checklist</h3><p>Ask who pays for repairs, how business data is securely erased, whether equipment is energy-efficient, and how returned devices are reused or recycled.</p></section>
          </div>
          <aside className="mt-7 flex gap-3 border-y border-primary/40 bg-muted p-4 text-sm"><Lightbulb className="h-5 w-5 shrink-0" /><p><strong>Then and now:</strong> leasing now includes laptops for hybrid teams, managed printers and subscription hardware. Flexibility is useful, but compare the total cost and the environmental impact.</p></aside>
        </CardContent>
      </article>
    </Card>
    <EquipmentActivity title="1. Fastequip — right, wrong or doesn’t say?" instructions="Read the leasing article, then decide what the text tells you." questions={FASTEQUIP} activityType="reading" />
    <EquipmentActivity title="2. Office repairs — scan two emails" instructions={<><p>Richard says his training session moved to seminar room 2. He could not use the projector because its bulb needs changing.</p><p className="mt-2">Maria asks him to complete a repairs request form and give it to Murat Yuzgun, who is covering for the equipment technician.</p></>} questions={REPAIR} activityType="reading" />
  </div>
);

export default ReadingEquipmentExercise;