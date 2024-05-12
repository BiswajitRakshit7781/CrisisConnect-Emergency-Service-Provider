import React from 'react'
import './Dashboard.css'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'

const HospitalAdmin = () => {
  const navigate = useNavigate();

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
                <th className='px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider'>User Name</th>
                <th className='px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider'>Email ID</th>
                <th className='px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider'>Phone No</th>
                <th className='px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider'>Location</th>
                <th className='px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider'>District</th>
                <th className='px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider'>State</th>
                <th className='px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider'>Time</th>
              </tr>
            </thead>
            <tbody className='bg-white'>
              <tr>
                <td className="px-6 py-4 text-center whitespace-nowrap">Ram das</td>
                <td className="px-6 py-4 text-center whitespace-nowrap">Ram@gmail.com</td>
                <td className="px-6 py-4 text-center whitespace-nowrap">9898989898</td>
                <td className="px-6 py-4 text-center whitespace-nowrap">New Market</td>
                <td className="px-6 py-4 text-center whitespace-nowrap">Kolkata</td>
                <td className="px-6 py-4 text-center whitespace-nowrap">West Bengal</td>
                <td className="px-6 py-4 text-center whitespace-nowrap">5.30 PM</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default HospitalAdmin
