"use strict";

class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
}

var person = new Person("Andrijana", "Mladenovic");
console.log(person);

class Employee extends Person {
  constructor(name, surname, job, salary) {
    super(name, surname);
    this.job = job;
    this.salary = salary;
  }
  getData() {
    return `${this.name} ${this.surname} ${this.salary}`;
  }
  getSalary() {
    return this.salary;
  }
  increaseSalary() {
    return this.salary * 1.1;
  }
}
var employee = new Employee("Andrijana", "Mladenovic", "virtual staging", 1200);
console.log(employee);
console.log(employee.getData());
console.log(employee.getSalary());
console.log(employee.increaseSalary());

class Developer extends Employee {
  constructor(name, surname, job, salary, specialization) {
    super(name, surname, job, salary);
    this.specialization = specialization;
  }
  getSpecialization() {
    return this.specialization;
  }
}
var developer = new Developer(
  "Andrijana",
  "Mladenovic",
  "virtual staging",
  1200,
  "vs"
);
console.log(developer.getSpecialization());

class Manager extends Employee {
  constructor(name, surname, job, salary, department) {
    super(name, surname, job, salary);
    this.department = department;
  }
  getDepartment() {
    return this.department;
  }
  changeDepartment(newValue) {
    this.department = newValue;
  }
}
var manager = new Manager(
  "Andrijana",
  "Mladenovic",
  "virtual staging",
  1200,
  "Virtual-Staging"
);
console.log(manager);
console.log(manager.getDepartment());
manager.changeDepartment("Manager");
console.log(manager.getDepartment());

class WebApp {
  constructor(name, url, technologies, licence, stars) {
    this.name = name;
    this.url = url;
    this.technologies = technologies;
    this.licence = licence;
    this.stars = stars;
  }
  gedData() {
    return `${this.name},${this.url},${this.technologies},${this.stars}`;
  }
  reactBased() {
    var techName = this.technologies.toUpperCase();
    var reactTech = "REACT";
    if (techName == reactTech) {
      return "YES";
    } else {
      return "NO";
    }
  }
  isCCLicence() {
    var licence = this.licence.toUpperCase();
    var licenceCCL = "CC";
    if (licence == licenceCCL) {
      return "YES";
    } else {
      return "NO";
    }
  }
  increasesStars() {
    return this.stars + 1;
  }
  showStars() {
    return this.increasesStars();
  }
}

var webApp = new WebApp("Google", "https://www.google.rs/", "react", "dasd", 5);
console.log(webApp);
console.log(webApp.gedData());
console.log(webApp.reactBased());
console.log(webApp.isCCLicence());
console.log(webApp.increasesStars());
console.log(webApp.showStars());

class MobileApp extends WebApp {
  constructor(name, platforms, licence, stars) {
    super();
    this.name = name;
    this.platforms = platforms;
    this.licence = licence;
    this.stars = stars;
  }
  gedData() {
    return `${this.name},${this.platform},${this.licence},${this.stars}`;
  }
  forAndroid() {
    var platformName = this.platforms.toUpperCase();
    var platformTech = "ANDROID";
    if (platformName == platformTech) {
      return "YES";
    } else {
      return "NO";
    }
  }
}
var mobileApp = new MobileApp("game", "android", "CC", 3);
console.log(mobileApp);
console.log(mobileApp.forAndroid());
console.log(mobileApp.showStars());
console.log(mobileApp.isCCLicence());
console.log(mobileApp.increasesStars());
