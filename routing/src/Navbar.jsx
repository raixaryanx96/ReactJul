import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <h1>This is navbar</h1>

     {/*<a href=""></a>*/}

{/*<ul>
     <li><Link to="/home">Home</Link></li>
     <li><Link to="/about">About</Link></li> 
     <li> <Link to="/contact">Contact</Link></li> 

</ul>*/}

<nav className = "nav">

     <Link to="/home" className = "nav-tem">Home</Link>
     <Link to="/about" className = "nav-tem">About</Link>
      <Link to="/contact" className = "nav-tem">Contact</Link>

</nav>

      
      
    </div>
  )
}
