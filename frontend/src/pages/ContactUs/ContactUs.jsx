import React from 'react'
import './ContactUs.css'
import { FaPhone, FaEnvelope } from 'react-icons/fa6'
import assets from '../../assets/assets'

const ContactUs = () => {
  return (
    <div className='contact'>
		<h1>Contact Us</h1>
		<div>
			<form>
				<input type="text" name="name" placeholder='Name'  />
				<input type="text" name="subject" placeholder='Subject' />
				<textarea name="message" cols="30" rows="10" placeholder='Message'></textarea>
				<button type='submit'>Send</button>
			</form>
			<div>
				<a href={`tel:+91 ${assets.phone}`}>
					<FaPhone/> {assets.phone}
				</a>
				<a href={`mailto:${assets.email}`}>
					<FaEnvelope/> {assets.email}
				</a>
			</div>
		</div>
    </div>
  )
}

export default ContactUs