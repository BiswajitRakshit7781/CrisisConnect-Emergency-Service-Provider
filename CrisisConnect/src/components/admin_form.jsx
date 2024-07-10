import React,{ useContext } from 'react'
import { useForm } from 'react-hook-form'
import './admin_form.css'
import CoordContext from '../context/coordinates/coordsContext'

const Admin_form = () => {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState:{errors,isSubmitting}
  } =useForm()
    const findPlaces=async (data)=>{
      try{
        console.log('testing')
      let obj={lat:data.latitude,lng:data.longitude,type:"fire_station"}
        let res=await fetch("http://localhost:5000/find_keyplaces",{method:"POST",headers:{
          'Content-Type': 'application/json'
      },body:JSON.stringify(obj)})
      let r=await res.json()
      console.log(r)
      let lat=r.lat
      let lon=r.lon
      let nav=document.getElementById('mapsr')
      nav.href=`https://www.google.com/maps/@${lat},${lon},15z?entry=ttu`
      nav.innerHTML='click here to open precise location in map'
      document.querySelector(".completeaddress").innerHTML=r.display_name
      document.querySelector(".name").innerHTML=r.name
    }
    catch(error){
      console.log(error)
    }
    }
    const coordinate=useContext(CoordContext)

  return (
    <>
    <form action="" className='Searching' onSubmit={handleSubmit(findPlaces)}>
        <input type="text" {...register("latitude",{required:true})} placeholder={"latitude"} value={coordinate.lat}/>
        <label htmlFor="longitude">Longitude</label>
        <input type="text" {...register("longitude",{required:true})} placeholder={'longitude'} value={coordinate.lng}/>
        <input type="submit" disabled={isSubmitting} value={"submit"}/>
    </form>
    <a className='no-underline' href='#' id='mapsr' target={'_blank'}>submit to get link</a>
    <div className="completeaddress"></div>
    <div className="name"></div>
    </>
  )
}

export default Admin_form
