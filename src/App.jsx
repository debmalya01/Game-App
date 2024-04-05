import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home.jsx'
import Nav from './Components/Nav.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import GameDetailsPage from './Pages/GameDetailsPage.jsx'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='Game-App/' element={<><Nav /><Home /></>}></Route>
          <Route path='/Game-App/games/:id' element={<GameDetailsPage />} ></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
