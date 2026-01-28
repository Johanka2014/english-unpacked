import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import ProtectedRoute from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import BusinessEnglish from "./pages/BusinessEnglish";
import BusinessTravel from "./pages/BusinessTravel";
import ConversationalEnglish from "./pages/Conversation";
import ExamPreparation from "./pages/ExamPreparation";
import BookingWrapper from "./pages/BookingWrapper";
import BusinessVocabAppWrapper from "./pages/BusinessVocabAppWrapper";
import CaeExamPracticeWrapper from "./pages/CaeExamPracticeWrapper";
import FceVocabPracticeWrapper from "./pages/FceVocabPracticeWrapper";
import TenseMasterWrapper from "./pages/TenseMasterWrapper";
import EverydayConversations from "./pages/EverydayConversations";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Lessons from "./pages/Lessons";
import LessonDetail from "./pages/LessonDetail";
import Admin from "./pages/Admin";
import StudentLessons from "./pages/StudentLessons";
import EmailManagement from "./pages/EmailManagement";
import MembersActivities from "./pages/MembersActivities";
import InsuranceVocabulary from "./pages/InsuranceVocabulary";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/business-english" element={<BusinessEnglish />} />
            <Route path="/business-travel" element={<BusinessTravel />} />
            <Route path="/conversational-english" element={<ConversationalEnglish />} />
            <Route path="/exam-preparation" element={<ExamPreparation />} />
            <Route path="/booking" element={<BookingWrapper />} />
            <Route path="/everyday-conversations" element={<EverydayConversations />} />
            
            {/* Protected Routes */}
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/dashboard/lessons" element={<ProtectedRoute><Lessons /></ProtectedRoute>} />
            <Route path="/dashboard/lessons/:id" element={<ProtectedRoute><LessonDetail /></ProtectedRoute>} />
            <Route path="/admin" element={<ProtectedRoute adminOnly><Admin /></ProtectedRoute>} />
            <Route path="/admin/students/:studentId" element={<ProtectedRoute adminOnly><StudentLessons /></ProtectedRoute>} />
            <Route path="/email-management" element={<ProtectedRoute adminOnly><EmailManagement /></ProtectedRoute>} />
            <Route path="/members/activities" element={<ProtectedRoute><MembersActivities /></ProtectedRoute>} />
            <Route path="/business-vocab-app" element={<ProtectedRoute><BusinessVocabAppWrapper /></ProtectedRoute>} />
            <Route path="/cae-exam-practice" element={<ProtectedRoute><CaeExamPracticeWrapper /></ProtectedRoute>} />
            <Route path="/fce-vocab-practice" element={<ProtectedRoute><FceVocabPracticeWrapper /></ProtectedRoute>} />
            <Route path="/insurance-vocabulary" element={<ProtectedRoute><InsuranceVocabulary /></ProtectedRoute>} />
            <Route path="/tense-master" element={<ProtectedRoute><TenseMasterWrapper /></ProtectedRoute>} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
