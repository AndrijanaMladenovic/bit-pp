$(document).ready(function () {
  info();
});

const showId = localStorage.getItem("showId");
const urlInfo = `https://rickandmortyapi.com/api/character/${showId}`;

function info() {
  fetch(urlInfo)
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response);
      const name = response.name;
      const img = response.image;
      const locationName = response.location.name;

      const status = response.status;
      const gender = response.gender;
      const episode = response.episode.length;
      const species = response.species;
      const cardInfo = `<div class = 'cardInfo'>
      <div class = 'text'><img src = '${img}'/><p class ='name'>Name: ${name}</p>
      </div>
      <div class = 'location'>
      <h2>Location</h2>
        <p>${locationName}</p>
      </div>
      <div class = 'status'>
      <h3>About</h3>
      <p>Status: ${status}</p>
      <p>Gender: ${gender}</p>
      <p>Species: ${species}</p>
      </div>
       `;
      $("span").text(episode);
      $(".info").append(cardInfo);
    });
}
