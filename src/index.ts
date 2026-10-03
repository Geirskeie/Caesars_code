import { encrypt, decrypt } from "./cipher.ts";
import { crack, type Candidate } from "./crack_code.ts";
import { readTextFile } from "./readTextFile.ts";

function readFileOrExit(filePath: string): string {
  try {
    return readTextFile(filePath);
  } catch {
    console.error(`Could not read file: ${filePath}`);
    process.exit(1);
  }
}

function formatCandidate(c: Candidate): string {
  return `Key ${c.key}  score ${c.score.toFixed(2)} \n\n${c.text} \n`;
}

function runCrack(filePath: string) {
  const candidates = crack(readFileOrExit(filePath), 3);
  console.log(`Top ${candidates.candidates.length} candidates:`);
  for (const candidate of candidates.candidates) {
    console.log(formatCandidate(candidate));
  }
}

function runCipher(key: number, filePath: string, shouldDecrypt: boolean) {
  const text = readFileOrExit(filePath);
  console.log(shouldDecrypt ? decrypt(text, key) : encrypt(text, key));
}

const args = process.argv.slice(2);

const [keyArg, filePath, flag] = args;

if (args[0] === "--crack") {
  const crackPath = args[1];
  if (!crackPath) {
    console.error("Usage: node src/index.ts --crack <filePath>");
    process.exit(1);
  }
  runCrack(crackPath);
  process.exit(0);
}

if (!keyArg || !filePath) {
  console.error("Usage: node src/index.ts <key> <filePath> [-d]");
  process.exit(1);
}

const key = Number(keyArg);
if (!Number.isInteger(key)) {
  console.error(`Key must be a whole number, got "${keyArg}"`);
  process.exit(1);
}

runCipher(key, filePath, flag === "-d");
