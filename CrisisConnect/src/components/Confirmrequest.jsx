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
  }
  return (
    <div className='confirm'>
        <div className="city">
      <h3>city :</h3>
      <span>{title.city}</span>
      </div>
      <div className="city">
      <h3>district :</h3>
      <span>{title.district}</span>
      </div>
      <div className="state">
      <h3>state :</h3>
      <span>{title.state}</span>
      </div>
      <div className="pin">
      <h3>pincode :</h3>
      <span>{title.pincode}</span>
      </div>
      <div className="address">
      <h3>address :</h3>
      <span>{title.address}</span>
      </div>
      <div className="chioce">
        <button onClick={submitRequest}>confirm</button>
        <button onClick={hide_page}>cancel</button>
      </div>
    </div>
  )
}

export default Confirmrequest
