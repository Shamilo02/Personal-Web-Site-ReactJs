import React from 'react'
import { motion } from 'framer-motion'

const Project = () => {
  return (
    <motion.div className='about'
    initial={{width: 0}}
    animate={{width: "100%"}}
    exit={{width: window.innerWidth}}
    >
    <div className='about-me'> <h2>Project</h2></div>
   </motion.div>
  )
}

export default Project