"use strict";

class Car {
  constructor(brand, model, motion) {
    this.brand = brand;
    this.model = model;
    this.motion = motion;
  }
  checkMotion() {
    if (this.motion == 0) {
      return "Car is not move";
    } else {
      return "Car is move";
    }
  }

  accelerate(speed) {
    if (!speed == Number) {
      return false;
    }
    this.motion = this.motion + speed;
    return this.motion;
  }

  break(speed) {
    this.motion = this.motion - speed;
    if (this.motion < 0) {
      this.motion = 0;
    }
    return this.motion;
  }
  status() {
    return `${this.model},${this.brand},${
      this.motion
    } km/h,${this.checkMotion()}`;
  }
  stopCar() {
    var speed = 0;
    this.motion = speed;
    return this.motion;
  }
}

var car = new Car("Ford", "Ka", 50);
console.log(car);
console.log(car.accelerate(10));
console.log(car.break(10));
console.log(car.status());

class Tv {
  constructor(brand, channel = 1, volume = 50) {
    this.brand = brand;
    this.channel = channel;
    this.volume = volume;
  }
  changeVolume(n, decreaseIncrease) {
    if (decreaseIncrease == "+") {
      this.volume = this.volume + n;

      if (this.volume > 100) {
        this.volume = 100;
      }
    }
    if (decreaseIncrease == "-") {
      this.volume = this.volume - n;
      if (this.volume < 0) {
        this.volume = 0;
      }
    }
  }
  channelChange(x) {
    if (x > 50) {
      return this.channel;
    } else {
      this.channel = x;
      return this.channel;
    }
  }
  resetTv() {
    this.channel = 1;
    this.volume = 50;
  }
  status() {
    return `${this.brand} at channel ${this.channel} , volume ${this.volume}.`;
  }
}

var tv = new Tv("Panasonic", 20, 40);
console.log(tv);
tv.changeVolume(80, "+");
console.log(tv.channelChange(50));
console.log(tv.status());
tv.resetTv();
console.log(tv.status());
////////////////////

("use strict");

class Book {
  constructor(
    title,
    author,
    copyrightDate,
    isbn,
    numberOfPage,
    numberChecked,
    numberDiscarded
  ) {
    this.title = title;
    this.author = author;
    this.copyrightDate = copyrightDate;
    this.isbn = isbn;
    this.numberOfPage = numberOfPage;
    this.numberChecked = numberChecked;
    this.numberDiscarded = numberDiscarded;
  }
  checkout(uses = 1) {
    this.numberChecked += uses;
  }
}

class Manual extends Book {
  constructor(
    title,
    author,
    copyrightDate,
    isbn,
    numberOfPage,
    numberChecked,
    numberDiscarded
  ) {
    super(
      title,
      author,
      copyrightDate,
      isbn,
      numberOfPage,
      numberChecked,
      numberDiscarded
    );
  }
  dispose(currentYear) {
    if (currentYear - this.copyrightDate > 5) {
      this.numberDiscarded = "Yes";
    }
    return this.numberDiscarded;
  }
}

class Novel extends Book {
  constructor(
    title,
    author,
    copyrightDate,
    isbn,
    numberOfPage,
    numberChecked,
    numberDiscarded
  ) {
    super(
      title,
      author,
      copyrightDate,
      isbn,
      numberOfPage,
      numberChecked,
      numberDiscarded
    );
  }
  dispose() {
    if (this.numberChecked > 100) {
      this.numberChecked = "Yes";
    }
    return this.numberChecked;
  }
}

var manual = new Manual(
  "Top Secret Shuttle Building Manual",
  "Redacted",
  2013,
  "0000000000000",
  1147,
  1,
  "No"
);
console.log(manual.dispose(1995));
