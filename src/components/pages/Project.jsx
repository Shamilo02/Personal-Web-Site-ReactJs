import React from 'react'
import { motion } from 'framer-motion'

const Project = () => {
  return (
    <motion.div className='project'
    initial={{width: 0}}
    animate={{width: "100%"}}
    exit={{width: window.innerWidth}}
    >
    <div className='project-me'> <h2>Project</h2></div>
    <hr />
    <div className="project-us">
      <div className="box-project">
    <img src="https://s.tmimgcdn.com/scr/1200x750/183700/modern-shopping-business-logo-template_183766-original.jpg" alt="" />
      <h4> Shopping Cart</h4>
      <p>Proyekt React ilə yazılıb,
         məhsulların carta əlavə olunması, 
        silinməsi, məhsul sayının artması və ya azalması,
         məhsulların kateqoriyaya bölünməsi proyektə göstərilib.</p>
      <div className="flex-btn">
      <a href="https://github.com/Shamilo02/Shopping-Card-React-Js" className="btn">SourceCode </a>
      <a href="https://628a26ac83a2304cd1171ee1--shoppin-cart-react-js.netlify.app/" className="btn"> Live Demo  </a>

      </div>
      </div>
      
      <div className="box-project">
    <img src="https://s.tmimgcdn.com/scr/1200x750/183700/modern-shopping-business-logo-template_183766-original.jpg" alt="" />
      <h4> Shopping Cart</h4>
      <p>Proyekt React ilə yazılıb,
         məhsulların carta əlavə olunması, 
        silinməsi, məhsul sayının artması və ya azalması,
         məhsulların kateqoriyaya bölünməsi proyektə göstərilib.</p>
      <div className="flex-btn">
      <a href="https://github.com/Shamilo02/Shopping-Card-React-Js" className="btn">SourceCode </a>
      <a href="https://628a26ac83a2304cd1171ee1--shoppin-cart-react-js.netlify.app/" className="btn"> Live Demo  </a>

      </div>
      </div>


    </div>

   </motion.div>
  )
}

export default Project