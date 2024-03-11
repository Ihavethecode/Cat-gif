import React, { useState } from 'react'
import Header from './Header'
import Details from './Details'
import Basket from './Basket'
import Main from './Main'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const App = () => {
  const [details, setDetails] = useState([])
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route element={<Main setDetails = {setDetails}/>}   path="/"/>
    <Route element={<Details details = {details}/>} path="/details"/>
    <Route element={<Basket/>} path="/basket"/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
