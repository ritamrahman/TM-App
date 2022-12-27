import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";

import Main from "../Components/Layout/Main";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
