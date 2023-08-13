import { createBrowserRouter } from "react-router-dom";
import { Movies } from "./components/Movies";
import { Layout } from "./components/Layout";
import { MovieView } from "./components/MovieView";
import { Home } from "./components/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/movies/:id",
        element: <MovieView />,
      },
    ],
  },
]);
