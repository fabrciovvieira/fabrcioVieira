import {motion} from 'framer-motion'

const variant = {
  open: {
    transition: {
      staggerChildren: 0.1
    }
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
}

const itensVariants = {
  open: { 
    opacity: 1, 
    y: 0 
  },
  closed: { 
    opacity: 0, 
    y: 50 
  },
}


const Links = ({ setIsOpen }) => {

  const itensMenu = [
    "Início",
    "Serviços",
    "Habilidades",
    "Projetos",
    "Contato"
  ]

  return (
    <motion.div className='links'
    variants={variant}>
      {itensMenu.map((item) => (
        <motion.a href={`#${item}`} key={item} variants={itensVariants} whileHover={{scale: 1.1}} whileTap={{scale:0.9}} onClick={(e) => setIsOpen((prev) => !prev)}>{item}</motion.a>
      ))}
    </motion.div>
  )
}

export default Links