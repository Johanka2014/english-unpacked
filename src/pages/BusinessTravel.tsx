import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Plane, Car, Luggage, Hotel, AlertCircle, MapPin } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import flightDelayImage from "@/assets/flight-delay.jpg";
import groundTransportImage from "@/assets/ground-transportation.jpg";
import lostLuggageImage from "@/assets/lost-luggage.jpg";
import carRentalImage from "@/assets/car-rental.jpg";
import hotelRoomImage from "@/assets/hotel-room-issue.jpg";
import stolenDocsImage from "@/assets/stolen-documents.jpg";

const BusinessTravel = () => {
  const scenarios = [
    {
      id: "flight-delays",
      icon: Plane,
      title: "Flight Delays & Cancellations",
      description: "Essential phrases for handling unexpected flight disruptions",
      image: flightDelayImage,
      keyPhrases: [
        "I'd like to inquire about alternative flights to [destination].",
        "Could you please rebook me on the next available flight?",
        "Am I entitled to any compensation for this delay?",
        "Can you provide a hotel voucher for tonight?",
        "What are my options for getting to [destination] today?",
        "I need to reach [destination] for an important business meeting."
      ],
      dialogue: `**At the airline desk:**\n\nTraveler: "Excuse me, I was scheduled on flight BA123 to Frankfurt, but I see it's been cancelled. What are my options?"\n\nAgent: "I apologize for the inconvenience. Let me check alternative flights for you."\n\nTraveler: "I have a crucial meeting tomorrow morning at 9 AM. Is there any way to get me there tonight?"\n\nAgent: "We have a flight departing at 8 PM via Munich. Would that work for you?"\n\nTraveler: "Yes, that would be perfect. Am I entitled to any compensation for this cancellation?"\n\nAgent: "Yes, since this was within our control, you're eligible for €250 compensation. I'll process that for you."`,
      emailTemplate: `**Subject: Formal Complaint - Flight Cancellation BA123 - [Date]**\n\nDear Customer Service,\n\nI am writing to formally complain about the cancellation of flight BA123 from London to Frankfurt on [date].\n\nDespite arriving at the airport 2 hours before departure as recommended, I was informed at check-in that the flight had been cancelled without prior notification.\n\nThis caused significant disruption to my business schedule, including:\n- Missing an important client meeting\n- Additional accommodation expenses\n- Alternative flight costs\n\nUnder EU Regulation 261/2004, I believe I am entitled to compensation. I request:\n1. Full refund or alternative flight\n2. €250 compensation for the cancellation\n3. Reimbursement for additional expenses (receipts attached)\n\nI look forward to your prompt response within 14 days.\n\nSincerely,\n[Your Name]`,
      culturalTips: [
        "In European airports, compensation claims are protected by EU261 regulation",
        "Stay calm and professional - airline staff are more likely to help cooperative passengers",
        "Document everything: take photos of departure boards, keep all receipts",
        "Know your rights before approaching the desk to negotiate confidently"
      ]
    },
    {
      id: "ground-transport",
      icon: Car,
      title: "Ground Transportation Issues",
      description: "Reorganizing taxis, ride-shares, and pickup arrangements",
      image: groundTransportImage,
      keyPhrases: [
        "I need to change my pickup location to [new address].",
        "My flight has been delayed - can we reschedule for [new time]?",
        "The driver is not at the agreed meeting point.",
        "I'm running 30 minutes late - can you please wait?",
        "Could you send me the driver's contact details?",
        "I need to cancel and rebook for a later time."
      ],
      dialogue: `**Phone call to taxi service:**\n\nTraveler: "Hello, I have a reservation for pickup at Terminal 3 at 2 PM, but my flight has been delayed. I now expect to arrive at 4 PM."\n\nDispatcher: "Let me check that booking for you. What's your confirmation number?"\n\nTraveler: "It's TX-4567. Is it possible to reschedule to 4 PM?"\n\nDispatcher: "Yes, I can adjust that. The same driver will wait for you. Should I have them hold a sign with your name?"\n\nTraveler: "Yes, that would be very helpful. I'll be at arrivals hall B."\n\nDispatcher: "Perfect. Your driver will meet you there at 4 PM with a name sign."`,
      emailTemplate: `**Subject: Pickup Time Change - Reservation #TX-4567**\n\nDear [Company Name],\n\nI am writing to request a change to my airport pickup reservation scheduled for [original date/time].\n\nDue to a flight delay, I now require pickup at:\n- **New Date/Time:** [new date and time]\n- **Location:** Terminal 3, Arrivals Hall B\n- **Flight Number:** [flight number]\n\nPlease confirm this change and provide the driver's contact information so I can coordinate upon arrival.\n\nIf this change is not possible, please let me know immediately so I can make alternative arrangements.\n\nThank you for your assistance.\n\nBest regards,\n[Your Name]\n[Phone Number]`,
      culturalTips: [
        "In Asia, always carry the hotel business card in local language for taxi drivers",
        "Many European airports have official taxi ranks - they're usually more reliable",
        "In the US, tip taxi drivers 15-20% of the fare",
        "Save the taxi company's WhatsApp number for easy communication"
      ]
    },
    {
      id: "lost-luggage",
      icon: Luggage,
      title: "Lost or Damaged Luggage",
      description: "Filing complaints and claiming compensation for baggage issues",
      image: lostLuggageImage,
      keyPhrases: [
        "My luggage didn't arrive on flight [number].",
        "I'd like to file a Property Irregularity Report (PIR).",
        "The suitcase arrived damaged - the handle is broken.",
        "What's the timeframe for locating my luggage?",
        "Can you provide an interim allowance for essential items?",
        "I need my luggage delivered to my hotel once found."
      ],
      dialogue: `**At the baggage claim desk:**\n\nTraveler: "Hello, my luggage hasn't arrived on flight LH456 from Munich. My baggage tag number is BA123456."\n\nAgent: "Let me trace that for you. Can I see your baggage claim receipt?"\n\nTraveler: "Here it is. I have important business presentations in that suitcase. When can I expect it?"\n\nAgent: "According to our system, it was loaded onto the next flight. It should arrive this evening at 8 PM. Shall I have it delivered to your hotel?"\n\nTraveler: "Yes please. Also, I need to purchase some essentials. Do you provide an interim allowance?"\n\nAgent: "Yes, you can claim up to €100 for immediate necessities. Keep all receipts and submit them with this PIR number."`,
      emailTemplate: `**Subject: Claim for Lost Luggage - PIR: [PIR Number]**\n\nDear Baggage Services,\n\nI am writing to formally claim compensation for my delayed/lost luggage.\n\n**Incident Details:**\n- Flight: [Flight Number] from [Origin] to [Destination]\n- Date: [Date]\n- PIR Number: [PIR Number]\n- Baggage Tag: [Tag Number]\n\n**Impact on Business:**\nThe delay has caused significant disruption as my luggage contained:\n- Business presentation materials\n- Professional attire for client meetings\n- Essential work documents\n\n**Expenses Incurred:**\n- Emergency clothing purchases: €[amount]\n- Toiletries and essentials: €[amount]\n- Total: €[total amount]\n\nI have attached all receipts and request full reimbursement under the Montreal Convention.\n\nI await your prompt response and expect my luggage to be delivered to:\n[Hotel Name and Address]\n[Contact Number]\n\nSincerely,\n[Your Name]`,
      culturalTips: [
        "File the PIR (Property Irregularity Report) before leaving the airport - it's crucial for claims",
        "Take photos of any damage immediately upon receipt",
        "Keep essential items and one change of clothes in carry-on luggage",
        "Most airlines cover basic necessities - keep receipts for reasonable expenses only"
      ]
    },
    {
      id: "car-rental",
      icon: Car,
      title: "Car Rental Problems",
      description: "Handling disputes and negotiating when rentals go wrong",
      image: carRentalImage,
      keyPhrases: [
        "This isn't the car category I booked and paid for.",
        "I need to document this existing damage before I accept the vehicle.",
        "I decline the additional insurance - I have coverage through my credit card.",
        "These charges weren't disclosed when I made the reservation.",
        "I'd like to speak with a manager about this price discrepancy.",
        "Can you provide this in writing before I sign?"
      ],
      dialogue: `**At the rental counter:**\n\nTraveler: "I reserved a full-size sedan, but you're offering me a compact. What are my options?"\n\nAgent: "We can upgrade you to an SUV for an additional €30 per day."\n\nTraveler: "I booked and paid for a full-size sedan. I expect either that car category or a free upgrade, not an additional charge."\n\nAgent: "Let me check with my supervisor... We can provide the SUV at no extra charge."\n\nTraveler: "Thank you. Before I accept, I'd like to inspect the vehicle and document any existing damage. Can someone accompany me?"\n\nAgent: "Of course. Also, would you like to add our comprehensive insurance?"\n\nTraveler: "No thank you, I have coverage through my corporate credit card. Please note that on the contract."`,
      emailTemplate: `**Subject: Dispute - Unexpected Charges on Rental Agreement #[Number]**\n\nDear [Rental Company] Customer Service,\n\nI am writing to dispute unauthorized charges on my recent car rental.\n\n**Reservation Details:**\n- Confirmation Number: [Number]\n- Rental Period: [Dates]\n- Reserved Vehicle: [Car Type]\n- Quoted Price: €[amount] per day\n\n**Issues Encountered:**\n1. Vehicle provided did not match reservation (downgrade from full-size to compact)\n2. Additional charges applied that were not disclosed at booking:\n   - \"Additional driver\" fee: €[amount] (not mentioned)\n   - \"Airport surcharge\": €[amount] (not in confirmation email)\n   - Total unexpected charges: €[amount]\n\n**Resolution Requested:**\nI request a refund of €[amount] representing the price difference and undisclosed fees.\n\nI have attached:\n- Original booking confirmation\n- Final rental agreement\n- Credit card statement\n\nI expect a response within 7 business days.\n\nSincerely,\n[Your Name]`,
      culturalTips: [
        "Always photograph the vehicle from all angles before departure",
        "Read the fine print - \"additional driver\" and \"one-way\" fees add up quickly",
        "In Europe, manual transmission is standard - specify automatic if needed",
        "Refuse pressure tactics for insurance if you have credit card coverage"
      ]
    },
    {
      id: "hotel-room",
      icon: Hotel,
      title: "Hotel Room Issues",
      description: "Requesting changes and addressing accommodation problems",
      image: hotelRoomImage,
      keyPhrases: [
        "The room doesn't match my reservation - I booked a king bed.",
        "There's excessive noise from the street/construction.",
        "The air conditioning isn't working properly.",
        "I'd like to request a room change to a higher floor.",
        "This isn't acceptable for the rate I'm paying.",
        "Could you upgrade me or offer a partial refund?"
      ],
      dialogue: `**At hotel reception:**\n\nTraveler: "Good evening. I've just checked into room 402, but there's significant noise from construction next door. I have important conference calls tomorrow."\n\nReceptionist: "I apologize for the inconvenience. Let me see what alternatives we have available."\n\nTraveler: "I specifically reserved a quiet room for business purposes. Do you have anything on a higher floor, away from the street?"\n\nReceptionist: "Yes, we have a junior suite on the 8th floor. It's much quieter and has a workspace. I can upgrade you at no additional charge."\n\nTraveler: "That sounds perfect. Also, given the inconvenience, would you be able to provide complimentary breakfast during my stay?"\n\nReceptionist: "Absolutely. I'll make a note of that. Let me arrange for your luggage to be moved immediately."`,
      emailTemplate: `**Subject: Complaint - Room Issues - Reservation #[Number]**\n\nDear Hotel Manager,\n\nI am writing to formally complain about the condition of my room during my stay from [dates].\n\n**Reservation Details:**\n- Confirmation: [Number]\n- Room Type Booked: [Description]\n- Rate Paid: €[amount] per night\n\n**Issues Encountered:**\n1. Room did not match booking (twin beds instead of king)\n2. Significant noise disruption from [source]\n3. [Other issues: cleanliness, facilities, etc.]\n\n**Impact:**\nAs a business traveler, I require a quiet, professional environment for client calls and preparation. These conditions made it impossible to work effectively.\n\n**Resolution Requested:**\n- Partial refund of €[amount] for the affected nights\n- Guaranteed room type for future bookings\n- Compensation in the form of [loyalty points/credit]\n\nI have been a loyal customer for [duration] and expect this matter to be resolved professionally.\n\nI await your response within 5 business days.\n\nSincerely,\n[Your Name]\n[Loyalty Program Number]`,
      culturalTips: [
        "Address issues immediately - problems are easier to resolve before check-out",
        "Be polite but firm - hotel staff have discretion to offer upgrades and compensation",
        "Mention loyalty status if applicable - it often results in better treatment",
        "Document issues with photos for potential reimbursement claims"
      ]
    },
    {
      id: "stolen-documents",
      icon: AlertCircle,
      title: "Stolen Passport or Wallet",
      description: "Emergency procedures for lost or stolen important documents",
      image: stolenDocsImage,
      keyPhrases: [
        "I need to report a stolen passport.",
        "Where is the nearest embassy/consulate?",
        "I need an emergency travel document.",
        "Can you help me cancel my credit cards?",
        "I need a police report for my insurance claim.",
        "How can I get temporary identification?"
      ],
      dialogue: `**At the police station:**\n\nTraveler: "Hello, I need to report a stolen wallet and passport. It happened about an hour ago at [location]."\n\nOfficer: "I'll need to take a statement. Do you have any identification?"\n\nTraveler: "I have a photocopy of my passport and my driver's license photo on my phone. Will that work?"\n\nOfficer: "Yes, that's helpful. I'll issue you a police report. You'll need this for your embassy and insurance claim."\n\nTraveler: "Thank you. Can you tell me where the [nationality] embassy is located?"\n\nOfficer: "It's at [address]. They're open until 5 PM. You should go there immediately to apply for an emergency travel document."\n\n**At the embassy:**\n\nTraveler: "Hello, my passport was stolen. I need an emergency travel document. I have a flight home in two days."\n\nConsular Officer: "I'll need the police report, two passport photos, and proof of citizenship. Do you have your birth certificate or any other documentation?"`,
      emailTemplate: `**Subject: Urgent - Stolen Passport - Request for Emergency Travel Document**\n\nDear Consular Services,\n\nI am writing to request assistance following the theft of my passport while traveling on business in [country].\n\n**Personal Details:**\n- Full Name: [Name]\n- Date of Birth: [DOB]\n- Passport Number: [Number]\n- Issue Date: [Date]\n\n**Incident Details:**\n- Date of Theft: [Date]\n- Location: [Location]\n- Police Report Number: [Number]\n\n**Urgent Situation:**\nI have a confirmed flight back to [home country] on [date] and require an emergency travel document to board.\n\n**Documentation Available:**\n- Police report (attached)\n- Photocopy of stolen passport\n- Driver's license\n- Credit card with photo ID\n\n**Request:**\nI request an emergency appointment to obtain a temporary travel document as soon as possible.\n\nI am available at:\n- Phone: [Number]\n- Email: [Email]\n- Current Location: [Hotel name and address]\n\nThank you for your urgent assistance.\n\nSincerely,\n[Your Name]`,
      culturalTips: [
        "Always keep photocopies/photos of important documents separate from originals",
        "Store emergency numbers in your phone: embassy, credit card companies, insurance",
        "Many embassies require appointments - call ahead even in emergencies",
        "Emergency travel documents are usually valid for single journey only",
        "Keep your hotel receipt - embassies often require proof of local address"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Scenarios Grid Section */}
      <section id="scenarios" className="py-20 bg-background pt-32">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground mb-6 font-merriweather text-center">
            Essential Travel Scenarios
          </h2>
          <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
            Master the language you need when things don't go as planned. Each scenario includes practical phrases, dialogues, and email templates.
          </p>

          {/* Scenario Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {scenarios.map((scenario) => {
              const Icon = scenario.icon;
              return (
                <Card 
                  key={scenario.id} 
                  className="service-card overflow-hidden cursor-pointer group"
                  onClick={() => {
                    document.getElementById(`lesson-${scenario.id}`)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={scenario.image} 
                      alt={scenario.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{scenario.title}</CardTitle>
                    <CardDescription>{scenario.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>

          {/* Detailed Lesson Plans */}
          <div className="max-w-5xl mx-auto space-y-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 font-merriweather text-center">
              Detailed Lesson Plans
            </h2>
            
            {scenarios.map((scenario) => {
              const Icon = scenario.icon;
              return (
                <div key={scenario.id} id={`lesson-${scenario.id}`} className="scroll-mt-20">
                  <Card className="service-card">
                    <CardHeader className="border-b">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 bg-brand-royal/10 rounded-full flex items-center justify-center">
                          <Icon className="w-6 h-6 text-brand-royal" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl">{scenario.title}</CardTitle>
                          <CardDescription className="text-base">{scenario.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="pt-6">
                      <Accordion type="single" collapsible className="w-full">
                        {/* Key Phrases */}
                        <AccordionItem value="phrases">
                          <AccordionTrigger className="text-lg font-semibold">
                            Essential Phrases
                          </AccordionTrigger>
                          <AccordionContent>
                            <ul className="space-y-3">
                              {scenario.keyPhrases.map((phrase, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <span className="text-brand-royal mt-1">•</span>
                                  <span className="text-muted-foreground italic">"{phrase}"</span>
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>

                        {/* Sample Dialogue */}
                        <AccordionItem value="dialogue">
                          <AccordionTrigger className="text-lg font-semibold">
                            Sample Conversation
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="prose prose-sm max-w-none text-muted-foreground whitespace-pre-line">
                              {scenario.dialogue}
                            </div>
                          </AccordionContent>
                        </AccordionItem>

                        {/* Email Template */}
                        <AccordionItem value="email">
                          <AccordionTrigger className="text-lg font-semibold">
                            Professional Email Template
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="bg-muted/50 p-4 rounded-md">
                              <pre className="text-sm text-muted-foreground whitespace-pre-wrap font-sans">
                                {scenario.emailTemplate}
                              </pre>
                            </div>
                          </AccordionContent>
                        </AccordionItem>

                        {/* Cultural Tips */}
                        <AccordionItem value="tips">
                          <AccordionTrigger className="text-lg font-semibold">
                            Cultural & Practical Tips
                          </AccordionTrigger>
                          <AccordionContent>
                            <ul className="space-y-2">
                              {scenario.culturalTips.map((tip, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <span className="text-brand-royal mt-1">✓</span>
                                  <span className="text-muted-foreground">{tip}</span>
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section 
        className="relative py-20 text-white overflow-hidden"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("${heroBackground}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/20 to-brand-royal/20"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6 font-merriweather">
              Ready to Travel with Confidence?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Book a consultation to practice these scenarios with personalized coaching and role-play exercises.
            </p>
            <Button 
              size="lg" 
              className="hero-button bg-white text-brand-navy hover:bg-white/90 transition-all duration-300"
              asChild
            >
              <a href="/booking">
                Book Your Consultation
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BusinessTravel;