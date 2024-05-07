import React from 'react'
import './Dashboard.css'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'

const AdminDashboard = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="flex justify-between items-center bg-transparent fixed">
        <div><h1 className=" logo">CrisisConnect</h1></div>
        <button className='login'>Log Out</button>
      </nav>
      <main className='dash'>
      <div className="welcome flex justify-center pt-32">
          <h1>Welcome Admin</h1>
        </div>
        <div className="dashboard flex gap-20 justify-center mt-28">
          <div onClick={() => navigate("/fireadmin")} className="card fireSupport cursor-pointer">
            <img className="poster" src=".\src\assets\fire_home.jpeg" alt="FireSupport" />
            <h2 className="title">Fire Brigade Support</h2>
          </div>
          <div onClick={() => navigate("/policeadmin")} className="card policeSupport cursor-pointer">
            <img className="poster" src=".\src\assets\police_home.jpeg" alt="PoliceSupport" />
            <h2 className="title">Police Support</h2>
          </div>
          <div onClick={() => navigate("/hospitaladmin")} className="card hospitalSupport cursor-pointer">
            <img className="poster" src=".\src\assets\hospital_home.jpeg" />
            <h2 className="title">Hospital Support</h2>
          </div>
          <div onClick={() => navigate("/medicineadmin")} className="card medicineSupport cursor-pointer">
            <img className="poster" src=".\src\assets\medicine_home.jpeg" alt="MedicineSupport" />
            <h2 className="title">Medicine Support</h2>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default AdminDashboard
