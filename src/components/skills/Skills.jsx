import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FRONT, TECNO, SOFT, ALLOFTHEM } from '../../utils/data';
import './Skills.scss';

const container = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
};

const sliderVariants = {
    initial: { x: 0 },
    animate: {
        x: "-220%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        }
    }
};

const variantItens = {
    hidden: { y: 10, opacity: 0, rotate: 180 },
    visible: {
        y: 0,
        opacity: 1,
        rotate: 0,
        transition: {
            duration: 0.5
        }
    }
};

const Skills = () => {
    const [skill, setSkill] = useState('FRONT');
    const [selectedId, setSelectedId] = useState(null);
    const [selectedIdDesktop, setSelectedIdDesktop] = useState(null);

    console.log(skill)

    return (
        <>
            <div className="containerSkill">
                <h1>Minhas Habilidades</h1>
                <div className="skills">
                    <div className="topics">
                        <motion.div className="tecno"
                            whileHover={{ y: -20 }}
                            transition={{ duration: 0.5 }}
                            onClick={() => setSkill('FRONT')}>
                            <h2>Front-end</h2>
                        </motion.div>
                        <motion.div className="tecno"
                            whileHover={{ y: -20 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setSkill('TECNO')}>
                            <h2>Tecnologias</h2>
                        </motion.div>
                        <motion.div className="tecno"
                            whileHover={{ y: -20 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setSkill('SOFT')} >
                            <h2>Soft Skills</h2>
                        </motion.div>
                    </div>
                    <div>
                        {skill === 'FRONT' && (
                            <motion.div className="descricaoTopico"
                                variants={container}
                                initial="hidden"
                                animate="visible">
                                {FRONT.map((item) => (
                                    <motion.div
                                        className="item"
                                        layoutId={item.id.toString()}
                                        onClick={() => setSelectedIdDesktop(item.id)}
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                        variants={variantItens}
                                        key={item.id}
                                        style={{ opacity: selectedIdDesktop === null || selectedIdDesktop === item.id ? 1 : 0.5 }}
                                    >
                                        <item.icon />
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}
                        {skill === 'TECNO' && (
                            <motion.div className="descricaoTopico"
                                variants={container}
                                initial="hidden"
                                animate="visible">
                                {TECNO.map((item) => (
                                    <motion.div
                                        className="item"
                                        layoutId={item.id.toString()}
                                        onClick={() => setSelectedIdDesktop(item.id)}
                                        whileHover={{ scale: 1.2 }}
                                        transition={{ duration: 0.3 }}
                                        variants={variantItens}
                                        key={item.id}
                                        style={{ opacity: selectedIdDesktop === null || selectedIdDesktop === item.id ? 1 : 0.5 }}
                                    >
                                        <item.icon />
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}
                        {skill === 'SOFT' && (
                            <motion.div className="descricaoTopico"
                                variants={container}
                                initial="hidden"
                                animate="visible">
                                {SOFT.map((item) => (
                                    <motion.div
                                        className="item"
                                        layoutId={item.id.toString()}
                                        onClick={() => setSelectedIdDesktop(item.id)}
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                        variants={variantItens}
                                        key={item.id}
                                        style={{ opacity: selectedIdDesktop === null || selectedIdDesktop === item.id ? 1 : 0.5 }}
                                    >
                                        <item.icon />
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}
                    </div>
                    <AnimatePresence>
                        {selectedIdDesktop !== null && (
                            <motion.div
                                className="expanded-card"
                                layoutId={selectedIdDesktop.toString()}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                {skill === 'FRONT' && FRONT.filter(item => item.id === selectedIdDesktop).map(item => (
                                    <div key={item.id} className='expendTexto'>
                                        <motion.h3>{item.title}</motion.h3>
                                        <motion.p>{item.texto}</motion.p>
                                        <motion.button onClick={() => setSelectedIdDesktop(null)}>Fechar</motion.button>
                                    </div>
                                ))}
                                {skill === 'TECNO' && TECNO.filter(item => item.id === selectedIdDesktop).map(item => (
                                    <div key={item.id} className='expendTexto'>
                                        <motion.h3>{item.title}</motion.h3>
                                        <motion.p>{item.texto}</motion.p>
                                        <motion.button onClick={() => setSelectedIdDesktop(null)}>Fechar</motion.button>
                                    </div>
                                ))}
                                {skill === 'SOFT' && SOFT.filter(item => item.id === selectedIdDesktop).map(item => (
                                    <div key={item.id} className='expendTexto'>
                                        <motion.h3>{item.title}</motion.h3>
                                        <motion.p>{item.texto}</motion.p>
                                        <motion.button onClick={() => setSelectedIdDesktop(null)}>Fechar</motion.button>
                                    </div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <motion.div className="slidingTextContainerSkill" variants={sliderVariants} initial="initial" animate="animate">
                        Potencialize sua Marca
                    </motion.div>
                </div>
            </div>

            <div className="containerSkillMobile">
                <h1>Minhas Habilidades</h1>
                <div className="skillsMobile">
                    {ALLOFTHEM.map((item) => (
                        <motion.div className='itemMobile'
                            layoutId={item.id.toString()}
                            onClick={() => setSelectedId(item.id)}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            variants={variantItens}
                            key={item.id}
                            style={{ opacity: selectedId === null || selectedId === item.id ? 1 : 0.5 }}
                        >
                            <item.icon />
                        </motion.div>
                    ))}
                    <AnimatePresence>
                        {selectedId !== null && (
                            <motion.div
                                className="expanded-cardMobile"
                                layoutId={selectedId.toString()}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                {ALLOFTHEM.filter(item => item.id === selectedId).map(item => (
                                    <div key={item.id} className='expendTextoMobile'>
                                        <motion.h3>{item.title}</motion.h3>
                                        <motion.p>{item.texto}</motion.p>
                                        <motion.button onClick={() => setSelectedId(null)}>Fechar</motion.button>
                                    </div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </>
    );
};

export default Skills;
