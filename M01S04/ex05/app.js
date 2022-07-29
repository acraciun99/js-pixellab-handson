var number = prompt('Introdu un numar');

for (var i = 0; i <= 100; i++) {
  console.log(i);
  if (i % number !== 0) {
    continue;
  }

  console.log(`Acest numar este multiplu de ${number}.`);
}

// nu prea inteleg ce imi cere

console.warn(`Folosind inca o metoda prompt, cere utilizatorului si limita superioara pana la care sa numere bucla si sa afiseze multipli.
`);

for (var i = 0; i <= 100; i++) {
  if (i > 100) {
    prompt('Numarul este prea mare');
    break;
  }
}
