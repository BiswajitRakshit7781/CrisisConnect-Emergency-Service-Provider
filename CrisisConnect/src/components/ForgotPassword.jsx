import React, { useState } from 'react'
import Footer from './Footer'
import { NavLink } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import "./Login.css"

const ForgotPassword = () => {
    const {
        register,
        handleSubmit,
        setError,
        clearErrors,
        formState: { errors, isSubmitting },
    } = useForm()

    const [isVisible, setIsVisible] = useState(true);

    const handleHideAlert = () => {
        setIsVisible(false);
        clearErrors();
    };

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

                <div id='alert' className="alert flex w-full flex-col items-center">
                    {errors.email && isVisible && (
                        <div>
                            <p>Email ID is required !</p>
                            <button onClick={handleHideAlert} className='closebtn'>X</button>
                        </div>
                    )}
                    {errors.otp && isVisible && (
                        <div>
                            <p>{errors.otp.message}</p>
                            <button onClick={handleHideAlert} className='closebtn'>X</button>
                        </div>
                    )}
                    {errors.password && isVisible && (
                        <div>
                            <p>{errors.password.message}</p>
                            <button onClick={handleHideAlert} className='closebtn'>X</button>
                        </div>
                    )}
                </div>

                <div className="loginform flex flex-col items-center gap-9 ">
                    <h1>Forgot Password</h1>
                    <form className='lgform flex flex-col gap-5 items-center justify-center'>
                        <input type="email" {...register("email", { required: true })} placeholder='Enter Your Email Address' />

                        <button className='otp'>Send OTP</button>

                        <input type="number" {...register("otp", { required: { value: true, message: "OTP is required !" }, minLength: { value: 6, message: "Minimum 6 Character required" } })} placeholder='Enter Your OTP' />

                        <button className="verify">Verify</button>

                        <input type="password" {...register("password", { required: { value: true, message: "Password is required !" }, minLength: { value: 8, message: "Minimum 8 Character required" } })} placeholder='Set New Password' />

                        <input type="submit" value="Save" />
                    </form>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default ForgotPassword
