import { useState } from 'react'
import './App.css'
import Login from './Components/Login'
import Signin from './Components/Signin'
import Navbarr from './Components/Navbarr'
import { Route, Routes } from 'react-router-dom'
import Blog from './Components/Blog'
import Addblog from './Components/Addblog'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbarr/>
   <Routes>
    <Route path='/Blog' element={<Blog/>}></Route>
    <Route path='/' element={<Login/>}></Route>
    <Route path='/Signin' element={<Signin />}></Route>
    <Route path='/Addblog' element={<Addblog />}></Route>
   </Routes>
    </>
  )
}

export default App
