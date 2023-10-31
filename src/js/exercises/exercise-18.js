/* 
EJERCICIO 18:
Dada una cadena de texto, crea una función que la recibe como argumento y 
devuelve dicha cadena transformada en hashtag, es decir, la cadena comenzando 
por almohadilla (#) y las palabras sin espacios comenzando la primera letra en mayúscula
Ejemplo: "Programando en Javascript" se transforma en "#ProgramandoEnJavascript"

1.Agregar a la cadena de texto dada el # y dividirlo en subcadenas(palabras).
2.Devolver el #texto sin espacios entre sus palabras y capitalizar primera letra de cada palabra.
*/


function textToHashtag(text) {
  
 const words = text.split(' ');
 let hashtag = '#';

 for (const word of words) {
    hashtag += word.charAt(0).toUpperCase() + word.slice(1);
 }

 return hashtag;
}


showContent(18, textToHashtag("Programando en Javascript"));