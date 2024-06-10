
import { useState } from "react";   //useState() function (imported from React) is an empty array

import { MovieCard } from "../movie-card/movie-card";  //to import the BookCard which is child of main-view

import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
    // sets the books variable with the current value of the usestate()
    const [movies, setMovies] = useState([

        {
            id: 1,
            title: "The Dark Knight",
            image:
                "https://example.com/dark_knight.jpg",
            director: "Christopher Nolan"
        },
        {
            id: 2,
            title: "The Godfather",
            image:
                "https://example.com/godfather.jpg",
            director: "Federico Kereki"
        },
        {
            id: 3,
            title: "Inception",
            image:
                "https://example.com/inception.jpg",
            director: "James Cameron"
        },
        {
            id: 4,
            title: "Pulp Fiction",
            image:
                "https://example.com/pulp_fiction.jpg",
            director: "Quentin Tarantino"
        }
    ]);



    // { id: 1, title: "Eloquent JavaScript" },
    // { id: 2, title: "Mastering JavaScript Functional Programming" },
    // { id: 3, title: "JavaScript: The Good Parts" },
    // { id: 4, title: "JavaScript: The Definitive Guide" },
    // { id: 5, title: "The Road to React" }
    //]);


    const [selectedMovie, setSelectedMovie] = useState(null);   // To determine whether to render a specific part of the UI (BookView) in the MainView component, a new state (selectedBook) is used as a flag.

    if (selectedMovie) {
        return (
            <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
        );
    }

    //if books variable is empty, below code would display it as empty
    if (movies.length === 0) {
        return <div>The list is empty!</div>;
    }


    // The map() method below in the code just maps each element in the books array to a piece of UI. So, after its execution, you have one <div>{book.title}</div> for each book 
    return (
        <div>

            {movies.map((movie) => (
                // return <div key={book.id}>{book.title}</div>;
                <MovieCard
                    key={movie.id}
                    movie={movie}
                    onMovieClick={(newSelectedMovie) => {
                        setSelectedMovie(newSelectedMovie);
                    }}
                />
            ))}
        </div>
    );
};