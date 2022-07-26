// for (var i = 98; i <= 100; i++) {
//   console.log(i);
// }

// for (var i = 1; i < 100; i++) {
//   console.log(i);
// }

// for (var i = 48; i < 100; i++) {
//   console.log(i);

//   if (i === 50) {
//     break;
//   }
// }

// // for (i = 0; i <= 100; i++) {
// //   if (i % 2 !== 0) {
// //     continue;
// //   }

//   console.log(i);
// }

// for (var i = 1; i <= 100; i++) {
//   if (i % 5 !== 0) {
//     continue;
//   }
//   console.log(i);
// }

console.warn(`
Modifica exemplul astfel incat bucla sa numere de la 1 la 89.
Modifica exemplul astfel incat bucla sa numere de la 1 la 88 .
Folosind keywordul break opreste bucla atunci cand numarul este egal cu 42.
Folosind keywordul continue, afiseaza doar numele impare intre 1 si 89.
In mod similar, afiseaza doar numerele care sunt divizibile cu 3.
`);

// for (var i = 1; i <= 89; i++) {
//   console.log(i);
// }

// for (var i = 1; i < 89; i++) {
//   console.log(i);
// }

// for (var i = 1; i <= 89; i++) {
//   if (i === 43) {
//     break;
//   }
//   console.log(i);
// }

// for (var i = 1; i <= 89; i++) {
//   if (i % 2 !== 1) {
//     continue;
//   }
//   console.log(i);
// }

for (var i = 1; i <= 89; i++) {
  if (i % 3 !== 0) {
    continue;
  }
  console.log(i);
}
