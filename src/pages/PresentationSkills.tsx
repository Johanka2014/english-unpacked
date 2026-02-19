import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import heroBackground from "@/assets/hero-background.webp";
import FillInBlanks from "@/components/presentations/FillInBlanks";
import DragDropCategorize from "@/components/presentations/DragDropCategorize";
import MatchingExercise from "@/components/presentations/MatchingExercise";
import OrderingExercise from "@/components/presentations/OrderingExercise";
import DragFillGaps from "@/components/presentations/DragFillGaps";
import MultipleChoiceQuiz from "@/components/presentations/MultipleChoiceQuiz";
import WordOrderExercise from "@/components/presentations/WordOrderExercise";
import ThreeColumnMatching from "@/components/presentations/ThreeColumnMatching";
import ListeningCompletion from "@/components/presentations/ListeningCompletion";
import InfoSection from "@/components/presentations/InfoSection";
import {
  fillInBlanksData,
  categorizationData,
  matchingData,
  orderingData,
  sentenceCompletionData,
  structuringActivityData,
  prepositionsActivityData,
  listeningOrderingData,
  pointOrderingData,
  replacingPhrasesData,
  matchingSentencesData,
  listeningCompletionData,
  attentionGrabbingOpeningsData,
  attentionGrabbersData,
  wordOrderData,
  audioFiles,
  imageFiles,
  nervousnessContent,
  checklistItems,
  organizationInfo,
  structuringInfo1,
  structuringInfo2,
} from "@/data/presentationActivitiesData";
import { CheckCircle } from "lucide-react";

const PresentationSkills = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "English for Presentations",
    description:
      "Master the language of business presentations: welcoming audiences, structuring talks, attention-grabbing openings, and dealing with nervousness.",
    provider: {
      "@type": "EducationalOrganization",
      name: "English Unpacked",
      url: "https://english-unpacked.lovable.app",
    },
    courseMode: "online",
    educationalLevel: "Intermediate to Advanced",
    teaches: "Presentation skills, welcoming audiences, structuring talks, attention-grabbing openings",
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="English for Presentations - Master Business Presentation Skills"
        description="Interactive exercises for mastering business presentations in English. Learn to welcome audiences, structure talks, create attention-grabbing openings, and deal with nervousness."
        canonical="https://english-unpacked.lovable.app/presentations"
        schema={schema}
      />
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative py-20 text-white overflow-hidden pt-32"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("${heroBackground}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/20 to-brand-royal/20"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-merriweather">
              English for Presentations
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 leading-relaxed">Unit 1</p>
            <p className="text-lg text-white/80 leading-relaxed">
              Practice the key language for opening a presentation with these interactive exercises.
            </p>
          </div>
        </div>
      </section>

      {/* Activities */}
      <main className="container mx-auto px-4 py-12 space-y-12">
        {/* Starter */}
        <InfoSection title="Starter">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/3">
              <img
                src={imageFiles.starter}
                alt="Business people in various presentation scenarios"
                className="rounded-lg shadow-md w-full"
                loading="lazy"
              />
            </div>
            <div className="w-full md:w-2/3">
              <p className="mb-4 text-muted-foreground">
                Work with a partner. Ask the questions below and make a note of the answers. Then tell the group what you
                found out and discuss.
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>How often do you give presentations in your job?</li>
                <li>Who do you normally present to? (Colleagues, customers, other firms, etc.)</li>
                <li>
                  When was the last time you gave a presentation in English? Was it a success? If yes, why? If not, why
                  not? Explain your answer.
                </li>
                <li>How do you feel about presenting in a foreign language?</li>
                <li>
                  Think of an excellent (or terrible) presentation that you have attended. What made it good (or bad)?
                </li>
              </ul>
            </div>
          </div>
        </InfoSection>

        {/* Activity 1: Fill in the Blanks */}
        <FillInBlanks
          data={fillInBlanksData}
          audioSources={[audioFiles.presentation1, audioFiles.presentation2, audioFiles.presentation3]}
          audioLabels={["Presentation 1", "Presentation 2", "Presentation 3"]}
        />

        {/* Activity 2: Drag and Drop Categorization */}
        <DragDropCategorize
          title="Categorizing Phrases"
          description="Drag and drop the phrases into the correct category."
          phrases={categorizationData.phrases}
          categories={categorizationData.categories}
          imageUrl={imageFiles.categorizing}
          imageAlt="A woman standing at a lectern with a laptop"
        />

        {/* Activity 3: Formal vs Informal Matching */}
        <MatchingExercise
          title="Formal vs. Informal"
          description="Match the more formal phrases with their less formal equivalents. Click a phrase in the first column, then its match in the second."
          pairs={matchingData.map((m) => ({ id: m.id, left: m.formal, right: m.informal }))}
          leftLabel="More Formal"
          rightLabel="Less Formal"
        />

        {/* Activity 4: Ordering an Introduction */}
        <OrderingExercise
          title="Ordering an Introduction"
          description="The opening of a presentation is mixed up. Drag and drop the sentences into the correct order."
          items={orderingData.map((item) => ({ id: String(item.id), text: item.text, order: item.order }))}
          tip="Welcome audience → Introduce yourself → Say what the topic is → Explain why the audience will be interested"
        />

        {/* Structuring Info 1 */}
        <InfoSection title="Structuring a Presentation (1)">
          <p className="mb-4 text-muted-foreground">{structuringInfo1.intro}</p>
          <ul className="list-none space-y-2 mb-6">
            {structuringInfo1.formula.map((f) => (
              <li key={f.num}>
                <strong>{f.num}</strong> {f.instruction} = <strong>{f.label}</strong>
              </li>
            ))}
          </ul>
          <p className="mb-4 text-muted-foreground">
            There are several ways you can tell the audience what you are going to say.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {structuringInfo1.patterns.map((p) => (
              <div key={p.title}>
                <h4 className="font-bold text-foreground">{p.title}</h4>
                {p.examples.map((ex, i) => (
                  <p key={i} className="italic text-muted-foreground">
                    {ex}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </InfoSection>

        {/* Sentence Completion */}
        <MatchingExercise
          title="Sentence Completion"
          description="Complete sentences 1-8 with the correct form of the verb and a sentence ending from below. Click a sentence start, then its matching end."
          pairs={sentenceCompletionData.map((s) => ({ id: s.id, left: s.start, right: s.end }))}
          leftLabel="Sentence Start"
          rightLabel="Sentence End"
        />

        {/* Structuring Info 2 */}
        <InfoSection title="Structuring a Presentation (2)">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-1/2">
              <p className="mb-4 text-muted-foreground">{structuringInfo2.intro}</p>
              <ul className="list-none space-y-2 italic text-muted-foreground">
                {structuringInfo2.phrases.map((phrase, i) => (
                  <li key={i}>
                    <strong>{phrase.split("...")[0]}</strong>
                    {phrase.includes("...") ? "..." : ""}
                  </li>
                ))}
              </ul>
              <div className="bg-blue-50 border border-brand-royal/20 p-4 rounded-lg mt-6">
                <p className="text-foreground">{structuringInfo2.tip}</p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src={imageFiles.structuring2}
                alt="A person giving a presentation to an audience"
                className="rounded-lg shadow-md w-full"
                loading="lazy"
              />
            </div>
          </div>
        </InfoSection>

        {/* Structuring Activity 3 */}
        <DragFillGaps
          title="Structuring a Presentation (3)"
          description="Complete the sentences with the words from the box. Drag and drop the words into the correct gaps."
          words={structuringActivityData.words}
          sentences={structuringActivityData.sentences}
        />

        {/* Prepositions Practice */}
        <DragFillGaps
          title="Prepositions Practice"
          description="Complete the sentences with the prepositions in the box. Drag and drop the words into the correct gaps."
          words={prepositionsActivityData.words}
          sentences={prepositionsActivityData.sentences}
        />

        {/* Listening and Ordering */}
        <OrderingExercise
          title="Listening and Ordering"
          description="The project manager of a construction company is giving a presentation to his colleagues. Put the sentences in the right order. Then listen and check."
          items={listeningOrderingData.map((item) => ({ id: item.id, text: item.text, order: item.order }))}
          audioSrc={audioFiles.listeningOrdering}
        />

        {/* Point Ordering */}
        <OrderingExercise
          title="Point Ordering"
          description="Now put these points in the order in which Gordon mentions them."
          items={pointOrderingData.map((item) => ({ id: item.id, text: item.text, order: item.order }))}
        />

        {/* Replacing Phrases */}
        <DragFillGaps
          title="Replacing Phrases"
          description="Look again at these sentences from the presentation and replace the highlighted words with words or phrases from the box."
          words={replacingPhrasesData.words}
          sentences={replacingPhrasesData.sentences.map((s) => ({
            id: s.id,
            parts: [
              s.fullText.replace("{highlight}", `«${s.highlighted}» → `),
              { answer: s.answer },
            ],
          }))}
        />

        {/* Organization Info */}
        <InfoSection title="Organization">
          <p className="mb-6 text-muted-foreground">
            The final part of the introduction deals with the organization of the talk: how long it will last, whether
            there will be handouts, and how questions will be handled.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-bold text-lg text-foreground">Timing</h4>
              <ul className="list-disc list-inside mt-2 text-muted-foreground">
                {organizationInfo.timing.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg text-foreground">Handouts</h4>
              <ul className="list-disc list-inside mt-2 text-muted-foreground">
                {organizationInfo.handouts.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg text-foreground">Questions</h4>
              <ul className="list-disc list-inside mt-2 text-muted-foreground">
                {organizationInfo.questions.map((q, i) => (
                  <li key={i}>{q}</li>
                ))}
              </ul>
            </div>
          </div>
        </InfoSection>

        {/* Matching Sentences */}
        <MatchingExercise
          title="Matching Sentences"
          description="Match the two parts to make typical sentences from the introduction."
          pairs={matchingSentencesData.map((s) => ({ id: s.id, left: s.start, right: s.end }))}
          leftLabel="Sentence Start"
          rightLabel="Sentence End"
        />

        {/* Listening Completion */}
        <ListeningCompletion
          title="Listening Completion"
          description="Listen again and complete the sentences."
          sentences={listeningCompletionData}
          audioSources={audioFiles.listeningCompletion}
        />

        {/* Attention-Grabbing Openings */}
        <ThreeColumnMatching
          title="Attention-Grabbing Openings"
          description="Match items from the three columns to make attention-grabbing openings."
          items={attentionGrabbingOpeningsData}
        />

        {/* Attention Grabbers Quiz */}
        <MultipleChoiceQuiz
          title="Getting Attention"
          description="Read the opening lines and identify the technique used to grab the audience's attention."
          questions={attentionGrabbersData}
        />

        {/* Word Order Practice */}
        <WordOrderExercise
          title="Word Order Practice"
          description="Put the words in the right order to make sentences with expressions from this unit."
          items={wordOrderData}
        />

        {/* Checklist */}
        <InfoSection title="Checklist for Introductions">
          <ul className="list-none space-y-2">
            {checklistItems.map((item, i) => (
              <li key={i} className="flex items-center">
                <CheckCircle className="w-6 h-6 text-green-600 mr-2 flex-shrink-0" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </InfoSection>

        {/* Dealing with Nervousness */}
        <InfoSection title="Dealing with Nervousness">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-2/3">
              <p className="mb-4 text-muted-foreground">{nervousnessContent.intro}</p>
              <p className="mb-4 text-muted-foreground">{nervousnessContent.subIntro}</p>
              <ol className="list-decimal list-inside space-y-4 text-muted-foreground">
                {nervousnessContent.tips.map((tip, i) => (
                  <li key={i}>
                    <strong>{tip.title}</strong> {tip.body}
                  </li>
                ))}
              </ol>
              <p className="mt-4 text-muted-foreground">{nervousnessContent.closing}</p>
            </div>
            <div className="w-full md:w-1/3">
              <img
                src={imageFiles.structuring2}
                alt="A person giving a presentation to an audience"
                className="rounded-lg shadow-md w-full"
                loading="lazy"
              />
            </div>
          </div>
          <div className="mt-6 border-t border-border pt-4">
            <h4 className="font-bold text-lg text-foreground">Over to You</h4>
            <ul className="list-disc list-inside mt-2 space-y-2 text-muted-foreground">
              {nervousnessContent.discussionQuestions.map((q, i) => (
                <li key={i}>{q}</li>
              ))}
            </ul>
          </div>
        </InfoSection>
      </main>

      <Footer />
    </div>
  );
};

export default PresentationSkills;
