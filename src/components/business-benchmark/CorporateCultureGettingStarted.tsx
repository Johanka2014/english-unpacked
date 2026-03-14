import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CorporateCultureGettingStarted = () => {
  return (
    <Card className="mb-10">
      <CardHeader>
        <CardTitle className="text-xl">Getting Started</CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* Task 1 - Dictionary definition */}
        <div className="space-y-3">
          <p className="text-sm font-semibold text-foreground">
            <span className="text-primary font-bold mr-2">1</span>
            Read the following dictionary definition.
          </p>
          <div className="relative rounded-lg border-2 border-border bg-muted/40 p-5 max-w-xl shadow-sm">
            <p className="text-foreground leading-relaxed">
              <span className="font-bold text-lg">Corporate culture</span>{' '}
              <span className="text-muted-foreground">• <em>n.</em></span>{' '}
              the values, beliefs and traditions in a company which influence the behaviour of its staff. It is important for job-seekers to know about the culture of an organisation before accepting a job.
            </p>
          </div>
        </div>

        {/* Task 2 - Discussion questions */}
        <div className="space-y-3">
          <p className="text-sm font-semibold text-foreground">
            <span className="text-primary font-bold mr-2">2</span>
            Work in pairs and discuss the following.
          </p>
          <div className="rounded-lg border bg-muted/40 p-5 max-w-xl">
            <p className="text-sm text-foreground mb-3">
              • How do you think cultures might be different in different companies? Consider:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
              <li>the relationship between staff and management</li>
              <li>the relationship between colleagues</li>
              <li>company traditions</li>
              <li>how the staff dress</li>
              <li>how the office space is organised.</li>
            </ul>
          </div>
        </div>

        {/* Task 3 */}
        <div>
          <p className="text-sm font-semibold text-foreground">
            <span className="text-primary font-bold mr-2">3</span>
            Discuss your ideas in pairs.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CorporateCultureGettingStarted;
