import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface SkillNavigationProps {
  moduleId: string;
  skills: { id: string; title: string }[];
  currentSkillId: string;
}

const SkillNavigation = ({ moduleId, skills, currentSkillId }: SkillNavigationProps) => {
  const navigate = useNavigate();
  const currentIndex = skills.findIndex((s) => s.id === currentSkillId);
  const prev = currentIndex > 0 ? skills[currentIndex - 1] : null;
  const next = currentIndex < skills.length - 1 ? skills[currentIndex + 1] : null;

  const handleNavigate = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex justify-between items-center mt-12 pt-6 border-t border-border">
      {prev ? (
        <Button variant="outline" className="gap-2" onClick={() => handleNavigate(`/bb-upper/${moduleId}/${prev.id}`)}>
          <ArrowLeft className="h-4 w-4" />
          <span className="hidden sm:inline">{prev.title}</span>
          <span className="sm:hidden">Previous</span>
        </Button>
      ) : (
        <div />
      )}
      {next ? (
        <Button className="gap-2 bg-primary hover:bg-primary/90" onClick={() => handleNavigate(`/bb-upper/${moduleId}/${next.id}`)}>
          <span className="hidden sm:inline">{next.title}</span>
          <span className="sm:hidden">Next</span>
          <ArrowRight className="h-4 w-4" />
        </Button>
      ) : (
        <Button className="gap-2 bg-primary hover:bg-primary/90" onClick={() => handleNavigate(`/bb-upper/${moduleId}`)}>
          Back to Module
          <ArrowRight className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
};

export default SkillNavigation;
