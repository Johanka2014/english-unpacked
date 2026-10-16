import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";
import EquipmentActivity from "./EquipmentActivity";

const FASTEQUIP = [
  { id: "f1", prompt: "The leasing price can cover transport costs.", options: ["Right", "Wrong", "Doesn't say"], answer: "Right", hint: "The lease can include shipping and delivery." },
  { id: "f2", prompt: "You can buy the equipment at the end of a flat payment lease.", options: ["Right", "Wrong", "Doesn't say"], answer: "Right", hint: "Look for the possibility of purchase in the flat lease option." },
  { id: "f3", prompt: "The minimum monthly payment on a seasonal lease is €50.", options: ["Right", "Wrong", "Doesn't say"], answer: "Doesn't say", hint: "The €50 figure belongs to a different lease option." },
  { id: "f4", prompt: "For the ‘60 day no pay’ lease, you pay nothing for the first two months.", options: ["Right", "Wrong", "Doesn't say"], answer: "Wrong", hint: "Despite the name, the first two months’ payments are €50." },
  { id: "f5", prompt: "You need to write the name of your bank on the application form.", options: ["Right", "Wrong", "Doesn't say"], answer: "Right", hint: "The form requires full contact details of your bank." },
  { id: "f6", prompt: "Fastequip guarantee to process your application on the day it arrives.", options: ["Right", "Wrong", "Doesn't say"], answer: "Wrong", hint: "‘Usually’ is not a guarantee." },
  { id: "f7", prompt: "The lease starts on the day that Fastequip receive the application form.", options: ["Right", "Wrong", "Doesn't say"], answer: "Wrong", hint: "It begins when you receive and accept the equipment." },
  { id: "f8", prompt: "The helpline is available 24 hours a day.", options: ["Right", "Wrong", "Doesn't say"], answer: "Doesn't say", hint: "The advertisement gives a number, but no opening hours." },
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
          <p className="border-t border-foreground/20 pt-4 text-xs text-muted-foreground">Business Benchmark · Student’s Book, page 28 · Complete reading text</p>
        </CardHeader>
        <CardContent className="pt-7">
          <p className="mb-6 font-serif text-xl leading-relaxed">Instead of buying expensive equipment or machinery, sometimes businesses choose to lease it. Leasing means paying money each month to the company who owns the equipment in return for using it.</p>
          <div className="space-y-5 text-[15px] leading-7 lg:columns-2 lg:gap-10 lg:space-y-0">
            <p className="mb-5 break-inside-avoid">No matter what type of business you are in, you will need some kind of equipment. The problem with buying your equipment is that it can be very expensive, especially if you need to purchase several items. One solution to this problem, used by an increasing number of businesses, is to lease the equipment instead. In this way, you can benefit from the equipment without having to pay the full cost.</p>
            <p className="mb-5 break-inside-avoid">Leasing a machine or piece of equipment is similar to renting it. You pay the leasing company each month for the right to have it on your premises and use it. Leasing contracts can last for different numbers of years. The length of contract depends on the cost and the lifespan of the equipment.</p>
            <p className="mb-5 break-inside-avoid">At the end of the contract, you can either continue leasing at a lower rate or sell the equipment to another person or company. The profits of a sale of the equipment are often split between you and the leasing company.</p>
            <p className="mb-5 break-inside-avoid">Many different kinds of office equipment can be leased. Computers, photocopiers and fax machines are all widely available.</p>
            <p className="mb-5 break-inside-avoid">Some leasing companies offer more specialised items such as manufacturing equipment or agricultural machinery. If you cannot find the equipment that you require on a company list, you can still contact a leasing company and suggest it. Many companies will be happy to try to find the product which meets your needs.</p>
            <p className="mb-5 break-inside-avoid">Leasing companies offer many different kinds of contracts according to your financial needs, such as lower payments for the first few months to help new businesses. They also allow you to upgrade the equipment, especially if the lease is long term.</p>
          </div>
          <aside className="mt-7 flex gap-3 border-y border-primary/40 bg-muted p-4 text-sm"><Lightbulb className="h-5 w-5 shrink-0" /><p><strong>Then and now:</strong> the original text mentions fax machines. Today, leasing also includes laptops for hybrid teams, managed printers and subscription hardware. Compare total costs and ask about repairs, secure data removal, energy efficiency, reuse and recycling. Terms depend on the agreement.</p></aside>
        </CardContent>
      </article>
    </Card>
    <section aria-labelledby="fastequip-title" className="space-y-5 border-y border-border py-8">
      <header className="space-y-2">
        <p className="text-xs font-semibold uppercase text-primary">An advertisement · Teacher’s Book, page 32</p>
        <h2 id="fastequip-title" className="font-serif text-3xl font-bold">FASTEQUIP</h2>
        <p className="text-sm text-muted-foreground">Original 2006 textbook advertisement — not a current offer. Contact details are reproduced for reading only.</p>
      </header>
      <div className="space-y-5 text-[15px] leading-7">
        <p className="font-serif text-lg">Are you considering a lease to finance the equipment for your new office or factory? At Fastequip, we aim to give you and your company a financial opportunity that will help you to get the equipment that you need to run your business.</p>
        <section className="space-y-2"><h3 className="font-serif text-xl font-bold text-primary">1 — Advantages of leasing</h3><p>The best thing about leasing is that your cash is not tied up in your equipment. The only initial cost is your first payment on the leasing agreement, so it takes less out of your budget than if you had to buy the equipment. That means you have more money left for marketing and other activities. A Fastequip lease can also include the cost of shipping and delivery, installation and staff training.</p></section>
        <section className="space-y-3"><h3 className="font-serif text-xl font-bold text-primary">2 — Choosing your payment structure</h3><p>At Fastequip, we offer three basic options:</p><p><strong>Flat lease.</strong> A fixed term for between 30 and 60 months with a variety of renewal options and the possibility of purchase at the end of the lease term.</p><p><strong>Seasonal lease.</strong> With this option, you make higher payments during the months when you earn more and lower payments during slow periods.</p><p><strong>60 day no pay lease.</strong> Payments for the first two months are just €50 and then increase to normal levels. This allows time to get your business up and running before the full payments begin.</p></section>
        <section className="space-y-2"><h3 className="font-serif text-xl font-bold text-primary">3 — Making your application</h3><p>Fill in the attached form (also obtainable online at <span className="break-all">www.fastequip/leasingform</span>), giving full contact details of your bank. Applications can usually be processed on the day that they are received and the lease begins when you actually receive and accept the equipment. If you have any questions regarding price structures, please call our helpline on 01243 67389.</p></section>
      </div>
    </section>
    <EquipmentActivity title="1. Fastequip — right, wrong or doesn’t say?" instructions="Read the Fastequip advertisement above, then decide what it tells you. There are two statements where the answer is ‘doesn’t say’." questions={FASTEQUIP} activityType="reading" />
    <section aria-labelledby="repair-emails-title" className="space-y-5">
      <header className="space-y-2"><p className="text-xs font-semibold uppercase text-primary">Student’s Book, page 29</p><h2 id="repair-emails-title" className="font-serif text-2xl font-bold">Office repairs — two emails</h2></header>
      <div className="grid items-start gap-6 lg:grid-cols-2">
        <article aria-label="Email from Richard Parker" className="min-w-0 rounded-md border border-border">
          <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 border-b border-border bg-muted p-5 text-sm"><dt className="font-semibold">To:</dt><dd>Maria Hawkins</dd><dt className="font-semibold">From:</dt><dd>Richard Parker</dd><dt className="font-semibold">Sent:</dt><dd>10 April</dd><dt className="font-semibold">Subject:</dt><dd>Training session</dd></dl>
          <div className="space-y-4 p-5 text-[15px] leading-7"><p>Dear Maria,</p><p>I’m afraid my training session today was a bit of a disaster. We were moved from seminar room 1 to seminar room 2 because of the last-minute board meeting but space was a real problem. There were three desks missing. However, the worst thing was the PowerPoint presentation. I couldn’t use the projector at all because the bulb needs changing. Who should I report this to?</p><p>Richard</p></div>
        </article>
        <article aria-label="Email from Maria Hawkins" className="min-w-0 rounded-md border border-border">
          <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 border-b border-border bg-muted p-5 text-sm"><dt className="font-semibold">To:</dt><dd>Richard Parker</dd><dt className="font-semibold">From:</dt><dd>Maria Hawkins</dd><dt className="font-semibold">Sent:</dt><dd>11 April</dd><dt className="font-semibold">Subject:</dt><dd>Re: training session</dd></dl>
          <div className="space-y-4 p-5 text-[15px] leading-7"><p>Dear Richard,</p><p>Sorry about that! Broken equipment should be reported on a repairs request form so please could you fill one in and give it to technical support? Robert Beale, the equipment technician is away until 13 April but you can give it to Murat Yuzgun who’s helping out at the moment. I know the room is smaller but it is supposed to have the same number of desks so I don’t know why you didn’t have enough. Did you find three spare desks from anywhere?</p><p>Maria</p></div>
        </article>
      </div>
    </section>
    <EquipmentActivity title="2. Office repairs — scan two emails" instructions="Read Richard’s email and Maria’s reply above, then find the information needed for a repairs request." questions={REPAIR} activityType="reading" />
  </div>
);

export default ReadingEquipmentExercise;