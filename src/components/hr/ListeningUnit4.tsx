import DragFillGaps from '@/components/presentations/DragFillGaps';
import MatchingExercise from '@/components/presentations/MatchingExercise';
import DragDropCategorize from '@/components/presentations/DragDropCategorize';
import { Card, CardContent } from '@/components/ui/card';

const ListeningUnit4 = () => {
  return (
    <div className="space-y-12">
      {/* Context: Staff problems */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">🎧 Listening: Staff Problems</h3>
          <p className="text-muted-foreground mb-4">
            Listen to four people talking about staff problems, and fill in the missing words. Then discuss what solution you would recommend for each problem.
          </p>
          <div className="bg-muted/50 p-4 rounded-lg text-center">
            <p className="text-sm text-muted-foreground italic">🔊 Audio placeholder — add audio file link later</p>
            <audio controls src="" className="w-full mt-2">
              Your browser does not support the audio element.
            </audio>
          </div>
        </CardContent>
      </Card>

      {/* The four staff problems */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">Activity 2: Staff Problems</h3>
          <div className="space-y-6">
            <div className="bg-primary/5 p-4 rounded-lg border border-border">
              <p className="font-semibold text-foreground mb-1">1. Natasha — Shop floor team leader</p>
              <p className="text-sm text-muted-foreground italic">"I only started here four months ago but I'm already thinking about leaving. Gerry, the shop floor _____, is always correcting me and he's so negative. He never gives me any real help. My team is also against me. I don't feel in control of the _____."</p>
            </div>
            <div className="bg-primary/5 p-4 rounded-lg border border-border">
              <p className="font-semibold text-foreground mb-1">2. Miguel — Marketing director</p>
              <p className="text-sm text-muted-foreground italic">"I'm having _____ with a major project. I have put together a team of marketing staff from all our branches worldwide. The problem is that nobody _____ the meetings and progress is slow."</p>
            </div>
            <div className="bg-primary/5 p-4 rounded-lg border border-border">
              <p className="font-semibold text-foreground mb-1">3. Janet — Departmental manager</p>
              <p className="text-sm text-muted-foreground italic">"I need help with a problem employee. He's making a lot of mistakes and is argumentative with _____. He's taken 20 days' sick leave and clients have recently _____ about his attitude."</p>
            </div>
            <div className="bg-primary/5 p-4 rounded-lg border border-border">
              <p className="font-semibold text-foreground mb-1">4. Holger — Project manager</p>
              <p className="text-sm text-muted-foreground italic">"I've been here seven years and I desperately need training on the latest _____ and accounting procedures. My boss tells me we're too busy for training _____, but it's essential I'm up to date."</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Match problems to solutions */}
      <MatchingExercise
        title="Activity 2b: Match Problems to Solutions"
        description="Match each person's problem with the most appropriate development solution."
        pairs={[
          { id: 1, left: 'Natasha (new team leader struggling with hostile team)', right: 'Introduce an induction programme and mentoring scheme' },
          { id: 2, left: 'Miguel (global team not attending meetings)', right: 'Introduce team development training for managers and staff' },
          { id: 3, left: 'Janet (problem employee, mistakes, absences)', right: 'Introduce a staff appraisal scheme for evaluation and communication' },
          { id: 4, left: 'Holger (needs professional training, boss refuses)', right: 'Enable employees to broaden professional skills and keep up to date' },
        ]}
      />

      {/* Appraisal interview listening */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">🎧 Activity 6: Appraisal Interview</h3>
          <p className="text-muted-foreground mb-4">
            Gaby Meyer, a line manager at Aus-pharma, is carrying out an appraisal interview with Peter Grahame, an employee from Edinburgh on secondment in Vienna for two years.
          </p>
          <div className="bg-muted/50 p-4 rounded-lg text-center mb-6">
            <p className="text-sm text-muted-foreground italic">🔊 Audio placeholder — add audio file link later</p>
            <audio controls src="" className="w-full mt-2">
              Your browser does not support the audio element.
            </audio>
          </div>
        </CardContent>
      </Card>

      {/* Activity 6: Categorize problems and solutions by appraisal goal */}
      <DragDropCategorize
        title="Activity 6: Appraisal Goals"
        description="Put the problems and solutions discussed in the appraisal below the appropriate appraisal goal."
        categories={[
          { id: 'communication', title: 'Encouraging Better Communication' },
          { id: 'motivating', title: 'Motivating Staff' },
          { id: 'performance', title: 'Improving Performance' },
        ]}
        phrases={[
          { id: '1', text: 'Peter and Gaby need to improve communication', category: 'communication' },
          { id: '2', text: 'Gaby is always busy', category: 'communication' },
          { id: '3', text: 'meet weekly for a while', category: 'communication' },
          { id: '4', text: 'Peter needs to delegate more', category: 'motivating' },
          { id: '5', text: 'Peter to have leadership training', category: 'motivating' },
          { id: '6', text: '25% down for six months', category: 'performance' },
          { id: '7', text: "get your team's output up to scratch", category: 'performance' },
          { id: '8', text: 'arrange a meeting with the team', category: 'performance' },
          { id: '9', text: 'Antonio to have cultural training', category: 'performance' },
        ]}
      />

      {/* Activity 7: Appraisal report gap-fill */}
      <DragFillGaps
        title="Activity 7: Complete the Appraisal Report"
        description="Listen to the interview again and complete the appraisal report on Peter Grahame using the words below."
        words={['to detail', 'relationships', 'delegate', 'decrease', 'skills', 'sickness', 'overtime', 'communicate', 'cultural', 'production director', 'leadership', 'training manager', 'long-term']}
        sentences={[
          { id: 1, parts: ['Strengths: Attention ', { answer: 'to detail' }, ', excellent. Accuracy, good.'] },
          { id: 2, parts: ["Peter feels he doesn't have any problems with staff ", { answer: 'relationships' }, '.'] },
          { id: 3, parts: ["Weaknesses: Peter doesn't always ", { answer: 'delegate' }, ' to team members and this causes overwork.'] },
          { id: 4, parts: ['...and thus a ', { answer: 'decrease' }, ' in output. Communication ', { answer: 'skills' }, ' need attention.'] },
          { id: 5, parts: ["Problems: Decrease in output caused by Antonio's ", { answer: 'sickness' }, ", inability of other team members to work ", { answer: 'overtime' }, "."] },
          { id: 6, parts: ["Peter didn't feel able to ", { answer: 'communicate' }, " with me. Antonio needs ", { answer: 'cultural' }, " training."] },
          { id: 7, parts: ['Action 1: Speak to ', { answer: 'production director' }, ' about temporary transfer of staff.'] },
          { id: 8, parts: ['Action 2: Talk to ', { answer: 'training manager' }, ' about ', { answer: 'leadership' }, ' skills and time management training for Peter.'] },
        ]}
      />
    </div>
  );
};

export default ListeningUnit4;
