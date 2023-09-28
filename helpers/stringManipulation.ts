
const countVowels = (str: string): number => {
  return Array.from(str).filter((char) => "aeiou".includes(char.toLowerCase()))
    .length;
};

const countConsonants = (str: string): number => {
  return Array.from(str).filter((char) =>
    "bcdfghjklmnpqrstvwxyz".includes(char.toLowerCase())
  ).length;
};

export { countVowels, countConsonants };