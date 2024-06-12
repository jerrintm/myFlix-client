
import { useState, useEffect } from "react";   //useState() function (imported from React) is an empty array

import { MovieCard } from "../movie-card/movie-card";  //to import the BookCard which is child of main-view

import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {


    // sets the movies variable with the current value of the usestate()

    /*
    const [movies, setMovies] = useState([

        
        {
            id: 1,
            title: "The Dark Knight",
            image:
                "https://www.cartoonbucket.com/wp-content/uploads/2016/07/Image-Of-Batman-1-600x300.jpg",
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
*/

    const [movies, setMovies] = useState([]);


    const [selectedMovie, setSelectedMovie] = useState(null);   // To determine whether to render a specific part of the UI (BookView) in the MainView component, a new state (selectedBook) is used as a flag.

    useEffect(() => {
        fetch("https://myflix12-47ea37fcfdd6.herokuapp.com/")
            .then((response) => response.json())
            .then(movies => {
                setMovies(movies)
            })
            .catch(e => console.log(e))

    }, []);


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