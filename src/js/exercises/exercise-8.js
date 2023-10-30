/* 
EJERCICIO 8:
Escribe una o varias funciones para que, dado un string, devuelva un array que contenga la posición 
que ocupa cada carácter en el abecedario. Para que sea más sencillo, elimina los espacios y tildes 
(recuerda que puedes utilizar las funciones de ejercicios anteriores).

1.formateo a minúsculas, sin espacios y sin tildes.
2.array con letras abecedario.
3.obtener posiciones.(for en mi string para ver el caracter y encontrar la posicion del caracter en alphabet)

[19,20,4,56,7,78,5,4]
*/

function alphabetIndex(text){

let textFormateado = text.replaceAll(" ", "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); 

const letterValue = [];

const alphabet = "abcdefghijklmnopqrstuvwxyz";

for (let i = 0; i < alphabet.length; i++) {
    letterValue.push(alphabet[i]);    
}

let posiciones = [];
for (let i = 0; i < textFormateado.length; i++) {
    
    let char = textFormateado.charAt(i);
    console.log(char);
    posiciones.push(
        letterValue.findIndex(let => let === char) + 1
        );
    
}
return posiciones;
}
showContent(8, alphabetIndex('Tu madre en almíbàr'));



