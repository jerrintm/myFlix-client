export const MovieView = ({ movie, onBackClick }) => {
    return (

        <div className="movie-view">
            <div className="movie-view__img">
                <img src={movie.ImageUrl} key={movie.imageUrl} className="img-wiew" />
            </div>
            <div className="movie-view__content">
                <div className="movie-view__title">
                    <span>Title:</span>
                    <p className="movie-title" key={movie.title}>{movie.title}</p>
                </div>
                <div className="movie-view__description">
                    <h3>Description: </h3>
                    <p className="movie-description" key={movie.description}>
                        {movie.description}
                    </p>
                </div>
                <div className="movie-view__genre">
                    <h3>Genre: </h3>
                    <span className="movie-genre">
                        {movie.Genre.map(genre => (
                            <div key={genre}>
                                <span>{genre.name}</span>
                                <p>{genre.description}</p>
                            </div>
                        ))}</span>
                </div>
                <div className="movie-view__director">
                    <h3>Director: </h3>
                    {movie.Director.map(director => (
                        <div key={director.name} className="movie-director">
                            <p><span>Name:</span> {director.name}</p>
                            <p className="director-bio">
                                <span>Biblograph:</span>
                                <em className="bio">{director.bio}</em>
                            </p>
                            <p><span>Birthdate:</span> {director.birth}</p>
                            <p><span>Deathyear:</span> {director.death}</p>
                        </div>

                    ))}



                    <div className="movie-view__featured">
                        <h3>Featured: </h3>
                        <span className="movie-runtime" key={movie.Featured}>
                            {movie.Featured ? `${movie.Featured}` : "No information available."}
                        </span>
                    </div>
                    <div className="button-wrapper">
                        <button className="back-button" onClick={onBackClick}>
                            <FaArrowLeft />
                            Back
                        </button>
                    </div>
                </div>
            </div>


            );
};