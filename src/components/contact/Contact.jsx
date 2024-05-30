import {FaInstagram, FaWhatsapp, FaLinkedin} from 'react-icons/fa'
import './Contact.scss'
import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const variants = {
    initial: {
        y: 100,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildrem: 0.1
        }
    }

}



const Contact = () => {
    const ref = useRef()
    const form = useRef()
    const [isMobile, setIsMobile] = useState(false);
    const [mensagem, setMensagem] = useState('');
    const [name, setName] = useState('');
    const [userEmail, setUserEmail] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        
        if(userEmail === '' || name === '' || mensagem === '' ) {
            window.alert('Por favor preencha todos os dados')
            return
        }

        emailjs.sendForm('service_8d1wtxq', 'template_q2bgb8s', form.current, 'Av1nOszPSoWWBKXlX')
          .then(
            () => {

              toast.success('E-mail enviado com sucesso!', {
                position: "top-right",
                autoClose: "3000",
                hideProgressBar: false,
                closeOnClick: true,
                theme: "light",
            })
            setUserEmail('');
            setMensagem('');
            setName('');
            },
            (error) => {
              console.log('FAILED...', error.text);
              toast.error(error, {})
            }
          );
    };


    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 768px)'); 
        
        setIsMobile(mediaQuery.matches);
    
        const handleResize = () => {
          setIsMobile(mediaQuery.matches);
        };
    
        mediaQuery.addEventListener('change', handleResize);
    
        return () => {
          mediaQuery.removeEventListener('change', handleResize);
        };
      }, []);


    const isInView = useInView(ref, {margin: "-100px"})

    const pathVariants = {
        initial: {
            opacity: 1,
            pathLength: 0
        },
        animate: {
            opacity: 1,
            pathLength: 1,
            transition: {
                duration: 5,
                easeInOut: "easeInOut"
            }
        }
    }

  return (
    <>
    <motion.div className='contact' variants={variants} initial="initial" whileInView="animate" ref={ref}>
        <motion.div className="textContainer" variants={variants}>
            <motion.h1>Vamos Trabalhar Juntos</motion.h1>
            <motion.div className="item" variants={variants}>
                <h2>Email</h2>
                <span>fabriciovvieira@gmail.com</span>
            </motion.div>
            <motion.div className="item" variants={variants}>
                <h2>Endereço</h2>
                <span>Garopaba/SC <br />Brasil</span>
            </motion.div>
        </motion.div>
        <div className="formContainer" >
            <motion.div className="wppSvg" initial={{opacity:1}} whileInView={{opacity: 0}} transition={{delay: 3, duration: 1}}>
            <svg
            fill="none"
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
            className="svgIconMobile"
            width={isMobile ? '100%' : '500px'} 
            height={isMobile ? 'auto' : '500px'}
            >
                <motion.path
                variants={pathVariants}
                strokeWidth={2}
                fill="none"
                d="M128.00049,28A100.02594,100.02594,0,0,0,41.11475,177.53908l-9.0044,31.51661a11.99971,11.99971,0,0,0,14.835,14.834l31.5166-9.00391A100.00677,100.00677,0,1,0,128.00049,28Zm0,192a91.87082,91.87082,0,0,1-46.95264-12.86719,3.99494,3.99494,0,0,0-3.14355-.4082l-33.15723,9.47363a3.99979,3.99979,0,0,1-4.94434-4.94531l9.47266-33.15625a4.00111,4.00111,0,0,0-.4082-3.14355A92.01077,92.01077,0,1,1,128.00049,220Zm50.51123-73.457-20.45947-11.69141a12.01054,12.01054,0,0,0-12.12745.12891l-13.80664,8.28418a44.04183,44.04183,0,0,1-19.38232-19.38281l8.28369-13.80664a12.0108,12.0108,0,0,0,.12891-12.127l-11.69092-20.46A10.91584,10.91584,0,0,0,100,72a32.00811,32.00811,0,0,0-32,31.88086A84.001,84.001,0,0,0,151.999,188h.12012A32.00842,32.00842,0,0,0,184,156,10.913,10.913,0,0,0,178.51172,146.543ZM152.10791,180h-.1084A75.99972,75.99972,0,0,1,76,103.8926,23.997,23.997,0,0,1,100,80a2.89975,2.89975,0,0,1,2.51172,1.457L114.20264,101.918a4.00418,4.00418,0,0,1-.043,4.042l-9.38916,15.64844a3.9987,3.9987,0,0,0-.21826,3.69824,52.04112,52.04112,0,0,0,26.1416,26.1416,3.99707,3.99707,0,0,0,3.69873-.21875L150.04,141.84084a4.006,4.006,0,0,1,4.043-.04394l20.46045,11.69238A2.89712,2.89712,0,0,1,176,156,23.99725,23.99725,0,0,1,152.10791,180Z"/>
            </svg>
            </motion.div>
            <motion.form initial={{opacity:0}} whileInView={{opacity: 1}} transition={{delay: 4, duration: 1}} onSubmit={sendEmail} ref={form}>
            <input type="text" name='to_name' placeholder="Seu nome" value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="email" placeholder="Seu email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)}/>
            <textarea name="message" rows={8} placeholder="Sua mensagem" value={mensagem} onChange={(e) => setMensagem(e.target.value)}></textarea>
            <motion.input type="submit" value="Enviar" whileHover={{backgroundColor: 'transparent', border: '1px solid orange', color: 'orange', transition: {duration: 1}}}/>
            </motion.form>

        </div>

    </motion.div>

    <div className="rodape">
    <div className="sociaisFooter">
        <a href="https://www.instagram.com/fabrciovvieira/" target='_blank'>
            <FaInstagram className='icone' />
        </a>
        <a href="https://www.linkedin.com/in/fabricio-vieira-64a268145/" target='_blank'>
            <FaLinkedin className='icone'/>
        </a>
        <a href="https://wa.me/5548996571225" target='_blank'>
            <FaWhatsapp className='icone'/>
        </a>
    </div>
    <div className="register">
        <span>&copy;2024 - Todos os direitos reservados</span>
        <span>Desenvolvido por Fabricio Vieira</span>
    </div>
    </div>
  </>
  )
}

export default Contact

