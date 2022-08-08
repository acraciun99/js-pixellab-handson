const paragraphElement = document.createElement('p');
const userAgentString = navigator.userAgent;
let message = 'Nu stim ce browseer folosesti';

if (userAgentString.includes('Chrome')) {
  message = 'Navighezi folosind Chrome';
}
paragraphElement.innerText = message;

document.body.append(paragraphElement);
