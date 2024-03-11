import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <>
   <header>
      <nav className="bg-white border-purple-200 px-4 lg:px-6 py-2.5 dark:bg-purple-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex items-center">
            <h1 className='text-3xl font-bold underline'>Logo.</h1>
          </div>
          <div className="flex items-center lg:order-2 text-2xl font-bold ">
          <NavLink to="/basket" className="text-purple-500">
              Bascet
            </NavLink>
          </div>
          <div className="text-2xl font-bold hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
          <NavLink to="/details" className="mr-4 text-purple-500">
              Details
            </NavLink>
          </div>
          <div className='text-2xl font-bold'>
          <NavLink to="/" className="mr-4 text-purple-500">
              Main
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
    </>
  )
}

export default Header