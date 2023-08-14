import { Dispatch, createContext } from "react";
import { IMovie } from "../models/IMovie";
import { IMovieAction } from "../reducers/MoviesReducer";

export const MovieContext = createContext<{
  movies: IMovie[];
  dispatch: Dispatch<IMovieAction>;
}>({
  movies: [],
  dispatch: () => {
    return;
  },
});
