"use strict";

const Mymodal = document.querySelector(".Mymodal");
setTimeout(function () {
  Mymodal.style.display = "flex";
}, 2000);
const buttn = document.querySelector(".mybutton");
buttn.addEventListener("click", function () {
  Mymodal.style.display = "none";
});
