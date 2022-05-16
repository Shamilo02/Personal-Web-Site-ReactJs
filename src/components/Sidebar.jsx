import React, { useState } from 'react'
import { FaGithub , FaFacebook,FaInstagram, FaLinkedin, FaTwitter, FaTelegram } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import  profile from '../img/profile.jpg'

const Sidebar = () => {
  const [about, setabout] = useState(false)
  const deyis = () => {
    setabout(!about)
  }
  return (
    <div className='sidebar'>
        <div className="card-profile">
          <div className="resim">
        <img src={profile} alt="" />

          </div>
        
        <h1>Shamil Qurbanov </h1>
        <p><a href="mailto:musicafina9@gmail.com"> musicafina9@gmail.com </a></p>
        </div>
        <hr />


        <div className="card-about">
          <h2>About </h2>
          <p> 
            Hi, İ'am Shamil Gurbanov 
             </p>
              
              {/* Salam, mən Şamil, 23 yaşım var, 2016-2020-ci illər ərzində 
           Bakı Slavyan Üniversitetinin Filalogiya və Juranlistika fakültəsin bitirmişəm,
           daha sonra ixtisasımı Veb Proqramlaşdırma üzrə davam elətdirmişəm. */}
               
                
                 <Link onClick={deyis} to={about ? '/contact' : '/about'}> 
                  { about ? "Contact Me" : "About More"}
                  </Link>
               
                 
               
              
              
         
        </div>
        <hr />

        <div className="social">
          <a> <FaGithub/> </a>
          <a> <FaFacebook/> </a>
          <a> <FaInstagram/> </a>
          <a> <FaLinkedin/> </a>
          <a><FaTwitter/> </a>
          <a><FaTelegram/> </a>
        </div>
    </div>
  )
}

export default Sidebar