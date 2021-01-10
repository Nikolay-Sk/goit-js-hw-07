"use strict";
const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const ingredientsRef = document.querySelector("#ingredients");

const fIngredientRef = (ingredient) => {
  const ingRef = document.createElement("li");
  ingRef.textContent = ingredient;
  return ingRef;
};
const listIngRef = ingredients.map((ingredient) => fIngredientRef(ingredient));

ingredientsRef.append(...listIngRef);
