// Llamar los eventos del click.

function getContentClick(event) {
    const value = event.target.innerHTML; //1. Acceder al valor del evento.
    filterAction(value);
    // Fin
}

// Redireccionar los valores de cada inner html a una función en específico
const filterAction = value => { 
    // """Redireccionar cada uno de los botones por el valor del innerhtml, y redireccionarlos a cada función o problema por resolver en específico."""
    
    value === '1' ? addNumberInteger(1) : null ;
    value === '2' ? addNumberInteger(2) : null ;
    value === '3' ? addNumberInteger(3) : null ;
    value === '4' ? addNumberInteger(4) : null ;
    value === '5' ? addNumberInteger(5) : null ;
    value === '6' ? addNumberInteger(6) : null ;
    value === '7' ? addNumberInteger(7) : null ;
    value === '8' ? addNumberInteger(8) : null ;
    value === '9' ? addNumberInteger(9) : null ;
    value === '0' ? addNumberInteger(0) : null ;

    // OPERACIONES
    // value === '1' ? addNumberInteger(1) : null ;
    // value === '1' ? addNumberInteger(1) : null ;
    // value === '1' ? addNumberInteger(1) : null ;
}


function addNumberInteger (value) {
    // console.log('Dentro de AddnumberInteger');
    // Colocar en el screen el valor que mandé del innerhtml en pantalla
    const inputScreen = document.getElementsByClassName('calculator__screen')[0];
    // const inputValue = inputScreen.value ;
    inputScreen.value = value ;
    // Necsito que no se me borre 
    // console.log(inputValue);
    // Colocar en el screen el restante de cada operación y, colocar la operación hasta el momento que se ha realizado
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
