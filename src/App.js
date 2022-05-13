import React from 'react'
import {BrowserRouter as  Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Home from './components/pages/Home'
import Project from './components/pages/Project'
import Sidebar from './components/Sidebar'
import Resume from './components/pages/Resume'



const App = () => {
  return (
    
    <Router>

      <Navbar/>

      <div className="wrapper">
     <Sidebar/>
      <div className="pages">
      <Routes>
      <Route path='/' element={<Home/>} exact />
      <Route path='/about' element={<About/>}  />
      <Route path='/contact' element={<Contact/>}  />
      <Route path='/project' element={<Project/>}  />
      <Route path='/resume' element={<Resume/>}  />
      </Routes>

      </div>
      </div>

    </Router>
    
  )
}

export default App