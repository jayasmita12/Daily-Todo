import { configureStore } from "@reduxjs/toolkit";
import { crudTodoSlice } from "./crudFunction";


export const  TodoStore = configureStore({
    reducer:{
       crudTodoReducer : crudTodoSlice.reducer ,
    }
})

export const crudTodoAction = crudTodoSlice.actions

