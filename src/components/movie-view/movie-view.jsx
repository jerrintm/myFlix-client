import { useParams } from "react-router";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import "./movie-view.scss";

export const MovieView = ({ movie, onBackClick }) => {

    const { movieId } = useParams();
    const [movie] = useState(movies.find((mov) => mov._id == movieId));

    if (!movie) return <>Loading...</>
    else

        return (
            <div>
                <div>
                    <img src={location.href.split("/movies")[0] + "/" + movie.ImagePath} />
                </div>
                <div>
                    <span>Title: </span>
                    <span>{movie.title}</span>
                </div>
                <div>
                    <span>Director: </span>
                    <span>{movie.director.name}</span>
                </div>
                <div>
                    <span>Genre: </span>
                    <span>{movie.genre.name}</span>
                </div>
                <Link to="/">
                    Back
                </Link>
            </div>
        );
};

