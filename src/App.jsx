import { useState } from 'react'
import './css/App.css'
import { Router, Routes, Route } from 'react-router'
import Landing from './pages/Landing'
import Home from './pages/Home'
import About from './pages/About'
import Games from './pages/Games'
import Contact from './pages/Contact'
import Mind from './pages/Mind'
import Shop from './pages/Shop'

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Landing/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/games' element={<Games/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/mind' element={<Mind/>} />
      <Route path='/shop' element={<Shop/>} />
    </Routes>
  )

}

export default App
