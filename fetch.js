const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "https://pokeapi.co/api/v2/pokemon";
let results = null;

async function getPokemon(url, doThis) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    // execute the callback
    doThis(data);
  }
}

function compare(a, b) {
    if (a.name > b.name) {
      return 1;
    } else if (a.name < b.name) {
      return -1;
    } else return 0;
  }
  
  function sortPokemon(list) {
    let sortedList = list.sort(compare);
    return sortedList;
  }

/* function doStuff(data) {
  results = data;
  const outputElement = document.querySelector("#output");
  const html = `<h2>${data.name}</h2><img src="${data.sprites.front_default}" alt="${data.name}">`;
  outputElement.innerHTML = html;
  console.log("first: ", results);
} */

function doStuff(data) {
    results = data;
    let abilities = "";
    results.abilities.forEach((element) => {
        abilities += `<br>${results.abilities.indexOf(element) + 1}. ${element.ability.name} `;
    });
    let types = "";
    results.types.forEach((element) => {
        types += `<br>${results.types.indexOf(element) + 1}. ${element.type.name}`;
    });
    const outputElement = document.querySelector("#pokeTable");
    const html = `<tr><td><img src="${data.sprites.front_default}" alt="${data.name}"></td><td><h3>${data.name}</h3></td><td>abilities: ${abilities}</td><td>types: ${types}</td></tr><br>`;
    outputElement.innerHTML += html;
    console.log("first: ", results);
  }

/* function doStuffList(data) {
  console.log(data);
  const pokeListElement = document.querySelector("#outputList");
  let pokeList = data.results;
  pokeList = sortPokemon(pokeList);
  pokeList.forEach((currentItem) => {
    const html = `<li data-url="${currentItem.url}">${currentItem.name}</li>`;
    pokeListElement.innerHTML += html;
  });
} */

function doStuffList(data) {
    console.log(data);
    let pokeList = data.results;
    pokeList = sortPokemon(pokeList);
    pokeList.forEach((currentItem) => {
      getPokemon(currentItem.url, doStuff);
    });
  }

// getPokemon(url, doStuff);

console.log("second: ", results);

getPokemon(urlList, doStuffList);