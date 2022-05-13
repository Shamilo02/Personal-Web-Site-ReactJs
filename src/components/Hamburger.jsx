import React  from 'react'
import {TiDelete } from 'react-icons/ti'
import { Link } from 'react-router-dom'

const Hamburger = ({burger, deyis}) => {

    
  return (
    <div className= {burger ? "hamburger-menu showMenu" : "hamburger-menu" }>
     

     <i onClick={deyis}><TiDelete/></i>

      <ul>
        <li> <Link to='/'> <h1>Shamil Qurbanov </h1> </Link></li>
          
          <li> <Link to='/about'> About </Link></li>
          <li> <Link to='/resume'> Resume  </Link></li>
          <li> <Link to='/contact'> Contact  </Link></li>
          
      </ul>
  </div>
  )
}

export default Hamburger