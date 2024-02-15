let searchUrl = "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/";
let categoryUrl = "https://botw-compendium.herokuapp.com/api/v3/compendium/category/";
const urlList = "https://botw-compendium.herokuapp.com/api/v3/compendium/all";
const outputElement = document.querySelector("#asset-grid");
const searchBarElement = document.querySelector("#search-bar");

const basicTemplate = (name, image, description, locations, categoryTemplate, dlc) => {
    return `<div class="asset-card">
                <h2 class="hylia-font">${name.toUpperCase()}</h2>
                <img src=${image} alt=${name}>
                <p class="segoe-font">${description}</p>
                <h3 class="hylia-font">Common Locations</h3>
                <p class="segoe-font">${!locations ? "No Common Locations" : locations}</p>
                ${categoryTemplate}
            </div>`;
}

const creaturesTemplate = (drops) => {
    let droppableItems = null;
    if (!Array.isArray(drops)) {
        droppableItems = "Rare Unknown";
    }
    else if (drops.length == 0) {
        droppableItems = "None";
    }
    else {
        droppableItems = drops;
    }
    return `<h3 class="hylia-font">Droppable Items</h3>
            <p class="segoe-font">${droppableItems}</p>`;
}

const materialsTemplate = (effect) => {
    return `<h3 class="hylia-font">Cooking Effect</h3>
            <p class="segoe-font">${!effect ? "None" : effect}</p>`;
}

const equipmentTemplate = (properties) => {
    return `<h3 class="hylia-font">Attack Power</h3>
            <p class="segoe-font">${properties.attack}</p>`;
}

const treasureTemplate = (drops) => {
    let droppableItems = null;
    if (!Array.isArray(drops)) {
        droppableItems = "Rare Unknown";
    }
    else if (drops.length == 0) {
        droppableItems = "None";
    }
    else {
        droppableItems = drops;
    }
    return `<h3 class="hylia-font">Droppable Items</h3>
            <p class="segoe-font">${droppableItems}</p>`;
}

const errorTemplate = (message) => {
    return `<div class="error-card segoe-font">${message}</div>`;
}

const serviceErrorHandler = (data) => {
    const html = errorTemplate(data);
    outputElement.innerHTML += html;
}

async function getItems(url, doThis) {
    const response = await fetch(url);
    const object = await response.json();

    if (response.ok) {
        doThis(object.data);
    }
    else {
        serviceErrorHandler(object.message);
    }
}

const createItemCard = (data) => {
    let html = null;
    let categoryTemplate = null
    let category = data.category;

    switch (category) {
        case "creatures":
            if (data.edible) {
                categoryTemplate = materialsTemplate(data.cooking_effect);
            }
            else {
                categoryTemplate = creaturesTemplate(data.drops);
            }
            break;

        case "monsters":
            categoryTemplate = creaturesTemplate(data.drops);
            break;

        case "materials":
            categoryTemplate = materialsTemplate(data.cooking_effect);
            break;

        case "equipment":
            categoryTemplate = equipmentTemplate(data.properties);
            break;

        case "treasure":
            categoryTemplate = treasureTemplate(data.drops);
            break;

        default:
            categoryTemplate = "<p></p>";
            break;
    }

    html = basicTemplate(data.name, data.image, data.description, data.common_locations, categoryTemplate, data.dlc);
    outputElement.innerHTML += html;
}

const reset = () => {
    outputElement.innerHTML = "";
}

searchBarElement.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && searchBarElement.value) {
        reset();
        let itemUrl = searchUrl + searchBarElement.value;
        getItems(itemUrl, createItemCard);
    }
})

const createItemCardList = (data) => {

    data.forEach((currentItem) => {
        createItemCard(currentItem);
    });

    document.querySelector("#loader").style.display = "none";
    document.querySelector("#asset-grid").style.display = "grid";
}

const createFilteredItemCardList = (data) => {
    let filteredData = data.filter((item) => item.edible);
    filteredData.forEach((item) => {
        createItemCard(item);
    })

    document.querySelector("#loader").style.display = "none";
    document.querySelector("#asset-grid").style.display = "grid";
}



const filterItems = () => {
    reset();
    
    let filter = document.querySelector("#filtered").value;
    

    switch (filter) {
        case "edible":
            document.querySelector("#asset-grid").style.display = "none";
            document.querySelector("#loader").style.display = "block";
            getItems(urlList, createFilteredItemCardList);
            break;

        case "all":
            document.querySelector("#asset-grid").style.display = "none";
            document.querySelector("#loader").style.display = "block";
            getItems(urlList, createItemCardList);
            break;
    
        default:
            let itemsUrl = categoryUrl + filter;
            document.querySelector("#asset-grid").style.display = "none";
            document.querySelector("#loader").style.display = "grid";
            getItems(itemsUrl, createItemCardList);
            break;
    }
}

getItems(urlList, createItemCardList);

document.querySelector("#filtered").addEventListener("change", filterItems);