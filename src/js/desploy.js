'use strict';

const btnForm1 = document.querySelector(".js_btnshow1");
const btnForm2 = document.querySelector(".js_btnshow2");
const btnForm3 = document.querySelector(".js_btnshow3");
const formHdn1 = document.querySelector(".js_hidden1");
const formHdn2 = document.querySelector(".js_hidden2");
const formHdn3 = document.querySelector(".js_hidden3");

btnForm1.addEventListener("click", (ev) => {
  ev.preventDefault();
  formHdn1.classList.toggle("formhidden");
});

btnForm2.addEventListener("click", (ev) => {
  ev.preventDefault();
  formHdn2.classList.toggle("formhidden");
});

btnForm3.addEventListener("click", (ev) => {
  ev.preventDefault();
  formHdn3.classList.toggle("formhidden");
});

