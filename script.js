"use strict";

console.log(`I am console.`);

const tabItem = document.querySelector(".tab-item");
const startButton = document.querySelector(".start");

startButton.addEventListener("click", function () {
  startButton.classList.add("active");
  startButton.textContent = "Go On";
  startButton.style.color = "black";
});

tabItem.addEventListener("click", function () {
  tabItem.classList.add("active");
  console.log("tab-item");
});
