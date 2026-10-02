import { expect, test } from "vitest";
import { decrypt, encrypt } from "./cipher.ts";

test("Shifting characters works", () => {
  expect(decrypt("D", 3)).toBe("A");
  expect(encrypt("A", 3)).toBe("D");
});

test("Shifting from characters from the end of the alphabet wraps around to the beginning", () => {
  expect(decrypt("A", 3)).toBe("Ø");
  expect(encrypt("Ø", 3)).toBe("A");
});

test("Shifting characters preserves case", () => {
  expect(decrypt("Kdoor", 3)).toBe("Hallo");
  expect(encrypt("a", 3)).toBe("d");
});

test("Shifting characters preserves non-alphabetic characters", () => {
  expect(decrypt("!", 3)).toBe("!");
  expect(encrypt("!", 3)).toBe("!");
});

test("Shifting characters decrypts spaces correctly", () => {
  expect(encrypt(" ", 3)).toBe("c");
  expect(decrypt("c", 3)).toBe(" ");
});

test("Decrypting an encrypted text returns the original", () => {
  const text = "Hei på deg, Bergen!";
  expect(decrypt(encrypt(text, 7), 7)).toBe(text);
});

test("Keys larger than the alphabet wrap around", () => {
  expect(encrypt("A", 33)).toBe(encrypt("A", 3));
});
