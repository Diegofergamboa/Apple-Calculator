/* Las funciones deben ser distribuidas según cada necesidad */

// Necesidad de llamar los elementos por evento

function getContentClick(event) {
    const value = event.target.innerHTML ; //Lo tome al llamar al evento directamente
    filterAction(value);
}

// Función para distribuir el valor de los elementos y, realizar acciones con ellos.

const filterAction = value => {
    console.log('Estamos en FilterAction');
    console.log(value);
}

// Función para escribir los numeros en el output type.

// Función para borrar.

// Función para sumar.

// Función para restar.

// Función para dividir.