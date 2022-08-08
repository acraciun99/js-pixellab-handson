const person = {
  getName: function () {
    return 'Alex Marcel';
  },
  getAge: function () {
    return 29;
  },
};
console.warn(`Afiseaza primul nume al persoanei folosind metoda getName()`);

console.log(person.getName().split(' ')[0]);

console.warn(
  `Afiseaza anul de nastere al persoanei folosind metoda getAge() si anul curent.
  `,
);

const curentYear = new Date().getFullYear();
const birthYear = curentYear - person.getAge();

console.warn(`Afiseaza ultimele doua cifre al anului de nastere al persoanei, folosind anul curent si metoda getAge(). (Exemplu: ‘87).
`);
console.log(`'${birthYear.toString().slice(-2)}`);

console.warn(`Afiseaza propozita: “Ma numesc xxx si am yy ani!”
`);
console.log(`Ma numesc ${person.getName()} si am ${person.getAge()} ani.`);

console.warn(`Afiseaza numele intreg al persoanei folosind metoda getName()`);
console.log(`${person.getName()}`);

// nu s-a inverzit pixeltabul
console.warn(`Afiseaza varsta persoanei folosind metoda getAge()`);
console.log(`${person.getAge().toString()}`);

console.warn(`Afiseaza anul de nastere al persoanei, intr-o propozitie de felul “M-am nascut in aaaa.”
`);
console.log(`M-am nascut in ${birthYear.toString()}.`);

console.warn(
  `Afiseaza propozita: “Ma numesc xxx yyy m-am nascut acum aa ani in anul zzzz!”`,
);
console.log(
  `Ma numesc ${person.getName()} m-am nascut acum ${person
    .getAge()
    .toString()} ani in anul ${birthYear.toString()}!`,
);
