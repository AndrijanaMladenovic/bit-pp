export class Shows {
  constructor(name, id, image, summary) {
    this.name = name;
    this.image = image;
    this.id = id;
    this.summary = summary;
  }
}

export class Season {
  constructor(endDate, numberSeason, premiereDate, seasonNumber) {
    this.endDate = endDate;
    this.numberSeason = numberSeason;
    this.premiereDate = premiereDate;
    this.seasonNumber = seasonNumber;
  }
}
export class Crew {
  constructor(name, img, type) {
    this.name = name;
    this.img = img;
    this.type = type;
  }
}

export class Country {
  constructor(name, code, title) {
    this.name = name;
    this.code = code;
    this.title = title;
  }
}

export class Episode {
  constructor(nameOfEpisode, season, numberOfEpisode) {
    this.nameOfEpisode = nameOfEpisode;
    this.season = season;
    this.numberOfEpisode = numberOfEpisode;
  }
}
