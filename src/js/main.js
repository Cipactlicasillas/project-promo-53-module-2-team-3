'use strict';

console.log('>> Ready :)');

const btnShow1 = document.querySelector('.js_btnshow1');
const btnShow2 = document.querySelector('.js_btnshow2');
const btnShow3 = document.querySelector('.js_btnshow3');

const jsformMain = document.querySelector('.js_form_main');

const jsform1 = document.querySelector('.js_form1');
const jsform2 = document.querySelector('.js_form2');

btnShow1.addEventListener('click' , () =>{
    jsform1.innerHTML = jsform1.innerHTML  + `
    <form action="" method="post">
      <fieldset class="form">
        <legend>About you</legend>

        <label for="insert_photo">Add your photo:</label>
        <input id="insert_photo" type="file" name="insert_photo" />

        <label for="email">Email: </label>
        <input id="email" type="email" />

        <label for="name">Name:</label>
        <input id="name" type="text" name="name" />

        <label for="age">Age:</label>
        <input id="age" type="text" name="age" />

        <label for="quality">One quality that defines you.</label>
        <input id="quality" type="text" name="quality" />
      </fieldset>
    </form>
`;

} );