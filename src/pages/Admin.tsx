import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from '@/hooks/use-toast';
import { Plus, Users, BookOpen, Calendar } from 'lucide-react';
import { format } from 'date-fns';

interface Student {
  id: string;
  full_name: string;
  email: string;
}

interface WebLink {
  title: string;
  url: string;
}

const Admin = () => {
  const { isAdmin } = useAuth();
  const [students, setStudents] = useState<Student[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  // Form state
  const [selectedStudent, setSelectedStudent] = useState('');
  const [lessonDate, setLessonDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  const [lessonTitle, setLessonTitle] = useState('');
  const [teacherNotes, setTeacherNotes] = useState('');
  const [webLinks, setWebLinks] = useState<WebLink[]>([]);

  useEffect(() => {
    if (isAdmin) {
      fetchStudents();
    }
  }, [isAdmin]);

  const fetchStudents = async () => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('id, full_name, email')
        .order('full_name');

      if (error) throw error;
      setStudents(data || []);
    } catch (error: any) {
      toast({
        title: 'Error',
        description: 'Failed to load students',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateLesson = async () => {
    if (!selectedStudent || !lessonTitle) {
      toast({
        title: 'Missing Information',
        description: 'Please select a student and enter a lesson title',
        variant: 'destructive',
      });
      return;
    }

    try {
      const { error } = await supabase.from('lessons').insert({
        student_id: selectedStudent,
        lesson_date: lessonDate,
        lesson_title: lessonTitle,
        teacher_notes: teacherNotes,
        web_links: JSON.stringify(webLinks.filter(link => link.title && link.url)) as any,
      });

      if (error) throw error;

      toast({
        title: 'Success',
        description: 'Lesson created successfully',
      });

      // Reset form
      setSelectedStudent('');
      setLessonTitle('');
      setTeacherNotes('');
      setWebLinks([]);
      setIsDialogOpen(false);
    } catch (error: any) {
      toast({
        title: 'Error',
        description: 'Failed to create lesson',
        variant: 'destructive',
      });
    }
  };

  const addWebLink = () => {
    setWebLinks([...webLinks, { title: '', url: '' }]);
  };

  const removeWebLink = (index: number) => {
    setWebLinks(webLinks.filter((_, i) => i !== index));
  };

  const updateWebLink = (index: number, field: 'title' | 'url', value: string) => {
    const updated = [...webLinks];
    updated[index][field] = value;
    setWebLinks(updated);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-20">
          <Skeleton className="h-12 w-64 mb-8" />
          <div className="grid gap-6 md:grid-cols-2">
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
          <h1 className="text-4xl font-bold text-foreground mb-2">Admin Panel</h1>
          <p className="text-muted-foreground">Manage students and lessons</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{students.length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Quick Actions</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="w-full">
                    <Plus className="mr-2 h-4 w-4" />
                    Create Lesson
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Create New Lesson</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label>Student</Label>
                      <Select value={selectedStudent} onValueChange={setSelectedStudent}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a student" />
                        </SelectTrigger>
                        <SelectContent>
                          {students.map((student) => (
                            <SelectItem key={student.id} value={student.id}>
                              {student.full_name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="date">Lesson Date</Label>
                      <Input
                        id="date"
                        type="date"
                        value={lessonDate}
                        onChange={(e) => setLessonDate(e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="title">Lesson Title</Label>
                      <Input
                        id="title"
                        value={lessonTitle}
                        onChange={(e) => setLessonTitle(e.target.value)}
                        placeholder="e.g., Business Email Writing"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="notes">Teacher Notes</Label>
                      <Textarea
                        id="notes"
                        value={teacherNotes}
                        onChange={(e) => setTeacherNotes(e.target.value)}
                        placeholder="Add notes about the lesson..."
                        className="min-h-[120px]"
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label>Web Links</Label>
                        <Button onClick={addWebLink} size="sm" variant="outline" type="button">
                          <Plus className="mr-2 h-4 w-4" />
                          Add Link
                        </Button>
                      </div>
                      {webLinks.map((link, index) => (
                        <div key={index} className="flex gap-2">
                          <Input
                            placeholder="Link title"
                            value={link.title}
                            onChange={(e) => updateWebLink(index, 'title', e.target.value)}
                          />
                          <Input
                            placeholder="https://..."
                            value={link.url}
                            onChange={(e) => updateWebLink(index, 'url', e.target.value)}
                          />
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeWebLink(index)}
                            type="button"
                          >
                            ×
                          </Button>
                        </div>
                      ))}
                    </div>

                    <Button onClick={handleCreateLesson} className="w-full">
                      Create Lesson
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Students</CardTitle>
            <CardDescription>Manage student accounts and view their lessons</CardDescription>
          </CardHeader>
          <CardContent>
            {students.length === 0 ? (
              <p className="text-center text-muted-foreground py-8">No students enrolled yet</p>
            ) : (
              <div className="space-y-4">
                {students.map((student) => (
                  <div
                    key={student.id}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div>
                      <h3 className="font-semibold">{student.full_name}</h3>
                      <p className="text-sm text-muted-foreground">{student.email}</p>
                    </div>
                    <Button asChild variant="outline" size="sm">
                      <Link to={`/admin/students/${student.id}`}>View Lessons</Link>
                    </Button>
                  </div>
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

export default Admin;
