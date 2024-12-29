import React from 'react'
import Header from './Header'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import { Outlet } from 'react-router-dom'
// import Main from './Main'
import Footer from './Footer'
export default function App() {
  return (
  <>
  <Header/>
 
  <Outlet/>
  <Footer/>
  </>
  
  )
}

