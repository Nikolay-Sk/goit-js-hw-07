"use strict";
const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryRef = document.querySelector("#gallery");
galleryRef.classList.add("gallery");
console.log(galleryRef);

// const fgalleryRef = images.map((image) => {
//   const imgRef = document.createElement("li");
//   imgRef.insertAdjacentHTML(
//     "afterbegin",
//     `<img src = '${image.url}' alt = '${image.alt}'>`
//   );
//   return imgRef;
// });

// galleryRef.append(...fgalleryRef);

const fgalleryRef = images.map((image) => {
  const imgRef = document.createElement("li");
  imgRef.textContent = galleryRef.insertAdjacentHTML(
    "afterbegin",
    `<li> <img src = '${image.url}' width="300" alt = '${image.alt}'></li>`
  );
  return imgRef;
});
