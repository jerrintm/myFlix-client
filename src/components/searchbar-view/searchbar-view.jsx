import React, { useState, useEffect } from 'react';
import { Col } from 'react-bootstrap';
import { MovieCard } from '../movie-card/movie-card';

export const SearchBar = ({ token }) => {
    const [searchInput, setSearchInput] = useState('');
    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);

    useEffect(() => {
        fetch('https://myflix12-47ea37fcfdd6.herokuapp.com/movies', {
            headers: { Authorization: 'Bearer ${token}' },
        })
            .then((response) => response.json())
            .then((data) => {
                const moviesFromApi = data.map((movie) => ({
                    id: movie._id,
                    Title: movie.Title,
                    imgURL: movie.imgURL,
                    Description: movie.Description,
                    Genre: {
                        Name: movie.Genre.Name,
                    },
                    Director: {
                        Name: movie.Director.Name,
                    }
                }));
                setMovies(moviesFromApi);
                setFilteredMovies(moviesFromApi);
            });
    }, [token]);

    const genres = [
        'Sci-Fi',
        'Children',
        'Fantasy',
        'Comedy',
        'Thriller',
        'Action',
    ];
    const handleChange = (e) => {
        const input = e.target.value;
        setSearchInput(input);
        filterMovies(input, selectedGenres);
    };

    const handleGenreChange = (genre) => {
        const newSelectedGenres = selectedGenres.includes(genre)
            ? selectedGenres.filter((g) => g !== genre)
            : [...selectedGenres, genre];
        setSelectedGenres(newSelectedGenres);
        filterMovies(searchInput, newSelectedGenres);
    };

    const filterMovies = (input, genres) => {
        const lowercasedInput = input.toLowerCase();
        const filtered = movies.filter((movie) => {
            const matchesSearchInput =
                movie.Title.toLowerCase().includes(lowercasedInput);
            const matchesGenre =
                genres.length === 0 || genres.includes(movie.Genre.Name);
            return matchesSearchInput && matchesGenre;
        });
        setFilteredMovies(filtered);
    };

    return (
        <div className="mb-4 mt-4">
            <input
                type="text"
                placeholder="Search a movie title here"
                onChange={handleChange}
                value={searchInput}
            />
            <br />
            <br />

            <p> or Search by Genre:</p>

            <div>
                {genres.map((genre) => (
                    <div key={genre}>
                        <label>
                            <input
                                type="checkbox"
                                checked={selectedGenres.includes(genre)}
                                onChange={() => handleGenreChange(genre)}
                            />
                            {genre}
                        </label>
                        <br />
                    </div>
                ))}
            </div>
            <div className="d-flex flex-wrap">
                {filteredMovies.map((movie) => (
                    <Col className="mb-4 mt-4" key={movie.id} md={3}>
                        <MovieCard movie={movie} updateAction={() => { }} />
                    </Col>
                ))}
            </div>
        </div>
    );
};

export default SearchBar;