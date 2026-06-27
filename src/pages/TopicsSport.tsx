import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Trophy } from 'lucide-react';

const sportActivities = [
  {
    title: 'The Price of Passion',
    description: 'B2 lesson on dynamic ticket pricing — reading, vocabulary, mixed conditionals, boardroom debate and a Financial Times listening gap-fill',
    icon: Trophy,
    path: '/price-of-passion',
    color: 'text-rose-600',
  },
];

const TopicsSport = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-20">
        <div className="mb-4 max-w-6xl mx-auto">
          <Link to="/members/activities?tab=topics">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4 mr-1" /> Back to Practice Activities
            </Button>
          </Link>
        </div>
        <div className="mb-10 text-center">
          <Badge className="mb-4" variant="secondary">Topics</Badge>
          <h1 className="text-4xl font-bold text-foreground mb-2 font-merriweather">Sport</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Themed lessons exploring sport, business and culture
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {sportActivities.map((activity) => {
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
      </main>
      <Footer />
    </div>
  );
};

export default TopicsSport;
