// Starters Practice Test Data — Test 2

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
import l1Scene from "@/assets/starters/t2-l1-scene.jpg";
import l2Scene from "@/assets/starters/t2-l2-scene.jpg";
import l3Example from "@/assets/starters/t2-l3-example.jpg";
import l3Q1 from "@/assets/starters/t2-l3-q1.jpg";
import l3Q2 from "@/assets/starters/t2-l3-q2.jpg";
import l3Q3 from "@/assets/starters/t2-l3-q3.jpg";
import l3Q4 from "@/assets/starters/t2-l3-q4.jpg";
import l3Q5 from "@/assets/starters/t2-l3-q5.jpg";
import l4Scene from "@/assets/starters/t2-l4-scene.jpg";
import r1Combined from "@/assets/starters/t2-r1-combined-all.png.asset.json";

import r2Scene from "@/assets/starters/t2-r2-scene.jpg";
import r3Image from "@/assets/starters/t2-r3.jpg";
import r4Tree from "@/assets/starters/t2-r4-tree.jpg";
import r4WordBox from "@/assets/starters/t2-r4-wordbox.jpg";
import r5P1 from "@/assets/starters/t2-r5-p1.jpg";
import r5P2 from "@/assets/starters/t2-r5-p2.jpg";
import r5P3 from "@/assets/starters/t2-r5-p3.jpg";
import speakingScene from "@/assets/starters/t2-speaking-scene.jpg";
import speakingObjects from "@/assets/starters/t2-speaking-objects.jpg";

export const test2ListeningPart1: ListeningPart1Data = {
  audio: "/audio/starters/test2-listening-part1.mp3",
  sceneImage: l1Scene,
  names: ["Sue", "Anna", "Lucy", "Bill", "Dan", "Tom"],
  people: [
    { id: "p1", label: "Boy on the left with books on his desk", position: "bottom-left" },
    { id: "p2", label: "Boy with glasses putting his hand up", position: "bottom-left" },
    { id: "p3", label: "Girl looking in her bag", position: "center" },
    { id: "p4", label: "Boy writing in his book", position: "center-right" },
    { id: "p5", label: "Woman in the blue jacket, smiling", position: "top-center" },
    { id: "p6", label: "Girl writing numbers on the board", position: "top-right" },
    { id: "p7", label: "Girl at the door with a backpack (example: Kim)", position: "top-center" },
  ],
  correctMatches: {
    Anna: "p6",
    Lucy: "p5",
    Tom: "p2",
    Sue: "p3",
    Bill: "p4",
  },
};

export const test2ListeningPart2: ListeningPart2Data = {
  audio: "/audio/starters/test2-listening-part2.mp3",
  sceneImage: l2Scene,
  examples: [
    { question: "What's the girl's name?", answer: "Jill" },
    { question: "How old is she?", answer: "8" },
  ],
  questions: [
    { id: 1, question: "How old is Alex?", answer: "7", type: "number" },
    { id: 2, question: "What's Alex's cousin's name?", answer: "Grace", type: "name" },
    { id: 3, question: "How many friends has Alex got?", answer: "6", type: "number" },
    { id: 4, question: "There is a boy with black hair. What's his name?", answer: "Ben", type: "name" },
    { id: 5, question: "How many children are in Alex's class?", answer: "19", type: "number" },
  ],
};

export const test2ListeningPart3: ListeningPart3Data = {
  audio: "/audio/starters/test2-listening-part3.mp3",
  images: [l3Example],
  questions: [
    {
      id: 1,
      question: "What is Nick doing?",
      image: l3Q1,
      options: [
        { id: "A", description: "Riding his bike" },
        { id: "B", description: "Playing baseball" },
        { id: "C", description: "Playing table tennis" },
      ],
      correctOption: "B",
    },
    {
      id: 2,
      question: "Which animal does Sue like?",
      image: l3Q2,
      options: [
        { id: "A", description: "Tigers" },
        { id: "B", description: "Giraffes" },
        { id: "C", description: "Horses" },
      ],
      correctOption: "A",
    },
    {
      id: 3,
      question: "What is Matt wearing?",
      image: l3Q3,
      options: [
        { id: "A", description: "A white shirt" },
        { id: "B", description: "A green T-shirt" },
        { id: "C", description: "A white T-shirt" },
      ],
      correctOption: "C",
    },
    {
      id: 4,
      question: "What is Pat having for dinner?",
      image: l3Q4,
      options: [
        { id: "A", description: "Beans and carrots" },
        { id: "B", description: "A burger and chips" },
        { id: "C", description: "Fish, potatoes and beans" },
      ],
      correctOption: "C",
    },
    {
      id: 5,
      question: "What colour is Grandma's jacket?",
      image: l3Q5,
      options: [
        { id: "A", description: "Brown" },
        { id: "B", description: "Blue" },
        { id: "C", description: "Green" },
      ],
      correctOption: "B",
    },
  ],
};

export const test2ListeningPart4: ListeningPart4Data = {
  audio: "/audio/starters/test2-listening-part4.mp3",
  sceneImage: l4Scene,
  instructions:
    "Listen and colour the lorries in the playground. You'll need coloured pencils or crayons. Print the picture, then colour it as you listen! (Example: the lorry next to the tree is red.)",
  wordwallLink: "https://wordwall.net/resource/117822043/collins-test-2-listen-and-colour?wwmethod=link",
};

export const test2ReadingPart1: ReadingPart1Data = {
  images: [r1Combined.url],
  examples: [
    { statement: "This is a polar bear.", answer: false, emoji: "🦒" },
    { statement: "This is a shop.", answer: true, emoji: "🏬" },
  ],
  questions: [
    { id: 1, statement: "This is a skirt.", answer: false, emoji: "👕" },
    { id: 2, statement: "These are dolls.", answer: true, emoji: "🪆" },
    { id: 3, statement: "This is a bus.", answer: true, emoji: "🚌" },
    { id: 4, statement: "These are apples.", answer: false, emoji: "🥚" },
    { id: 5, statement: "This is a foot.", answer: true, emoji: "🦶" },
  ],
};

export const test2ReadingPart2: ReadingPart2Data = {
  sceneImage: r2Scene,
  examples: [
    { statement: "The boy has got an ice cream.", answer: "yes" },
    { statement: "The man is flying a kite.", answer: "no" },
  ],
  questions: [
    { id: 1, statement: "The lizard is sitting under the tree.", answer: "no" },
    { id: 2, statement: "The young girl is playing on the sand.", answer: "yes" },
    { id: 3, statement: "There is some bread between the pineapple and the grapes.", answer: "yes" },
    { id: 4, statement: "The young girl's T-shirt is green and white.", answer: "no" },
    { id: 5, statement: "There are a lot of shells in the water.", answer: "no" },
  ],
};

export const test2ReadingPart3: ReadingPart3Data = {
  image: r3Image,
  example: { letters: ["l", "m", "k", "i"], answer: "milk", emoji: "🥛" },
  questions: [
    { id: 1, scrambledLetters: ["l", "e", "i", "m"], answer: "lime", emoji: "🍋‍🟩" },
    { id: 2, scrambledLetters: ["o", "n", "o", "n", "i"], answer: "onion", emoji: "🧅" },
    { id: 3, scrambledLetters: ["e", "j", "c", "i", "u"], answer: "juice", emoji: "🧃" },
    { id: 4, scrambledLetters: ["g", "e", "n", "a", "o", "r"], answer: "orange", emoji: "🍊" },
    { id: 5, scrambledLetters: ["l", "p", "n", "e", "a", "i", "p", "e", "p"], answer: "pineapple", emoji: "🍍" },
  ],
};

export const test2ReadingPart4: ReadingPart4Data = {
  image: r4Tree,
  wordBoxImage: r4WordBox,
  title: "Trees",
  emoji: "🌳",
  passage: `Trees are very big. They are {example} and {1}. You find trees in a park or a {2}. You do not find them in a room in a {3}. Birds, small animals and {4} live in them. Boys and {5} like sitting under trees when it is hot.`,
  wordBox: ["brown", "girls", "burger", "spiders", "green", "picture", "garden", "house"],
  example: { word: "brown" },
  answers: {
    1: "green",
    2: "garden",
    3: "house",
    4: "spiders",
    5: "girls",
  },
};

export const test2ReadingPart5: ReadingPart5Data = {
  images: [r5P1, r5P2, r5P3],
  examples: [
    { question: "How many cars are there in the street?", answer: "one" },
    { question: "Where is the bus?", answer: "behind the car" },
  ],
  questions: [
    { id: 1, question: "Who is pointing at the watermelons?", answer: "woman" },
    { id: 2, question: "Who is wearing glasses?", answer: "man" },
    { id: 3, question: "What has the boy got in his hand?", answer: "banana" },
    { id: 4, question: "What colour is the cat?", answer: "black", partialAnswer: "and white" },
    { id: 5, question: "What are the birds eating?", answer: "apple" },
  ],
};

export const test2Speaking: SpeakingData = {
  audio: "/audio/starters/test2-speaking.mp3",
  sceneImage: speakingScene,
  objectCardsImage: speakingObjects,
  instructions: [
    "Look at the farm scene picture. The examiner will ask you questions about it.",
    "Point to the animals and things in the picture and say what they are.",
    "The examiner will show you object cards (a shell, a guitar, a motorbike, a mango, socks and a television) and ask you questions.",
    "Listen to the audio for the example questions, then listen again with the answers to check!",
  ],
  wordwallLink: "https://wordwall.net/resource/117823910/collins-test-2-speaking?wwmethod=link",
};
