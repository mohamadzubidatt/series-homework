import { readFileSync } from "node:fs"; // readFileSync reads a file and returns its text

export const loadData = () => {
  const text = readFileSync("series.json", "utf-8"); // read series.json as text
  return JSON.parse(text); // turn the JSON text into a JavaScript object and return it
};
