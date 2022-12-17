// Create an object that represents your favourite coffee. Please include coffee name,
// strength, flavour, milk, sugar, … everything you like!

var coffe = {
  name: "Mocha",
  flavour: "chocolate",
  milk: "2 tablespoons milk",
  sugar: "1 tablespoon white sugar",
};

console.log(coffe);

// Create an object that represents your favourite movie. Please include title, actors,
// director, genre, popularity.

var movie = {
  title: "Inception",
  actors: "Leonardo DiCaprio , Joseph Levitt , Tom Hardi",
  director: "Chrristopher Nolan",
  genres: "Action , Thriler , Sci-Fi,Advanture",
  popularity: "836,8 miliona USD",
};

console.log(movie);

// Write a function that creates an object that represents a project. Each project is
// described by: description, programming language, git repository, boolean status that
// says if the project is in development or not. Add a method that prints out the projects
// repository, a method that checks if the project is written in JavaScript as well as a
// method that checks if the project is in development or not.

function project(dectription, programmingLanguage, gitRepository, status) {
  var obj = {};
  obj.dectription = dectription;
  obj.programmingLanguage = programmingLanguage;
  obj.gitRepository = gitRepository;
  obj.status = status;
  if (obj.programmingLanguage === "js") {
    obj.programmingLanguage = true;
  } else {
    obj.programmingLanguage = false;
  }

  if (obj.status == "development") {
    obj.status = true;
  } else {
    obj.status = false;
  }

  return obj;
}

console.log(project("asd", "js", "adasd", "development"));

// Write a function that creates an object that represents a culinary recipe. Each recipe is
// described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients,
// preparing time, preparing instruction.

function recipe(
  name,
  typeOfCusion,
  complexity,
  listOfIngredients,
  preparingTime,
  preparingInstruction
) {
  var object = {
    name: name,
    typeOfCusion: typeOfCusion,
    complexity: complexity,
    listOfIngredients: listOfIngredients,
    preparingTime: preparingTime,
    preparingInstruction: preparingInstruction,
    list: function () {
      return object.listOfIngredients;
    },
    time: function () {
      if (object.preparingTime < 15) {
        return `under 15min`;
      } else {
        return `more than 15 min`;
      }
    },
    changeCuisine: function (cuisine) {
      object.typeOfCusion = cuisine;
      return object.typeOfCusion;
    },

    deleteItem: function (item) {
      for (var i = 0; i < object.listOfIngredients.length; i++) {
        if (object.listOfIngredients[i] == item) {
          object.listOfIngredients.splice(i, 1);
        }
      }
      return object.listOfIngredients;
    },
  };
  return `${object.deleteItem("asd")}`;
}

console.log(recipe("asd", "chinesee", 5, ["asd", "dfg"], 13, "asdads"));
