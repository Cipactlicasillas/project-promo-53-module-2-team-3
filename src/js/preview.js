'use strict';

////RECOGER DATOS DE INPUTS PARA AÑADIR EN LA PREVISUALIZACION


//// QUERY SELECTOR

const photoValue = document.querySelector('#insert_photo');
const emailValue =document.querySelector('#email');
const nameValue =document.querySelector('#name');
const ageValue =document.querySelector('#age');
const qualityValue =document.querySelector('#quality');
const parrafo=document.querySelector('.result');



/// FUNCIONES

//photo funcion

emailValue.addEventListener('input' , () =>{
    parrafo.innerHTML+=emailValue.value;
});

nameValue.addEventListener('input' , () =>{
    parrafo.innerHTML+=nameValue.value;
});

ageValue.addEventListener('input' , () =>{
    parrafo.innerHTML+=ageValue.value;
});

qualityValue.addEventListener('input' , () =>{
    parrafo.innerHTML+=qualityValue.value;
});




// EVENTOS -LLAMADA