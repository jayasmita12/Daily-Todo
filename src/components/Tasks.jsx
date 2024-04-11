import React from "react";
import { TiDelete } from "react-icons/ti";
import { FaRegEdit } from "react-icons/fa";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { crudTodoAction } from "../store/TodoStore";
import TaskComponent from "./TaskComponent";
import EmptyPage from "./EmptyPage";

const Tasks = () => {
  const {allTask } = useSelector((store) => store.crudTodoReducer);
  
  return (
    <>
    {allTask.length > 0 ?
    <div className="space-y-3 ">
      {allTask.map((task) => {
        return (
          <TaskComponent key={task.id} task={task}/>
          );
        })}
    </div>:
    <EmptyPage title="Now You are free from task"/>}
    </>
  );
};

export default Tasks;
