"use strict";

// var subject = document.querySelector("select");

// $(document).ready();
// var value = "";

// $(subject).on("click", function (e) {
//   $(subject).each(function () {
//     value = $(this).val();
//     console.log(value);
//     return value;
//   });
// });

class Subject {
  constructor(name) {
    this.name = this.getSubjectName();
  }

  getSubjectName() {
    return this.name;
  }
}
var subject = new Subject();
