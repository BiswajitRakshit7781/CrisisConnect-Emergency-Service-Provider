import React from 'react'
import { useForm } from "react-hook-form"
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import "./Signup.css"
import axios from 'axios';

const Signup = () => {
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
    // const onSubmit = async (data) => {
    //     await delay(2)
    //     console.log(data)
    // }

const onSubmit = async (data) => {
  try {
    const response = await axios.post('/api/signup', data);
    console.log(response.data);
  } catch (error) {
    console.error('Error occurred while submitting form:', error);
  }
};

    return (
        <>
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

                    {/* {errors.height && <div className="text-red-950">{errors.height.message}</div>} */}
                    {/* {errors.weight && <div className="text-red-950">{errors.weight.message}</div>} */}
                    {/* {errors.phone && <div className="text-red-950">{errors.phone.message}</div>} */}
                    {/* {errors.aadhar && <div className="text-red-950">{errors.aadhar.message}</div>} */}
                    {/* {errors.password && <div className="text-red-950">{errors.password.message}</div>} */}
                    {/* {errors.confirmpassword && <div className="text-red-950">{errors.confirmpassword.message}</div>} */}
                    
                    <form className="sgform grid grid-cols-3 gap-5" onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" {...register("name", { required: true })} placeholder="Enter Your Fullname" />
                        

                        <select {...register("sex", { required: true })}>
                            <option value="">Select Your Sex</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            {/* <option value="others">Others</option> */}
                        </select>

                        <input type="number" {...register("height", { required: true, maxLength: { value: 3, message: "Enter a valid height" } })} placeholder="Enter Your Height In CM" />

                        <input type="number" {...register("weight", { required: true, maxLength: { value: 3, message: "Enter a valid weight" }})} placeholder="Enter Your Weight In KG" />


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
                        
                        <input type="date" {...register("dob", { required: true })} placeholder="Enter Your Date Of Birth" />

                        <input type="email" {...register("email", { required: true })} placeholder="Enter Your Email Address" />

                        <input type="number" {...register("phone", { required: true ,maxLength: { value: 10, message: "Enter a valid Phone number" } })} placeholder="Enter Your Phone Number" />


                        <input type="number" {...register("aadhar", { required: true,maxLength: { value: 12, message: "Enter a valid Aadhar Number" } })} placeholder="Enter Your Aadhar Card Number" />

                        <input type="text" {...register("address", { required: true})} placeholder="Enter Your Home Address" />

                        <input type="password" {...register("password", { required: true, minLength: { value: 4, message: "Minimum 4 Character required" }, maxLength: { value: 8, message: "Maximum 8 Character required" } })} placeholder="Enter Password" />
                        

                        <input type="password" {...register("confirmpassword", { required: true, minLength: { value: 4, message: "Minimum 4 Character required" }, maxLength: { value: 8, message: "Minimum 8 Character required" } })} placeholder="Enter Password" />
                        

                        <input className="col-start-2" disabled={isSubmitting} type="submit" value='Register' />

                    </form>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Signup
