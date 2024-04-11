import Modal from "./Modal"
import React from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { TiDelete } from 'react-icons/ti'
import { useDispatch, useSelector } from 'react-redux'
import { crudTodoAction } from '../store/TodoStore'

const TaskComponent = ({task}) => {
    const {allTask , editedTask} = useSelector((store) => store.crudTodoReducer);
  const dispatch = useDispatch() 

  
  const selectEditButton = (id) => {
    const selectedTask = allTask.find((task) => task.id === id);
    dispatch(crudTodoAction.setEditedTask(selectedTask))
  };

  const handleSetTheName = (e) =>{
    if(e.key === "Enter"){
      dispatch(crudTodoAction.editTodo({
        editTask:{
          id:editedTask.id,
          name:e.target.value,
          time:"",
          selected:editedTask.selected
        }
    }))
    }
  }

  const selectOneTask = (task) =>{
    if(allTask.find((newtask)=> newtask.id === task.id)){
      dispatch(crudTodoAction.selectTask(task.id))
    }
  }

  const deleteSelectedTask = (id)=>{
    dispatch(crudTodoAction.deleteTodo(id))
  }
  return (
    <div  className="w-full">
    <div className="flex  justify-between w-full ">
      <label className="flex  w-full   gap-2 ">
        <input type="checkbox" checked={task.selected}  onChange={()=> selectOneTask(task)} name="" id="" />
        <p className="leading-tight break-all">
          {editedTask && editedTask.id === task.id ? (
            <input
              type="text"
              className="w-full p-1 focus:outline-none border-2 rounded border-gray-300"
              // value={editedTask.name}
              autoFocus={true}
              onKeyDown={handleSetTheName}
            />
          ) : (
            <span>{task.name}</span>
          )}
          <Modal task={task} />
        </p>
      </label>
      {task.selected &&
      <div className="flex space-x-2 ">
        <button onClick={() => selectEditButton(task.id)}>
          <FaRegEdit className="text-xl text-green-600" />
        </button>
        <button onClick={() => deleteSelectedTask(task.id)}>
          <TiDelete className="text-2xl text-red-600" />
        </button>
      </div> }
    </div>
    <hr className="my-3" />
  </div>
  )
}

export default TaskComponent
