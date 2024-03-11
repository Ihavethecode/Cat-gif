import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
const Main = ({setDetails}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      axios('https://api.thecatapi.com/v1/images/search?limit=10')
        .then(({data}) => setProducts(data)
        )
    }, []);

  return (
    <>
<h1 className="text-2xl font-bold mb-4">Главная страница</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map((el) => (<Card product = {el} setDetails = {setDetails}/>
          
        ))}
      </div>
    </>
  )
}

export default Main