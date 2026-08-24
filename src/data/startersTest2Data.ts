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
import r1P1 from "@/assets/starters/t2-r1-p1.jpg";
import r1P2 from "@/assets/starters/t2-r1-p2.jpg";
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
  names: ["Kim", "Anna", "Lucy", "Tom", "Sue", "Bill"],
  people: [
    { id: "p1", label: "Girl coming into the classroom with books", position: "left" },
    { id: "p2", label: "Girl writing numbers on the board", position: "top-center" },
    { id: "p3", label: "Teacher standing and smiling", position: "top-right" },
    { id: "p4", label: "Boy with glasses putting his hand up", position: "center" },
    { id: "p5", label: "Girl looking in her bag", position: "bottom-left" },
    { id: "p6", label: "Boy sitting next to the girl with the bag", position: "bottom-right" },
  ],
  correctMatches: {
    Kim: "p1",
    Anna: "p2",
    Lucy: "p3",
    Tom: "p4",
    Sue: "p5",
    Bill: "p6",
  },
};

export const test2ListeningPart2: ListeningPart2Data = {
  audio: "/audio/starters/test2-listening-part2.mp3",
  sceneImage: l2Scene,
  examples: [
    { question: "What's the girl's name?", answer: "May" },
    { question: "How many people are in her family?", answer: "4" },
  ],
  questions: [
    { id: 1, question: "How old is May's brother?", answer: "7", type: "number" },
    { id: 2, question: "What's May's friend's name?", answer: "Grace", type: "name" },
    { id: 3, question: "How many friends are at the party?", answer: "6", type: "number" },
    { id: 4, question: "What's the name of the boy with the ball?", answer: "Ben", type: "name" },
    { id: 5, question: "How many children are in May's class?", answer: "19", type: "number" },
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
    "Listen and colour the picture. You'll need coloured pencils or crayons. Print the picture, then colour it as you listen! (blue kite, orange ball, purple book, yellow pencil, pink clock)",
};

export const test2ReadingPart1: ReadingPart1Data = {
  images: [r1P1, r1P2],
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
    { statement: "The children are in a park.", answer: "yes" },
    { statement: "There is a lion in the tree.", answer: "no" },
  ],
  questions: [
    { id: 1, statement: "The boy is riding a horse.", answer: "no" },
    { id: 2, statement: "There are three birds in the picture.", answer: "yes" },
    { id: 3, statement: "The girl is wearing a red T-shirt.", answer: "yes" },
    { id: 4, statement: "There is a dog under the table.", answer: "no" },
    { id: 5, statement: "The woman is eating an ice cream.", answer: "no" },
  ],
};

export const test2ReadingPart3: ReadingPart3Data = {
  image: r3Image,
  example: { letters: ["p", "a", "e", "r"], answer: "pear", emoji: "🍐" },
  questions: [
    { id: 1, scrambledLetters: ["l", "e", "i", "m"], answer: "lime", emoji: "🍋" },
    { id: 2, scrambledLetters: ["o", "n", "o", "n", "i"], answer: "onion", emoji: "🧅" },
    { id: 3, scrambledLetters: ["e", "j", "c", "i", "u"], answer: "juice", emoji: "🧃" },
    { id: 4, scrambledLetters: ["g", "e", "n", "a", "o", "r"], answer: "orange", emoji: "🍊" },
    { id: 5, scrambledLetters: ["l", "p", "n", "e", "a", "i", "p", "e", "p"], answer: "pineapple", emoji: "🍍" },
  ],
};

export const test2ReadingPart4: ReadingPart4Data = {
  image: r4Tree,
  wordBoxImage: r4WordBox,
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
    { question: "Where are the people?", answer: "in a kitchen" },
    { question: "What is the woman making?", answer: "a cake" },
  ],
  questions: [
    { id: 1, question: "Who is wearing an apron?", answer: "woman" },
    { id: 2, question: "Who is drinking a cup of tea?", answer: "man" },
    { id: 3, question: "What is the boy eating?", answer: "banana" },
    { id: 4, question: "What colour is the cat?", answer: "black", partialAnswer: "and white" },
    { id: 5, question: "What is on the table?", answer: "apple", partialAnswer: "" },
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
};
