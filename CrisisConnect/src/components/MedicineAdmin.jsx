import React from 'react'
import './Dashboard.css'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
import { useRef,useEffect,useState } from 'react'

const MedicineAdmin = () => {
  const [victim,setVictim]=useState([])
  useEffect(()=>{
   get_data()
  },[])
  const navigate = useNavigate();
  const service=useRef({name:"Medicine"})
  const get_data=async()=>{
    let res=await fetch("http://localhost:5000/regitered-services",{method:"POST",headers: {
      'Content-Type': 'application/json'
  },body:JSON.stringify(service.current)})
  let r=await res.json()
  setVictim(r)
}
get_data()
  return (
    <>
      <nav className="flex justify-between items-center bg-transparent fixed">
        <div><h1 className=" logo">CrisisConnect</h1></div>
        <div className='flex gap-9'>
          <button onClick={() => navigate("/admindashboard")} className='login'>Dashboard</button>
          <button className='login'>Log Out</button>
        </div>
      </nav>
      <main className='dash'>
        <div className="welcome flex justify-center pt-32">
          <h1>Welcome Admin</h1>
        </div>
        <div className="overflow-x-auto pt-10">
          <table className='table-auto min-w-full'>
            <thead className='sticky top-0 bg-white'>
              <tr>
              <th className='px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider'><h4>User Name</h4></th>
                    <th className='px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider'><h4>Email ID</h4></th>
                    <th className='px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider'><h4>Phone No</h4></th>
                    <th className='px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider'><h4>Location</h4></th>
                    <th className='px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider'><h4>District</h4></th>
                    <th className='px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider'><h4>State</h4></th>
                    <th className='px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider'><h4>Pin-Code</h4></th>
                    <th className='px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider'><h4>Time</h4></th>
              </tr>
            </thead>
            <tbody className='bg-white'>
            {victim.map((key)=>{
              return(<tr key={key.email}>
                <td className="px-6 py-4 text-center whitespace-nowrap text-gray-500">{key.name}</td>
                <td className="px-6 py-4 text-center whitespace-nowrap text-gray-500">{key.email}</td>
                <td className="px-6 py-4 text-center whitespace-nowrap text-gray-500">{key.phone}</td>
                <td className="px-6 py-4 text-center whitespace-nowrap text-gray-500"> {key.location}</td>
                <td className="px-6 py-4 text-center whitespace-nowrap text-gray-500">{key.district}</td>
                <td className="px-6 py-4 text-center whitespace-nowrap text-gray-500">{key.state}</td>
                <td className="px-6 py-4 text-center whitespace-nowrap text-gray-500">{key.pincode}</td>
                <td className="px-6 py-4 text-center whitespace-nowrap text-gray-500"> {key.req_time}</td>
              </tr>)
              })}
            </tbody>
          </table>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default MedicineAdmin
