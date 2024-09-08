import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import ViewProduct from './components/ViewProduct'
import Adddata from './components/Adddata'
import { ToastContainer } from 'react-toastify'


const App = () => {

  return (
    <div className='bg-gray-800   text-white'>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path='/' element={<ViewProduct />} />
        <Route path='/add' element={<Adddata />} />
      </Routes>
    </div>
  )
}

export default App
