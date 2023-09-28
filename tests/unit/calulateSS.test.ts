
import { expect, test } from "bun:test";
import  calculateSS  from "../../helpers/calculateSS";
test('calculateSS should correctly calculate the Suitability Score for even-length street names', () => {
  const streetName = "Fake Dr.";
  const driverName = "Daniel Davidson";
  const result = calculateSS(streetName, driverName);
  expect(result).toBe(9); // 3 vowels in "Daniel", 3 * 1.5 = 4.5, 4.5 * 1.5 = 6.75, 6.75 * 1.5 = 9
  // TODO: account for the .(dot) at the end of the street name.
});

test('calculateSS should correctly calculate the Suitability Score for odd-length street names', () => {
  const streetName = "Real Street";
  const driverName = "David";
  const result = calculateSS(streetName, driverName);
  expect(result).toBe(3); // 3 consonants in "David"
});

test('calculateSS should add a 50% bonus for common factors', () => {
  const streetName = "Street";
  const driverName = "Daniel";
  const result = calculateSS(streetName, driverName);
  expect(result).toBe(6.75); // 3 vowels in "Daniel", 3 * 1.5 = 4.5, 4.5 * 1.5 (bonus) = 6.75
});
