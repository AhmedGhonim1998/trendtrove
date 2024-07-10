import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './home/Home'
import NavItems from './components/NavItems'
import Footer from './components/Footer'
import Shop from './assets/shop/Shop'
import Bolg from './blog/Bolg'
import SingleProduct from './assets/shop/SingleProduct'
import CartPage from './assets/shop/CartPage'
function App() {


  return (
    <>
      <NavItems />
      <div className="min-vh-100">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/blog' element={<Bolg />} />
          <Route path='/shop/:id' element={<SingleProduct/>}/>
          <Route path='/cart-page' element={<CartPage/>}/>
          <Route path='/blog/:id' element={<Bolg />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
