import { expect, test } from "bun:test";
import { isGizmoAnswerCorrect } from "../src/data/gizmoPreparation";

test("assemble matches put together", () => {
  expect(isGizmoAnswerCorrect("assemble", "put together")).toBe(true);
  expect(isGizmoAnswerCorrect("assemble", "take apart")).toBe(false);
});

test("dismantle matches take apart", () => {
  expect(isGizmoAnswerCorrect("dismantle", "take apart")).toBe(true);
  expect(isGizmoAnswerCorrect("dismantle", "fix")).toBe(false);
});

test("fasten matches fix", () => {
  expect(isGizmoAnswerCorrect("fasten", "fix")).toBe(true);
  expect(isGizmoAnswerCorrect("fasten", "put together")).toBe(false);
});

test("a five-week job is temporary", () => {
  expect(isGizmoAnswerCorrect("temporary", " Temporary ")).toBe(true);
  expect(isGizmoAnswerCorrect("temporary", "permanent")).toBe(false);
});

test("a position expected to last forever is permanent", () => {
  expect(isGizmoAnswerCorrect("permanent", "PERMANENT")).toBe(true);
  expect(isGizmoAnswerCorrect("permanent", "temporary")).toBe(false);
});