import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Contact from "./components/Contact.jsx"
import Header from "./components/Header.jsx"
import Home from "./components/Home.jsx"
import Order from "./components/Order.jsx"
import Guide from "./components/Guide.jsx"
import Products from "./components/Products.jsx"
import About from "./components/About.jsx"
import Footer from "./components/Footer.jsx"

import { useState } from 'react'
import './App.css'
import "./style/Global.css"

function App() {
  return (
  <Router>
    <Header />
    <Routes>
      <Route path="/renzenshop" element={<Home />} />
      <Route path="/renzenshop/order/*" element={<Order />} />
      <Route path="/renzenshop/products/*" element={<Products />} />
      <Route path="/renzenshop/guide/*" element={<Guide />} />
      <Route path="/renzenshop/contact/*" element={<Contact />} />
      <Route path="/renzenshop/about/*" element={<About />} />
    </Routes>
    <Footer />
  </Router>
  )
}

export default App
