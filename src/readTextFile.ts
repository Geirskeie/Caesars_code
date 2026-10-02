import { readFileSync } from "fs";

export function readTextFile(filePath: string): string {
  const file = readFileSync(filePath, "utf-8");
  return file;
}
