/* 
EJERCICIO 12:
Filtra las peliculas que pertenezcan a la categoria "Drama" e incluye solo el título y la descripción
Sugerencia: puedes usar la variable "categories" en el archivo "src/js/data/movies.js"

1.filtrar array movies por categoria drama.
2.crear nuevo array de objetos donde sólo aparezca titulo y descripcion.
*/

function pelisTitleDescription() {

    let pelisFiltDrama = movies.filter(movie => movie.category == categories.drama)
    let pelisMap = pelisFiltDrama.map(movie => (
        {
            title: movie.title,
            description: movie.description
        }
    ))
    return pelisMap;
}

showContent(12, pelisTitleDescription());
