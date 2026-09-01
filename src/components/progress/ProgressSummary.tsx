import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Target, TrendingUp, CalendarCheck } from 'lucide-react';
import { format } from 'date-fns';

interface ActivityResult {
  id: string;
  activity_title: string;
  activity_type: string | null;
  lesson_title: string | null;
  lesson_slug: string | null;
  score: number;
  total: number;
  percentage: number;
  completed_at: string;
}

interface ProgressSummaryProps {
  studentId: string;
  /** Shown when the viewer is a teacher looking at someone else's progress */
  heading?: string;
  description?: string;
  limit?: number;
}

const scoreTone = (percentage: number) => {
  if (percentage >= 80) return 'bg-green-50 border-green-200 text-green-700';
  if (percentage >= 50) return 'bg-amber-50 border-amber-200 text-amber-700';
  return 'bg-red-50 border-red-200 text-red-700';
};

const ProgressSummary = ({
  studentId,
  heading = 'My progress',
  description = 'Best score for each activity you have completed',
  limit = 20,
}: ProgressSummaryProps) => {
  const [results, setResults] = useState<ActivityResult[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      setIsLoading(true);
      const { data, error } = await supabase
        .from('activity_results')
        .select('id, activity_title, activity_type, lesson_title, lesson_slug, score, total, percentage, completed_at')
        .eq('student_id', studentId)
        .order('completed_at', { ascending: false })
        .limit(limit);

      if (cancelled) return;
      if (error && import.meta.env.DEV) console.error('Failed to load activity results', error);
      setResults(data || []);
      setIsLoading(false);
    };

    if (studentId) load();
    return () => {
      cancelled = true;
    };
  }, [studentId, limit]);

  const completed = results.length;
  const totalQuestions = results.reduce((sum, r) => sum + r.total, 0);
  const totalCorrect = results.reduce((sum, r) => sum + r.score, 0);
  const accuracy = totalQuestions ? Math.round((totalCorrect / totalQuestions) * 100) : 0;
  const weekAgo = Date.now() - 7 * 86400000;
  const thisWeek = results.filter((r) => new Date(r.completed_at).getTime() >= weekAgo).length;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Target className="h-5 w-5 text-blue-600" />
          {heading}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="space-y-3">
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-16 w-full" />
          </div>
        ) : completed === 0 ? (
          <p className="text-muted-foreground text-sm py-6 text-center">
            No activities completed yet. Scores appear here automatically once exercises are checked.
          </p>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              <div className="rounded-lg border border-border p-4">
                <div className="flex items-center gap-2 text-muted-foreground text-xs mb-1">
                  <Target className="h-4 w-4" /> Activities completed
                </div>
                <p className="text-2xl font-bold text-foreground">{completed}</p>
              </div>
              <div className="rounded-lg border border-border p-4">
                <div className="flex items-center gap-2 text-muted-foreground text-xs mb-1">
                  <TrendingUp className="h-4 w-4" /> Overall accuracy
                </div>
                <p className="text-2xl font-bold text-foreground">{accuracy}%</p>
              </div>
              <div className="rounded-lg border border-border p-4">
                <div className="flex items-center gap-2 text-muted-foreground text-xs mb-1">
                  <CalendarCheck className="h-4 w-4" /> Done this week
                </div>
                <p className="text-2xl font-bold text-foreground">{thisWeek}</p>
              </div>
            </div>

            <ul className="space-y-2">
              {results.map((r) => (
                <li
                  key={r.id}
                  className={`flex items-center justify-between gap-4 rounded-lg border p-3 ${scoreTone(r.percentage)}`}
                >
                  <div className="min-w-0">
                    <p className="font-medium text-foreground truncate">{r.activity_title}</p>
                    <p className="text-xs text-muted-foreground truncate">
                      {r.lesson_title || r.lesson_slug}
                      {' · '}
                      {format(new Date(r.completed_at), 'd MMM yyyy')}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-semibold">
                      {r.score}/{r.total}
                    </p>
                    <p className="text-xs">{r.percentage}%</p>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default ProgressSummary;
