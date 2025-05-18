"use strict";

////RECOGER DATOS DE INPUTS PARA AÑADIR EN LA PREVISUALIZACION

//// QUERY SELECTOR

const photoValue = document.querySelector("#insert_photo");
const emailValue = document.querySelector("#email");
const nameValue = document.querySelector("#name");
const ageValue = document.querySelector("#age");
const qualityValue = document.querySelector("#quality");

const renderName = document.querySelector(".js-name");
const renderAge = document.querySelector(".js-age");
const renderEmail = document.querySelector(".js-email");
const renderQuality = document.querySelector(".js-quality");



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

const datas = {
  name: "",
  age: "",
  email: "",
  quality: "",
};
function preEmail() {
  if (datas.email === "") {
    renderEmail.innerHTML = "Your email";
  } else {
    renderEmail.innerHTML = datas.email;
  }
}
function preName() {
  if (datas.name === "") {
    renderName.innerHTML = "Your name";
  } else {
    renderName.innerHTML = datas.name;
  }
}

function preAge() {
  if (datas.age === "") {
    renderAge.innerHTML = "Your age";
  } else {
    renderAge.innerHTML = datas.age;
  }
}

function preQuality() {
  if (datas.quality === "") {
    renderQuality.innerHTML = "Tell us about you!";
  } else {
    renderQuality.innerHTML = datas.quality;
  }
}

// EVENTOS -LLAMADA

///radio check

const placeOpt = document.getElementsByName("place");

const resultado = document.querySelector(".preview-choose");
function placeSelect() {
  for (let placeObj of placeOpt) {
    if (placeObj.checked) {
      if (placeObj.value === "p1") {
        resultado.innerHTML += `<i class="fa-solid fa-umbrella-beach fa-xl"></i>`;
      } else {
        resultado.innerHTML += `<i class="fa-solid fa-mountain-sun fa-xl"></i>`;
      }
    }
  }
}

const drinkOpt = document.getElementsByName("drink");

function drinkSelect() {
  for (let drinkObj of drinkOpt) {
    if (drinkObj.checked) {
      if (drinkObj.value === "p1") {
        resultado.innerHTML += `<i class="fa-solid fa-beer-mug-empty fa-xl"></i>`;
      } else {
        resultado.innerHTML += `<i class="fa-solid fa-wine-glass-empty fa-xl"></i>`;
      }
    }
  }
}

const foodOpt = document.getElementsByName("food");

function foodSelect() {
  for (let foodObj of foodOpt) {
    if (foodObj.checked) {
      if (foodObj.value === "p1") {
        resultado.innerHTML += `<i class="fa-solid fa-burger fa-xl"></i>`;
      } else {
        resultado.innerHTML += `<i class="fa-solid fa-leaf fa-xl"></i>`;
      }
    }
  }
}

function handleClickPref() {
  resultado.innerHTML = ""; // Quita los tres iconos

  placeSelect();
  drinkSelect();
  foodSelect();
}

for (let placeObj of placeOpt) {
  placeObj.addEventListener("input", handleClickPref);
}
for (let drinkObj of drinkOpt) {
  drinkObj.addEventListener("input", handleClickPref);
}
for (let foodObj of foodOpt) {
  foodObj.addEventListener("input", handleClickPref);
}

/// ADD GENDER

const renderGender = document.querySelector(".js-gender");
const genderOpt = document.getElementsByName("gender");

function genderSelect() {
  for (let genderObj of genderOpt) {
    if (genderObj.checked) {
      if (genderObj.value === "p3") {
        renderGender.innerHTML = `Interested in: Women`;
      } else if (genderObj.value === "p4") {
        renderGender.innerHTML = `Interested in: Men`;
      } else if (genderObj.value === "p5") {
        renderGender.innerHTML = `Interested in: Both`;
      }
    }
  }
}

function handleClickGen() {
  renderGender.innerHTML = "";
  genderSelect();
}
for (let genderObj of genderOpt) {
  genderObj.addEventListener("input", handleClickGen);
}
