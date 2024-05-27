"use strict";

history.scrollRestoration = "manual";

const burgerMenu = document.querySelector(".burger-menu");
burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("tap-burger");
});

const disappearingButton = document.querySelectorAll(".history-button");

disappearingButton.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.add("disappearing");

    const currentPeriod = button.parentElement;
    const nextPeriod = currentPeriod.nextElementSibling;
    nextPeriod && nextPeriod.classList.add("visible").remove("hidden");

    setTimeout(function () {
      button.remove();
    }, 3000);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  let popularItem = document.querySelectorAll(".popular-item");
  function scrollAnimation() {
    let windowHeight = window.innerHeight;
    popularItem.forEach((item) => {
      let itemRect = item.getBoundingClientRect().top;
      itemRect < windowHeight && item.classList.add("animated");
    });
  }
  window.addEventListener("scroll", scrollAnimation);
  scrollAnimation();
});

function toggleContent(id) {
  var contents = document.querySelectorAll(".toggle");
  contents.forEach((content) => {
    if (content.id === id) {
      content.style.display = "block";
      localStorage.setItem("activeSection", id);
    } else {
      content.style.display = "none";
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  var activeSection = localStorage.getItem("activeSection");
  if (activeSection) {
    toggleContent(activeSection);
  }
});
