var scanf = require('scanf');

var listaNumeros = [];
console.log('Escriba "cancelar" si desea finalizar el programa\n');
var exit = 'cancelar';

do {
    console.log('Digite un numero por favor');
    numero = scanf('%s');
    data = parseInt(numero);
    if (isNaN(data))
        console.log('No es un numero valido\n');
    else
        listaNumeros.push(data);             
} while (numero != exit);

console.clear();

numberFilter = listaNumeros.filter(num => typeof num === 'number');
console.log('Numeros Almacenadas: \n');
numerosCapturados = numberFilter.forEach(num => console.log(num));

console.log('');
console.log('Program Exit..!');