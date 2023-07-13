import React from "react"
import { Routes, Route } from "react-router-dom"
import LandingPage from "./components/LandingPage"
import Products from "./components/Products"

function App() {
 return (
  <>
    <Routes>
     <Route path='/' element={<LandingPage />} />
     <Route path='/products' element={<Products />} />
    </Routes>
  </>
 )
}

export default App
