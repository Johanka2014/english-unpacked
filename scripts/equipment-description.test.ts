import { expect, test } from "bun:test";
import { isDescriptionAnswerCorrect } from "../src/data/equipmentDescription";

test("accepts pliers and scissors in either order without accepting duplicates", () => {
  for (const answers of [{ 2: "pliers", 3: "scissors" }, { 2: "scissors", 3: "pliers" }]) {
    expect(isDescriptionAnswerCorrect(2, answers)).toBe(true);
    expect(isDescriptionAnswerCorrect(3, answers)).toBe(true);
  }
  expect(isDescriptionAnswerCorrect(2, { 2: "pliers", 3: "pliers" })).toBe(false);
});

test("checks the three shape and object gaps and tolerates typed spacing", () => {
  expect(isDescriptionAnswerCorrect(4, { 4: " Semi Circular " })).toBe(true);
  expect(isDescriptionAnswerCorrect(4, { 4: "round" })).toBe(false);
  expect(isDescriptionAnswerCorrect(5, { 5: " RING " })).toBe(true);
  expect(isDescriptionAnswerCorrect(5, { 5: "pliers" })).toBe(false);
  expect(isDescriptionAnswerCorrect(6, { 6: "round" })).toBe(true);
  expect(isDescriptionAnswerCorrect(6, { 6: "semi-circular" })).toBe(false);
});