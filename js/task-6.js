"use strict";

let validationInput = document.getElementById("validation-input");
let dataLength = validationInput.getAttribute("data-length");
let parseDataLength = parseInt(dataLength, 10);

validationInput.oninput = function () {
  if (validationInput.value.length === parseDataLength) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  }
  if (validationInput.value.length === 0) {
    validationInput.classList.remove("valid");
    validationInput.classList.remove("invalid");
  }
  if (
    validationInput.value.length !== parseDataLength &&
    validationInput.value.length !== 0
  ) {
    validationInput.classList.add("invalid");
  }
};
