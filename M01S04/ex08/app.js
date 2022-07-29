// var i = 0;

// while (i <= 100) {
//   console.log(i);

//   i++;
// }

var i = 1;

// while (i < 100) {
//   if (i > 50) {
//     i++; //<- important

//     break;
//   }
//   console.log(i);

//   i++;
// }

console.warn(`Modifica exemplul astfel incat bucla sa
numere de la 1 la 67.
`);

// while (i <= 67) {
//   console.log(i);
//   i++;
// }

// while (i < 67) {
//   console.log(i);
//   i++;
// }

console.warn(`Folosind keywordul break opreste bucla atunci cand numarul este egal cu 12 (dar afiseaza-l).
`);

// while ((i < 70, i++)) {
//   if (i === 13) {
//     break;
//   }
//   console.log(i);
// }

console.warn(`Folosind keywordul continue afiseaza doar numerele pare intre 1 si 32 (inclusiv).
`);

while (i <= 100) {
  i++;
  if (i % 2 === 0 && i <= 32) {
    console.log(i);
    continue;
  }
}

console.warn(`Folosind metoda prompt de doua ori cere utilizatorului un numar si
o limita superioara apoi afiseaza toti multiplii de numar
intre 5 si limita superioara introduse.
`);

var number = prompt('Introdu un numar');
var limit = prompt('introdu limita superioara');
var i = 1;

while (i < limit) {
  console.log(i);
  i++;
  if (i % number !== 0) {
    continue;
  }
  console.log(`${i} este multiplu de ${number}`);
}
