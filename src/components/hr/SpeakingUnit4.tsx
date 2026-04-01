import MultipleChoiceQuiz from '@/components/presentations/MultipleChoiceQuiz';
import { Card, CardContent } from '@/components/ui/card';

const SpeakingUnit4 = () => {
  return (
    <div className="space-y-12">
      {/* Useful Language: Making recommendations */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">Useful Language: Making Recommendations</h3>
          <p className="text-muted-foreground mb-6">Study the useful language for making recommendations, then use the phrases to make recommendations about staff development issues.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-primary/5 p-4 rounded-lg border border-border">
              <h4 className="font-semibold text-foreground mb-2">Recommendation Phrases</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• We need to introduce...</li>
                <li>• My proposal is to put / is that we put...</li>
                <li>• Maybe we should also look into...</li>
                <li>• I propose introducing / that we introduce...</li>
              </ul>
            </div>
            <div className="bg-primary/5 p-4 rounded-lg border border-border">
              <h4 className="font-semibold text-foreground mb-2">Stronger Recommendations</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• It's essential to take up / that we take up...</li>
                <li>• I (can) recommend talking / that we talk...</li>
                <li>• It's high time (that) we introduced...</li>
                <li>• Obviously we need to ensure that...</li>
              </ul>
            </div>
          </div>

          <div className="bg-muted/30 p-4 rounded-lg border border-border">
            <h4 className="font-semibold text-foreground mb-2">Practice: Complete these sentences</h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• I recommend hiring _____.</li>
              <li>• It's high time we introduced _____.</li>
              <li>• It's essential client needs _____.</li>
              <li>• Obviously we need to ensure that _____.</li>
              <li>• Maybe we should also _____.</li>
              <li>• Having studied the problem and discussed it with my staff, I propose _____.</li>
              <li>• My proposal is that we _____.</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Activity 4: Staff development scenarios */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">Activity 4: Staff Development Recommendations</h3>
          <p className="text-muted-foreground mb-6">Discuss with a partner what HR development you would recommend for these staff problems. Use the recommendation language above.</p>

          <div className="space-y-4">
            <div className="bg-primary/5 p-4 rounded-lg border border-border">
              <p className="font-semibold text-foreground mb-1">1. Equal Pay Issue</p>
              <p className="text-sm text-muted-foreground">A female accountant has complained that her salary is lower than two other male employees who do the same work. She was promoted five years ago, is very well qualified, and has been with the company longer than one of the two men.</p>
            </div>
            <div className="bg-primary/5 p-4 rounded-lg border border-border">
              <p className="font-semibold text-foreground mb-1">2. Work-Life Balance</p>
              <p className="text-sm text-muted-foreground">A long-established company has lost some good employees recently because they found it impossible to balance their working lives with family demands. There is currently no flexitime, very few part-time jobs, and only one male employee has taken paternity leave.</p>
            </div>
            <div className="bg-primary/5 p-4 rounded-lg border border-border">
              <p className="font-semibold text-foreground mb-1">3. Communication Skills</p>
              <p className="text-sm text-muted-foreground">An engineering company has lost a number of international contracts. The sales manager suspects it is because the engineers find it difficult to communicate their ideas in presentations in English. Their written English is good but they don't have much time to study.</p>
            </div>
            <div className="bg-primary/5 p-4 rounded-lg border border-border">
              <p className="font-semibold text-foreground mb-1">4. Workplace Health</p>
              <p className="text-sm text-muted-foreground">An editor has developed severe pain in his arm. He finds his workstation inappropriate and wants new furniture. The cost is £2,000. He is working on a very important project and it would not be good for him to take time off at this stage.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Activity 9: Diplomatic language */}
      <MultipleChoiceQuiz
        title="Activity 9: Diplomatic Language"
        description="How can you improve these statements from an appraisal interview? Choose the more diplomatic equivalent."
        questions={[
          { id: 1, text: "Don't you have a good relationship with your team?", options: ['How do you see the relationship with your team?', "Why can't you get along with your team?", 'Tell me about your team problems.'], answer: 'How do you see the relationship with your team?' },
          { id: 2, text: "Your figures were really bad — 25% below target won't do!", options: ["I notice you've got a little behind on your targets. Can we talk about that?", 'Your performance is terrible and unacceptable.', 'You need to fix your numbers immediately.'], answer: "I notice you've got a little behind on your targets. Can we talk about that?" },
          { id: 3, text: 'You should have told me.', options: ['Why did you hide this from me?', 'I wish you had felt able to raise this with me earlier.', 'You must report everything to me.'], answer: 'I wish you had felt able to raise this with me earlier.' },
          { id: 4, text: "It's terrible you didn't even tell me about it.", options: ["I'm disappointed you didn't mention it. Could you tell me more?", 'This is awful and you should be ashamed.', 'Why are you hiding things from me?'], answer: "I'm disappointed you didn't mention it. Could you tell me more?" },
          { id: 5, text: 'The results are awful, Peter.', options: ["The results aren't quite where we'd like them to be.", 'Your results are a disaster.', 'You have failed completely.'], answer: "The results aren't quite where we'd like them to be." },
          { id: 6, text: 'You just have to learn how to delegate more!', options: ['Have you considered delegating some tasks to your team?', 'You must delegate or you will be fired.', 'Stop doing everything yourself!'], answer: 'Have you considered delegating some tasks to your team?' },
        ]}
      />

      {/* Activity 10: Appraisal role-play */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">Activity 10: Appraisal Interview Role-play</h3>
          <p className="text-muted-foreground mb-6">Work with a partner to practise an appraisal interview with a member of staff who is unhappy in his or her job. Use the profiles in the Partner Files or think of a situation of your own.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-primary/5 p-5 rounded-lg border border-border">
              <h4 className="font-semibold text-foreground mb-3">Asking About the Job</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• I'd like you to tell me how you see your progress over the last year.</li>
                <li>• Has there been anything you have found difficult to cope with?</li>
                <li>• How are things with the rest of the department?</li>
                <li>• What do you like most about your work?</li>
              </ul>
            </div>
            <div className="bg-primary/5 p-5 rounded-lg border border-border">
              <h4 className="font-semibold text-foreground mb-3">Talking About Problems</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Unfortunately, there have been some problems.</li>
                <li>• There seems to be a personality problem between myself and someone in the department.</li>
                <li>• Well, actually, someone is making life rather unpleasant for me.</li>
                <li>• I didn't feel able to talk to you about it earlier.</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SpeakingUnit4;
