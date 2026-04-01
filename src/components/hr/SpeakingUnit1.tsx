import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle } from 'lucide-react';

const SpeakingUnit1 = () => {
  return (
    <div className="space-y-12">
      {/* Useful Language Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="border-teal-200 bg-teal-50/50 dark:bg-teal-950/20 dark:border-teal-800">
          <CardHeader>
            <CardTitle className="text-lg text-teal-800 dark:text-teal-200 flex items-center gap-2">
              <MessageCircle className="h-5 w-5" /> Exchanging Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="p-2 bg-white/60 dark:bg-white/5 rounded">Can we just have a word about ...</li>
              <li className="p-2 bg-white/60 dark:bg-white/5 rounded">I'd like to be up to date on what's happening.</li>
              <li className="p-2 bg-white/60 dark:bg-white/5 rounded">So where/what are you planning to ...?</li>
              <li className="p-2 bg-white/60 dark:bg-white/5 rounded">Well, firstly I thought I would ...</li>
              <li className="p-2 bg-white/60 dark:bg-white/5 rounded">I'll look into it (though).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-indigo-200 bg-indigo-50/50 dark:bg-indigo-950/20 dark:border-indigo-800">
          <CardHeader>
            <CardTitle className="text-lg text-indigo-800 dark:text-indigo-200 flex items-center gap-2">
              <MessageCircle className="h-5 w-5" /> Making Suggestions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="p-2 bg-white/60 dark:bg-white/5 rounded">I suggest we ...</li>
              <li className="p-2 bg-white/60 dark:bg-white/5 rounded">In my opinion ...</li>
              <li className="p-2 bg-white/60 dark:bg-white/5 rounded">What do you think about ...?</li>
              <li className="p-2 bg-white/60 dark:bg-white/5 rounded">Actually, there is someone in the company who ...</li>
              <li className="p-2 bg-white/60 dark:bg-white/5 rounded">Well, we should consider ...</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-amber-200 bg-amber-50/50 dark:bg-amber-950/20 dark:border-amber-800">
          <CardHeader>
            <CardTitle className="text-lg text-amber-800 dark:text-amber-200 flex items-center gap-2">
              <MessageCircle className="h-5 w-5" /> Agreeing & Disagreeing
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="p-2 bg-white/60 dark:bg-white/5 rounded">I agree. / I disagree.</li>
              <li className="p-2 bg-white/60 dark:bg-white/5 rounded">I think so too.</li>
              <li className="p-2 bg-white/60 dark:bg-white/5 rounded">You have got a point (there).</li>
              <li className="p-2 bg-white/60 dark:bg-white/5 rounded">Yes, (that's a) good idea.</li>
              <li className="p-2 bg-white/60 dark:bg-white/5 rounded">(I'm) Not sure I agree with you there.</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Role-play instructions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Activity 14: Role-play</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Study the Useful Language above for exchanging information, making suggestions, and agreeing and disagreeing. Then role-play the following situation with your partner using the Partner Files.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 rounded-lg border bg-blue-50/50 dark:bg-blue-950/20">
              <h4 className="font-semibold mb-2">Partner A</h4>
              <p className="text-sm text-muted-foreground">You are the HR manager. You need to discuss the recruitment strategy for a new position with your colleague. Use Partner File A (p. 60) for your brief.</p>
            </div>
            <div className="p-4 rounded-lg border bg-green-50/50 dark:bg-green-950/20">
              <h4 className="font-semibold mb-2">Partner B</h4>
              <p className="text-sm text-muted-foreground">You are the recruitment officer. You have been researching recruitment options and need to present them to the HR manager. Use Partner File B (p. 62) for your brief.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SpeakingUnit1;
