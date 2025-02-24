import './App.css'

import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import Placeholder from './Pages/Placeorder/Placeorder';

function App() {
  return (
    <div className='w-[80%] app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/order' element={<Placeholder />}/>
      </Routes>
    </div>

  )
}

export default App;

