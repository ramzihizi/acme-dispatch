
// Greatest common divisor/factor 
const gcd = (a: number, b: number): number => {
    if (b === 0) return a;
    return gcd(b, a % b);
    }



export { gcd };