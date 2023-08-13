import { Outlet, useNavigate } from "react-router-dom";
import { Form } from "./Form";
import { useReducer, useState } from "react";
import { getMovies } from "../services/MovieService";
import { ActionType, MoviesReducer } from "../reducers/MoviesReducer";
import { MovieContext } from "../contexts/MovieContext";
import { CenteringWrapperHorisontal } from "../styled/Wrappers";
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
      console.log("input value", input);
      // Fetch data using the input value
      const dataFromApi = await getMovies(input);
      dispatch({ type: ActionType.FETCHED_MOVIES, payload: dataFromApi });
      console.log("Data response", dataFromApi);
      navigate("/movies");
    } catch (error) {
      console.error("Could not fetch movies", error);
    }
  };

  const navigateHome = () => {
    navigate("/");
  };

  return (
    <>
      <CenteringWrapperHorisontal>
        <h1 className="logo" onClick={navigateHome}>
          MovieFinder
        </h1>
        <Form onSubmit={handleFormSubmit} />
      </CenteringWrapperHorisontal>
      <main>
        <MovieContext.Provider value={{ movies, dispatch }}>
          <Outlet />
        </MovieContext.Provider>
        {/* //{currentMovie && <MovieView movie={currentMovie}/>} */}
      </main>
    </>
  );
};
