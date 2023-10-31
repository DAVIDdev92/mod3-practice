/* 
EJERCICIO 19:
Dada una cadena de texto, crea una función que devuelva un objeto donde
las claves (keys) son cada una de las letras de la cadena y el valor el
número de veces que se repite cada una de ellas.
Ejemplo: "Hello world"
{
    h: 1,
    e: 1,
    l: 3,
    o: 2,
    r: 1,
    d: 1,
}
Nota: siempre letras minúsculas y sin tildes (para simplificar)

1.Texto en minúsculas y sin tildes.
2.Objeto vacío para meter los datos.
3.For para recorrer el texto y ver cuántas veces aparece cada letra.

*/

function makeObjectFromAText(text) {

    let letterCounter = {};

    let textF = text.replaceAll(" ","").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    console.log(textF)
    for (let i = 0; i < textF.length; i++) {
        const letter = textF.charAt(i);
        
        if (letterCounter[letter] !== undefined) {
            letterCounter[letter] += 1;
        } else {
            letterCounter[letter] = 1
        }
        
    }

    return letterCounter;
}

showContent(19, makeObjectFromAText('Roberto fue al bosque y cogió una manzana'));