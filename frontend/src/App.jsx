import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import New from './components/New/New.jsx'

function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/newemp' element={<New/>}></Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
