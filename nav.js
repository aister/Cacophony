const nav = document.querySelector("#nav");

const navList = [
  ["About", "./about.html"],
  ["Contact", "./contact.html"],
  ["FAQ", "./faq.html"]
]

nav.innerHTML = `
      <a id="logo" href="/">
          <img alt="Cacophony" src="./img/logo.png" />
      </a>
`;

navList.forEach(i => {
  nav.innerHTML += `<a class="nav" href="${i[1]}">${i[0]}</a>`;
})