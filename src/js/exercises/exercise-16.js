/* 
EJERCICIO 16:
Dado un año como parámetro (número), devuelve el número del siglo al que pertenece.

1.Divide el año entre 100.
2.Redondea al nº entero mayor o igual más próximo al resultado. 
*/

function centuryOfCertainYear(year) {
    let century = Math.ceil(year / 100);
    return century;
}


showContent(16, centuryOfCertainYear(1624));