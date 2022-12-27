import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";

import Main from "../Components/Layout/Main";
import AddTask from "../pages/AddTask";
import MyTasks from "../pages/MyTasks";

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
    ],
  },
]);
