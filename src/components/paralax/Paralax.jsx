import { useRef } from 'react'
import {motion, useScroll, useTransform} from 'framer-motion'

import './Paralax.scss'



const Paralax = ({ type }) => {
    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
    const xBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  return (
    <div className='paralax' 
    ref={ref}
    style={{
        background: type === 'sobre' 
        ? "linear-gradient(180deg, #11132, #0c0c1d"
        : "linear-gradient(180deg, #11132, #505064"
    }}>
        <motion.h1 style={{y: yBg}}>{type === 'services' ? 'Impulsione seu Negócio' : 'Inove sua Presença'}</motion.h1>
        <motion.div className="mountains"></motion.div>
        <motion.div className="planets"  style={{
            y: yBg,
            backgroundImage: `url(${type === 'services' 
            ? '../../../public/planets.png'
            : '../../../public/sun.png'})`
            }}></motion.div>
        <motion.div className="stars" style={{x: xBg}}></motion.div>
    </div>
  )
}

export default Paralax