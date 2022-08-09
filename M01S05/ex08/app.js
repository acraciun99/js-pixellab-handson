// Folosind codul de la exercitiul 08, numeste functia care ruleaza la click clickHandler si foloseste-i numele ca parametru al metodei addEventListener in locul celei anonime.
// Adauga un buton pe care scrie Elimina Evenimentul.
// La click pe acest buton nou, foloseste metoda removeEventListener al variabilei button si foloseste numele clickHandler ca parametru.

const button = document.getElementById('clicker');
const removeButton = document.getElementById('remove');
const queryButton = document.getElementById('query');

button.addEventListener('click', clickHandler);
removeButton.addEventListener('click', function () {
  button.removeEventListener('click', clickHandler);
});

// hoisting
function clickHandler() {
  alert('Ai apasat butonul!!!!');
}

queryButton.addEventListener('click', clickHandler);

function clickHandler() {
  let age = prompt('Introdu varsta');
  let message = `Ai ${age} ani`;
  prompt(message);
}

// Creaza un paragraf cu idul message si folosind getElementById()
// stocheaza elementul intr-o variabila, apoi folosind innerText, afiseaza mesajul de mai devreme in acest paragraf.
const paragraph = document.getElementById('message');
paragraph.innerText = `Ai 29 ani.`;
