/* var boton = document.getElementById(`boton`);
function alerta(){
    console.log(`Gracias!`)
}

boton.addEventListener(`click`, alerta); */

var boton = document.getElementById(`boton`);

function llama() {
    console.log(`Gracias, por llamar!`)
}

boton.addEventListener(`click`, llama);



var parrafo = document.getElementsByClassName(`textos`)[0];

parrafo.addEventListener(`mouseover`, function(){
    console.log(`Hola!`);
});

parrafo.addEventListener(`mouseout`, function() {
    console.log(`Adios!`);
});