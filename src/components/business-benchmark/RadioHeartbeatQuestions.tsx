import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const items = [
  { answer: "30 thousand each day.", model: "How many listeners does Johnny Race attract?" },
  { answer: "The interviews.", model: "What do people especially like about Marie Riley's show?" },
  { answer: "No, he isn't worried.", model: "Is David Webb worried by the figures?" },
  { answer: "Younger listeners.", model: "Who is Radio Heartbeat trying to appeal to?" },
  { answer: "Because he has a great personality.", model: "Why is David Webb sure Johnny can bring listeners in?" },
  { answer: "Leaving Radio Heartbeat.", model: "What is Morgan Wells thinking of doing?" },
];

const RadioHeartbeatQuestions = () => {
  const [values, setValues] = useState<string[]>(items.map((_, i) => (i === 0 ? items[0].model : "")));
  const [show, setShow] = useState(false);

  return (
    <Card className="service-card">
      <CardContent className="p-6">
        <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">4. Write the questions</h3>
        <p className="text-muted-foreground mb-4">
          Read the article and then write the questions for the answers (1–6). The first one is done for you.
        </p>

        <article className="mx-auto max-w-3xl rounded-lg border border-border bg-muted/30 p-5 mb-6">
          <h4 className="font-merriweather text-xl font-bold text-foreground mb-3 uppercase">
            Audience numbers down for Radio Heartbeat
          </h4>
          <div className="md:columns-2 gap-6 text-foreground text-sm leading-relaxed space-y-3">
            <p>
              Things are not looking good at Radio Heartbeat at the moment. Their new breakfast show presenter, Johnny Race,
              just can't keep the listeners. He only attracts 30,000 listeners each morning whereas 45,000 people regularly
              listen to the rival station, Hugz. Even more worrying for Heartbeat is the success of Marie Riley's new
              breakfast show over on Shire Radio. According to opinion surveys, people especially like the interviews on her show.
            </p>
            <p>
              Heartbeat's chief executive, David Webb, says that he is not worried by the figures. 'We're trying to appeal to
              younger listeners now,' he says. 'They need time to find us. Johnny's got a great personality and I'm sure he
              can bring them in. We have every confidence in him.'
            </p>
            <p>
              Unfortunately, now Heartbeat's teatime DJ, Morgan Wells, says he is thinking of leaving the station. If he does,
              this will be another major blow for Radio Heartbeat.
            </p>
          </div>
        </article>

        <ol className="space-y-4">
          {items.map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="font-semibold text-foreground pt-2">{i + 1}</span>
              <div className="flex-1 space-y-1">
                <Input
                  value={values[i]}
                  disabled={i === 0}
                  placeholder="Write the question…"
                  onChange={(e) => setValues((v) => v.map((x, j) => (j === i ? e.target.value : x)))}
                />
                <p className="text-sm text-muted-foreground italic">{item.answer}</p>
                {show && i > 0 && (
                  <p className="text-sm text-primary">Possible answer: {item.model}</p>
                )}
              </div>
            </li>
          ))}
        </ol>

        <div className="flex gap-3 mt-6">
          <Button onClick={() => setShow((s) => !s)}>{show ? "Hide model answers" : "Show model answers"}</Button>
          <Button variant="outline" onClick={() => { setValues(items.map((_, i) => (i === 0 ? items[0].model : ""))); setShow(false); }}>
            Reset
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default RadioHeartbeatQuestions;
