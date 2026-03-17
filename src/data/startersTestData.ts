// Starters Practice Test Data — Test 1

// ─── Images ───
import listeningPart1Scene from "@/assets/starters/test1-listening-part1-scene.jpg";
import listeningPart3P1 from "@/assets/starters/test1-listening-part3-p1.jpg";
import listeningPart3P2 from "@/assets/starters/test1-listening-part3-p2.jpg";
import listeningPart4Scene from "@/assets/starters/test1-listening-part4-scene.jpg";
import readingPart1P1 from "@/assets/starters/test1-reading-part1-p1.jpg";
import readingPart1P2 from "@/assets/starters/test1-reading-part1-p2.jpg";
import readingPart2Scene from "@/assets/starters/test1-reading-part2-scene.jpg";
import readingPart3 from "@/assets/starters/test1-reading-part3.jpg";
import readingPart4 from "@/assets/starters/test1-reading-part4.jpg";
import readingPart5P1 from "@/assets/starters/test1-reading-part5-p1.jpg";
import readingPart5P2 from "@/assets/starters/test1-reading-part5-p2.jpg";
import speakingScene from "@/assets/starters/test1-speaking-scene.jpg";
import speakingObjects from "@/assets/starters/test1-speaking-objects.jpg";

// ─── Types ───
export interface ListeningPart1Data {
  audio: string;
  sceneImage: string;
  names: string[];
  people: { id: string; label: string; position: string }[];
  correctMatches: Record<string, string>; // name → person id
}

export interface ListeningPart2Question {
  id: number;
  question: string;
  answer: string;
  type: "name" | "number";
}

export interface ListeningPart2Data {
  audio: string;
  examples: { question: string; answer: string }[];
  questions: ListeningPart2Question[];
}

export interface ListeningPart3Option {
  id: string;
  description: string;
}

export interface ListeningPart3Question {
  id: number;
  question: string;
  options: ListeningPart3Option[];
  correctOption: string;
}

export interface ListeningPart3Data {
  audio: string;
  images: string[];
  questions: ListeningPart3Question[];
}

export interface ListeningPart4Data {
  audio: string;
  sceneImage: string;
  instructions: string;
}

export interface ReadingPart1Question {
  id: number;
  statement: string;
  answer: boolean; // true = tick, false = cross
  emoji: string;
}

export interface ReadingPart1Data {
  images: string[];
  examples: { statement: string; answer: boolean; emoji: string }[];
  questions: ReadingPart1Question[];
}

export interface ReadingPart2Question {
  id: number;
  statement: string;
  answer: "yes" | "no";
}

export interface ReadingPart2Data {
  sceneImage: string;
  examples: { statement: string; answer: "yes" | "no" }[];
  questions: ReadingPart2Question[];
}

export interface ReadingPart3Question {
  id: number;
  scrambledLetters: string[];
  answer: string;
  emoji: string;
}

export interface ReadingPart3Data {
  image: string;
  example: { letters: string[]; answer: string; emoji: string };
  questions: ReadingPart3Question[];
}

export interface ReadingPart4Data {
  image: string;
  passage: string; // with {1}, {2} etc. placeholders
  wordBox: string[];
  example: { word: string };
  answers: Record<number, string>;
}

export interface ReadingPart5Question {
  id: number;
  question: string;
  partialAnswer?: string; // e.g. "and blue"
  answer: string;
}

export interface ReadingPart5Data {
  images: string[];
  examples: { question: string; answer: string }[];
  questions: ReadingPart5Question[];
}

export interface SpeakingData {
  audio: string;
  sceneImage: string;
  objectCardsImage: string;
  instructions: string[];
}

// ─── Test 1 Data ───

export const test1ListeningPart1: ListeningPart1Data = {
  audio: "/audio/starters/test1-listening-part1.mp3",
  sceneImage: listeningPart1Scene,
  names: ["Alice", "Eva", "Matt", "Nick", "Hugo", "Grace", "Mark"],
  people: [
    { id: "p1", label: "Boy with ball", position: "top-left" },
    { id: "p2", label: "Girl with hat", position: "top-right" },
    { id: "p3", label: "Boy painting", position: "center-left" },
    { id: "p4", label: "Girl reading", position: "center" },
    { id: "p5", label: "Boy with dog", position: "center-right" },
    { id: "p6", label: "Girl with ice cream", position: "bottom-left" },
    { id: "p7", label: "Boy on bike", position: "bottom-center" },
    { id: "p8", label: "Girl waving", position: "bottom-right" },
  ],
  correctMatches: {
    Alice: "p2",
    Eva: "p4",
    Matt: "p1",
    Nick: "p5",
    Hugo: "p3",
    Grace: "p6",
  },
};

export const test1ListeningPart2: ListeningPart2Data = {
  audio: "/audio/starters/test1-listening-part2.mp3",
  examples: [
    { question: "What's the number of Lucy's house?", answer: "18" },
    { question: "What's the boy's name?", answer: "Tom" },
  ],
  questions: [
    { id: 1, question: "How many sisters has Tom got?", answer: "3", type: "number" },
    { id: 2, question: "What's Lucy's sister's name?", answer: "Grace", type: "name" },
    { id: 3, question: "How old is Lucy's cat?", answer: "2", type: "number" },
    { id: 4, question: "What's Lucy's favourite cat's name?", answer: "Pat", type: "name" },
    { id: 5, question: "How many cats has Lucy got?", answer: "5", type: "number" },
  ],
};

export const test1ListeningPart3: ListeningPart3Data = {
  audio: "/audio/starters/test1-listening-part3.mp3",
  images: [listeningPart3P1, listeningPart3P2],
  questions: [
    {
      id: 1,
      question: "What's Kim wearing?",
      options: [
        { id: "A", description: "A blue jumper" },
        { id: "B", description: "A blue t-shirt" },
        { id: "C", description: "A blue cardigan" },
      ],
      correctOption: "B",
    },
    {
      id: 2,
      question: "Where's Dad's camera?",
      options: [
        { id: "A", description: "On the desk" },
        { id: "B", description: "On the bokcase" },
        { id: "C", description: "Under the chair" },
      ],
      correctOption: "C",
    },
    {
      id: 3,
      question: "What does Tom like?",
      options: [
        { id: "A", description: "Chicken and rice" },
        { id: "B", description: "Egg and chips" },
        { id: "C", description: "Burger and chips" },
      ],
      correctOption: "B",
    },
    {
      id: 4,
      question: "What's Jill drawing?",
      options: [
        { id: "A", description: "A brown and orange cat" },
        { id: "B", description: "A black and white cat" },
        { id: "C", description: "An orange and white cat" },
      ],
      correctOption: "A",
    },
    {
      id: 5,
      question: "What sport does Bill play at school?",
      options: [
        { id: "A", description: "Hockey" },
        { id: "B", description: "Basketball and Football" },
        { id: "C", description: "Hockey and Basketball" },
      ],
      correctOption: "B",
    },
  ],
};

export const test1ListeningPart4: ListeningPart4Data = {
  audio: "/audio/starters/test1-listening-part4.mp3",
  sceneImage: listeningPart4Scene,
  instructions:
    "Listen to the audio and colour the picture. You'll need coloured pencils or crayons for this activity. Print or draw the picture, then colour it as you listen!",
};

export const test1ReadingPart1: ReadingPart1Data = {
  images: [readingPart1P1, readingPart1P2],
  examples: [
    { statement: "This is a nose.", answer: true, emoji: "👃" },
    { statement: "This is a skirt.", answer: false, emoji: "🩳" },
  ],
  questions: [
    { id: 1, statement: "This is a fish.", answer: true, emoji: "🐟" },
    { id: 2, statement: "These are kiwis.", answer: false, emoji: "🥔" },
    { id: 3, statement: "This is a piano.", answer: true, emoji: "🎹" },
    { id: 4, statement: "This is a sofa.", answer: true, emoji: "🛋️" },
    { id: 5, statement: "These are helicopters.", answer: true, emoji: "🚁" },
  ],
};

export const test1ReadingPart2: ReadingPart2Data = {
  sceneImage: readingPart2Scene,
  examples: [
    { statement: "There is a monkey in the tree.", answer: "no" },
    { statement: "The girl has got a bag.", answer: "yes" },
  ],
  questions: [
    { id: 1, statement: "There are two green frogs.", answer: "yes" },
    { id: 2, statement: "The girl is wearing a green skirt.", answer: "no" },
    { id: 3, statement: "Two ducks are swimming in the water.", answer: "yes" },
    { id: 4, statement: "The young boy is catching a ball.", answer: "no" },
    { id: 5, statement: "There is a spider on some flowers.", answer: "yes" },
  ],
};

export const test1ReadingPart3: ReadingPart3Data = {
  image: readingPart3,
  example: { letters: ["b", "o", "a", "t"], answer: "boat", emoji: "⛵" },
  questions: [
    { id: 1, scrambledLetters: ["e", "k", "i", "t"], answer: "kite", emoji: "🪁" },
    { id: 2, scrambledLetters: ["r", "n", "a", "i", "t"], answer: "train", emoji: "🚂" },
    { id: 3, scrambledLetters: ["r", "o", "b", "o", "t"], answer: "robot", emoji: "🤖" },
    { id: 4, scrambledLetters: ["l", "o", "r", "r", "y"], answer: "lorry", emoji: "🚛" },
    { id: 5, scrambledLetters: ["c", "o", "p", "t", "e", "r"], answer: "copter", emoji: "🚁" },
  ],
};

export const test1ReadingPart4: ReadingPart4Data = {
  image: readingPart4,
  passage: `Lizards are animals with four {example}. They have got two {1} and they can see very well. They have got a long {2} too. Their babies come from {3}. Lizards like sitting in the {4} on hot days. They can run and they can {5}, but they cannot fly.`,
  wordBox: ["legs", "tree", "eyes", "swim", "apples", "eggs", "sun", "tail"],
  example: { word: "legs" },
  answers: {
    1: "eyes",
    2: "tail",
    3: "eggs",
    4: "sun",
    5: "swim",
  },
};

export const test1ReadingPart5: ReadingPart5Data = {
  images: [readingPart5P1, readingPart5P2],
  examples: [
    { question: "How many monkeys are there?", answer: "three" },
    { question: "Where is the elephant?", answer: "behind the tree" },
  ],
  questions: [
    { id: 1, question: "What colour is the bird?", answer: "red", partialAnswer: "and blue" },
    { id: 2, question: "Which animal is in the water?", partialAnswer: "the", answer: "monkey" },
    { id: 3, question: "Where is the snake?", answer: "tree" },
    { id: 4, question: "What has the monkey got?", answer: "coconut" },
    { id: 5, question: "Who is taking a photo?", answer: "man" },
  ],
};

export const test1Speaking: SpeakingData = {
  audio: "/audio/starters/test1-speaking.mp3",
  sceneImage: speakingScene,
  objectCardsImage: speakingObjects,
  instructions: [
    "Look at the scene picture. The examiner will ask you questions about it.",
    "Point to different things in the picture and say what they are.",
    "The examiner will show you some object cards and ask you questions.",
    "Listen to the audio for example questions and practice answering them!",
  ],
};
