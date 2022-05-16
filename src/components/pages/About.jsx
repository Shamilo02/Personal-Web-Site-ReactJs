import React from 'react'
import { motion} from 'framer-motion'
import { FaChess ,FaBook, FaFilm, FaMusic} from 'react-icons/fa'


const About = () => {
  return (
    <motion.div className='about'
    initial={{width: 0}}
    animate={{width: "100%"}}
    exit={{width: window.innerWidth}}
    >
      <div className="about-me">
        <h2> About me </h2>
        
      </div>
      <hr />
      <div className="about-us">
        <h3> Ətraflı  </h3>
        <p> 
        Salam, mən Şamil, 23 yaşım var, Bakı şəhərində yaşayıram, 
         2016-2020-ci illər ərzində 
           Bakı Slavyan Üniversitetinin Filalogiya və Juranlistika fakültəsin bitirmişəm,
           daha sonra ixtisasımı Veb Proqramlaşdırma üzrə davam elətdirmişəm.

        </p>
      </div>
      <hr />
      <div className="about-us">
        <h3>Veb Proqramlaşdırmaya necə başladım ? </h3>

        <div className="flex">
        <p> 
      2018-dən bəri Veb proqramlaşdırma ilə maraqlanıram, 
      özümün rəsm və dizayn bacarığım var idi, 
      sadəcə olaraq bu rəsm və dizayn məsələlərini kodlarla birləşdirdim.
      Hər şeyi tam dərindən öyrənmək üçün əlimdə olan bütün sosyal şəbəkələrdən
      istifadə etdim, istər Youtube olsun, istər Udemy-dən aldığım kurslarla bu sahə üzrə 
      bacardığım qədər öyrənməyə çalışdım, ama tam öyrənmək deyə bir şey yoxdur, 
      çünki kodlaşdırma da texnologiyanın böyük bir parçasıdır
      və  texnologiya dayanmadan inkşaf edir, və öyrəndiklərimi 
      təkmilləşdirmək üçün proqramlaşdırma üzrə seminarlara və kurslara qatıldım.
      daha sonra Freelancer komandalarda çalışdım.

        </p>

        <div className="img">
          <img src="https://images4.alphacoders.com/665/thumbbig-665092.webp" alt="" />
        </div>
        </div>
      </div>

      <hr />
     <div className="about-us">
      <h3> Hobbilərim</h3>
      <div className="flex-box">
    <div className="box">
      <i> <FaFilm/> </i>
      <h5>Film izləmək </h5>
      </div>
    <div className="box">
      <i> <FaBook/> </i>
      <h5>Kitab oxumaq </h5>
      </div>
    <div className="box">
      <i> <FaChess/> </i>
      <h5>Şahmat oynamaq </h5>
      </div>
    <div className="box">
      <i> <FaMusic/> </i>
      <h5> Musiqi dinləmək  </h5>
      </div>
   
      </div>
     </div>

    </motion.div>
  )
}

export default About