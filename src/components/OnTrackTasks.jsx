import React from 'react'
import TaskComponent from './TaskComponent';
import { useSelector } from 'react-redux';
import EmptyPage from './EmptyPage';

const OnTrackTasks = () => {
    const {allTask} = useSelector(store => store.crudTodoReducer)
    const onTrackTasks = allTask.filter(task=> task.status==="on track")
  return (
    <>
    {onTrackTasks.length  > 0 ?
    <div>
       {onTrackTasks.map((task) => {
        return (
          <TaskComponent key={task.id} task={task}/>
        );
      })}
    </div>: 
    <EmptyPage title="Your task is not started Yet !"/>}
    </>
  )
}

export default OnTrackTasks
