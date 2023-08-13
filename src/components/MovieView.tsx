import { useNavigate, useParams } from "react-router-dom";
import { IMovie } from "../models/IMovie";
import { useEffect, useState } from "react";
import { getChoosenMovie } from "../services/MovieService";
import "../index.css";

import {
  CenteringWrapperHorisontal,
  CenteringWrapperVertical,
  MovieViewCenteringContent,
  MovieViewLeftWrapper,
  MovieViewRightWrapper,
  PageWrapper,
} from "../styled/Wrappers";
import { Button } from "../styled/Buttons";
import { ImageShadow } from "../styled/Effects";
import { Loader } from "./Loader";

interface IMovieViewProps {
  input: string;
}

export const MovieView = ({ input }: IMovieViewProps) => {
  const { id } = useParams<{ id: string }>();
  const [extendedMovie, setExtendedMovie] = useState<IMovie>();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getExtendedInfo = async () => {
      try {
        const data = await getChoosenMovie(id || "");
        setExtendedMovie(data);
      } catch (error) {
        console.error("Error fetching extended movie info:", error);
      } finally {
        setLoading(false);
      }
    };
    getExtendedInfo();
  }, [id]);

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <>
      <MovieViewCenteringContent>
        <Button onClick={() => navigate(-1)}>Return to results</Button>
      </MovieViewCenteringContent>

      <PageWrapper>
        <MovieViewLeftWrapper>
          <ImageShadow>
            <img className="image" src={extendedMovie?.Poster}></img>
          </ImageShadow>
          <CenteringWrapperVertical>
            <p>Imdb rating: {extendedMovie?.imdbRating}</p>
            <p>Total votes: {extendedMovie?.imdbVotes}</p>
          </CenteringWrapperVertical>
        </MovieViewLeftWrapper>
        <MovieViewRightWrapper>
          <div className="titleWrapper">
            <h3 className="title">{extendedMovie?.Title}</h3>
          </div>
          <CenteringWrapperHorisontal>
            <p>Released {extendedMovie?.Released}</p>
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
