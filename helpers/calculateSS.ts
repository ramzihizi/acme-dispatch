import { countConsonants, countVowels } from "./stringManipulation";
import { gcd } from "./mathUtils";

const ADDITIONAL_MULTIPLIER = 1.5;

const calculateSS = (streetName: string, driverName: string): number => {
  const streetLength = streetName.length;
  // base Suitability Score
  let baseSS = 0;

  if (streetLength % 2 === 0) {
    baseSS = countVowels(driverName) * 1.5;
  } else {
    baseSS = countConsonants(driverName);
  }

  if (gcd(streetLength, driverName.length) > 1) {
    baseSS *= ADDITIONAL_MULTIPLIER;
  }

  return baseSS;
};

export default calculateSS;
