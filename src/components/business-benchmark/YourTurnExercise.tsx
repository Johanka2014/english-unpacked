import { Card, CardContent } from "@/components/ui/card";

const YourTurnExercise = () => {
  return (
    <Card className="service-card">
      <CardContent className="p-6">
        <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">
          Your Turn
        </h3>
        <p className="text-lg text-foreground mb-4">
          Your old school or college has approached you and asked you to send them a short recording describing your job. It will be played to students who are interested in following your chosen field.
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground text-lg">
          <li>Briefly explain what you do, using appropriate adjectives.</li>
          <li>Make it relevant to the students listening.</li>
          <li>Accentuate the positive aspects of your profession.</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default YourTurnExercise;
