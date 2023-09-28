import { expect, test } from "bun:test";
import { gcd } from "../../helpers/mathUtils";
test('should calculate gcd correctly', () => {
    expect(gcd(56, 48)).toBe(8);
    expect(gcd(101, 103)).toBe(1);
    expect(gcd(20, 25)).toBe(5);
  });