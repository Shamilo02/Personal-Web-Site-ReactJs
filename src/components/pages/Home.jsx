import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
    <div className="about-site">
      <h1>Sayt Haqqında   </h1>
      <p>
        Müasir Javascriptlə yazılıb, <i style={{color:"crimson"}}>Responsive dizayn verilib</i>, istifadə olunan veb proqramlar <i style={{color:"firebrick"}}>React Js + Scss</i>,  react kitabxanalarından <i 
        style={{ color:"crimson"}}>REACT-ROUTER-DOM,FRAMER MOTION, REACT ICONS</i> kitabxanaları istifadə olunub.
        .</p>
    </div>
    <hr />
      <div className="w-site">
        <p> 
         Saytıma xoş gəlmisiniz, zəhmət olmasa mənim 
          <i><Link to='/about'> haqqımda </Link> </i>daha 
          çox oxuya bilərsiniz və ya mənim CV layihələrimə 
          baxa bilərsiniz,  və ya mənimlə  <i><Link to='/contact'>əlaqə </Link></i> saxlaya bilərsiniz.

        </p>
      </div>
    </div>
  )
}

export default Home