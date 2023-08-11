import { useParams } from "react-router-dom";
import { IMovie } from "../models/IMovie";
import { useEffect, useState } from "react";
import { getChoosenMovie } from "../services/MovieService";

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
    <div>
      <h1>{extendedMovie?.Title}</h1>
      <p>Released: {extendedMovie?.Released}</p>
      <div>
        <img src={extendedMovie?.Poster}></img>
      </div>
      <div>
        <p>Imdb rating: {extendedMovie?.imdbRating}</p>
        <p>Total votes:{extendedMovie?.imdbVotes}</p>
      </div>
      <span>Actors: {extendedMovie?.Actors}</span>
      <span>Runtime: {extendedMovie?.Runtime}</span>
      <span>Language: {extendedMovie?.Language}</span>
      <article>{extendedMovie?.Plot}</article>
      <div>
        <h3>Awards</h3>
        <article>{extendedMovie?.Awards}</article>
      </div>
    </div>
  );
};
