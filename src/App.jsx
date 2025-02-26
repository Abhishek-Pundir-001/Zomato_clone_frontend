import './App.css'

import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import Placeholder from './Pages/Placeorder/Placeorder';
import Footer from './Components/Footer/Footer';
import LoginPopUp from './Components/LoginPopUp/LoginPopUp';

function App() {

  const [currState,setCurrState] = useState(false)

  return (
    <>
     { currState ? <LoginPopUp currState={currState} setCurrState={setCurrState}/> : <></> }
      <div className='w-[80%] app'>
    
        <Navbar setCurrState={setCurrState}/>
       
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<Placeholder />} />
        </Routes>
      </div>
      <Footer />
    </>


  )
}

export default App;

