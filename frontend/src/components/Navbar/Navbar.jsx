import React from 'react'
import './Navbar.css'
import assets from '../../assets/assets'
import { NavLink } from 'react-router-dom'
import hamburger_menu from '../../assets/hamburger-menu.svg'
import close from '../../assets/close.svg'


const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo'>
            <img src={assets.logo_star_hr} alt="logo" />
            <h1>STAR HR CONSULTANCYS</h1>
        </div>
        <div className='menu'>
            <ul>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/service'>Service</NavLink>
                </li>
                <li>
                    <NavLink to='/contactus'>Contact Us</NavLink>
                </li>
            </ul>
        </div>
        <div className='sidebar'>
            <img src={hamburger_menu} alt="hamburger-menu" />
            <img className='sidebar-close' src={close} alt="close" />
        </div>
    </div>
  )
}

export default Navbar