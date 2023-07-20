

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
  let header = document.querySelector(".header");
  if (header) {
    header.className = `header is-sticky ${color}`;
  }

  let badge = document.querySelector(".badge");
  if (badge) {
    badge.className = `badge ${color}`;
  }

  let button = document.querySelector(".button");
  if (button) {
    button.className = `button ${color}`;
  }

  let checkbox = document.querySelector(".checkbox");
  if (checkbox) {
    checkbox.className = `checkbox ${color}`;
  }

  let message = document.querySelector(".message");
  if (message) {
    message.className = `message ${color}`;
  }

  let card = document.querySelector(".card");
  if (card) {
    card.className = `card ${color}`;
  }
}