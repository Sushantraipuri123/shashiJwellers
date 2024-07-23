import React from 'react'
import { Outlet } from 'react-router-dom'
import Topbar from './utilities/header/Topbar'
import Footer from './utilities/footer/Footer'

function Layout() {
  return (
    <>
      <Topbar/>
      <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout