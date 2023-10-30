/* 
EJERCICIO 2:
Muestra el siguiente mensaje dependiendo de si un número es par o impar:
“Number 34 is even” ó “Number 13 is odd”
*/

function evenOrOdd(numero){
    if (numero % 2 === 0){
        return `Number ${numero} is even`;
    } else {
        return `Number ${numero} is odd`;
    }
}


showContent(2, evenOrOdd(34));