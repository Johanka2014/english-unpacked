// Starters Practice Test Data — Test 3

import type {
  ListeningPart1Data,
  ListeningPart2Data,
  ListeningPart3Data,
  ListeningPart4Data,
  ReadingPart1Data,
  ReadingPart2Data,
  ReadingPart3Data,
  ReadingPart4Data,
  ReadingPart5Data,
  SpeakingData,
} from "./startersTestData";

// ─── Images ───
import l1Scene from "@/assets/starters/t3-l1-scene.png.asset.json";
import l2Scene from "@/assets/starters/t3-l2-scene.jpg";
import l3Example from "@/assets/starters/t3-l3-example.jpg";
import l3Q1 from "@/assets/starters/t3-l3-q1.jpg";
import l3Q2 from "@/assets/starters/t3-l3-q2.jpg";
import l3Q3 from "@/assets/starters/t3-l3-q3.jpg";
import l3Q4 from "@/assets/starters/t3-l3-q4.jpg";
import l3Q5 from "@/assets/starters/t3-l3-q5.jpg";
import l4Scene from "@/assets/starters/t3-l4-scene.jpg";
import r1Combined from "@/assets/starters/t3-r1-combined.jpg";
import r2Scene from "@/assets/starters/t3-r2-scene.jpg";
import r3Image from "@/assets/starters/t3-r3.jpg";
import r4Doll from "@/assets/starters/t3-r4-doll.jpg";
import r4WordBox from "@/assets/starters/t3-r4-wordbox.jpg";
import r5P1 from "@/assets/starters/t3-r5-p1.jpg";
import r5P2 from "@/assets/starters/t3-r5-p2.jpg";
import r5P3 from "@/assets/starters/t3-r5-p3.jpg";
import speakingScene from "@/assets/starters/t3-speaking-scene.jpg";
import speakingObjects from "@/assets/starters/t3-speaking-objects.jpg";

export const test3ListeningPart1: ListeningPart1Data = {
  audio: "/audio/starters/test3-listening-part1.mp3",
  sceneImage: l1Scene.url,
  names: ["Alex", "Ben", "Mark", "Sam", "May", "Jill", "Ann"],
  people: [
    { id: "p1", label: "Man playing the guitar on the bench", position: "center-left" },
    { id: "p2", label: "Boy sitting and eating a watermelon", position: "center" },
    { id: "p3", label: "Boy sitting under the tree (example: Ben)", position: "bottom-left" },
    { id: "p4", label: "Girl sitting on the grass and drawing", position: "center-right" },
    { id: "p5", label: "Boy sitting on the grass next to her", position: "center-right" },
    { id: "p6", label: "Boy kicking the football", position: "bottom-center" },
    { id: "p7", label: "Girl riding the bike", position: "top-right" },
    { id: "p8", label: "Person at the ice cream van", position: "top-right" },
  ],
  correctMatches: {
    Mark: "p1",
    Alex: "p2",
    May: "p4",
    Sam: "p6",
    Ann: "p7",
  },
};

export const test3ListeningPart2: ListeningPart2Data = {
  audio: "/audio/starters/test3-listening-part2.mp3",
  sceneImage: l2Scene,
  examples: [
    { question: "How old is May?", answer: "7" },
    { question: "What's May's grandma's name?", answer: "Anna" },
  ],
  questions: [
    { id: 1, question: "How old is Nick?", answer: "8", type: "number" },
    { id: 2, question: "What's Nick's sister's name?", answer: "Kim", type: "name" },
    { id: 3, question: "How old is Nick's sister?", answer: "9", type: "number" },
    { id: 4, question: "How many eggs are in the box?", answer: "4", type: "number" },
    { id: 5, question: "What's Grandpa's name?", answer: "Tom", type: "name" },
  ],
};

export const test3ListeningPart3: ListeningPart3Data = {
  audio: "/audio/starters/test3-listening-part3.mp3",
  images: [l3Example],
  questions: [
    {
      id: 1,
      question: "Which is Bill's house?",
      image: l3Q1,
      options: [
        { id: "A", description: "The small house with a green roof" },
        { id: "B", description: "The big red house with a garden" },
        { id: "C", description: "The long street of houses" },
      ],
      correctOption: "B",
    },
    {
      id: 2,
      question: "How is Sue getting to school today?",
      image: l3Q2,
      options: [
        { id: "A", description: "By car" },
        { id: "B", description: "By bus" },
        { id: "C", description: "By bike" },
      ],
      correctOption: "A",
    },
    {
      id: 3,
      question: "What can Ben see?",
      image: l3Q3,
      options: [
        { id: "A", description: "A speedboat" },
        { id: "B", description: "A sailing boat" },
        { id: "C", description: "A boat with four people" },
      ],
      correctOption: "A",
    },
    {
      id: 4,
      question: "What colour are Ann's eyes?",
      image: l3Q4,
      options: [
        { id: "A", description: "Blue" },
        { id: "B", description: "Brown" },
        { id: "C", description: "Green" },
      ],
      correctOption: "C",
    },
    {
      id: 5,
      question: "What sport is Mark playing?",
      image: l3Q5,
      options: [
        { id: "A", description: "Baseball" },
        { id: "B", description: "Tennis" },
        { id: "C", description: "Football" },
      ],
      correctOption: "B",
    },
  ],
};

export const test3ListeningPart4: ListeningPart4Data = {
  audio: "/audio/starters/test3-listening-part4.mp3",
  sceneImage: l4Scene,
  instructions:
    "Listen and colour the shells in the bedroom. You'll need coloured pencils or crayons. Print the picture, then colour it as you listen! (Example: the shell on the floor is blue.)",
};

export const test3ReadingPart1: ReadingPart1Data = {
  images: [r1Combined],
  examples: [
    { statement: "This is a face.", answer: true, emoji: "🙂" },
    { statement: "This is a flat.", answer: false, emoji: "🏠" },
  ],
  questions: [
    { id: 1, statement: "This is a page.", answer: true, emoji: "📖" },
    { id: 2, statement: "This is a radio.", answer: true, emoji: "📻" },
    { id: 3, statement: "These are baths.", answer: false, emoji: "🛏️" },
    { id: 4, statement: "These are trains.", answer: true, emoji: "🚆" },
    { id: 5, statement: "This is a beach.", answer: false, emoji: "🛣️" },
  ],
};

export const test3ReadingPart2: ReadingPart2Data = {
  sceneImage: r2Scene,
  examples: [
    { statement: "The woman with brown hair has got some rice and chicken.", answer: "yes" },
    { statement: "The girl is wearing black shorts.", answer: "no" },
  ],
  questions: [
    { id: 1, statement: "The man is talking on the phone.", answer: "yes" },
    { id: 2, statement: "The shop door is closed.", answer: "no" },
    { id: 3, statement: "There is some bread and fruit behind the woman with blonde hair.", answer: "yes" },
    { id: 4, statement: "The girl has got long brown hair.", answer: "yes" },
    { id: 5, statement: "The young boy is playing with his sock.", answer: "no" },
  ],
};

export const test3ReadingPart3: ReadingPart3Data = {
  image: r3Image,
  example: { letters: ["h", "i", "a", "c", "r"], answer: "chair", emoji: "🪑" },
  questions: [
    { id: 1, scrambledLetters: ["s", "e", "d", "k"], answer: "desk", emoji: "🗄️" },
    { id: 2, scrambledLetters: ["u", "r", "r", "l", "e"], answer: "ruler", emoji: "📏" },
    { id: 3, scrambledLetters: ["e", "b", "u", "r", "b", "r"], answer: "rubber", emoji: "🧽" },
    { id: 4, scrambledLetters: ["m", "o", "c", "p", "t", "u", "e", "r"], answer: "computer", emoji: "🖥️" },
    { id: 5, scrambledLetters: ["u", "d", "p", "o", "c", "b", "r", "a"], answer: "cupboard", emoji: "🚪" },
  ],
};

export const test3ReadingPart4: ReadingPart4Data = {
  image: r4Doll,
  wordBoxImage: r4WordBox,
  title: "A doll",
  emoji: "🧸",
  passage: `This doll has got a {example}, two eyes, a nose and a {1}. He has got two arms but he cannot throw a {2}. He has got two {3} but he cannot run or jump. He lives in a {4} in a house. Young {5} play with him.`,
  wordBox: ["face", "mouth", "ear", "children", "ball", "bedroom", "kitchen", "legs"],
  example: { word: "face" },
  answers: {
    1: "mouth",
    2: "ball",
    3: "legs",
    4: "bedroom",
    5: "children",
  },
};

export const test3ReadingPart5: ReadingPart5Data = {
  images: [r5P1, r5P2, r5P3],
  examples: [
    { question: "Who is driving the car?", answer: "Dad" },
    { question: "What time of day is it?", answer: "the afternoon" },
  ],
  questions: [
    { id: 1, question: "How many people are in the car?", answer: "four" },
    { id: 2, question: "What is Mum doing?", answer: "painting" },
    { id: 3, question: "What is the boy looking at?", answer: "spider" },
    { id: 4, question: "What has the bird got?", answer: "fish" },
    { id: 5, question: "Who is pointing at the bird?", answer: "girl" },
  ],
};

export const test3Speaking: SpeakingData = {
  audio: "/audio/starters/test3-speaking.mp3",
  sceneImage: speakingScene,
  objectCardsImage: speakingObjects,
  instructions: [
    "Look at the hallway scene picture. The examiner will ask you questions about it.",
    "Point to the things in the picture (the clock, the mirror, the flowers, the shoes, the dog in its basket) and say what they are.",
    "The examiner will show you object cards (a bus, a game, a coconut, a sofa, glasses, a pencil, a photo and an onion) and ask you questions.",
    "Listen to the audio for the example questions, then try to answer them yourself!",
  ],
};
