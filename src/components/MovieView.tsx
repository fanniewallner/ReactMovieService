import { useNavigate, useParams } from "react-router-dom";
import { IMovie } from "../models/IMovie";
import { useEffect, useState } from "react";
import { getChoosenMovie } from "../services/MovieService";
import "../index.css";

import {
  CenteringWrapperHorisontal,
  LeftWrapperVertical,
  MovieViewCenteringContent,
  MovieViewLeftWrapper,
  MovieViewRightWrapper,
  PageWrapper,
} from "../styled/Wrappers";
import { Button } from "../styled/Buttons";
import { ImageShadow } from "../styled/Effects";
import { Loader } from "./Loader";

export const MovieView = () => {
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
        </MovieViewLeftWrapper>
        <MovieViewRightWrapper>
          <LeftWrapperVertical>
            {extendedMovie?.imdbRating === "N/A" ? null : (
              <p>Imdb rating: {extendedMovie?.imdbRating}</p>
            )}
            {extendedMovie?.imdbVotes === "N/A" ? null : (
              <p>Imdb Votes: {extendedMovie?.imdbVotes}</p>
            )}
          </LeftWrapperVertical>
          <div className="titleWrapper">
            <h3 className="title">{extendedMovie?.Title}</h3>
          </div>
          <CenteringWrapperHorisontal>
            {extendedMovie?.Released === "N/A" ? null : (
              <p>Released {extendedMovie?.Released}</p>
            )}

            <p>Directed by {extendedMovie?.Director}</p>
          </CenteringWrapperHorisontal>
          <span>Actors: {extendedMovie?.Actors}</span>
          <span>Runtime: {extendedMovie?.Runtime}</span>
          <span>Language: {extendedMovie?.Language}</span>
          <article>{extendedMovie?.Plot}</article>
          <div>
            <h3>Awards</h3>
            {extendedMovie?.Awards === "N/A" ? (
              "No awards won"
            ) : (
              <article>{extendedMovie?.Awards}</article>
            )}
          </div>
        </MovieViewRightWrapper>
      </PageWrapper>
    </>
  );
};
