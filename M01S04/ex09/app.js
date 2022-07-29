// var i = 1;

// do {
//   console.log(i);

//   i++;
// } while (i <= 100);

var i = 1;

// do {
//   if (i > 50) {
//     i++;
//     break;
//   }

//   console.log(i);
//   i++;
// } while (i < 100);

console.warn(`Modifica exemplul astfel incat bucla sa
numere de la 1 la 52
`);
// do {
//   console.log(i);
//   i++;
// } while (i <= 52);

console.warn(`Modifica exemplul astfel incat bucla sa numere de la 1 la 51.
`);
// do {
//   console.log(i);
//   i++;
// } while (i < 52);

console.warn(`Folosind keywordul break opreste bucla atunci cand numarul este egal cu 12 (dar afiseaza-l)
`);

// while (i <= 100) {
//   if (i === 12) {
//     console.log(i);
//     break;
//   }
//   i++;
// }

console.warn(
  `Folosind keywordul continue afiseaza doar numerele impare intre 8 si 32. `,
);

var i = 1;
do {
  if (i >= 8 && i <= 32) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }

  i++;
} while (i < 100);
