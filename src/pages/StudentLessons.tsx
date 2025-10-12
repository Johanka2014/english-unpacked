import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Calendar, BookOpen, ArrowLeft } from 'lucide-react';
import { format } from 'date-fns';

interface Student {
  id: string;
  full_name: string;
  email: string;
}

interface Lesson {
  id: string;
  lesson_date: string;
  lesson_title: string;
  teacher_notes: string | null;
}

const StudentLessons = () => {
  const { studentId } = useParams<{ studentId: string }>();
  const [student, setStudent] = useState<Student | null>(null);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    if (studentId) {
      fetchStudentAndLessons();
    }
  }, [studentId]);

  const fetchStudentAndLessons = async () => {
    try {
      // Fetch student info
      const { data: studentData, error: studentError } = await supabase
        .from('profiles')
        .select('id, full_name, email')
        .eq('id', studentId)
        .single();

      if (studentError) throw studentError;
      setStudent(studentData);

      // Fetch lessons
      const { data: lessonsData, error: lessonsError } = await supabase
        .from('lessons')
        .select('id, lesson_date, lesson_title, teacher_notes')
        .eq('student_id', studentId)
        .order('lesson_date', { ascending: false });

      if (lessonsError) throw lessonsError;
      setLessons(lessonsData || []);
    } catch (error: any) {
      toast({
        title: 'Error',
        description: 'Failed to load student information',
        variant: 'destructive',
      });
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
          <Skeleton className="h-32 w-full mb-4" />
          <Skeleton className="h-32 w-full mb-4" />
        </div>
      </div>
    );
  }

  if (!student) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-20">
          <Card>
            <CardHeader>
              <CardTitle>Student Not Found</CardTitle>
              <CardDescription>The requested student could not be found.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild>
                <Link to="/admin">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Admin Panel
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-20">
        <Button asChild variant="ghost" className="mb-6">
          <Link to="/admin">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Admin Panel
          </Link>
        </Button>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">{student.full_name}</h1>
          <p className="text-muted-foreground">{student.email}</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Lesson History
            </CardTitle>
            <CardDescription>
              {lessons.length} {lessons.length === 1 ? 'lesson' : 'lessons'} completed
            </CardDescription>
          </CardHeader>
          <CardContent>
            {lessons.length === 0 ? (
              <p className="text-center text-muted-foreground py-8">No lessons yet</p>
            ) : (
              <div className="space-y-4">
                {lessons.map((lesson) => (
                  <Link
                    key={lesson.id}
                    to={`/dashboard/lessons/${lesson.id}`}
                    className="block"
                  >
                    <Card className="hover:bg-accent transition-colors cursor-pointer">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="space-y-1">
                            <CardTitle className="text-xl">{lesson.lesson_title}</CardTitle>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4" />
                              {format(new Date(lesson.lesson_date), 'MMMM d, yyyy')}
                            </div>
                          </div>
                        </div>
                        {lesson.teacher_notes && (
                          <CardDescription className="mt-2 line-clamp-2">
                            {lesson.teacher_notes}
                          </CardDescription>
                        )}
                      </CardHeader>
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default StudentLessons;
