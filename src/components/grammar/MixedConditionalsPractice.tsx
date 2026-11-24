import { useRef, useState } from 'react';
import { BookOpen, PenLine } from 'lucide-react';
import { useActivityTracking } from '@/hooks/useActivityTracking';
import MixedConditionalsGuide from './MixedConditionalsGuide';
import {
  FillBlanksExercise,
  IdentifyPatternExercise,
  MultipleChoiceExercise,
} from './MixedConditionalsCoreExercises';
import {
  ErrorCorrectionExercise,
  ScrambleExercise,
  TransformationExercise,
} from './MixedConditionalsSentenceExercises';

type SectionKey =
  | 'guide'
  | 'fill-blanks'
  | 'multiple-choice'
  | 'scramble'
  | 'identify'
  | 'transform'
  | 'error';

const SECTIONS: { key: SectionKey; label: string; isGuide?: boolean }[] = [
  { key: 'guide', label: 'Guide', isGuide: true },
  { key: 'fill-blanks', label: '1. Fill in the Blanks' },
  { key: 'multiple-choice', label: '2. Multiple Choice' },
  { key: 'scramble', label: '3. Scramble' },
  { key: 'identify', label: '4. Identify Pattern' },
  { key: 'transform', label: '5. Transformation' },
  { key: 'error', label: '6. Error Correction' },
];

const MixedConditionalsPractice = () => {
  const [active, setActive] = useState<SectionKey>('guide');
  const topRef = useRef<HTMLDivElement>(null);
  const track = useActivityTracking();

  const selectSection = (next: SectionKey) => {
    setActive(next);
    topRef.current?.scrollIntoView({ block: 'start', behavior: 'instant' });
  };

  return (
    <div ref={topRef} className="space-y-6 scroll-mt-24">
      <div className="flex flex-wrap gap-2">
        {SECTIONS.map((s) => {
          const isCurrent = active === s.key;
          const Icon = s.isGuide ? BookOpen : PenLine;
          return (
            <button
              key={s.key}
              type="button"
              onClick={() => selectSection(s.key)}
              className={`inline-flex items-center gap-1.5 rounded-lg border px-3.5 py-2 text-sm font-medium transition-colors ${
                isCurrent
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-background text-foreground border-border hover:bg-muted'
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              {s.label}
            </button>
          );
        })}
      </div>

      {active === 'guide' && (
        <MixedConditionalsGuide onStartPractice={() => selectSection('fill-blanks')} />
      )}
      {active === 'fill-blanks' && <FillBlanksExercise onTrack={track} />}
      {active === 'multiple-choice' && <MultipleChoiceExercise onTrack={track} />}
      {active === 'scramble' && <ScrambleExercise onTrack={track} />}
      {active === 'identify' && <IdentifyPatternExercise onTrack={track} />}
      {active === 'transform' && <TransformationExercise onTrack={track} />}
      {active === 'error' && <ErrorCorrectionExercise onTrack={track} />}
    </div>
  );
};

export default MixedConditionalsPractice;