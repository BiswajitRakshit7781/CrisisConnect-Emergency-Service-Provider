import React from 'react'

const Confirmrequest = (title) => {
  const submitRequest=async ()=>{
      let res=await fetch("http://localhost:5000/request-service",{method:"POST",headers: {
        'Content-Type': 'application/json'
    },body:JSON.stringify(title.query)})
    let r=await res.text()
    alert(r)
  }
  const hide_page=()=>{
    let c= document.querySelector(".confirm")
    title.flag(false)
    c.style.display="none"
    c.nextElementSibling.style.display="none"
  }
  return (
    <div className='confirm'>
        <div className="city">
      <h3 className='heading'>city :</h3>
      <span className='city-c'>{title.city}</span>
      </div>
      <div className="city">
      <h3  className='heading'>district :</h3>
      <span className='district'>{title.district}</span>
      </div>
      <div className="city">
      <h3 className='heading'>state :</h3>
      <span className='state'>{title.state}</span>
      </div>
      <div className="city">
      <h3 className='heading'>pincode :</h3>
      <span className='pin'>{title.pincode}</span>
      </div>
      <div className="city address">
      <h3 className='heading'>address :</h3>
      <span className='add'>{title.address}</span>
      </div>
      <div className="city buttons">
        <button onClick={submitRequest} className="confirm-b">confirm</button>
        <button onClick={hide_page} className="cancel">cancel</button>
      </div>
    </div>
  )
}

export default Confirmrequest
