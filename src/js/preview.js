"use strict";

////RECOGER DATOS DE INPUTS PARA AÑADIR EN LA PREVISUALIZACION

//// QUERY SELECTOR

const photoValue = document.querySelector("#insert_photo");
const emailValue = document.querySelector("#email");
const nameValue = document.querySelector("#name");
const ageValue = document.querySelector("#age");
const qualityValue = document.querySelector("#quality");
const parrafo = document.querySelector(".result");

const renderName = document.querySelector(".js-name");
const renderAge = document.querySelector(".js-age");
const renderEmail = document.querySelector(".js-email");
const renderQuality = document.querySelector(".js-quality");
// falta IMAGEN RENDER

/// FUNCIONES
//photo funcion

emailValue.addEventListener("input", () => {
  renderEmail.innerHTML = emailValue.value;
});

nameValue.addEventListener("input", () => {
  renderName.innerHTML = nameValue.value;
});

ageValue.addEventListener("input", () => {
  renderAge.innerHTML = ageValue.value;
});

qualityValue.addEventListener("input", () => {
  renderQuality.innerHTML = qualityValue.value;
});

// EN VIDEO DAYANA  APLICA  EL ADDEVENTLISTENER 'CHANGE' SOBRE TODA LA CAJA  .FORM  Y HACE CONDICIONAL IF/ELSE  SOBRE LOS ID DE INPUT
// --- CREO Q NO ES NECESARIO PORQUE A NOSOTRAS NOS  FUNCIONA COMO LO TENEMOS ---(video 8)

/// IVAN HACE UNA LISTA OBJETOS DATA PERO CREO QUE SOLO SIRVE PORQUE ESCRIBE EN UNA SOLA CAJA .INNERHTML, NOSOTRAS ESCRIBIMOS EN CAJAS DIFERENTES DE NUESTRO GRID ----HAGO LA CAJA DATA POR SI ACASO---

/// HAGO CONDICINAL PARA QUE APAREZCA UN 'PLACEHOLDER' EN PREVIEW

const data = {
  name: "",
  age: "",
  email: "",
  quality: "",
};
function updatePreview() {
  if (emailValue === "") {
    renderEmail.innerHTML = data.email;
  } else {
    renderEmail.innerHTML = "Your email";
  }
}

// EVENTOS -LLAMADA
