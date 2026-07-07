import { Lock } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Shared "Coming soon" pill used across every listing page to mark modules,
 * units, sections or topics that are not yet built out. Kept intentionally
 * tiny — the pill IS the coming-soon indicator; the greyed card around it
 * (opacity + cursor-not-allowed) communicates the disabled state.
 */
export const ComingSoonBadge = ({ className }: { className?: string }) => (
  <div
    className={cn(
      'inline-flex items-center gap-1 rounded-full bg-black/40 text-white/90 text-xs px-2 py-1 backdrop-blur-sm',
      className,
    )}
  >
    <Lock className="h-3 w-3" />
    <span>Coming soon</span>
  </div>
);

export default ComingSoonBadge;
