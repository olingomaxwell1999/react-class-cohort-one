import React from 'react'
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <Navbar/>
      <Line/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
