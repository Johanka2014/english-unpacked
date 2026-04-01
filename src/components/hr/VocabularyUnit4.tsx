import MatchingExercise from '@/components/presentations/MatchingExercise';
import DragFillGaps from '@/components/presentations/DragFillGaps';
import { Card, CardContent } from '@/components/ui/card';

const VocabularyUnit4 = () => {
  return (
    <div className="space-y-12">
      {/* Activity 5: Appraisal scheme reasons */}
      <MatchingExercise
        title="Activity 5: Reasons for Appraisal Schemes"
        description="Match the correct heading with each sentence about why companies introduce appraisal schemes."
        pairs={[
          { id: 1, left: 'To give feedback on what employees are achieving and enable them to do their job better.', right: 'Improving performance' },
          { id: 2, left: 'To enable companies to identify potential for future promotion and focus on certain individuals.', right: 'Succession planning' },
          { id: 3, left: 'To promote better contact between managers and their staff.', right: 'Encouraging better communication' },
          { id: 4, left: 'Open feedback and setting targets for the future generally encourages staff.', right: 'Motivating staff' },
        ]}
      />

      {/* Activity 8: Expressions matching */}
      <MatchingExercise
        title="Activity 8: Appraisal Expressions"
        description="Match these expressions from the appraisal dialogue with their definitions."
        pairs={[
          { id: 1, left: 'to pay attention to detail', right: 'to notice and deal with small individual facts' },
          { id: 2, left: 'to get a little behind', right: 'to be slower than expected' },
          { id: 3, left: 'to be on target', right: 'to be at the exact level predicted' },
          { id: 4, left: 'to raise an issue', right: 'to mention something for people to discuss' },
          { id: 5, left: 'to get something up to scratch', right: 'to make something as good as it can be' },
          { id: 6, left: 'to settle in', right: 'to feel happy in a new environment' },
        ]}
      />

      {/* Useful Language: Appraisal Interviews */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">Useful Language: The Language of Appraisal Interviews</h3>
          <p className="text-muted-foreground mb-6">The idea of appraisal is to put the wrongs right and then look forward. Questions should be formulated carefully to avoid upsetting the appraisee. Being diplomatic and using language to soften disagreement creates a 'positive' environment.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-primary/5 p-4 rounded-lg border border-border">
              <h4 className="font-semibold text-foreground mb-2">Being Diplomatic</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Use <em>would, could, may</em> to make statements less direct</li>
                <li>• <em>That would/could/may be very difficult.</em></li>
                <li>• Avoid negative words like <em>terrible, awful, very bad</em></li>
                <li>• Use <em>not very</em> plus a positive word instead</li>
              </ul>
            </div>
            <div className="bg-primary/5 p-4 rounded-lg border border-border">
              <h4 className="font-semibold text-foreground mb-2">Appraisal Questions</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Could you tell me (how things are going with...)?</li>
                <li>• How do you see (your team developing in...)?</li>
                <li>• Would you like to give me more details about...?</li>
                <li>• When did you realize that...?</li>
              </ul>
            </div>
            <div className="bg-primary/5 p-4 rounded-lg border border-border">
              <h4 className="font-semibold text-foreground mb-2">Softening Disagreement</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• With respect, I think...</li>
                <li>• To be quite frank, I don't think...</li>
                <li>• I respect your opinion, but...</li>
                <li>• You have a point there, but...</li>
                <li>• To a certain extent I agree, but...</li>
              </ul>
            </div>
            <div className="bg-primary/5 p-4 rounded-lg border border-border">
              <h4 className="font-semibold text-foreground mb-2">Other Useful Phrases</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Is there anything else we should talk about?</li>
                <li>• Would you mind giving me more information on...?</li>
                <li>• I'm afraid we can't / I'm sorry but we can't...</li>
                <li>• Frankly, we should deal with that differently...</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Activity 12: Word partnerships matching */}
      <MatchingExercise
        title="Activity 12: Word Partnerships"
        description="Match words from both sets to form word partnerships from the training course descriptions."
        pairs={[
          { id: 1, left: 'competent', right: 'leader' },
          { id: 2, left: 'peer', right: 'group' },
          { id: 3, left: 'to take', right: 'control' },
          { id: 4, left: 'to get', right: 'results' },
          { id: 5, left: 'to set', right: 'priorities' },
          { id: 6, left: 'to complete', right: 'tasks' },
          { id: 7, left: 'to fulfil', right: 'targets' },
          { id: 8, left: 'to handle', right: 'people' },
        ]}
      />

      {/* Activity 14: Word families */}
      <DragFillGaps
        title="Activity 14: Word Families — equal & appraise"
        description="Complete the following sentences with words related to the key words equal and appraise."
        words={['Equal', 'equally', 'racial', 'appraisal', 'appraisers', 'appraisees']}
        sentences={[
          { id: 1, parts: ['', { answer: 'Equal' }, ' pay for men and women is still a big issue in some sectors of business.'] },
          { id: 2, parts: ['All personnel are subject to the same rules, so everybody is dealt with ', { answer: 'equally' }, '.'] },
          { id: 3, parts: ['The Race Relations Act is about doing away with ', { answer: 'racial' }, ' discrimination.'] },
          { id: 4, parts: ['If we introduce an ', { answer: 'appraisal' }, ' scheme, we must offer training on interviewing techniques and managing the scheme.'] },
          { id: 5, parts: ['The people doing the interviews are the ', { answer: 'appraisers' }, ' and the people being assessed are the ', { answer: 'appraisees' }, '.'] },
        ]}
      />
    </div>
  );
};

export default VocabularyUnit4;
