import { useState } from 'react';
import MatchingExercise from '@/components/presentations/MatchingExercise';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const headingOptions = [
  'Assertive Leadership Skills',
  'Managing Your Time',
  'Leadership and Team Building',
  'Balancing Priorities and Managing Projects',
];

const courses = [
  {
    id: 1,
    correctHeading: 'Assertive Leadership Skills',
    description: 'Being a competent leader means being able to motivate and get things done. The course includes decision-making, diplomacy, and being sensitive to the needs of others.',
    duration: '(8-hour 1-day course)',
  },
  {
    id: 2,
    correctHeading: 'Managing Your Time',
    description: 'Learn how to set priorities, control your workload and complete tasks on time. Identify what\'s important and fulfil targets and objectives more effectively in less time.',
    duration: '(1-day seminar)',
  },
  {
    id: 3,
    correctHeading: 'Leadership and Team Building',
    description: 'Successful leaders know how to handle people effectively and get results, deal with conflicts and communicate confidently, and earn the respect of their peer group and superiors.',
    duration: '(2-day course for managers and supervisors)',
  },
  {
    id: 4,
    correctHeading: 'Balancing Priorities and Managing Projects',
    description: 'Prioritize and keep on top of multiple projects, manage conflicting demands, and take control over your workload. Set deadlines and stick to them. Get more done in less time.',
    duration: '(2-day seminar)',
  },
];

const ReadingUnit4 = () => {
  const [selections, setSelections] = useState<Record<number, string>>({});
  const [results, setResults] = useState<Record<number, 'correct' | 'incorrect'> | null>(null);

  const handleSelect = (courseId: number, value: string) => {
    setSelections((prev) => ({ ...prev, [courseId]: value }));
    setResults(null);
  };

  const checkAnswers = () => {
    const newResults: Record<number, 'correct' | 'incorrect'> = {};
    courses.forEach((c) => {
      newResults[c.id] = selections[c.id] === c.correctHeading ? 'correct' : 'incorrect';
    });
    setResults(newResults);
  };

  return (
    <div className="space-y-12">
      {/* Activity 11: Training courses */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">Activity 11: Training Courses</h3>
          <p className="text-muted-foreground mb-6">Match the headings to these short descriptions of four training courses.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.map((course) => (
              <div
                key={course.id}
                className={`bg-primary/5 p-5 rounded-lg border ${
                  results?.[course.id] === 'correct'
                    ? 'border-green-500 bg-green-50/50'
                    : results?.[course.id] === 'incorrect'
                    ? 'border-red-500 bg-red-50/50'
                    : 'border-border'
                }`}
              >
                <div className="mb-3">
                  <label className="text-xs font-medium text-muted-foreground mb-1 block">Course {course.id} heading:</label>
                  <Select
                    value={selections[course.id] || ''}
                    onValueChange={(val) => handleSelect(course.id, val)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Choose a heading..." />
                    </SelectTrigger>
                    <SelectContent>
                      {headingOptions.map((h) => (
                        <SelectItem key={h} value={h}>{h}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {results?.[course.id] === 'correct' && (
                    <p className="text-green-600 text-xs mt-1">✓ Correct!</p>
                  )}
                  {results?.[course.id] === 'incorrect' && (
                    <p className="text-red-600 text-xs mt-1">✗ Try again. The correct answer is: {course.correctHeading}</p>
                  )}
                </div>
                <p className="text-sm text-foreground">{course.description}</p>
                <p className="text-xs text-muted-foreground mt-2">{course.duration}</p>
              </div>
            ))}
          </div>

          <Button onClick={checkAnswers} className="mt-6 bg-primary hover:bg-primary/90">
            Check Answers
          </Button>

          <p className="text-sm text-muted-foreground mt-4 italic">Which course would you send Peter Grahame on? Why? Discuss with a partner.</p>
        </CardContent>
      </Card>

      {/* Equal Opportunities vs Diversity reading */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">Reading: Equal Opportunities vs Diversity</h3>

          <div className="bg-muted/30 p-6 rounded-lg border border-border space-y-4 text-sm text-foreground mb-6">
            <h4 className="text-xl font-bold text-center">Equal Opportunities versus Diversity</h4>
            <p>Companies in the U.K. are encouraged to publish equal opportunity policies which show that they are equal opportunities employers and do not harass, victimize, or discriminate against people (whether employees, applicants for employment, customers, service providers, or members of the public) because of:</p>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              <li>• race, ethnic origin, nationality</li>
              <li>• sexual orientation</li>
              <li>• gender</li>
              <li>• trade union membership</li>
              <li>• age</li>
              <li>• marital or family status</li>
              <li>• disability</li>
              <li>• religion or religious belief</li>
            </ul>
            <p>How does this differ from 'managing diversity'? Managing diversity is about respecting people and helping them to maximize their potential. Unlike 'equal opportunities', it does not focus on specific groups of people, nor does it only address situations where direct discrimination may occur.</p>
            <p>Diversity acknowledges that the differences people bring to a job may enhance the business and furthermore that their perspectives and ideas can improve the overall quality of the workplace. In other words, diversity recognizes the benefits of differences and, to provide for these differences, allows for such things as flexible working hours, time off for caring for dependants, paternity freedom, and doing away with age criteria.</p>
          </div>

          {/* Equal opportunity statements */}
          <h4 className="font-semibold text-foreground mb-3">Activity 15: Equal Opportunity Statements</h4>
          <p className="text-muted-foreground mb-4">Where would you expect to find the following statements written? Do you find similar statements in your company or country?</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              '"...striving to be an equal opportunities employer and service provider. We are working towards a workforce that reflects the wider community and actively encourages job applications from under-represented groups."',
              '"...we value having a workforce as diverse as the city we serve. We therefore welcome, develop, and promote people from all sections of the community."',
              '"...committed to Equal Opportunities & Investors in People."',
              '"...our policy is that all people receive equal treatment regardless of their sex, marital status, sexuality, race, creed, colour, ethnic or national origin, or disability."',
              '"...offers flexible patterns of work including job-sharing, part-time, and short-term contracts and is working towards equality of opportunity for all."',
            ].map((quote, idx) => (
              <div key={idx} className="bg-accent/10 p-4 rounded-lg border border-border text-sm italic text-foreground">
                {quote}
              </div>
            ))}
          </div>

          <div className="mt-6 bg-primary/5 p-4 rounded-lg border border-border">
            <h4 className="font-semibold text-foreground mb-2">Over to You</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• According to the article, what is the reason for publishing equal opportunity statements?</li>
              <li>• Do you think such statements add value to the reputation of a company?</li>
              <li>• How many companies that you know of are actively involved in diversity? How is it dealt with in your organization?</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReadingUnit4;
