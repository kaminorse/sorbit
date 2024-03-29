

function toggleHamburger() {
  let hamburger = document.querySelector(".hamburger");
  if (hamburger) {
    if (hamburger.classList.contains("is-active")) {
      hamburger.classList.remove("is-active");
    } else {
      hamburger.classList.add("is-active");
    }
  }
  let navMenu = document.querySelector(".nav-menu");
  if (navMenu) {
    if (navMenu.classList.contains("is-active")) {
      navMenu.classList.remove("is-active");
    } else {
      navMenu.classList.add("is-active");
    }
  }
}

function changeColorScheme(colorScheme) {
  let tabula = document.querySelector(".tabula");
  if (tabula) {
    tabula.dataset.colorScheme = colorScheme;
  }
}

function changeColor(color) {
  document.querySelectorAll(".header").forEach((elem) => {
    elem.className = `header is-sticky ${color}`;
  });

  document.querySelectorAll(".badge").forEach((elem) => {
    elem.className = `badge ${color}`;
  });

  document.querySelectorAll(".button").forEach((elem) => {
    elem.className = `button ${color}`;
  });

  document.querySelectorAll(".card").forEach((elem) => {
    elem.className = `card ${color}`;
  });

  document.querySelectorAll(".checkbox").forEach((elem) => {
    elem.className = `checkbox ${color}`;
  });

  document.querySelectorAll(".hamburger").forEach((elem) => {
    elem.className = `hamburger ${color}`;
  });

  document.querySelectorAll(".link").forEach((elem) => {
    elem.className = `link ${color}`;
  });

  document.querySelectorAll(".message").forEach((elem) => {
    elem.className = `message ${color}`;
  });

  document.querySelectorAll(".nav").forEach((elem) => {
    elem.className = `nav ${color}`;
  });

  document.querySelectorAll(".gingham").forEach((elem) => {
    elem.className = `gingham ${color}-600`;
  });

  document.querySelectorAll(".stripe").forEach((elem) => {
    elem.className = `stripe ${color}-600`;
  });

}