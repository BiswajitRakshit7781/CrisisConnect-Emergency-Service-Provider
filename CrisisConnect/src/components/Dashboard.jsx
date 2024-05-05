import React from 'react'
import './Dashboard.css'
import Footer from './Footer'
import { useState,useEffect } from 'react'

const Dashboard = () => {
  const [nameFound,setNamefound]=useState(false)
  const [name,setName]=useState('')
useEffect(()=>{
  get_name()
},[])
  const get_name=async ()=>{
    let res=await fetch("http://localhost:5000/dashboard")
    let log_stat=await res.json()
    if(log_stat.name!==false){
    setNamefound(true)
    setName(log_stat.name)
    }
    }

  return (
    
    <>
    {
      nameFound ?(<>
      <nav className="flex justify-between items-center bg-transparent fixed">
        <div><h1 className=" logo">CrisisConnect</h1></div>
        <button  className='login'>Log Out</button>
      </nav>
      <main className='dash'>
        <div className="welcome flex justify-center pt-32">
          <h1>Welcome {name}</h1>
        </div>
        <div className="dashboard flex gap-20 justify-center mt-28">
          <div className="card fireSupport">
            <img className="poster" src=".\src\assets\fire_home.jpeg" alt="FireSupport" />
            <h2 className="title">Fire Brigade Support</h2>
          </div>
          <div className="card policeSupport">
            <img className="poster" src=".\src\assets\police_home.jpeg" alt="PoliceSupport" />
            <h2 className="title">Police Support</h2>
          </div>
          <div className="card hospitalSupport">
            <img className="poster" src=".\src\assets\hospital_home.jpeg" />
            <h2 className="title">Hospital Support</h2>
          </div>
          <div className="card medicineSupport">
            <img className="poster" src=".\src\assets\medicine_home.jpeg" alt="MedicineSupport" />
            <h2 className="title">Medicine Support</h2>
          </div>
        </div>
      </main>
      <Footer />
      </>):(<><div className="welcome flex justify-center pt-32">
          <h1>Please Login correctly</h1>
        </div></>)
    }
    </>
  )
}

export default Dashboard
