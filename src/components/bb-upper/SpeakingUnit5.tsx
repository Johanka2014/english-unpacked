import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

const SpeakingUnit5 = () => (
  <div className="space-y-6">
    <Card className="service-card">
      <CardContent className="p-6 space-y-3">
        <h3 className="text-2xl font-semibold font-merriweather text-foreground">Speaking: Role-play</h3>
        <p className="text-muted-foreground">Work in groups of about four.</p>
        <p className="text-foreground leading-relaxed">
          You work on the creative team in the marketing department of a large multinational company. The company has decided that it is time to launch in your country a shampoo which has been very successful in the United States and Canada. The target customers for this shampoo, called <em>Provocation</em> in the US and Canada, are young women aged 12–25.
        </p>
        <p className="font-semibold text-foreground">Your job is to prepare a promotional campaign for the launch. You should:</p>
        <ul className="list-disc pl-6 space-y-1 text-foreground">
          <li>brainstorm ideas for possible promotional activities</li>
          <li>evaluate the ideas and decide which ones you want to use</li>
          <li>produce a plan of action</li>
          <li>compare your plans with other creative teams.</li>
        </ul>
      </CardContent>
    </Card>

    <Card className="service-card bg-muted/30">
      <CardContent className="p-6 text-sm space-y-2">
        <p className="font-semibold text-brand-royal">Useful language — Brainstorming</p>
        <p className="text-foreground">Brainstorming consists of thinking of as many ideas as possible, without deciding whether they are good or bad ideas until later. It is a common activity in advertising agencies.</p>
        <ul className="list-disc pl-6 space-y-1 text-foreground">
          <li>How about …? + <em>-ing</em> form</li>
          <li>Why don't we …? + <em>infinitive</em></li>
          <li>I think … would be a good idea.</li>
          <li>Have you thought of …? + <em>-ing</em> form</li>
        </ul>
      </CardContent>
    </Card>

    <Card className="service-card">
      <CardContent className="p-6 space-y-2">
        <h4 className="font-semibold text-brand-royal">Your plan of action</h4>
        <p className="text-sm text-muted-foreground">Use the space below to note down the team's chosen promotional activities and how you will execute them.</p>
        <Textarea rows={8} placeholder="Promotional activities, target media, key messages, budget priorities, timeline…" />
      </CardContent>
    </Card>
  </div>
);

export default SpeakingUnit5;
