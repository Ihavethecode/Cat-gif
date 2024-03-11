import React from 'react'
import { NavLink } from 'react-router-dom'
const Card = ({setDetails,product}) => {
  return (
    <>
<div onClick={() => setDetails(product)} className="bg-white p-4 shadow-md rounded-lg">
             <p className="text-gray-700">{product.id}</p>
             <p className="text-gray-700"></p>
            <img src={product.url}/>
            <p className="text-xl font-semibold mb-2">{product.width}</p>
            <p  className="product-height" >{product.height}</p>
            
           
            
          </div>

    <NavLink to="/details" className="mr-4 text-purple-500">
              Details
              <button className='px-4 py-2 bg-blue-500 text-white rounded-md '>Buy</button> </NavLink>
    </>
  )
}

export default Card