import { Outlet, useNavigate } from "react-router-dom";
import { Form } from "./Form";
import { useReducer, useState } from "react";
import { getMovies } from "../services/MovieService";
import { ActionType, MoviesReducer } from "../reducers/MoviesReducer";
import { MovieContext } from "../contexts/MovieContext";

import "../index.css";

export interface ILayoutProps {
  onSubmit: (input: string) => void;
}

export const Layout = () => {
  const navigate = useNavigate();
  const [, setInput] = useState("");
  const [movies, dispatch] = useReducer(MoviesReducer, []);

  const handleFormSubmit = async (input: string) => {
    setInput(input);
    try {
      const dataFromApi = await getMovies(input);
      dispatch({ type: ActionType.FETCHED_MOVIES, payload: dataFromApi });
      const url = `/movies?query=${encodeURIComponent(input)}`;
      navigate(url);
    } catch (error) {
      console.error("Could not fetch movies", error);
    }
  };

  const navigateHome = () => {
    navigate("/");
  };

  return (
    <>
      <div className="headerContainer">
        <h1 className="logo" onClick={navigateHome}>
          MovieFinder
        </h1>
        <Form onSubmit={handleFormSubmit} />
      </div>
      <main>
        <MovieContext.Provider value={{ movies, dispatch }}>
          <Outlet />
        </MovieContext.Provider>
      </main>
    </>
  );
};
