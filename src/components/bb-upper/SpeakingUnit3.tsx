import { Card, CardContent } from "@/components/ui/card";

const SpeakingUnit3 = () => {
  return (
    <div className="space-y-8">
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">Talking Point — Job applications</h3>
          <p className="text-muted-foreground mb-4">Discuss these questions in pairs.</p>
          <ol className="list-decimal list-inside space-y-2 text-foreground">
            <li>When you apply for a job, is it better to send a letter or an email?</li>
            <li>How many pages should your application be?</li>
            <li>What things should you mention in your application?</li>
            <li>Should you write your application in a formal or an informal style?</li>
            <li>How many pages should your curriculum vitae (CV) have?</li>
            <li>Should you send a photograph as well?</li>
          </ol>
        </CardContent>
      </Card>

      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">Discussion — A great place to work</h3>
          <p className="text-foreground mb-4">Work in small groups and discuss:</p>
          <ul className="list-disc list-inside space-y-1 text-foreground">
            <li>How to handle job interviews — what makes a good impression?</li>
            <li>What makes a great place to work?</li>
            <li>Which of the four EMI employees' jobs would interest you most, and why?</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2 font-merriweather text-foreground">Suggested teacher notes</h3>
          <ul className="list-disc list-inside space-y-2 text-foreground text-sm">
            <li>Companies increasingly prefer email applications because they can store them electronically.</li>
            <li>The letter of application (cover letter) should be about one page — HR managers may have many such letters to read.</li>
            <li>The application should highlight the most interesting points in your CV and explain why you are interested in <em>this particular</em> job.</li>
            <li>The style should be formal.</li>
            <li>A new graduate's CV can fit in one page; a middle manager may need two.</li>
            <li>Whether to send a photograph varies by country and company culture.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default SpeakingUnit3;
