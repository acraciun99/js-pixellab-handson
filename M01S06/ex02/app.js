const paragraphElement = document.createElement('p');
const userAgentString = navigator.userAgent;
let message = 'Nu stim ce browseer folosesti';

if (userAgentString.includes('Chrome')) {
  message = 'Navighezi folosind Chrome';
} else if (userAgentString.includes('Edge')) {
  message = 'Navighezi folosind Edge';
}
paragraphElement.innerText = message;

document.body.append(paragraphElement);
