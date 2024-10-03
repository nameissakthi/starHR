import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createContext } from 'react'
// import { products, works } from '../assets/products.js'
import axios from 'axios'

export const CompanyContext = createContext()

const CompanyContextProvider = (props) => { 
    const navigate = useNavigate()
    const [products, setProducts] = useState([])
    const [works, setWorks] = useState([])

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const getService = async () => {
      try {
        const service = await axios.get(backendUrl + "/api/service/list")
        setProducts(service.data.service.filter(item => item.type==="products"))
        setWorks(service.data.service.filter(item => item.type==="works"))
  
      } catch (error) {
        console.log(error.message)
      }
    }

    useEffect(()=>{
      getService()
    },[])
    
    const value = {
        navigate,
        products,
        works,
        backendUrl
    }


  return (
    <CompanyContext.Provider value={value}>
        {props.children}
    </CompanyContext.Provider>
  )
}

export default CompanyContextProvider