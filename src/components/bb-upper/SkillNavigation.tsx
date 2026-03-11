import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface SkillNavigationProps {
  moduleId: string;
  skills: { id: string; title: string }[];
  currentSkillId: string;
}

const SkillNavigation = ({ moduleId, skills, currentSkillId }: SkillNavigationProps) => {
  const currentIndex = skills.findIndex((s) => s.id === currentSkillId);
  const prev = currentIndex > 0 ? skills[currentIndex - 1] : null;
  const next = currentIndex < skills.length - 1 ? skills[currentIndex + 1] : null;

  return (
    <div className="flex justify-between items-center mt-12 pt-6 border-t border-border">
      {prev ? (
        <Link to={`/bb-upper/${moduleId}/${prev.id}`}>
          <Button variant="outline" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">{prev.title}</span>
            <span className="sm:hidden">Previous</span>
          </Button>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link to={`/bb-upper/${moduleId}/${next.id}`}>
          <Button className="gap-2 bg-primary hover:bg-primary/90">
            <span className="hidden sm:inline">{next.title}</span>
            <span className="sm:hidden">Next</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      ) : (
        <Link to={`/bb-upper/${moduleId}`}>
          <Button className="gap-2 bg-primary hover:bg-primary/90">
            Back to Module
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export default SkillNavigation;
