/* 
EJERCICIO 7:
Escribir una función que calcule si una cadena de texto es un palíndromo y
devuelva un mensaje con la cadena de texto y el resultado

1.texto.toLowerCase y quitar espacios.
2.invertir texto.
3.comparar uno y otro, devolviendo si es palíndromo o no.
*/

function isPalindrome(text) {
    

let textFormateado = text.toLowerCase().replaceAll(" ", "");

let textReverse = "";

for (let i = textFormateado.length -1;i >= 0; i--){
    textReverse += textFormateado[i];
}

if (textFormateado === textReverse){
    
    return text + " is palindrome";
} else {
    return text + " is not palindrome";
}

}

showContent(7, isPalindrome('Dabale arroz a la zorra el abad'));