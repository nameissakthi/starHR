import React from 'react'
import './Footer.css'
import assets from '../../assets/assets.js'
import { FaFacebook, FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='top'>
            <div className='logo'>
                <img src={assets.logo} alt="logo" />
            </div>
            <div className='social'>
                <div>
                    <a href={assets.facebook}>
                        <FaFacebook/>
                    </a>
                    <a href={assets.instagram}>
                        <FaInstagram/>
                    </a>
                    <a href={assets.whatsapp}>
                        <FaWhatsapp/>
                    </a>
                    <a href={assets.linkedin}>
                        <FaLinkedin/>
                    </a>
                </div>
                <h2>Connect With Us on</h2>
            </div>
            <div className='links'>
                <h2>Useful Links</h2>
                <ul>
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/Service'>Service</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contactus'>Contact Us</NavLink>
                    </li>
                </ul>
            </div>
        </div>
        <div className='bottom'>
            <p>Copyright &copy 2024 starhrconsultancys.com</p>
        </div>
    </div>
  )
}

export default Footer