import { IMovie } from "../models/IMovie";

export enum ActionType {
  FETCHED_MOVIES = "fetchedmovies",
}

export interface IMovieAction {
  type: ActionType;
  payload: IMovie[];
}

export const MoviesReducer = (
  movies: IMovie[],
  action: IMovieAction
): IMovie[] => {
  switch (action.type) {
    case ActionType.FETCHED_MOVIES: {
      return action.payload;
    }
    default: {
      return movies;
    }
  }
};
