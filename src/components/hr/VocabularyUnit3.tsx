import DragDropCategorize from '@/components/presentations/DragDropCategorize';
import DragFillGaps from '@/components/presentations/DragFillGaps';
import MatchingExercise from '@/components/presentations/MatchingExercise';
import { Card, CardContent } from '@/components/ui/card';

const VocabularyUnit3 = () => {
  return (
    <div className="space-y-12">
      <DragDropCategorize
        title="Activity 3: Employment Terms Categories"
        description="Drag each term into the correct category."
        categories={[
          { id: 'working-time', title: 'Working Time' },
          { id: 'employment-status', title: 'Employment Status' },
          { id: 'absence', title: 'Absence' },
          { id: 'ending-employment', title: 'Ending Employment' },
        ]}
        phrases={[
          { id: '1', text: 'shift work', category: 'working-time' },
          { id: '2', text: 'part-time employment', category: 'working-time' },
          { id: '3', text: 'core time', category: 'working-time' },
          { id: '4', text: 'six-day week', category: 'working-time' },
          { id: '5', text: 'flexitime', category: 'working-time' },
          { id: '6', text: 'trial period', category: 'employment-status' },
          { id: '7', text: 'fixed-term contract', category: 'employment-status' },
          { id: '8', text: 'temporary employment', category: 'employment-status' },
          { id: '9', text: 'probationary period', category: 'employment-status' },
          { id: '10', text: 'annual leave', category: 'absence' },
          { id: '11', text: 'sick leave', category: 'absence' },
          { id: '12', text: 'public holiday', category: 'absence' },
          { id: '13', text: 'vacation (US)', category: 'absence' },
          { id: '14', text: 'holiday entitlement', category: 'absence' },
          { id: '15', text: 'notice period', category: 'ending-employment' },
          { id: '16', text: 'resignation', category: 'ending-employment' },
          { id: '17', text: 'dismissal', category: 'ending-employment' },
          { id: '18', text: 'redundancy', category: 'ending-employment' },
        ]}
      />

      <DragFillGaps
        title="Activity 4: Word Families — flex"
        description="Complete the following sentences with words related to the key word flex."
        words={['flexible', 'flexitime', 'flexibility', 'inflexible']}
        sentences={[
          { id: 1, parts: ['We have a very ', { answer: 'flexible' }, ' system in the company for our staff who need time off work for childcare.'] },
          { id: 2, parts: ["We've been operating ", { answer: 'flexitime' }, ' in the company since the early 90s.'] },
          { id: 3, parts: ['There is little or no ', { answer: 'flexibility' }, ' for our staff in terms of hours of work as they have to be around when our customers need them.'] },
          { id: 4, parts: ['Unfortunately, our managing director is very ', { answer: 'inflexible' }, ' when it comes to deadlines.'] },
        ]}
      />

      <MatchingExercise
        title="Activity 5: Contract of Employment"
        description="Match each contract point to the correct extract from a model UK employment contract."
        pairs={[
          { id: 1, left: 'date the employment begins', right: 'Your employment begins on 1 January 20...' },
          { id: 2, left: 'rate of pay and when/how paid', right: 'Your basic salary will be £35,000 per annum, payable monthly in arrears by credit transfer.' },
          { id: 3, left: 'normal hours of work', right: 'Normal hours of work are 37½ per week, 9 am to 5.30 pm Monday to Friday.' },
          { id: 4, left: 'holiday entitlement', right: 'You may be required to work on a public holiday. If so, you are entitled to time off in lieu.' },
          { id: 5, left: 'job title', right: 'Your current job title and responsibilities are detailed in Schedule 1 and may be amended.' },
          { id: 6, left: 'notice period', right: 'The amount of notice required in the first four years is four weeks.' },
          { id: 7, left: 'location of workplace', right: 'Your normal place of work will be the above address. The company may require you to work at other sites.' },
          { id: 8, left: 'sick pay provision', right: 'You must inform the office by 10 am on the first day of absence. Failure to do so may render you subject to disciplinary action.' },
          { id: 9, left: 'pension scheme terms', right: 'The company provides access to a stakeholder pension. Details can be obtained from personnel.' },
          { id: 10, left: 'disciplinary rules', right: "A copy of the company's disciplinary procedure is attached to this contract." },
        ]}
      />

      {/* Useful Language */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">Useful Language: The Language of Contracts</h3>
          <p className="text-muted-foreground mb-6">The language used in contracts of employment is highly formal and includes fixed phrases, formal vocabulary, passive voice, and the future tense.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-primary/5 p-4 rounded-lg border border-border">
              <h4 className="font-semibold text-foreground mb-2">Fixed Phrases</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• will be notified in writing</li>
                <li>• payable monthly in arrears</li>
                <li>• failure to do so</li>
                <li>• subject to disciplinary action</li>
              </ul>
            </div>
            <div className="bg-primary/5 p-4 rounded-lg border border-border">
              <h4 className="font-semibold text-foreground mb-2">Use of Passive</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• employees <em>are asked</em></li>
                <li>• you <em>may be required</em></li>
                <li>• details <em>can be obtained</em></li>
                <li>• employees <em>are expected</em></li>
              </ul>
            </div>
            <div className="bg-primary/5 p-4 rounded-lg border border-border">
              <h4 className="font-semibold text-foreground mb-2">Formal Vocabulary</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• <em>to render</em> → to make</li>
                <li>• <em>to amend</em> → to change</li>
                <li>• <em>to be entitled to</em> → to have the right to</li>
                <li>• <em>to notify</em> → to tell</li>
              </ul>
            </div>
            <div className="bg-primary/5 p-4 rounded-lg border border-border">
              <h4 className="font-semibold text-foreground mb-2">Use of Future</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• your place of work <em>will be</em>…</li>
                <li>• any changes <em>will be discussed</em>…</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <DragFillGaps
        title="Activity 6: Contract Language"
        description="Complete these sentences with formal contract phrases from the box."
        words={['can be found', 'may be required', 'are expected', 'will be discussed', 'notified in writing', 'are entitled to', 'payable monthly in arrears', 'are asked', 'notify', 'subject to disciplinary action']}
        sentences={[
          { id: 1, parts: ['Full details of the sick pay scheme ', { answer: 'can be found' }, ' in the staff handbook.'] },
          { id: 2, parts: ['You ', { answer: 'may be required' }, ' to work in another office of the company from time to time.'] },
          { id: 3, parts: ['Employees ', { answer: 'are expected' }, ' to work overtime as and when needed.'] },
          { id: 4, parts: ['Changes to your contract ', { answer: 'will be discussed' }, ' and you will be ', { answer: 'notified in writing' }, '.'] },
          { id: 5, parts: ['You ', { answer: 'are entitled to' }, " four weeks' holiday per annum after completion of six months' probation."] },
          { id: 6, parts: ['Your salary is ', { answer: 'payable monthly in arrears' }, ' on the last day of each month.'] },
          { id: 7, parts: ['Employees ', { answer: 'are asked' }, ' to ', { answer: 'notify' }, ' the company of any absence by 10 a.m. on the first day.'] },
          { id: 8, parts: ['You may be ', { answer: 'subject to disciplinary action' }, ' if you fail to do this.'] },
        ]}
      />
    </div>
  );
};

export default VocabularyUnit3;
