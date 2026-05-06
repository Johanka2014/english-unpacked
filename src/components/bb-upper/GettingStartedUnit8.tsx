import { Card, CardContent } from "@/components/ui/card";

const GettingStartedUnit8 = () => (
  <div className="space-y-8">
    <Card className="service-card">
      <CardContent className="p-6">
        <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">Getting Started — Discussion</h3>
        <p className="text-muted-foreground mb-4">Work in small groups and discuss these questions.</p>
        <ol className="list-decimal list-inside space-y-2 text-foreground">
          <li>How can retailers (people who run shops) find out about new products to sell in their stores?</li>
          <li>How important is it for retailers to have new products in their stores?</li>
          <li>For customers, is the price always the most important factor to consider when buying a product?</li>
          <li>Which of the factors below do you think is important for negotiating successfully? Why?</li>
        </ol>
      </CardContent>
    </Card>

    <Card className="service-card">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-4 font-merriweather text-foreground">Factors for successful negotiation</h3>
        <ul className="space-y-2 text-foreground">
          <li className="rounded-lg border border-border bg-card p-3">Establishing a good relationship with your customer/supplier.</li>
          <li className="rounded-lg border border-border bg-card p-3">Being ready to reach a compromise, i.e. being flexible.</li>
          <li className="rounded-lg border border-border bg-card p-3">Sticking to your demands.</li>
          <li className="rounded-lg border border-border bg-card p-3">Preparing in advance, e.g. by making sure you have all the information about the product you are buying/selling.</li>
          <li className="rounded-lg border border-border bg-card p-3">Taking a long-term view of your relationship with your customer/supplier.</li>
        </ul>
      </CardContent>
    </Card>

    <Card className="service-card">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2 font-merriweather text-foreground">Suggested teacher notes</h3>
        <ul className="list-disc list-inside space-y-2 text-foreground text-sm">
          <li>Retailers find new products through company reps, the trade press, the Internet, trade fairs and general advertising.</li>
          <li>New products bring in customers looking for novelties and keep the store's image up to date.</li>
          <li>Price matters, but quality and image are also important to most customers.</li>
          <li>All the factors except <em>sticking to your demands</em> would normally be considered important in a successful negotiation.</li>
        </ul>
      </CardContent>
    </Card>
  </div>
);

export default GettingStartedUnit8;
