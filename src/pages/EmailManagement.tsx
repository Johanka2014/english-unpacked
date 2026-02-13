import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Mail, Send, Loader2 } from "lucide-react";

interface Student {
  id: string;
  full_name: string;
  email: string;
}

interface Lesson {
  lesson_date: string;
  lesson_title: string;
}

const EmailManagement = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  
  // Form state
  const [selectedStudent, setSelectedStudent] = useState("");
  const [emailType, setEmailType] = useState("");
  const [subject, setSubject] = useState("");
  const [customVariables, setCustomVariables] = useState("");

  useEffect(() => {
    checkAdminAndFetchData();
  }, []);

  const checkAdminAndFetchData = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        navigate("/auth");
        return;
      }

      const { data: roleData } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", user.id)
        .single();

      if (roleData?.role !== "admin") {
        navigate("/");
        return;
      }

      await fetchStudents();
    } catch (error) {
      if (import.meta.env.DEV) console.error("Error checking admin status:", error);
      navigate("/");
    } finally {
      setLoading(false);
    }
  };

  const fetchStudents = async () => {
    const { data, error } = await supabase
      .from("profiles")
      .select("id, full_name, email")
      .order("full_name");

    if (error) {
      toast({
        title: "Error",
        description: "Failed to fetch students",
        variant: "destructive",
      });
      return;
    }

    setStudents(data || []);
  };

  const handleSendEmail = async () => {
    if (!selectedStudent || !emailType) {
      toast({
        title: "Missing Information",
        description: "Please select a student and email type",
        variant: "destructive",
      });
      return;
    }

    setSending(true);

    try {
      const student = students.find(s => s.id === selectedStudent);
      if (!student) throw new Error("Student not found");

      // Parse custom variables if provided
      let variables: Record<string, string> = {};
      if (customVariables) {
        try {
          variables = JSON.parse(customVariables);
        } catch (e) {
          toast({
            title: "Invalid Variables",
            description: "Custom variables must be valid JSON",
            variant: "destructive",
          });
          setSending(false);
          return;
        }
      }

      // Add student name to variables
      variables.student_name = student.full_name.split(" ")[0];

      // If invoice email, fetch lessons for the current month
      if (emailType === "monthly-invoice") {
        const now = new Date();
        const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
        const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);

        const { data: lessons } = await supabase
          .from("lessons")
          .select("lesson_date, lesson_title")
          .eq("student_id", selectedStudent)
          .gte("lesson_date", startOfMonth.toISOString())
          .lte("lesson_date", endOfMonth.toISOString())
          .order("lesson_date");

        if (lessons && lessons.length > 0) {
          const lessonsTableRows = lessons.map((lesson: Lesson) => {
            const date = new Date(lesson.lesson_date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short"
            });
            return `
              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 12px; font-family: Arial, Helvetica, sans-serif; font-size: 14px; color: #1e293b;">${date}</td>
                <td style="padding: 12px; font-family: Arial, Helvetica, sans-serif; font-size: 14px; color: #1e293b;">${lesson.lesson_title}</td>
                <td style="padding: 12px; text-align: right; font-family: Arial, Helvetica, sans-serif; font-size: 14px; color: #1e293b;">60 min</td>
                <td style="padding: 12px; text-align: right; font-family: Arial, Helvetica, sans-serif; font-size: 14px; color: #1e293b;">£45.00</td>
              </tr>
            `;
          }).join("");

          variables.lessons_table = lessonsTableRows;
          variables.total_amount = `£${lessons.length * 45}.00`;
          variables.billing_month = now.toLocaleDateString("en-GB", { month: "long", year: "numeric" });
          variables.invoice_number = `INV-${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${selectedStudent.slice(0, 8)}`;
          variables.invoice_date = now.toLocaleDateString("en-GB");
          
          const paymentDeadline = new Date(endOfMonth);
          paymentDeadline.setDate(paymentDeadline.getDate() + 7);
          variables.payment_deadline = paymentDeadline.toLocaleDateString("en-GB");
          
          // Add payment details (these should be configured in your settings)
          variables.mbank_account = "12 3456 7890 1234 5678 9012 3456";
          variables.mbank_reference = variables.invoice_number;
          variables.revolut_tag = "@joannaenglish";
          variables.paypal_link = "https://paypal.me/joannaenglish";
        }
      }

      const { data, error } = await supabase.functions.invoke("send-email", {
        body: {
          to: student.email,
          template: emailType,
          variables,
          subject: subject || undefined,
        },
      });

      if (error) throw error;

      toast({
        title: "Email Sent!",
        description: `Successfully sent ${emailType} email to ${student.full_name}`,
      });

      // Reset form
      setSelectedStudent("");
      setEmailType("");
      setSubject("");
      setCustomVariables("");
    } catch (error: any) {
      if (import.meta.env.DEV) console.error("Error sending email:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to send email",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-brand-navy via-brand-royal to-brand-navy flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-white" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-navy via-brand-royal to-brand-navy">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/95 backdrop-blur-sm shadow-xl">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Mail className="w-8 h-8 text-brand-royal" />
                <div>
                  <CardTitle className="text-3xl font-heading text-brand-navy">
                    Email Management
                  </CardTitle>
                  <CardDescription>
                    Send templated emails to your students
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {/* Student Selection */}
              <div className="space-y-2">
                <Label htmlFor="student">Select Student</Label>
                <Select value={selectedStudent} onValueChange={setSelectedStudent}>
                  <SelectTrigger id="student">
                    <SelectValue placeholder="Choose a student..." />
                  </SelectTrigger>
                  <SelectContent>
                    {students.map((student) => (
                      <SelectItem key={student.id} value={student.id}>
                        {student.full_name} ({student.email})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Email Type Selection */}
              <div className="space-y-2">
                <Label htmlFor="email-type">Email Template</Label>
                <Select value={emailType} onValueChange={setEmailType}>
                  <SelectTrigger id="email-type">
                    <SelectValue placeholder="Choose email type..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="welcome">Welcome Email</SelectItem>
                    <SelectItem value="lesson-reminder">Lesson Reminder</SelectItem>
                    <SelectItem value="monthly-invoice">Monthly Invoice</SelectItem>
                    <SelectItem value="practice-activity">Practice Activity</SelectItem>
                    <SelectItem value="progress-update">Progress Update</SelectItem>
                    <SelectItem value="newsletter">Newsletter</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Custom Subject */}
              <div className="space-y-2">
                <Label htmlFor="subject">Custom Subject (optional)</Label>
                <Input
                  id="subject"
                  placeholder="Leave blank to use default subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>

              {/* Custom Variables */}
              <div className="space-y-2">
                <Label htmlFor="variables">Custom Variables (JSON)</Label>
                <Textarea
                  id="variables"
                  placeholder='{"lesson_date": "December 15, 2025", "lesson_time": "3:00 PM"}'
                  value={customVariables}
                  onChange={(e) => setCustomVariables(e.target.value)}
                  rows={6}
                  className="font-mono text-sm"
                />
                <p className="text-sm text-muted-foreground">
                  Enter variables as JSON. Student name is automatically included.
                  {emailType === "monthly-invoice" && " For invoices, lessons are automatically fetched from the database."}
                </p>
              </div>

              {/* Send Button */}
              <div className="flex gap-4">
                <Button
                  onClick={handleSendEmail}
                  disabled={!selectedStudent || !emailType || sending}
                  className="flex-1"
                >
                  {sending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Email
                    </>
                  )}
                </Button>
                
                <Button
                  variant="outline"
                  onClick={() => navigate("/admin")}
                >
                  Back to Admin
                </Button>
              </div>

              {/* Info Box */}
              <div className="bg-brand-light/50 border border-brand-royal/20 rounded-lg p-4">
                <h4 className="font-semibold text-brand-navy mb-2">Email Templates Available:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• <strong>Welcome:</strong> For new students joining</li>
                  <li>• <strong>Lesson Reminder:</strong> Sent before scheduled lessons</li>
                  <li>• <strong>Monthly Invoice:</strong> Billing statement with payment options (auto-generated)</li>
                  <li>• <strong>Practice Activity:</strong> Weekly practice exercises</li>
                  <li>• <strong>Progress Update:</strong> Student progress reports</li>
                  <li>• <strong>Newsletter:</strong> Monthly updates and tips</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EmailManagement;
