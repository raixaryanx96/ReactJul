import React from 'react'
import { useState } from 'react'

export default function Taskform({addTask}) {
      let[task, setTask] = useState('');
      let[priority, setPriority] = useState("Medium");
      let[category, setCategory] = useState("General");

      const handleSubmit = (e)=>{
        e.preventDefault();
        addTask({text: task, priority, category, completed: false})
        //Reset State:
        setTask("");
        setPriority("Medium");
        setCategory("General");
      }
  return (
    <div>
        <form  onSubmit={handleSubmit} className='task-form'>
           <div id='inp'>
               <input type="text" placeholder='Enter the text' value={task} onChange={(e)=>setTask(e.target.value)}/>
               <span><button type = 'submit'>Add Task</button></span>
              {/* <h1>{task} {priority} {category}</h1> */}  
           </div>
           <div id='btns'>
             <select value={priority} onChange={(e)=>setPriority(e.target.value)}>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
             </select>

               <select  value={category} onChange={(e)=>setCategory(e.target.value)}>
                  <option value="general">General</option>
                  <option value="work">Work</option>
                  <option value="personal">Personal</option>
             </select>
           </div>
        </form>
    </div>
  )
}

