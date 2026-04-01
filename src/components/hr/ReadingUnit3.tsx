import DragFillGaps from '@/components/presentations/DragFillGaps';
import DragDropCategorize from '@/components/presentations/DragDropCategorize';
import MatchingExercise from '@/components/presentations/MatchingExercise';
import { Card, CardContent } from '@/components/ui/card';

const ReadingUnit3 = () => {
  return (
    <div className="space-y-12">
      {/* Activity 10: Dealing with grievances gap-fill */}
      <DragFillGaps
        title="Activity 10: Dealing with Grievances"
        description="Read this article from an HR trade magazine and complete the gaps with words from the list."
        sentences={[
          { id: '1', before: 'Problems can', after: 'in the best run companies for many reasons, such as over terms and', answer: 'occur' },
          { id: '2', before: 'and', after: ', management decisions, discrimination (on grounds of race, sex, religion), sexual harassment, bullying, health, and', answer: 'conditions' },
          { id: '3', before: 'and', after: 'issues.', answer: 'safety' },
          { id: '4', before: 'Within two months of starting a job, employees are', after: 'to a written statement setting down the main conditions of their employment.', answer: 'entitled' },
          { id: '5', before: 'As well as information on pay, hours, holiday', after: ', and notice periods,', answer: 'entitlement' },
          { id: '6', before: 'the statement must also cover what the company will do if they have to discipline an employee for', after: 'the rules (the warning procedure) and who the employee can apply to if they are dissatisfied with a decision.', answer: 'breaking' },
          { id: '7', before: 'All employees have the right to be accompanied by another employee or a union', after: '(if applicable) at any disciplinary interview.', answer: 'representative' },
          { id: '8', before: 'A', after: 'procedure would normally be used when an employee does not follow company', answer: 'disciplinary' },
          { id: '9', before: 'company', after: ', breaks rules, or displays inappropriate workplace', answer: 'policy' },
          { id: '10', before: 'workplace', after: '. Employees must be fully informed of their inappropriate', answer: 'behaviour' },
        ]}
      />

      {/* Discussion questions */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">Discussion Questions</h3>
          <p className="text-muted-foreground mb-4">Now discuss the article and the following questions:</p>
          <ol className="space-y-3 text-foreground">
            <li className="flex gap-3">
              <span className="font-bold text-primary">1.</span>
              <span>What should employees in your company do if they have a grievance? What role, if any, does the trade union play?</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-primary">2.</span>
              <span>What are some of the problems that can lead to disciplinary procedures?</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-primary">3.</span>
              <span>How do you discipline staff if they do something wrong?</span>
            </li>
          </ol>
        </CardContent>
      </Card>

      {/* Activity 13: Health & Safety categorization */}
      <DragDropCategorize
        title="Activity 13: Health & Safety Measures"
        description="Which of the health and safety measures below do you think are typical of a) factories, b) offices or shops, or c) any environment?"
        categories={[
          { id: 'factory', title: 'Factories' },
          { id: 'office', title: 'Offices / Shops' },
          { id: 'any', title: 'Any Environment' },
        ]}
        phrases={[
          { id: '1', text: 'carry out fire drills', category: 'any' },
          { id: '2', text: 'make sure furniture is properly adjusted', category: 'office' },
          { id: '3', text: 'prevent exposure to harmful substances', category: 'factory' },
          { id: '4', text: 'provide eye tests', category: 'office' },
          { id: '5', text: 'post safety signs', category: 'any' },
          { id: '6', text: 'remove dangerous obstacles', category: 'any' },
          { id: '7', text: 'provide safety equipment (hard hats, etc.)', category: 'factory' },
          { id: '8', text: 'do risk assessments', category: 'any' },
          { id: '9', text: 'train first aiders', category: 'any' },
          { id: '10', text: 'wear protective clothing', category: 'factory' },
        ]}
      />

      {/* Workplace Injuries reading */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">Reading: Workplace Injuries</h3>
          <p className="text-muted-foreground mb-4">What do the figures represent in the following article about workplace injuries? Read the article to find out.</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-primary/10 p-4 rounded-lg text-center">
              <p className="text-2xl font-bold text-primary">7.5 million</p>
              <p className="text-xs text-muted-foreground mt-1">working days lost</p>
            </div>
            <div className="bg-primary/10 p-4 rounded-lg text-center">
              <p className="text-2xl font-bold text-primary">249</p>
              <p className="text-xs text-muted-foreground mt-1">deaths at work</p>
            </div>
            <div className="bg-primary/10 p-4 rounded-lg text-center">
              <p className="text-2xl font-bold text-primary">127,000</p>
              <p className="text-xs text-muted-foreground mt-1">less serious injuries</p>
            </div>
            <div className="bg-primary/10 p-4 rounded-lg text-center">
              <p className="text-2xl font-bold text-primary">563,000</p>
              <p className="text-xs text-muted-foreground mt-1">stress sufferers</p>
            </div>
          </div>

          <div className="bg-muted/30 p-6 rounded-lg border border-border space-y-4 text-sm text-foreground">
            <h4 className="text-xl font-bold text-center">Workplace Injuries</h4>
            <div className="space-y-3">
              <p>• A factory worker had his right leg amputated below the knee when he was run over by a fork lift truck.</p>
              <p>• A team manager tripped on some carpeting and fell down the stairs at work, breaking her ankle. She was unable to walk for several months and is still in pain and using a stick almost a year later. She has been unable to return to work since.</p>
              <p>• A nurse has been off work for six months with severe back pain resulting from lifting patients. She is unable to drive or sit down for long periods and is awaiting an operation.</p>
            </div>
            <p>According to a 2003 report by the Health and Safety Executive, a British government agency responsible for health and safety issues at work, over 7.5 million working days are lost each year in the U.K. due to accidents at the workplace. The report went on to say that the amount of time and money lost because of employee injury is probably actually much higher, as the law requires that only fatal (i.e. those resulting in death) and serious injuries are reported.</p>
            <p>Figures for 2001 and 2002 indicate that while only 249 people died in accidents at work (a decrease of 15% from previous years), there were 27,477 non-fatal major injuries, including amputations, eye injuries, and broken arms and legs, and over 127,000 injuries which were less serious but still kept the employees out of work for over three days. Two of the main causes of non-fatal injuries are slipping and tripping up (37% of the total).</p>
            <p>While there is a growing awareness among employers about the prevention of serious accidents at work, the greatest workplace health problem today is back pain and strain to the neck, arm, and hands. Lifting loads that are too heavy, sitting incorrectly, and doing repetitive work for long periods of time are typical causes of such injuries. Finally, a rapidly growing area of ill health relates to mental health problems such as stress and anxiety, of which there were 563,000 sufferers in the U.K. last year. In fact, work-related stress has doubled over the past ten years and is becoming one of the major problems facing companies and HR professionals today.</p>
          </div>

          <div className="mt-6 bg-accent/10 p-4 rounded-lg border border-border">
            <h4 className="font-semibold text-foreground mb-2">Over to You</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• How do you think these figures relate to statistics from your country?</li>
              <li>• What procedure do you have in your company for reporting workplace accidents and injuries?</li>
              <li>• What training or assistance do you offer employees to prevent back pain in their daily work?</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReadingUnit3;
