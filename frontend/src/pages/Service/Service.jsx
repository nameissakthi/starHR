import React, { useContext } from 'react'
import './Service.css'
import { CompanyContext } from '../../context/companycontext'
import { Link } from 'react-router-dom'

const Service = () => {

    const { products, works } = useContext(CompanyContext)

  return (
    <div className='service'>
        
        <div className='service-products'>
            <h2 className='title'>Products</h2>
            <div className='container'>
                {
                    products.map((item, index) => {
                        return (
                            <div key={index}>
                                <img src={item.image} alt="Image" />
                                <h4>{item.title}</h4>
                                <Link to={`/service/${item._id}`}>View</Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>

        <hr />

        <div className='service-works'>
            <h2 className='title'>Works</h2>
            <div className='container'>
                {
                    works.map((item, index) => {
                        return (
                            <div key={index}>
                                <img src={item.image} alt="Image" />
                                <h4>{item.title}</h4>
                                <Link to={`/service/${item._id}`}>View</Link>
                            </div> 
                        )
                    })
                }
            </div>
        </div>


    </div>
  )
}

export default Service