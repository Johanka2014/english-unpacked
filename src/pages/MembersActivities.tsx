import { Link, useSearchParams } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, GraduationCap, Languages, Shield, Clock, PenLine } from 'lucide-react';

const vocabularyActivities = [
  {
    title: 'Business Vocabulary Practice',
    description: 'Master essential business English vocabulary with interactive exercises',
    icon: BookOpen,
    path: '/business-vocab-app',
    color: 'text-blue-600',
  },
  {
    title: 'Insurance Vocabulary',
    description: 'Master essential insurance terminology for business and travel',
    icon: Shield,
    path: '/insurance-vocabulary',
    color: 'text-orange-600',
  },
];

const cambridgeActivities = [
  {
    title: 'CAE Exam Practice',
    description: 'Prepare for Cambridge Advanced English with targeted practice',
    icon: GraduationCap,
    path: '/cae-exam-practice',
    color: 'text-purple-600',
  },
  {
    title: 'FCE Vocabulary Practice',
    description: 'Build your FCE vocabulary with comprehensive exercises',
    icon: Languages,
    path: '/fce-vocab-practice',
    color: 'text-green-600',
  },
];

const grammarActivities = [
  {
    title: 'TenseMaster Grammar Course',
    description: 'Master English tenses with interactive quizzes covering Present, Past, and Perfect forms',
    icon: Clock,
    path: '/tense-master',
    color: 'text-indigo-600',
  },
  {
    title: 'Verb Pattern Practice',
    description: 'Master verb patterns: -ing forms, infinitives, preferences and more (Units 53-68)',
    icon: PenLine,
    path: '/verb-pattern-practice',
    color: 'text-emerald-600',
  },
];

const maturitaActivities = [
  {
    title: 'Maturita Speaking Practice',
    description: 'Master all 28 maturita speaking topics with structured learning, sample sentences, and official exam practice',
    icon: GraduationCap,
    path: '/maturita-speaking',
    color: 'text-red-600',
  },
];

const ActivityGrid = ({ activities }: { activities: typeof vocabularyActivities }) => (
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
    {activities.map((activity) => {
      const Icon = activity.icon;
      return (
        <Link key={activity.path} to={activity.path}>
          <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className={`p-2 rounded-lg bg-muted ${activity.color}`}>
                  <Icon className="h-6 w-6" />
                </div>
              </div>
              <CardTitle className="text-xl">{activity.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                {activity.description}
              </CardDescription>
            </CardContent>
          </Card>
        </Link>
      );
    })}
  </div>
);

const MembersActivities = () => {
  const [searchParams] = useSearchParams();
  const defaultTab = searchParams.get('tab') || 'vocabulary';

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-20">
        <div className="mb-12 text-center">
          <Badge className="mb-4">Members Only</Badge>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Practice Activities
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Enhance your English skills with our exclusive interactive practice tools
          </p>
        </div>

        <Tabs defaultValue={defaultTab} className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="vocabulary">Vocabulary</TabsTrigger>
            <TabsTrigger value="cambridge">Cambridge</TabsTrigger>
            <TabsTrigger value="grammar">Grammar</TabsTrigger>
            <TabsTrigger value="maturita">Maturita</TabsTrigger>
          </TabsList>
          <TabsContent value="vocabulary">
            <ActivityGrid activities={vocabularyActivities} />
          </TabsContent>
          <TabsContent value="cambridge">
            <ActivityGrid activities={cambridgeActivities} />
          </TabsContent>
          <TabsContent value="grammar">
            <ActivityGrid activities={grammarActivities} />
          </TabsContent>
          <TabsContent value="maturita">
            <ActivityGrid activities={maturitaActivities} />
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default MembersActivities;
