export interface IMovie {
  Title: string;
  Actors: string;
  Year: string;
  Rated: string;
  Genre: string;
  Plot: string;
  Language: string;
  Poster: string;
  imdbID: string;
  Director: string;
  Released: string;
  Runtime: string;
  Awards: string;
  Country: string;
  imdbRating: string;
  imdbVotes: string;
}

export interface IOmbdResponse {
  Search: IMovie[];
}
