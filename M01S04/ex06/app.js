var person = {
  name: 'Clex',
  surname: 'Arciun',
  age: 23,
  petOwner: false,
  skills: [
    'html',
    'javascript',
    'css',
    'java',
    'c++',
    'node',
    'jquery',
    'node.js',
  ],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};

console.warn(`
Folosind obiectul person si un for, afiseaza in consola skillurile de pe pozitiile pare ale arrayului.
`);

for (var i = 0; i < person.skills.length; i++) {
  var skill = person.skills[i];

  if (i % 2 === 0) {
    console.log(skill);
  }
}

console.warn(`In mod similar, afiseaza skillurile care NU incep cu j.`);

for (var i = 0; i < person.skills.length; i++) {
  var skill = person.skills[i];

  if (skill[0] !== 'j') {
    console.log(skill);
  }
}

console.warn(
  `
  Folosind un for afiseaza propozitia: "Prietenii mei se numesc xxx yyy, xxx yyy, xxx yyy."
  `,
);
var message = 'Prietenii mei se numesc: ';
for (i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var punctuation = ', ';

  if (i === person.friends.length - 1) {
    punctuation = '.';
  }
  //v1

  message = message + friend.name + ' ' + friend.surname + punctuation;
}
console.log(message);

console.warn(
  `
  Folosind un for, afiseaza numarul total de ani pe care il au persoanele din arrayul friends, doar daca varsta este mai mare sau egala cu 30 de ani.
  `,
);
var sumAge = 0;
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];

  if (friend.age >= 30) {
    sumAge = sumAge + friend.age;
  }
}
console.log(sumAge.toString());

console.warn(` Folosind un for, afiseaza suma anilor de nastere ai persoanelor.
`);
var currentYear = 2022;
var sumYears = 0;
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];

  sumYears = sumYears + currentYear - friend.age;
}
console.log(sumYears.toString());

console.warn(` Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends doar daca aceasta este mai mare de 2 ani.
`);
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var ageDiff = Math.abs(person.age - friend.age);

  if (ageDiff > 2) {
    console.log(ageDiff);
  }
}

console.warn(`
 Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven... . Repeta pentru tot arrayul friends.
`);
var message = '';
for (i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var ageDiff = Math.abs(person.age - friend.age);

  message +=
    'Intre ' +
    person.name +
    ' si ' +
    friend.name +
    ' este o diferenta de ' +
    ageDiff +
    ' ani. ';
}

console.log(message.trim());

console.warn(
  `Afiseaza fraza “Prietenii mei sunt: xxx yyy, xxx yyy, xxx yyy.” in ordine inversa a arrayului de prieteni. (Numarand de la length la 0).
`,
);

var message = 'Prietenii mei sunt: ';
for (var i = person.friends.length - 1; i >= 0; i--) {
  var friend = person.friends[i];
  var punctuation = ', ';

  if (i === 0) {
    punctuation = '.';
  }
  message += friend.name + ' ' + friend.surname + punctuation;
}
console.log(message);

console.warn(` Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven... ",
doar daca varsta prietenului este impara.
`);

for (i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  ageDiff = Math.abs(person.age - friend.age);
  if ((ageDiff % 2) + 1) {
    console.log(
      `Intre ${person.name} si ${friend.name} este o diferenta de ${ageDiff} ani.`,
    );
  }
}

console.warn(`Folosind proprietatea length a arrayului skills si o bucla for,
afiseaza in ordine inversa elementele arrayului skills. Atentie, va trebui sa numeri invers, de la length la 0.
`);

for (var i = person.skills.length - 1; i >= 0; i--) {
  var skill = person.skills[i];
  console.log(skill);
}

console.warn(` Folosind un for afiseaza propozitia: "Numele de familie ale prietenilor mei sunt: xxx, xxx, xxx."
`);

var message = 'Numele de familie ale prietenilor mei sunt: ';
for (i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var punctuation = ', ';
  if (i === person.friends.length - 1) {
    punctuation = '.';
  }

  message = message + friend.surname + punctuation;
}
console.log(message);

console.warn(
  ` Folosind un for, afiseaza numarul total de ani pe care il au persoanele din arrayul friends `,
);

var sumAge = 0;
for (i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  sumAge = friend.age + sumAge;
}
console.log(sumAge.toString());
