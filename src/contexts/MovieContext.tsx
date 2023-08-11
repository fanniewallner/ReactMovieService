import { Dispatch, createContext } from "react";
import { IMovie } from "../models/IMovie";
import { IMovieAction } from "../reducers/MoviesReducer";

//used when wanting to access movies array in componen
export const MovieContext = createContext<{
  movies: IMovie[];
  dispatch: Dispatch<IMovieAction>;
}>({
  movies: [],
  dispatch: () => {
    return;
  },
});

/* //provides dispatch function, use to update movies array on acions
export const MovieDispatchContext = createContext<Dispatch<IMovieAction>>(
  () => {
    return;
  }
); */
