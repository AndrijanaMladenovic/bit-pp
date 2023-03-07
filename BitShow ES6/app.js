import { Shows } from "./entities/shows.js";
import { Country } from "./entities/country.js";
import { Crew } from "./entities/crew.js";
import { Episode } from "./entities/episode.js";
import { Season } from "./entities/season.js";

import { getData } from "./service/service.js";
import { getShowId } from "./service/data.js";
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
  empty,
} from "./view/ui.js";

const cardUrl = "http://api.tvmaze.com/shows";
const searchUrl = "https://api.tvmaze.com/search/shows?q=";
const newPageUrl = "http://api.tvmaze.com/shows/";

let clickCounterCrew = 0;
let clickCounterSeason = 0;
let clickCounterAka = 0;
let clickCounterParagraf = 0;

$(document).ready(function () {
  addTop50();
  $(".secondPage").hide();
});

function addTop50() {
  getData(cardUrl).then((response) => {
    const rated = response.sort(function (a, b) {
      return b.rating.average - a.rating.average;
    });

    const top50 = rated.slice(0, 50);

    top50.forEach((element) => {
      const card = new Shows(element.name, element.id, element.image.medium);
      createCard(card);
    });
    getShowId(".card");
    $(".card").click(function (e) {
      //   empty();

      $("h5").hide();
      $(".secondPage").show();
      $(".popularShows").hide();
      $(".title").show();
      newPage();
      season();
      cast();
      crew();
      akas();
      showEpisodes();
    });
  });
}

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
$(".search").keyup(search);

function search() {
  $("input").keyup(function (e) {
    let value = e.target.value;

    getData(`${searchUrl}${value}`).then((response) => {
      const top10 = response.slice(0, 10);

      $(".dropdown").html("");

      top10.forEach((element) => {
        const dropdown = new Shows();

        dropdown.name = element.show.name;

        dropdown.id = element.show.id;

        createDropdown(dropdown);
      });
      getShowId(".list");

      $(".list").click(function (e) {
        // $(".secoundPage").show();
        $("h5").hide();
        empty();
        newPage();
        season();
        cast();
        crew();
        akas();
        showEpisodes();
      });
    });
  });
}

function newPage() {
  const showId = sessionStorage.getItem("showId");
  //

  getData(`${newPageUrl}${showId}`).then((response) => {
    const show = new Shows();
    show.image = response.image ? response.image.original : response.image;
    show.summary = response.summary;
    show.name = response.name;
    createNewPage(show);
    clickCount(clickCounterParagraf, $(".btn-details"), $(".paragraf"));
  });
}

function season() {
  const showId = sessionStorage.getItem("showId");
  getData(`${newPageUrl}${showId}/seasons`).then((response) => {
    console.log(response);
    response.forEach((element) => {
      const season = new Season(
        element.endDate,
        element.number,
        element.premiereDate,
        response.length
      );
      createSeason(season);
      createNewPageSeason(season);
      $(`.${season.seasonNumber}`).css("display", "none");
    });
  });
}

function cast() {
  const showId = sessionStorage.getItem("showId");
  getData(`${newPageUrl}${showId}/cast`).then((response) => {
    const top10 = response.slice(0, 10);
    top10.forEach((element) => {
      const nameSurname = element.person.name;
      createCast(nameSurname);
    });
  });
}

function crew() {
  const showId = sessionStorage.getItem("showId");
  getData(`${newPageUrl}${showId}/crew`).then((response) => {
    const top9 = response.slice(0, 9);

    top9.forEach((element) => {
      console.log(element);
      const crews = new Crew(
        element.person.name,
        element.person.image,
        element.type
      );

      createCrew(crews);
      clickCount(clickCounterCrew, $(".btn-crew"), $(".crewCard"));
    });
  });
}

function akas() {
  const showId = sessionStorage.getItem("showId");
  getData(`${newPageUrl}${showId}/akas`).then((response) => {
    const top5 = response.slice(0, 5);
    top5.forEach((element) => {
      const country = new Country(
        element.country ? element.country.name : "",
        element.country ? element.country.code.toLowerCase() : "",
        element.name
      );
      createAkas(country);
      clickCount(clickCounterAka, $(".btn-aka"), $(".aka"));
    });
  });
}

function showEpisodes() {
  const showId = sessionStorage.getItem("showId");
  getData(`${newPageUrl}${showId}/episodes`).then((response) => {
    console.log(response);
    response.forEach((element) => {
      const episode = new Episode(element.name, element.season, element.number);
      createEpisode(episode);
      clickCount(clickCounterSeason, $(".btn-episode"), $(".episode"));
    });
  });
}

$("html").click(function (e) {
  $(".dropdown").css("display", "none");
});
