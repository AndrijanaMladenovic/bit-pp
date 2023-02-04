$(document).ready(function () {
  var request = new XMLHttpRequest();
  request.open("GET", "note.xml", true);
  request.onload = function (event) {
    var response = request.responseXML;

    var reminder = response.querySelector("geoplugin_countryName");
    console.log(reminder);
  };

  request.send();
});

/////

///////////// JSON

function getRandomDogImage() {
  $.ajax({
    url: "https://dog.ceo/api/breeds/image/random",
    method: "GET",
  })
    .done(function (response) {
      console.log(response);
      var img = $("<img/>").attr("src", response.message);
      $("#image-container").html("");
      $("#image-container").append(img);
    })
    .fail(function (response) {
      console.log(response);
      alert(response);
    })
    .always(function () {
      console.log("request finished");
    });
  // var request = $.ajax({
  //     url: 'https://dog.ceo/api/breeds/image/random',
  //     method: 'GET'
  // });

  // request.done(function (response) {
  //     console.log(response);
  //     var img = $('<img/>').attr("src", response.message);
  //     $('#image-container').html("")
  //     $('#image-container').append(img);
  // });

  // request.fail(function (response) {
  //     console.log(response);
  //     alert(response);
  // })

  // request.always(function () {
  //     console.log('request finished')
  // })
}
