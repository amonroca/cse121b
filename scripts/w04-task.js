/* LESSON 3 - Programming Tasks */

/* Profile Object  */
myProfile = {
    name: "Amon Roca",
    photo: "images/Foto_3x4.png",
    favoriteFoods: ["mac and cheese", "babecue", "lemon pie", "cheese cake"],
    hobbies: ["videogame", "basketball", "running", "time with kids"],
    placesLived: []
};



/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Osasco, SP, Brazil",
        length: "33 years"
    }
);

myProfile.placesLived.push(
    {
        place: "João Pessoa, PB, Brazil",
        length: "2 years"
    }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
document.querySelector("#photo").setAttribute("src", myProfile.photo);

/* Lists Template Definitions */
const foodsElement = document.querySelector("#favorite-foods");
const placesElement = document.querySelector("#places-lived");
const hobbiesElement = document.querySelector("#hobbies");

const generateListMarkup = (list, templateCallback) => {
    const htmlList = list.map(templateCallback);
    return htmlList.join("");
}

const foodsTemplate = (food) => {
    return `<li>${food}</li>`;
}

const placesTemplate = (place) => {
    return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
}

const hobbiesTemplate = (hobbie) => {
    return `<li>${hobbie}</li>`;
}

/* Favorite Foods List*/
foodsElement.innerHTML = generateListMarkup(
    myProfile.favoriteFoods,
    foodsTemplate
);

/* Hobbies List */
hobbiesElement.innerHTML = generateListMarkup(
    myProfile.hobbies,
    hobbiesTemplate
);

/* Places Lived DataList */
placesElement.innerHTML = generateListMarkup(
    myProfile.placesLived,
    placesTemplate
);