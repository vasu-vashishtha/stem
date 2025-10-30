import React from 'react'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import { Outlet } from 'react-router-dom'


const Layout = () => {
  return (
    <>
    <div className='flex flex-col min-h-screen'>
      <Navbar />

      <div className="flex-1 pt-16">
        <Outlet />
      </div>

      <Footer />
    </div>
    </>
  )
}

export default Layout;