export function getShowId(element) {
  $(element).click(function (e) {
    const id = e.currentTarget.id;
    sessionStorage.setItem("showId", id);
  });
}
