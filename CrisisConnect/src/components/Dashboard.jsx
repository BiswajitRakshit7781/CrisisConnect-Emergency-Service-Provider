import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Dashboard.css'
import Footer from './Footer'
import { useState,useEffect } from 'react'
import Logout_page from './Logout_page'
import './logout.css'

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
  const navigate = useNavigate();
   const set_logout=()=>{
    let log_out=document.getElementById("logout-page")
    let sheet=document.getElementsByClassName("sheet")[0]
    log_out.style.display="flex"
    sheet.style.display="block"
   }
  return (
    
    <>
    {!nameFound && navigate("/login")}
      <nav className="flex justify-between items-center bg-transparent fixed">
        <div><h1 className=" logo">CrisisConnect</h1></div>
        <button  className='login' onClick={set_logout}>Log Out</button>
      </nav>
      <main className='dash'>
        <div className="welcome flex justify-center pt-32">
          <h1>Welcome {name}</h1>
        </div>
        <div className="dashboard flex gap-20 justify-center mt-28">
          <div onClick={() => navigate("/fire")} className="card fireSupport cursor-pointer">
            <img className="poster" src=".\src\assets\fire_home.jpeg" alt="FireSupport" />
            <h2 className="title">Fire Brigade Support</h2>
          </div>
          <div onClick={() => navigate("/police")} className="card policeSupport cursor-pointer">
            <img className="poster" src=".\src\assets\police_home.jpeg" alt="PoliceSupport" />
            <h2 className="title">Police Support</h2>
          </div>
          <div onClick={() => navigate("/hospital")} className="card hospitalSupport cursor-pointer">
            <img className="poster" src=".\src\assets\hospital_home.jpeg" />
            <h2 className="title">Hospital Support</h2>
          </div>
          <div onClick={() => navigate("/medicine")} className="card medicineSupport cursor-pointer">
            <img className="poster" src=".\src\assets\medicine_home.jpeg" alt="MedicineSupport" />
            <h2 className="title">Medicine Support</h2>
          </div>
        </div>
      </main>
      <Logout_page />
      <div className="sheet"></div>
      <Footer />

    </>
  )
}

export default Dashboard
