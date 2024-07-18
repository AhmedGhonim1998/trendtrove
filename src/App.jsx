import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './home/Home'
import NavItems from './components/NavItems'
import Footer from './components/Footer'
import Shop from './assets/shop/Shop'
import Bolg from './blog/Bolg'
import SingleProduct from './assets/shop/SingleProduct'
import CartPage from './assets/shop/CartPage'
import SingleBlog from './blog/SingleBlog'
import About from './about/About'
import Contact from './contactPage/Contact'
import PrivateRoute from './privateRoute/PrivateRoute'
import Login from './components/Login'
function App() {

const location = useLocation();
const shouldRenderNavAndFooter = location.pathname !== '/login';

  return (
    <>
      {shouldRenderNavAndFooter && <NavItems />}
      <div className="min-vh-100">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/blog' element={<Bolg />} />
          <Route path='/shop/:id' element={<SingleProduct />} />
          <Route path='/cart-page' element={<PrivateRoute><CartPage/></PrivateRoute>} />
          <Route path='/blog/:id' element={<SingleBlog />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </div>
      {shouldRenderNavAndFooter && <Footer />}
    </>
  )
}

export default App
