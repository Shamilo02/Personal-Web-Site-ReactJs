import React from 'react'
import {BrowserRouter as  Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import AnimatedRoutes from './components/AnimatedRoutes'



const App = () => {
  return (
    
    <Router>

      <Navbar/>

      <div className="wrapper">
     <Sidebar/>
      <div className="pages">
     <AnimatedRoutes/>
      </div>
      </div>

    </Router>
    
  )
}

export default App