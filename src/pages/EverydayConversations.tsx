import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Stethoscope, Heart, UtensilsCrossed, Home, Car, Pill, Briefcase, MessageCircle } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import dentistImg from "@/assets/dentist-visit.jpg";
import doctorImg from "@/assets/doctor-appointment.jpg";
import restaurantImg from "@/assets/restaurant-booking.jpg";
import flatImg from "@/assets/flat-rental.jpg";
import carRentalImg from "@/assets/car-rental-desk.jpg";
import pharmacyImg from "@/assets/pharmacy.jpg";
import jobInterviewImg from "@/assets/job-interview.jpg";
import smallTalkImg from "@/assets/small-talk.jpg";

const scenarios = [
  {
    id: "dentist-visit",
    icon: Stethoscope,
    title: "Trip to the Dentist",
    description: "Schedule appointments and discuss dental care confidently",
    image: dentistImg,
    keyPhrases: [
      "I'd like to schedule a routine check-up, please.",
      "I've been experiencing some sensitivity in my lower left molar.",
      "Do I need a cleaning or just an examination?",
      "How much will this cost? Is it covered by insurance?",
      "When should I schedule my next appointment?",
      "Can you recommend a good toothpaste for sensitive teeth?"
    ],
    dialogue: `**Scheduling the Appointment (Phone Call)**

Receptionist: "Good morning, City Dental. How can I help you?"

You: "Hi, I'd like to schedule a check-up. I haven't been to the dentist in about a year."

Receptionist: "Of course. We have availability next Tuesday at 2 PM or Thursday at 10 AM. Which works better for you?"

You: "Tuesday at 2 PM would be perfect. Also, I've been having some sensitivity when I drink cold beverages."

Receptionist: "I'll make a note for the dentist. Can I get your name and contact information?"

**At the Appointment**

Dentist: "Hello! I see you're experiencing some sensitivity. Can you tell me more about it?"

You: "Yes, it's mostly on the left side. It happens when I have something cold."

Dentist: "Let me take a look. You might have a small cavity. We can fill it today if you'd like."

You: "How much would that cost? Does my insurance cover it?"`,
    practicalTips: [
      "Call early in the morning for same-week appointments",
      "Always ask about costs upfront if you don't have insurance coverage",
      "Bring your insurance card and ID to every appointment",
      "If you're nervous about dental work, let them know - they can help you feel more comfortable",
      "Schedule your next cleaning before leaving the office",
      "Ask for a written treatment plan if multiple procedures are recommended"
    ]
  },
  {
    id: "doctor-appointment",
    icon: Heart,
    title: "Doctor's Appointment",
    description: "Explain symptoms and understand medical advice clearly",
    image: doctorImg,
    keyPhrases: [
      "I'd like to make an appointment with Dr. Smith, please.",
      "I've been experiencing headaches for the past few days.",
      "Could you explain what this medication is for?",
      "Are there any side effects I should be aware of?",
      "Do I need to take this on an empty stomach?",
      "When should I come back for a follow-up?"
    ],
    dialogue: `**Making the Appointment**

Receptionist: "Medical Center, how may I help you?"

You: "I'd like to schedule an appointment. I've been having persistent headaches."

Receptionist: "Have you seen us before?"

You: "Yes, my doctor is Dr. Smith."

Receptionist: "We have an opening tomorrow at 3 PM. Does that work?"

You: "That's perfect, thank you."

**At the Doctor's Office**

Doctor: "Tell me about these headaches. When did they start?"

You: "About a week ago. They're mostly in the afternoon and feel like pressure behind my eyes."

Doctor: "Are you experiencing any other symptoms? Nausea, vision changes?"

You: "No, just the headaches and maybe a bit of fatigue."

Doctor: "I'm going to prescribe something for the pain. If it doesn't improve in a week, please come back."`,
    practicalTips: [
      "Write down your symptoms before the appointment so you don't forget",
      "Bring a list of any medications you're currently taking",
      "Don't be afraid to ask the doctor to repeat or clarify something",
      "Take notes or bring someone with you to help remember the information",
      "Ask for written instructions for medications and treatments",
      "Confirm the pharmacy where your prescription will be sent"
    ]
  },
  {
    id: "restaurant-booking",
    icon: UtensilsCrossed,
    title: "Booking a Restaurant Table",
    description: "Make reservations and communicate special requirements",
    image: restaurantImg,
    keyPhrases: [
      "I'd like to make a reservation for four people, please.",
      "Do you have any tables available for Saturday evening?",
      "We have one person with a gluten allergy. Can you accommodate that?",
      "Could we have a table near the window?",
      "Is there a dress code for your restaurant?",
      "Can we bring our own wine? Is there a corkage fee?"
    ],
    dialogue: `**Making the Reservation (Phone Call)**

Host: "Le Bistro, good afternoon. How may I help you?"

You: "Hi, I'd like to make a reservation for this Saturday at 7:30 PM for four people."

Host: "Let me check... Yes, we have availability. May I have your name?"

You: "It's Sarah Johnson. Also, one person in our party has a nut allergy. Can the kitchen accommodate that?"

Host: "Absolutely. I'll make a note on your reservation. We'll inform the chef."

You: "Perfect. Is there a dress code?"

Host: "Smart casual. We look forward to seeing you Saturday evening."

**Upon Arrival**

You: "Hi, we have a reservation under Johnson for 7:30."

Host: "Welcome! Your table is ready. Please follow me. I've informed your server about the allergy."

You: "Thank you so much."`,
    practicalTips: [
      "Book popular restaurants at least a week in advance, especially for weekends",
      "Always mention allergies and dietary restrictions when booking",
      "Confirm your reservation the day before, especially for large groups",
      "Arrive on time - most restaurants will only hold tables for 15 minutes",
      "Research the dress code online if you're unsure",
      "If you need to cancel, do so at least 24 hours in advance"
    ]
  },
  {
    id: "flat-rental",
    icon: Home,
    title: "Renting a Flat",
    description: "View properties and negotiate rental terms confidently",
    image: flatImg,
    keyPhrases: [
      "I'm interested in viewing the flat listed on your website.",
      "How much is the security deposit?",
      "Are utilities included in the rent?",
      "What's the minimum lease period?",
      "Is the flat furnished or unfurnished?",
      "Can I see the tenancy agreement before signing?"
    ],
    dialogue: `**Initial Inquiry (Phone Call)**

Agent: "Hello, Premium Lettings. This is Mark speaking."

You: "Hi, I'm calling about the two-bedroom flat in Riverside. Is it still available?"

Agent: "Yes, it is. Would you like to schedule a viewing?"

You: "Yes, please. Could I see it this weekend?"

Agent: "Saturday at 2 PM works. What's your contact information?"

**At the Viewing**

Agent: "Here's the living room. As you can see, it's very spacious with plenty of natural light."

You: "It's lovely. Are utilities included in the rent?"

Agent: "Gas and water are included, but electricity and internet are separate."

You: "What's the security deposit?"

Agent: "It's equal to six weeks' rent. You'd get it back at the end of the tenancy if there's no damage."

You: "And what's the minimum lease?"

Agent: "Twelve months, but we can discuss shorter terms if needed."`,
    practicalTips: [
      "View the property in person before committing - photos can be misleading",
      "Check water pressure, heating, and all appliances during the viewing",
      "Ask about the notice period for both you and the landlord",
      "Take photos during the move-in inspection to document the flat's condition",
      "Read the entire contract before signing - get help if you don't understand",
      "Verify that your deposit will be protected in a government scheme"
    ]
  },
  {
    id: "car-rental",
    icon: Car,
    title: "Renting a Car",
    description: "Book vehicles and understand rental terms and insurance",
    image: carRentalImg,
    keyPhrases: [
      "I'd like to rent a car for the weekend, please.",
      "What's your fuel policy?",
      "Does the price include insurance?",
      "Is there an additional driver fee?",
      "Can I drop the car off at a different location?",
      "What happens if I return the car late?"
    ],
    dialogue: `**At the Rental Counter**

Agent: "Good morning! Do you have a reservation?"

You: "Yes, under Thompson. I booked a mid-size car for three days."

Agent: "Perfect. I'll need your driver's license and a credit card. Would you like to add additional insurance?"

You: "What does your basic insurance cover?"

Agent: "It covers collision damage with a £500 excess. Our premium insurance reduces that to zero."

You: "I'll stick with the basic. What's your fuel policy?"

Agent: "Full to full. The tank is full now, just return it full and there's no fuel charge."

You: "Can my wife drive it too?"

Agent: "Yes, there's a £10 per day additional driver fee. I'll need her license as well."

**Vehicle Inspection**

Agent: "Let's walk around the car. Note any existing damage on this form."

You: "There's a small scratch on the rear bumper."

Agent: "Good catch. I'll mark that down. Here are the keys. Enjoy your trip!"`,
    practicalTips: [
      "Book in advance for better rates and vehicle selection",
      "Check if your credit card offers rental car insurance before purchasing extra",
      "Take photos/videos of the car before leaving the lot, including inside",
      "Understand the fuel policy - 'full to full' is usually cheapest",
      "Keep all receipts, especially fuel receipts if required",
      "Check for toll passes and ask how they're charged",
      "Know the emergency contact number and roadside assistance policy"
    ]
  },
  {
    id: "pharmacy",
    icon: Pill,
    title: "At the Pharmacy",
    description: "Collect prescriptions and ask about medications",
    image: pharmacyImg,
    keyPhrases: [
      "I'm here to collect a prescription for Johnson.",
      "How often should I take this medication?",
      "Can I take this with food?",
      "Are there any side effects I should watch for?",
      "Do you have a generic version of this medication?",
      "Can I get a refill on this prescription?"
    ],
    dialogue: `**Dropping Off a Prescription**

You: "Hi, I need to drop off a prescription."

Pharmacist: "Sure, I'll need your name and date of birth for our records."

You: "Sarah Mitchell, March 15th, 1985."

Pharmacist: "Thank you. This will be ready in about 20 minutes. We'll send you a text when it's ready."

**Picking Up the Medication**

Pharmacist: "Here's your prescription. Let me explain how to take it."

You: "Thank you. Should I take it with food?"

Pharmacist: "Yes, take one tablet twice daily with meals. It can cause stomach upset on an empty stomach."

You: "Are there any side effects I should know about?"

Pharmacist: "You might feel a bit drowsy. Avoid driving until you know how it affects you. If you notice any severe reactions, contact your doctor."

You: "How much do I owe you?"

Pharmacist: "Your insurance covers most of it. Your copay is £8.50."`,
    practicalTips: [
      "Always bring your insurance card and ID",
      "Ask for the generic version - it's usually much cheaper and the same medication",
      "Keep a list of all medications you're taking to avoid interactions",
      "Ask if the pharmacy has an app for easy refills",
      "If the cost is high, ask the pharmacist if there are cheaper alternatives",
      "Set reminders on your phone so you don't forget to take your medication"
    ]
  },
  {
    id: "job-interview",
    icon: Briefcase,
    title: "Job Interview",
    description: "Answer questions confidently and present your experience",
    image: jobInterviewImg,
    keyPhrases: [
      "Could you tell me more about the role and responsibilities?",
      "I have three years of experience in project management.",
      "My greatest strength is my ability to work well under pressure.",
      "In my previous role, I successfully led a team of five people.",
      "What are the opportunities for professional development?",
      "What would you say is the company culture like?"
    ],
    dialogue: `**The Interview**

Interviewer: "Thanks for coming in today. Tell me a bit about yourself."

You: "Thank you for having me. I'm a marketing professional with five years of experience in digital campaigns. In my current role at Tech Solutions, I manage a team of three and oversee our social media strategy."

Interviewer: "That's great. Can you describe a challenging project you worked on?"

You: "Certainly. Last year, we launched a campaign with a tight deadline. I coordinated between design, content, and sales teams to deliver on time. We exceeded our engagement goals by 40%."

Interviewer: "Impressive. Where do you see yourself in five years?"

You: "I'd like to be in a senior marketing role, possibly leading a larger team and working on strategic initiatives. That's why I'm excited about this opportunity - it aligns with those goals."

Interviewer: "Do you have any questions for me?"

You: "Yes, what does success look like in this role after the first six months? And what are the opportunities for professional development?"`,
    practicalTips: [
      "Research the company thoroughly before the interview",
      "Prepare specific examples of your achievements using the STAR method",
      "Dress professionally and arrive 10-15 minutes early",
      "Bring extra copies of your resume and a notepad",
      "Prepare thoughtful questions to ask the interviewer",
      "Send a thank-you email within 24 hours after the interview",
      "Practice common interview questions out loud beforehand"
    ]
  },
  {
    id: "small-talk",
    icon: MessageCircle,
    title: "Making Small Talk",
    description: "Build rapport with casual conversations in English",
    image: smallTalkImg,
    keyPhrases: [
      "How was your weekend?",
      "This weather is lovely, isn't it?",
      "Have you been watching [popular show]?",
      "Any plans for the summer?",
      "How long have you lived in this area?",
      "What do you like to do in your free time?"
    ],
    dialogue: `**At the Office Coffee Machine**

Colleague: "Morning! How was your weekend?"

You: "It was great, thanks. We went hiking in the countryside. How about yours?"

Colleague: "Nice! Mine was quiet - just caught up on some reading. The weather was perfect for it."

You: "It was beautiful, wasn't it? Hopefully it stays nice for the rest of the week."

**Waiting for a Meeting**

You: "Have you been with the company long?"

Colleague: "About three years now. How about you?"

You: "I just started last month. Still finding my way around!"

Colleague: "Welcome! If you need any help settling in, just ask. This is a great place to work."

You: "Thanks, I appreciate that. Everyone's been really welcoming."

**At a Social Event**

Person: "So, what do you do for fun?"

You: "I love cooking and trying new recipes. How about you?"

Person: "I'm really into photography. Actually, I just got back from a photography weekend in Scotland."

You: "That sounds amazing! I've always wanted to visit Scotland."`,
    practicalTips: [
      "Use open-ended questions to keep conversations flowing",
      "Show genuine interest by asking follow-up questions",
      "Weather is always a safe topic to start with in British culture",
      "Avoid controversial topics like politics or religion in casual settings",
      "Listen actively and remember details people share for future conversations",
      "Smile and maintain friendly eye contact",
      "Have a few 'go-to' topics ready: travel, food, hobbies, local events"
    ]
  }
];

const EverydayConversations = () => {
  const scrollToScenario = (scenarioId: string) => {
    const element = document.getElementById(scenarioId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section 
        className="relative min-h-[60vh] flex items-center justify-center text-white overflow-hidden"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("${heroBackground}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/30 to-brand-royal/30"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 pt-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight font-merriweather">
            Master Everyday Conversations
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Build confidence in real-world situations with practical English for daily life scenarios
          </p>
          <Button 
            size="lg" 
            className="hero-button"
            onClick={() => scrollToScenario('dentist-visit')}
          >
            Explore Scenarios
          </Button>
        </div>
      </section>

      {/* Scenarios Grid Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-merriweather">
              Essential Everyday Scenarios
            </h2>
            <p className="text-lg text-muted-foreground">
              Master the language you need for common situations with detailed lessons, key phrases, 
              sample conversations, and practical tips for success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {scenarios.map((scenario) => (
              <Card 
                key={scenario.id}
                className="service-card overflow-hidden cursor-pointer group shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => scrollToScenario(scenario.id)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={scenario.image} 
                    alt={scenario.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-brand-royal/90 p-3 rounded-full">
                    <scenario.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="font-merriweather">{scenario.title}</CardTitle>
                  <CardDescription>{scenario.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Lesson Plans Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-merriweather">
              Detailed Scenario Practice
            </h2>
            <p className="text-lg text-muted-foreground">
              Each scenario includes essential phrases, realistic dialogues, and practical tips 
              to help you communicate confidently in any situation.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {scenarios.map((scenario) => (
              <Card 
                key={scenario.id} 
                id={scenario.id}
                className="service-card scroll-mt-20"
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="bg-brand-royal/10 p-3 rounded-full">
                      <scenario.icon className="w-8 h-8 text-brand-royal" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-merriweather">{scenario.title}</CardTitle>
                      <CardDescription className="text-base">{scenario.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="phrases">
                      <AccordionTrigger className="text-lg font-semibold">
                        Essential Phrases
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-3">
                          {scenario.keyPhrases.map((phrase, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <span className="text-brand-royal font-bold mt-1">•</span>
                              <span className="text-muted-foreground leading-relaxed">{phrase}</span>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="dialogue">
                      <AccordionTrigger className="text-lg font-semibold">
                        Sample Conversation
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="prose prose-sm max-w-none">
                          <div className="bg-muted/50 p-6 rounded-lg whitespace-pre-line text-muted-foreground leading-relaxed">
                            {scenario.dialogue}
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="tips">
                      <AccordionTrigger className="text-lg font-semibold">
                        Practical & Cultural Tips
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-3">
                          {scenario.practicalTips.map((tip, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <span className="text-brand-mint font-bold mt-1">✓</span>
                              <span className="text-muted-foreground leading-relaxed">{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section 
        className="relative py-20 text-white overflow-hidden"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("${heroBackground}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/40 to-brand-royal/40"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-merriweather">
            Ready to Practice These Conversations?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
            Book a free consultation to discuss your learning goals and start building 
            confidence in everyday English conversations.
          </p>
          <Button 
            size="lg" 
            className="hero-button"
            asChild
          >
            <a href="https://calendly.com/english-unpacked/consultation" target="_blank" rel="noopener noreferrer">
              Book a Free Consultation
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EverydayConversations;
