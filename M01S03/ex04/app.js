var myArray = [1, 2, 3, 4, 5, 6];

console.log(myArray[5]);

console.log(myArray[2].toString());

console.log(myArray.length.toString());

console.log(myArray[0] + myArray[4]);

console.log(myArray[1].toString());

console.warn(`
Afiseaza numarul de pe pozitia 2 a arrayului.
Afiseaza numarul 4 din array.
Afiseaza diferenta dintre lungimea arrayului si valoarea din pozitia 5.
Afiseaza suma numerelor de pe pozitia 1 si 3.
Afiseaza produsul numerelor de pe pozitia 0 si 5.
Afiseaza diferenta numerelor de pe pozitia 3 si 4.
Folosind metoda Math.pow() afla rezultatul ridicarii la putere a numarului de pe pozitia 5 la numarul de pe pozitia 3
`);

console.log(myArray[1].toString());
console.log(myArray[3].toString());
console.log((myArray.length - myArray[5]).toString());
console.log(myArray[3] - myArray[4]);
console.log(Math.pow(myArray[5], myArray[3]));
