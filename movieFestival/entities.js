"use strict";

// var title = document.querySelector(".title");
// var ganre = document.querySelector(".genre");
// var lengthInMin = document.querySelector(".length");

// class Movie {
// constructor(title, lengthMin, genre) {
//   this.title = $(title).val();
//   this.lengthMin = $(lengthInMin).val();
//   this.genre = $(genre).val();
// }
// getData() {
//   return `${this.title},${this.lengthMin},${this.genre}`;
//  }
//}

var movies = {
  getDatas: function (title, lengths) {
    title = $(".titles").val();
    lengths = $(".length").val();

    return `${title} ${lengths}`;
  },
};

var ganre = {
  getGanre: function (ganre) {
    ganre = $("select :selected").text();
    var firstLatter = ganre.charAt(0);
    var lastLatter = ganre.charAt(ganre.length - 1);
    return `${firstLatter}${lastLatter}`;
  },
};
