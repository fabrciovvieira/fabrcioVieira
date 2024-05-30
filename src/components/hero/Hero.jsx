import {motion} from 'framer-motion' 
import { PiMouseScrollThin } from "react-icons/pi";
import './Hero.scss'


import fotoHero from '../../assets/fotoHero.png'
import { animate, stagger } from "framer-motion";

const textVariants = {
    initial: {
        x: -500,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildrem: 0.1
        }
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity
        }
    }
    
}
const imageVariant = {
    initial: {
        x: 500,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildrem: 0.1
        }
    }
    }
    


const sliderVariants = {
    initial: {
        x: 0
    },
    animate: {
        x: "-220%" ,
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        }
    }
    
}


const Hero = () => {
  return (
    <div className='hero'>
        <div className="wrapper">
            <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                <motion.h1 variants={textVariants}>Fabricio Vieira</motion.h1>
                <motion.h2 variants={textVariants}>Desenvolvedor Web</motion.h2>
                <motion.div variants={textVariants} className="buttons">
                    <a href="#Projetos"><motion.button variants={textVariants} whileHover={{border: '1px solid orange', color: 'orange'}}>Ver Projetos Recentes</motion.button></a>
                    <a href="#Contato"><motion.button variants={textVariants}  whileHover={{border: '1px solid orange', color: 'orange'}}>Fale Comigo</motion.button></a>
                </motion.div>
                <motion.div variants={textVariants} animate="scrollButton">
                    <PiMouseScrollThin style={{fontSize: '50px'}} />
                </motion.div>
            </motion.div>
            <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
                Especializado em Landing Pages
            </motion.div>
            <div className="imageContainer">
                <motion.img src={fotoHero} alt="foto da home" variants={imageVariant} initial="initial" animate="animate"/>
            </div>
        </div>
    </div>
  )
}

export default Hero