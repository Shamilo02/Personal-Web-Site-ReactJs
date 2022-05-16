import React from 'react'
import {BrowserRouter as  Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Home from './components/pages/Home'
import Project from './components/pages/Project'
import Sidebar from './components/Sidebar'
import Resume from './components/pages/Resume'
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