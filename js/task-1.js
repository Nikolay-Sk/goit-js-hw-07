"use strict";
const titleRef = document.querySelectorAll("#categories > .item");

console.log(`В списке ${titleRef.length} категории.`);

const ollRef = titleRef.forEach((num) =>
  console.log(
    `Категория: ${num.querySelector("h2").textContent}\nКоличество элементов: ${
      num.querySelectorAll("li").length
    }`
  )
);
