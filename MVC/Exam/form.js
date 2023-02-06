"use strict";

$(document).ready(function () {
  add();
});
var input = $(".name").val();
var subject = document.querySelector("select");

var value = "";

//$(subject).on("click", function (e) {
// $(subject).each(function () {
//  value = $(this).val();

//  return value;
// });
// });

////////
//function nameSurname(input) {
//  input = $(".name").val();
// var x = $(`<h3>${input}</h3>`);
//$(".submit").append(x);
//}

function nameSurname() {
  var nameSurname = $(".name").val();
  var name = nameSurname.split(" ");
  var nameX = name[0];
  var surname = name[1];
  if (
    nameX.charAt(0) != nameX.charAt(0).toUpperCase() ||
    surname.charAt(0) != surname.charAt(0).toUpperCase()
  ) {
    $(".nameShow").removeClass("nameHide");
    return false;
  } else {
    $(".nameShow").addClass("nameHide");
    return true;
  }
}

var studentPass = 0;
var studentFail = 0;

function grade(input) {
  var u = $(".count-passed").text();
  var j = parseFloat(u);
  if (nameSurname()) {
    input = $(".grade").val();

    if (input < 1 || input > 10) {
      $(".error").removeClass("hide");
      $(".hide").addClass("error");
    } else if (input <= 5) {
      $(".error").addClass("hide");
      var failedNum = $(`<div class="faild-student">
      <h2>${$("select :selected").text()}</h2>
      <p>${$(".name").val()}</p>
      <span style="color: red;" class="passed-grade">${input}</span>
      </div>`);
      $(".failed-count").append(failedNum);
      studentFail += 1;
      document.querySelector(".count-faild").innerHTML = studentFail;
    } else if (input > 5 && input <= 10) {
      $(".error").addClass("hide");
      var succesNum = $(`<div class="passed-student">
<h2>${$("select :selected").text()}</h2>
<p>${$(".name").val()}</p>
<span style="color: #33B8B4;"  class="passed-grade">${input}</span>
</div>`);
      $(".passed-count").append(succesNum);
      studentPass += 1;
      document.querySelector(".count-passed").innerHTML = studentPass;
      //$(
      // `<h2 class='passed-student'>${$(".name").val()}  -  ${$(
      //   "select :selected"
      // ).text()}${input}</h2>`
      //  );
    }
  }
}

//function countStudent() {
//  var count = $(".passed-count").length;
// console.log(count);
//  var u = +$(`<span>${count}</span>`);
// $(".count-passed").append(u);
//}
var count = 0;

function add() {
  $("button").click(function (e) {
    grade();
    nameSurname();
    count += 1;
    document.querySelector(".count").innerHTML = count;
    //countStudent();
  });
}
