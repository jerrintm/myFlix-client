export const MovieView = ({ movie, onBackClick }) => {
    return (
        <div>
            <div>
                <img src={movie.image} />
            </div>
            <div>
                <span>Title: </span>
                <span>{movie.title}</span>
            </div>
            <div>
                <span>Author: </span>
                <span>{movie.director}</span>
            </div>
            <button>Back</button>
        </div>
    );
};