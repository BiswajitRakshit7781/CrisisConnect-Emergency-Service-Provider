import React from 'react'
import { useForm } from "react-hook-form"
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import "./Login.css"

const Login = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
    } = useForm()

    const delay = (d) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve()
            }, d * 1000);
        })
    }
    const onSubmit = async (data) => {
        await delay(2)
        console.log(data)
    }
    return (
        <>
            <nav className='flex justify-between items-center bg-transparent fixed'>
                <div className="logo"><h1>CrisisConnect</h1></div>
                <ul className='flex space-x-4 list-none'>
                    <li>
                        <NavLink className='no-underline' to="/">Home</NavLink>
                    </li>
                        <li><NavLink className='no-underline' to='/signup'>Sign Up</NavLink></li>
                </ul>
            </nav>
            <main className='lgbg flex justify-center items-center'>
                <div className="loginform flex flex-col items-center gap-12">
                    <h1>Login</h1>
                    {isSubmitting && <div>Loading....</div>}
                    <form className='lgform flex flex-col gap-5 items-center justify-center' onSubmit={handleSubmit(onSubmit)}>

                        <input type="email" {...register("email", { required: { value: true, message: "This field is required" } })} placeholder="Enter Your Email Address" />
                        {errors.email && <div className="text-red-950">{errors.email.message}</div>}
                        
                        <input type="password" {...register("password", { required: { value: true, message: "This field is required" }, minLength: { value: 4, message: "Minimum 4 Character required" }, maxLength: { value: 8, message: "Minimum 8 Character required" } })} placeholder="Enter Password" />
                        {errors.password && <div className="text-red-950">{errors.password.message}</div>}
                        
                        <NavLink className='no-underline' to='#'>Forgot Password ?</NavLink>
                        
                        <input disabled={isSubmitting} type="submit" value='Log In' />
                        {/* {errors.myform && <div className="text-red-950">{errors.myform.message}</div>} */}
                        
                        <NavLink className='no-underline' to='#'>Login With OTP</NavLink>
                        <NavLink className='no-underline' to='/signup'>Don't Have An Account? Sign Up</NavLink>
                    </form>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Login
