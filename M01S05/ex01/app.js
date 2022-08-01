function getTIme() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const miliseconds = date.getMilliseconds();

  return `${hours}:${minutes}:${seconds}:${miliseconds}, am ajuns la pixelab`;
}

setInterval(function () {
  console.log(getTIme());
}, 1000);
