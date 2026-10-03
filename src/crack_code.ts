import { decrypt, lowerAlphabet } from "./cipher.ts";
import { readTextFile } from "./readTextFile.ts";

const expected: number[] = [];

// Frequencies of letters in the English language, including space as the 30th character at the end.
const englishFrequencies = [
  0.0676, 0.0129, 0.0192, 0.0388, 0.1003, 0.0171, 0.0198, 0.049, 0.0568, 0.0016,
  0.0078, 0.0325, 0.0216, 0.0567, 0.0641, 0.013, 0.0006, 0.0468, 0.05, 0.0754,
  0.0236, 0.0075, 0.0213, 0.0012, 0.0182, 0.0006, 0.0001, 0.0001, 0.0001,
  0.1757,
];

export function countFrequencies(text: string): number[] {
  const frequencies: number[] = new Array(lowerAlphabet.length).fill(0);
  let total = 0;
  for (const char of text) {
    const index = lowerAlphabet.indexOf(char.toLowerCase());
    if (index !== -1) {
      frequencies[index] = (frequencies[index] || 0) + 1;
      total++;
    }
  }
  if (total === 0) return frequencies;
  return frequencies.map((count) => count / total);
} // andel per tegn

function chiSquared(observed: number[]): number {
  let sum = 0;
  for (let i = 0; i < observed.length; i++) {
    const o = observed[i];
    const e = englishFrequencies[i];

    sum += (o - e) ** 2 / e;
  }
  return sum;
}

export type Candidate = { key: number; score: number; text: string };

export function crack(text: string, topN = 3): { candidates: Candidate[] } {
  const candidates: Candidate[] = [];

  for (let key = 0; key < lowerAlphabet.length; key++) {
    const score = chiSquared(countFrequencies(decrypt(text, key)));
    const decryptedText = decrypt(text, key);
    candidates.push({ key, score, text: decryptedText });

    candidates.sort((a, b) => a.score - b.score);
  }

  return {
    candidates: candidates.slice(0, topN),
  };
}
