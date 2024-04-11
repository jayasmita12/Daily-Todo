import React from 'react'
import { IoSearch } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { crudTodoAction } from '../store/TodoStore';



const InputBox = () => {
  const {allTask} =useSelector(store => store.crudTodoReducer)
  const dispatch = useDispatch()


  const addTaskToList = async(e) =>{
    if(e.target.value != ""){
    if(e.key==="Enter"){
        const newTask = {
          id:allTask.length + 1,
          name: e.target.value,
          startTime: "",
          endTime:"",
          status: "",
          selected:false,
          color:""
        }
        dispatch(crudTodoAction.addTodo({task:newTask}))
        e.target.value = ""
      }
    }
  }

  return (
    <div>
      <div className='relative'>
      <span > <IoSearch className='absolute text-2xl top-4 text-gray-500 left-2'/></span>
      <input type="text" onKeyDown={(e)=> addTaskToList(e)} placeholder='Enter Today Task' className='border-2 placeholder:font-semibold placeholder:text-lg text-lg border-gray-400 w-full pl-9 py-3 rounded-md transition focus:delay-300 duration-300 focus:border-yellow-500 focus:outline-none' /></div>
    </div>
  )
}

export default InputBox
