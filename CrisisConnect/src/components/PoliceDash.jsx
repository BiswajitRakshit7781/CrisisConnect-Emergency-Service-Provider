import React from 'react'
import './Dashboard.css'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
import { useEffect,useState } from 'react'


const PoliceDash = () => {
    const navigate = useNavigate();
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
      const accessLocation = async () => {
        try {
            const position = await new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(
                    resolve,
                    reject,
                    {
                        maximumAge: 0,
                        timeout: 5000,
                        enableHighAccuracy: true
                    }
                );
            });
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            console.log("Latitude:", latitude, "Longitude:", longitude);
            const coordinates={Latitude:latitude,Longitude:longitude,service:"Police"}
            let res=await fetch("http://localhost:5000/request-service",{method:"POST",headers: {
              'Content-Type': 'application/json'
          },body:JSON.stringify(coordinates)})
            let obj=await res.text()
            console.log(obj)
        } catch (error) {
            console.error("Error accessing location:", error);
        }
    };
  return (
    <>
    <nav className="flex justify-between items-center fixed">
        <div><h1 className=" logo">CrisisConnect</h1></div>
        <div className='flex gap-9'>
        <button onClick={() => navigate("/dashboard")} className='retdash'>Dashboard</button>          
        <button  className='logout'>Log Out</button>
        </div>
      </nav>
      <main className='dash'>
        <div className="welcome flex justify-center pt-32">
          <h1>Welcome {name}</h1>
        </div>
        <div className="dashboard flex gap-20 justify-center mt-28">
          <div className="card fireSupport" onClick={ accessLocation}>
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

export default PoliceDash
