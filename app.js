// Llamar al imprimir en el screencalculator.

function getContentClick(event) {
    const value = event.target.innerHTML;
    filterAction(value);
}

const filterAction = value => { 
    value === '1' ? addNumberInteger(1) : null ;
}

function addNumberInteger (value) {
    const inputScreen = document.getElementsByClassName('screen__calculator')[0];
    inputScreen.value = '66';
}



// function addNumberInteger (accessValue) {
//     return document.getElementsByClassName('calculator__screen').replace(accessValue);
    
// }




// Llamar a los eventos de los numeros enteros e imprimirlos por pantalla por medio de la función de filter
// Setear las operaciones para que cambien el valor por defecto que tienen en pantalla por medio de la función setoperation
// Eliminar que cuando le de en la operacion el cambie el numero y el otro lo guarde una variable
// Acomodar que cuando yo le de en coma, el coloque la coma después de un ceor si es primer valor
// Transformar por medio de la coma en Float lo que corresponda que se coloque en pantalla
// Colocar suma, resta, multiplicación y división
// Colocar el valor de AC para borrar pantalla y resetear todas las operaciones.
// Colocar +/- para convertir de positivo a negativo y viceversa.
