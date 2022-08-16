const car = {
  make: 'Audi',
  color: 'black',
  wheels: 4,
  speed: 50,
  topSpeed: 280,
  topReverseSpeed: -60,
  // flags:
  isTrunkOpen: false,
  areLightson: false,

  stop: function () {
    this.speed = 0;
    console.log(this.speed);
  },

  setSpeed: function (speed) {
    if (speed > this.topSpeed) {
      this.speed = this.topSpeed;

      return;
    }

    if (speed < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;

      return;
    }
    this.speed = speed;
  },

  accelerate: function () {
    this.speed++;
  },
  decelerate: function () {
    this.speed--;
  },

  openTrunk: function () {
    this.isTrunkOpen = true;
  },
  closeTrunk: function () {
    this.isTrunkOpen = false;
  },
  turnLightsOn: function () {
    this.areLightson = true;
  },
  turnLightsOff: function () {
    this.areLightsOn = false;
  },
  flashLights: function () {
    this.turnLightsOn();
    // handling "this" keyword lost reference
    // oldschool
    const self = this;

    setTimeout(function () {
      self.turnLightsOff();
    }, 5000);
  },
};

console.warn(`Afiseaza propozitia: "Masina era marca make si se deplasa cu speed km/h.".
`);
console.log(`Masina era marca ${car.make} si se deplasa cu ${car.speed} km/h.`);
