import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import React from 'react'
import Navbar from './components/Navbar'
import Index from './pages/Index'
import CarDetails from './pages/CarDetails'
import Footer from './components/Footer'
import Cars from './pages/Cars'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Index />}/>
          <Route path='/Cars' element={<Cars />}/>
          <Route path='/car/:id' element={<CarDetails />}/>
          <Route path='/About' element={<About />}/>
          <Route path='/Blog' element={<Blog />}/>
          <Route path='/Contact' element={<Contact />}/>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
