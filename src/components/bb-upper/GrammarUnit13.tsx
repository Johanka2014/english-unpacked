import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle2, XCircle } from 'lucide-react';

/* ---------- helpers ---------- */
const norm = (s: string) =>
  s.trim().toLowerCase().replace(/['']/g, "'").replace(/\s+/g, ' ').replace(/\.$/, '');

const accepts = (val: string, answers: string[]) => {
  const v = norm(val);
  return answers.some((a) => norm(a) === v);
};

interface GapProps {
  id: string;
  answers: string[]; // first is the canonical
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

/* ---------- Section data ---------- */

// While/whereas — open writing, students compose; we show sample answers after check
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

// Modal perfect gap-fill
const modalGaps: { id: string; answers: string[]; hint: string }[] = [
  { id: 'm2', answers: ['should have stayed'], hint: 'stay' },
  { id: 'm3', answers: ['could have rested'], hint: 'rest' },
  { id: 'm4', answers: ['might have been', 'may have been', 'could have been'], hint: 'be' },
  { id: 'm5', answers: ['might have made', 'may have made', 'could have made'], hint: 'make' },
  { id: 'm6', answers: ['might have just dialled', 'may have just dialled', 'could have just dialled', 'might have just dialed', 'may have just dialed', 'could have just dialed'], hint: 'just dial' },
  { id: 'm7', answers: ['should have told', 'ought to have told'], hint: 'tell' },
];

// Passives 1 — transformations
const passives1 = [
  { id: 'p1_2', answers: ['will be opened by the minister for trade and industry'], starter: 'The conference', prompt: 'The Minister for Trade and Industry will open the conference.' },
  { id: 'p1_3', answers: ['must be submitted by 19 march', 'must be submitted by 19th march'], starter: 'Your application', prompt: 'You must submit your application by 19 March.' },
  { id: 'p1_4', answers: ['have been taken by the board of directors this morning', 'has been taken by the board of directors this morning'], starter: 'A number of important decisions', prompt: 'The Board of Directors has taken a number of important decisions this morning.' },
  { id: 'p1_5', answers: ['are being interviewed for the job at the moment'], starter: 'Candidates', prompt: "They're interviewing candidates for the job at the moment." },
  { id: 'p1_6', answers: ['of finished articles is rejected as substandard', 'of finished articles are rejected as substandard'], starter: 'In our manufacturing process, 9%', prompt: 'In our manufacturing process, we reject 9% of finished articles as substandard.' },
];

// Passives 2 — believed/agreed structures
const passives2 = [
  { id: 'p2_2', answers: ['are expected to rise by 50% in the next six months', 'are expected to rise by 50 per cent in the next six months'], starter: 'Prices of raw materials', prompt: 'We expect prices of raw materials will rise by 50% in the next six months.' },
  { id: 'p2_3', answers: ['been announced that profits have reached record levels'], starter: 'It has', prompt: 'According to the announcement, profits have reached record levels.' },
  { id: 'p2_4', answers: ['reported to be losing money'], starter: 'Sunshine Cruises Ltd is', prompt: 'It is reported that Sunshine Cruises Ltd is losing money.' },
  { id: 'p2_5', answers: ['thought to be an excellent personnel director', 'considered to be an excellent personnel director', 'believed to be an excellent personnel director'], starter: 'He is', prompt: 'Most people think he is an excellent personnel director.' },
  { id: 'p2_6', answers: ['expected to meet its deadlines'], starter: 'The project is', prompt: 'We expect the project will meet its deadlines.' },
];

// Too/enough
const tooEnough = [
  { id: 'te1', answers: ['too'], text: 'Top executives of big corporations get salaries which are ', after: ' high.' },
  { id: 'te2', answers: ['enough'], text: 'There are not ', after: ' jobs for recently qualified graduates.' },
  { id: 'te3', answers: ['enough'], text: 'University courses are not focused ', after: ' on the needs of industry.' },
  { id: 'te4', answers: ['too much'], text: 'Most people spend ', after: ' time in the same job. They should change jobs more often.' },
  { id: 'te5a', answers: ['too many'], text: 'There are ', after: ' men in the top jobs in industry.' },
  { id: 'te5b', answers: ['enough'], text: "Women aren't given ", after: ' opportunities.' },
  { id: 'te6', answers: ['enough'], text: "When travelling on business, I don't have ", after: ' time to do much sightseeing.' },
];

/* ---------- Component ---------- */
const GrammarUnit13 = () => {
  const [whileAnswers, setWhileAnswers] = useState<Record<number, string>>({});
  const [whileShown, setWhileShown] = useState(false);

  const [modalVals, setModalVals] = useState<Record<string, string>>({});
  const [modalChecked, setModalChecked] = useState(false);

  const [p1Vals, setP1Vals] = useState<Record<string, string>>({});
  const [p1Checked, setP1Checked] = useState(false);

  const [p2Vals, setP2Vals] = useState<Record<string, string>>({});
  const [p2Checked, setP2Checked] = useState(false);

  const [teVals, setTeVals] = useState<Record<string, string>>({});
  const [teChecked, setTeChecked] = useState(false);

  return (
    <div className="space-y-10">
      {/* Intro */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h2 className="text-2xl md:text-3xl font-bold font-merriweather text-foreground mb-2">
            Grammar Workshop 4 — Units 13–16
          </h2>
          <p className="text-muted-foreground">
            Practise contrasting ideas with <em>while</em> and <em>whereas</em>, modal perfect forms
            (<em>should have</em>, <em>could have</em>, <em>might have</em>), the passive and
            <em> too / enough</em>.
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
          <h3 className="text-xl font-semibold font-merriweather text-foreground mb-3">
            3. Passives 1 — Make sentences more formal
          </h3>
          <div className="bg-muted/30 rounded-lg p-4 border border-border mb-5 text-sm space-y-2">
            <p>Use the passive when:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>you want to emphasise what happened, not who did it</li>
              <li>the agent is not important, unknown or you don't want to say</li>
              <li>you want to use a more formal style</li>
            </ul>
            <p className="italic">The Megane was launched in 1997. / Salaries are paid on the 28th of each month.</p>
          </div>
          <p className="text-foreground mb-4">
            Make the following statements more formal by using the passive. Example: <em>We've sent your
            application to head office.</em> → Your application <strong>has been sent to head office.</strong>
          </p>
          <ol className="space-y-5">
            {passives1.map((q, i) => (
              <li key={q.id} className="text-foreground">
                <p className="text-sm text-muted-foreground mb-1">
                  <strong>{i + 2}.</strong> {q.prompt}
                </p>
                <div className="flex items-start gap-2 flex-wrap">
                  <span>{q.starter}</span>
                  <Gap id={q.id} answers={q.answers} width="w-full md:w-[32rem]" values={p1Vals} setValues={setP1Vals} checked={p1Checked} />
                </div>
              </li>
            ))}
          </ol>
          <Button className="mt-5" onClick={() => setP1Checked(true)}>
            Check Answers
          </Button>
        </CardContent>
      </Card>

      {/* Passives 2 */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold font-merriweather text-foreground mb-3">
            4. Passives 2 — believed / agreed structures
          </h3>
          <div className="bg-muted/30 rounded-lg p-4 border border-border mb-5 text-sm space-y-2">
            <p>
              <strong>X is/was</strong> believed / reported / said / considered / expected / thought
              <strong> + infinitive with to</strong>
            </p>
            <p className="italic">His personal fortune is believed to exceed €500 million.</p>
            <p>
              <strong>It is/was/has been</strong> agreed / announced / believed / decided / expected /
              hoped / reported / suggested / thought <strong>+ that + clause</strong>
            </p>
            <p className="italic">
              It was agreed that we should implement the new measures at the end of the financial year.
            </p>
          </div>
          <p className="text-foreground mb-4">
            Complete the second sentence of each pair so that it means the same as the first. Example:{' '}
            <em>We expect that turnover will fall...</em> → Turnover{' '}
            <strong>is expected to fall next year due to increased competition.</strong>
          </p>
          <ol className="space-y-5">
            {passives2.map((q, i) => (
              <li key={q.id} className="text-foreground">
                <p className="text-sm text-muted-foreground mb-1">
                  <strong>{i + 2}.</strong> {q.prompt}
                </p>
                <div className="flex items-start gap-2 flex-wrap">
                  <span>{q.starter}</span>
                  <Gap id={q.id} answers={q.answers} width="w-full md:w-[32rem]" values={p2Vals} setValues={setP2Vals} checked={p2Checked} />
                </div>
              </li>
            ))}
          </ol>
          <Button className="mt-5" onClick={() => setP2Checked(true)}>
            Check Answers
          </Button>
        </CardContent>
      </Card>

      {/* Too / enough */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold font-merriweather text-foreground mb-3">
            5. Too / Enough
          </h3>
          <div className="bg-muted/30 rounded-lg p-4 border border-border mb-5 text-sm space-y-2">
            <p>
              <strong>too</strong> + adjective/adverb — <em>Business class is too expensive.</em>
            </p>
            <p>
              <strong>too much / too many</strong> + noun — <em>This project has too many costs.</em>
            </p>
            <p>
              adjective/adverb + <strong>enough</strong> — <em>She isn't qualified enough for this job.</em>
            </p>
            <p>
              <strong>enough</strong> + (adjective) + noun — <em>We don't have enough vans.</em>
            </p>
          </div>
          <p className="text-foreground mb-4">
            Write <em>too</em>, <em>too many</em>, <em>too much</em> or <em>enough</em> in the gaps.
          </p>
          <ol className="space-y-3 list-decimal list-inside">
            {tooEnough.map((q) => (
              <li key={q.id} className="text-foreground">
                {q.text}
                <Gap id={q.id} answers={q.answers} placeholder="..." width="w-32" values={teVals} setValues={setTeVals} checked={teChecked} />
                {q.after}
              </li>
            ))}
          </ol>
          <Button className="mt-5" onClick={() => setTeChecked(true)}>
            Check Answers
          </Button>
          <p className="text-sm text-muted-foreground mt-6">
            <strong>Discuss:</strong> with a partner which of the sentences you agree with and which you
            disagree with.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default GrammarUnit13;
