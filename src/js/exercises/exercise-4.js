/* 
EJERCICIO 4:
Muestra el resultado de quitar las vocales a un string que pasamos como parámetro:
“H, m lrnng Jvscrpt” // string original: “Hi, I am learning Javascript”

1.Creo la función dado un texto
2.const vocales
3.for de text.length
4.comprobar si el carácter que estoy viendo es vocal o no(if else)
5.dentro del si se reemplaza vocal por nada
6.return texto reemplazado

*/


function quitarVocales(text) {
    const vocales = "aeiouAEIOU";
    let textconvertido = text;

    for (let i = 0; i < text.length; i++) {
        const caracter = text.charAt(i);
        
    
        if (vocales.includes(caracter)) {
            textconvertido = textconvertido.replaceAll(caracter, "");
            
        }
    }
    return textconvertido;
}

showContent(4,quitarVocales('Hi, I am learning Javascript'))

