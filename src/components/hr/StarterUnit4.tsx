import { useState } from 'react';
import MatchingExercise from '@/components/presentations/MatchingExercise';
import trainingImg from '@/assets/hr-training-session.jpg';
import { Card, CardContent } from '@/components/ui/card';

const statements = [
  { num: 1, text: "'Nobody can guarantee lifetime employment, but there's a lot you can do to improve the odds.'", concept: 'Long-term individual development' },
  { num: 2, text: "'Quality feedback improves performance.'", concept: 'Appraisal' },
  { num: 3, text: "'Those most at risk of leaving are new employees.'", concept: 'Induction programme' },
  { num: 4, text: "'All animals are equal, but some are more equal than others.'", concept: 'Equal opportunity policies' },
];

const StarterUnit4 = () => {
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});

  return (
    <div className="space-y-12">
      {/* Discussion statements */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">Starter: HR Development Discussion</h3>
          <p className="text-muted-foreground mb-6">Discuss the statements below with a partner. Do you agree or disagree with them? Click on a statement to reveal which aspect of HR development it refers to.</p>
          <div className="space-y-4">
            {statements.map((item) => (
              <div
                key={item.num}
                className="bg-primary/5 p-4 rounded-lg border border-border cursor-pointer transition-colors hover:bg-primary/10"
                onClick={() => setRevealed((prev) => ({ ...prev, [item.num]: !prev[item.num] }))}
              >
                <div className="flex gap-3">
                  <span className="font-bold text-primary text-lg">{item.num}</span>
                  <div>
                    <p className="text-foreground italic">{item.text}</p>
                    {revealed[item.num] && (
                      <p className="text-xs text-primary font-medium mt-2 animate-in fade-in">→ {item.concept}</p>
                    )}
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

      {/* Discussion questions with image */}
      <Card className="service-card">
        <CardContent className="p-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">Your Company</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Which aspects of staff development mentioned above does your company use?
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mt-4">
                Which do you think are the most effective?
              </p>
            </div>
            <div>
              <img
                src={trainingImg}
                alt="Office workers in a training session"
                className="rounded-lg shadow-md w-full"
                loading="lazy"
                width={768}
                height={512}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StarterUnit4;
