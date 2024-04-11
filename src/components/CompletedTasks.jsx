import React from 'react'
import TaskComponent from './TaskComponent';
import { useSelector } from 'react-redux';
import EmptyPage from './EmptyPage';

const CompletedTasks = () => {
    const {allTask} = useSelector(store => store.crudTodoReducer)
    const completedTasks = allTask.filter(task=> task.status==="completed")
  return (
    <>
    {completedTasks.length  > 0 ?
    <div>
       {completedTasks.map((task) => {
        return (
          <TaskComponent key={task.id} task={task}/>
        );
      })}
    </div>: 
    <EmptyPage title="None Of these task completed Yet !"/>}
    </>
  )
}

export default CompletedTasks
