import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { api } from "../api/api";
import Card from "../Components/Card/Card";
import { AuthContext } from "../contexts/AuthProvider";
import Loading from "../Components/Loading/Loading";
import NotFound from "../Components/Error/NotFound";

const MyTasks = () => {
  const { user, loading } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [allTasks, setAllTasks] = useState([]);
  const [localStorageTask, setLocalStorageTask] = useState(null);
  const [taskApiCall, setTaskApiCall] = useState(false);
  const [localStorageCall, setLocalStorageCall] = useState(false);

  // get localstorage item
  useEffect(() => {
    setIsLoading(true);
    setLocalStorageTask(JSON.parse(localStorage.getItem("userData")));
    console.log("item", localStorageTask);
    setIsLoading(false);
  }, [localStorageCall]);

  console.log("localStorageCall", localStorageCall);

  // call all tasks api
  useEffect(() => {
    setIsLoading(true);
    fetch(`${api}/tasks/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setAllTasks(data);
        data && setIsLoading(false);
      })
      .catch((er) => console.error(er));
  }, []);

  // call all tasks api
  useEffect(() => {
    setIsLoading(true);
    fetch(`${api}/tasks/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setAllTasks(data);
        data && setIsLoading(false);
      })
      .catch((er) => console.error(er));
  }, [user?.email, taskApiCall]);

  console.log(allTasks);

  // deleteHandler
  const deleteHandler = async (id) => {
    setIsLoading(true);
    if (user?.uid) {
      // call db
      const result = await axios.delete(`${api}/task/${id}`);
      result.success === true && toast.success("Task deleted successfully");
      setTaskApiCall(true);
      toast.success("Deleted");
      setIsLoading(false);
    } else {
      setIsLoading(true);
      // call localStorage
      localStorage.setItem("userData", JSON.stringify(null));
      setLocalStorageCall(true);
      setIsLoading(false);
      toast.success("Deleted");
    }
  };

  console.log(allTasks);

  return isLoading ? (
    <Loading />
  ) : (
    <>
      {user?.uid ? (
        // call db
        allTasks?.tasks?.length === 0 || allTasks?.length === 0 ? (
          <NotFound />
        ) : (
          <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 mx-5 py-10 gap-3">
            {allTasks?.tasks.map((task) => (
              <Card
                id={task?._id}
                title={task?.title}
                image={task?.image}
                description={task?.description}
                isCompleted={task?.isCompleted}
                deleteHandler={deleteHandler}
              />
            ))}
          </div>
        )
      ) : // call localStorage
      localStorageTask === null || localStorageTask === {} ? (
        <NotFound />
      ) : (
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 mx-5 py-10 gap-3">
          {
            <Card
              id={localStorageTask?._id}
              title={localStorageTask?.title}
              image={localStorageTask?.image}
              description={localStorageTask?.description}
              isCompleted={localStorageTask?.isCompleted}
              deleteHandler={deleteHandler}
            />
          }
        </div>
      )}
    </>
  );
};

export default MyTasks;
