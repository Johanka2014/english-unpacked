import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BusinessEnglish from "./pages/BusinessEnglish";
import BusinessTravel from "./pages/BusinessTravel";
import ConversationalEnglish from "./pages/Conversation";
import ExamPreparation from "./pages/ExamPreparation";
import BookingWrapper from "./pages/BookingWrapper";
import BusinessVocabAppWrapper from "./pages/BusinessVocabAppWrapper";
import CaeExamPracticeWrapper from "./pages/CaeExamPracticeWrapper";
import FceVocabPracticeWrapper from "./pages/FceVocabPracticeWrapper";
import EverydayConversations from "./pages/EverydayConversations";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/business-english" element={<BusinessEnglish />} />
          <Route path="/business-travel" element={<BusinessTravel />} />
          <Route path="/conversational-english" element={<ConversationalEnglish />} />
          <Route path="/exam-preparation" element={<ExamPreparation />} />
          <Route path="/booking" element={<BookingWrapper />} />
          <Route path="/business-vocabulary-app" element={<BusinessVocabAppWrapper />} />
          <Route path="/exam-practice" element={<CaeExamPracticeWrapper />} />
          <Route path="/fce-vocab-practice" element={<FceVocabPracticeWrapper />} />
          <Route path="/everyday-conversations" element={<EverydayConversations />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
