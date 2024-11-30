const bannerStyle = require("./styles/banner.css");
const otherStyle = require("./styles/other.css");

const div = document.createElement("div");
div.className = `main ${bannerStyle.container}`;

const img = document.createElement("img");
img.src = require("../assets/partyAnimals.jpg").default;
div.appendChild(img);

const text = document.createElement("p");
text.innerHTML = "Party Animals";
text.className = otherStyle.text_color;
div.appendChild(text);

const content = document.createElement("div");
content.className = `${otherStyle.container} ${otherStyle.container_color} main`;
content.innerHTML = "Hello, css modules!";
div.appendChild(content);

document.body.appendChild(div);