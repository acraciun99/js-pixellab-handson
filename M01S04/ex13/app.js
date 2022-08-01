var globalVariable = 'Ma aflu in contextul global';

if (true) {
  var localVariable = 'MA AFLU in contextul local';
  var globalVariable = 'NU MA aflu in contextul global';

  console.log(globalVariable);
  console.log(localVariable);
}

console.log(globalVariable);
console.log(localVariable);
