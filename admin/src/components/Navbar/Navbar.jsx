import React from 'react'
import './Navbar.css'
import assets from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo'>
            <img src={assets.logo_star_hr} alt="logo" />
            <h1>STAR HR CONSULTANCYS <br /><span>ADMIN PAGE</span></h1>
        </div>
        <div className='menu'>
          <NavLink to="/">List Service</NavLink>
          <NavLink to="/addservice">Add Service</NavLink>
        </div>
    </div>
  )
}

export default Navbar