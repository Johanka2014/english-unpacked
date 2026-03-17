import { ReactNode, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface StartersPartCardProps {
  partNumber: number;
  title: string;
  subtitle: string;
  color: string; // gradient classes
  icon: string; // emoji
  children: ReactNode;
  defaultOpen?: boolean;
}

const StartersPartCard = ({ partNumber, title, subtitle, color, icon, children, defaultOpen = false }: StartersPartCardProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full bg-gradient-to-r ${color} p-6 text-white text-left flex items-center justify-between hover:brightness-110 transition-all`}
      >
        <div className="flex items-center gap-4">
          <span className="text-4xl">{icon}</span>
          <div>
            <div className="text-sm font-medium opacity-80">Part {partNumber}</div>
            <h3 className="text-xl md:text-2xl font-bold" style={{ fontFamily: 'Fredoka, sans-serif' }}>
              {title}
            </h3>
            <p className="text-sm opacity-80 mt-1">{subtitle}</p>
          </div>
        </div>
        {isOpen ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
      </button>
      {isOpen && (
        <div className="p-6 md:p-8">
          {children}
        </div>
      )}
    </div>
  );
};

export default StartersPartCard;
