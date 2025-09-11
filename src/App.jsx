import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import React from 'react'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
      </Router>
    </>
  )
}

export default App
