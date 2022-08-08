function calculateRectangleArea(L, l) {
  return L * l;
}

console.warn(`Folosind functia calculateRectangleArea() afiseaza suprafata unui dreptunghi de 4 pe 3
`);

console.log(calculateRectangleArea(4, 3));

console.warn(`Afiseaza suprafata totala a unor dreptunghiuri de 5 pe 3, respectiv 3 pe 2. Foloseste variabile.
`);
console.log(calculateRectangleArea(5, 3));
console.log(calculateRectangleArea(3, 2));

console.warn(`Calculeaza intr-o variabila numita squareSurface aria unui patrat de 3 pe 3.
`);

const squareSurface = calculateRectangleArea(3, 3);
console.log(squareSurface);

console.warn(
  `Folosind functia calculateRectangleArea() afiseaza suprafata unui dreptunghi de 12 pe 9`,
);
const rectangleArea = calculateRectangleArea(12, 9);
console.log(rectangleArea);

console.warn(`Afiseaza suprafata totala a trei dreptunghiuri de 15 pe 31,  8 pe 9, respectiv 10 pe 5. Foloseste variabile.
`);
const firstRectangle = calculateRectangleArea(15, 31);
const secondRectangle = calculateRectangleArea(8, 9);
const thirdRectangle = calculateRectangleArea(10, 5);
const rectangleSum = firstRectangle + secondRectangle + thirdRectangle;
console.log(rectangleSum);

console.warn(
  `Calculeaza intr-o variabila numita anotherSquare aria unui patrat de 8 pe 8.`,
);
const anotherSquare = calculateRectangleArea(8, 8);
console.log(anotherSquare);
