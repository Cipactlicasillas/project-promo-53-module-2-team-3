
const createBtn = document.querySelector('.js_create');
const alertResult = document.querySelector('.js_alert');

const handleClickCreateBtn = (ev) => {
  ev.preventDefault();

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
 
 
    fetch(
      'https://dev.adalab.es/api/info/data',
      {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(info)
      }
    )
    .then( res => res.json() )
    .then( data => {
      
        /// BUSCAR VIDEO DE DATA SUCCESS
      
      if( data.success === false ) {
        alertResult.innerHTML = 'No se ha podido guardar la información porque faltan campos por rellenar.';
      }
      else {
        alertResult.innerHTML = `Se ha guardado la información de tu tarjeta. Puedes verla en esta dirección: <a href="http://localhost:5173/card.html?id=${data.infoID}">http://localhost:5173/card.html?id=${data.infoID}</a>`;
      }
    });
  }
};

 createBtn.addEventListener('click', handleClickCreateBtn);
 /// addevenlistener - aviso esta funcionando
 
