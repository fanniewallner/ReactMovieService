import { Outlet, useNavigate } from "react-router-dom";
import { Form } from "./Form";
import { useReducer, useState } from "react";
import { getMovies } from "../services/MovieService";
import { ActionType, MoviesReducer } from "../reducers/MoviesReducer";
import { MovieContext } from "../contexts/MovieContext";
import { CenteringWrapperHorisontal } from "../styled/Wrappers";
import "../index.css";
import { Header } from "./HeaderAnimation";

//import { MovieContext, MovieDispatchContext } from "../contexts/MovieContext";
/* import { Form } from "./Form"; */
// import { useContext } from "react";
// import { MovieContext } from "../contexts/MovieContext";
//import { useReducer } from "react";
//import { MoviesReducer } from "../reducers/MoviesReducer";

export interface ILayoutProps {
  onSubmit: (input: string) => void;
}

export const Layout = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
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

  //const movies = useContext(MovieContext);
  //const dispatch = useContext(MovieDispatchContext);
  /* 
  const getData = async (input: string) => {
    try {
      const dataFromApi = await getMovies(input);
      dispatch({ type: ActionType.FETCHED_MOVIES, payload: dataFromApi });
      console.log(movies);
      console.log("data from api", dataFromApi);
    } catch (error) {
      console.error("Could not fetch movies", error);
    }
  }; */

  /*   const handleFormSubmit = (inputForm: string) => {
    setInput(inputForm);
    onSubmit(input);
    // getData(input);
    console.log("fn run layout");
  }; */
  //const {currentMovie} = useContext(MovieContext)
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
