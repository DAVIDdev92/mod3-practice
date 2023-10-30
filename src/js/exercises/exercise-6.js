/* 
EJERCICIO 6:
Genera un array de 10 números aleatorios entre 0 y 100, calcula el menor y
el mayor y muestra el resultado por pantalla
*/
function arrayMenorYMayor(){
let numeros = [];
for (let i = 0; i < 10; i++) {
    let numeroAleatorio = Math.floor(Math.random() * 101);

    numeros.push(numeroAleatorio);

}


let numeroMenor = numeros[0];
let numeroMayor = numeros[0];
for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] < numeroMenor) {
        numeroMenor = numeros[i];
    }
    if (numeros[i] > numeroMayor) {
        numeroMayor = numeros[i];
    }
}


return (`Array: ${numeros}; Número menor: ${numeroMenor}, Número mayor: ${numeroMayor} `);

}

showContent(6, arrayMenorYMayor());