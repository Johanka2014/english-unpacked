import { test, expect } from "bun:test";
import { readFileSync } from "node:fs";

const lesson = readFileSync(new URL("../src/components/bb-upper/ListeningUnit13.tsx", import.meta.url), "utf8");
const sentences = lesson.split("const sentences = [")[1]?.split("];", 1)[0] || "";

test("Exercise 4 identifies the three speakers from the textbook conversation", () => {
  const names = [...sentences.matchAll(/speaker: "([^"]+)"/g)].map((match) => match[1]);
  expect(names).toEqual(["Candice", "Igor", "Paola"]);
});