import style from "./assets/index.less";

const app = document.createElement('div');
app.className = style.app;
app.innerHTML = '<h1>Hello, Less!!</h1>';

const container = document.createElement('div');
container.className = style.container;
container.innerText = "Hello, Less!!";
app.appendChild(container);

document.body.appendChild(app);