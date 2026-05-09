// App.jsx

import Count from "./Components/Count";
import HomeClass from "./Components/HomeClass";

export default function App(){
  let fname = "Gamana";
  let age = 23;

  return (
    <div>
      <h1>Welcome</h1>
       <Count />
       {/*<HomeClass name={fname} age={age} />*/}
    </div>
  )
}


