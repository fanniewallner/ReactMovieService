//import { useParams } from "react-router-dom";

import { IMovie } from "../models/IMovie";
import { useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";
import { useNavigate } from "react-router-dom";
//import { getMovies } from "../services/MovieService";

// interface IMovieProps {
//   movies: IMovie[];
// }

export const Movies = () => {
  //const location = useLocation();
  //const { state } = location;
  const { movies } = useContext(MovieContext);
  const navigate = useNavigate();

  //const currentMovie = useContext(MovieContext);
  //console.log("context:", currentMovie);

  // useEffect(() => {
  //   console.log("Movies updated:", currentMovie);
  // }, [currentMovie]);
  /*   const movies = Array.isArray(state) ? (state as IMovie[]) : [];
  const navigate = useNavigate();

  const handleCurrent = (movieId: string) => {
    navigate(`/${movieId}`);
  }; */

  return (
    <div>
      {movies.length === 0 ? (
        <p>No movies found..search again!</p>
      ) : (
        movies.map((movie: IMovie) => (
          <div key={movie.imdbID}>
            <h3>{movie.Title}</h3>
            <div>
              <img src={movie.Poster} alt={movie.Title} />
            </div>
            <p color="black">Released:{movie.Year}</p>
            <button onClick={() => navigate(`/movies/${movie.imdbID}`)}>
              Read more..
            </button>
          </div>
        ))
      )}
    </div>
  );
};
