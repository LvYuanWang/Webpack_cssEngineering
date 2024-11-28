require("./style/banner.css");
const div = document.createElement("div");
div.className = "banner_container";

const img = document.createElement("img");
img.src = require("../assets/partyAnimals.jpg").default;
div.appendChild(img);

const text = document.createElement("p");
text.innerHTML = "Party Animals";
text.className = "text_color";
div.appendChild(text);

document.body.appendChild(div);