const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const image = document.createElement("img");
image.setAttribute("alt", "Image for Activity 2");
image.setAttribute("src", "https://picsum.photos/200");
document.body.appendChild(image);

const newSection = document.createElement("section");
const newPaaragraph2 = document.createElement("p");
newSection.innerHTML = "<h2>CSE 121b</h2>";
newPaaragraph2.innerText = "Welcome to Javascript Language";
newSection.appendChild(newPaaragraph2);
document.body.appendChild(newSection);
