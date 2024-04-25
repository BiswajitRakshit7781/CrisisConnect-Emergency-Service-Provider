import React from 'react'
import { useForm } from "react-hook-form"
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import "./Signup.css"

const Signup = () => {
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
                    <li><NavLink className='no-underline' to='/login'>Login</NavLink></li>
                </ul>
            </nav>
            <main className="sup flex justify-center items-center">
                <div className="signupform flex flex-col items-center gap-12">
                    <h1>New Registration</h1>
                    {isSubmitting && <div>Loading....</div>}
                    <form className="grid grid-cols-2 gap-5" onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" {...register("name", { required: { value: true, message: "This field is required" } })} placeholder="Enter Your Fullname" />
                        {errors.name && <div className="text-red-950">{errors.name.message}</div>}

                        <select {...register("sex", { required: { value: true, message: "This field is required" } })}>
                            <option value="">Select Your Sex</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="others">Others</option>
                        </select>
                        {errors.sex && <div className="text-red-950">{errors.sex.message}</div>}

                        <input type="number" {...register("height", { required: { value: true, message: "This field is required" }, maxLength: { value: 3, message: "Enter a valid height" } })} placeholder="Enter Your Height In CM" />
                        {errors.height && <div className="text-red-950">{errors.height.message}</div>}

                        <input type="number" {...register("weight", { required: { value: true, message: "This field is required" }, maxLength: { value: 3, message: "Enter a valid weight" }})} placeholder="Enter Your Weight In KG" />
                        {errors.weight && <div className="text-red-950">{errors.weight.message}</div>}

                        <select {...register("bloodgroup", { required: { value: true, message: "This field is required" } })}>
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
                        {errors.bloodgroup && <div className="text-red-950">{errors.bloodgroup.message}</div>}

                        <input type="date" {...register("dob", { required: { value: true, message: "This field is required" } })} placeholder="Enter Your Date Of Birth" />
                        {errors.dob && <div className="text-red-950">{errors.dob.message}</div>}

                        <input type="email" {...register("email", { required: { value: true, message: "This field is required" } })} placeholder="Enter Your Email Address" />
                        {errors.email && <div className="text-red-950">{errors.email.message}</div>}

                        <input type="number" {...register("phone", { required: { value: true, message: "This field is required" },maxLength: { value: 10, message: "Enter a valid Phone number" } })} placeholder="Enter Your Phone Number" />
                        {errors.phone && <div className="text-red-950">{errors.phone.message}</div>}

                        <input type="number" {...register("aadhar", { required: { value: true, message: "This field is required" },maxLength: { value: 12, message: "Enter a valid Aadhar Number" } })} placeholder="Enter Your Aadhar Card Number" />
                        {errors.aadhar && <div className="text-red-950">{errors.aadhar.message}</div>}

                        <input type="url" {...register("address", { required: { value: true, message: "This field is required" }})} placeholder="Enter Your Home Address" />
                        {errors.address && <div className="text-red-950">{errors.address.message}</div>}

                        <input type="password" {...register("password", { required: { value: true, message: "This field is required" }, minLength: { value: 4, message: "Minimum 4 Character required" }, maxLength: { value: 8, message: "Maximum 8 Character required" } })} placeholder="Enter Password" />
                        {errors.password && <div className="text-red-950">{errors.password.message}</div>}

                        <input type="password" {...register("confirmpassword", { required: { value: true, message: "This field is required" }, minLength: { value: 4, message: "Minimum 4 Character required" }, maxLength: { value: 8, message: "Minimum 8 Character required" } })} placeholder="Enter Password" />
                        {errors.confirmpassword && <div className="text-red-950">{errors.confirmpassword.message}</div>}

                        <input className="" disabled={isSubmitting} type="submit" value='Register' />

                    </form>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Signup
