import { useCallback, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';

export interface ActivityResultInput {
  /** Human readable name of the activity, e.g. "4a Use of English" */
  activityTitle: string;
  /** Kind of activity, e.g. "multiple-choice" */
  activityType: string;
  score: number;
  total: number;
  /** Optional explicit id when several activities on a page share a title */
  activityId?: string | number;
}

const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);

const lessonTitleFromDocument = () =>
  (typeof document !== 'undefined' ? document.title : '').split('|')[0].trim().slice(0, 200);

/**
 * Records a student's score for a scored activity.
 * No-op when signed out. Fire-and-forget: never blocks or breaks the exercise UI.
 */
export const useActivityTracking = () => {
  const { user } = useAuth();
  const { pathname } = useLocation();
  const bestSent = useRef<Record<string, number>>({});

  return useCallback(
    ({ activityTitle, activityType, score, total, activityId }: ActivityResultInput) => {
      if (!user) return;
      if (!Number.isFinite(score) || !Number.isFinite(total) || total <= 0) return;

      const safeScore = Math.max(0, Math.min(Math.round(score), Math.round(total)));
      const safeTotal = Math.round(total);
      const idPart = activityId !== undefined ? `-${activityId}` : '';
      const activityKey = `${pathname}#${slugify(activityTitle || activityType)}${idPart}`;
      const percentage = Math.round((safeScore / safeTotal) * 100);

      // Avoid re-sending the same or a worse score within the session
      if ((bestSent.current[activityKey] ?? -1) >= percentage) return;
      bestSent.current[activityKey] = percentage;

      void (async () => {
        try {
          const { error } = await supabase.rpc('record_activity_result', {
            p_activity_key: activityKey,
            p_activity_title: activityTitle || 'Activity',
            p_activity_type: activityType || '',
            p_lesson_slug: pathname,
            p_lesson_title: lessonTitleFromDocument(),
            p_score: safeScore,
            p_total: safeTotal,
          });
          if (error && import.meta.env.DEV) {
            console.error('Failed to record activity result', error);
          }
        } catch (err) {
          if (import.meta.env.DEV) console.error('Failed to record activity result', err);
        }
      })();
    },
    [user, pathname],
  );
};

export default useActivityTracking;
