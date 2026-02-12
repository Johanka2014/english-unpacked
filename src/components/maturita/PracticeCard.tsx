import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";

interface PracticeCardProps {
  question: string;
  answer: string;
  index: number;
}

const PracticeCard = ({ question, answer, index }: PracticeCardProps) => {
  const [revealed, setRevealed] = useState(false);

  return (
    <Card className={`service-card ${index % 2 !== 0 ? 'bg-accent/30 border-accent border' : ''}`}>
      <CardHeader className="pb-3">
        <CardTitle className="text-base font-semibold text-foreground">{question}</CardTitle>
      </CardHeader>
      <CardContent>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setRevealed(!revealed)}
          className="mb-3"
        >
          {revealed ? <EyeOff className="w-4 h-4 mr-2" /> : <Eye className="w-4 h-4 mr-2" />}
          {revealed ? "Hide Answer" : "Show Answer"}
        </Button>
        {revealed && (
          <p className="text-muted-foreground leading-relaxed animate-fade-in">{answer}</p>
        )}
      </CardContent>
    </Card>
  );
};

export default PracticeCard;
