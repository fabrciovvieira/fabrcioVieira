import { useRef, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import {motion, useInView} from 'framer-motion'
import './Services.scss'
import titleImg from '../../assets/title.png'

import React from 'react'

const variants = {
    initial: {
        x: -500,
        y: 200,
        opacity: 0
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildrem: 0.1
        }
    }
}

const Services = () => {
    const ref = useRef()

    const isInView = useInView(ref, {margin: "-100px"})
    const [isMobile, setIsMobile] = useState(false);


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
    



  return (
    <div>
        {!isMobile ? (
            <motion.div className='services' variants={variants} initial="initial" ref={ref} animate={isInView && "animate"}>
            <motion.div className="textContainer" variants={variants}>
                <p>
                    Transformando ideias em soluções web
                    <br />envolventes e visualmente atraentes
                </p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src={titleImg} alt="imagem do titulo" />
                    <h1>
                        Idéias <motion.b whileHover={{color: "orange"}}>Unicas</motion.b>
                    </h1>
                </div>
                <div className="title">
                    <h1>
                        <motion.b whileHover={{color: "orange"}}>Para Seu</motion.b> Negócio
                    </h1>
                    <a href="#Contato"><motion.button whileHover={{transition: {duration: 2},backgroundColor: "transparent", color: "#fff", border: "1px solid orange"}}>VAMOS BATER UM PAPO?</motion.button></a>
                </div>
            </motion.div>
            <motion.div className="listContainer" >
                <motion.div className="box" whileHover={{backgroundColor: "lightgray", color: "#000"}}>
                    <h2>Conversão Eficiente</h2>
                    <p>Com uma landing page, você pode direcionar o tráfego para uma única página focada em uma oferta específica, aumentando as chances de conversão.</p>
                    <motion.button></motion.button>
                </motion.div>
                <motion.div className="box" whileHover={{backgroundColor: "lightgray", color: "#000"}}>
                    <h2>Maximize o Retorno sobre Investimento</h2>
                    <p>Ao direcionar o tráfego para uma landing page altamente relevante e otimizada, você pode maximizar o retorno sobre o investimento em suas campanhas de marketing online.</p>
                    <motion.button></motion.button>
                </motion.div>
                <motion.div className="box" whileHover={{backgroundColor: "lightgray", color: "#000"}}>
                    <h2>Atração Focada</h2>
                    <p>Uma landing page direciona toda a atenção do visitante para uma única oferta ou mensagem, aumentando as chances de conversão. Com menos distrações, é mais provável que os visitantes realizem a ação desejada.</p>
                    <motion.button></motion.button>
                </motion.div>
                <motion.div className="box" whileHover={{backgroundColor: "lightgray", color: "#000"}}>
                    <h2>Economia de Tempo e Recursos</h2>
                    <p>Criar uma landing page é mais rápido e econômico do que redesenhar todo o seu site, permitindo uma implementação ágil de novas campanhas.</p>
                    <motion.button></motion.button>
                </motion.div>
            </motion.div>
        </motion.div>
        ):(
            <div className='servicesMobile'>
                <div className="textContainerMobile" >
                    <p>
                        Transformando ideias em soluções web
                        <br />envolventes e visualmente atraentes
                    </p>
                    <hr />
                </div>
                <div className="titleContainerMobile" >
                    <div className="titleMobile">
                        <img src={titleImg} alt="imagem do titulo" />
                        <h1>
                            Idéias <motion.b >Unicas</motion.b>
                        </h1>
                    </div>
                    <div className="titleMobile">
                        <h1>
                            <motion.b >Para Seu</motion.b> Negócio
                        </h1>
                        <a href="#Contato" ><motion.button whileHover={{transition: {duration: 2},backgroundColor: "transparent", color: "#fff", border: "1px solid orange"}}>VAMOS BATER UM PAPO?</motion.button></a>
                    </div>
                </div>
                <Swiper
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}

                    navigation={!isMobile}
                    coverflowEffect={
                    {
                    rotate: 0,
                    stretch: 100,
                    depth: 30,
                    modifier: 1
                    }
                    }
                    style={{width: "100%", zIndex: "-1"}}
                    > 
                    <SwiperSlide  className="custom-swiper-slide">
                        <div className="listContainerMobile">
                            <h2>Economia de Tempo e Recursos</h2>
                            <div className='textoBoxMobile'>
                                <p>Criar uma landing page é mais rápido e econômico do que redesenhar todo o seu site, permitindo uma implementação ágil de novas campanhas.</p>
                            </div>
                            <button></button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide  className="custom-swiper-slide">
                        <div className="listContainerMobile">
                            <h2>Atração Focada</h2>
                            <div className='textoBoxMobile'>
                                <p>Uma landing page direciona toda a atenção do visitante para uma única oferta ou mensagem, aumentando as chances de conversão. Com menos distrações, é mais provável que os visitantes realizem a ação desejada.</p>
                            </div>
                            <button></button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide  className="custom-swiper-slide">
                        <div className="listContainerMobile">
                            <h2>Conversão Eficiente</h2>
                            <div className='textoBoxMobile'>
                                <p>Com uma landing page, você pode direcionar o tráfego para uma única página focada em uma oferta específica, aumentando as chances de conversão.</p>
                            </div>
                            <button></button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide  className="custom-swiper-slide">
                        <div className="listContainerMobile">
                            <h2>Maximize o Retorno sobre Investimento</h2>
                            <div className='textoBoxMobile'>
                                <p>Ao direcionar o tráfego para uma landing page altamente relevante e otimizada, você pode maximizar o retorno sobre o investimento em suas campanhas de marketing online.</p>
                            </div>
                            <button></button>
                        </div>
                    </SwiperSlide>
            </Swiper>
            </div>
        ) }




    </div>
  )
}

export default Services