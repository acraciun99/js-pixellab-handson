var person = {
  firstName: 'Lucian',
  lastName: 'Lucianos',
  email: 'lucianluci@gmail.com',
  birthYear: 1997,
  pets: [
    {
      name: 'Rex',
      species: 'parrot',
      age: 2,
    },
    {
      name: 'Luke',
      species: 'dog',
      age: 3,
    },
    {
      name: 'Luna',
      species: 'cat',
      age: 4,
    },
  ],
  zipCode: '12345',
};

console.warn(`
Creeaza un obiect numit person
Obiectul sa contina urmatoarele proprietati: firstName, lastName, email, birthYear, pets, zipCode.
Proprietatea pets sa contina un array de obiecte cu trei pozitii.
Obiectele din pets sa contina urmatoarele proprietati: name, species, age.
Toata informatia poate fi inventata. Nu divulga informatii personale inutil.

Afiseaza propozitia: “Numele meu este: xxx yyy si am x animale.”. Nu uita de proprietatea length a arrayului pets.
Afiseaza propozitia: “Am acelasi email din copilarie: xxx.”.
Afiseaza propozitia: “Unul din cele x animale ale mele este species si are age ani.”
Calculeaza si afiseaza (folosind anul curent) anul de nastere al animalului de pe pozitia 2.
Calculeaza si salveaza in variabila difference diferenta de ani dintre persoana si animalul de pe pozitia 0 si afiseaza aceasta diferenta. Foloseste anul curent.
Salveaza numele animalului de pe pozitia 0 intr-o variabila numita petName.
Afiseaza propozitia: “Intre firstName si petName este o diferenta de difference ani.”.
`);

console.log(
  'Numele meu este: ' +
    person.firstName +
    ' ' +
    person.lastName +
    ' si am ' +
    person.pets.length +
    ' animale.',
);

console.log('Am acelasi email din copilarie: ' + person.email + '.');

console.log(
  'Unul din cele ' +
    person.pets.length +
    ' animale ale mele este ' +
    person.pets[1].species +
    ' si are ' +
    person.pets[1].age +
    ' ani.',
);

console.log((2022 - person.pets[2].age).toString());

var difference = 2022 - person.birthYear - person.pets[0].age;
console.log(difference.toString());
var petName = person.pets[0].name;

console.log(
  'Intre ' +
    person.firstName +
    ' ' +
    'si ' +
    petName +
    ' este o diferenta de ' +
    difference +
    ' ani.',
);

console.warn(`
In documentul HTML creeaza o lista neordonata <ul> cu 4 elemente goale <li>.
Fiecare li sa aiba un id: prop01, prop02… etc
Folosind metoda document.getElementById() afiseaza urmatoarele 5 afirmatii despre obiectul person.
Afiseaza propozitia “ firstName, pet1, pet2, pet3 locuiesc toti in aceeasi casa” (folosind bracket notation pe arrayul pets)
Calculeaza si afiseaza diferenta de varsta dintre animalul de pe pozitia 0 si cel de pe pozitia 2
Afiseaza propozitia: “Ma numesc xxx yyy, m-am nascut in birthYear si codul meu postal este: zipCode”
Afiseaza propozitia: “Animalele mele s-au nascut in xxxx, xxx, respectiv xxx.” Foloseste anul curent pentru a efectua scaderea.
Folosirea variabilelor este optionala dar incurajata.
`);

var li01 = document.getElementById('prop01');
li01.innerText =
  person.firstName +
  ', ' +
  person.pets[0].name +
  ', ' +
  person.pets[1].name +
  ', ' +
  person.pets[2].name +
  ' locuiesc toti in aceeasi casa';

var li02 = document.getElementById('prop02');
li02.innerText = person.pets[0].age - person.pets[2].age;

var li03 = document.getElementById('prop03');
li03.innerText =
  'Ma numesc ' +
  person.firstName +
  ' ' +
  person.lastName +
  ', ' +
  'm-am nascut in ' +
  person.birthYear +
  ' si codul meu postal este:' +
  person.zipCode;

var thisYear = 2022;
var firstPet = person.pets[0].age;
var secondPet = person.pets[1].age;
var thirdPet = person.pets[2].age;

var li04 = document.getElementById('prop04');
li04.innerText =
  'Animalele mele s-au nascut in ' +
  (thisYear - firstPet) +
  ', ' +
  (thisYear - secondPet) +
  ', respectiv ' +
  (thisYear - thirdPet);
