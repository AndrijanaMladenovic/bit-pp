"use strict";

(function () {
  console.log("hi");
})();

function Genre(name) {
  this.name = name;
  this.getData = function () {
    var x = `${this.name.charAt(0).toUpperCase()}${this.name
      .charAt(this.name.length - 1)
      .toUpperCase()}`;
    return x;
  };
}
var ganre = new Genre("comedy");
console.log(ganre);
console.log(ganre.getData());

function Movie(title, genre, min) {
  this.title = title;
  this.genre = genre;
  this.min = min;
  this.getData = function () {
    var string = `${this.title}, ${this.min},${ganre.getData()}`;
    console.log(string);
    return string;
  };
}
var movie = new Movie("Spider-Man", "action", 133);
var movie1 = new Movie("The Dark Tower", "drama", 95);
console.log(movie);
console.log(movie1);
console.log(movie.getData());
console.log(movie1.getData());
var movies = [movie, movie1];

function Program(date, list, number) {
  this.date = new Date(date);

  this.addMovie = function () {
    this.list = movies;
    return this.list;
  };
  this.number = movies.length;
  this.getData = function () {
    var duzina = 0;
    var title = new Array();

    for (var i = 0; i < movies.length; i++) {
      duzina += movies[i].min;

      console.log(movies[i].title);
      title.push(movies[i].title);
    }
    return `${this.date} ${duzina}`;
  };
}

var program = new Program("10/2/2021", []);
console.log(program);
console.log(program.addMovie());
console.log(program.getData());

function Festival(name, list, number) {
  this.name = name;

  this.number = program.list.length;
  this.addProgram = function () {
    this.list = program;
    return this.list;
  };
}
var festival = new Festival("exit", []);
console.log(festival);
console.log(festival.addProgram());
