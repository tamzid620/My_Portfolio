import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../components/Pages/Home/Home";
import ErrorPage from "../components/Pages/ErrorPage/ErrorPage";
import Azraelle from "../components/Pages/azraelle/azraelle";
import Handy from "../components/Pages/handy/handy";
import Chef from "../components/Pages/chef/chef";
import MyProjects from "../components/Pages/HomeSection/MyProjects/MyProjects";
import Blog from "../components/Pages/HomeSection/Blog/Blog";
import AzaharMia from "../components/Pages/AzaharMia/AzaharMia";

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
        {
          path: "/myproject",
          element: <MyProjects/>,
        },
        {
          path: "/blog",
          element: <Blog/>,
        },
        {
          path: "/azraelle",
          element:<Azraelle/>,
        },
        {
          path: "/handy",
          element: <Handy/>,
        },
        {
          path: "/chef",
          element: <Chef/>,
        },
        {
          path: "/azaharmia",
          element: <AzaharMia/>,
        },
      ],
    },
  ]);

