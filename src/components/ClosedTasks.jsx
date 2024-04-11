import React from 'react'
import TaskComponent from './TaskComponent';
import { useSelector } from 'react-redux';
import EmptyPage from './EmptyPage';

const ClosedTasks = () => {
    const {allTask} = useSelector(store => store.crudTodoReducer)
    const closedTasks = allTask.filter(task=> task.status==="closed")
  return (
    <>
    {closedTasks.length  > 0 ?
    <div>
       {closedTasks.map((task) => {
        return (
          <TaskComponent key={task.id} task={task}/>
        );
      })}
    </div>: 
    <EmptyPage title="None Of these task closed Yet !"/>}
    </>
  )
}

export default ClosedTasks
