import { IMovie } from "../models/IMovie";
import { useContext, useEffect } from "react";
import { MovieContext } from "../contexts/MovieContext";
import { useNavigate, useLocation } from "react-router-dom";
import {
  CenteringWrapperVertical,
  MovieResultWrapper,
} from "../styled/Wrappers";
import { Button } from "../styled/Buttons";
import { ImageShadow } from "../styled/Effects";
import "../index.css";
import { getMovies } from "../services/MovieService";
import { ActionType } from "../reducers/MoviesReducer";

export const Movies = () => {
  const { movies, dispatch } = useContext(MovieContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("query");

    if (query) {
      getMovies(query)
        .then((dataFromApi) =>
          dispatch({ type: ActionType.FETCHED_MOVIES, payload: dataFromApi })
        )
        .catch((error) => console.error("Could not fetch movies", error));
    }
  }, [location.search, dispatch]);

  return (
    <MovieResultWrapper>
      {movies.length === 0 ? (
        <p className="title">No movies found..search again!</p>
      ) : (
        movies.map((movie: IMovie) => (
          <div key={movie.imdbID} className="movieContainer">
            <h3 className="title">{movie.Title}</h3>
            <ImageShadow>
              <img className="image" src={movie.Poster} alt={movie.Title} />
            </ImageShadow>
            <CenteringWrapperVertical>
              <p color="black">Released:{movie.Year}</p>
              <Button onClick={() => navigate(`/movies/${movie.imdbID}`)}>
                Read more..
              </Button>
            </CenteringWrapperVertical>
          </div>
        ))
      )}
    </MovieResultWrapper>
  );
};
