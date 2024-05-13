import React from 'react'
import Footer from './Footer'
import { NavLink } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import "./Login.css"

const ForgotPassword = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

    return (
        <>
            <nav className='flex justify-between items-center fixed'>
                <div className="logo"><h1 className="logo">CrisisConnect</h1></div>
                <ul className='flex space-x-4 list-none'>
                    <li>
                        <NavLink className='no-underline' to="/">Home</NavLink>
                    </li>
                    <li><NavLink className='no-underline' to='/login'>Log In</NavLink></li>
                </ul>
            </nav>

            <main className='lgbg flex flex-col justify-center items-center'>
                <div className="loginform flex flex-col items-center gap-9 ">
                    <h1>Forgot Password</h1>
                    <form className='lgform flex flex-col gap-5 items-center justify-center'>
                        <input type="email" {...register("email", { required: true })} placeholder='Enter Your Email Address'/>

                        <button className='otp'>Send OTP</button>

                        <input type="number" {...register("otp", { required: { value : true, message: "OTP is required !"} ,minLength: { value: 6, message: "Minimum 6 Character required" } })} placeholder='Enter Your OTP'/>

                        <button className="verify">Verify</button>

                        <input type="password" placeholder='Enter New Password' />

                        <input type="submit" value="Save" />
                    </form>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default ForgotPassword
