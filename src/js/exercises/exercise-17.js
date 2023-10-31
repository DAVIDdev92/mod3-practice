/* 
EJERCICIO 17:
Un isograma es una palabra o frase en la que cada letra aparece el mismo número de veces.
Dado una cadena de texto, comprueba si es un isograma o no y devuelve un mensaje:
"la cadena 'hola mundo' no es un isograma"

1.texto a minúsculas y sin tildes.
2.for para recorrer el texto y añadir a un array vacío la frecuencia con la que aparece cada letra.
3.comparar si la frecuencia con la que aparecen las distintas letras es la misma y mostrar un mensaje. 
*/

function esIsograma(text) {

    let textF = text.replaceAll(" ", "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    let letterCounter = {
    };

    for (let i = 0; i < textF.length; i++) {
        const letter = textF.charAt(i);
        
        if (letterCounter[letter] !== undefined) {
            letterCounter[letter] += 1;
        } else {
            letterCounter[letter] = 1
        }
        
    }

    const values = Object.values(letterCounter);

    if (values.every(value => value === values[0])) {
        return `La cadena '${text}' es un isograma`;
    } else {
        return `La cadena '${text}' no es un isograma`;
    }

}

showContent(17, esIsograma('Hola mundo'));
