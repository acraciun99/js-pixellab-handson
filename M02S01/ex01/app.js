class Car {
  constructor(make, color, wheels, speed) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
  }

  topSpeed = 200;
  topReverseSpeed = -50;
  areLightsOn = false;
  isTrunkOpen = false;
  areLightsOn = false;

  accelerate() {
    this.speed++;
  }

  decelerate() {
    this.speed--;
  }

  stop() {
    this.speed = 0;
  }

  setSpeed(speed) {
    if (speed > this.topSpeed) {
      return;
    }
    if (speed < this.topReverseSpeed) {
      return;
    }

    this.speed = speed;
  }

  openTrunk() {
    this.isTrunkOpen = true;
  }

  closeTrunk() {
    this.isTrunkOpen = false;
  }

  turnLightsOn() {
    this.areLightsOn = true;
  }

  turnLightsOff() {
    this.areLightsOn = false;
  }

  // Sugestii? nu inteleg de pe net cum fac setTImeout la o metoda
  flashLights() {
    this.turnLightsOn();
    this.turnLightsOff;
  }
}

const audi = new Car('Audi', 'black', 4, 50);
const opel = new Car('Opel', 'gray', 4, 40);

const cars = [audi, opel];
