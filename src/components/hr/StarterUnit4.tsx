import MatchingExercise from '@/components/presentations/MatchingExercise';
import { Card, CardContent } from '@/components/ui/card';

const StarterUnit4 = () => {
  return (
    <div className="space-y-12">
      {/* Discussion statements */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">Starter: HR Development Discussion</h3>
          <p className="text-muted-foreground mb-6">Discuss the statements below with a partner. Do you agree or disagree with them? What aspects of HR development do you think the statements refer to?</p>
          <div className="space-y-4">
            {[
              { num: 1, text: "'Nobody can guarantee lifetime employment, but there's a lot you can do to improve the odds.'", concept: 'Long-term individual development' },
              { num: 2, text: "'Quality feedback improves performance.'", concept: 'Appraisal' },
              { num: 3, text: "'Those most at risk of leaving are new employees.'", concept: 'Induction programme' },
              { num: 4, text: "'All animals are equal, but some are more equal than others.'", concept: 'Equal opportunity policies' },
            ].map((item) => (
              <div key={item.num} className="bg-primary/5 p-4 rounded-lg border border-border">
                <div className="flex gap-3">
                  <span className="font-bold text-primary text-lg">{item.num}</span>
                  <div>
                    <p className="text-foreground italic">{item.text}</p>
                    <p className="text-xs text-muted-foreground mt-1">→ {item.concept}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Activity 1: Match HR practices to definitions */}
      <MatchingExercise
        title="Activity 1: HR Staff Development Practices"
        description="Match the HR staff development practices with their definitions."
        pairs={[
          { id: 1, left: 'flexible working practices', right: "to adapt the way of working (flexitime, teleworking, etc.) to suit the diverse needs of employees' lives" },
          { id: 2, left: 'secondment', right: 'the temporary transfer of an employee to another organization or part of the company' },
          { id: 3, left: 'long-term individual development', right: 'continually updating and promoting the professional development of employees' },
          { id: 4, left: 'appraisal', right: "regular evaluation of an employee's performance, development requirements, and potential" },
          { id: 5, left: 'equal opportunity policies', right: 'to maintain fair working practices and equal treatment for each employee' },
          { id: 6, left: 'team development', right: 'to motivate a group of employees to work together effectively' },
          { id: 7, left: 'mentoring', right: 'to provide an employee with an experienced person who can assist with professional development and offer support and advice' },
          { id: 8, left: 'induction programme', right: 'to inform new staff about the company and its procedures and to help them to settle successfully into their new job' },
        ]}
      />
    </div>
  );
};

export default StarterUnit4;
