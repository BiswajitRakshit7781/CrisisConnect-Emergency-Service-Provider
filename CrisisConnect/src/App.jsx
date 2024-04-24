import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Signup from  './components/Signup';
import Adminlogin from './components/Adminlogin'

function App() {
  const route = createBrowserRouter([
    {
      path : "/dashboard",
      element : <Dashboard/>
    },
    {
      path : "/",
      element : <Home/>
    },
    {
      path : "/login",
      element : <Login/>
    },
    {
      path : "/signup",
      element : <Signup/>
    },
    {
      path : "/admin",
      element : <Adminlogin/>
    },
  ])

  return (
    <>
      <RouterProvider  router={route}/>
    </>
  )
}

export default App
