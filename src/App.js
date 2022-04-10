import React,{useState} from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/pages/Dashboard'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import PrivateRoute from './components/PrivateRoute'

export const App = () => {
 
  return (
    <>
    <Navbar/>
    <Routes>
        <>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route element={<PrivateRoute/>}>
          <Route exact path='/home' element={<Home/>}/>
          <Route exact path='/dashboard' element={<Dashboard/>}/>
       </Route>
        </>
    </Routes>
    </>
  )
}
export default App