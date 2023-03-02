$(document).ready(function () {
  addCharacter();
  pages();
});
let likes = 0;
const urlRick = "https://rickandmortyapi.com/api/character";
const urlPage = "https://rickandmortyapi.com/api/character?page=";

let showId = localStorage.getItem("showId");
function pages() {
  fetch(urlRick)
    .then(function (response) {
      return response.json();
    })

    .then(function (response) {
      console.log(response);
      for (var i = 1; i <= response.info.pages; i++) {
        const newNumber = `<li class="page-item" data-index="${i}" onclick = 'page(${i})'><a  class="page-link" href="#" >${i}</a></li>`;
        $(".pagination").append(newNumber);
      }
    });
}

function addCharacter() {
  fetch(urlRick)
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      setCards(response.results);
    });
}

function setCards(response) {
  for (var i = 0; i < response.length; i++) {
    const name = response[i].name;
    const img = response[i].image;

    let likes = Number(localStorage.getItem(response[i].id));
    console.log(typeof likes);
    likes = likes ? likes : 0;
    const card = `<div class = 'card'>
    <img src='${img}'/>
    <a href='./secoundPage.html'  onclick = 'getId(${response[i].id})' class = 'name'>${name}</a>
    <button onclick='like(${response[i].id})'><ion-icon name="thumbs-up"></ion-icon><span class='${response[i].id}'>${likes}</span>Like</button>
    </div>`;
    $(".card-holder").append(card);
  }
}

function getId(id) {
  localStorage.setItem("showId", id);

  window.location.assign("./secoundPage.html");
}
function page(index) {
  localStorage.setItem("showPage", index);
  fetch("https://rickandmortyapi.com/api/character?page=" + index)
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      setCards(response.results);
    });
  $(".card").css("display", "none");
}

function like(id) {
  let text = $(`.${id}`).text();
  let number = Number(text);
  Number(localStorage.setItem(`${id}`, number + 1));
  $(`.${id}`).text(localStorage.getItem(`${id}`));
}
