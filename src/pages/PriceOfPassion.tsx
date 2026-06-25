import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Trophy } from 'lucide-react';
import type { Activity } from '@/data/engineeringData';
import TechnicalRenderer from '@/components/technical/TechnicalRenderer';
import Flashcards, { type FlashcardItem } from '@/components/presentations/Flashcards';

const vocabFlashcards: FlashcardItem[] = [
  { term: 'Face value',   definition: 'The original price printed on a ticket before any resale mark-up.', example: 'The ticket\'s face value was £45, but resellers were asking £120.' },
  { term: 'Snap up',      definition: 'To buy something quickly because it is cheap or in short supply.', example: 'Fans snapped up the early-bird seats within minutes.' },
  { term: 'Fend off',     definition: 'To defend yourself against an attack, problem or unwelcome competitor.', example: 'Clubs say dynamic pricing helps them fend off scalpers.' },
  { term: 'Rip-off',      definition: 'Something that is unreasonably expensive or a fraudulent deal.', example: '£15 for a stadium hotdog is a complete rip-off.' },
  { term: 'Skyrocket',    definition: 'To rise extremely quickly and to a very high level.', example: 'Prices skyrocket when a top team comes to town.' },
  { term: 'Squeezed out', definition: 'Forced to leave or be excluded from a market or group, often by rising costs.', example: 'Working-class supporters feel squeezed out of the modern game.' },
  { term: 'Affluent',     definition: 'Having a great deal of money; wealthy.', example: 'Premium seats are increasingly reserved for affluent fans.' },
  { term: 'Scalper',      definition: 'An unauthorised reseller who buys tickets and resells them at a high profit.', example: 'Scalpers buy tickets at face value and flip them online.' },
];

const introActivities: Activity[] = [
  {
    type: 'intro',
    title: '1 · Warm-Up Discussion',
    body: 'Discuss these questions with a partner before reading the article.',
    bullets: [
      'What is the most you have ever paid to see a live sporting event or concert? Was it worth the money?',
      'Have you noticed that ticket prices change depending on when or where you buy them? Why do you think this happens?',
      'What factors do sports franchises consider when deciding how much to charge for a seat?',
    ],
  },
  {
    type: 'reading',
    title: '2 · Reading: "The Rise of Dynamic Pricing"',
    passage: [
      'For decades, sports fans knew exactly what a ticket would cost months before kickoff. A seat in the upper deck had a fixed face value, as did a premium sideline seat. Today, however, sports franchises are increasingly abandoning static pricing models in favour of dynamic pricing. Driven by sophisticated algorithms and artificial intelligence, ticket prices now fluctuate in real time based on shifting market demand, weather forecasts, team performance, and even the historical rivalry between opponents.',
      'Proponents of dynamic pricing argue that it benefits everyone. If a game is scheduled for a rainy Tuesday night against a low-ranked opponent, the system automatically drops prices, allowing budget-conscious fans to snap up a bargain. Conversely, when a high-profile team comes to town, prices skyrocket. Teams claim this helps them fend off ticket scalpers — unauthorised resellers who buy blocks of tickets at face value and flip them online for an extortionate profit.',
      'However, many traditional match-going fans feel squeezed out. Critics argue that dynamic pricing penalises the most loyal supporters, turning live sports into a luxury commodity reserved only for the affluent. When prices surge unexpectedly, it can feel like a corporate rip-off. As clubs look to maximise revenue, the delicate balance between commercial profit and fan loyalty is being tested like never before.',
    ],
  },
  {
    type: 'multiple-choice',
    title: '2b · Comprehension Check',
    body: 'Answer the questions based on the article.',
    mcq: [
      {
        question: 'According to the text, what major technical shift has enabled teams to use dynamic pricing?',
        options: [
          'Cheaper printing of paper tickets',
          'Sophisticated algorithms and artificial intelligence',
          'New government regulation of resellers',
          'The arrival of social media marketing',
        ],
        answerIndex: 1,
      },
      {
        question: 'Which of the following is NOT mentioned as a real-world factor that causes ticket prices to change dynamically?',
        options: [
          'Weather forecasts',
          'Team performance',
          'Historical rivalry between opponents',
          'The age of the stadium',
        ],
        answerIndex: 3,
      },
      {
        question: 'What is the main argument teams use to justify raising prices for high-demand matches?',
        options: [
          'It funds new youth academies',
          'It helps them fend off ticket scalpers who resell tickets for an extortionate profit',
          'It lowers the cost of season tickets',
          'It guarantees a sell-out crowd',
        ],
        answerIndex: 1,
      },
      {
        question: 'Why are traditional sports fans critical of dynamic pricing?',
        options: [
          'It makes the matches harder to find on TV',
          'It penalises loyal supporters and turns live sports into a luxury for the affluent',
          'It causes longer queues at the stadium',
          'It reduces the quality of seating',
        ],
        answerIndex: 1,
      },
    ],
  },
  {
    type: 'matching',
    title: '3 · Vocabulary in Context',
    body: 'Match each bold word from the article with its correct definition.',
    pairs: [
      { id: 1, left: 'Face value',  right: 'The original price printed on a ticket before any resale mark-up.', hint: 'What it literally "says" on the ticket.' },
      { id: 2, left: 'Snap up',     right: 'To buy something quickly because it is cheap or in short supply.', hint: 'You "grab" a bargain fast before it disappears.' },
      { id: 3, left: 'Fend off',    right: 'To defend yourself against an attack, problem or unwelcome competitor.', hint: 'Think of fighting off scalpers or rivals.' },
      { id: 4, left: 'Rip-off',     right: 'Something that is unreasonably expensive or a fraudulent deal.', hint: 'Informal complaint about being over-charged.' },
      { id: 5, left: 'Skyrocket',   right: 'To rise extremely quickly and to a very high level.', hint: 'Prices shoot up to the sky.' },
      { id: 6, left: 'Squeezed out',right: 'Forced to leave or be excluded from a place, market or group.', hint: 'Pushed out by pressure (often financial).' },
      { id: 7, left: 'Affluent',    right: 'Having a great deal of money; wealthy.', hint: 'Synonym of "well-off".' },
      { id: 8, left: 'Scalper',     right: 'An unauthorised reseller who buys tickets and resells them at a high profit.', hint: 'Often operates outside stadiums or online.' },
    ],
  },
  {
    type: 'drag-fill',
    title: '3b · Fill in the Blanks',
    body: 'Drag the vocabulary words from the bank into the correct sentence.',
    blanks: [
      { prompt: '1. The original ticket had a ___ of £45, but I had to pay double on a resale site.', answer: 'face value' },
      { prompt: '2. I managed to ___ two front-row tickets before the website crashed.', answer: 'snap up' },
      { prompt: '3. Paying £15 for a stadium hotdog and soda is a complete ___.', answer: 'rip-off' },
      { prompt: '4. Clubs say dynamic pricing helps them ___ unauthorised ticket scalpers.', answer: 'fend off' },
      { prompt: '5. When a top team visits, prices can ___ overnight.', answer: 'skyrocket' },
      { prompt: '6. Many long-standing supporters feel ___ of the modern game.', answer: 'squeezed out' },
    ],
  },
  {
    type: 'type-blanks',
    title: '4 · Grammar: Mixed Conditionals',
    body: 'Type the correct conditional form of the verbs in brackets. Use a contraction where natural (e.g. would → \'d).',
    blanks: [
      {
        prompt: '1. If the club (not adopt) ___ dynamic pricing last season, thousands of working-class fans (be) ___ able to afford the final match.',
        answer: 'had not adopted / would have been',
      },
      {
        prompt: '2. Prices will continue to skyrocket unless the government (introduce) ___ stricter laws against online ticket scalpers.',
        answer: 'introduces',
      },
      {
        prompt: '3. If I (have) ___ the money to buy a VIP executive box, I (invite) ___ my entire local amateur team to the match.',
        answer: 'had / would invite',
      },
      {
        prompt: '4. Fans (boycott) ___ the stadium next week if the management (raise) ___ ticket prices yet again.',
        answer: 'will boycott / raises',
      },
    ],
  },
  {
    type: 'task',
    title: '5 · Speaking: The Boardroom Debate',
    body: 'Your local football club is suffering financially and needs to increase its revenue. The Club Directors are meeting to decide whether to introduce Dynamic Pricing next season. Split into pairs or small groups, take a role and negotiate a compromise.',
    bullets: [
      'Role A · Commercial Director — argue for dynamic pricing: it will maximise stadium revenue, fill empty seats on slow days, and help the club sign better players.',
      'Role B · Fan Coalition Representative — argue against: it exploits loyal fans, ruins the community atmosphere, and makes it impossible for families to plan or budget.',
      'Task: Negotiate a compromise (e.g. membership discounts, fixed prices for local youths, dynamic pricing limited to VIP sections). Prepare to present your compromise to the class.',
    ],
  },
];

const listeningActivities: Activity[] = [
  {
    type: 'type-blanks',
    title: '6b · Gap-Fill Transcript',
    body: 'Listen to the Financial Times clip above and type the missing word or phrase for each gap (1–8). Approximate timings are given.',
    blanks: [
      { prompt: '1. (0:17) But powered by algorithms and ___, surge pricing is now being used across a growing number of consumer industries.', answer: 'artificial intelligence' },
      { prompt: '2. (0:34) In the retail industry, the practice is especially ___ in online marketplaces.', answer: 'prevalent' },
      { prompt: '3. (0:34) Amazon changes prices 2.5 million times a day across all its product lines, using millions of real-time data points to ___ against competitors and track demand surges.', answer: 'benchmark' },
      { prompt: '4. (1:00) A 2018 study by researchers at MIT found that dynamic pricing ___ airline revenues by between 1% and 4%.', answer: 'increased' },
      { prompt: '5. (1:33) A 2023 report found that dynamic food pricing could increase supermarket ___ by 3%.', answer: 'profits' },
      { prompt: '6. (1:44) But some are ___ of the impact it could have on more essential goods like groceries.', answer: 'wary' },
      { prompt: '7. (1:44) In August, two US senators announced they would be launching an investigation into Kroger\'s digital price tags, due in part to concerns the technology will enable ___.', answer: 'price gouging' },
      { prompt: '8. (1:59) Even in non-essentials, dynamic pricing is coming under increased ___.', answer: 'scrutiny' },
    ],
  },
  {
    type: 'intro',
    title: '6c · Vocabulary Follow-Up',
    body: 'Highlight these high-level B2 vocabulary words after the gap-fill:',
    bullets: [
      'Prevalent — very common or widespread in a particular area.',
      'Benchmark — to evaluate or check something by comparing it with a standard.',
      'Wary — feeling or showing caution about possible dangers or problems.',
      'Price gouging — unfairly raising prices to a very high level, especially during a crisis or period of fixed supply.',
    ],
  },
];

const PriceOfPassion = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="The Price of Passion · Business English"
        description="A B2 upper-intermediate business lesson on dynamic ticket pricing — reading, vocabulary, mixed conditionals, debate and a Financial Times listening gap-fill."
      />
      <Navigation />
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <Button asChild variant="ghost" size="sm" className="mb-4">
          <Link to="/members/activities?tab=business">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Business Activities
          </Link>
        </Button>

        <header className="mb-8">
          <p className="text-sm text-muted-foreground mb-1 flex items-center gap-2">
            <Trophy className="h-4 w-4 text-primary" /> Business English · B2 Upper-Intermediate
          </p>
          <h1 className="text-4xl font-bold font-merriweather text-foreground">The Price of Passion</h1>
          <p className="text-lg text-muted-foreground mt-2">
            The economics of sports ticket pricing &amp; dynamic pricing — reading, vocabulary,
            mixed conditionals, debate and a Financial Times listening task.
          </p>
        </header>

        <TechnicalRenderer activities={introActivities.slice(0, 1)} />

        <div className="mt-6">
          <Flashcards
            title="1b · Vocabulary Flashcards"
            description="Preview the key vocabulary you will meet in the reading. Click a card to flip it, then use Next or Shuffle to keep practising."
            cards={vocabFlashcards}
          />
        </div>

        <div className="mt-6">
          <TechnicalRenderer activities={introActivities.slice(1)} />
        </div>

        {/* Listening section with embedded video */}
        <div className="mt-6">
          <Card className="service-card">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-2 font-merriweather text-foreground">
                6 · Listening: The Spread of Surge Pricing
              </h3>
              <p className="text-muted-foreground mb-4">
                Watch the Financial Times video clip and then complete the gap-fill transcript below.
              </p>
              <div className="aspect-video w-full overflow-hidden rounded-lg border border-border shadow-sm">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/W00ALu-N9Sw"
                  title="The spread of surge pricing — Financial Times"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <TechnicalRenderer activities={listeningActivities} />
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <Button asChild variant="outline">
            <Link to="/members/activities?tab=business">
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to Business Activities
            </Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PriceOfPassion;
