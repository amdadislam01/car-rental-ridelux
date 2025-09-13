import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import React from 'react'
import Navbar from './components/Navbar'
import Index from './pages/Index'
import CarDetails from './pages/CarDetails'
import Footer from './components/Footer'
import Cars from './pages/Cars'

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Index />}/>
          <Route path='/Cars' element={<Cars />}/>
          <Route path='/car/:id' element={<CarDetails />}/>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
