import React from 'react'
import './ListService.css'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'


const ListService = () => {

  const backendUrl = import.meta.env.VITE_BACKEND_URL
  const [service, setService] = useState([])

  const listService = async () => {
    try {
      
      const response = await axios.get(backendUrl + "/api/service/list")
      setService(response.data.service)

    } catch (error) {
      console.log(error.message)
    }
  }

  const removeService = async (id) => {
    try {
      
      const response = await axios.get(backendUrl + "/api/service/remove", { headers : {id} })
      toast(response.data.message)

    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    listService()
  }, [service])

  return (
    <div className='service'>
        
        <div className='service-products'>
            <h2 className='title'>Products</h2>
            <div className='container'>
                {
                    service.filter(item => item.type === "products").map((item, index) => {
                        return (
                            <div key={index}>
                                <div>
                                  <img src={item.image} alt="Image" />
                                  <h4>{item.title}</h4>
                                </div>
                                <button onClick={()=>removeService(item._id)}>Delete</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>

        <div className='service-works'>
            <h2 className='title'>Works</h2>
            <div className='container'>
                {
                    service.filter(item => item.type === "works").map((item, index) => {
                        return (
                            <div key={index}>
                                <div>
                                  <img src={item.image} alt="Image" />
                                  <h4>{item.title}</h4>
                                </div>
                                <button>Delete</button>
                            </div> 
                        )
                    })
                }
            </div>
        </div>


    </div>
  )
}

export default ListService