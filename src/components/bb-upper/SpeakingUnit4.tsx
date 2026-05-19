import { Card, CardContent } from "@/components/ui/card";

const SpeakingUnit4 = () => (
  <div className="space-y-8">
    <Card className="service-card">
      <CardContent className="p-6">
        <h3 className="text-2xl font-semibold mb-2 font-merriweather text-foreground">Role-play: Booking a hotel meeting room</h3>
        <p className="text-muted-foreground mb-4">
          Work in pairs and practise the language you have just studied for booking hotel rooms. Each take one of the roles and prepare some of the language you want to use before you speak.
        </p>
      </CardContent>
    </Card>

    <div className="grid md:grid-cols-2 gap-6">
      <Card className="service-card">
        <CardContent className="p-6">
          <h4 className="text-xl font-semibold font-merriweather text-foreground mb-3">Student A — PA to the HR Manager</h4>
          <p className="text-foreground mb-3">Your HR Manager has sent you the following email. Plan what you are going to say and make the phone call.</p>
          <div className="rounded-lg border border-border bg-muted/40 p-4 text-sm text-foreground space-y-2">
            <p><strong>From:</strong> HR Manager</p>
            <p><strong>To:</strong> PA</p>
            <p><strong>Subject:</strong> Meeting room — Glasgow</p>
            <p className="mt-2">
              Please book us a meeting room at the Great Northern Hotel in Glasgow for next Friday. We'll need it from 10:00 to 16:00 for around 8 candidates plus 3 interviewers. Coffee and a light lunch would be ideal. Find out the rate and confirm by email. Thanks!
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="service-card">
        <CardContent className="p-6">
          <h4 className="text-xl font-semibold font-merriweather text-foreground mb-3">Student B — Receptionist, Great Northern Hotel, Glasgow</h4>
          <p className="text-foreground mb-3">Study the information below and prepare to take a phone reservation.</p>
          <table className="w-full text-sm">
            <tbody className="divide-y divide-border">
              <tr><td className="py-2 text-foreground">Double room with bath</td><td className="py-2 text-right font-medium">£165 / night</td></tr>
              <tr><td className="py-2 text-foreground">Single room with bath</td><td className="py-2 text-right font-medium">£135 / night</td></tr>
              <tr><td className="py-2 text-foreground">Conference room</td><td className="py-2 text-right font-medium">£50 / hour</td></tr>
              <tr><td className="py-2 text-foreground">Large meeting room (max 25)</td><td className="py-2 text-right font-medium">£30 / hour</td></tr>
              <tr><td className="py-2 text-foreground">Small meeting room (max 10)</td><td className="py-2 text-right font-medium">£20 / hour</td></tr>
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>

    <Card className="service-card">
      <CardContent className="p-6">
        <h3 className="text-2xl font-semibold mb-2 font-merriweather text-foreground">Role-play: Recruiting an assistant</h3>
        <p className="text-muted-foreground mb-4">
          Jack Burford is recruiting for the job of <strong>marketing assistant</strong>. Use the conversation in the Enquiring about a job listening as a model.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="rounded-lg border border-border p-4">
            <p className="font-semibold text-foreground mb-1">Student A — Jack Burford</p>
            <p className="text-sm text-muted-foreground">Invent the details of the post. Answer the phone and give information about the job.</p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <p className="font-semibold text-foreground mb-1">Student B — Job applicant</p>
            <p className="text-sm text-muted-foreground">Prepare questions and phone to find out details of the job at Burfords Light Engineering.</p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          <strong>Task tip:</strong> Before speaking, spend a minute or two preparing what you want to say. Then swap roles — Jack also needs an <strong>office manager</strong>.
        </p>
      </CardContent>
    </Card>

    <Card className="service-card">
      <CardContent className="p-6">
        <h3 className="text-2xl font-semibold mb-2 font-merriweather text-foreground">Talking point: Telephone-skills course</h3>
        <p className="text-muted-foreground mb-4">
          Work in pairs or groups of three. Your company has decided to run a one-day course on effective telephone skills at work. You have been asked to prepare the course. Discuss the situation together, and decide:
        </p>
        <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
          <li>which staff in a company would most benefit from this type of course</li>
          <li>what advice and training should be given during the course</li>
        </ul>
        <div className="rounded-lg border border-border bg-muted/40 p-4">
          <p className="font-semibold text-foreground mb-2">Useful language — Listing and giving examples</p>
          <ul className="text-sm text-foreground space-y-1">
            <li>I think there are three important things to remember when…</li>
            <li>The most important thing is … because …</li>
            <li>For example, … / For instance, …</li>
            <li>Another thing which is important is …</li>
            <li>Finally, you should …</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  </div>
);

export default SpeakingUnit4;
