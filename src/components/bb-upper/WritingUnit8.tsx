import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const WritingUnit8 = () => {
  const [draft, setDraft] = useState("");

  return (
    <div className="space-y-8">
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-2 font-merriweather text-foreground">Writing — Email summarising an agreement</h3>
          <p className="text-muted-foreground mb-2">
            After your negotiation role-play, write an email to the other party (or to your manager) summarising the terms you agreed.
          </p>
          <p className="text-foreground mb-2">Include:</p>
          <ul className="list-disc list-inside text-foreground space-y-1 mb-4">
            <li>the product and quantity ordered</li>
            <li>the unit price and any discount</li>
            <li>payment terms (e.g. <em>at sight</em>, <em>30 days</em>, <em>90 days</em>)</li>
            <li>delivery date or schedule</li>
            <li>a polite closing confirming you look forward to doing business</li>
          </ul>
          <Textarea
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder={`Subject: Confirmation of order — CorkPops bottle opener\n\nDear Tessa,\n\nThank you for your time at the trade fair this week. I am writing to confirm the terms we agreed...\n\nKind regards,\nJack`}
            className="min-h-[260px] font-merriweather"
          />
          <p className="text-xs text-muted-foreground mt-2">Word count: {draft.trim() ? draft.trim().split(/\s+/).length : 0}</p>
        </CardContent>
      </Card>

      <Card className="service-card">
        <CardContent className="p-6">
          <Accordion type="single" collapsible>
            <AccordionItem value="model" className="border-none">
              <AccordionTrigger className="text-2xl font-semibold font-merriweather text-foreground hover:no-underline">✉️ Sample model email</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3 text-foreground leading-relaxed text-sm bg-muted/30 p-4 rounded-lg">
                  <p>Subject: Confirmation of order — CorkPops bottle opener</p>
                  <p>Dear Tessa,</p>
                  <p>Thank you for your time at the IFE trade fair on Tuesday. Following our discussion, I am writing to confirm the terms we agreed for the CorkPops bottle opener:</p>
                  <ul className="list-disc list-inside ml-2">
                    <li><strong>Quantity:</strong> 3,000 units</li>
                    <li><strong>Price:</strong> €9.50 per unit</li>
                    <li><strong>Discount:</strong> 2.5% on the order value</li>
                    <li><strong>Payment terms:</strong> 30 days from invoice</li>
                    <li><strong>Delivery:</strong> within two weeks of order confirmation</li>
                  </ul>
                  <p>Provided everything is in order, please send us the pro-forma invoice and we will release the official purchase order this week. We look forward to doing business with you and to a long, successful relationship.</p>
                  <p>Kind regards,<br/>Jack Lemming<br/>Senior Buyer</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2 font-merriweather text-foreground">Late-payment letter — Spot the extra word</h3>
          <p className="text-muted-foreground mb-2">In real exam tasks (BEC/BULATS), there is often <strong>one extra word</strong> in each numbered line. Try this letter — extra words are <span className="line-through text-red-600">struck through</span>.</p>
          <div className="rounded-lg border border-border bg-muted/30 p-4 text-foreground text-sm leading-relaxed space-y-2">
            <p>Dear Mr Markham,</p>
            <p><strong>Late payment</strong></p>
            <p>I regret to say that we have not yet received <span className="line-through text-red-600">some</span> payment for the goods that we delivered to you in March, although the agreement was that you would <span className="line-through text-red-600">to</span> pay in 30 days. This is causing us severe cashflow problems, and unless you <span className="line-through text-red-600">will</span> pay us immediately, we will have to stop supplying <span className="line-through text-red-600">to</span> you with the goods you require.</p>
            <p>However, I would also like to warn you that if you do not pay promptly, we will be unable to offer you <span className="line-through text-red-600">back</span> your usual discounts in the future.</p>
            <p>I look forward to <span className="line-through text-red-600">be</span> receiving your payment shortly.</p>
            <p>Yours sincerely,<br/>Georgina Chandler<br/>Accounts manager</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WritingUnit8;
