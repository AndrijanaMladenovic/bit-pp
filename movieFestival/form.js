"use strict";
$(document).ready(function () {
  createMovie();
  program();
  addMovie();
});
var button = $(".btn");
var count = 0;
function createMovie() {
  $(button).click(function (e) {
    var lengths = $(".length").val();

    if (isNaN(Number(lengths))) {
      var error = `<p class = 'show hide'>Please type number</p>`;
      $(".form").append(error);
      $("p").removeClass("hide");
    } else if ($(".titles").val().length === 0) {
      var errorTitle = `<p class='showTitle hideTitle'>Please type title of movie</p>`;
      $(".form").append(errorTitle);
      $("p").removeClass("hideTitle");
    } else {
      $("p").removeClass("show");
      $("p").addClass("hide");

      $("p").addClass("hideTitle");
      $("p").removeClass("showTitle");

      var text = `<h4>${movies.getDatas()} ${ganre.getGanre()}</h4>`;
      $(".form").append(text);
      var optionTitle = `<option>${$(".titles").val()}</option>`;
      $("#movie-name").append(optionTitle);
    }
  });
}
function program() {
  $(".btn-program").click(function (e) {
    var sum = 0;
    var msg;
    if ($(".date").val() === "") {
      $("p").removeClass("hide");
    } else {
      $("p").addClass("hide");
      $("p").removeClass("show");

      var movie = `<h4>${$(".date").val()},duration ${$(".length").val()}</h4>`;
      $(".form-date").append(movie);
      var date = `<option>${movie}</option>`;
      $("#program-name").append(date);
    }
  });
}

function addMovie() {
  var length = $(".length").val();
  var sum = 0;
  var msg;
  let select = $("#program-name option:selected").text();

  $(".add-movie").click(function (e) {
    console.log($("#program-name option:selected").text());
    if (select === select) {
      sum += Number($(".length").val());
      count += 1;
      msg = `<h4> ${$(".date").val()} ${count} movie ${sum} duration `;
      $(".msg").append(msg);
    } else if (select !== select) {
      var program = `<h4>${$("#movie-name option:selected").text()} ${$(
        "#program-name option:selected"
      ).text()}</h4>`;
      $(".msg").append(program);
    }
  });
}
