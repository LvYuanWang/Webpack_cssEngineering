import bannerStyle from "../css/bannerStyle.js";
import { pagerStyle, customBorder } from "../css/pagerStyle.js";
import otherStyle from "../css/otherStyle.js";
import { addStyle } from "./utils/addStyle.js";

const bannerDiv = document.createElement("div");
bannerDiv.innerText = "Hello, css in js!";
const bannerElementStyle = {
  color: "#fff",
  fontSize: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}
addStyle(bannerDiv, bannerElementStyle, bannerStyle, otherStyle);
document.body.appendChild(bannerDiv);

const pagerDiv = document.createElement("div");
const pagerElementStyle = {
  background: "blue",
  borderRadius: "50%"
}
addStyle(pagerDiv, pagerElementStyle, pagerStyle, customBorder(3, "yellow"));
document.body.appendChild(pagerDiv);