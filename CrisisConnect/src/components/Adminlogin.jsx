import React from 'react'
import { useForm } from "react-hook-form"
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import "./Login.css"

const Adminlogin = () => {
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
                <div className="logo"><h1 className="logo">CrisisConnect</h1></div>
                <div className="back">
                    <NavLink className='no-underline' to="/">Back to Home</NavLink>
                </div>
            </nav>
            <main className='lgbg flex justify-center items-center'>
                <div className="loginform flex flex-col items-center gap-12">
                    <h1>Admin Login</h1>
                    {isSubmitting && <div>Loading....</div>}
                    <form className='lgform flex flex-col gap-5 items-center justify-center' onSubmit={handleSubmit(onSubmit)}>
                        <input type="email" {...register("email", { required: true })} placeholder="Enter Your Email Address" />

                        <input type="password" {...register("password", { required: { value: true, message: "This field is required" }, minLength: { value: 4, message: "Minimum 4 Character required" }, maxLength: { value: 8, message: "Minimum 8 Character required" } })} placeholder="Enter Password" />
                        {errors.password && <div className="text-red-950">{errors.password.message}</div>}

                        <NavLink className='no-underline' to='#'>Forgot Password ?</NavLink>
                        <input disabled={isSubmitting} type="submit" value='Log In' />
                        {/* {errors.myform && <div className="text-red-950">{errors.myform.message}</div>} */}
                    </form>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Adminlogin
