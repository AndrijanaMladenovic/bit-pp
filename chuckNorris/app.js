$(document).ready(function () {
  addJoke();
});

const url = "https://api.chucknorris.io/jokes/random";

function addJoke() {
  $("input").click(function (e) {
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsObject) {
        console.log(jsObject.value);
        $(".joke").prepend(`<p>${jsObject.value}</p>`);
      });
    e.preventDefault();
  });
}
