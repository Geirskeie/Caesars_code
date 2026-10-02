// Including space as the 30th character at the end.
// Outside of the function, so that it is not redefined every time the function is called.
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅ" + " ";
const lowerAlphabet = alphabet.toLowerCase();

function cipher(text: string, shift: number): string {
  const shiftedText = text.split("").map((char) => {
    // Convert the character to lowercase and find its index in the alphabet, without changing the original character's case.
    const index = lowerAlphabet.indexOf(char.toLowerCase());
    if (index === -1) return char;
    const shiftedIndex = mod(index + shift, alphabet.length);
    if (char !== char.toLowerCase()) {
      return alphabet[shiftedIndex];
    }
    return lowerAlphabet[shiftedIndex];
  });
  return shiftedText.join("");
}

function mod(n: number, m: number): number {
  return ((n % m) + m) % m;
}

export function encrypt(text: string, key: number): string {
  return cipher(text, key);
}

export function decrypt(text: string, key: number): string {
  return cipher(text, -key);
}
