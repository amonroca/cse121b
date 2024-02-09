/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        const article = document.createElement("article");
        const h3 = document.createElement("h3");
        const img = document.createElement("img");
        h3.textContent = temple.templeName;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", temple.location);
        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);
    });
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");

    if (response.ok) {
        templeList = await response.json();
        displayTemples(templeList);
    }
}

/* reset Function */
const reset = function(){
    templesElement.innerHTML = "";
}

/* filterTemples Function */
const filterTemples = function(temples){
    reset();
    
    let filter = document.querySelector("#filtered").value;

    switch (filter) {
        case "utah":
            displayTemples(temples.filter( temple => temple.location.includes("Utah")));
            break;

        case "notutah":
            displayTemples(temples.filter( temple => !temple.location.includes("Utah")));
            break;

        case "older":
            displayTemples(temples.filter( temple => new Date(temple.dedicated).getFullYear() < new Date(1950, 0, 1).getFullYear()));
            break;
    
        default:
            displayTemples(temples);
            break;
    }
}

getTemples();

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList) });