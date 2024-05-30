import { useState } from 'react'
import {delay, motion} from 'framer-motion'
import './SideBar.scss'
import React from 'react'
import Links from './links/Links'
import ToggleButton from './toggleButton/ToggleButton'

const variant = {
    open: {
        clipPath: "circle(1200px at 50px 50px)",
        transition: {
            type: 'spring', 
            stiffiness: 400,
            damping: 30,
        }
    },
    closed: {
        clipPath: "circle(30px at 50px 50px)",
        transition: {
            delay: 0.4,
            type: 'spring',
            stiffiness: 100,
            damping: 40
        },
    } 
}




const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false)


  return (
    <motion.div className='sideBar' animate={isOpen ? 'open' : 'closed'}>
        <motion.div className="bg" variants={variant}>
            <Links setIsOpen={setIsOpen}/>
        </motion.div>
        <ToggleButton setIsOpen={setIsOpen}/>
    </motion.div>
  )
}

export default SideBar