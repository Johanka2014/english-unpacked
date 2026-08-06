import { Card, CardContent } from "@/components/ui/card";
import businessHotel from "@/assets/bb-upper/business-hotel.jpg";

const amenities = [
  "guest rooms", "general decor", "lobby and other public areas", "meeting rooms",
  "business centre", "restaurants and bars", "room service", "gym/health club",
  "hotel staff", "high-speed Internet access", "wi-fi Internet access", "other",
];

const GettingStartedUnit13 = () => (
  <div className="grid md:grid-cols-2 gap-8 items-start">
    {/* Left column — book-style task text */}
    <Card className="service-card p-0">
      <CardContent className="p-5 sm:p-6 space-y-4">
        <h3 className="text-2xl sm:text-3xl font-bold text-brand-royal">Getting started</h3>
        <p className="font-semibold text-foreground leading-relaxed">
          Discuss the questions below in small groups. When you have finished, find a partner
          from another group and report what you decided.
        </p>

        <ul className="list-disc pl-6 space-y-3 text-foreground">
          <li>How is the business traveller different from the ordinary tourist?</li>
          <li>
            If you were choosing a hotel for a business trip, which of these amenities would you
            consider more important and which less important?
            <ul className="mt-2 space-y-1 pl-4 text-muted-foreground">
              {amenities.map((a) => (
                <li key={a} className="flex gap-2">
                  <span aria-hidden="true">–</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </li>
          <li>Do you have a favourite hotel?</li>
          <li>
            How important do you think the hotel's cost is when business people make their travel plans?
            <ul className="mt-2 space-y-1 pl-4 text-muted-foreground">
              {["very important", "quite important", "not important"].map((o) => (
                <li key={o} className="flex gap-2">
                  <span aria-hidden="true">–</span>
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </CardContent>
    </Card>

    {/* Right column — image */}
    <div className="md:sticky md:top-24">
      <figure className="space-y-2">
        <img
          src={businessHotel}
          alt="Modern business hotel entrance at dusk with business travellers arriving with luggage"
          loading="lazy"
          width={1024}
          height={1280}
          className="w-full h-auto rounded-lg shadow-md border border-border"
        />
        <figcaption className="text-xs text-muted-foreground text-center italic">
          A modern business hotel
        </figcaption>
      </figure>
    </div>
  </div>
);

export default GettingStartedUnit13;
