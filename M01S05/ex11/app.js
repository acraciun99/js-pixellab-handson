console.warn(
  `Creeaza o functie overloaded pentru calcularea suprafetelor numita calculateSurface.
  Daca primeste un parametru, sa calculeze suprafata unui patrat.
   Daca primeste doi, a unui dreptunghi. Daca primeste trei, sa calculeze suprafata totala a paralelipipedului.
   Foloseste structura switch.
   Creeaza o functie numita calculateCircleArea()si afiseaza suprafata unor cercuri cu raza de 2, 20 si 16.
  `,
);

function calculateSurface(width, length, height) {
  if (arguments.length === 3) {
    return 2 * (width * length + width * height + length * height);
  } else if (arguments.length === 2) {
    return width * length;
  } else {
    return width ** 2;
  }
}
console.log(calculateSurface(20, 15, 5));

function calculateCircleArea(radius) {
  if (arguments.length === 1) {
    return Math.PI * radius ** 2;
  }
}

console.log(calculateCircleArea(2));
console.log(calculateCircleArea(20));
console.log(calculateCircleArea(16));

console.warn(`
Creeaza un obiect numit pet cu urmatoarele metode: getName, getSpecies si getAge.
Folosind metodele obiectului pet afiseaza propozitia: “nnnn este ssss si are aaaa ani.”
Folosind metoda getAge calculeaza si salveaza intr-o variabila numita petAge varsta animalului si afiseaza propozitia: “Animalul meu are petAge ani”
`);

let pet = {
  getName: function () {
    return 'Rex';
  },
  getSpecies: function () {
    return 'dog';
  },
  getAge: function () {
    return 3;
  },
};

console.log(
  `${pet.getName()} este ${pet.getSpecies()} si are ${pet.getAge()} ani.`,
);

const petAge = pet.getAge();
console.log(`Animalul meu are ${petAge} ani.`);
