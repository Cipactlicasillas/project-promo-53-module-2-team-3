'use strict';

////RECOGER DATOS DE INPUTS PARA AÑADIR EN LA PREVISUALIZACION


//// QUERY SELECTOR

const photoValue = document.querySelector('#insert_photo');
const emailValue =document.querySelector('#email');
const nameValue =document.querySelector('#name');
const ageValue =document.querySelector('#age');
const qualityValue =document.querySelector('#quality');
const parrafo=document.querySelector('.result');

const  renderName = document.querySelector('.js-name');
const renderAge = document.querySelector('.js-age');
const renderEmail =document.querySelector('.js-email');
const renderQuality =document.querySelector('.js-quality');
// falta IMAGEN RENDER


/// FUNCIONES

//photo funcion

emailValue.addEventListener('input' , () =>{
    renderEmail.innerHTML=emailValue.value;
});

nameValue.addEventListener('input' , () =>{
    renderName.innerHTML=nameValue.value;
});

ageValue.addEventListener('input' , () =>{
    renderAge.innerHTML=ageValue.value;
});

qualityValue.addEventListener('input' , () =>{
    renderQuality.innerHTML=qualityValue.value;
});




// EVENTOS -LLAMADA