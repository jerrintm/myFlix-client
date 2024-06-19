
import { useState, useEffect } from "react";   //useState() function (imported from React) is an empty array

import { MovieCard } from "../movie-card/movie-card";  //to import the BookCard which is child of main-view

import { MovieView } from "../movie-view/movie-view";

import { LoginView } from "../login-view/login-view";

import { SignupView } from "../signup-view/signup-view";

import Col from "react-bootstrap/Col";

import Row from "react-bootstrap/Row";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { ProfileView } from "../profile-view/profile-view";


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

    const [user, setUser] = useState(null);

    const [token, setToken] = useState(null);


    useEffect(() => {
        if (!token) {
            return;
        }
        fetch("https://myflix12-47ea37fcfdd6.herokuapp.com/movies", {
            headers: {
                Authorization: 'Bearer $token}'
            }
        })
            .then((response) => response.json())
            //   .then(movies => {
            //       setMovies(movies)
            //   })
            //   .catch(e => console.log(e))

            .then((data) => {
                console.log(data);
                const moviesFromAPI = data.map(movie => {
                    return {
                        _id: movie._id,
                        ImageUrl: movie.imageUrl,
                        Title: movie.title,
                        Description: movie.description,
                        Genre: [{
                            name: movie.genre.name,
                            description: movie.genre.subgenre
                        }],
                        Director: [{
                            name: movie.director.Name,
                            bio: movie.director.Bio,
                            birthyear: movie.director.Birth,
                            deathyear: movie.director.Death
                        }],
                        //Actor: movie.Actor,
                        //ReleaseDate: movie.ReleaseDate,
                        //Rating: movie.Rating,
                        Featured: movie.featured
                    }
                });
                if (moviesFromAPI.length === 0) {
                    return <div className="main-view">The list is empty!</div>;
                }

                setMovies(moviesFromAPI);
            });
    }, [token]);


    // }, []);

    if (!user) {
        return (
            <LoginView
                onLoggedIn={(user, token) => {
                    setUser(user);
                    setToken(token);
                }}
            />;
    );
      }

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

    <BrowserRouter>
        <Row>
            <Routes>
                <Route path="/login" element={
                    <>
                        <NavBar></NavBar>
                        {!user ? (
                            <LoginView onLoggedIn={(user, token) => {
                                // console.log(user);
                                // localStorage.setItem("user", user);
                                setUser(user);
                                //setToken(token);
                            }} />
                        ) : (
                            <Navigate to="/" />
                        )}
                    </>
                }>
                </Route>
                <Route path="/signup" element={
                    <>
                        <NavBar></NavBar>
                        <SignupView />
                    </>
                }>
                </Route>
                <Route path="/" element={
                    <>
                        <NavBar></NavBar>
                        {!user ? (
                            <Navigate to="/login" replace />
                        ) : (<>
                            {
                                movies.map((movie) => (
                                    <Col className='md5'>
                                        <MovieCard
                                            key={movie._id}
                                            movie={movie}
                                            onMovieClick={(newSelectedMovie) => {
                                                setSelectedMovie(newSelectedMovie);
                                            }}
                                        />
                                    </Col>
                                ))}
                        </>
                        )}
                    </>
                }>
                </Route>
                <Route path="/movies/:movieId" element={
                    <>
                        <NavBar></NavBar>
                        {!user ? (
                            <Navigate to="/login" replace />
                        ) : (
                            <MovieView movies={movies} onBackClick={() => setSelectedMovie(null)} />
                        )}
                    </>
                }>
                </Route>
                <Route path="/profile" element={
                    <>
                        <NavBar></NavBar>
                        <ProfileView movies={movies} />
                    </>
                }></Route>
                {/* {movies.map((movie) => (
        <Col className = 'md5'>
        <MovieCard
          key={movie._id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
        </Col>
      ))} */}
                {/* <button onClick={() => { setUser(null); localStorage.clear(); }}>Logout</button> */}
            </Routes>
        </Row>
    </BrowserRouter >
);
};

/*






    <div className="main-view">
        <header>
            <button
                onClick={() => { setUser(null); setToken(null); localStorage.clear(); }}>
                logout
            </button>
        </header>
        ) : (


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
*/