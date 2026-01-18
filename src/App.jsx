import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import AlbumPage from './pages/AlbumPage.jsx'


function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/album/:id" element={<AlbumPage/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
