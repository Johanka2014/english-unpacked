import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mic, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { pronunciationSections } from "@/data/pronunciationData";

const colorMap: Record<string, string> = {
  indigo: "bg-indigo-100 text-indigo-700 border-indigo-200",
  violet: "bg-violet-100 text-violet-700 border-violet-200",
  teal: "bg-teal-100 text-teal-700 border-teal-200",
  amber: "bg-amber-100 text-amber-700 border-amber-200",
  rose: "bg-rose-100 text-rose-700 border-rose-200",
  emerald: "bg-emerald-100 text-emerald-700 border-emerald-200",
  sky: "bg-sky-100 text-sky-700 border-sky-200",
  fuchsia: "bg-fuchsia-100 text-fuchsia-700 border-fuchsia-200",
};

const PronunciationCourse = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Pronunciation Practice Course | English Unpacked"
        description="Master English pronunciation across 8 sections — sounds, connected speech, word stress, intonation and more — with interactive activities and quizzes."
      />
      <Navigation />
      <main className="container mx-auto px-4 py-16 max-w-6xl">
        <Button asChild variant="ghost" className="mb-6">
          <Link to="/members/activities?tab=pronunciation">
            <ArrowLeft className="h-4 w-4 mr-1" /> Back to Practice
          </Link>
        </Button>

        <div className="mb-10 text-center">
          <Badge className="mb-3">Pronunciation</Badge>
          <h1 className="text-4xl font-bold mb-3" style={{ fontFamily: "Merriweather, serif" }}>
            Pronunciation Practice Course
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            8 sections of theory, interactive activities and end-of-section quizzes —
            from individual sounds to the music of intonation.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pronunciationSections.map((s) => (
            <Link key={s.id} to={`/pronunciation/${s.id}`}>
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className={`p-2 rounded-lg border ${colorMap[s.color] || "bg-muted"}`}>
                      <Mic className="h-5 w-5" />
                    </div>
                    <Badge variant="secondary">Section {s.number}</Badge>
                  </div>
                  <CardTitle className="text-xl">{s.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-3">{s.subtitle}</CardDescription>
                  <div className="flex gap-2 text-xs text-muted-foreground">
                    <span>{s.units.length} units</span>
                    <span>•</span>
                    <span>{s.activities.length} activities</span>
                    <span>•</span>
                    <span>{s.quiz.length}-question quiz</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PronunciationCourse;
