/* 
EJERCICIO 11:
Ordena las peliculas por valoracion (propiedad "rating") de mayor a menor

1.copio array de objetos movies
2.ordeno la copia de mayor a menor por rating(sort)



movies[
    { 
        rating: 10
    },
    {
        rating: 2
    }
]
*/

function orderedMovies() {

    return movies.sort((a,b) => b.rating - a.rating)

}

showContent(11, orderedMovies())