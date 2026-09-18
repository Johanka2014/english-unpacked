import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Users, Landmark } from "lucide-react";

const WARMUP = [
  "Does your company (or a company you know well) have a website? What does it contain?",
  "Who designed it? How often is it updated?",
  "What do you like and dislike about it? Would you change anything?",
];

const DISCUSSION = [
  "Most web traffic today comes from phones. What does a company lose if its website doesn't work well on a mobile?",
  "Customer reviews and star ratings appear on almost every shopping site. How much do they influence what you buy?",
  "Websites ask you to accept or reject cookies. Do you read those banners? Why do companies need them?",
  "Many sites now use live chat or AI chatbots. When is a chatbot helpful, and when is it frustrating?",
  "'Page speed' — if a page takes more than a few seconds to load, most visitors leave. How fast is fast enough for business?",
  "Accessibility means websites that everyone can use, including people with poor eyesight. What could make a site easier to use for everyone?",
];

const SpeakingInternetExercise = () => {
  return (
    <div className="space-y-8">
      {/* ── Warm-up ── */}
      <Card>
        <CardHeader>
          <CardTitle className="font-serif text-xl flex items-center gap-2">
            <MessageCircle className="h-5 w-5 text-primary" /> 1. Warm-up — your company's website
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal list-inside space-y-2 text-foreground">
            {WARMUP.map((q) => (
              <li key={q} className="text-sm">{q}</li>
            ))}
          </ol>
        </CardContent>
      </Card>

      {/* ── Modern discussion ── */}
      <Card>
        <CardHeader>
          <CardTitle className="font-serif text-xl">2. Discussion — designing a website today</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            The 2006 article talked about splash pages and flashing text. Websites have changed a lot since then —
            use these questions to talk about the internet your students actually use.
          </p>
          <ol className="list-decimal list-inside space-y-2 text-foreground">
            {DISCUSSION.map((q) => (
              <li key={q} className="text-sm">{q}</li>
            ))}
          </ol>
          <div className="rounded-lg border border-amber-300/60 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-800/40 p-4 text-sm">
            <p className="font-semibold mb-1">Useful modern vocabulary</p>
            <p className="text-muted-foreground">
              <em>mobile-first design · responsive design · page speed · customer reviews · social proof · cookie
              banner · live chat · AI chatbot · accessibility · SEO (search engine optimisation) · sign-up form ·
              call to action</em>
            </p>
          </div>
        </CardContent>
      </Card>

      {/* ── Role-play ── */}
      <Card>
        <CardHeader>
          <CardTitle className="font-serif text-xl flex items-center gap-2">
            <Landmark className="h-5 w-5 text-primary" /> 3. Role-play — online business banking
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Work in pairs and each take one role. Read your card and take a few minutes to prepare. When you are
            ready, Student A begins. (Phishing and online fraud are an even bigger issue today than when this
            activity was written — so the security questions are very up to date.)
          </p>
          <div className="grid md:grid-cols-2 gap-4 items-start">
            <div className="rounded-lg border p-4 bg-muted/30 space-y-3">
              <p className="font-semibold flex items-center gap-2"><Users className="h-4 w-4 text-primary" /> Student A</p>
              <p className="text-sm text-foreground">
                You are <strong>starting a new business</strong> and want to find out about the online business
                banking service that your bank offers. You are talking to an employee at the bank.
              </p>
              <p className="text-sm text-foreground">Find out the following information:</p>
              <ol className="list-decimal list-inside text-sm text-foreground space-y-1">
                <li>ways of accessing your business account</li>
                <li>the security measures that the bank uses</li>
                <li>special deals for new business customers</li>
              </ol>
              <p className="text-sm text-muted-foreground">
                Prepare your questions, then ask your partner for the information. At the end, give your opinion on
                their online banking service.
              </p>
            </div>
            <div className="rounded-lg border p-4 bg-muted/30 space-y-3">
              <p className="font-semibold flex items-center gap-2"><Landmark className="h-4 w-4 text-primary" /> Student B</p>
              <p className="text-sm text-foreground">
                You are an <strong>employee at a bank</strong>. A customer is asking you about your online business
                accounts. Here is the information:
              </p>
              <p className="text-sm font-semibold">Business current account</p>
              <ul className="list-disc list-inside text-sm text-foreground space-y-1">
                <li>Customers can access their account online, via the business telephone banking service or at any ATM. The telephone service is available 24 hours a day.</li>
                <li>You have good security measures. You use the latest anti-virus software, and a firewall to stop hackers or fraudsters accessing the account.</li>
                <li>New business customers do not pay any handling charge for the first 12 months. Customers can also negotiate the size of their overdraft with the bank manager.</li>
              </ul>
              <p className="text-sm text-muted-foreground">
                Answer the customer's questions and try to convince them to open a business account with you.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SpeakingInternetExercise;
