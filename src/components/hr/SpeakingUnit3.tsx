import MatchingExercise from '@/components/presentations/MatchingExercise';
import { Card, CardContent } from '@/components/ui/card';

const SpeakingUnit3 = () => {
  return (
    <div className="space-y-12">
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">Useful Language: Discussing Terms & Conditions</h3>
          <p className="text-muted-foreground mb-6">Use these phrases when role-playing a discussion about terms and conditions of employment.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-primary/5 p-5 rounded-lg border border-border">
              <h4 className="font-semibold text-foreground mb-3">Giving Information</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• I'd like to tell you something about...</li>
                <li>• Please ask about anything you are not sure of.</li>
                <li>• I'm sure that's not a problem...</li>
                <li>• I'm afraid we don't...</li>
              </ul>
            </div>
            <div className="bg-primary/5 p-5 rounded-lg border border-border">
              <h4 className="font-semibold text-foreground mb-3">Requesting Information</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Could you tell me...?</li>
                <li>• Will you honour this?</li>
                <li>• Would it be possible to...?</li>
                <li>• Could you please let us know...?</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">Activity 7: Offer & Rejection Letters</h3>
          <p className="text-muted-foreground mb-6">An offer letter and a rejection letter have been mixed up. Read the paragraphs, sort them, and put them into the correct order.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-foreground mb-3 text-center bg-primary/10 p-2 rounded-lg">✉️ Offer Letter (d–c–i–a–f)</h4>
              <div className="space-y-3">
                {[
                  { label: 'd', text: 'Dear Ms Pelletier' },
                  { label: 'c', text: 'Further to your recent interviews, we have pleasure in offering you the position of International Marketing Assistant at a commencing salary of £29,000 per annum. This offer is conditional on receiving satisfactory references and completion of a three-month probationary period.' },
                  { label: 'i', text: 'Basic hours of work are normally 9 a.m. to 6 p.m. Monday to Friday. Holiday entitlement is 20 days per annum, rising to 25 after two years\' service. All terms and benefits are detailed in the handbook and contract enclosed.' },
                  { label: 'a', text: 'We would like you to start on 1 November. During your first week you will participate in an induction seminar to familiarize you with the company.' },
                  { label: 'f', text: 'Please let us know if you would like to accept by signing and returning one copy of the contract. We will then take up references.' },
                ].map((item) => (
                  <div key={item.label} className="bg-primary/5 p-3 rounded-lg border border-border">
                    <span className="inline-block bg-primary/20 text-primary text-xs font-bold px-2 py-0.5 rounded mr-2">{item.label}</span>
                    <span className="text-sm text-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3 text-center bg-destructive/10 p-2 rounded-lg">✉️ Rejection Letter (g–b–h–j–e)</h4>
              <div className="space-y-3">
                {[
                  { label: 'g', text: 'Dear Mr Chevalier' },
                  { label: 'b', text: 'Thank you for attending the interview for the above position. It was very nice meeting you.' },
                  { label: 'h', text: 'We have now fully considered your application and regret we are unable to offer you a second interview on this occasion.' },
                  { label: 'j', text: 'We will hold your details pending and let you know if a suitable opening occurs in the future.' },
                  { label: 'e', text: 'We appreciate your interest and would like to wish you every success in your future career.' },
                ].map((item) => (
                  <div key={item.label} className="bg-destructive/5 p-3 rounded-lg border border-border">
                    <span className="inline-block bg-destructive/20 text-destructive text-xs font-bold px-2 py-0.5 rounded mr-2">{item.label}</span>
                    <span className="text-sm text-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <MatchingExercise
        title="Activity 8: Formal Letter Vocabulary"
        description="Match the italicised words from the letters with similar words on the right."
        pairs={[
          { id: 1, left: 'a commencing salary of...', right: 'starting' },
          { id: 2, left: 'the offer is conditional on receiving...', right: 'subject to' },
          { id: 3, left: 'probationary period', right: 'trial' },
          { id: 4, left: 'accompanying details', right: 'enclosed' },
          { id: 5, left: 'per annum', right: 'year' },
          { id: 6, left: 'are detailed in...', right: 'set out' },
          { id: 7, left: 'to familiarize', right: 'learn about' },
          { id: 8, left: 'We will hold your details pending...', right: 'until we have something available' },
        ]}
      />

      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">Activity 11: HR Headlines</h3>
          <p className="text-muted-foreground mb-4">In pairs, decide what you think these headlines refer to and discuss your answers.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { num: 1, text: 'Absence levels rising...' },
              { num: 2, text: 'Is there a doctor in the house?' },
              { num: 3, text: 'Women sue over sex discrimination' },
              { num: 4, text: 'Deaths from overwork (Karoshi) increase in Japan' },
              { num: 5, text: 'Staff quit over Internet use and abuse' },
              { num: 6, text: 'Wellness management — a growing necessity?' },
              { num: 7, text: 'U.S. ban on smoking in the workplace reduces heart attacks' },
              { num: 8, text: 'Consultation on workplace noise rules' },
            ].map((h) => (
              <div key={h.num} className="bg-primary/5 p-4 rounded-lg border border-border font-semibold text-sm text-foreground">
                <span className="text-xs text-muted-foreground mr-2">{h.num}</span>
                {h.text}
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-4 italic">Have any of these issues arisen in your company? How did you deal with them?</p>
        </CardContent>
      </Card>

      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">Activity 12: Workplace Stress Factors</h3>
          <p className="text-muted-foreground mb-4">Number the following workplace stress factors in order of importance (1 most stressful, 10 least stressful). Compare your results with a partner's.</p>
          <div className="space-y-2">
            {[
              'Interpersonal relationships at work (problems with co-workers)',
              'Tight deadlines (pressure to get work done in time)',
              'Intimidation from supervisors',
              'Work environment/equipment (unsatisfactory working conditions)',
              'Workload',
              "Job security (fear of losing one's job)",
              'Working hours',
              'Low autonomy (working under constant supervision)',
              'Repetitive work',
              'Work/life balance (finding time for responsibilities at home)',
            ].map((factor, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg border border-border">
                <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-sm font-medium text-primary shrink-0">
                  {idx + 1}
                </div>
                <span className="text-sm text-foreground">{factor}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-4 italic">What health and safety measures is your company taking to reduce stress levels in staff?</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SpeakingUnit3;
