export function getData(url) {
  return fetch(url).then((response) => {
    return response.json();
  });
}

export function getShowId(element) {
  $(element).click((e) => {
    const id = e.currentTarget.id;
    localStorage.setItem("showId", id);
    location.assign("../secoundPage.html");
  });
}
