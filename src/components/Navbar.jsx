import React, { useState } from 'react'
import { FaHamburger } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Hamburger from './Hamburger'

const Navbar = () => {
   const [burger, SetBurger] = useState(false)
    const deyis = () => {
        SetBurger(!burger)
       
    }
  return (
      <>
    <nav>
        <div className="logo">


            <h1> <Link to='/'> Shamil Gurbanov  </Link>  </h1>
        </div>

        <ul>

            <li><Link to='/about'> About   </Link></li>
            <li><Link to='/resume'> Resume  </Link></li>
            <li><Link to='/project'> Project </Link></li>
            <li><Link  to='/contact'> Contact </Link></li>
        </ul>
        <i onClick={deyis}> <FaHamburger/> </i>
    </nav>
      

     <Hamburger burger={burger} deyis={deyis} />
      </>
  )
}

export default Navbar