import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle2 } from 'lucide-react';

/* ---------- helpers ---------- */
const norm = (s: string) =>
  s.trim().toLowerCase().replace(/['']/g, "'").replace(/\s+/g, ' ').replace(/\.$/, '');

const accepts = (val: string, answers: string[]) => {
  const v = norm(val);
  return answers.some((a) => norm(a) === v);
};

interface GapProps {
  id: string;
  answers: string[];
  placeholder?: string;
  width?: string;
  values: Record<string, string>;
  setValues: React.Dispatch<React.SetStateAction<Record<string, string>>>;
  checked: boolean;
}

const Gap = ({ id, answers, placeholder, width = 'w-32', values, setValues, checked }: GapProps) => {
  const val = values[id] || '';
  const correct = accepts(val, answers);
  return (
    <span className="inline-flex items-center gap-1 align-middle mx-1">
      <Input
        className={`inline-block ${width} h-8 text-sm ${
          checked
            ? correct
              ? 'border-green-500 bg-green-50'
              : 'border-red-500 bg-red-50'
            : ''
        }`}
        placeholder={placeholder}
        value={val}
        onChange={(e) => setValues((p) => ({ ...p, [id]: e.target.value }))}
      />
      {checked &&
        (correct ? (
          <CheckCircle2 className="h-4 w-4 text-green-600" />
        ) : (
          <span className="text-xs text-muted-foreground whitespace-nowrap">{answers[0]}</span>
        ))}
    </span>
  );
};

const whilePrompts = [
  {
    n: 1,
    prompt: 'Marriott Hotel / situated / city centre / Hyatt Hotel / located / near airport',
    sample:
      'While the Marriott Hotel is situated in the city centre, the Hyatt Hotel is located near the airport.',
  },
  {
    n: 2,
    prompt: 'Expo Hotel / caters / business people / Bali Hotel / looks / tourists',
    sample:
      'While the Expo Hotel caters for business people, the Bali Hotel looks after tourists.',
  },
  {
    n: 3,
    prompt: 'British Airways / offers / business class and tourist class / EasyJet / has / only one class',
    sample:
      'Whereas British Airways offers business class and tourist class, EasyJet has only one class.',
  },
  {
    n: 4,
    prompt:
      'Forty per cent of business travellers / choose airlines / price / 35% of business travellers choose them / schedules',
    sample:
      'While forty per cent of business travellers choose airlines on price, 35% of business travellers choose them on schedules.',
  },
  {
    n: 5,
    prompt: 'Hilton Hotel / excellent conference facilities / Paradise Hotel / quiet / small / family-run',
    sample:
      'While the Hilton Hotel has excellent conference facilities, the Paradise Hotel is quiet, small and family-run.',
  },
];

const modalGaps: { id: string; answers: string[]; hint: string }[] = [
  { id: 'm2', answers: ['should have stayed'], hint: 'stay' },
  { id: 'm3', answers: ['could have rested'], hint: 'rest' },
  { id: 'm4', answers: ['might have been', 'may have been', 'could have been'], hint: 'be' },
  { id: 'm5', answers: ['might have made', 'may have made', 'could have made'], hint: 'make' },
  { id: 'm6', answers: ['might have just dialled', 'may have just dialled', 'could have just dialled', 'might have just dialed', 'may have just dialed', 'could have just dialed'], hint: 'just dial' },
  { id: 'm7', answers: ['should have told', 'ought to have told'], hint: 'tell' },
];

const GrammarUnit13 = () => {
  const [whileAnswers, setWhileAnswers] = useState<Record<number, string>>({});
  const [whileShown, setWhileShown] = useState(false);

  const [modalVals, setModalVals] = useState<Record<string, string>>({});
  const [modalChecked, setModalChecked] = useState(false);

  return (
    <div className="space-y-10">
      {/* Intro */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h2 className="text-2xl md:text-3xl font-bold font-merriweather text-foreground mb-2">
            Grammar Workshop — Unit 13
          </h2>
          <p className="text-muted-foreground">
            Practise contrasting ideas with <em>while</em> and <em>whereas</em>, and modal perfect forms
            (<em>should have</em>, <em>could have</em>, <em>might have</em>).
          </p>
        </CardContent>
      </Card>

      {/* While / Whereas */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold font-merriweather text-foreground mb-3">
            1. While and whereas for contrasting ideas
          </h3>
          <div className="bg-muted/30 rounded-lg p-4 border border-border mb-5 text-sm space-y-2">
            <p>
              <strong>While</strong> and <strong>whereas</strong> can be used to join two sentences with
              contrasting meanings:
            </p>
            <p className="italic">
              While/Whereas Rhône Poulenc produces chemicals, Nestlé produces food products.
            </p>
            <p>This can also be expressed:</p>
            <p className="italic">
              Rhône Poulenc produces chemicals while/whereas Nestlé produces food products.
            </p>
          </div>
          <p className="text-foreground mb-4">
            Use these prompts to write sentences using <em>while</em> or <em>whereas</em>.
          </p>
          <div className="space-y-4">
            {whilePrompts.map((p) => (
              <div key={p.n} className="border-l-4 border-primary/40 pl-4">
                <p className="text-sm text-muted-foreground mb-1">
                  <strong>{p.n}.</strong> {p.prompt}
                </p>
                <Textarea
                  rows={2}
                  placeholder="Write your sentence..."
                  value={whileAnswers[p.n] || ''}
                  onChange={(e) => setWhileAnswers((prev) => ({ ...prev, [p.n]: e.target.value }))}
                />
                {whileShown && (
                  <p className="text-sm text-green-700 mt-2">
                    <strong>Sample:</strong> {p.sample}
                  </p>
                )}
              </div>
            ))}
          </div>
          <Button className="mt-5" onClick={() => setWhileShown(true)}>
            Show Sample Answers
          </Button>
        </CardContent>
      </Card>

      {/* Modal perfect */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold font-merriweather text-foreground mb-3">
            2. Modal verbs: perfect forms
          </h3>
          <div className="bg-muted/30 rounded-lg p-4 border border-border mb-5 text-sm space-y-2">
            <p>
              <strong>should have / ought to have</strong> + past participle — to criticise past mistakes.
              <br />
              <em>They should have planned the conference better.</em>
            </p>
            <p>
              <strong>could have</strong> + past participle — something was possible but didn't happen.
              <br />
              <em>They could have held the conference in Shanghai, but they didn't.</em>
            </p>
            <p>
              <strong>may / might / could have</strong> + past participle — perhaps something happened.
              <br />
              <em>The accident may have happened because workers didn't follow safety procedures.</em>
            </p>
          </div>
          <p className="text-foreground mb-4">
            Complete this paragraph with <em>should have</em>, <em>could have</em> or <em>might have</em>
            with the correct form of the verb in brackets.
          </p>
          <div className="text-foreground leading-relaxed text-base">
            My boss really irritates me. For example, he <strong>1 should have asked</strong> (ask) me
            which was the best hotel to stay at, but he didn't because he doesn't like asking for advice.
            So we found ourselves staying at a noisy, ugly hotel by the motorway when we{' '}
            <Gap id="m2" answers={modalGaps[0].answers} placeholder="(stay)" width="w-44" values={modalVals} setValues={setModalVals} checked={modalChecked} />
            at the luxurious lakeside hotel where all top managers go. If we had stayed there, we{' '}
            <Gap id="m3" answers={modalGaps[1].answers} placeholder="(rest)" width="w-44" values={modalVals} setValues={setModalVals} checked={modalChecked} />
            between meetings, but as it was, the noise was so great that we couldn't relax at all. I don't
            know why he chose that hotel. It{' '}
            <Gap id="m4" answers={modalGaps[2].answers} placeholder="(be)" width="w-44" values={modalVals} setValues={setModalVals} checked={modalChecked} />
            because he has already spent all the travel budget when he went to that conference in
            Singapore. Or he{' '}
            <Gap id="m5" answers={modalGaps[3].answers} placeholder="(make)" width="w-44" values={modalVals} setValues={setModalVals} checked={modalChecked} />
            a mistake — after all, they're next to each other in the telephone book. He{' '}
            <Gap id="m6" answers={modalGaps[4].answers} placeholder="(just dial)" width="w-52" values={modalVals} setValues={setModalVals} checked={modalChecked} />
            the wrong number. Still, he{' '}
            <Gap id="m7" answers={modalGaps[5].answers} placeholder="(tell)" width="w-44" values={modalVals} setValues={setModalVals} checked={modalChecked} />
            me to make the booking. After all, I am his PA, and that's what I'm paid to do!
          </div>
          <Button className="mt-5" onClick={() => setModalChecked(true)}>
            Check Answers
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default GrammarUnit13;
