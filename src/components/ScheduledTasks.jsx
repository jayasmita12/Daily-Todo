import React from 'react'
import TaskComponent from './TaskComponent';
import { useSelector } from 'react-redux';
import EmptyPage from './EmptyPage';

const ScheduledTasks = () => {
    const {allTask} = useSelector(store => store.crudTodoReducer)
    const scheduledTasks = allTask.filter(task=> task.status==="scheduled")
  return (
    <>
    {scheduledTasks.length  > 0 ?
    <div>
       {scheduledTasks.map((task) => {
        return (
          <TaskComponent key={task.id} task={task}/>
        );
      })}
    </div>: 
    <EmptyPage title="All task are on tracked !"/>}
    </>
  )
}

export default ScheduledTasks
