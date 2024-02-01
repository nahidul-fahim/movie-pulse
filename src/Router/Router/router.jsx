import { createBrowserRouter } from "react-router-dom";
import Root from "../../Layout/Root";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import MovieDetails from "../../Pages/MovieDetails/MovieDetails";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/movieDetails",
                element: <MovieDetails />,
            },
        ],
    },
]);

export default router;