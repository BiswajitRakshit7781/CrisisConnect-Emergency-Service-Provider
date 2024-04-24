import React from 'react'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <>
    <nav className="flex justify-between h-28 items-center ">
        <div><h1 className="text-white logo">CrisisConnect</h1></div>
        <ul className="flex gap-10 items-center text-white">
          <li className='bg-blue-500 font-bold text-black'>Contact Us</li>
          <li className="bg-red-700 font-bold">LOG OUT</li>
        </ul>
      </nav>
      <main>
        <div className="welcome flex justify-center pt-8">
          <h1 className="text-yellow-200">Welcome ABCD Singh</h1>
        </div>
        <div className="dashboard flex gap-20 justify-center mt-28">
          <div className="card fireSupport">
              <img className="poster" src="https://api.ctia.org/wp-content/uploads/2018/03/wea_alerts.jpg" alt="FireSupport" />
            <h1 className="title">Fire Support</h1>
          </div>
          <div className="card policeSupport">
              <img className="poster" src="https://www.daysoftheyear.com/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=cover%2Cheight=650%2Cq=40%2Csharpen=1%2Cwidth=956/wp-content/uploads/policewoman-using-radio-patrolling-street-in-car-2022-02-18-04-30-45-utc-scaled.jpg" alt="PoliceSupport" />
            <h1 className="title">Police Support</h1>
          </div>
          <div className="card hospitalSupport">
              <img className="poster" src="https://www.sriramakrishnahospital.com/wp-content/uploads/2022/05/Importance-of-first-aid.png" alt="HospitalSupport" />
            <h1 className="title">Hospital Support</h1>
          </div>
          <div className="card medicineSupport">
              <img className="poster" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7o7A_2zPSM4Vm6bF3loTROlO6Ymjm0uSgwuRl76nkHQ&s" alt="MedicineSupport" />
            <h1 className="title">Medicine Support</h1>
          </div>
        </div>
      </main>
      <footer className="fixed bottom-0">
        <p className="text-white">Copyright ©CrisisConnect 2024 || All Rights Reserved</p>
      </footer>
      </>
  )
}

export default Dashboard
