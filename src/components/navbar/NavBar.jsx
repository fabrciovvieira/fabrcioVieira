import {FaInstagram, FaWhatsapp, FaGithub, FaLinkedin} from 'react-icons/fa'
import { easeInOut, motion, useInView} from 'framer-motion'
import './NavBar.scss'
import React from 'react'

import logo from '../../assets/logo/logo.png'
import SideBar from '../sidebar/SideBar'


const NavBar = () => {




  return (
    <div className='navbar'>
        {/*Sidebar*/}
        <SideBar />
        <div className="wrapper">
  

              <motion.img
              initial={{y: -70, scale: 0.5}}
              animate={{y: 0, scale: 1}}
              transition={{duration: 0.5}}
              whileHover={{ y: -10, scale: 1.2, filter: "brightness(1.2) saturate(2)" }}
              src={logo} alt='logo da pagina' />
            <div className="social">
                <motion.a href="https://www.instagram.com/fabrciovvieira/" target='_blank'
                  whileHover={{ y: -10, scale: 1.2, filter: "brightness(1.2) saturate(2)" }}
                ><FaInstagram fill='#E4405F'/></motion.a>
                <motion.a href="https://www.linkedin.com/in/fabricio-vieira-64a268145/" target='_blank'
                  whileHover={{ y: -10, scale: 1.2, filter: "brightness(1.2) saturate(2)" }}
                ><FaLinkedin fill='#0077B5'/></motion.a>
                <motion.a href="https://github.com/fabrciovvieira" target='_blank'
                whileHover={{ y: -10, scale: 1.2, filter: "brightness(1.2) saturate(2)" }}
                ><FaGithub fill='#fff'/></motion.a>
                <motion.a href="https://wa.me/5548996571225" target='_blank'
                whileHover={{ y: -10, scale: 1.2, filter: "brightness(1.2) saturate(2)" }}
                ><FaWhatsapp fill='#25D366'/></motion.a>
            </div>
        </div>
    </div>
  )
}

export default NavBar