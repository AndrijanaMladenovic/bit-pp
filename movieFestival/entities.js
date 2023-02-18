"use strict";

class Movie {
  constructor(title, duration, genre) {
    this.title = title;
    this.duration = duration;
    this.genre = genre;
  }
  getGenre() {
    return `${this.genre[0]}${this.genre[this.genre.length - 1]}`.toUpperCase();
  }

  getData() {
    var data = `${this.title},${this.duration},${this.getGenre()}`;
    return data;
  }
}

class Program extends Movie {
  constructor(title, duration, genre, date) {
    super(title, duration, genre);
    this.date = date;
  }
  getProgram() {
    return `${this.getData()},${this.date}`;
  }
}

class MovieToProgram {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }
}
