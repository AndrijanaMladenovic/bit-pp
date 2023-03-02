import { Shows, Season, Crew, Country, Episode } from "./entities/entities.js";
import { getData, getShowId } from "./service/service.js";
import {
  createCard,
  createDropdown,
  createNewPage,
  createNewPageSeason,
  createCast,
  createCrew,
  createAkas,
  createSeason,
  createEpisode,
} from "./view/ui.js";
const cardUrl = "http://api.tvmaze.com/shows";
const searchUrl = "https://api.tvmaze.com/search/shows?q=";
const newPageUrl = "http://api.tvmaze.com/shows/";
const showId = localStorage.getItem("showId");
let clickCounterCrew = 0;
let clickCounterSeason = 0;
let clickCounterAka = 0;
let clickCounterParagraf = 0;

$(document).ready(function () {
  getData(cardUrl).then((response) => {
    const rated = response.sort(function (a, b) {
      return b.rating.average - a.rating.average;
    });

    const top50 = rated.slice(0, 50);

    $.each(top50, function (i) {
      const card = new Shows(top50[i].name, top50[i].id, top50[i].image.medium);
      createCard(card);
    });
    getShowId(".card");
  });
  newPage();
  search();
  season();
  cast();
  crew();
  akas();
  showEpisodes();
});

function clickCount(count, btn, element) {
  $(btn).click(function (e) {
    count++;
    $(element).css("display", "flex");
    if (count % 2 == 0) {
      $(element).css("display", "none");
    }
    e.preventDefault();
  });
}

function search() {
  $("input").keyup(function (e) {
    let value = e.target.value;

    getData(`${searchUrl}${value}`).then((response) => {
      const top10 = response.slice(0, 10);
      $(".dropdown").html("");
      $.each(top10, function (i) {
        const dropdown = new Shows(top10[i].show.name, top10[i].show.id);

        createDropdown(dropdown);
      });
      getShowId(".list");
    });
  });
}

function newPage() {
  getData(`${newPageUrl}${showId}`).then((response) => {
    const show = new Shows();
    show.image = response.image.original;
    show.summary = response.summary;
    show.name = response.name;
    createNewPage(show);
    clickCount(clickCounterParagraf, $(".btn-details"), $(".paragraf"));
  });
}

function season() {
  getData(`${newPageUrl}${showId}/seasons`).then((response) => {
    console.log(response);
    $.each(response, function (i) {
      const season = new Season(
        response[i].endDate,
        response[i].number,
        response[i].premiereDate,
        response.length
      );
      createSeason(season);

      $(`.${season.seasonNumber}`).css("display", "none");

      createNewPageSeason(season);
    });
  });
}

function cast() {
  getData(`${newPageUrl}${showId}/cast`).then((response) => {
    const top10 = response.slice(0, 10);
    $.each(top10, function (i) {
      const nameSurname = top10[i].person.name;
      createCast(nameSurname);
    });
  });
}

function crew() {
  getData(`${newPageUrl}${showId}/crew`).then((response) => {
    const top9 = response.slice(0, 9);
    const crews = new Crew();
    $.each(top9, function (i) {
      if (top9[i].person.image !== null) {
        (crews.name = top9[i].person.name),
          (crews.img = top9[i].person.image.medium),
          (crews.type = top9[i].type);
      } else {
        crews.img =
          "https://static.tvmaze.com/images/no-img/no-img-portrait-clean.png";
      }

      createCrew(crews);
      clickCount(clickCounterCrew, $(".btn-crew"), $(".crewCard"));
    });
  });
}

function akas() {
  getData(`${newPageUrl}${showId}/akas`).then((response) => {
    const top5 = response.slice(0, 5);
    $.each(top5, function (i) {
      const country = new Country(
        top5[i].country.name,
        top5[i].country.code.toLowerCase(),
        top5[i].name
      );
      createAkas(country);
      clickCount(clickCounterAka, $(".btn-aka"), $(".aka"));
    });
  });
}

function showEpisodes() {
  getData(`${newPageUrl}${showId}/episodes`).then((response) => {
    console.log(response);
    $.each(response, function (i) {
      const episode = new Episode(
        response[i].name,
        response[i].season,
        response[i].number
      );
      createEpisode(episode);
      clickCount(clickCounterSeason, $(".btn-episode"), $(".episode"));
    });
  });
}
