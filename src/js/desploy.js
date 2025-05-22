"use strict";

const formBtn_1 = document.querySelector(".js_btnshow1");
const formBtn_2 = document.querySelector(".js_btnshow2");
const formBtn_3 = document.querySelector(".js_btnshow3");
const formHdn_1 = document.querySelector(".js_hidden1");
const formHdn_2 = document.querySelector(".js_hidden2");
const formHdn_3 = document.querySelector(".js_hidden3");

formBtn_1.addEventListener("click", (ev) => {
  ev.preventDefault();
  formHdn_1.classList.toggle("formhidden");
});

formBtn_2.addEventListener("click", (ev) => {
  ev.preventDefault();
  formHdn_2.classList.toggle("formhidden");
});

formBtn_3.addEventListener("click", (ev) => {
  ev.preventDefault();
  formHdn_3.classList.toggle("formhidden");
});
