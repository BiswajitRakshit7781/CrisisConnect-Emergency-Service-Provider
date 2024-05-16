import React from 'react'
import "./Donation.css"

const Donation = () => {
  return (
    <>
    <div id='donation-page' className="donation">
    <h1>Donation</h1>
    <img className='donationimg' src=".\src\assets\QR.png" alt="QR Code" />
    <p>Scan the QR code to donate. Your donation will help to improve our services</p>
    <p>Thank You From CrisisConnect</p>
    </div>
    </>
  )
}

export default Donation
