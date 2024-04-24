import React from 'react'
import { NavLink } from 'react-router-dom'

const Signup = () => {
    return (
        <>
            <nav className='flex justify-between items-center bg-white fixed'>
                <div className="logo"><h1>CrisisConnect</h1></div>
                <ul className='flex space-x-4 list-none'>
                    <li>
                        <NavLink className='no-underline' to="/">Home</NavLink>
                    </li>
                    <li><NavLink className='no-underline' to='/login'>Login</NavLink></li>
                </ul>
            </nav>
        </>
    )
}

export default Signup
