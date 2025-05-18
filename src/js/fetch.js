<<<<<<< HEAD
=======
"use strict";
>>>>>>> 0730052a44977f6cecbe7b198abe5da6bb8c93fc

const createBtn = document.querySelector(".js_create");
const alertResult = document.querySelector(".js_alert");

const handleClickCreateBtn = (ev) => {
  ev.preventDefault();
<<<<<<< HEAD

  const genderChecked = document.querySelector('.js_gender');
  const placeChecked = document.querySelector('.js_place');
  const drinkChecked = document.querySelector('.js_drink');
  const foodChecked = document.querySelector('.js_food');

  const info = {
    "field1": genderChecked.value,
    "field2": placeChecked.value,
    "field3": drinkChecked.value,
    "field4": foodChecked.value,
    "field5": emailValue.value,
    "field6": nameValue.value,
    "field7": ageValue.value,
    "field7": qualityValue,
    "photo": fr.result
  };

  //validación de entrada de usuari@
 if( genderChecked.value === '' ||  placeChecked.value === '' || drinkChecked.value === '' || foodChecked.value === '' ||  emailValue.value  === ''  ||  nameValue.value  === ''  ||  ageValue.value === '' ||  qualityValue.value === '' ) {
    alertResult.innerHTML = 'Faltan campos por rellenar';
  
 } else {
    alertResult.innerHTML = 'Enviando la información';
=======
    const genderChecked = document.querySelector(".js_gender:checked");
      const placeChecked = document.querySelector(".js_place:checked");
      const drinkChecked = document.querySelector(".js_drink:checked");
      const foodChecked = document.querySelector(".js_food:checked");
>>>>>>> 0730052a44977f6cecbe7b198abe5da6bb8c93fc
 

  if (
    genderChecked === null ||
    placeChecked === null ||
    drinkChecked === null ||
    foodChecked === null ||
    emailValue.value === "" ||
    nameValue.value === "" ||
    ageValue.value === "" ||
    qualityValue.value === ""
  ) {
    alertResult.innerHTML = "Some information is missing, please check the form.";
  } else {
    alertResult.innerHTML = "Sending information";

 

      const info = {
        field1: ageValue.value,
        field2: genderChecked.value,
        field3: placeChecked.value,
        field4: drinkChecked.value,
        field5: foodChecked.value,
        field6: emailValue.value,
        field7: nameValue.value,
        field8: qualityValue.value,
        photo: fr.result,
      };

      console.log(info);

    fetch("https://dev.adalab.es/api/info/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(info),

      //// tiene los datos pero no lee los valores checkbox radio
      //// aparece undefined
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success === false) {
          alertResult.innerHTML =
            "The information could not be saved because some fields are missing.";
        } else {
          alertResult.innerHTML = `Your card information has been saved. You can view it at this address: <a href="http://localhost:5173/card.html?id=${data.infoID}">http://localhost:5173/card.html?id=${data.infoID}</a>`;
        }
      });
  }
};

createBtn.addEventListener("click", handleClickCreateBtn);
/// addevenlistener - aviso esta funcionando
