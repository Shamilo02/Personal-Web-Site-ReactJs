import React from 'react'
import { Link } from 'react-router-dom'
import {motion}  from 'framer-motion'

const Home = () => {
  return (
    <motion.div className='home'
    initial={{width: 0}}
    animate={{width: "100%"}}
    exit={{width: window.innerWidth}}
    >
    <div className="about-site">
      <h1>Sayt Haqqında   </h1>
      <p>
        Müasir Javascriptlə yazılıb, Responsive dizayn verilib , istifadə olunan 
        veb proqramlar <span>React Js + Scss</span> ,  react kitabxanalarından 
       <span> react-router-dom, framer-motion, react-icons </span> 
       kitabxanaları istifadə olunub.
        .</p>
    </div>
    <hr />
      <div className="w-site">
        <p> 
         Saytıma xoş gəlmisiniz, zəhmət olmasa mənim 
          <i><Link to='/resume'> haqqımda </Link> </i>daha 
          çox oxuya bilərsiniz və ya mənim CV layihələrimə 
          baxa bilərsiniz,  və ya mənimlə  <i><Link to='/contact'>əlaqə </Link></i> saxlaya bilərsiniz.

        </p>
      </div>
    </motion.div>
  )
}

export default Home