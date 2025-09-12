import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import React from 'react'
import Navbar from './components/Navbar'
import Index from './pages/Index'
import CarDetails from './pages/CarDetails'

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Index />}/>
          <Route path='/car/:id' element={<CarDetails />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
