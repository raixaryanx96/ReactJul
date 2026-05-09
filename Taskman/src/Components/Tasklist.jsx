import React from 'react'

export default function Tasklist({tasks , updateTask , deleteTask}) {
  const toggleComplete = (index) =>{
         const updatedTask =  {...tasks[index], completed: !tasks[index].completed};   // here we are creating a new object called updatedTask by spreading the properties of the existing task at the given index and then toggling the completed property by negating its current value.
         updateTask(updatedTask,index);                                                // here we are calling the updateTask function and passing the index of the task we want to update and the updatedTask object that contains the new state of the task after toggling its completion status.
  }
  return (
        <ul className='task-list'>
            {tasks.map((task, index) => (
                <li key={index} className= {task.completed ? 'completed' : ''}>
                    <div>
                      <span>{task.text}</span>
                      <small>{task.priority}, {task.category} </small>
                    </div>

                    <div>
                    <button onClick={()=>{toggleComplete(index)}}>
                      {task.completed ? "Unod" : "Complete"}</button>
                    <button onClick={()=>deleteTask(index)}>delete</button>
                    </div>
                </li>
            ))}
        </ul>
  )
}