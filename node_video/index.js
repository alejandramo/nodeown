/*
function add(x1, x2){
    return x1 + x2;
}

function substract(x1, x2){
    return x1 - x2;
}

function multiply(x1, x2){
    return x1 * x2;
}

function divide(x1, x2){
    if(x2 === 0){
        console.log('no de puede dividir por 0')
    }else{
        return x1/x2;
    }
}
console.log(add(2,3));
*/



//la modularidad permite modificar las funciones para sólo llamarlas en el archivo principal.
//entonces, es posible llevar todas las funciones de arriba a otro archivo js con una o todas las funciones... 
// para importar archivo:
const math = require('./math.js'); // aquí se nombra una constante y se "llama" el archivo math.

console.log(math.add(2,3)); // aquí se llama diferente al código de arriba porque  se ha llamado al archivo y después se llama a la función add del math...

//Se llaman a los otros métodos y se agregan los "valores" para hacer el cálculo

console.log(math.substract(5,9));
console.log(math.multiply(2,3));
console.log(math.divide(0,3));
console.log(math.divide(9,3));


/*
//Para mostrar el módulo math, sólo se hace un console.log del módulo math 
console.log(math);
*/

