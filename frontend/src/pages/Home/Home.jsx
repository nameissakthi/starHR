import React, { useContext, useEffect, useState } from 'react'
import './Home.css'
import { CompanyContext } from '../../context/companycontext'
import assets from '../../assets/assets.js'

const Home = () => {
  
  const [line1, setLine1] = useState("")
  const [line2, setLine2] = useState("")

  const thirukkural = async () => {
    let value = Math.floor(Math.random()*1330)
    let Kural = ""

    try {
      
      let response = await fetch(`https://getthirukkural.appspot.com/api/3.0/kural/${value}?appid=18c2aukokxmoz`)
      let data = response.json()
      data.then((data)=>{
        setLine1(data.line1) 
        setLine2(data.line2)
        return 0;
      })
      .catch((error)=>console.log(error))

    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    thirukkural()
  },[])

  const { navigate } = useContext(CompanyContext)

  return (
    <div className='home'>
      {/* Banner Component */}
      <div className='banner'>
        <img src={assets.home_background} alt="Background" />
        <div className='img-text'>
          <h1><i>Star HR Consultancys</i></h1>
          <button onClick={()=>navigate('/service')}>Explore About Our Services</button>
        </div>
      </div>

      {/* About Component */}
      <div className='about'>
        <h2>Who we are</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illo facilis doloribus tempora corporis nesciunt perferendis maxime aliquam, earum expedita officiis vitae id quaerat, laboriosam ut dicta, magni quis similique minus laudantium! Ea adipisci voluptates nulla asperiores, eveniet, ipsa repellendus officiis ipsam saepe dicta accusamus labore similique, maxime nostrum? Ducimus modi obcaecati debitis quis laudantium est cumque aliquam, iste facilis molestiae! Dolorum veritatis maxime nisi temporibus aperiam distinctio magni necessitatibus consectetur odit ratione! Itaque numquam veritatis eum aspernatur officiis aperiam, ipsa doloremque ab molestias hic eaque reprehenderit repellendus architecto possimus laudantium vel natus at nostrum obcaecati maiores quam perspiciatis impedit.</p>
      </div>

    {/* Services Component */}
      <div className='services'>
        <hr />
        <h1>Services</h1>
        <div>
          <div className='service'>
            <h3>Manpower Exporting</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, accusamus eius impedit eligendi quam consectetur ducimus, quo ratione soluta iure voluptas? Porro, assumenda ipsa alias ut deleniti debitis rerum inventore.</p>
          </div>
          <div className='service'>
            <h3>Product Dealing</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, quam molestias sit amet suscipit ut aspernatur modi iusto cupiditate mollitia, ab delectus rem necessitatibus fugiat officia at deleniti nostrum ducimus?</p>
          </div>
        </div>
      </div>

      <div className='slogan'>
          <p>{line1}</p>
          <p>{line2}</p>
      </div>

      {/* Contact Component */}
      <div className='contact'>
        <h1>Write a Mail, To Contact Us</h1>
        <a href={`mailto:${assets.email}`}>Contact Us!</a>
      </div>
    </div>
  )
}

export default Home