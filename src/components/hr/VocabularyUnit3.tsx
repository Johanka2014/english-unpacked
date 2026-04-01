import DragDropCategorize from '@/components/presentations/DragDropCategorize';
import DragFillGaps from '@/components/presentations/DragFillGaps';
import MatchingExercise from '@/components/presentations/MatchingExercise';
import { Card, CardContent } from '@/components/ui/card';

const VocabularyUnit3 = () => {
  return (
    <div className="space-y-12">
      {/* Activity 3: Categorize employment terms */}
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

      {/* Activity 4: Word families — flex */}
      <DragFillGaps
        title="Activity 4: Word Families — flex"
        description="Complete the following sentences with words related to the key word flex. You might need to add prefixes or suffixes and change the form."
        sentences={[
          { id: '1', before: 'We have a very', after: 'system in the company for our staff who need time off work for childcare.', answer: 'flexible' },
          { id: '2', before: "We've been operating", after: 'in the company since the early 90s.', answer: 'flexitime' },
          { id: '3', before: 'There is little or no', after: 'for our staff in terms of hours of work as they have to be around when our customers need them.', answer: 'flexibility' },
          { id: '4', before: 'Unfortunately, our managing director is very', after: 'when it comes to deadlines.', answer: 'inflexible' },
        ]}
      />

      {/* Activity 5: Contract of Employment matching */}
      <MatchingExercise
        title="Activity 5: Contract of Employment"
        description="Match each contract point to the correct extract from a model UK employment contract."
        pairs={[
          { id: '1', left: 'date the employment begins', right: 'Your employment begins on 1 January 20...' },
          { id: '2', left: 'rate of pay and when/how paid', right: 'Your basic salary will be £35,000 per annum, payable monthly in arrears by credit transfer to your bank or building society.' },
          { id: '3', left: 'normal hours of work/overtime/shift patterns', right: 'Normal hours of work are 37½ per week, 9 am to 5.30 pm Monday to Friday, with one unpaid hour for lunch each day.' },
          { id: '4', left: 'holiday entitlement (including public holidays)', right: 'You may be required to work on a public holiday. If so, you are entitled to time off in lieu.' },
          { id: '5', left: 'job title (or a brief description of the job)', right: 'Your current job title and responsibilities are detailed in Schedule 1 and may be amended from time to time.' },
          { id: '6', left: 'notice period', right: 'The amount of notice you are required to give or be given by your employer in the first four years is four weeks.' },
          { id: '7', left: 'location of workplace', right: 'Your normal place of work will be the above address. From time to time the company may require you to work at other sites on a temporary basis.' },
          { id: '8', left: 'sick pay provision', right: 'You must inform the office by 10 am on the first day of absence. Failure to do so may render you subject to disciplinary action and may also bar you from sick pay.' },
          { id: '9', left: 'pension scheme terms', right: 'The company does not offer a pension scheme but provides access to a stakeholder pension. Details can be obtained from the personnel department.' },
          { id: '10', left: 'disciplinary rules and grievance procedure', right: "A copy of the company's disciplinary procedure is attached to this contract and employees are asked to read it carefully." },
        ]}
      />

      {/* Useful Language: The Language of Contracts */}
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

      {/* Activity 6: Contract language gap-fill */}
      <DragFillGaps
        title="Activity 6: Contract Language"
        description="Complete these sentences with formal contract phrases from the box."
        sentences={[
          { id: '1', before: 'Full details of the sick pay scheme', after: 'in the staff handbook.', answer: 'can be found' },
          { id: '2', before: 'You', after: 'to work in another office of the company from time to time.', answer: 'may be required' },
          { id: '3', before: 'Employees', after: 'to work overtime as and when needed.', answer: 'are expected' },
          { id: '4', before: 'Changes to your contract', after: 'and you will be', answer: 'will be discussed, notified in writing' },
          { id: '5', before: 'You', after: "four weeks' holiday per annum after completion of six months' probation.", answer: 'are entitled to' },
          { id: '6', before: 'Your salary is', after: 'on the last day of each month.', answer: 'payable monthly in arrears' },
          { id: '7', before: 'Employees', after: 'to', answer: 'are asked, notify' },
          { id: '8', before: 'You may be', after: 'if you fail to do this.', answer: 'subject to disciplinary action' },
        ]}
      />
    </div>
  );
};

export default VocabularyUnit3;
