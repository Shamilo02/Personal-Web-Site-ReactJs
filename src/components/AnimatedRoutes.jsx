import React from 'react'
import {Routes,Route, useLocation} from 'react-router-dom'
import { motion, transform } from 'framer-motion'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Project from './pages/Project'
import Resume from './pages/Resume'

const AnimatedRoutes = () => {
 const location =  useLocation()
  return (
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >

         <Routes location={location}>
      <Route path='/' element={<Home/>} exact />
      <Route path='/about' element={<About/>}  />
      <Route path='/contact' element={<Contact/>}  />
      <Route path='/project' element={<Project/>}  />
      <Route path='/resume' element={<Resume/>}  />
      </Routes>
    </motion.div>
  )
}

export default AnimatedRoutes