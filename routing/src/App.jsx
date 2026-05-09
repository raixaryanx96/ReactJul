import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Contactnew from './Contactnew'
import Aboutnew from './Aboutnew'
import "./assets/style.css"



import { Route, Routes } from 'react-router-dom'


export default function App() {
  return (
    <div>
      <h1>Hello</h1>

      <Navbar />

      <Routes>
        <Route path = "/home" element = {<Home />}></Route>
        <Route path = "/contact" element = {<Contactnew />}></Route>
        <Route path = "/about" element = {<Aboutnew />}></Route>
      </Routes>


    </div>
  )
}

