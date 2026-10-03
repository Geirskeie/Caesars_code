import { readTextFile } from "../src/readTextFile.ts";
import { countFrequencies } from "../src/crack_code.ts";

const text = readTextFile("data/gatsby.txt");
const frequencies = countFrequencies(text);
console.log(JSON.stringify(frequencies.map((f) => Number(f.toFixed(4)))));
