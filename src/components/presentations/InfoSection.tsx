import { Card, CardContent } from "@/components/ui/card";

interface InfoSectionProps {
  title: string;
  children: React.ReactNode;
}

const InfoSection = ({ title, children }: InfoSectionProps) => {
  return (
    <Card className="service-card">
      <CardContent className="p-6">
        <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">{title}</h3>
        {children}
      </CardContent>
    </Card>
  );
};

export default InfoSection;
