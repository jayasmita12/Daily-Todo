import React from 'react'
import TaskComponent from './TaskComponent';
import { useSelector } from 'react-redux';
import EmptyPage from './EmptyPage';

const TimeOutTasks = () => {
    const {allTask} = useSelector(store => store.crudTodoReducer)
    const timeOutTasks = allTask.filter(task=> task.status==="time out")
  return (
    <>
    {timeOutTasks.length  > 0 ?
    <div>
       {timeOutTasks.map((task) => {
        return (
          <TaskComponent key={task.id} task={task}/>
        );
      })}
    </div>: 
    <EmptyPage title="Your task is not completed with in time limit !"/>}
    </>
  )
}

export default TimeOutTasks
