import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { format } from 'date-fns';
import { Calendar, BookOpen } from 'lucide-react';

interface Lesson {
  id: string;
  lesson_date: string;
  lesson_title: string;
  teacher_notes: string | null;
}

const Lessons = () => {
  const { user } = useAuth();
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchLessons();
    }
  }, [user]);

  const fetchLessons = async () => {
    try {
      const { data, error } = await supabase
        .from('lessons')
        .select('*')
        .eq('student_id', user?.id)
        .order('lesson_date', { ascending: false });

      if (error) throw error;
      setLessons(data || []);
    } catch (error: any) {
      console.error('Error fetching lessons:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-20">
          <Skeleton className="h-12 w-64 mb-8" />
          <div className="space-y-4">
            <Skeleton className="h-32" />
            <Skeleton className="h-32" />
            <Skeleton className="h-32" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="container mx-auto px-4 py-20">
        <Card className="mb-8 bg-blue-50">
          <CardHeader>
            <h1 className="text-4xl font-bold text-foreground mb-2 flex items-center gap-3">
              <BookOpen className="h-10 w-10 text-blue-600" />
              My Lessons
            </h1>
            <p className="text-muted-foreground">
              View and manage all your lesson history
            </p>
          </CardHeader>
        </Card>

        {lessons.length === 0 ? (
          <Card>
            <CardContent className="py-16">
              <div className="text-center">
                <div className="bg-blue-50/50 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">No lessons yet</h3>
                <p className="text-muted-foreground">
                  Your teacher will add lesson records after your sessions.
                </p>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6">
            {lessons.map((lesson) => (
              <Link key={lesson.id} to={`/dashboard/lessons/${lesson.id}`}>
                <Card className="bg-blue-50 hover:bg-blue-100 transition-colors cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-3 text-foreground">{lesson.lesson_title}</CardTitle>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="mr-2 h-4 w-4 text-blue-600" />
                          {format(new Date(lesson.lesson_date), 'EEEE, MMMM d, yyyy')}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  {lesson.teacher_notes && (
                    <CardContent>
                      <div className="bg-white/50 p-4 rounded-lg">
                        <p className="text-sm line-clamp-3 text-foreground">{lesson.teacher_notes}</p>
                      </div>
                    </CardContent>
                  )}
                </Card>
              </Link>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Lessons;
