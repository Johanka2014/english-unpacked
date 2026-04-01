import MultipleChoiceQuiz from '@/components/presentations/MultipleChoiceQuiz';
import MatchingExercise from '@/components/presentations/MatchingExercise';
import DragFillGaps from '@/components/presentations/DragFillGaps';
import { Card, CardContent } from '@/components/ui/card';

const ListeningUnit3 = () => {
  return (
    <div className="space-y-12">
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">🎧 Listening: Terms & Conditions Discussion</h3>
          <p className="text-muted-foreground mb-4">
            A recruitment officer, June Stewart, and a team leader, Chiara Rossi, are discussing terms and conditions with Marion Pelletier, who has just been offered a position with Business Systems Ltd at their Manchester office.
          </p>
          <div className="bg-muted/50 p-4 rounded-lg text-center">
            <p className="text-sm text-muted-foreground italic">🔊 Audio placeholder — add audio file link later</p>
            <audio controls src="" className="w-full mt-2">
              Your browser does not support the audio element.
            </audio>
          </div>
        </CardContent>
      </Card>

      <MultipleChoiceQuiz
        title="Activity 1: True or False?"
        description="Listen to the conversation and decide whether the following statements are true or false."
        questions={[
          { id: 1, text: 'Marion will be working flexitime in her new job.', options: ['True', 'False'], answer: 'False' },
          { id: 2, text: 'She will be paid for the first 12 weeks if she is ill.', options: ['True', 'False'], answer: 'True' },
          { id: 3, text: 'Her holiday entitlement is 20 days from the date she starts with Business Systems.', options: ['True', 'False'], answer: 'True' },
          { id: 4, text: 'She sent in copies of her references with her application.', options: ['True', 'False'], answer: 'False' },
          { id: 5, text: "She hasn't told her employer in Marseille she's leaving yet.", options: ['True', 'False'], answer: 'False' },
          { id: 6, text: 'She will receive the offer letter in two weeks.', options: ['True', 'False'], answer: 'False' },
        ]}
      />

      <MatchingExercise
        title="Activity 2: Employment Terms & Conditions"
        description="Complete the sentences by matching the two halves."
        pairs={[
          { id: 1, left: "I'm afraid we don't", right: 'operate flexitime yet.' },
          { id: 2, left: "We'd like to tell you something", right: 'about conditions of employment.' },
          { id: 3, left: "I'm sure that won't be a problem", right: "as it's only a week." },
          { id: 4, left: "By the way, we're currently looking", right: 'at more flexible working arrangements...' },
          { id: 5, left: "So let's start with", right: 'your hours.' },
          { id: 6, left: 'If you are ill, we expect you', right: 'to phone in as early as possible...' },
        ]}
      />

      <DragFillGaps
        title="Activity 3: Listening Detail"
        description="Listen to the extract again and fill in the missing words."
        words={['operate', 'overtime', 'time off', 'in lieu', 'annual', 'taking', 'subject']}
        sentences={[
          { id: 1, parts: ['We currently ', { answer: 'operate' }, ' a 40-hour week (plus lunches).'] },
          { id: 2, parts: ['...there may be ', { answer: 'overtime' }, ' during busy periods.'] },
          { id: 3, parts: ['This is either paid or given as ', { answer: 'time off' }, ' ', { answer: 'in lieu' }, '.'] },
          { id: 4, parts: ['Your paid ', { answer: 'annual' }, ' holiday is 20 days.'] },
          { id: 5, parts: ["We'll be ", { answer: 'taking' }, ' up references with your previous and present employer.'] },
          { id: 6, parts: ["We'll make the offer of employment '", { answer: 'subject' }, " to satisfactory reference'."] },
        ]}
      />

      <MatchingExercise
        title="Activity 4: Vocabulary from Listening"
        description="Match the clues to the correct words from the listening exercise."
        pairs={[
          { id: 1, left: 'the opposite of temporary', right: 'permanent' },
          { id: 2, left: 'ways of doing things', right: 'procedures' },
          { id: 3, left: 'instead (of something else)', right: 'in lieu' },
          { id: 4, left: 'to get official permission', right: 'clear' },
          { id: 5, left: 'people who supply the information', right: 'referees' },
          { id: 6, left: 'to agree to sell, to keep a promise', right: 'honour' },
          { id: 7, left: 'an official written agreement', right: 'contract' },
          { id: 8, left: 'letter containing all terms and conditions', right: 'offer' },
          { id: 9, left: 'information about how well you worked in your previous job(s)', right: 'reference' },
        ]}
      />
    </div>
  );
};

export default ListeningUnit3;
