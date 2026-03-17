import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import ProtectedRoute from "@/components/ProtectedRoute";
import Index from "./pages/Index";

// Lazy-loaded pages for code/CSS splitting
const BusinessEnglish = lazy(() => import("./pages/BusinessEnglish"));
const BusinessTravel = lazy(() => import("./pages/BusinessTravel"));
const ConversationalEnglish = lazy(() => import("./pages/Conversation"));
const ExamPreparation = lazy(() => import("./pages/ExamPreparation"));
const BookingWrapper = lazy(() => import("./pages/BookingWrapper"));
const BusinessVocabAppWrapper = lazy(() => import("./pages/BusinessVocabAppWrapper"));
const CaeExamPracticeWrapper = lazy(() => import("./pages/CaeExamPracticeWrapper"));
const FceVocabPracticeWrapper = lazy(() => import("./pages/FceVocabPracticeWrapper"));
const TenseMasterWrapper = lazy(() => import("./pages/TenseMasterWrapper"));
const VerbPatternPractice = lazy(() => import("./pages/VerbPatternPractice"));
const PrepositionsOfTimePractice = lazy(() => import("./pages/PrepositionsOfTimePractice"));
const Prepositions = lazy(() => import("./pages/Prepositions"));
const VerbAdjectivePrepositions = lazy(() => import("./pages/VerbAdjectivePrepositions"));
const EverydayConversations = lazy(() => import("./pages/EverydayConversations"));
const Auth = lazy(() => import("./pages/Auth"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Lessons = lazy(() => import("./pages/Lessons"));
const LessonDetail = lazy(() => import("./pages/LessonDetail"));
const Admin = lazy(() => import("./pages/Admin"));
const StudentLessons = lazy(() => import("./pages/StudentLessons"));
const EmailManagement = lazy(() => import("./pages/EmailManagement"));
const MembersActivities = lazy(() => import("./pages/MembersActivities"));
const InsuranceVocabulary = lazy(() => import("./pages/InsuranceVocabulary"));
const MaturitaSpeaking = lazy(() => import("./pages/MaturitaSpeaking"));
const MaturitaSpeakingTopic = lazy(() => import("./pages/MaturitaSpeakingTopic"));
const PresentationSkills = lazy(() => import("./pages/PresentationSkills"));
const EnglishForKids = lazy(() => import("./pages/EnglishForKids"));
const BusinessVocabulary = lazy(() => import("./pages/BusinessVocabulary"));
const BusinessVocabularySection = lazy(() => import("./pages/BusinessVocabularySection"));
const BusinessVocabularyTopic = lazy(() => import("./pages/BusinessVocabularyTopic"));
const BusinessBenchmark = lazy(() => import("./pages/BusinessBenchmark"));
const BusinessBenchmarkModule = lazy(() => import("./pages/BusinessBenchmarkModule"));
const BusinessBenchmarkSkill = lazy(() => import("./pages/BusinessBenchmarkSkill"));
const BBUpperIntermediate = lazy(() => import("./pages/BBUpperIntermediate"));
const BBUpperModule = lazy(() => import("./pages/BBUpperModule"));
const BBUpperSkill = lazy(() => import("./pages/BBUpperSkill"));
const B1Grammar = lazy(() => import("./pages/B1Grammar"));
const B1GrammarSection = lazy(() => import("./pages/B1GrammarSection"));
const B1GrammarTopic = lazy(() => import("./pages/B1GrammarTopic"));
const StartersPractice = lazy(() => import("./pages/StartersPractice"));
const StartersTest = lazy(() => import("./pages/StartersTest"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div></div>}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/business-english" element={<BusinessEnglish />} />
              <Route path="/business-travel" element={<BusinessTravel />} />
              <Route path="/conversational-english" element={<ConversationalEnglish />} />
              <Route path="/exam-preparation" element={<ExamPreparation />} />
              <Route path="/booking" element={<BookingWrapper />} />
              <Route path="/everyday-conversations" element={<EverydayConversations />} />
              <Route path="/maturita-speaking" element={<MaturitaSpeaking />} />
              <Route path="/maturita-speaking/:topicId" element={<MaturitaSpeakingTopic />} />
              <Route path="/english-for-kids" element={<EnglishForKids />} />
              
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
              <Route path="/verb-pattern-practice" element={<ProtectedRoute><VerbPatternPractice /></ProtectedRoute>} />
              <Route path="/prepositions-of-time" element={<ProtectedRoute><PrepositionsOfTimePractice /></ProtectedRoute>} />
              <Route path="/prepositions" element={<ProtectedRoute><Prepositions /></ProtectedRoute>} />
              <Route path="/verb-adjective-prepositions" element={<ProtectedRoute><VerbAdjectivePrepositions /></ProtectedRoute>} />
              <Route path="/presentations" element={<ProtectedRoute><PresentationSkills /></ProtectedRoute>} />
              <Route path="/business-vocabulary" element={<ProtectedRoute><BusinessVocabulary /></ProtectedRoute>} />
              <Route path="/business-vocabulary/:sectionId" element={<ProtectedRoute><BusinessVocabularySection /></ProtectedRoute>} />
              <Route path="/business-vocabulary/:sectionId/:topicId" element={<ProtectedRoute><BusinessVocabularyTopic /></ProtectedRoute>} />
              <Route path="/business-benchmark" element={<ProtectedRoute><BusinessBenchmark /></ProtectedRoute>} />
              <Route path="/business-benchmark/:moduleId" element={<ProtectedRoute><BusinessBenchmarkModule /></ProtectedRoute>} />
              <Route path="/business-benchmark/:moduleId/:skillId" element={<ProtectedRoute><BusinessBenchmarkSkill /></ProtectedRoute>} />
              <Route path="/bb-upper" element={<ProtectedRoute><BBUpperIntermediate /></ProtectedRoute>} />
              <Route path="/bb-upper/:moduleId" element={<ProtectedRoute><BBUpperModule /></ProtectedRoute>} />
              <Route path="/bb-upper/:moduleId/:skillId" element={<ProtectedRoute><BBUpperSkill /></ProtectedRoute>} />
              <Route path="/b1-grammar" element={<ProtectedRoute><B1Grammar /></ProtectedRoute>} />
              <Route path="/b1-grammar/:sectionId" element={<ProtectedRoute><B1GrammarSection /></ProtectedRoute>} />
              <Route path="/b1-grammar/:sectionId/:moduleId" element={<ProtectedRoute><B1GrammarTopic /></ProtectedRoute>} />
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
