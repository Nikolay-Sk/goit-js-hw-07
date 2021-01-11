"use strict";

const inputRef = document.getElementById("validation-input");

inputRef.oninput = () => {
  inputRef.classList.remove("invalid", "valid");
  if (inputRef.value.length === Number(inputRef.dataset.length)) {
    inputRef.classList.add("valid");
  } else {
    inputRef.classList.add("invalid");
  }
};
