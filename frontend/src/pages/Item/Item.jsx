import React, { useContext, useEffect, useState } from 'react'
import './Item.css'
import { CompanyContext } from '../../context/CompanyContext.jsx'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Item = () => {

  const { backendUrl } = useContext(CompanyContext)
  const { serviceId } = useParams()
  const [service, setService] = useState({})

  const getSingle = async () => {
    try {
      console.log(serviceId)
      let response = await axios.get(backendUrl + `/api/service/single/${serviceId}`)
      setService(response.data.service)
    } catch (error) {
      console.log(error.message)
    }
  }
  console.log(service)

  useEffect(() => {
    getSingle()
  }, [])

  return (
    <div className='item'>
      <h1>{service.title}</h1>
      <img src={service.image} alt="Image" />
      <h3>Details</h3>
      <div>{service.details}</div>
      <a href="tel:+91 6382968373">Contact To place Order</a>
    </div>
  )
}

export default Item