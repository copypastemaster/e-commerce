import React from "react"
import { Routes, Route } from "react-router-dom"
import LandingPage from "./components/LandingPage"
import ProductPage from "./components/ProductPage"
import Cart from "./components/Cart"

function App() {
 return (
  <>
    <Routes>
     <Route path='/' element={<LandingPage />} />
     <Route path='/productpage' element={<ProductPage />} />
     <Route path='/cart' element={<Cart />}/>
    </Routes>
  </>
 )
}

export default App
