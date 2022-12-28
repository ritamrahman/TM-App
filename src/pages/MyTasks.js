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
  const [allTasks, setAllTasks] = useState();
  const [taskApiCall, setTaskApiCall] = useState(false);

  // call all tasks api
  useEffect(() => {
    setIsLoading(true);

    fetch(`${api}/tasks/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setAllTasks(data);
        setIsLoading(false);
      })
      .catch((er) => console.error(er));
  }, [user?.email, taskApiCall]);

  console.log(allTasks);

  // deleteHandler
  const deleteHandler = async (id) => {
    const result = await axios.delete(`${api}/task/${id}`);
    result.success === true && toast.success("Task deleted successfully");
    setTaskApiCall(true);
  };

  return isLoading ? (
    <Loading />
  ) : (
    <>
      {allTasks?.tasks?.length === 0 ? (
        <NotFound />
      ) : (
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 mx-5 py-10 gap-3">
          {allTasks?.tasks.map((task) => (
            <Card
              id={task._id}
              title={task.title}
              image={task.image}
              isCompleted={task.isCompleted}
              deleteHandler={deleteHandler}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default MyTasks;
