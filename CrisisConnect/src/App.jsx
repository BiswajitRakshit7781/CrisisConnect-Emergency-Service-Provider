import { useState } from 'react'
import Dashboard from './components/Dashboard'
import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

function App() {
  const route = createBrowserRouter([
    {
      path : "/dashboard",
      element : <Dashboard/>
    },
  ])

  return (
    <>
      <RouterProvider  router={route}/>
    </>
  )
}

export default App
