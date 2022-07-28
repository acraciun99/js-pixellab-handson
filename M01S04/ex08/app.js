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

while ((i < 70, i++)) {
  if (i === 13) {
    break;
  }
  console.log(i);
}

console.warn(`Folosind keywordul break opreste bucla atunci cand numarul este egal cu 12 (dar afiseaza-l).
`);

while ((i <= 32, i++)) {
  if (i % 2) {
    continue;
  }
  console.log(i);
}
