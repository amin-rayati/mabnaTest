import React from 'react'
import './App.css'
import Profile from './Page/Profile'
import OrderProduct from './Page/OrderProduct'
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/profile' element={<Profile />} />
        <Route path='/OrderProduct' element={<OrderProduct />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
