import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import AlbumPage from './pages/AlbumPage.jsx'
import {Footer} from './components/layout/Footer.jsx'
import Header from './components/layout/Header.jsx'


function App() {

  return (
    <>
      <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/album/:id" element={<AlbumPage/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
