/* 
EJERCICIO 13:
Agrupa en un array las peliculas por categorias:
[
    {
        Drama: {
            {
                title: "Fight Club",
                director: "David Fincher",
                actors: "Brad Pitt, Edward Norton, Helena Bonham Carter",
                year: 1999,
                description:
                "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
                category: "Drama",
                rating: 8.8,
            },
            Action: {
                ...
            },
            ...
        }
    }
]
------------------------
[
    {
        drama: []
    },
    {
        action: []
    },
    {
        comedy: []
    }
]

*/

function arrayMoviesFilteredByCategories() {

    let arrayMoviesByCategories = [
        { category: categories.drama, movies: [] },
        { category: categories.action, movies: [] },
        { category: categories.crime, movies: [] },
        { category: categories.biography, movies: [] },
        { category: categories.adventure, movies: [] },
        { category: categories.comedy, movies: [] }
    ]


    for (let i = 0; i < arrayMoviesByCategories.length; i++) {
        let arrayFiltByCategory = movies.filter(movie => movie.category == arrayMoviesByCategories[i].category)

        arrayMoviesByCategories[i].movies = arrayFiltByCategory;

    }

    return arrayMoviesByCategories;
}

showContent(13, arrayMoviesFilteredByCategories());