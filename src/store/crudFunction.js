import { createSlice } from "@reduxjs/toolkit";
import {arr} from "./data"

export const crudTodoSlice = createSlice({
  name: "crudtodo",
  initialState: {
    allTask:arr,
    editedTask : null,
    isLoading : false
  },
  reducers: {
    addTodo: (state, action) => {
      state.allTask = [ action.payload.task , ...state.allTask ];
    },
    editTodo:(state , action)=>{
    const { id, name } = action.payload.editTask;
      const taskToUpdate = state.allTask.find(task => task.id === id);
      if (taskToUpdate) {
        taskToUpdate.name = name;
        state.editedTask = null;
      }
    },
    deleteTodo:(state , action)=>{
       state.allTask = state.allTask.filter(state=> state.id !== action.payload)
    },
    setEditedTask:(state , action) =>{
        state.editedTask = action.payload
    },
    selectTask: (state, action) => {
      const newObj = state.allTask.find((state)=>state.id === action.payload )
      if(newObj){
        newObj.selected = !newObj.selected
      }
    },
    sceduleTime:(state , action)=>{
      let {startTime , endTime , id} = action.payload
      const setTimeInSelectedObj = state.allTask.find(state=> state.id === id)
      if(setTimeInSelectedObj){
       setTimeInSelectedObj.startTime = startTime.current,
       setTimeInSelectedObj.endTime = endTime.current,
       setTimeInSelectedObj.status = "scheduled"
       setTimeInSelectedObj.color="bg-purple-300"
      }
   },
   statusChange:(state , action)=>{
    let {id , status} = action.payload
    let singleIdStatus = state.allTask.find(task=> task.id === id)
    if(singleIdStatus){
      singleIdStatus.status = status
      if(singleIdStatus.status == "scheduled"){
        singleIdStatus.color="bg-purple-300"
      }
      else if(singleIdStatus.status == "on track"){
        singleIdStatus.color="bg-orange-300"
      }
      else if(singleIdStatus.status == "time out"){
        singleIdStatus.color="bg-red-300"
      }
      else if(singleIdStatus.status == "closed"){
        singleIdStatus.color="bg-gray-400"
      }
      else if(singleIdStatus.status == "completed"){
        singleIdStatus.color="bg-green-300"
      }

    }
   },
   loadingData : (state , action) =>{
    state.isLoading = action.payload.isLoading
   }
  },
});
