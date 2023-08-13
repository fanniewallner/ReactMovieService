//import { useParams } from "react-router-dom";

import { IMovie } from "../models/IMovie";
import { useContext, useState } from "react";
import { MovieContext } from "../contexts/MovieContext";
import { useNavigate } from "react-router-dom";
import {
  CenteringWrapperVertical,
  MovieResultWrapper,
  PageWrapper,
} from "../styled/Wrappers";
import { Button } from "../styled/Buttons";
import { ImageShadow } from "../styled/Effects";
//import { getMovies } from "../services/MovieService";

// interface IMovieProps {
//   movies: IMovie[];
// }

export const Movies = () => {
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
    <PageWrapper>
      <MovieResultWrapper>
        {movies.length === 0 ? (
          <p className="title">No movies found..search again!</p>
        ) : (
          movies.map((movie: IMovie) => (
            <div key={movie.imdbID}>
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
    </PageWrapper>
  );
};
