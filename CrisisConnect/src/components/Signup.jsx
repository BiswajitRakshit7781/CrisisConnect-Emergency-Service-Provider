import React from 'react'
import { useForm } from "react-hook-form"
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import "./Signup.css"
import { useRef } from 'react'

const Signup = () => {
    const navigate=useNavigate()
    const signin=useRef(false)
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm()

    const delay = (d) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve()
            }, d * 1000);
        })
    }
    function contains_upper(str){
        for(let i=0;i<str.length;i++){
            if(str[i]>='A' && str[i]<='Z'){
                return true
            }
        }
        return false
    }
    const check_strong_pass=(password)=>{
        let val=contains_upper(password)
        console.log(val)
    }
const onSubmit = async (data) => {
    await delay(2)
    check_strong_pass(data.password)
    let r=await fetch("http://localhost:5000/createAccount",{method:"POST",headers: {
        'Content-Type': 'application/json'
    },body:JSON.stringify(data)})
    let res=await r.json()
    if(res.email_unique==false){
        setError("inv_email",{message:"E-mail is already registered"})
    }
    signin.current=true
};

    return (
        <>
        {/* {signin.current && (navigate("/Login"))} */}
            <nav className='flex justify-between items-center bg-transparent fixed'>
                <div className="logo"><h1 className="logo">CrisisConnect</h1></div>
                <ul className='flex space-x-4 list-none'>
                    <li>
                        <NavLink className='no-underline' to="/">Home</NavLink>
                    </li>
                    <li><NavLink className='no-underline' to='/login'>Login</NavLink></li>
                </ul>
            </nav>
            <main className="sup flex justify-center items-center">
                <div className="signupform flex flex-col items-center gap-12">
                    <h1>New Registration</h1>
                    {isSubmitting && <div>Loading....</div>}

                    <form className="sgform grid grid-cols-3 gap-5" onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" {...register("name", { required: true })} placeholder="Enter Your Fullname" />
                        {errors.name && alert('Enter your name')}
                        

                        <select {...register("sex", { required: true })}>
                            <option value="">Select Your Sex</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="others">Others</option>
                        </select>
                        {errors.sex && alert('Select your sex')}

                        <input type="number" {...register("height", { required: true, maxLength: 3 })} placeholder="Enter Your Height In CM" />
                        {errors.height && alert('Enter a valid height')}

                        <input type="number" {...register("weight", { required: true, maxLength: 3})} placeholder="Enter Your Weight In KG" />
                        {errors.weight && alert('Enter a valid weight')}


                        <select {...register("bloodgroup", { required: true })}>
                            <option value="">Select Your Blood Group</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>O+
                        </select>
                        {errors.bloodgroup && alert('Please select your blood group')}
                        
                        <input type="date" {...register("dob", { required: true })} placeholder="Enter Your Date Of Birth" />
                        {errors.dob && alert('Date of Birth is Required!')}

                        <input type="email" {...register("email", { required: true })} placeholder="Enter Your Email Address" />
                        {errors.email && alert('Enter a valid email id')}

                        <input type="number" {...register("phone", { required: true, minLength:10 ,maxLength: 10 })} placeholder="Enter Your Phone Number" />
                        {errors.phone && alert('Enter a valid 10 digit mobile number')}


                        <input type="number" {...register("aadhar", { required: true,minLength:12, maxLength:12 })} placeholder="Enter Your Aadhar Card Number" />
                        {errors.aadhar && alert('Enter a valid 12 digit aadhar number')}

                        <input type="text" {...register("address", { required: true})} placeholder="Enter Your Home Address" />
                        {errors.address && alert('Address in required')}

                        <input type="password" {...register("password", { required: {value : true , message : 'Password is required'}, minLength: { value: 4, message: "Minimum 4 Character required" }, maxLength: { value: 8, message: "Maximum 8 Character required" } })} placeholder="Enter Password" />
                        {errors.password && alert(errors.password.message)}
                        

                        <input type="password" {...register("confirmpassword", { required: {value : true , message : 'Re-enter password'}, minLength: { value: 4, message: "Minimum 4 Character required" }, maxLength: { value: 8, message: "Minimum 8 Character required" } })} placeholder="Enter Password" />
                        {errors.confirmpassword && alert(errors.confirmpassword.message)}
                        

                        <input className="col-start-2" disabled={isSubmitting} type="submit" value='Register' />

                    </form>
                    {errors.inv_email && <div className='error-red'>{errors.inv_email.message}</div>}
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Signup
