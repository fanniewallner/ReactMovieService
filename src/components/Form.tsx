import { ChangeEvent, FormEvent, useState } from "react";

//import { Link } from "react-router-dom";

export interface IPropsForm {
  onSubmit: (input: string) => void;
}

export const Form = ({ onSubmit }: IPropsForm) => {
  /*   const movies = useContext(MovieContext); */
  const [input, setInput] = useState("");
  /*    const dispatch = useContext(MovieDispatchContext); */
  /*  const navigate = useNavigate();
   */
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(input);
    setInput("");
    console.log("fn run form");

    /*     navigate("/movies"); */
    /*  const movies = await getMovies(input);
    dispatch({ type: ActionType.FETCHED_MOVIES, payload: movies }); */
    //i    setInput("");
    /*     navigate("/movies", { state: movies });
    console.log("form conext", movies); */
  };

  /*   useEffect(() => {
    // Update the component whenever movies change
    console.log("Movies updated:", movies);
  }, [movies]); */

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" value={input} onChange={handleChange} />
      <button type="submit">Search Movies</button>
      <div></div>
    </form>
  );
};
