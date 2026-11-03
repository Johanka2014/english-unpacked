import { Card, CardContent } from "@/components/ui/card";
import handshakeImage from "@/assets/bb-mod1-your-turn-handshake.jpg";

const YourTurnExercise = () => {
  return (
    <Card className="service-card">
      <CardContent className="p-6">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div>
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
          </div>
          <div>
            <img
              src={handshakeImage}
              alt="Two people in business clothing meeting and shaking hands in a bar"
              className="rounded-lg shadow-md w-full h-auto object-cover"
              loading="lazy"
              width={1024}
              height={768}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default YourTurnExercise;
