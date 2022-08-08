const dateBuilder = [
  function () {
    return '2022';
  },
  function () {
    return 'August';
  },
  () => {
    return '3';
  },
];
dateBuilder[3] = function () {
  return 'Miercuri';
};

console.warn(`Folosind arrayul dateBuilder. Afiseaza luna curenta`);
console.log(dateBuilder[1]());

console.warn(`Afiseaza propozita: "Suntem in anul an"`);
console.log(`Suntem in anul ${dateBuilder[0]()}.`);

console.warn(`Afiseaza propozitia: “Suntem in luna ll in anul aa.”.`);
console.log(`Suntem in luna ${dateBuilder[1]()} in anul ${dateBuilder[0]()}.`);

console.log(`Astazi este ${dateBuilder[1]()}.`);

console.log(`Folosind arrayul dateBuilder. Afiseaza anul curent.`);
console.log(dateBuilder[0]());

console.warn(`Afiseaza propozitia: “Suntem in luna an.”.`);
console.log(`Suntem in ${dateBuilder[1]()} ${dateBuilder[0]()}.`);

console.warn(`Afiseaza propozitia: “Astazi este zi, data.”.`);
console.log(`Astazi este ${dateBuilder[3]()}, ${dateBuilder[2]()}.`);

console.warn(`Afiseaza propozitia: “Data curenta este zi luna an.”`);
console.log(
  `Data curenta este ${dateBuilder[2]()} ${dateBuilder[1]()} ${dateBuilder[0]()}.`,
);
