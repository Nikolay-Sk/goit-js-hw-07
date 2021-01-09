"use strict";

const btnOneRef = document.querySelector("[data-action='decrement']");
const btnTwoRef = document.querySelector("[data-action='increment']");
const counterRef = document.querySelector("#value");

let counterValue = 0;
const increment = () => {
  counterValue += 1;

  counterRef.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;

  counterRef.textContent = counterValue;
};

btnTwoRef.addEventListener("click", increment);
btnOneRef.addEventListener("click", decrement);
