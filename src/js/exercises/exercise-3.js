/* 
EJERCICIO 3:
Muestra el siguiente mensaje con el resultado de contar el número de vocales que tiene un string:
“Number of vowels is <result>”

*/

function contadorVocales(texto) {
    const textoMinus = texto.toLowerCase();

    let contador = 0;
  
    for (let i = 0; i < textoMinus.length; i++) {
      const caracter = textoMinus[i];
      if (caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u') {
        contador++;
      }
    }
  
    return `Number of vowels is ${contador}`;
  }
  
  showContent(3, contadorVocales("Muestra el siguiente mensaje con el resultado..."))