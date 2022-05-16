import React from 'react'
import {motion} from 'framer-motion'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTelegram, FaTwitter } from 'react-icons/fa'
import {SiGmail } from 'react-icons/si'
const Contact = () => {
  return (
    <motion.div className='contact'
    initial={{width: 0}}
    animate={{width: "100%"}}
    exit={{width: window.innerWidth}}
    >
     <div className='contact-me'> <h2>Contact</h2></div>
     <hr />
     <div className="contact-us">
      <h4>Mənimlə sosyal şəbəkələrdən əlaqə saxlaya bilərsiniz.</h4>
      <p className='gmail'> my gmail adress: <a href="mailto:musicafina9@gmail.com">musicafina9@gmail.com</a> </p>
    <div className="sosial">
    {/* <a href="mailto:musicafina9@gmail.com">musicafina9@gmail.com</a> */}
     <a href='https://www.facebook.com/profile.php?id=100010720202303'> <i> <FaFacebook/> </i></a>
      <a href='https://www.instagram.com/shamilo.02/'><i> <FaInstagram/> </i></a>
      <a href='https://github.com/Shamilo02'><i> <FaGithub/> </i></a>
     <a href='https://www.linkedin.com/in/%C5%9Famil-qurbanov-40383021a/'> <i> <FaLinkedin/> </i></a>
      <a href='https://web.telegram.org/k/'><i> <FaTelegram/> </i></a>
     <a href='https://twitter.com/samilqurban0v'> <i> <FaTwitter/> </i></a>
    </div>

   
     </div>
    </motion.div>
  )
}

export default Contact