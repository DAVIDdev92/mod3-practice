/* 
EJERCICIO 5:
Escribe una función llamada "repetitions" que recibe de entrada una cadena de texto y 
devuelve otra cadena con cada letra repetida tantas veces como la posición que ocupa 
empezando la primera repetición en mayúscula y el resto en minúscula

Ejemplos:
repetitions(‘code’) // result: “COoDddEeee”
repetitions(‘list’) // result: “LIiSssTttt”
repetitions(function) // result: “FUuNnnTtttIiiiiOoooooNnnnnnn”

1. creo función 'repetitions'


*/
function repetitions(text) {


    let textcopi = ''

    for (let i = 0; i < text.length; i++) {
        let caracter = text.charAt(i);

        textcopi = textcopi + caracter.toUpperCase();

        for (let j = 0; j < i; j++) {

            textcopi = textcopi + caracter.toLowerCase();
        }
    }

        return textcopi;
}


showContent(5, repetitions('code'));




