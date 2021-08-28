var operator = null ;
var valueMemo = 0 ;

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
    value === ',' ? addNumberInteger(',') : null ;


    value === '+' ? setOperation('+') : null ;
    value === '-' ? setOperation('+') : null ;
    value === '/' ? setOperation('/') : null ;
    value === 'X' ? setOperation('*') : null ;
    value === '%' ? setOperation('%') : null ;
}


function addNumberInteger (value) {
    const inputScreen = document.getElementsByClassName('calculator__screen')[0];
    const inputValue = inputScreen.value ;

    // //Checking si es cero o no para sumarle o quitarle el cero que está default
    if (inputValue === '0' && inputValue.length === 1 && value !== ',') {
        inputScreen.value = value ;
        return
    }    
    inputScreen.value = inputValue + value;
}


function setOperation (operator) {
    this.operator = operator ;
}

function calculation (operator) {
    inputScreen = document.getElementsByClassName('screen__calculator')[0];
    this.valueMemo = valueMemo ;
    let firstvalue = valueMemo ;
    let secondValue = inputScreen ;
    
    if (operator === '+' && operator <= 1) {
        total = firstvalue + secondValue ;
    }

    inputScreen.value = total ;
    valueMemo = total ;
}