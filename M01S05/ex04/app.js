const calculateRectangleArea = (width, height) => {
  return width * height;
};

console.warn(`Calculeaza suprafata de tapet necesara pentru o camera de 6 pe 4 m cu tavan inalt de 2.5m,
 stiind ca exista o usa de 2.2 pe 1.5 si o suprafata de ferestre de 2 pe 1.5.
  “Suprafata de tapet necesara este: xxx metri patrati.”`);

const longWallSurface = calculateRectangleArea(6, 2.5);
const shortWallSurface = calculateRectangleArea(4, 2.5);
const totalWallSurface = (longWallSurface + shortWallSurface) * 2;
const doorSurface = calculateRectangleArea(2.2, 1.5);
const windowSurface = calculateRectangleArea(2, 1.5);
const requiredSurface = totalWallSurface - doorSurface - windowSurface;

console.log(`Suprafata de tapet este: ${requiredSurface} metri patrati.`);

console.warn(`Creaza o functie wrapper numita calculateSquareArea() pentru calculateRectangleArea() care sa primeasca ca parametru latura unui patrat si sa calculeze
 suprafata acestuia.O functie wrapper este o functie care “imbraca” o functie existenta pentru a-i aduce imbunatatiri,
  extra cod sau pentru a-i limita in mod intentionat capacitatile.
`);
const calculateSquareArea = (length) => {
  return calculateRectangleArea(length, length);
};

console.warn(`Calculeaza suprafata de tapet necesara pentru o camera de 12 pe 9 m cu tavan inalt de 2.5m, stiind ca exista o usa de 3 pe 2 si
o suprafata de ferestre de 3 pe 2. “Suprafata de tapet necesara este xxx metri patrati.”
`);
const longWallSurface1 = calculateRectangleArea(12, 2.5);
const shortWallSurface1 = calculateRectangleArea(9, 2.5);
const totalWallSurface1 = (longWallSurface1 + shortWallSurface1) * 2;
const doorSurface1 = calculateRectangleArea(3, 2);
const windowSurface1 = calculateRectangleArea(3, 2);
const requiredSurface1 = totalWallSurface1 - doorSurface1 - windowSurface1;

console.log(
  `Suprafata de tapet necesara este: ${requiredSurface1} metri patrati.`,
);

console.warn(`Creaza o functie wrapper pentru calculateRectangleArea() care sa primeasca 4 parametrii: latimea si lungimea unui dreptunghi initial,
apoi latimea si lungimea altui dreptunghi. Functia se va numi aggregateSurfaceArea().
`);

function aggregateSurfaceArea() {
  const rectangleArea = calculateRectangleArea(48, 92);
  const rectangleArea1 = calculateRectangleArea(51, 102);

  const resultArea = rectangleArea1 + rectangleArea;
  console.log(resultArea);
}
// nu s a inverzit pixeltab
