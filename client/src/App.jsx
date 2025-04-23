import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import Home from './pages/Home/home'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element ={<Home/>} />
        <Route path='/' elememt ={<Cart/>}/>
        <Route path ='/' element ={<PlaceOrder/>} />
      </Routes>
    </div>
  )
}

export default App