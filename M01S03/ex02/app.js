var person = {
  name: 'Lucian',
  surname: 'Andrei',
  age: 29,
  petOwner: false,
  skills: {
    html: true,
    css: true,
    javaScript: false,
  },
  friends: {
    larry: {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    steven: {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    carol: {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  },
};

console.warn(`
Calculeaza diferenta si afiseaza propozitia: “Steven este
cu xx ani mai mare decat Larry.” folosind proprietatile name.`);

console.log(
  person.friends.steven.name +
    ' este cu ' +
    (person.friends.steven.age - person.friends.larry.age) +
    ' ani mai mare decat ' +
    person.friends.larry.name +
    '.',
);

console.warn(
  `Afiseaza propozitia: “Prietenul meu Steven Stevenson are xx ani.” folosind doar proprietatile`,
);

console.log(
  'Prietenul meu ' +
    person.friends.steven.name +
    ' ' +
    person.friends.steven.surname +
    ' are ' +
    person.friends.steven.age +
    ' ani.',
);

console.warn(
  `Afiseaza propozitia: “Prietenii mei sunt: Steven, Carol si Larry.`,
);

console.log(
  'Prietenii mei sunt: ' +
    person.friends.steven.name +
    ', ' +
    person.friends.carol.name +
    ' si ' +
    person.friends.larry.name +
    '.',
);

console.warn(
  `Afiseaza numarul de caractere al numelui de familie a lui Steven`,
);
console.log(person.friends.steven.surname.length.toString());
