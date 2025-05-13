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

/// IVAN HACE UNA LISTA OBJETOS DATA PERO CREO QUE SOLO SIRVE PORQUE ESCRIBE EN UNA SOLA CAJA .INNERHTML, NOSOTRAS ESCRIBIMOS EN CAJAS DIFERENTES DE NUESTRO GRID ------HAGO LA CAJA DATA POR SI ACASO---

/// HAGO CONDICIONAL PARA QUE APAREZCA UNA ESPECIE DE 'PLACEHOLDER' EN PREVIEW

const data = {
  name: "",
  age: "",
  email: "",
  quality: "",
};
function preEmail() {
  if (data.email === "") {
    renderEmail.innerHTML = "Your email";
  } else {
    renderEmail.innerHTML = data.email;
  }
};
function preName() {
  if (data.name === "") {
    renderName.innerHTML = "Your name";
  } else {
    renderName.innerHTML = data.name;
  }
};

function preAge() {
  if (data.age === "") {
    renderAge.innerHTML = "Your age";
  } else {
    renderAge.innerHTML = data.age;
  }
};

function preQuality() {
  if (data.quality === "") {
    renderQuality.innerHTML = "Tell us about you!";
  } else {
    renderQuality.innerHTML = data.quality;
  }
};

// EVENTOS -LLAMADA



///radio check

// function mostrarIcono() {document.getElementById('icono').style.display = 'block'; }

// function ocultarIcono() {
// document.getElementById('icono').style.display = 'none';
// }
const placeOpt = document.getElementsByName("place");

const resultado = document.querySelector('.preview-choose');
 function placeSelect() {
      
      console.log('Hola')

      for (let placeObj of placeOpt) {
        console.log(placeObj.checked, placeObj.value );
        if (placeObj.checked) {
          if (placeObj.value === "p1") {
            resultado.innerHTML = `<i class="fa-solid fa-umbrella-beach"></i>`;
          } else  {
            resultado.innerHTML =`<i class="fa-solid fa-mountain-sun"></i>`;
          }
           
    }}};

  for (let placeObj of placeOpt) {
    placeObj.addEventListener('input', placeSelect)
  } 
    