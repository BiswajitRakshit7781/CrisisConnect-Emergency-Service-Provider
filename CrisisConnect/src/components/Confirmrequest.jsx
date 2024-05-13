import React from 'react'

const Confirmrequest = (props) => {
  return (
    <div className='confirm'>
        <div className="city">
      <h3>city :</h3>
      <span>props.city</span>
      </div>
      <div className="state">
      <h3>state :</h3>
      <span>props.state</span>
      </div>
      <div className="pin">
      <h3>pincode :</h3>
      <span>props.pincode</span>
      </div>
      <div className="address">
      <h3>address :</h3>
      <span>props.address</span>
      </div>
      <div className="chioce">
        <button>confirm</button>
        <button>cancel</button>
      </div>
    </div>
  )
}

export default Confirmrequest
