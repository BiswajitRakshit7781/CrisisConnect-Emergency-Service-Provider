import React from 'react'
import './Dashboard.css'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
import { useEffect,useState } from 'react'

const FireDash = () => {
  const [nameFound,setNamefound]=useState(false)
  const [name,setName]=useState('')
    const navigate = useNavigate();
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
    <nav className="flex justify-between items-center bg-transparent fixed">
        <div><h1 className=" logo">CrisisConnect</h1></div>
        <div className='flex gap-9'>
        <button onClick={() => navigate("/dashboard")} className='login'>Dashboard</button>          
        <button  className='login'>Log Out</button>
        </div>
      </nav>
      <main className='dash'>
        <div className="welcome flex justify-center pt-32">
          <h1>Welcome {name}</h1>
        </div>
        <div className="dashboard flex gap-20 justify-center mt-28">
          <div className="card fireSupport">
            <img className="poster" src=".\src\assets\currentlocation.jpeg" alt="CurrentLocation" />
            <h2 className="text-center">Current Location</h2>
          </div>
          <div className="card policeSupport">
            <img className="poster" src=".\src\assets\homelocation.jpeg" alt="HomeLocation" />
            <h2 className="title">Home Location</h2>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default FireDash
