import React from "react";
import Card from "../Components/Card/Card";

const MyTasks = () => {
  return (
    <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 mx-5 py-10 gap-3">
      <Card />
      <Card />
    </div>
  );
};

export default MyTasks;
