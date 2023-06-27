import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../components/Pages/Home/Home";
import ErrorPage from "../components/Pages/ErrorPage/ErrorPage";
import Blog from "../components/Pages/HomeSection/Blog/Blog";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);

