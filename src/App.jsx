import React, { useState } from 'react'
import { Routes, Route, Outlet, Link } from 'react-router-dom'
import Art from './Art.jsx'
import Home from './Home.jsx'
import './App.css'

function App() {

  return (
    <>
      <div className="app">
        <div className="sidebar">
          
          <nav className="sidebar-nav">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/art">Art</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="main">
            <Routes>
              <Route index element={<Home />} />
              <Route path="/art" element={<Art />} />
            </Routes>
        </div>
      </div>
    </>
  )
}

export default App
