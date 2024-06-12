export const MovieView = ({ movie, onBackClick }) => {
    return (
        <div>
            <div>
                <img src={movie.imageUrl} />
            </div>
            <div>
                <span>Title: </span>
                <span>{movie.title}</span>
            </div>
            <div>
                <span>Director: </span>
                <span>{movie.director.Name}</span>
            </div>

            <button
                onClick={() => {
                    onBackClick();
                }}
            >
                Back</button>
        </div>
    );
};