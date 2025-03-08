import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop.jsx'; 

import Contact from "./components/Contact.jsx"
import Header from "./components/Header.jsx"
import Home from "./components/Home.jsx"
import Order from "./components/Order.jsx"
import Guide from "./components/Guide.jsx"
import Products from "./components/Products.jsx"
import About from "./components/About.jsx"
import Footer from "./components/Footer.jsx"
import ItemDetails from './components/ItemDetails.jsx';

import './App.css'
import "./style/Global.css"


function App() {
  return (
  <Router>
    <ScrollToTop />
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/order/*" element={<Order />} />
      <Route path="/products/*" element={<Products />} />
      <Route path="/guide/*" element={<Guide />} />
      <Route path="/contact/*" element={<Contact />} />
      <Route path="/about/*" element={<About />} />
      <Route path="/item/:category/:id" element={<ItemDetails />} />
    </Routes>
    <Footer />
  </Router>
  )
}

export default App
