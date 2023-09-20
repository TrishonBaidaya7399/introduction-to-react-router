// import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'

function App() {

  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
      <h1 style={{fontSize:'50px', marginTop:'0px', marginBottom:'20px'}}>App Container</h1>
      <Header></Header>
      {/* Je part ta change hove, sudhu okhgane amra outlet ta dibo */}
      <div style={{marginLeft:'50px', marginRight:'50px'}}>
      <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
