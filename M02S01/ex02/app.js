class Vehicle {
  constructor(make, color, wheels, speed, topSpeed, topReverseSpeed) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
    this.topSpeed = topSpeed;
    this.topReverseSpeed = topReverseSpeed;
  }

  displaySpeed() {
    console.log(`Viteza curenta este: `.this.speed);
  }

  accelerate() {
    this.speed++;
    this.displaySpeed();
  }

  decelerate() {
    this.speed--;
    this.displaySpeed();
  }

  setSpeed(speed) {
    if (speed > this.topSpeed) {
      this.speed = this.topSpeed;
      return;
    }

    this.speed = speed;
    this.displaySpeed();
  }
}

class Car extends Vehicle {
  constructor(make, color, speed, topSpeed, topReverseSpeed) {
    super(make, color, speed, topReverseSpeed);
  }
}

class Bicycle extends Vehicle {
  constructor(make, color, speed, topSpeed) {
    super(make, color, 2, speed, topSpeed, 0);
  }
  decelerate() {
    if (--this.speed < 0) {
      this.speed = 0;
    }
    this.displaySpeed();
  }
}

let bike = new Bicycle('Pegas', 'red', 8, 20);

bike.decelerate();
bike.decelerate();
bike.decelerate();

class Tricycle extends Vehicle {
  constructor(make, color, speed, topSpeed) {
    super(make, color, 3, speed, topSpeed);
  }
  decelerate() {
    if (--this.speed < 0) {
      this.speed = 0;
    }
    this.displaySpeed();
  }
}

let tryke = new Tricycle('Tryke', 'red', 2, 9);

tryke.decelerate();
tryke.decelerate();
tryke.decelerate();
