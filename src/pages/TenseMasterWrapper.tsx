import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import { 
  Clock, History, CheckSquare, Undo2, ArrowRight, 
  Home, RefreshCw, CheckCircle, Trophy,
  ArrowLeft, GraduationCap, BookOpen, Loader2
} from 'lucide-react';

// Types
interface Question {
  q: string;
  options: string[];
  correct: number;
  feedback: string;
}

interface QuizCategory {
  id: string;
  title: string;
  desc: string;
  questions: Question[];
}

interface TenseUnit {
  title: string;
  subtitle: string;
  formula: string;
  explanation: string;
  practiceLink: string;
  detailedUses: { title: string; desc: string }[];
  examples: string[];
  icon: string;
}

interface TenseData {
  title: string;
  intro: string;
  units: TenseUnit[];
}

// Quiz Data
const presentSimplePractice: QuizCategory[] = [
  {
    id: 'habits',
    title: "Habits & Repeated Actions",
    desc: "Daily routines, hobbies, and things you do often.",
    questions: [
      { q: "I usually ______ (go) away at weekends.", options: ["go", "goes", "going"], correct: 0, feedback: "Correct! 'Usually' indicates a habit." },
      { q: "On weekdays, I ______ (catch) the bus.", options: ["catches", "catch", "catching"], correct: 1, feedback: "Correct! 'I' takes the base form." },
      { q: "He ______ (play) tennis every Friday.", options: ["play", "playing", "plays"], correct: 2, feedback: "Correct! Third person singular (He) adds 's'." },
      { q: "They often ______ (visit) their grandparents.", options: ["visit", "visits", "visiting"], correct: 0, feedback: "Correct! 'Often' signals a repeated action." },
      { q: "She never ______ (forget) her purse.", options: ["forget", "forgets", "forgot"], correct: 1, feedback: "Correct! 'Never' is an adverb of frequency used with habits." },
      { q: "We ______ (watch) TV in the evening.", options: ["watch", "watches", "watching"], correct: 0, feedback: "Correct! 'We' takes the base form." },
      { q: "My brother ______ (live) in London.", options: ["live", "lives", "living"], correct: 1, feedback: "Correct! A permanent situation/habit." },
      { q: "Tom ______ (have) a shower every morning.", options: ["haves", "has", "have"], correct: 1, feedback: "Correct! 'Has' is the 3rd person form of 'have'." },
      { q: "I ______ (work) in a bank.", options: ["works", "working", "work"], correct: 2, feedback: "Correct! A general habit/fact about your life." },
      { q: "Sarah ______ (drive) to work every day.", options: ["drive", "drives", "is driving"], correct: 1, feedback: "Correct! 'Every day' implies a habit." }
    ]
  },
  {
    id: 'facts',
    title: "Facts & General Truths",
    desc: "Things that are always true or true in general.",
    questions: [
      { q: "The earth ______ (go) round the sun.", options: ["goes", "go", "going"], correct: 0, feedback: "Correct! Scientific fact." },
      { q: "Nurses ______ (look) after patients in hospitals.", options: ["looks", "look", "looking"], correct: 1, feedback: "Correct! General truth about nurses." },
      { q: "Cats ______ (like) milk.", options: ["like", "likes", "liking"], correct: 0, feedback: "Correct! General truth about cats." },
      { q: "Water ______ (boil) at 100 degrees Celsius.", options: ["boils", "boil", "boiled"], correct: 0, feedback: "Correct! Physical fact." },
      { q: "It ______ (rain) a lot in winter here.", options: ["rain", "rains", "raining"], correct: 1, feedback: "Correct! General weather fact." },
      { q: "Birds ______ (not / like) milk.", options: ["not like", "doesn't like", "do not like"], correct: 2, feedback: "Correct! Negative fact." },
      { q: "Canada ______ (share) a border with the USA.", options: ["shares", "share", "sharing"], correct: 0, feedback: "Correct! Geographic fact." },
      { q: "Windows ______ (be) made of glass.", options: ["is", "are", "be"], correct: 1, feedback: "Correct! General truth." },
      { q: "The sun ______ (rise) in the East.", options: ["rise", "rises", "rising"], correct: 1, feedback: "Correct! Universal truth." },
      { q: "Vegetarians ______ (not / eat) meat.", options: ["don't eat", "doesn't eat", "not eat"], correct: 0, feedback: "Correct! General definition." }
    ]
  },
  {
    id: 'schedules',
    title: "Schedules & Timetables",
    desc: "Future events based on a timetable.",
    questions: [
      { q: "My university term ______ (start) in Autumn.", options: ["start", "starts", "starting"], correct: 1, feedback: "Correct! A fixed schedule." },
      { q: "The train ______ (leave) at 11:30.", options: ["leave", "leaves", "leaving"], correct: 1, feedback: "Correct! Train timetable." },
      { q: "What time ______ (do) the film begin?", options: ["do", "does", "is"], correct: 1, feedback: "Correct! Question about a schedule." },
      { q: "The plane ______ (arrive) tonight at 9 PM.", options: ["arrive", "arrives", "arriving"], correct: 1, feedback: "Correct! Flight schedule." },
      { q: "The concert ______ (finish) at 10:30.", options: ["finishes", "finish", "finished"], correct: 0, feedback: "Correct! Fixed event time." },
      { q: "School ______ (begin) next week.", options: ["begins", "begin", "beginning"], correct: 0, feedback: "Correct! School calendar." },
      { q: "The exhibition ______ (open) on the 18th.", options: ["open", "opens", "opening"], correct: 1, feedback: "Correct! Scheduled opening." },
      { q: "When ______ (do) the bus arrive?", options: ["do", "does", "is"], correct: 1, feedback: "Correct! Bus timetable." },
      { q: "Our flight ______ (take) off at 7 AM tomorrow.", options: ["takes", "take", "taking"], correct: 0, feedback: "Correct! Flight schedule." },
      { q: "The football match ______ (start) at 3 PM.", options: ["start", "starts", "starting"], correct: 1, feedback: "Correct! Sports schedule." }
    ]
  },
  {
    id: 'states',
    title: "Non-Continuous (State) Verbs",
    desc: "Verbs about thoughts, feelings, and possession.",
    questions: [
      { q: "I ______ (understand) the problem now.", options: ["understand", "am understanding", "understands"], correct: 0, feedback: "Correct! 'Understand' is a state verb." },
      { q: "She ______ (want) a new car.", options: ["wants", "is wanting", "want"], correct: 0, feedback: "Correct! 'Want' describes a state/desire." },
      { q: "Do you ______ (know) the answer?", options: ["know", "knowing", "knows"], correct: 0, feedback: "Correct! 'Know' is a mental state." },
      { q: "This soup ______ (taste) delicious.", options: ["tastes", "is tasting", "taste"], correct: 0, feedback: "Correct! Describes the state of the soup." },
      { q: "I ______ (think) he is right.", options: ["think", "am thinking", "thinks"], correct: 0, feedback: "Correct! Opinion = Simple Tense." },
      { q: "He ______ (need) help with his homework.", options: ["needs", "is needing", "need"], correct: 0, feedback: "Correct! 'Need' is a state verb." },
      { q: "I ______ (remember) his face.", options: ["remember", "am remembering", "remembers"], correct: 0, feedback: "Correct! Mental process." },
      { q: "They ______ (own) a farm.", options: ["own", "are owning", "owns"], correct: 0, feedback: "Correct! Possession." },
      { q: "I ______ (like) this song.", options: ["like", "am liking", "likes"], correct: 0, feedback: "Correct! Preference." },
      { q: "It ______ (seem) expensive.", options: ["seems", "is seeming", "seem"], correct: 0, feedback: "Correct! Appearance/State." }
    ]
  }
];

const presentContinuousPractice: QuizCategory[] = [
  {
    id: 'now',
    title: "Happening Now",
    desc: "Actions happening at the time of speaking.",
    questions: [
      { q: "Please be quiet. I ______ (try) to work.", options: ["try", "am trying", "tried"], correct: 1, feedback: "Correct! Happening right now." },
      { q: "Look! It ______ (rain).", options: ["rains", "is raining", "rained"], correct: 1, feedback: "Correct! 'Look!' indicates this moment." },
      { q: "Where's Mark? He ______ (have) a shower.", options: ["is having", "has", "have"], correct: 0, feedback: "Correct! He is doing it now." },
      { q: "(at a party) Hi, Jane. ______ (you / enjoy) the party?", options: ["Do you enjoy", "Are you enjoying", "You enjoy"], correct: 1, feedback: "Correct! Asking about the current moment." },
      { q: "What's that noise? What ______ (happen)?", options: ["is happening", "happens", "happen"], correct: 0, feedback: "Correct! Ongoing action." },
      { q: "Listen! The birds ______ (sing).", options: ["sing", "are singing", "is singing"], correct: 1, feedback: "Correct! 'Listen!' is a clue." },
      { q: "Don't go out now. It ______ (snow).", options: ["is snowing", "snows", "snowing"], correct: 0, feedback: "Correct! Happening now." },
      { q: "I ______ (not / watch) TV right now.", options: ["am not watching", "don't watch", "not watching"], correct: 0, feedback: "Correct! Negative action now." },
      { q: "Why ______ (you / wear) that coat? It's hot!", options: ["do you wear", "are you wearing", "wear you"], correct: 1, feedback: "Correct! You are wearing it now." },
      { q: "Look at that man! He ______ (run) after the bus.", options: ["runs", "is running", "running"], correct: 1, feedback: "Correct! Visible action." }
    ]
  },
  {
    id: 'temporary',
    title: "Temporary Situations",
    desc: "Actions in progress around now, but not necessarily this second.",
    questions: [
      { q: "I ______ (stay) with friends until I find a flat.", options: ["stay", "am staying", "staying"], correct: 1, feedback: "Correct! A temporary situation." },
      { q: "My car is broken, so I ______ (walk) to work this week.", options: ["am walking", "walk", "walks"], correct: 0, feedback: "Correct! Temporary routine." },
      { q: "She ______ (study) Economics at university.", options: ["studies", "is studying", "studying"], correct: 1, feedback: "Correct! In progress over a period of time." },
      { q: "I ______ (read) a really good book at the moment.", options: ["read", "am reading", "reads"], correct: 1, feedback: "Correct! 'At the moment' implies temporary." },
      { q: "They ______ (build) a new hotel in the city centre.", options: ["build", "are building", "building"], correct: 1, feedback: "Correct! Ongoing project." },
      { q: "My sister ______ (look) for a job.", options: ["looks", "is looking", "look"], correct: 1, feedback: "Correct! Temporary activity." },
      { q: "We ______ (decorate) the house this month.", options: ["are decorating", "decorate", "decorates"], correct: 0, feedback: "Correct! Happening this month." },
      { q: "He ______ (work) hard on a new project.", options: ["works", "is working", "working"], correct: 1, feedback: "Correct! Specific project duration." },
      { q: "I ______ (live) with my parents for now.", options: ["live", "am living", "living"], correct: 1, feedback: "Correct! 'For now' means temporary." },
      { q: "She ______ (write) a book about her travels.", options: ["writes", "is writing", "wrote"], correct: 1, feedback: "Correct! In the middle of doing it." }
    ]
  },
  {
    id: 'future',
    title: "Future Arrangements",
    desc: "Plans you have already arranged for the future.",
    questions: [
      { q: "I ______ (meet) Sarah for lunch tomorrow.", options: ["am meeting", "meet", "meeting"], correct: 0, feedback: "Correct! Arranged plan." },
      { q: "What ______ (you / do) on Saturday night?", options: ["do you do", "are you doing", "you doing"], correct: 1, feedback: "Correct! Asking about plans." },
      { q: "We ______ (go) to the cinema tonight.", options: ["go", "are going", "goes"], correct: 1, feedback: "Correct! Definite plan." },
      { q: "He ______ (play) tennis on Friday.", options: ["plays", "is playing", "play"], correct: 1, feedback: "Correct! Arranged activity." },
      { q: "They ______ (fly) to Paris next week.", options: ["fly", "are flying", "flying"], correct: 1, feedback: "Correct! Booked travel." },
      { q: "I ______ (not / work) tomorrow.", options: ["am not working", "don't work", "not work"], correct: 0, feedback: "Correct! Plan not to work." },
      { q: "______ (you / come) to the party?", options: ["Do you come", "Are you coming", "Coming you"], correct: 1, feedback: "Correct! Asking about attendance." },
      { q: "She ______ (see) the dentist at 10 AM.", options: ["sees", "is seeing", "see"], correct: 1, feedback: "Correct! Appointment." },
      { q: "We ______ (have) a barbecue this weekend.", options: ["have", "are having", "having"], correct: 1, feedback: "Correct! Planned event." },
      { q: "My parents ______ (visit) us next month.", options: ["visit", "are visiting", "visits"], correct: 1, feedback: "Correct! Arranged visit." }
    ]
  },
  {
    id: 'changes',
    title: "Trends & Changes",
    desc: "Situations that are changing or developing.",
    questions: [
      { q: "My English ______ (get) better.", options: ["is getting", "gets", "getting"], correct: 0, feedback: "Correct! Changing state." },
      { q: "The population of the world ______ (increase).", options: ["increases", "is increasing", "increase"], correct: 1, feedback: "Correct! Trend." },
      { q: "It ______ (become) harder to find a job.", options: ["becomes", "is becoming", "become"], correct: 1, feedback: "Correct! Developing situation." },
      { q: "The cost of living ______ (rise).", options: ["rises", "is rising", "rising"], correct: 1, feedback: "Correct! Upward trend." },
      { q: "The weather ______ (start) to improve.", options: ["starts", "is starting", "starting"], correct: 1, feedback: "Correct! Change in progress." },
      { q: "My muscles ______ (develop) from all this work!", options: ["develop", "are developing", "develops"], correct: 1, feedback: "Correct! Physical change." },
      { q: "Technology ______ (change) very fast.", options: ["changes", "is changing", "change"], correct: 1, feedback: "Correct! Rapid change." },
      { q: "People ______ (live) longer these days.", options: ["live", "are living", "lives"], correct: 1, feedback: "Correct! Changing demographic." },
      { q: "The days ______ (get) shorter in winter.", options: ["get", "are getting", "getting"], correct: 1, feedback: "Correct! Seasonal change." },
      { q: "Your French ______ (improve) quickly.", options: ["improves", "is improving", "improve"], correct: 1, feedback: "Correct! Improvement in progress." }
    ]
  }
];

const pastSimplePractice: QuizCategory[] = [
  {
    id: 'completed',
    title: "Completed Actions",
    desc: "Actions that started and finished at a specific time in the past.",
    questions: [
      { q: "I ______ (see) a movie yesterday.", options: ["see", "saw", "seen"], correct: 1, feedback: "Correct! Irregular past of 'see'." },
      { q: "Last year, I ______ (travel) to Japan.", options: ["traveled", "travel", "travelling"], correct: 0, feedback: "Correct! Specific time in the past." },
      { q: "Did you ______ (have) dinner last night?", options: ["had", "have", "has"], correct: 1, feedback: "Correct! 'Did' takes the base form." },
      { q: "She ______ (wash) her car on Sunday.", options: ["wash", "washed", "washes"], correct: 1, feedback: "Correct! Completed action." },
      { q: "He ______ (not / wash) his car.", options: ["didn't wash", "not washed", "didn't washed"], correct: 0, feedback: "Correct! Negative past simple." },
      { q: "We ______ (go) to the park last weekend.", options: ["go", "went", "gone"], correct: 1, feedback: "Correct! Irregular past of 'go'." },
      { q: "I ______ (buy) a new phone yesterday.", options: ["buyed", "bought", "buying"], correct: 1, feedback: "Correct! Irregular past of 'buy'." },
      { q: "They ______ (leave) the party early.", options: ["left", "leaved", "leave"], correct: 0, feedback: "Correct! Irregular past of 'leave'." },
      { q: "______ (you / sleep) well last night?", options: ["Did you sleep", "Do you sleep", "Slept you"], correct: 0, feedback: "Correct! Past simple question." },
      { q: "Tom ______ (not / come) to the office yesterday.", options: ["didn't came", "didn't come", "not come"], correct: 1, feedback: "Correct! 'Did not' + base verb." }
    ]
  },
  {
    id: 'series',
    title: "Series of Actions",
    desc: "A list of completed actions happening one after another.",
    questions: [
      { q: "I finished work, ______ (walk) to the beach, and found a nice place to swim.", options: ["walk", "walked", "walking"], correct: 1, feedback: "Correct! Part of a sequence." },
      { q: "He arrived at 8:00, ______ (check) into the hotel, and met the others.", options: ["checked", "check", "checking"], correct: 0, feedback: "Correct! Sequential past action." },
      { q: "Did you add flour, ______ (pour) in the milk, and then add eggs?", options: ["poured", "pour", "pouring"], correct: 1, feedback: "Correct! 'Did' applies to the list." },
      { q: "She opened the box and ______ (look) inside.", options: ["looked", "look", "looking"], correct: 0, feedback: "Correct! Next action in story." },
      { q: "He woke up, washed his face, and ______ (brush) his teeth.", options: ["brushed", "brush", "brushes"], correct: 0, feedback: "Correct! List of past events." },
      { q: "I sat down, took a book, and ______ (start) to read.", options: ["start", "started", "starting"], correct: 1, feedback: "Correct! Sequential action." },
      { q: "The thief broke in, ______ (steal) the TV, and ran away.", options: ["stole", "stealed", "stolen"], correct: 0, feedback: "Correct! Irregular past of 'steal'." },
      { q: "She put on her coat, ______ (grab) her bag, and left.", options: ["grabbed", "grab", "grabbing"], correct: 0, feedback: "Correct! Sequence of events." },
      { q: "We bought tickets, ______ (enter) the cinema, and sat down.", options: ["entered", "enter", "entering"], correct: 0, feedback: "Correct! Narrative sequence." },
      { q: "He paid the bill, ______ (stand) up, and walked out.", options: ["stood", "standed", "stand"], correct: 0, feedback: "Correct! Irregular past of 'stand'." }
    ]
  },
  {
    id: 'duration',
    title: "Duration in Past",
    desc: "Actions that lasted for a time in the past but are now finished.",
    questions: [
      { q: "I ______ (live) in Brazil for two years.", options: ["lived", "live", "living"], correct: 0, feedback: "Correct! Finished duration." },
      { q: "Shauna ______ (study) Japanese for five years.", options: ["studied", "studies", "studying"], correct: 0, feedback: "Correct! Past duration." },
      { q: "They ______ (sit) at the beach all day.", options: ["sat", "sit", "sitted"], correct: 0, feedback: "Correct! Irregular past of 'sit'." },
      { q: "We ______ (talk) on the phone for thirty minutes.", options: ["talked", "talk", "talking"], correct: 0, feedback: "Correct! Specific duration in past." },
      { q: "How long ______ (you / wait) for them?", options: ["did you wait", "do you wait", "waited you"], correct: 0, feedback: "Correct! Question about duration." },
      { q: "I ______ (work) there for 10 years before I quit.", options: ["worked", "work", "working"], correct: 0, feedback: "Correct! Finished period." },
      { q: "She ______ (be) sick for a week.", options: ["was", "is", "were"], correct: 0, feedback: "Correct! Past state duration." },
      { q: "We ______ (stay) at the party for only an hour.", options: ["stayed", "stay", "staying"], correct: 0, feedback: "Correct! Short duration in past." },
      { q: "He ______ (play) football for the school team for 3 years.", options: ["played", "play", "playing"], correct: 0, feedback: "Correct! Past habit/duration." },
      { q: "They ______ (queue) for tickets for 4 hours!", options: ["queued", "queue", "queuing"], correct: 0, feedback: "Correct! Long duration in past." }
    ]
  },
  {
    id: 'habits',
    title: "Habits in the Past",
    desc: "Things you used to do but don't do anymore.",
    questions: [
      { q: "I ______ (study) French when I was a child.", options: ["studied", "study", "studying"], correct: 0, feedback: "Correct! Past habit." },
      { q: "He ______ (play) the violin when he was younger.", options: ["played", "plays", "playing"], correct: 0, feedback: "Correct! Past skill/habit." },
      { q: "She ______ (work) at the cinema after school.", options: ["worked", "works", "working"], correct: 0, feedback: "Correct! Regular past action." },
      { q: "They never ______ (go) to school; they always skipped.", options: ["went", "go", "gone"], correct: 0, feedback: "Correct! Past routine." },
      { q: "Did you ______ (play) an instrument when you were a kid?", options: ["play", "played", "playing"], correct: 0, feedback: "Correct! Question about past habit." },
      { q: "My grandpa always ______ (wear) a hat.", options: ["wore", "worn", "wear"], correct: 0, feedback: "Correct! Past characteristic." },
      { q: "We often ______ (go) camping in summer.", options: ["went", "go", "going"], correct: 0, feedback: "Correct! Recurring past event." },
      { q: "I ______ (not / like) vegetables as a child.", options: ["didn't like", "don't like", "not liked"], correct: 0, feedback: "Correct! Past state/habit." },
      { q: "People ______ (pay) much more for calls in the past.", options: ["paid", "payed", "pay"], correct: 0, feedback: "Correct! General past truth." },
      { q: "She ______ (be) very shy, but now she's outgoing.", options: ["was", "is", "were"], correct: 0, feedback: "Correct! Past state." }
    ]
  }
];

const pastContinuousPractice: QuizCategory[] = [
  {
    id: 'interrupted',
    title: "Interrupted Actions",
    desc: "Long action in progress interrupted by a short action.",
    questions: [
      { q: "I ______ (watch) TV when she called.", options: ["was watching", "watched", "watching"], correct: 0, feedback: "Correct! Interrupted action." },
      { q: "When the phone rang, she ______ (write) a letter.", options: ["was writing", "wrote", "writes"], correct: 0, feedback: "Correct! Action in progress." },
      { q: "While we ______ (have) the picnic, it started to rain.", options: ["were having", "had", "having"], correct: 0, feedback: "Correct! Background action." },
      { q: "What ______ (you / do) when the earthquake started?", options: ["were you doing", "did you do", "do you do"], correct: 0, feedback: "Correct! Action in progress." },
      { q: "I ______ (listen) to music, so I didn't hear the bell.", options: ["was listening", "listened", "listen"], correct: 0, feedback: "Correct! Reason for not hearing." },
      { q: "You ______ (not / listen) to me when I told you.", options: ["were not listening", "didn't listen", "not listening"], correct: 0, feedback: "Correct! Negative continuous." },
      { q: "Sammy ______ (wait) for us when we got off the plane.", options: ["was waiting", "waited", "wait"], correct: 0, feedback: "Correct! Already happening." },
      { q: "While I ______ (write) the email, the computer crashed.", options: ["was writing", "wrote", "write"], correct: 0, feedback: "Correct! Interrupted process." },
      { q: "I ______ (snowboard) when I broke my leg.", options: ["was snowboarding", "snowboarded", "snowboard"], correct: 0, feedback: "Correct! Context of accident." },
      { q: "He ______ (drive) too fast when the police stopped him.", options: ["was driving", "drove", "drives"], correct: 0, feedback: "Correct! Action in progress." }
    ]
  },
  {
    id: 'time',
    title: "Specific Time",
    desc: "Action in progress at a precise moment in the past.",
    questions: [
      { q: "Last night at 6 PM, I ______ (eat) dinner.", options: ["was eating", "ate", "eaten"], correct: 0, feedback: "Correct! In progress at that exact time." },
      { q: "At midnight, we ______ (still / drive) through the desert.", options: ["were still driving", "still drove", "drive"], correct: 0, feedback: "Correct! Happening precisely then." },
      { q: "Yesterday at this time, I ______ (sit) at my desk.", options: ["was sitting", "sat", "sit"], correct: 0, feedback: "Correct! In progress at this time yesterday." },
      { q: "What ______ (you / do) at 8 o'clock last night?", options: ["were you doing", "did you do", "do you do"], correct: 0, feedback: "Correct! Specific time inquiry." },
      { q: "This time last year, I ______ (live) in Tokyo.", options: ["was living", "lived", "live"], correct: 0, feedback: "Correct! In progress then." },
      { q: "At 10 AM yesterday, she ______ (work) in the garden.", options: ["was working", "worked", "works"], correct: 0, feedback: "Correct! Ongoing at 10 AM." },
      { q: "We ______ (sleep) when the alarm went off at 6 AM.", options: ["were sleeping", "slept", "sleep"], correct: 0, feedback: "Correct! State at that time." },
      { q: "It ______ (rain) heavily at lunchtime.", options: ["was raining", "rained", "rains"], correct: 0, feedback: "Correct! Weather at a specific time." },
      { q: "They ______ (have) breakfast at 7:30 this morning.", options: ["were having", "had", "have"], correct: 0, feedback: "Correct! Meal in progress." },
      { q: "I ______ (not / work) at 5 PM; I was already home.", options: ["wasn't working", "didn't work", "not working"], correct: 0, feedback: "Correct! Negative state at specific time." }
    ]
  },
  {
    id: 'parallel',
    title: "Parallel Actions",
    desc: "Two or more actions happening at the same time.",
    questions: [
      { q: "I ______ (study) while he was making dinner.", options: ["was studying", "studied", "study"], correct: 0, feedback: "Correct! Simultaneous action." },
      { q: "While Ellen was reading, Tim ______ (watch) TV.", options: ["was watching", "watched", "watches"], correct: 0, feedback: "Correct! Happening together." },
      { q: "______ (you / listen) while he was talking?", options: ["Were you listening", "Did you listen", "Listen you"], correct: 0, feedback: "Correct! Simultaneous actions." },
      { q: "Thomas wasn't working, and I ______ (not / work) either.", options: ["wasn't working", "didn't work", "not working"], correct: 0, feedback: "Correct! Parallel negative states." },
      { q: "They ______ (eat) dinner and discussing plans.", options: ["were eating", "ate", "eat"], correct: 0, feedback: "Correct! Multiple ongoing actions." },
      { q: "While I was cooking, my sister ______ (do) her homework.", options: ["was doing", "did", "does"], correct: 0, feedback: "Correct! Parallel activity." },
      { q: "He ______ (read) the paper while his wife was driving.", options: ["was reading", "read", "reads"], correct: 0, feedback: "Correct! Happening at the same time." },
      { q: "The kids ______ (play) while the parents were chatting.", options: ["were playing", "played", "play"], correct: 0, feedback: "Correct! Background scene." },
      { q: "I ______ (try) to sleep while the neighbours were partying.", options: ["was trying", "tried", "try"], correct: 0, feedback: "Correct! Parallel struggle." },
      { q: "She ______ (laugh) while he was telling the joke.", options: ["was laughing", "laughed", "laughs"], correct: 0, feedback: "Correct! Simultaneous reaction." }
    ]
  },
  {
    id: 'atmosphere',
    title: "Atmosphere & Repetition",
    desc: "Setting the scene or describing irritating habits with 'always'.",
    questions: [
      { q: "When I walked in, everyone ______ (talk).", options: ["was talking", "talked", "talk"], correct: 0, feedback: "Correct! Setting the scene." },
      { q: "The birds ______ (sing) and the sun was shining.", options: ["were singing", "sang", "sing"], correct: 0, feedback: "Correct! Atmosphere description." },
      { q: "She ______ (always / come) to class late!", options: ["was always coming", "always came", "comes always"], correct: 0, feedback: "Correct! Irritating past habit." },
      { q: "He ______ (constantly / talk). He annoyed everyone.", options: ["was constantly talking", "constantly talked", "talks constantly"], correct: 0, feedback: "Correct! Annoying habit." },
      { q: "I didn't like them because they ______ (always / complain).", options: ["were always complaining", "always complained", "complain always"], correct: 0, feedback: "Correct! Negative repetition." },
      { q: "Customers ______ (wait) to be helped.", options: ["were waiting", "waited", "wait"], correct: 0, feedback: "Correct! Scene description." },
      { q: "Phones ______ (ring) and people were shouting.", options: ["were ringing", "rang", "ring"], correct: 0, feedback: "Correct! Busy atmosphere." },
      { q: "My old car ______ (always / break) down.", options: ["was always breaking", "always broke", "breaks always"], correct: 0, feedback: "Correct! Annoying frequency." },
      { q: "The wind ______ (blow) heavily outside.", options: ["was blowing", "blew", "blows"], correct: 0, feedback: "Correct! Atmospheric background." },
      { q: "He ______ (forever / ask) for money.", options: ["was forever asking", "forever asked", "asks forever"], correct: 0, feedback: "Correct! Hyperbolic habit." }
    ]
  }
];

const presentPerfectPractice: QuizCategory[] = [
  {
    id: 'simple',
    title: "Present Perfect Simple",
    desc: "Experiences, results in the present, and recent news.",
    questions: [
      { q: "I ______ (lose) my key. I can't find it anywhere.", options: ["lost", "have lost", "lose"], correct: 1, feedback: "Correct! Result in the present." },
      { q: "______ (you / ever / be) to Australia?", options: ["Did you ever go", "Have you ever been", "Were you ever"], correct: 1, feedback: "Correct! Asking about life experience." },
      { q: "She ______ (not / finish) her homework yet.", options: ["hasn't finished", "didn't finish", "not finished"], correct: 0, feedback: "Correct! 'Yet' suggests uncompleted expectation." },
      { q: "Look! Someone ______ (break) that window.", options: ["broke", "has broken", "breaks"], correct: 1, feedback: "Correct! New information/Result." },
      { q: "I ______ (know) him for a long time.", options: ["know", "have known", "am knowing"], correct: 1, feedback: "Correct! Duration with non-continuous verb." },
      { q: "We ______ (already / see) that movie.", options: ["already saw", "have already seen", "had already seen"], correct: 1, feedback: "Correct! Unspecified time before now." },
      { q: "Where is Jim? He ______ (go) to the shops.", options: ["has gone", "went", "goes"], correct: 0, feedback: "Correct! He is not here now." },
      { q: "I ______ (never / eat) sushi.", options: ["never ate", "have never eaten", "never eat"], correct: 1, feedback: "Correct! Life experience." },
      { q: "______ (you / hear) from George recently?", options: ["Did you hear", "Have you heard", "Do you hear"], correct: 1, feedback: "Correct! News/Recent event." },
      { q: "They ______ (live) in this house since 2010.", options: ["lived", "have lived", "live"], correct: 1, feedback: "Correct! Started in past, continues now (state)." }
    ]
  },
  {
    id: 'continuous',
    title: "Present Perfect Continuous",
    desc: "Duration of activity, recent actions, and visible evidence.",
    questions: [
      { q: "It ______ (rain) for two hours.", options: ["is raining", "has been raining", "rains"], correct: 1, feedback: "Correct! Emphasizes duration." },
      { q: "You look tired. ______ (you / work) hard?", options: ["Have you been working", "Do you work", "Are you working"], correct: 0, feedback: "Correct! Evidence (tiredness) from recent activity." },
      { q: "She ______ (learn) English for six months.", options: ["has been learning", "is learning", "learns"], correct: 0, feedback: "Correct! Duration of an ongoing activity." },
      { q: "I ______ (wait) here since 9 o'clock!", options: ["am waiting", "wait", "have been waiting"], correct: 2, feedback: "Correct! Emphasis on length of time." },
      { q: "Sorry I'm late. ______ (you / wait) long?", options: ["Do you wait", "Are you waiting", "Have you been waiting"], correct: 2, feedback: "Correct! Activity continuing up to now." },
      { q: "My hands are dirty. I ______ (repair) my bike.", options: ["have been repairing", "repaired", "am repairing"], correct: 0, feedback: "Correct! Evidence of recent activity." },
      { q: "How long ______ (you / play) tennis?", options: ["do you play", "have you been playing", "are you playing"], correct: 1, feedback: "Correct! Question about duration." },
      { q: "He ______ (watch) TV all day.", options: ["is watching", "has been watching", "watches"], correct: 1, feedback: "Correct! 'All day' emphasizes continuous duration." },
      { q: "The kitchen is a mess. They ______ (cook).", options: ["have been cooking", "cooked", "cook"], correct: 0, feedback: "Correct! Recent activity with visible result." },
      { q: "I ______ (think) about what you said lately.", options: ["have been thinking", "think", "am thinking"], correct: 0, feedback: "Correct! Mental activity over a recent period." }
    ]
  }
];

const pastPerfectPractice: QuizCategory[] = [
  {
    id: 'simple',
    title: "Past Perfect Simple",
    desc: "Actions completed before another past time.",
    questions: [
      { q: "When I arrived at the party, Paul ______ (already / go) home.", options: ["already went", "had already gone", "has already gone"], correct: 1, feedback: "Correct! Happened before I arrived." },
      { q: "We weren't hungry. We ______ (just / have) lunch.", options: ["just had", "had just had", "have just had"], correct: 1, feedback: "Correct! Action completed before past state (not hungry)." },
      { q: "The house was quiet. Everybody ______ (go) to bed.", options: ["went", "had gone", "was going"], correct: 1, feedback: "Correct! Completed before the past time (was quiet)." },
      { q: "I didn't recognize him. He ______ (change) a lot.", options: ["changed", "had changed", "has changed"], correct: 1, feedback: "Correct! Change happened before I saw him." },
      { q: "The car broke down because I ______ (forget) to put oil in it.", options: ["forgot", "had forgotten", "forget"], correct: 1, feedback: "Correct! The forgetting happened before the breakdown." },
      { q: "She ______ (never / see) a bear before she moved to Alaska.", options: ["never saw", "had never seen", "never sees"], correct: 1, feedback: "Correct! Experience before a past event." },
      { q: "By the time the police arrived, the thief ______ (escape).", options: ["escaped", "had escaped", "escapes"], correct: 1, feedback: "Correct! Escaped before arrival." },
      { q: "I realized I ______ (leave) my wallet at home.", options: ["left", "had left", "leave"], correct: 1, feedback: "Correct! Realized later about an earlier action." },
      { q: "The film ______ (already / start) when we got to the cinema.", options: ["already started", "had already started", "starts"], correct: 1, feedback: "Correct! Started before we arrived." },
      { q: "He told me he ______ (buy) a new computer.", options: ["bought", "had bought", "buys"], correct: 1, feedback: "Correct! Reported speech (bought -> had bought)." }
    ]
  },
  {
    id: 'continuous',
    title: "Past Perfect Continuous",
    desc: "Duration up to a past moment and causes of past states.",
    questions: [
      { q: "I was tired. I ______ (work) hard all day.", options: ["was working", "had been working", "worked"], correct: 1, feedback: "Correct! Duration leading up to a past state." },
      { q: "Her eyes were red. She ______ (cry).", options: ["was crying", "had been crying", "cried"], correct: 1, feedback: "Correct! Evidence of a recent past activity." },
      { q: "We ______ (play) tennis for 30 minutes when it started to rain.", options: ["were playing", "had been playing", "played"], correct: 1, feedback: "Correct! Duration up to the interruption." },
      { q: "Ken gave up smoking. He ______ (smoke) for 30 years.", options: ["smoked", "had been smoking", "was smoking"], correct: 1, feedback: "Correct! Duration up to a past point (gave up)." },
      { q: "The road was wet. It ______ (rain).", options: ["rained", "had been raining", "was raining"], correct: 1, feedback: "Correct! Cause of the past state." },
      { q: "They were angry. They ______ (wait) for over an hour.", options: ["were waiting", "had been waiting", "waited"], correct: 1, feedback: "Correct! Duration causing the feeling." },
      { q: "How long ______ (you / learn) English before you moved to London?", options: ["were you learning", "had you been learning", "did you learn"], correct: 1, feedback: "Correct! Duration before a past event." },
      { q: "I was out of breath. I ______ (run).", options: ["ran", "had been running", "was running"], correct: 1, feedback: "Correct! Recent activity causing a state." },
      { q: "He gained weight because he ______ (eat) too much.", options: ["was eating", "had been eating", "ate"], correct: 1, feedback: "Correct! Repeated action leading to a result." },
      { q: "They ______ (drive) all night, so they were exhausted.", options: ["drove", "had been driving", "were driving"], correct: 1, feedback: "Correct! Duration causing exhaustion." }
    ]
  }
];

const generalQuiz: Question[] = [
  { q: "Look! That man ______ to open the door of your car.", options: ["tries", "is trying", "tried"], correct: 1, feedback: "Correct! We use Present Continuous for actions happening right now (Look!)." },
  { q: "Can you hear those people? What ______ about?", options: ["do they talk", "are they talking", "talk they"], correct: 1, feedback: "Correct! The action is happening now, so we use Present Continuous." },
  { q: "The moon ______ round the earth in about 27 days.", options: ["goes", "is going", "went"], correct: 0, feedback: "Correct! This is a general truth/scientific fact, so we use Present Simple." },
  { q: "I ______ (see) Josh yesterday evening.", options: ["was seeing", "saw", "seen"], correct: 1, feedback: "Correct! 'Yesterday evening' indicates a finished time in the past." },
  { q: "I ______ (walk) along the road when I saw Dave.", options: ["walked", "was walking", "am walking"], correct: 1, feedback: "Correct! You were in the middle of the action when something else happened." },
  { q: "'I ______ (have) a great time here in England.'", options: ["have", "am having", "had"], correct: 1, feedback: "Correct! This is happening around the present time (temporary situation)." }
];

// Content data for tense categories
const tenseContent: Record<string, TenseData> = {
  present: {
    title: "Present Tenses",
    intro: "Learn when to use the Simple Present and Present Continuous.",
    units: [
      {
        title: "Present Simple",
        subtitle: "I do",
        formula: "Subject + verb (s/es)",
        explanation: "Use this for things that are true in general, or for things that happen repeatedly (habits).",
        practiceLink: "present_simple_hub",
        detailedUses: [
          { title: "1. Repeated Actions", desc: "Habits, hobbies, daily events, or scheduled events." },
          { title: "2. Facts or Generalizations", desc: "General truths about people or things." },
          { title: "3. Scheduled Events", desc: "Often used for public transportation or fixed schedules." },
          { title: "4. State Verbs", desc: "For verbs not used in continuous forms (like 'need', 'want', 'know')." }
        ],
        examples: [
          "Nurses <strong>look</strong> after patients in hospitals.",
          "I usually <strong>go</strong> away at weekends.",
          "The cafe <strong>opens</strong> at 7:30 in the morning."
        ],
        icon: "repeat"
      },
      {
        title: "Present Continuous",
        subtitle: "I am doing",
        formula: "Subject + am/is/are + verb-ing",
        explanation: "Use this for an action happening <strong>now</strong> (at the time of speaking) or around now. The action is not finished.",
        practiceLink: "present_continuous_hub",
        detailedUses: [
          { title: "1. Now", desc: "Something is happening at this very moment." },
          { title: "2. Longer Actions in Progress", desc: "An action in progress this week, month, or year." },
          { title: "3. Near Future", desc: "Indicates that something will happen in the near future." },
          { title: "4. Trends & Changes", desc: "Describing a changing situation." }
        ],
        examples: [
          "Sarah is in her car. She <strong>is driving</strong> to work.",
          "Please don't make noise. I <strong>am trying</strong> to work.",
          "Look! It <strong>is raining</strong>."
        ],
        icon: "spinner"
      }
    ]
  },
  past: {
    title: "Past Tenses",
    intro: "Distinguishing between finished actions and actions in progress in the past.",
    units: [
      {
        title: "Past Simple",
        subtitle: "I did",
        formula: "Subject + verb-ed (or irregular)",
        explanation: "Use this for finished actions in the past. We often say when it happened.",
        practiceLink: "past_simple_hub",
        detailedUses: [
          { title: "1. Completed Action", desc: "An action started and finished at a specific time in the past." },
          { title: "2. Series of Actions", desc: "A list of completed actions that happened in sequence." },
          { title: "3. Duration in Past", desc: "An action that starts and stops in the past." },
          { title: "4. Past Habits", desc: "Habits which stopped in the past." }
        ],
        examples: [
          "I <strong>woke</strong> up at 6:00 yesterday.",
          "We <strong>played</strong> tennis yesterday afternoon.",
          "He <strong>didn't</strong> go to work last week."
        ],
        icon: "check-circle"
      },
      {
        title: "Past Continuous",
        subtitle: "I was doing",
        formula: "Subject + was/were + verb-ing",
        explanation: "Use this when you were in the middle of doing something at a certain time in the past.",
        practiceLink: "past_continuous_hub",
        detailedUses: [
          { title: "1. Interrupted Action", desc: "A longer action in the past was interrupted by a shorter action." },
          { title: "2. Specific Time", desc: "In progress at an exact time in the past." },
          { title: "3. Parallel Actions", desc: "Two actions happening at the same time." },
          { title: "4. Atmosphere", desc: "Using parallel actions to describe the scene." }
        ],
        examples: [
          "This time last year I <strong>was living</strong> in Brazil.",
          "What <strong>were</strong> you <strong>doing</strong> at 10 o'clock last night?",
          "It <strong>was raining</strong> when we went out."
        ],
        icon: "film"
      }
    ]
  },
  perfect: {
    title: "Present Perfect Tenses",
    intro: "Linking the past with the present. Covering both Simple and Continuous forms.",
    units: [
      {
        title: "Present Perfect Simple",
        subtitle: "I have done",
        formula: "Subject + have/has + past participle (v3)",
        explanation: "The action is in the past, but the result is in the present. It describes an action at an unspecified time before now.",
        practiceLink: "present_perfect_hub",
        detailedUses: [
          { title: "1. Result in Present", desc: "Something happened in the past and has a result now." },
          { title: "2. Life Experience", desc: "Talking about your life up to now." },
          { title: "3. Change Over Time", desc: "Describing a change that has happened over a period." },
          { title: "4. Duration (State Verbs)", desc: "With non-continuous verbs, shows something continues to now." }
        ],
        examples: [
          "I <strong>have lost</strong> my key. (I don't have it now)",
          "<strong>Have</strong> you <strong>seen</strong> Tom? (Where is he now?)",
          "My English <strong>has really improved</strong> since I moved here."
        ],
        icon: "check-square"
      },
      {
        title: "Present Perfect Continuous",
        subtitle: "I have been doing",
        formula: "Subject + have/has + been + verb-ing",
        explanation: "Use this for an activity that started in the past and has continued up to now, often emphasizing duration.",
        practiceLink: "present_perfect_hub",
        detailedUses: [
          { title: "1. Duration from Past Until Now", desc: "Something started in the past and continues to now." },
          { title: "2. Recently / Lately", desc: "Emphasizes recent behavior without specific duration." },
          { title: "3. Evidence of Activity", desc: "The activity stopped, but you can see the result." }
        ],
        examples: [
          "It <strong>has been raining</strong> for two hours.",
          "She <strong>has been working</strong> at that company for three years.",
          "I <strong>have been working</strong> hard all day. I'm tired."
        ],
        icon: "timer"
      }
    ]
  },
  pastPerfect: {
    title: "Past Perfect Tenses",
    intro: "Going back to a time before the past. Covering Simple and Continuous forms.",
    units: [
      {
        title: "Past Perfect Simple",
        subtitle: "I had done",
        formula: "Subject + had + past participle (v3)",
        explanation: "We use the Past Perfect to indicate that an action happened before another action in the past.",
        practiceLink: "past_perfect_hub",
        detailedUses: [
          { title: "1. Action Before Another Past Action", desc: "Something occurred before another action in the past." },
          { title: "2. Duration Before Past Event", desc: "With state verbs, shows something continued until another past action." },
          { title: "3. Reported Speech", desc: "Present Perfect/Past Simple becomes Past Perfect in reported speech." }
        ],
        examples: [
          "When Sarah arrived at the party, Paul <strong>had</strong> already <strong>gone</strong> home.",
          "We <strong>had had</strong> that car for ten years before it broke down.",
          "The house was dirty. They <strong>hadn't cleaned</strong> it for weeks."
        ],
        icon: "undo"
      },
      {
        title: "Past Perfect Continuous",
        subtitle: "I had been doing",
        formula: "Subject + had + been + verb-ing",
        explanation: "Use this to describe an action that had been happening for a period of time before another action in the past.",
        practiceLink: "past_perfect_hub",
        detailedUses: [
          { title: "1. Duration Before Past Event", desc: "Something started in the past and continued up to another past time." },
          { title: "2. Cause of Past State", desc: "Explaining why a past condition existed." }
        ],
        examples: [
          "I was very tired when I arrived. I <strong>had been working</strong> hard all day.",
          "The game was stopped because it <strong>had been raining</strong> heavily.",
          "Ken gave up smoking. He <strong>had been smoking</strong> for 30 years."
        ],
        icon: "timer"
      }
    ]
  }
};

// Navigation views
type ViewType = 'home' | 'present' | 'past' | 'perfect' | 'pastPerfect' | 
  'present_simple_hub' | 'present_continuous_hub' | 
  'past_simple_hub' | 'past_continuous_hub' |
  'present_perfect_hub' | 'past_perfect_hub' | 
  'quiz' | 'general_quiz';

const TenseMasterWrapper = () => {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [currentQuizData, setCurrentQuizData] = useState<Question[]>([]);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [quizComplete, setQuizComplete] = useState(false);
  const { toast } = useToast();

  const navigate = (view: ViewType) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  const startQuiz = (questions: Question[]) => {
    setCurrentQuizData(questions);
    setCurrentQuizIndex(0);
    setScore(0);
    setShowFeedback(false);
    setSelectedAnswer(null);
    setQuizComplete(false);
    setCurrentView('quiz');
  };

  const handleAnswer = (index: number) => {
    if (showFeedback) return;
    
    setSelectedAnswer(index);
    setShowFeedback(true);
    
    if (index === currentQuizData[currentQuizIndex].correct) {
      setScore(prev => prev + 1);
      toast({
        title: "Correct! ✓",
        description: currentQuizData[currentQuizIndex].feedback,
      });
    }
  };

  const nextQuestion = () => {
    if (currentQuizIndex < currentQuizData.length - 1) {
      setCurrentQuizIndex(prev => prev + 1);
      setShowFeedback(false);
      setSelectedAnswer(null);
    } else {
      setQuizComplete(true);
    }
  };

  const getQuizCategories = (view: ViewType): QuizCategory[] => {
    switch (view) {
      case 'present_simple_hub': return presentSimplePractice;
      case 'present_continuous_hub': return presentContinuousPractice;
      case 'past_simple_hub': return pastSimplePractice;
      case 'past_continuous_hub': return pastContinuousPractice;
      case 'present_perfect_hub': return presentPerfectPractice;
      case 'past_perfect_hub': return pastPerfectPractice;
      default: return [];
    }
  };

  // Home View
  const renderHome = () => (
    <div className="text-center py-12 animate-fade-in">
      <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-merriweather">
        Master English Tenses
      </h1>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
        Interactive grammar guide based on Cambridge Grammar in Use
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {[
          { title: "Present Tenses", desc: "I do vs I am doing", icon: Clock, action: 'present' as ViewType, color: "text-brand-royal" },
          { title: "Past Tenses", desc: "I did vs I was doing", icon: History, action: 'past' as ViewType, color: "text-rose-600" },
          { title: "Present Perfect", desc: "I have done / been doing", icon: CheckSquare, action: 'perfect' as ViewType, color: "text-teal-600" },
          { title: "Past Perfect", desc: "I had done / been doing", icon: Undo2, action: 'pastPerfect' as ViewType, color: "text-purple-600" }
        ].map((card) => (
          <Card 
            key={card.action}
            className="service-card cursor-pointer hover:shadow-lg transition-all group"
            onClick={() => navigate(card.action)}
          >
            <CardHeader className="text-center">
              <div className={`w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform ${card.color}`}>
                <card.icon className="w-8 h-8" />
              </div>
              <CardTitle className="text-lg">{card.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">{card.desc}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="service-card mt-12 max-w-4xl mx-auto text-left">
        <CardHeader>
          <div className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-brand-royal" />
            <CardTitle>Course Overview</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            This interactive guide is designed to help you master the nuances of English verb tenses. 
            Based on standard EFL curriculums, we focus on the differences between 
            <strong> Simple</strong> and <strong>Continuous</strong> forms.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Present Continuous</Badge>
            <Badge variant="secondary">Present Simple</Badge>
            <Badge variant="secondary">Past Simple</Badge>
            <Badge variant="secondary">Past Continuous</Badge>
            <Badge variant="secondary">Present Perfect</Badge>
            <Badge variant="secondary">Past Perfect</Badge>
          </div>
        </CardContent>
      </Card>

      <div className="mt-12">
        <Button 
          size="lg" 
          className="bg-brand-royal hover:bg-brand-navy"
          onClick={() => startQuiz(generalQuiz)}
        >
          <GraduationCap className="w-5 h-5 mr-2" />
          Take General Quiz
        </Button>
      </div>
    </div>
  );

  // Grammar Section View
  const renderGrammarSection = (type: string) => {
    const data = tenseContent[type];
    if (!data) return null;

    const colorClasses: Record<string, { gradient: string; border: string }> = {
      present: { gradient: "from-brand-royal to-blue-600", border: "border-brand-royal" },
      past: { gradient: "from-rose-500 to-pink-600", border: "border-rose-500" },
      perfect: { gradient: "from-teal-500 to-emerald-600", border: "border-teal-500" },
      pastPerfect: { gradient: "from-purple-500 to-violet-600", border: "border-purple-500" }
    };

    const colors = colorClasses[type] || colorClasses.present;

    return (
      <div className="animate-fade-in max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3 font-merriweather">{data.title}</h1>
          <p className="text-lg text-muted-foreground">{data.intro}</p>
        </div>

        <div className="space-y-8">
          {data.units.map((unit, idx) => (
            <Card key={idx} className="service-card overflow-hidden">
              <div className={`bg-gradient-to-r ${colors.gradient} p-6`}>
                <h2 className="text-2xl font-bold text-white font-merriweather">{unit.title}</h2>
                <p className="text-white/80 font-mono text-sm mt-1">{unit.subtitle}</p>
              </div>
              <CardContent className="p-6 md:p-8">
                <div className={`inline-block px-4 py-2 bg-muted rounded-lg text-foreground font-mono text-sm font-semibold border-l-4 ${colors.border} mb-6`}>
                  {unit.formula}
                </div>
                <p className="text-muted-foreground text-lg mb-6" dangerouslySetInnerHTML={{ __html: unit.explanation }} />
                
                {unit.detailedUses && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {unit.detailedUses.map((use, i) => (
                      <div key={i} className="bg-muted/50 p-4 rounded-xl border">
                        <span className="block text-brand-royal font-bold text-sm mb-1">{use.title}</span>
                        <span className="text-muted-foreground text-sm">{use.desc}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="bg-muted/30 rounded-xl p-5 border">
                  <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-3">Examples</h4>
                  <ul className="space-y-3">
                    {unit.examples.map((ex, i) => (
                      <li key={i} className="flex items-start gap-3 text-foreground">
                        <CheckCircle className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                        <span dangerouslySetInnerHTML={{ __html: ex }} />
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Practice Buttons */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.units.filter(u => u.practiceLink).map((unit, idx) => (
            <Button 
              key={idx}
              variant="outline"
              size="lg"
              className="h-auto py-4 flex flex-col items-center gap-2"
              onClick={() => navigate(unit.practiceLink as ViewType)}
            >
              <span className="text-lg font-semibold">Practice {unit.title}</span>
              <span className="text-xs text-muted-foreground">Interactive Exercises</span>
            </Button>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button variant="ghost" onClick={() => navigate('home')}>
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  };

  // Practice Hub View
  const renderPracticeHub = (title: string, categories: QuizCategory[], backView: ViewType, borderColor: string) => (
    <div className="animate-fade-in max-w-6xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3 font-merriweather">{title}</h1>
        <p className="text-lg text-muted-foreground">Select a specific use to practice.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((cat, idx) => (
          <Card 
            key={cat.id}
            className={`service-card cursor-pointer hover:shadow-lg transition-all border-l-4 ${borderColor}`}
            onClick={() => startQuiz(cat.questions)}
          >
            <CardHeader>
              <CardTitle className="text-xl">{cat.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">{cat.desc}</CardDescription>
              <div className="flex items-center text-brand-royal font-bold text-sm">
                Start Quiz ({cat.questions.length} Questions)
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <Button variant="ghost" onClick={() => navigate(backView)}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
      </div>
    </div>
  );

  // Quiz View
  const renderQuiz = () => {
    if (quizComplete) {
      const percentage = (score / currentQuizData.length) * 100;
      let message = "";
      if (percentage === 100) message = "Perfect Score! You're a grammar wizard! 🧙‍♂️";
      else if (percentage >= 70) message = "Great job! You have a solid understanding. 👍";
      else message = "Keep practicing! Review the notes and try again. 💪";

      return (
        <div className="animate-fade-in max-w-2xl mx-auto text-center mt-10">
          <Card className="service-card p-10">
            <div className="w-24 h-24 bg-gradient-to-tr from-brand-royal to-purple-600 rounded-full mx-auto flex items-center justify-center mb-6">
              <Trophy className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-2 font-merriweather">Quiz Complete!</h2>
            <p className="text-muted-foreground mb-8">{message}</p>
            
            <div className="text-6xl font-black text-brand-royal mb-2">
              {score} / {currentQuizData.length}
            </div>
            <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-10">Your Score</p>

            <div className="flex gap-4 justify-center">
              <Button variant="outline" onClick={() => navigate('home')}>
                <Home className="w-4 h-4 mr-2" />
                Home
              </Button>
              <Button 
                className="bg-brand-royal hover:bg-brand-navy"
                onClick={() => startQuiz(currentQuizData)}
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Try Again
              </Button>
            </div>
          </Card>
        </div>
      );
    }

    const q = currentQuizData[currentQuizIndex];
    const total = currentQuizData.length;
    const progress = ((currentQuizIndex + 1) / total) * 100;

    return (
      <div className="animate-fade-in max-w-2xl mx-auto w-full">
        <Card className="service-card p-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest">
              Question {currentQuizIndex + 1}/{total}
            </span>
            <Badge className="bg-teal-100 text-teal-700">Score: {score}</Badge>
          </div>

          <Progress value={progress} className="mb-6 h-2" />

          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-medium text-foreground leading-normal">{q.q}</h3>
          </div>

          <div className="grid gap-3 mb-6">
            {q.options.map((opt, idx) => {
              let buttonClass = "w-full text-left p-4 rounded-xl border-2 transition-all font-medium";
              
              if (showFeedback) {
                if (idx === q.correct) {
                  buttonClass += " border-teal-500 bg-teal-50 text-teal-700";
                } else if (idx === selectedAnswer && idx !== q.correct) {
                  buttonClass += " border-red-500 bg-red-50 text-red-700";
                } else {
                  buttonClass += " border-muted opacity-50";
                }
              } else {
                buttonClass += " border-muted hover:border-brand-royal hover:bg-brand-royal/5 text-foreground";
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  disabled={showFeedback}
                  className={buttonClass}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          {showFeedback && (
            <div className={`rounded-xl p-4 mb-4 ${
              selectedAnswer === q.correct 
                ? 'bg-teal-100 text-teal-800' 
                : 'bg-red-100 text-red-800'
            }`}>
              <p className="text-sm font-semibold">
                {selectedAnswer === q.correct 
                  ? `✓ ${q.feedback}` 
                  : `✗ Incorrect. The correct answer was "${q.options[q.correct]}".`
                }
              </p>
            </div>
          )}

          {showFeedback && (
            <div className="flex justify-end mt-4">
              <Button 
                className="bg-brand-royal hover:bg-brand-navy"
                onClick={nextQuestion}
              >
                {currentQuizIndex === total - 1 ? 'Finish Quiz' : 'Next Question'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}
        </Card>

        <div className="mt-4 text-center">
          <Button variant="ghost" size="sm" onClick={() => navigate('home')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Exit Quiz
          </Button>
        </div>
      </div>
    );
  };

  // Main render logic
  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return renderHome();
      case 'present':
        return renderGrammarSection('present');
      case 'past':
        return renderGrammarSection('past');
      case 'perfect':
        return renderGrammarSection('perfect');
      case 'pastPerfect':
        return renderGrammarSection('pastPerfect');
      case 'present_simple_hub':
        return renderPracticeHub('Present Simple Practice', presentSimplePractice, 'present', 'border-brand-royal');
      case 'present_continuous_hub':
        return renderPracticeHub('Present Continuous Practice', presentContinuousPractice, 'present', 'border-blue-500');
      case 'past_simple_hub':
        return renderPracticeHub('Past Simple Practice', pastSimplePractice, 'past', 'border-rose-500');
      case 'past_continuous_hub':
        return renderPracticeHub('Past Continuous Practice', pastContinuousPractice, 'past', 'border-pink-500');
      case 'present_perfect_hub':
        return renderPracticeHub('Present Perfect Practice', presentPerfectPractice, 'perfect', 'border-teal-500');
      case 'past_perfect_hub':
        return renderPracticeHub('Past Perfect Practice', pastPerfectPractice, 'pastPerfect', 'border-purple-500');
      case 'quiz':
        return renderQuiz();
      default:
        return renderHome();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-20 min-h-screen">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default TenseMasterWrapper;
