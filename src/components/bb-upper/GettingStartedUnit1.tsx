import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import handshakeImg from '@/assets/bb-upper-unit1-handshake.jpg';

const GettingStartedUnit1 = () => {
  return (
    <Card className="mb-10">
      <CardHeader>
        <CardTitle className="text-xl">Activity 1</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Left column – 60% */}
          <div className="md:col-span-3 space-y-6">
            <p className="text-sm font-semibold text-foreground">
              <span className="text-primary font-bold mr-2">1</span>
              Work in pairs. Ask each other these questions.
            </p>

            <div className="bg-muted/40 rounded-lg border border-border p-5">
              <h3 className="text-lg font-bold text-foreground text-center mb-4">
                What do you do?
              </h3>

              <div className="grid grid-cols-2 gap-6">
                {/* Worker column */}
                <div className="space-y-3">
                  <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded">
                    If you work…
                  </span>
                  <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                    <li>What do you do?</li>
                    <li>How long have you been doing your present job?</li>
                    <li>What qualifications and/or training have you had?</li>
                  </ul>
                </div>

                {/* Student column */}
                <div className="space-y-3">
                  <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded">
                    If you are a student…
                  </span>
                  <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                    <li>What are you studying?</li>
                    <li>What job would you like to do when you have finished?</li>
                    <li>What qualifications will you need?</li>
                  </ul>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-border">
                <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                  <li>What skills do you need/will you need for your job?</li>
                  <li>How do you/will you keep your skills up to date?</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right column – 40% */}
          <div className="md:col-span-2 flex items-stretch">
            <img
              src={handshakeImg}
              alt="Two businesspeople smiling and shaking hands"
              className="rounded-lg shadow-md w-full object-cover"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GettingStartedUnit1;
