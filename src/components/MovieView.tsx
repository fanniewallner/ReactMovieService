import { useParams } from "react-router-dom";
import { IMovie } from "../models/IMovie";
import { useEffect, useState } from "react";
import { getChoosenMovie } from "../services/MovieService";
import "../index.css";

import {
  CenteringWrapperHorisontal,
  CenteringWrapperVertical,
  MovieViewLeftWrapper,
  MovieViewRightWrapper,
  PageWrapper,
} from "../styled/Wrappers";
import { Button } from "../styled/Buttons";
import { ImageShadow } from "../styled/Effects";

interface IMovieViewProps {
  input: string;
}

export const MovieView = ({ input }: IMovieViewProps) => {
  const { id } = useParams<{ id: string }>();
  const [extendedMovie, setExtendedMovie] = useState<IMovie>();

  useEffect(() => {
    const getExtendedInfo = async () => {
      try {
        const data = await getChoosenMovie(id || "");
        setExtendedMovie(data);
      } catch (error) {
        console.error("Error fetching extended movie info:", error);
      }
    };
    getExtendedInfo();
  }, [id]);

  /*   useEffect(() => {
    const getExtendedInfo = async () => {
      const data = await getChoosenMovie(input, id || "");
      setExtendedMovie(data);
    };
    getExtendedInfo();
  }, [input, id]);
 */
  console.log(extendedMovie);

  return (
    <>
      <Button>Return to results</Button>
      <PageWrapper>
        <MovieViewLeftWrapper>
          <ImageShadow>
            <img className="image" src={extendedMovie?.Poster}></img>
          </ImageShadow>
          <CenteringWrapperVertical>
            <p>Imdb rating: {extendedMovie?.imdbRating}</p>
            <p>Total votes:{extendedMovie?.imdbVotes}</p>
          </CenteringWrapperVertical>
        </MovieViewLeftWrapper>
        <MovieViewRightWrapper>
          <h3>{extendedMovie?.Title}</h3>
          <CenteringWrapperHorisontal>
            <p>Released: {extendedMovie?.Released}</p>
            <p>Directed by {extendedMovie?.Director}</p>
          </CenteringWrapperHorisontal>
          <span>Actors: {extendedMovie?.Actors}</span>
          <span>Runtime: {extendedMovie?.Runtime}</span>
          <span>Language: {extendedMovie?.Language}</span>
          <article>{extendedMovie?.Plot}</article>
          <div>
            <h3>Awards</h3>
            <article>{extendedMovie?.Awards}</article>
          </div>
        </MovieViewRightWrapper>
      </PageWrapper>
    </>
  );
};
