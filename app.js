/* Las funciones deben ser distribuidas según cada necesidad */

// Necesidad de llamar los elementos por evento

function getContentClick(event) {
    const value = event.target.innerHTML ; //Lo tome al llamar al evento directamente
    /* Usando la función de filtrar acción para imprimir el valor del evento que llamé con el innerHTML */
    filterAction(value);
}


// Array, con los enteros positivos de la calculadora

// Función para distribuir el valor de los elementos y, realizar acciones con ellos.
const filterAction = value => {
    // Si la persona da click en el botón de cero, va a printear con la función addNumberInput, el valor en pantalla.
    value === '0' ? addNumberInput(0) : null ;
    // Demás enteros
    value === '1' ? addNumberInput(1) : null ;
    value === '2' ? addNumberInput(2) : null ;
    value === '3' ? addNumberInput(3) : null ;
    value === '4' ? addNumberInput(4) : null ;
    value === '5' ? addNumberInput(5) : null ;
    value === '6' ? addNumberInput(6) : null ;
    value === '7' ? addNumberInput(7) : null ;
    value === '8' ? addNumberInput(8) : null ;
    value === '9' ? addNumberInput(9) : null ; 
    value === ',' ? addNumberInput(',') : null ;
}

// Función para hacer en el Input el print de el valor que se trajo por evento a través del HTMLinner
function addNumberInput(value) {
    const screenValue = document.getElementsByClassName('calculator__screen')[0]; // El cero me dice la posicion que averigue haciendo primero el document.getElementbyClassName y me decía que era cero donde el valor del input
    const screenPrint = screenValue.value;
    // Función para que se borre el cero y si es una coma agregue el cero.
    if (screenPrint === '0' && screenPrint.length === 1 && value !== ',') {
        screenValue.value = value;
        return ; // El return es para que cuando termine de hacer la validación del primer valor que se ingresa como evento
        // termine la validación con la función llamada es decir con addNumberInput y, lo agregue.
    }
    // Script para que no se borre sino que se agregue el siguiente numero
    screenValue.value = screenPrint + value ;
}


// Función para escribir los numeros en el output type.

// Función para borrar.

// Función para sumar.

// Función para restar.

// Función para dividir.