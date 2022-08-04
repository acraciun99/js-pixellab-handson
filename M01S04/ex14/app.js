var person = {
  firstName: 'Dragos',
  lastName: 'Iordache',
  birthYear: 1987,
  pets: [
    {
      name: 'Twix',
      species: 'papagal',
      age: 4,
    },
    {
      name: 'Mars',
      species: 'caine',
      age: 2,
    },
    {
      name: 'Bounty',
      species: 'hamster',
      age: 4,
    },
    {
      name: 'Lion',
      species: 'pisica',
      age: 10,
    },
  ],
};

console.warn(
  `Afiseaza in consola folosind metoda forEach() numele fiecarui animal.`,
);
Object.keys(person.pets).forEach(function (keyName) {
  var pet = person.pets[keyName];
  console.log(`${pet.name}`);
});

console.warn(`Folosind o bucla for afiseaza suma anilor animalelor.`);
var petCount = person.pets.length;
var sumAge = 0;
for (var i = 0; i < petCount; i++) {
  var pet = person.pets[i];

  sumAge += pet.age;
}
console.log(sumAge);

console.warn(
  `*Folosind forEach() afiseaza cate una pe linie propozitiile: “Twix este papagal si are 4 ani. Mars este caine si are… etc”.`,
);
Object.keys(person.pets).forEach(function (keyName) {
  var pet = person.pets[keyName];
  console.log(`${pet.name} este ${pet.species} si are ${pet.age} ani.`);
});

console.warn(`Folosind o bucla for afiseaza cate una pe linie propozitiile: “Intre Dragos si Twix este o diferenta de xx ani. Intre Dragos si Mars… ”
(repeta pentru toate intrarile din array).`);
currentYear = 2022;
for (var i = 0; i < petCount; i++) {
  var pet = person.pets[i];
  var personAge = currentYear - person.birthYear;
  var ageDiff = personAge - pet.age;
  console.log(
    `Intre ${person.firstName} si ${pet.name} este o diferenta de ${ageDiff} ani.`,
  );
}

console.warn(
  `Folosind o bucla for afiseaza in ordine inversa numele animalelor din array sub forma de propozitii: “Animalul meu se numeste xxxx.”.`,
);
for (var i = person.pets.length - 1; i >= 0; i--) {
  var pet = person.pets[i];
  console.log(`Animalul meu se numeste ${pet.name}`);
}

console.warn(`Folosind o bucla for afla care este cel mai in varsta animal si afiseaza propozitia: “xxx este cel mai batran animal pe care il am,
dar intre noi este o diferenta de xx ani.”`);
var petAge = 0;
var personAge = currentYear - person.birthYear;
for (var i = 0; i < petCount; i++) {
  var pet = person.pets[i];
  var petName = '';
  var ageDiff = personAge - pet.age;
  if (petAge < pet.age) {
    petAge = pet.age;
  }
  if (pet.age === petAge) {
    petName = pet.name;
  }
  console.log(
    `${petName} este cel mai batran animal pe care il am, dar intre noi este o diferenta de ${ageDiff} ani.`,
  );
}

console.warn(
  `Folosind o bucla forEach afiseaza propozitia: “Am papagal, caine, hamster si pisica.”.`,
);
var message = 'Am ';
Object.keys(person.pets).forEach(function (keyName, index, keys) {
  var pet = person.pets[keyName];
  var punctuation = ', ';
  if (index === keys.length - 1) {
    punctuation = '. ';
  }
  if (index === keys.length - 2) {
    punctuation = ' si ';
  }
  message += `${pet.species}${punctuation}`;
});
console.log(message);

// nu s a inverzit in pixeltab dar rezultatul in consola e bun!
