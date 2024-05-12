const nav = document.querySelector("#nav");

const navList = [
  ["Home", "./index.html"],
  ["About", "./about.html"],
  ["Contact", "./contact.html"],
  ["FAQ", "./faq.html"]
]

let menuContent = "";
navList.forEach(i => {
  menuContent += `<a class="nav" href="${i[1]}">${i[0]}</a>`;
})

if (typeof setting == "undefined") nav.innerHTML = `<div style="width: 60px"></div>`;

let elem = document.createElement("a");
elem.id = "logo";
elem.href = "./index.html";
elem.innerHTML = `<img alt="Cacophony" src="./img/logo.png" />`;
nav.appendChild(elem);

elem = document.createElement("div");
elem.id = "menu";
elem.innerHTML = `
  <img src="./img/menu.png">
  <div id="menuContent">${menuContent}</div>
`;
elem.onclick = () => { elem.classList.toggle("active"); }
nav.appendChild(elem);