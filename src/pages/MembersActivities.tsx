import { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  BookOpen, GraduationCap, Shield, FileText, Briefcase, Star, Mic,
  Megaphone, Wrench, Trophy, Award, Compass, Search, History, X, Presentation, type LucideIcon,
} from 'lucide-react';

// ── Types & data ────────────────────────────────────────────────────────────

interface Activity {
  title: string;
  description: string;
  icon: LucideIcon;
  path: string;
  color: string;
  group?: string;
}

interface TabDef {
  value: string;
  label: string;
  icon: LucideIcon;
  activities: Activity[];
  groupOrder?: string[];
}

const TABS: TabDef[] = [
  {
    value: 'grammar',
    label: 'Grammar',
    icon: GraduationCap,
    activities: [
      {
        title: 'Grammar',
        description: 'Master English grammar across 30+ modules — adjectives, tenses, modals, conditionals, verb patterns, prepositions and more',
        icon: FileText,
        path: '/b1-grammar',
        color: 'text-rose-600',
      },
    ],
  },
  {
    value: 'business',
    label: 'Business',
    icon: Briefcase,
    groupOrder: ['Core courses', 'Profession-specific', 'Single lessons'],
    activities: [
      {
        title: 'Business Vocabulary',
        description: 'Master essential business English vocabulary across 47 topics with theory, practice and tests',
        icon: BookOpen,
        path: '/business-vocabulary',
        color: 'text-blue-600',
        group: 'Core courses',
      },
      {
        title: 'Business Benchmark Pre-Int to Int',
        description: 'B1 business English across 24 modules — reading, listening, writing, speaking, vocabulary and grammar',
        icon: Briefcase,
        path: '/business-benchmark',
        color: 'text-teal-600',
        group: 'Core courses',
      },
      {
        title: 'Business Benchmark Upper Intermediate',
        description: 'B2 business English across 24 units with reading, listening, writing, speaking, vocabulary and grammar workshops',
        icon: Briefcase,
        path: '/bb-upper',
        color: 'text-sky-600',
        group: 'Core courses',
      },
      {
        title: 'Oxford English for Human Resources',
        description: 'HR English across 6 units — recruitment, selection, employee relations, development, remuneration and industrial relations',
        icon: BookOpen,
        path: '/hr-english',
        color: 'text-teal-700',
        group: 'Profession-specific',
      },
      {
        title: 'Cambridge English for Engineering',
        description: 'Engineering English across 10 units — technology, materials, design, safety, monitoring, and pushing the boundaries',
        icon: Wrench,
        path: '/engineering-english',
        color: 'text-slate-700',
        group: 'Profession-specific',
      },
      {
        title: 'Technical English: Vocabulary and Grammar',
        description: 'Brieger & Pohl — 50 topics across professional activities, industry profiles and 20 grammar uses',
        icon: BookOpen,
        path: '/technical-english',
        color: 'text-slate-600',
        group: 'Profession-specific',
      },
      {
        title: 'Insurance Vocabulary',
        description: 'Master essential insurance terminology for business and travel',
        icon: Shield,
        path: '/insurance-vocabulary',
        color: 'text-orange-600',
        group: 'Single lessons',
      },
    ],
  },
  {
    value: 'pronunciation',
    label: 'Pronunciation',
    icon: Mic,
    activities: [
      {
        title: 'Pronunciation Practice Course',
        description: 'Master English pronunciation across 8 sections — sounds, connected speech, word stress, intonation and more',
        icon: Mic,
        path: '/pronunciation',
        color: 'text-indigo-600',
      },
      {
        title: 'Connected Speech',
        description: 'Master 6 lessons on linking, intrusive /r/, elision, assimilation and reductions — with theory, examples and quizzes',
        icon: Megaphone,
        path: '/connected-speech',
        color: 'text-indigo-500',
      },
    ],
  },
  {
    value: 'exams',
    label: 'Exams',
    icon: Award,
    activities: [
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
        icon: BookOpen,
        path: '/fce-vocab-practice',
        color: 'text-green-600',
      },
      {
        title: 'Maturita Speaking Practice',
        description: 'Master all 28 maturita speaking topics with structured learning, sample sentences and official exam practice',
        icon: GraduationCap,
        path: '/maturita-speaking',
        color: 'text-red-600',
      },
    ],
  },
  {
    value: 'topics',
    label: 'Topics',
    icon: Compass,
    activities: [
      {
        title: 'Sport',
        description: 'Themed lessons on sport, business and culture — starting with The Price of Passion',
        icon: Trophy,
        path: '/topics/sport',
        color: 'text-rose-600',
      },
    ],
  },
  {
    value: 'young-learners',
    label: 'Young Learners',
    icon: Star,
    activities: [
      {
        title: 'Practice Tests for Starters',
        description: 'Fun practice tests for the Cambridge Pre A1 Starters exam with Listening, Reading & Writing, and Speaking',
        icon: Star,
        path: '/starters-practice',
        color: 'text-pink-600',
      },
    ],
  },
];

const LEGACY_SLUG_MAP: Record<string, string> = {
  vocabulary: 'business',
  cambridge: 'exams',
  maturita: 'exams',
  hr: 'business',
  engineering: 'business',
};

// ── Recently opened ─────────────────────────────────────────────────────────

const RECENTS_KEY = 'eu:recent-activities';
const RECENTS_MAX = 3;

interface RecentEntry {
  path: string;
  title: string;
  tab: string;
}

function loadRecents(): RecentEntry[] {
  try {
    const raw = localStorage.getItem(RECENTS_KEY);
    return raw ? (JSON.parse(raw) as RecentEntry[]) : [];
  } catch {
    return [];
  }
}

function pushRecent(entry: RecentEntry) {
  try {
    const current = loadRecents().filter((r) => r.path !== entry.path);
    const next = [entry, ...current].slice(0, RECENTS_MAX);
    localStorage.setItem(RECENTS_KEY, JSON.stringify(next));
  } catch {
    /* ignore */
  }
}

// ── Tile renderer ───────────────────────────────────────────────────────────

const ActivityTile = ({
  activity,
  tabValue,
  showTabBadge = false,
  onOpen,
}: {
  activity: Activity;
  tabValue: string;
  showTabBadge?: boolean;
  onOpen: (a: Activity, tab: string) => void;
}) => {
  const Icon = activity.icon;
  const tabLabel = TABS.find((t) => t.value === tabValue)?.label;
  return (
    <Link to={activity.path} onClick={() => onOpen(activity, tabValue)}>
      <Card className="h-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
        <CardHeader>
          <div className="flex items-center justify-between gap-3 mb-2">
            <div className={`p-2 rounded-lg bg-muted ${activity.color}`}>
              <Icon className="h-6 w-6" />
            </div>
            {showTabBadge && tabLabel && (
              <Badge variant="secondary" className="text-xs">in {tabLabel}</Badge>
            )}
          </div>
          <CardTitle className="text-xl">{activity.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base">{activity.description}</CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
};

const ActivityGroup = ({
  title,
  activities,
  tabValue,
  onOpen,
}: {
  title?: string;
  activities: Activity[];
  tabValue: string;
  onOpen: (a: Activity, tab: string) => void;
}) => (
  <div className="mb-10 last:mb-0">
    {title && (
      <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4 px-1">
        {title}
      </h2>
    )}
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {activities.map((a) => (
        <ActivityTile key={a.path} activity={a} tabValue={tabValue} onOpen={onOpen} />
      ))}
    </div>
  </div>
);

const TabBody = ({
  tab,
  onOpen,
}: {
  tab: TabDef;
  onOpen: (a: Activity, tab: string) => void;
}) => {
  if (!tab.groupOrder) {
    return <ActivityGroup activities={tab.activities} tabValue={tab.value} onOpen={onOpen} />;
  }
  return (
    <>
      {tab.groupOrder.map((group) => {
        const items = tab.activities.filter((a) => a.group === group);
        if (items.length === 0) return null;
        return (
          <ActivityGroup
            key={group}
            title={group}
            activities={items}
            tabValue={tab.value}
            onOpen={onOpen}
          />
        );
      })}
    </>
  );
};

// ── Page ────────────────────────────────────────────────────────────────────

const MembersActivities = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const rawTab = searchParams.get('tab');
  const resolvedTab = rawTab && LEGACY_SLUG_MAP[rawTab] ? LEGACY_SLUG_MAP[rawTab] : rawTab;
  const validTab = TABS.find((t) => t.value === resolvedTab)?.value ?? TABS[0].value;

  const [query, setQuery] = useState('');
  const [recents, setRecents] = useState<RecentEntry[]>([]);

  useEffect(() => {
    setRecents(loadRecents());
  }, []);

  // Redirect legacy slugs in the URL
  useEffect(() => {
    if (rawTab && LEGACY_SLUG_MAP[rawTab]) {
      navigate(`/members/activities?tab=${LEGACY_SLUG_MAP[rawTab]}`, { replace: true });
    }
  }, [rawTab, navigate]);

  const handleOpen = (activity: Activity, tab: string) => {
    const entry: RecentEntry = { path: activity.path, title: activity.title, tab };
    pushRecent(entry);
    setRecents((prev) => [entry, ...prev.filter((r) => r.path !== entry.path)].slice(0, RECENTS_MAX));
  };

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return null;
    const out: { tabValue: string; activity: Activity }[] = [];
    TABS.forEach((t) => {
      t.activities.forEach((a) => {
        if (a.title.toLowerCase().includes(q) || a.description.toLowerCase().includes(q)) {
          out.push({ tabValue: t.value, activity: a });
        }
      });
    });
    return out;
  }, [query]);

  const allActivities = useMemo(() => {
    const map = new Map<string, { activity: Activity; tabValue: string }>();
    TABS.forEach((t) => t.activities.forEach((a) => map.set(a.path, { activity: a, tabValue: t.value })));
    return map;
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-20">
        <div className="mb-10 text-center">
          <Badge className="mb-4">Members Only</Badge>
          <h1 className="text-4xl font-bold text-foreground mb-4">Practice Activities</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Enhance your English skills with our exclusive interactive practice tools
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Recently opened */}
          {recents.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3 text-muted-foreground">
                <History className="h-4 w-4" />
                <h2 className="text-sm font-semibold uppercase tracking-wider">Recently opened</h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {recents.map((r) => {
                  const meta = allActivities.get(r.path);
                  const Icon = meta?.activity.icon ?? FileText;
                  return (
                    <Link
                      key={r.path}
                      to={r.path}
                      onClick={() => meta && handleOpen(meta.activity, meta.tabValue)}
                      className="flex items-center gap-3 p-3 rounded-lg border bg-card hover:bg-muted/50 transition-colors"
                    >
                      <div className={`p-2 rounded-md bg-muted ${meta?.activity.color ?? ''}`}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="text-sm font-medium truncate">{r.title}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* Search */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search activities by title or description…"
              className="pl-9 pr-9"
              aria-label="Search activities"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground"
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Results or tabs */}
          {searchResults ? (
            <div>
              <p className="text-sm text-muted-foreground mb-4">
                {searchResults.length} result{searchResults.length === 1 ? '' : 's'} for "{query}"
              </p>
              {searchResults.length === 0 ? (
                <div className="text-center py-16 text-muted-foreground">
                  No activities match your search. Try a different keyword.
                </div>
              ) : (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {searchResults.map(({ activity, tabValue }) => (
                    <ActivityTile
                      key={activity.path}
                      activity={activity}
                      tabValue={tabValue}
                      showTabBadge
                      onOpen={handleOpen}
                    />
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Tabs value={validTab} onValueChange={(v) => navigate(`/members/activities?tab=${v}`, { replace: true })}>
              <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-6 mb-8 h-auto flex-wrap">
                {TABS.map((t) => {
                  const Icon = t.icon;
                  return (
                    <TabsTrigger key={t.value} value={t.value} className="gap-2">
                      <Icon className="h-4 w-4" />
                      <span>{t.label}</span>
                    </TabsTrigger>
                  );
                })}
              </TabsList>
              {TABS.map((t) => (
                <TabsContent key={t.value} value={t.value}>
                  <TabBody tab={t} onOpen={handleOpen} />
                </TabsContent>
              ))}
            </Tabs>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MembersActivities;
