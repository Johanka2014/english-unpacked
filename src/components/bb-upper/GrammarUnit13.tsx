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

const passives1 = [
  { id: 'p1', prompt: "We've sent your application to head office.", start: 'Your application ', answers: ['has been sent to head office'] },
  { id: 'p2', prompt: 'The Minister for Trade and Industry will open the conference.', start: 'The conference ', answers: ['will be opened by the minister for trade and industry'] },
  { id: 'p3', prompt: 'You must submit your application by 19 March.', start: 'Your application ', answers: ['must be submitted by 19 march'] },
  { id: 'p4', prompt: 'The Board of Directors has taken a number of important decisions this morning.', start: 'A number of important decisions ', answers: ['have been taken by the board of directors this morning', 'have been taken this morning'] },
  { id: 'p5', prompt: "They're interviewing candidates for the job at the moment.", start: 'Candidates ', answers: ['are being interviewed for the job at the moment', 'are being interviewed for the job'] },
  { id: 'p6', prompt: 'In our manufacturing process, we reject 9% of finished articles as substandard.', start: 'In our manufacturing process, 9% ', answers: ['of finished articles are rejected as substandard', 'of finished articles is rejected as substandard'] },
];

const passives2 = [
  { id: 'q1', prompt: 'We expect that turnover will fall next year due to increased competition.', start: 'Turnover is ', answers: ['expected to fall next year due to increased competition', 'expected to fall next year'] },
  { id: 'q2', prompt: 'We expect prices of raw materials will rise by 50% in the next six months.', start: 'Prices of raw materials ', answers: ['are expected to rise by 50% in the next six months', 'are expected to rise by 50%'] },
  { id: 'q3', prompt: 'According to the announcement, profits have reached record levels.', start: 'It has ', answers: ['been announced that profits have reached record levels'] },
  { id: 'q4', prompt: 'It is reported that Sunshine Cruises Ltd is losing money.', start: 'Sunshine Cruises Ltd is ', answers: ['reported to be losing money'] },
  { id: 'q5', prompt: 'Most people think he is an excellent personnel director.', start: 'He is ', answers: ['thought to be an excellent personnel director'] },
  { id: 'q6', prompt: 'We expect the project will meet its deadlines.', start: 'The project is ', answers: ['expected to meet its deadlines'] },
];

const tooEnough: { parts: string[]; answers: string[][] }[] = [
  { parts: ['Top executives of big corporations get salaries which are ', ' high.'], answers: [['too']] },
  { parts: ['There are not ', ' jobs for recently qualified graduates.'], answers: [['enough']] },
  { parts: ['University courses are not focused ', ' on the needs of industry.'], answers: [['enough']] },
  { parts: ['Most people spend ', ' time in the same job. They should change jobs more often.'], answers: [['too much']] },
  { parts: ['There are ', ' men in the top jobs in industry. Women aren\u2019t given ', ' opportunities.'], answers: [['too many'], ['enough']] },
  { parts: ['When travelling on business, I don\u2019t have ', ' time to do much sightseeing.'], answers: [['enough']] },
];

const GrammarUnit13 = () => {
  const [whileAnswers, setWhileAnswers] = useState<Record<number, string>>({});
  const [whileShown, setWhileShown] = useState(false);

  const [modalVals, setModalVals] = useState<Record<string, string>>({});
  const [modalChecked, setModalChecked] = useState(false);

  const [passVals, setPassVals] = useState<Record<string, string>>({});
  const [passChecked, setPassChecked] = useState(false);
  const [pass2Vals, setPass2Vals] = useState<Record<string, string>>({});
  const [pass2Checked, setPass2Checked] = useState(false);
  const [teVals, setTeVals] = useState<Record<string, string>>({});
  const [teChecked, setTeChecked] = useState(false);


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

      {/* Passives 1 */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold font-merriweather text-foreground mb-3">3. Passives 1</h3>
          <div className="bg-muted/30 rounded-lg p-4 border border-border mb-5 text-sm space-y-2">
            <p>Use the passive when you want to emphasise what happened rather than who did it, when the agent is unknown or unimportant, or when you want a more formal style.</p>
            <p className="italic">Renault launched the Megane in 1997. → The Megane was launched in 1997.</p>
          </div>
          <p className="text-foreground mb-4">Make the following statements more formal by using the passive.</p>
          <div className="space-y-4">
            {passives1.map((p, i) => (
              <div key={p.id} className="border-l-4 border-primary/40 pl-4">
                <p className="text-sm text-muted-foreground mb-1"><strong>{i + 1}.</strong> {p.prompt}</p>
                <p className="text-foreground text-sm">
                  {p.start}
                  <Gap id={p.id} answers={p.answers} placeholder="passive form" width="w-72" values={passVals} setValues={setPassVals} checked={passChecked} />
                </p>
              </div>
            ))}
          </div>
          <Button className="mt-5" onClick={() => setPassChecked(true)}>Check Answers</Button>
        </CardContent>
      </Card>

      {/* Passives 2 */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold font-merriweather text-foreground mb-3">4. Passives 2</h3>
          <div className="bg-muted/30 rounded-lg p-4 border border-border mb-5 text-sm space-y-2">
            <p><strong>X is/was believed (reported, said, considered, expected, thought) + to</strong> + infinitive.<br /><em>His personal fortune is believed to exceed €500 million.</em></p>
            <p><strong>It is/was/has been agreed (announced, decided, reported, suggested…) + that</strong> + clause.<br /><em>It was agreed that we should implement the new measures.</em></p>
          </div>
          <p className="text-foreground mb-4">Complete the second sentence so that it means the same as the first.</p>
          <div className="space-y-4">
            {passives2.map((p, i) => (
              <div key={p.id} className="border-l-4 border-primary/40 pl-4">
                <p className="text-sm text-muted-foreground mb-1"><strong>{i + 1}.</strong> {p.prompt}</p>
                <p className="text-foreground text-sm">
                  {p.start}
                  <Gap id={p.id} answers={p.answers} placeholder="complete it" width="w-80" values={pass2Vals} setValues={setPass2Vals} checked={pass2Checked} />
                </p>
              </div>
            ))}
          </div>
          <Button className="mt-5" onClick={() => setPass2Checked(true)}>Check Answers</Button>
        </CardContent>
      </Card>

      {/* Too / enough */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold font-merriweather text-foreground mb-3">5. Too / enough</h3>
          <div className="bg-muted/30 rounded-lg p-4 border border-border mb-5 text-sm space-y-2">
            <p><strong>too</strong> + adjective/adverb — <em>Business class is too expensive.</em></p>
            <p><strong>too much / too many</strong> + noun — <em>This project has too many costs.</em></p>
            <p>adjective/adverb + <strong>enough</strong> — <em>She isn't qualified enough for this job.</em></p>
            <p><strong>enough</strong> + (adjective) + noun — <em>We don't have enough vans to deliver all our orders.</em></p>
          </div>
          <p className="text-foreground mb-4">
            Write <em>too</em>, <em>too many</em>, <em>too much</em> or <em>enough</em> in the gaps.
          </p>
          <div className="space-y-4 text-foreground text-sm">
            {tooEnough.map((s, i) => (
              <p key={i} className="border-l-4 border-primary/40 pl-4">
                <strong>{i + 1}.</strong> {s.parts[0]}
                <Gap id={`te${i}a`} answers={s.answers[0]} placeholder="too / enough" width="w-36" values={teVals} setValues={setTeVals} checked={teChecked} />
                {s.parts[1]}
                {s.answers[1] && (
                  <>
                    <Gap id={`te${i}b`} answers={s.answers[1]} placeholder="too / enough" width="w-36" values={teVals} setValues={setTeVals} checked={teChecked} />
                    {s.parts[2]}
                  </>
                )}
              </p>
            ))}
          </div>
          <p className="text-muted-foreground text-sm mt-4">
            <strong>2</strong> Discuss with a partner which of the sentences you agree with and which you disagree with.
          </p>
          <Button className="mt-5" onClick={() => setTeChecked(true)}>Check Answers</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default GrammarUnit13;
