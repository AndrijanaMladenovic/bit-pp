"use strict";
$(document).ready(function () {
  createMovie();
  createProgram();
  addMovieToProgram();
});
var movies = [];

function createMovie() {
  $(".create-movie").click(function (e) {
    window.movie = new Movie(
      $(".movie-title").val(),

      $(".movie-length").val(),
      $(".genre-select option:selected").text()
    );

    if (
      !movie.title ||
      !movie.duration ||
      !$(".genre-select option:selected").val()
    ) {
      var error = `All fields are reguired`;
      $(".movie-error").text(error);
    } else {
      var list = `<ul><li>${movie.getData()}</li></ul>`;
      $(".movie-list").append(list);

      var option = `<option>${movie.title}</option>`;
      $(".movie-error").text("");
      $(".movie-select").append(option);

      movies.push(movie);
    }
  });
  return;
}

var programArray = [];
var movieTitle = [];
var optionDate = [];
var date = [];
var count = 0;
function createProgram() {
  $(".create-program").on("click", function (e) {
    e.preventDefault();
    count = 0;
    window.program = new Program();
    program.date = $(".program-date").val();

    if (program.date == "") {
      var errorMsg = `Please select date`;
      $(".program-error").text(errorMsg);
    } else if (program.date !== "") {
      $(".program-select").append(option);
      $(".program-error").text("");
      optionDate.push(program.date);

      for (var i = 0; i < optionDate.length; i++) {
        if (optionDate[i] == program.date) {
          count++;
        }
      }
      if (count >= 2) {
        var errorMsg = `Program for date already exists!`;
        $(".program-error").append(errorMsg);
      } else {
        var option = `<option class = 'option'>${program.date} program duration : TBA</option>`;
        var list = `<ul><li>${program.date} program duration : TBA</li></ul>`;
        $(".program-select").append(option);
        $(".program-list").append(list);
      }
    }
  });
}

var dateArray = [];
var programDateOption = [];
var sum = 0;
var countDate = 0;
var countMovie = 1;
function addMovieToProgram() {
  $(".add-movie").click(function (e) {
    countDate = 0;
    window.movieToProgram = new MovieToProgram(
      $(".movie-select option:selected").text(),
      $(".program-select option:selected").text().slice(0, 10)
    );
    programDateOption.push(movieToProgram.date);
    var newArr = programDateOption.filter((el) => el === movieToProgram.date);

    for (var i = 0; i < movies.length; i++) {
      if (
        (movieToProgram.title == movies[i].title && newArr.length == 1) ||
        newArr.length < 1
      ) {
        var movieLength = Number(movies[i].duration);
        var option2 = `<ul><li class='razlicit-datum'>${movieToProgram.date} program duration : ${movieLength}</li><ul>`;
        $(".program-list").append(option2);
        sum = movieLength;
        continue;
      } else if (movieToProgram.title == movies[i].title && newArr.length > 1) {
        var movieLength = Number(movies[i].duration);

        sum += movieLength;

        countMovie++;
        var option3 = `<ul><li class='razlicit-datum'>${movieToProgram.date}  ${countMovie} movies program duration : ${sum}</li><ul>`;
        var optionText = `${movieToProgram.date}  ${countMovie} movies program duration : ${sum}`;
        $(".program-list").append(option3);
        $(".program-select option:selected").text(optionText);
      }
    }
  });
}
