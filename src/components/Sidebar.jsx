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
        <a href='https://www.facebook.com/profile.php?id=100010720202303'> <i> <FaFacebook/> </i></a>
      <a href='https://www.instagram.com/shamilo.02/'><i> <FaInstagram/> </i></a>
      <a href='https://github.com/Shamilo02'><i> <FaGithub/> </i></a>
     <a href='https://www.linkedin.com/in/%C5%9Famil-qurbanov-40383021a/'> <i> <FaLinkedin/> </i></a>
      <a href='https://t.me/shamilo13'><i> <FaTelegram/> </i></a>
     <a href='https://twitter.com/samilqurban0v'> <i> <FaTwitter/> </i></a>
    </div>
        </div>
   
  )
}

export default Sidebar