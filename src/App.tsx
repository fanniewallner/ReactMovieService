import { Layout } from "./components/Layout";

function App() {
  //const [input, setInput] = useState("");

  /*   useEffect(() => {
    if (input) {
      handleFormSubmit(input);
    }
  }, [input]); */

  /*   const getData = async () => {
    try {
      const dataFromApi = await getMovies(input);
      dispatch({ type: ActionType.FETCHED_MOVIES, payload: dataFromApi });
    } catch (error) {
      console.error("Could not fetch movies", error);
    }
  };

  const handleFormSubmit = (inputForm: string) => {
    setInput(inputForm);
    getData();
    console.log("fn run app");
  }; */

  /* useEffect{() => {
const getData = async() => {
  let dataFromApi = await getMovies();
  dispatch({type: ActionType.FETCHED_MOVIES}, payload: dataFromApi)
}
getData();
  }} */

  return (
    <div className="App">
      <Layout></Layout>
      {/*       <MovieContext.Provider value={movies}>
        <MovieDispatchContext.Provider value={dispatch}>
          <RouterProvider router={router}>
            <Layout onSubmit={handleFetchingMovies}></Layout>
          </RouterProvider>
        </MovieDispatchContext.Provider>
      </MovieContext.Provider> */}
    </div>
  );
}

export default App;
