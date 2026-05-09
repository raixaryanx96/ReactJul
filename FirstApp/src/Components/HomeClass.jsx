// HomeClass

import Contactclass from "./Contactclass"



export default function HomeClass(props){

  // name = "divya";   // we can't modify in child class 

      return(
            <div>
                   
                  <h1>Hello ! {props.name} Ages is  {props.age}</h1>
                  
                  <Contactclass name = {props.name} />

            </div>
      )
}

