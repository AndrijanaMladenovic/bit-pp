export function createCard(card) {
  var msg = `<div id='${card.id}' class='card'><img src='${card.image}'>
  <li class='link'><a href ='./secoundPage.html'>${card.name}</a></li></div>`;
  $(".popularShows").append(msg);
}

export function createDropdown(dropdown) {
  var item = `<div id='${dropdown.id}'  class = 'list'>
  <li class='drop-down'><a href ='./secoundPage.html' class = 'dropDownLink'>${dropdown.name}</a></li></div>`;

  $(".dropdown").append(item);

  $(".dropdown").css("display", "block");
}

export function createNewPage(show) {
  const div = `<img class = 'imgNewPage' src = '${show.image}'>`;
  $(".movie-preview").prepend(div);
  const paragraf = `${show.summary}`;
  $(".paragraf").append(paragraf);
  $(".title").text(show.name);
}

export function createNewPageSeason(season) {
  var season = `<li class ='season-list'>${season.premiereDate}  -  ${season.endDate}</li>`;
  $(".castSeason").append(season);
  $(".seasons-number").text(season.seasonNumber);

  $(`.${season.seasonNumber}`).css("display", "none");
}

export function createCast(nameSurname) {
  var nameSurname = `<li class = 'castList'>${nameSurname}</li>`;
  $(".cast").append(nameSurname);
}

export function createCrew(crews) {
  var crewCard = `<div class='crewCard'><img class = 'crew' alt='${crews.name}' src='${crews.img}'/>
  <p class = 'crewText'><span class='crewName'> ${crews.name}</span> as <span class='crewType'>${crews.type}</span></p></div>`;
  $(".containerCrew").append(crewCard);
  $(".crewCard").css("display", "none");
}

export function createAkas(country) {
  var details = `<li>${country.title} 
   (<img class='flag'
    src='https://static.tvmaze.com/intvendor/flags/${country.code}.png'/>  
   ${country.name})</li>`;
  $(".aka").append(details);
  $(".aka").css("display", "none");
}
export function createSeason(season) {
  $(".seasons-number").text(season.numberSeason);
  var msg = `<div class ='season' data-number='${season.numberSeason}'>
  <button class='btn-season'>${season.numberSeason} Season<span class = 'exit ${season.seasonNumber}'> &#10005</span></button></div>`;

  $(".episode").append(msg);
}

export function createEpisode(episode) {
  var element = $(".season");

  $.each($(element), function (i) {
    var dataNumber = $(element[i]).data("number");
    console.log(episode);
    if (dataNumber == episode.season) {
      var div = `<li class = 'episode'>${episode.numberOfEpisode}
       ${episode.nameOfEpisode}</li>`;
      $(`.season[data-number='${dataNumber}']`).append(div);
    }
  });
}
