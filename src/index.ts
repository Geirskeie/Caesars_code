import { encrypt, decrypt } from "./cipher.ts";
import { readTextFile } from "./readTextFile.ts";

function main(shift: number, filePath: string, shouldDecrypt: boolean) {
  let text: string;
  try {
    text = readTextFile(filePath);
  } catch {
    console.error(`Could not read file: ${filePath}`);
    process.exit(1);
  }

  if (shouldDecrypt) {
    console.log(decrypt(text, shift));
  } else {
    console.log(encrypt(text, shift));
  }
}
const [keyArg, filePath, flag] = process.argv.slice(2);

if (!keyArg || !filePath) {
  console.error("Usage: node src/index.ts <key> <filePath> [-d]");
  process.exit(1);
}

const key = Number(keyArg);
if (!Number.isInteger(key)) {
  console.error(`Key must be a whole number, got "${keyArg}"`);
  process.exit(1);
}

main(key, filePath, flag === "-d");
