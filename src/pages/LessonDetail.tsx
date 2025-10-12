import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from '@/hooks/use-toast';
import { format } from 'date-fns';
import { ArrowLeft, Calendar, Save, Plus, Trash2, ExternalLink, BookOpen } from 'lucide-react';

interface WebLink {
  title: string;
  url: string;
}

interface Lesson {
  id: string;
  lesson_date: string;
  lesson_title: string;
  teacher_notes: string | null;
  web_links: any;
  updated_at: string;
}

const LessonDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { user } = useAuth();
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [teacherNotes, setTeacherNotes] = useState('');
  const [webLinks, setWebLinks] = useState<WebLink[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    if (id) {
      fetchLesson();
    }
  }, [id]);

  const fetchLesson = async () => {
    try {
      const { data, error } = await supabase
        .from('lessons')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      
      setLesson(data);
      setTeacherNotes(data.teacher_notes || '');
      const parsedLinks = typeof data.web_links === 'string' 
        ? JSON.parse(data.web_links) 
        : (data.web_links || []);
      setWebLinks(parsedLinks);
    } catch (error: any) {
      toast({
        title: 'Error',
        description: 'Failed to load lesson',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      const { error } = await supabase
        .from('lessons')
        .update({
          teacher_notes: teacherNotes,
          web_links: JSON.stringify(webLinks) as any,
        })
        .eq('id', id);

      if (error) throw error;

      toast({
        title: 'Success',
        description: 'Lesson updated successfully',
      });
      setIsEditing(false);
      fetchLesson();
    } catch (error: any) {
      toast({
        title: 'Error',
        description: 'Failed to update lesson',
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
          <Skeleton className="h-96" />
        </div>
      </div>
    );
  }

  if (!lesson) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-20">
          <Card>
            <CardContent className="py-12 text-center">
              <p>Lesson not found</p>
              <Button asChild className="mt-4">
                <Link to="/dashboard/lessons">Back to Lessons</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="container mx-auto px-4 py-20">
        <Button asChild variant="ghost" className="mb-6">
          <Link to="/dashboard/lessons">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Lessons
          </Link>
        </Button>

        <Card>
          <CardHeader className="bg-blue-50">
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-3xl mb-4 text-foreground">{lesson.lesson_title}</CardTitle>
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="mr-2 h-4 w-4 text-blue-600" />
                  {format(new Date(lesson.lesson_date), 'EEEE, MMMM d, yyyy')}
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Last updated: {format(new Date(lesson.updated_at), 'MMM d, yyyy h:mm a')}
                </p>
              </div>
              {!isEditing && (
                <Button onClick={() => setIsEditing(true)}>Edit</Button>
              )}
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label className="text-lg font-semibold mb-3 block flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-blue-600" />
                Teacher Notes
              </Label>
              {isEditing ? (
                <Textarea
                  value={teacherNotes}
                  onChange={(e) => setTeacherNotes(e.target.value)}
                  placeholder="Add notes about this lesson..."
                  className="min-h-[200px]"
                />
              ) : (
                <div className="bg-blue-50/50 p-6 rounded-lg">
                  <p className="whitespace-pre-wrap text-foreground">
                    {teacherNotes || 'No notes yet'}
                  </p>
                </div>
              )}
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <Label className="text-lg font-semibold flex items-center gap-2">
                  <ExternalLink className="h-5 w-5 text-blue-600" />
                  Web Links
                </Label>
                {isEditing && (
                  <Button onClick={addWebLink} size="sm" variant="outline">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Link
                  </Button>
                )}
              </div>
              
              {isEditing ? (
                <div className="space-y-4">
                  {webLinks.map((link, index) => (
                    <div key={index} className="flex gap-2 items-start p-4 bg-blue-50/30 rounded-lg">
                      <div className="flex-1 space-y-2">
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
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeWebLink(index)}
                        className="text-destructive hover:bg-destructive/10"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  {webLinks.length === 0 && (
                    <p className="text-muted-foreground text-sm text-center py-4 bg-blue-50/30 rounded-lg">No links added yet</p>
                  )}
                </div>
              ) : (
                <div className="space-y-2">
                  {webLinks.length === 0 ? (
                    <p className="text-muted-foreground text-center py-6 bg-blue-50/30 rounded-lg">No links available</p>
                  ) : (
                    webLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-4 bg-blue-50/30 rounded-lg hover:bg-blue-50 transition-colors"
                      >
                        <ExternalLink className="h-5 w-5 text-blue-600 flex-shrink-0" />
                        <span className="text-foreground font-medium">{link.title || link.url}</span>
                      </a>
                    ))
                  )}
                </div>
              )}
            </div>

            {isEditing && (
              <div className="flex gap-2 pt-4 border-t">
                <Button onClick={handleSave}>
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setIsEditing(false);
                    setTeacherNotes(lesson.teacher_notes || '');
                    const parsedLinks = typeof lesson.web_links === 'string' 
                      ? JSON.parse(lesson.web_links) 
                      : (lesson.web_links || []);
                    setWebLinks(parsedLinks);
                  }}
                >
                  Cancel
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

export default LessonDetail;
