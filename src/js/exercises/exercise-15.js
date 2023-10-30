/* 
EJERCICIO 15:
Muestra un array con el título y la descripción de las mejores peliculas ordenadas de mejor a peor, 
siendo las mejores aquellas cuya valoración es superior a la valoración media de todas las películas

1.Media rating todas las películas(for de movies, sumatorio de movies y division entre el nº de movies).
2.filter todas las movies con rating >= media.
3.Sort de movies filtradas, ordenadas de mayor a menor.
4.Map-Generar un array de objetos que solo contenga título y descripción).
*/

let average = "";
let sumatorio = 0;

for (let i = 0; i < movies.length; i++) {
    sumatorio += movies[i].rating;
}

average = (sumatorio / movies.length).toFixed(2);


let moviesFilteredByRating = movies.filter(movie => movie.rating >= average);


moviesOrdered = moviesFilteredByRating.sort((a, b) => b.rating - a.rating);


moviesTitleDescription = moviesOrdered.map(movie => (
    {
        title: movie.title,
        description: movie.description
    }
));

showContent(15,moviesTitleDescription);



