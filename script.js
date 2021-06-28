"use strict";
console.log("test");
const mainSection = document.querySelector(".main-section");
const mainInput = document.querySelector(".main-input");
const ageInput = document.querySelector(".age-input");
const headWelcome = document.querySelector(".head-welcome");
const mainLabel = document.querySelector(".main-label");
const errorMessage = document.querySelector(".error-message");
const buttonSubmit = document.querySelector(".btn-submit");
const heartImage = document.querySelector(".animation-heart");
const resultText = document.querySelector(".result");
let count = 0;
const symbols = [".", "/", "?", "./", "//"];
buttonSubmit.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    count === 0 &&
    mainInput.value &&
    !symbols.some((sym) => sym === mainInput.value)
  ) {
    mainInput.value = "";

    mainLabel.textContent = "Please enter your age :";
    mainInput.classList.add("hidden");
    ageInput.classList.remove("hidden");
    count++;
    console.log(count);
  }
  if (count === 1 && ageInput.value) {
    ageInput.value = "";
    mainLabel.textContent = "Please enter your partners last name :";
    ageInput.classList.add("hidden");
    mainInput.classList.remove("hidden");
    count++;
  }
  if (
    count === 2 &&
    mainInput.value &&
    !symbols.some((sym) => sym === mainInput.value)
  ) {
    mainInput.value = "";

    mainLabel.textContent = "Please enter your partners age :";
    mainInput.classList.add("hidden");
    ageInput.classList.remove("hidden");
    count++;
    console.log(count);
  }
  if (count === 3 && ageInput.value) {
    ageInput.classList.add("hidden");
    buttonSubmit.classList.add("hidden");
    mainLabel.textContent = "Here we go 💞💌";
    setTimeout(function () {
      mainLabel.textContent = "Calculating....";
      heartImage.classList.remove("hidden");
      setTimeout(function () {
        const percentage = Math.floor(Math.random() * 100 + 1);
        mainLabel.textContent = `Love Percentage is  ${percentage}%`;
        // CSS animation of heart

        heartImage.style.animation = "none";
        if (percentage <= 20) {
          heartImage.src =
            "./resources/cat-hunting-mice-vector-cartoon-illustration-coloring-page-book-198352608.jpg";
          resultText.classList.remove("hidden");
          resultText.textContent = "Your relationship is like cat and mice 🥵";
        }
        if (percentage <= 50 && percentage > 20) {
          heartImage.src =
            "./resources/145940023-gym-love-heart-logo-lovely-gym-or-sport-business-emblem-logo-gym-wisdom-or-t-shirt-motivation-poster.jpg";

          resultText.classList.remove("hidden");
          resultText.textContent = "Your relationship is not so good! 🥱";
        }
        if (percentage > 50 && percentage <= 70) {
          heartImage.src = "./resources/Lovely_logo.png";
          resultText.classList.remove("hidden");
          resultText.textContent = "Your relationship is good enough to go 😉";
        }
        if (percentage > 70) {
          heartImage.src = "./resources/800px_COLOURBOX2519755.jpg";
          resultText.classList.remove("hidden");
          resultText.textContent = "Your relationship is the best! 💕";
        }
      }, 5000);
    }, 1000);
  }
});
// console.log(symbols.some((sym) => sym !== mainInput.value));
console.log(Math.floor(Math.random() * 100 + 1));
