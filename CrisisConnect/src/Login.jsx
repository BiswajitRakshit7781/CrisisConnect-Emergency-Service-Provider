import React from 'react'
import Footer from './components/Footer'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    const home = () => {
        navigate("/login");
    };
    return (
        <>
            <nav className='flex justify-between items-center bg-white fixed'>
                <div className="logo"><h1>CrisisConnect</h1></div>
                <ul className='flex space-x-4 list-none'>
                    <li><NavLink  to="/">Back To Home</NavLink></li>
                </ul>
            </nav>
            <Footer />
        </>
    )
}

export default Login
