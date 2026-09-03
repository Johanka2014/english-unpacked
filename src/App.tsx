import { Suspense } from "react";
import { lazyWithRetry } from "@/lib/lazyWithRetry";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import ProtectedRoute from "@/components/ProtectedRoute";
import Index from "./pages/Index";

// Lazy-loaded pages for code/CSS splitting
const BusinessEnglish = lazyWithRetry(() => import("./pages/BusinessEnglish"));
const BusinessTravel = lazyWithRetry(() => import("./pages/BusinessTravel"));
const ConversationalEnglish = lazyWithRetry(() => import("./pages/Conversation"));
const ExamPreparation = lazyWithRetry(() => import("./pages/ExamPreparation"));
const BookingWrapper = lazyWithRetry(() => import("./pages/BookingWrapper"));

const BizPhrasalAppWrapper = lazyWithRetry(() => import("./pages/BizPhrasalAppWrapper"));
const BizVocabAppWrapper = lazyWithRetry(() => import("./pages/BizVocabAppWrapper"));
const CaeExamPracticeWrapper = lazyWithRetry(() => import("./pages/CaeExamPracticeWrapper"));
const FceVocabPracticeWrapper = lazyWithRetry(() => import("./pages/FceVocabPracticeWrapper"));
const TenseMasterWrapper = lazyWithRetry(() => import("./pages/TenseMasterWrapper"));
const VerbPatternPractice = lazyWithRetry(() => import("./pages/VerbPatternPractice"));
const PrepositionsOfTimePractice = lazyWithRetry(() => import("./pages/PrepositionsOfTimePractice"));
const Prepositions = lazyWithRetry(() => import("./pages/Prepositions"));
const VerbAdjectivePrepositions = lazyWithRetry(() => import("./pages/VerbAdjectivePrepositions"));
const PrepositionsOfPlace = lazyWithRetry(() => import("./pages/PrepositionsOfPlace"));
const EverydayConversations = lazyWithRetry(() => import("./pages/EverydayConversations"));
const Auth = lazyWithRetry(() => import("./pages/Auth"));
const Dashboard = lazyWithRetry(() => import("./pages/Dashboard"));
const Lessons = lazyWithRetry(() => import("./pages/Lessons"));
const LessonDetail = lazyWithRetry(() => import("./pages/LessonDetail"));
const Admin = lazyWithRetry(() => import("./pages/Admin"));
const StudentLessons = lazyWithRetry(() => import("./pages/StudentLessons"));
const EmailManagement = lazyWithRetry(() => import("./pages/EmailManagement"));
const MembersActivities = lazyWithRetry(() => import("./pages/MembersActivities"));
const InsuranceVocabulary = lazyWithRetry(() => import("./pages/InsuranceVocabulary"));
const MaturitaSpeaking = lazyWithRetry(() => import("./pages/MaturitaSpeaking"));
const MaturitaSpeakingTopic = lazyWithRetry(() => import("./pages/MaturitaSpeakingTopic"));
const PresentationSkills = lazyWithRetry(() => import("./pages/PresentationSkills"));
const EnglishForKids = lazyWithRetry(() => import("./pages/EnglishForKids"));
const BusinessVocabulary = lazyWithRetry(() => import("./pages/BusinessVocabulary"));
const BusinessVocabularySection = lazyWithRetry(() => import("./pages/BusinessVocabularySection"));
const BusinessVocabularyTopic = lazyWithRetry(() => import("./pages/BusinessVocabularyTopic"));
const BusinessBenchmark = lazyWithRetry(() => import("./pages/BusinessBenchmark"));
const BusinessBenchmarkModule = lazyWithRetry(() => import("./pages/BusinessBenchmarkModule"));
const BusinessBenchmarkSkill = lazyWithRetry(() => import("./pages/BusinessBenchmarkSkill"));
const BBUpperIntermediate = lazyWithRetry(() => import("./pages/BBUpperIntermediate"));
const BBUpperModule = lazyWithRetry(() => import("./pages/BBUpperModule"));
const BBUpperSkill = lazyWithRetry(() => import("./pages/BBUpperSkill"));
const B1Grammar = lazyWithRetry(() => import("./pages/B1Grammar"));
const B1GrammarSection = lazyWithRetry(() => import("./pages/B1GrammarSection"));
const B1GrammarTopic = lazyWithRetry(() => import("./pages/B1GrammarTopic"));
const StartersPractice = lazyWithRetry(() => import("./pages/StartersPractice"));
const StartersTest = lazyWithRetry(() => import("./pages/StartersTest"));
const HREnglish = lazyWithRetry(() => import("./pages/HREnglish"));
const HREnglishUnit = lazyWithRetry(() => import("./pages/HREnglishUnit"));
const HREnglishSkill = lazyWithRetry(() => import("./pages/HREnglishSkill"));
const EngineeringEnglish = lazyWithRetry(() => import("./pages/EngineeringEnglish"));
const EngineeringEnglishUnit = lazyWithRetry(() => import("./pages/EngineeringEnglishUnit"));
const EngineeringEnglishSection = lazyWithRetry(() => import("./pages/EngineeringEnglishSection"));
const TechTalk = lazyWithRetry(() => import("./pages/TechTalk"));
const TechTalkUnit = lazyWithRetry(() => import("./pages/TechTalkUnit"));
const TechTalkSection = lazyWithRetry(() => import("./pages/TechTalkSection"));
const TechnicalEnglish = lazyWithRetry(() => import("./pages/TechnicalEnglish"));
const TechnicalEnglishTopic = lazyWithRetry(() => import("./pages/TechnicalEnglishTopic"));
const PronunciationCourse = lazyWithRetry(() => import("./pages/PronunciationCourse"));
const PronunciationSection = lazyWithRetry(() => import("./pages/PronunciationSection"));
const ConnectedSpeech = lazyWithRetry(() => import("./pages/ConnectedSpeech"));
const ConnectedSpeechLesson = lazyWithRetry(() => import("./pages/ConnectedSpeechLesson"));
const PriceOfPassion = lazyWithRetry(() => import("./pages/PriceOfPassion"));
const TopicsSport = lazyWithRetry(() => import("./pages/TopicsSport"));
const SleepLesson = lazyWithRetry(() => import("./pages/SleepLesson"));
const MusicFestivals = lazyWithRetry(() => import("./pages/MusicFestivals"));
const Weddings = lazyWithRetry(() => import("./pages/Weddings"));
const InsuranceLesson = lazyWithRetry(() => import("./pages/InsuranceLesson"));
const DollyParton = lazyWithRetry(() => import("./pages/DollyParton"));
const Recycling = lazyWithRetry(() => import("./pages/Recycling"));
const WordScramble = lazyWithRetry(() => import("./pages/WordScramble"));
const PETWordQuest = lazyWithRetry(() => import("./pages/PETWordQuest"));
const FCEWordQuest = lazyWithRetry(() => import("./pages/FCEWordQuest"));
const CAEWordQuest = lazyWithRetry(() => import("./pages/CAEWordQuest"));
const EnglishFileIntermediate = lazyWithRetry(() => import("./pages/EnglishFileIntermediate"));
const EnglishFileUnit = lazyWithRetry(() => import("./pages/EnglishFileUnit"));
const EnglishFileLesson = lazyWithRetry(() => import("./pages/EnglishFileLesson"));
const NotFound = lazyWithRetry(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div></div>}>
            <div className="pt-[73px]">
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
              <Route path="/bizphrasal" element={<ProtectedRoute><BizPhrasalAppWrapper /></ProtectedRoute>} />
              <Route path="/business-vocab-app" element={<ProtectedRoute><BizVocabAppWrapper /></ProtectedRoute>} />
              <Route path="/cae-exam-practice" element={<ProtectedRoute><CaeExamPracticeWrapper /></ProtectedRoute>} />
              <Route path="/fce-vocab-practice" element={<ProtectedRoute><FceVocabPracticeWrapper /></ProtectedRoute>} />
              <Route path="/insurance-vocabulary" element={<ProtectedRoute><InsuranceVocabulary /></ProtectedRoute>} />
              <Route path="/tense-master" element={<ProtectedRoute><TenseMasterWrapper /></ProtectedRoute>} />
              <Route path="/verb-pattern-practice" element={<ProtectedRoute><VerbPatternPractice /></ProtectedRoute>} />
              <Route path="/prepositions-of-time" element={<ProtectedRoute><PrepositionsOfTimePractice /></ProtectedRoute>} />
              <Route path="/prepositions" element={<ProtectedRoute><Prepositions /></ProtectedRoute>} />
              <Route path="/verb-adjective-prepositions" element={<ProtectedRoute><VerbAdjectivePrepositions /></ProtectedRoute>} />
              <Route path="/prepositions-of-place" element={<ProtectedRoute><PrepositionsOfPlace /></ProtectedRoute>} />
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
              <Route path="/price-of-passion" element={<ProtectedRoute><PriceOfPassion /></ProtectedRoute>} />
              <Route path="/topics/sport" element={<ProtectedRoute><TopicsSport /></ProtectedRoute>} />
              <Route path="/topics/sleep" element={<ProtectedRoute><SleepLesson /></ProtectedRoute>} />
              <Route path="/topics/music-festivals" element={<ProtectedRoute><MusicFestivals /></ProtectedRoute>} />
              <Route path="/topics/weddings" element={<ProtectedRoute><Weddings /></ProtectedRoute>} />
              <Route path="/topics/insurance" element={<ProtectedRoute><InsuranceLesson /></ProtectedRoute>} />
              <Route path="/topics/dolly-parton" element={<ProtectedRoute><DollyParton /></ProtectedRoute>} />
              <Route path="/topics/recycling" element={<ProtectedRoute><Recycling /></ProtectedRoute>} />
              <Route path="/word-scramble" element={<ProtectedRoute><WordScramble /></ProtectedRoute>} />
              <Route path="/pet-word-quest" element={<ProtectedRoute><PETWordQuest /></ProtectedRoute>} />
              <Route path="/fce-word-quest" element={<ProtectedRoute><FCEWordQuest /></ProtectedRoute>} />
              <Route path="/cae-word-quest" element={<ProtectedRoute><CAEWordQuest /></ProtectedRoute>} />
              <Route path="/grammar" element={<ProtectedRoute><MurphyGrammar /></ProtectedRoute>} />
              <Route path="/grammar/:sectionId" element={<ProtectedRoute><MurphyGrammarSection /></ProtectedRoute>} />
              <Route path="/grammar/:sectionId/:unitId" element={<ProtectedRoute><MurphyGrammarUnit /></ProtectedRoute>} />
              <Route path="/b1-grammar" element={<Navigate to="/grammar" replace />} />
              <Route path="/b1-grammar/*" element={<Navigate to="/grammar" replace />} />
              <Route path="/starters-practice" element={<ProtectedRoute><StartersPractice /></ProtectedRoute>} />
              <Route path="/starters-practice/:testId" element={<ProtectedRoute><StartersTest /></ProtectedRoute>} />
              <Route path="/hr-english" element={<ProtectedRoute><HREnglish /></ProtectedRoute>} />
              <Route path="/hr-english/:unitId" element={<ProtectedRoute><HREnglishUnit /></ProtectedRoute>} />
              <Route path="/hr-english/:unitId/:skillId" element={<ProtectedRoute><HREnglishSkill /></ProtectedRoute>} />
              <Route path="/engineering-english" element={<ProtectedRoute><EngineeringEnglish /></ProtectedRoute>} />
              <Route path="/engineering-english/:unitId" element={<ProtectedRoute><EngineeringEnglishUnit /></ProtectedRoute>} />
              <Route path="/engineering-english/:unitId/:sectionId" element={<ProtectedRoute><EngineeringEnglishSection /></ProtectedRoute>} />
              <Route path="/tech-talk" element={<ProtectedRoute><TechTalk /></ProtectedRoute>} />
              <Route path="/tech-talk/:unitId" element={<ProtectedRoute><TechTalkUnit /></ProtectedRoute>} />
              <Route path="/tech-talk/:unitId/:sectionId" element={<ProtectedRoute><TechTalkSection /></ProtectedRoute>} />
              <Route path="/technical-english" element={<ProtectedRoute><TechnicalEnglish /></ProtectedRoute>} />
              <Route path="/technical-english/:topicId" element={<ProtectedRoute><TechnicalEnglishTopic /></ProtectedRoute>} />
              <Route path="/english-file-intermediate" element={<ProtectedRoute><EnglishFileIntermediate /></ProtectedRoute>} />
              <Route path="/english-file-intermediate/:fileId" element={<ProtectedRoute><EnglishFileUnit /></ProtectedRoute>} />
              <Route path="/english-file-intermediate/:fileId/:lessonId" element={<ProtectedRoute><EnglishFileLesson /></ProtectedRoute>} />

              <Route path="/pronunciation" element={<ProtectedRoute><PronunciationCourse /></ProtectedRoute>} />
              <Route path="/pronunciation/:sectionId" element={<ProtectedRoute><PronunciationSection /></ProtectedRoute>} />
              <Route path="/connected-speech" element={<ProtectedRoute><ConnectedSpeech /></ProtectedRoute>} />
              <Route path="/connected-speech/:lessonId" element={<ProtectedRoute><ConnectedSpeechLesson /></ProtectedRoute>} />
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            </div>
          </Suspense>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
