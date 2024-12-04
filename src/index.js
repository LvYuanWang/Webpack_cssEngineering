import style from "./assets/banner.css";
import pagerStyle from "./assets/pager.css";

const banner = document.createElement("div");
banner.className = style.context_container;

const otherContainer = document.createElement("div");
otherContainer.className = pagerStyle.container;

document.body.appendChild(otherContainer);
document.body.appendChild(banner);