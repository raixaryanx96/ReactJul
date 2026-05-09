import React, { useEffect, useState } from 'react'

export default function Count() {

 // let count = 1;  // it will constact 

 //Hook -> making the state changeble we use Hook.
 
// setCount -> It is set-Handler 

 let[count, setCount] = useState(2);

// useEffect -> Once the main component is executed ,after that the useEffect is executed

// useEffect(() => alert("clicked"));

// useEffect(() => console.log("you clicked"));

useEffect(() => {
  setTimeout(() => {
    setCount((count) => count + 1);
  }, 1000);
});


 const inc = () => {
      setCount ( count = count + 1)
 }

 
  return (

    <div>

      <h1>This count is {count}</h1>

       <button onClick={inc}>Increment count</button>
    
       <button onClick={()=> setCount(count = count-1)}>Decrement Count</button>

       <button onClick={()=>setCount(0)}>Reset</button>

       
       
    </div>
  )
}
