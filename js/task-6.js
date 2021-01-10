"use strict";

let validationInput = document.getElementById("validation-input");
let dataLength = validationInput.getAttribute("data-length");
let parseDataLength = parseInt(dataLength, 10);
const valInClasslist = validationInput.classList;

validationInput.oninput = function () {
  if (
    validationInput.value.length !== parseDataLength &&
    validationInput.value.length !== 0
  ) {
    valInClasslist.add("invalid");
  } else if (validationInput.value.length === parseDataLength) {
    valInClasslist.add("valid");
    valInClasslist.remove("invalid");
  } else {
    valInClasslist.remove("valid");
    valInClasslist.remove("invalid");
  }
};
