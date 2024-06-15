import PropType from "prop-types";

import { Button, Card, CardBody } from "react-bootstrap";

export const MovieCard = ({ movie, onMovieClick }) => {
    return (

        /*  <div
              className="movie-card"
              onClick={() => {
                  onMovieClick(movie);
              }}
          >
              <div className='movie-card__header'>
                  <CustomImage src={movie.imageUrl} alt={"Movie Poster"} />
              </div>
              <h3 className='movie-card__title'>{movie.title}</h3>
              <p className='movie-card__description'>{movie.description}</p>
              <p className='movie-card__genre'>Genre</p>
          </div>
          */

        <Card>
            <Card.Img variant="top" src={movie.imageUrl} />
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.director.Name}</Card.Text>
                <Button
                    onClick={() => {
                        onMovieClick(movie)
                    }} variant="link">
                    Open
                </Button>
            </Card.Body>
        </Card>

    );
};


MovieCard.propTypes = {
    movie: PropType.shape({
        title: PropType.string.isRequired,
        Description: PropTypes.string.isRequired,
        Genre: PropTypes.arrayOf(PropTypes.object),
        Director: PropTypes.arrayOf(PropTypes.object),
        imageUrl: PropType.string.isRequired,
        Featured: PropTypes.bool
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired
};


/*


      <div
          onClick={() => {
              onMovieClick(movie);
          }}
      >
          {movie.title}
      </div>
  );
};
*/