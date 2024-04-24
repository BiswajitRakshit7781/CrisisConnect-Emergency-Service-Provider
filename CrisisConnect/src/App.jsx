import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Login from './Login'
import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './components/Home'

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
  ])

  return (
    <>
      <RouterProvider  router={route}/>
    </>
  )
}

export default App
