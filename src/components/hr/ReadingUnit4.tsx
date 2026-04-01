import MatchingExercise from '@/components/presentations/MatchingExercise';
import { Card, CardContent } from '@/components/ui/card';

const ReadingUnit4 = () => {
  return (
    <div className="space-y-12">
      {/* Activity 11: Training courses */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">Activity 11: Training Courses</h3>
          <p className="text-muted-foreground mb-6">Match the headings to these short descriptions of four training courses.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-primary/5 p-5 rounded-lg border border-border">
              <h4 className="font-semibold text-primary mb-2">1. Assertive Leadership Skills</h4>
              <p className="text-sm text-foreground">Being a competent leader means being able to motivate and get things done. The course includes decision-making, diplomacy, and being sensitive to the needs of others.</p>
              <p className="text-xs text-muted-foreground mt-2">(8-hour 1-day course)</p>
            </div>
            <div className="bg-primary/5 p-5 rounded-lg border border-border">
              <h4 className="font-semibold text-primary mb-2">2. Managing Your Time</h4>
              <p className="text-sm text-foreground">Learn how to set priorities, control your workload and complete tasks on time. Identify what's important and fulfil targets and objectives more effectively in less time.</p>
              <p className="text-xs text-muted-foreground mt-2">(1-day seminar)</p>
            </div>
            <div className="bg-primary/5 p-5 rounded-lg border border-border">
              <h4 className="font-semibold text-primary mb-2">3. Leadership and Team Building</h4>
              <p className="text-sm text-foreground">Successful leaders know how to handle people effectively and get results, deal with conflicts and communicate confidently, and earn the respect of their peer group and superiors.</p>
              <p className="text-xs text-muted-foreground mt-2">(2-day course for managers and supervisors)</p>
            </div>
            <div className="bg-primary/5 p-5 rounded-lg border border-border">
              <h4 className="font-semibold text-primary mb-2">4. Balancing Priorities and Managing Projects</h4>
              <p className="text-sm text-foreground">Prioritize and keep on top of multiple projects, manage conflicting demands, and take control over your workload. Set deadlines and stick to them. Get more done in less time.</p>
              <p className="text-xs text-muted-foreground mt-2">(2-day seminar)</p>
            </div>
          </div>

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
