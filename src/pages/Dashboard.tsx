import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Skeleton } from '@/components/ui/skeleton';
import { BookOpen, Calendar, User, GraduationCap } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { format } from 'date-fns';

interface Profile {
  id: string;
  full_name: string;
  email: string;
  enrollment_date: string;
}

interface Lesson {
  id: string;
  lesson_date: string;
  lesson_title: string;
  teacher_notes: string | null;
}

const Dashboard = () => {
  const { user, isAdmin } = useAuth();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [recentLessons, setRecentLessons] = useState<Lesson[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [fullName, setFullName] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    if (user) {
      fetchProfile();
      fetchRecentLessons();
    }
  }, [user]);

  const fetchProfile = async () => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user?.id)
        .single();

      if (error) throw error;
      setProfile(data);
      setFullName(data.full_name);
    } catch (error: any) {
      toast({
        title: 'Error',
        description: 'Failed to load profile',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const fetchRecentLessons = async () => {
    try {
      const { data, error } = await supabase
        .from('lessons')
        .select('id, lesson_date, lesson_title, teacher_notes')
        .eq('student_id', user?.id)
        .order('lesson_date', { ascending: false })
        .limit(5);

      if (error) throw error;
      setRecentLessons(data || []);
    } catch (error: any) {
      console.error('Error fetching lessons:', error);
    }
  };

  const handleUpdateProfile = async () => {
    try {
      const { error } = await supabase
        .from('profiles')
        .update({ full_name: fullName })
        .eq('id', user?.id);

      if (error) throw error;

      toast({
        title: 'Success',
        description: 'Profile updated successfully',
      });
      setIsEditing(false);
      fetchProfile();
    } catch (error: any) {
      toast({
        title: 'Error',
        description: 'Failed to update profile',
        variant: 'destructive',
      });
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-20">
          <Skeleton className="h-12 w-64 mb-8" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Skeleton className="h-48" />
            <Skeleton className="h-48" />
            <Skeleton className="h-48" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-20">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Welcome back, {profile?.full_name}!
          </h1>
          <p className="text-muted-foreground">
            Track your progress and access your learning materials
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Profile</CardTitle>
              <User className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              {isEditing ? (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" onClick={handleUpdateProfile}>
                      Save
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        setIsEditing(false);
                        setFullName(profile?.full_name || '');
                      }}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  <p className="text-2xl font-bold">{profile?.full_name}</p>
                  <p className="text-sm text-muted-foreground">{profile?.email}</p>
                  <p className="text-xs text-muted-foreground">
                    Member since {format(new Date(profile?.enrollment_date || ''), 'MMM yyyy')}
                  </p>
                  <Button size="sm" variant="outline" onClick={() => setIsEditing(true)}>
                    Edit Profile
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Lessons</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{recentLessons.length}</div>
              <p className="text-xs text-muted-foreground">
                Keep up the great work!
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Quick Access</CardTitle>
              <GraduationCap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent className="space-y-2">
              <Button asChild className="w-full" variant="outline" size="sm">
                <Link to="/members/activities">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Practice Activities
                </Link>
              </Button>
              {isAdmin && (
                <Button asChild className="w-full" variant="outline" size="sm">
                  <Link to="/admin">Admin Panel</Link>
                </Button>
              )}
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Lessons</CardTitle>
            <CardDescription>Your latest lesson history</CardDescription>
          </CardHeader>
          <CardContent>
            {recentLessons.length === 0 ? (
              <p className="text-muted-foreground text-center py-8">
                No lessons yet. Your teacher will add them after your sessions.
              </p>
            ) : (
              <div className="space-y-4">
                {recentLessons.map((lesson) => (
                  <Link
                    key={lesson.id}
                    to={`/dashboard/lessons/${lesson.id}`}
                    className="block p-4 border rounded-lg hover:bg-accent transition-colors"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">{lesson.lesson_title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {format(new Date(lesson.lesson_date), 'MMMM d, yyyy')}
                        </p>
                        {lesson.teacher_notes && (
                          <p className="text-sm mt-2 line-clamp-2">{lesson.teacher_notes}</p>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
                <Button asChild variant="outline" className="w-full">
                  <Link to="/dashboard/lessons">View All Lessons</Link>
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
