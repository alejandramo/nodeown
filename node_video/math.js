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

// hasta aquí se copió el código del primer archivo, sin el console.log, pues este va en el index

exports.add = add;
// hacer lo mismo con las otras funciones.
exports.substract = substract;
exports.multiply = multiply;
exports.divide = divide;

