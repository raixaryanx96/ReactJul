import React, { useEffect } from 'react'
import { useState} from 'react'
import Taskform from './Components/Taskform'
import Tasklist from './Components/Tasklist'
import Progresstracker from './Components/Progresstracker'
import './Style.css'
export default function App() {

  const[tasks,setTasks] = useState([]);

  useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(tasks));  // with the hekp of JSON.stringify we are converting the tasks array into a string and storing it in local storage with the key "tasks"
  },[tasks]);

  const addTask = (task) =>{
    setTasks([...tasks, task]);       //  here we are using the spread operator to create a new array that includes all the existing tasks and the new task that we want to add. This way we are not mutating the original tasks array but creating a new one with the added task.
  }
  const updateTask = (updatedTask,index) =>{

           const newtask = [...tasks];     // here we are creating a new array called newtask by spreading the existing tasks array. This is done to avoid mutating the original tasks array directly.
            newtask[index] = updatedTask;   // here we are updating the task at the specified index in the newtask array with the updatedTask object that contains the new state of the task after toggling its completion status.
            setTasks(newtask);              // here we are updating the state of tasks with the newtask array that contains the updated task. This will trigger a re-render of the component and reflect the changes in the UI.
  }

  const deleteTask = (index) => {

            setTasks(tasks.filter((_, i) => i != index ));     
  }

  const clearTasks = () =>{

           setTasks([]);     // here we are setting the tasks state to an empty array, which will effectively clear all the tasks from the list. This will trigger a re-render of the component and update the UI to reflect that there are no tasks left.
  }

  return (
    <div>
      <header>
      <h1>TaskMan</h1>
      <p><i>Your friendly Task Management</i></p>
      </header>
      <Taskform addTask = {addTask}/>
      <Tasklist tasks = {tasks} updateTask = {updateTask} deleteTask = {deleteTask}/>
      <Progresstracker tasks = {tasks} />
      {tasks.length > 0 && (<button className='clear-btn'
       onClick={clearTasks}>clear All Tasks</button>)}
    </div>
  )
}
