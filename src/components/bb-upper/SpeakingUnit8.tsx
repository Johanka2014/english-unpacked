import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Card2 = ({ title, items, sticking }: { title: string; items: { label: string; value: string }[]; sticking?: string[] }) => (
  <div className="rounded-lg border border-border bg-muted/30 p-4">
    <p className="font-semibold text-foreground mb-2">{title}</p>
    <table className="w-full text-sm">
      <tbody>
        {items.map((i) => (
          <tr key={i.label} className="border-b border-border/40 last:border-0">
            <td className="py-1 pr-3 font-medium text-foreground">{i.label}</td>
            <td className="py-1 text-foreground">{i.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
    {sticking && (
      <div className="mt-3 text-xs text-foreground">
        <p className="font-semibold mb-1">Sticking points:</p>
        <ul className="list-disc list-inside">{sticking.map((s, i) => <li key={i}>{s}</li>)}</ul>
      </div>
    )}
  </div>
);

const SpeakingUnit8 = () => (
  <div className="space-y-8">
    <Card className="service-card">
      <CardContent className="p-6">
        <h3 className="text-2xl font-semibold mb-2 font-merriweather text-foreground">Negotiating Role-play</h3>
        <p className="text-foreground mb-2">
          Work in groups of four. Imagine you are at a trade fair. Two students take the part of <strong>buyers</strong> and two take the part of <strong>sellers</strong>.
          The aim is to <strong>reach an agreement</strong> — give yourselves a 10–15 minute time limit. When you finish, write an email summarising the deal.
        </p>
        <p className="text-sm text-muted-foreground italic">Each pair sees only their own role card. Click below to reveal them when ready.</p>
      </CardContent>
    </Card>

    <Card className="service-card">
      <CardContent className="p-6">
        <Accordion type="single" collapsible>
          <AccordionItem value="cork" className="border-none">
            <AccordionTrigger className="text-2xl font-semibold font-merriweather text-foreground hover:no-underline">🍷 The CorkPops bottle opener</AccordionTrigger>
            <AccordionContent>
              <div className="grid sm:grid-cols-2 gap-4 mt-2">
                <Card2
                  title="Buyers (ideal terms)"
                  items={[
                    { label: "Quantity", value: "2,000" },
                    { label: "Price", value: "€8" },
                    { label: "Discount", value: "5%" },
                    { label: "Payment terms", value: "60 days" },
                    { label: "Delivery date", value: "immediately" },
                  ]}
                  sticking={[
                    "Price must not go above €10 to give you sufficient mark-up.",
                    "Payment terms: 30 days is your bottom line — otherwise cashflow problems.",
                  ]}
                />
                <Card2
                  title="Sellers (ideal terms)"
                  items={[
                    { label: "Quantity", value: "4,000" },
                    { label: "Price", value: "€12" },
                    { label: "Discount", value: "2.5%" },
                    { label: "Payment terms", value: "at sight" },
                    { label: "Delivery date", value: "1 month" },
                  ]}
                  sticking={[
                    "Price must not go below €9.50, with no discount.",
                    "Payment must arrive within 30 days at the latest.",
                  ]}
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>

    <Card className="service-card">
      <CardContent className="p-6">
        <Accordion type="single" collapsible>
          <AccordionItem value="peel" className="border-none">
            <AccordionTrigger className="text-2xl font-semibold font-merriweather text-foreground hover:no-underline">🥕 The Speedy Peel Peeler</AccordionTrigger>
            <AccordionContent>
              <div className="grid sm:grid-cols-2 gap-4 mt-2">
                <Card2
                  title="Buyers (ideal terms)"
                  items={[
                    { label: "Quantity", value: "5,000" },
                    { label: "Price", value: "€5" },
                    { label: "Discount", value: "7.5%" },
                    { label: "Payment terms", value: "60 days" },
                    { label: "Delivery date", value: "immediately" },
                  ]}
                  sticking={[
                    "You really want this product — it will sell like hot cakes.",
                    "Christmas is round the corner: the sooner the better.",
                    "You'd prefer to pay nearer Christmas when cash is available.",
                  ]}
                />
                <Card2
                  title="Sellers (ideal terms)"
                  items={[
                    { label: "Quantity", value: "2,000" },
                    { label: "Price", value: "€6" },
                    { label: "Discount", value: "0%" },
                    { label: "Payment terms", value: "at sight" },
                    { label: "Delivery date", value: "3 weeks" },
                  ]}
                  sticking={[
                    "You can only supply 2,000 in the next three weeks.",
                    "You are unwilling to make any concessions at all.",
                  ]}
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>

    <Card className="service-card">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2 font-merriweather text-foreground">Quiz — Are you a good negotiator?</h3>
        <p className="text-muted-foreground mb-4">Discuss in pairs. There is no single "right" answer — see the suggested scoring at the bottom.</p>
        <ol className="list-decimal list-inside space-y-3 text-foreground">
          <li>When I negotiate, I try to get what I want, but I also try to make sure the other side goes away happy too.<br/><span className="text-sm italic text-muted-foreground">A Never &nbsp; B Sometimes &nbsp; C Always</span></li>
          <li>How do you feel about the people you're negotiating with?<br/><span className="text-sm italic text-muted-foreground">A It helps if I like them. &nbsp; B I keep personal feelings out. &nbsp; C They're the enemy.</span></li>
          <li>When I enter a negotiation, I like to get down to business straight away.<br/><span className="text-sm italic text-muted-foreground">A Never &nbsp; B It depends on the culture &nbsp; C Always</span></li>
          <li>If I don't reach my objective, I'll …<br/><span className="text-sm italic text-muted-foreground">A break off &nbsp; B compromise &nbsp; C set my sights even higher next time</span></li>
          <li>If telling a small lie helps me get what I want, I will.<br/><span className="text-sm italic text-muted-foreground">A Never &nbsp; B Yes — all's fair in love and war &nbsp; C I'd keep quiet about something rather than lie outright</span></li>
        </ol>
        <div className="mt-4 rounded-lg bg-muted/40 p-4 text-sm text-foreground">
          <p className="font-semibold mb-1">Discussion key</p>
          <p>For long-term relationships, win-win is best (1C). Personal relationships matter (2A). Adapt to the local culture (3B). Be willing to compromise rather than break off (4B). Stay scrupulously honest (5A or 5C).</p>
        </div>
      </CardContent>
    </Card>
  </div>
);

export default SpeakingUnit8;
