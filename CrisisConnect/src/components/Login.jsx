import React from 'react'
import { useForm } from "react-hook-form"
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import "./Login.css"
import { useRef,useContext } from 'react'

const Login = () => {
    const login=useRef(false)
    const navigate=useNavigate()
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
    const onSubmit = async (data) => {
        let res= await fetch("http://localhost:5000/login",{method:"POST",headers: {
            'Content-Type': 'application/json'},body:JSON.stringify(data)})
        let r=await res.json()
        if(r.email==true){
            if(r.password==true){
                alert("login sucsesfull")
                login.current=true
            }
            else
            alert("invalid password") 
        }
        else
        alert("invalid email")
    }
    return (
        <>
        {
            login.current && navigate('/Dashboard')
        }
            <nav className='flex justify-between items-center bg-transparent fixed'>
                <div className="logo"><h1 className="logo">CrisisConnect</h1></div>
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

                        <input type="email" {...register("email", { required: true })} placeholder="Enter Your Email Address" />
                        
                        <input type="password" {...register("password", { required: true, minLength: { value: 4, message: "Minimum 4 Character required" }, maxLength: { value: 8, message: "Minimum 8 Character required" } })} placeholder="Enter Password" />
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
