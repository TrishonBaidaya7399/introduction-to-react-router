// import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'

function App() {

  return (
    <>
      <h1>App Container</h1>
      <Header></Header>
      {/* Je part ta change hove, sudhu okhgane amra outlet ta dibo */}
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
