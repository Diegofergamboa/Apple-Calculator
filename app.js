// Github = diegofergamboa 
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
    value === '-' ? setOperation('-') : null ;
    value === '/' ? setOperation('/') : null ;
    value === 'X' ? setOperation('*') : null ;
    value === '%' ? setOperation('%') : null ;
    value === '+/-' ? setOperation('+/-') : null ;

    value === '=' ? calculation() : null ;
    debugger
    value === 'AC' ? resetCalculator() : null ;
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
    inputScreenValue = document.getElementsByClassName('calculator__screen')[0];
    this.operator = operator ;
    if (inputScreenValue !== 0) {
        calculation(operator);
    }
    
}

function calculation (operator) {
    inputScreen = document.getElementsByClassName('calculator__screen')[0];
    inputValue = inputScreen.value
    let firstValue = transformComaToPoint(valueMemo) ;
    let secondValue = transformComaToPoint(inputValue) ;
    let total = 0 ;

    if (this.operator == '+' && inputScreen.value !== "") {
        total = firstValue + secondValue ;
    }

    if (this.operator == '-' && inputScreen.value !== "") {
        if (firstValue !== 0) {
            total = firstValue - secondValue ;
        } else {
            total = secondValue ;
        }
        
    }

    if (this.operator == '*' && inputScreen.value !== "") {
        if (firstValue !== 0) {
            total = firstValue * secondValue ;
        } else {
            total = secondValue ;
        }
        
    }

    if (this.operator == '/' && inputScreen.value !== "") {
        if (firstValue !== 0) {
            total = firstValue / secondValue ;
        } else {
            total = secondValue ;
        }
        
    }

    if(this.operator == '%' && inputScreen.value !== "") {
        total = secondValue / 100 ;
    }

    if(this.operator == '+/-' && inputScreen.value !== "") {
        if (secondValue > 0) {
            total = -secondValue ;
        }
    }


    total = transformPointToComma(total);
    this.valueMemo = total ;
    inputScreen.value = "" ;  
    inputScreen.placeholder = total;
}

function transformComaToPoint(value) {
    if (typeof value !== "number") {
        let resultTransform = value.replace("," , ".") ;
        return parseFloat(resultTransform);
    }
    return value;
}

function transformPointToComma(value) {
    let resultTransform = value.toString();
    resultTransform = resultTransform.replace('.', ',');
    return resultTransform;
}

function resetCalculator () {
    inputScreen = document.getElementsByClassName('calculator__screen')[0];
    this.operator = operator ;
    this.valueMemo = valueMemo ;
    
    inputScreen.value = 0 ;
    inputScreen.placeholder = 0 ;
    valueMemo = 0 ;
    operator = null ;
}
