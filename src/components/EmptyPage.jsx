import React from "react";
import noTask from "../assets/no-task.jpg";

const EmptyPage = ({title}) => {
  return (
    <div className="flex justify-center ">
      <div className="text-center w-40 h-auto">
        <img src={noTask} className="" alt="" />
        <p>{title}</p>
      </div>
    </div>
  );
};

export default EmptyPage;
