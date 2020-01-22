//Evento "click"

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


//Evento "Mouseover y "Mouseout".

var parrafo = document.getElementsByClassName(`textos`)[0];

parrafo.addEventListener(`mouseover`, function(){
    console.log(`Hola!`);
});

parrafo.addEventListener(`mouseout`, function() {
    console.log(`Adios!`);
});

//Evento Focus y blur

var campoNombre = document.getElementById(`names`);

campoNombre.addEventListener(`focus`, function() {
    campoNombre.setAttribute(`value`, `Nombre`)
});

campoNombre.addEventListener(`blur`, function() {
    alert(`Ingresa tu nombre correctamente.`)
});


//Evento Change

function elegirColor() {
    var estadoActivo = document.getElementById(`ColorFavoritos`).checked;
     
    if(estadoActivo == true) {
        document.getElementById(`verde`).disabled = false;
        document.getElementById(`azul`).disabled = false;
        document.getElementById(`otros`).disabled = false;
    }else {
        document.getElementById(`verde`).disabled = true;
        document.getElementById(`azul`).disabled = true;
        document.getElementById(`otros`).disabled = true;
    }

}

var inputColorFavoritos = document.getElementById(`ColorFavoritos`);

inputColorFavoritos.addEventListener(`change`, elegirColor)

//evento load 
//Permite que, puedas cargar todo tu código. 
  

