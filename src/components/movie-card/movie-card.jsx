import PropType from "prop-types";

import { Button, Card, CardBody } from "react-bootstrap";

import { Link } from "react-router-dom";


export const MovieCard = ({ movie, onMovieClick }) => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));

    const addFav = () => {
        fetch(`https://movie-api-xkkk.onrender.com/users/${user.Username}/${movie._id}`, {
            "method": "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            }
        })
            .then((response) => response.json())
            .then(movies => {
                alert("Movie added")
            })
            .catch(e => console.log(e))
    }
    const removeFav = () => {
        fetch(`https://movie-api-xkkk.onrender.com/users/${user.Username}/${movie._id}`, {
            "method": "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            }
        })
            .then((response) => response.json())
            .then(movies => {
                alert("Movie deleted")
            })
            .catch(e => console.log(e))
    }

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
                <Link to={`/movies/${movie._id}`}>
                    Open
                </Link>
                <Button
                    onClick={addFav}>
                    Add to Favorites
                </Button>
                <Button onClick={removeFav}>
                    Remove from Favorites
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