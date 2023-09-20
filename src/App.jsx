// import { useState } from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import { RotatingLines } from  'react-loader-spinner'
function App() {
  const navigation = useNavigation();
  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
      <h1 style={{fontSize:'50px', marginTop:'0px', marginBottom:'20px'}}>App Container</h1>
      <Header></Header>
      {
        navigation.state==='loading' 
      ? 
      (<RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}/>
      )
      :
      (
      <div style={{marginLeft:'50px', marginRight:'50px'}}>
        <Outlet></Outlet>
      </div>
      )
      }
      <Footer></Footer>
    </div>
  )
}

export default App
