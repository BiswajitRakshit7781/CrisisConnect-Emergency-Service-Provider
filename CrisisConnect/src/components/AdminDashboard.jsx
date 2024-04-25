import React from 'react'
import './Dashboard.css'
import Footer from './Footer'

const AdminDashboard = () => {
    return (
        <>
        <nav className="flex justify-between items-center bg-transparent fixed">
        <div><h1 className=" logo">CrisisConnect</h1></div>
        <button  className='login'>Log Out</button>
      </nav>
      <main className='dash'>

      </main>
      <Footer/>
        </>
    )
}

export default AdminDashboard
