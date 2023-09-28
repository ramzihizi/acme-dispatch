import { expect, test } from "bun:test";
import { countConsonants, countVowels } from "../../helpers/stringManipulation";

test("should count vowels correctly", () => {
    expect(countVowels('hello')).toBe(2);
    expect(countVowels('world')).toBe(1);
    expect(countVowels('aeiou')).toBe(5);
    expect(countVowels('')).toBe(0);
});


test('should count consonants correctly', () => {
    expect(countConsonants('hello')).toBe(3);
expect(countConsonants('world')).toBe(4);
    expect(countConsonants('bcdfgh')).toBe(6);
    expect(countConsonants('')).toBe(0);
  });