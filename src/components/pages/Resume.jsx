import React, { useState } from 'react'
import { motion } from 'framer-motion'
import  Menu  from '../data'

const Resume = () => {
  const [items,SetItems] = useState(Menu)

  const filterItem = (tag) => {
  const updateItems =   Menu.filter((item) => {
      return item.cat === tag;
    })
    SetItems(updateItems)
  }
  return (
    <motion.div className='resume'
    initial={{width: 0}}
    animate={{width: "100%"}}
    exit={{width: window.innerWidth}}
    >
     <div className='resume-title'> <h2> Resume </h2></div>
    <hr />
    <div className="resume-us">
      <h2>Skills</h2>
      <div className="flex-btn">
        
        <button className='btn' onClick={()=> {SetItems(Menu)}}> All </button>
        <button className='btn' onClick={()=> filterItem('front')}> Front End  </button>
        <button className='btn' onClick={()=> filterItem('back')}> Back End  </button>
      </div>
      <div className="flex-skil">
      {items.map((item) => {
        return (
          <div className="progressBar">
            <div className={`progress ${item.tag}`}>
            <h5>{item.title}</h5>
            </div>
          </div>
        )
      })
      }
      </div>

    </div>
    <hr />
     <div className="resume-us">
       <h2>Education</h2>

      <div className="flex-res">
        <div className="title-box">
          <img src="https://cdn.trend.az/2020/09/23/bsu_log_230920.jpg" alt="" />
          <h5>Baku Slavic Univercity</h5>
          <h4>  Filalogiya ve Jurnalistika </h4>
        </div>
        <div className="title-box">
          <img src="https://pps.whatsapp.net/v/t61.24694-24/174598602_1750233461853858_806395049974617006_n.jpg?ccb=11-4&oh=7721d7d6cf1443384419a061f1f5fc36&oe=628DFE3D" alt="" />
          <h5>NAN TECH</h5>
          <h4>  FRONT-END DEVELOPER </h4>
          
        </div>
        <div className="title-box">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH6HtOLgYeO973eajuJo2hlskee2O1m7vbxI_gREBrwLXDgNxhDhd-bBKoBKmmYE4nWy0&usqp=CAU" alt="" />
          <h5>Matrix Training Center</h5>
          <h4>  Front-End-Developer  </h4>
        </div>
      </div>
     </div>
    </motion.div>
  )
}

export default Resume