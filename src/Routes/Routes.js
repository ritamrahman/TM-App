import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";

import Main from "../Components/Layout/Main";
import AddTask from "../pages/AddTask";
import MyTasks from "../pages/MyTasks";
import CompletedTasks from "../pages/CompletedTasks";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import NotFound from "../Components/Error/NotFound";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add-task",
        element: <AddTask />,
      },
      {
        path: "/my-tasks",
        element: <MyTasks />,
      },
      {
        path: "/completed-tasks",
        element: <CompletedTasks />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
