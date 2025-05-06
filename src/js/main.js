"use strict";

//QUERY SELECTOR BOTONES DE FORMULARIO

const btnShow1 = document.querySelector(".js_btnshow1");
const btnShow2 = document.querySelector(".js_btnshow2");
const btnShow3 = document.querySelector(".js_btnshow3");

const jsformMain = document.querySelector(".js_form_main");

const jsform1 = document.querySelector(".js_form1");
const jsform2 = document.querySelector(".js_form2");
const jsform3 = document.querySelector(".js_form3");

//FUNCIONES

function data (){
  const photo = document.getElementById("insert_photo").value;
  const email = document.getElementById("email").value;
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
}




//EVENTOS
btnShow1.addEventListener("click", () => {
  const contentForm1 = `<form action="" method="post">
    <fieldset class="form">
      <legend>About you</legend>

      <label for="insert_photo">Add your photo:</label>
      <input id="insert_photo" type="file" name="insert_photo" />

      <label for="email">Email: </label>
      <input id="email" type="email" placeholder="Enter your email addres"  />

      <label for="name">Name:</label>
      <input id="name" type="text" name="name" placeholder="Enter your name" />

      <label for="age">Age:</label>
      <input id="age" type="text" name="age" placeholder="Enter your age" />

      <label for="quality">One quality that defines you.</label>
      <input id="quality" type="text" name="quality"  placeholder="Enter one quality" />
    </fieldset>
  </form>`;
  jsform1.innerHTML = contentForm1;
});

btnShow2.addEventListener("click", () => {
  const contentForm2 = `<h3 class="title_checkOne">Check one choice to meet you better!</h3><fieldset class="form">
      <legend>What place do you prefer?</legend>
      <div class="place1">
        <input type="radio" name="place" id="beach" value="p1" />
        <label for="beach">Beach</label>
        <input type="radio" name="place" id="mountain" value="p2" />
        <label for="mountain">Mountain</label>
      </div>
    </fieldset>
    <fieldset class="form">
      <legend>What drink do you prefer?</legend>
      <div class="drink1">
        <input type="radio" name="drink" id="beer" value="p1" />
        <label for="beer">Beer   </label>
        <input type="radio" name="drink" id="wine" value="p2" />
        <label for="wine">Wine</label>
      </div>
    </fieldset>
    <fieldset class="form">
      <legend>What food do you prefer?</legend>
      <div class="food1">
        <input type="radio" name="food" id="meat" value="p1" />
        <label for="meat">Meat</label>
        <input type="radio" name="food" id="vegan" value="p2" />
        <label for="vegan"> Vegan</label>
      </div>
    </fieldset>`;
  jsform2.innerHTML = contentForm2;
});

btnShow3.addEventListener("click", () => {
  const contentForm3 = `<p>BOTON CREAR TARJETA</p>
      <br />
      <a>La tarjeta ha sido creada</a>`;
  jsform3.innerHTML = contentForm3;
});


//