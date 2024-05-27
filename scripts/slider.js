"use strict";
const sliderItem = document.querySelectorAll(".slider-item");
const arrow = document.querySelectorAll(".slide-arrow");
const sliderText = document.querySelectorAll(".slider-text");
let countSlide = 0;
let countText = 0;

function showSlide(count) {
  sliderItem[countSlide].classList.remove("active");
  sliderItem[count].classList.add("active");
  countSlide = count;
}

function showText(count) {
  sliderText[countText].classList.remove("active");
  sliderText[count].classList.add("active");
  countText = count;
}

arrow.forEach((item) => {
  item.addEventListener("click", (event) => {
    if (event.target.classList.contains("next-arrow")) {
      let index = countSlide - 1;

      if (index < 0) {
        index = sliderItem.length - 1;
      }
      showSlide(index);
      showText(index);
    } else if (event.target.classList.contains("back-arrow")) {
      let index = countSlide + 1;
      if (index >= sliderItem.length) {
        index = 0;
      }
      showSlide(index);
      showText(index);
    }
  });
});

showSlide(countSlide);
showText(countText);
