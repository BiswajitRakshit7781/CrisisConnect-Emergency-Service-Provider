import { useState } from 'react'
import Dashboard from './components/Dashboard'
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
  ])

  return (
    <>
      <RouterProvider  router={route}/>
    </>
  )
}

export default App
