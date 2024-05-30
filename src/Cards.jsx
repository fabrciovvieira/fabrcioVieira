import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const items = [
    { id: 1, title: 'Card 1', subtitle: 'Informação detalhada do Card 1', texto: 'Informação detalhada do Card 4Informação detalhada do Card 4Informação detalhada do Card 4Informação detalhada do Card 4' },
    { id: 2, title: 'Card 2', subtitle: 'Informação detalhada do Card 2' , texto: 'Informação detalhada do Card 4Informação detalhada do Card 4Informação detalhada do Card 4Informação detalhada do Card 4'},
    { id: 3, title: 'Card 3', subtitle: 'Informação detalhada do Card 3', texto: 'Informação detalhada do Card 4Informação detalhada do Card 4Informação detalhada do Card 4Informação detalhada do Card 4' },
    { id: 4, title: 'Card 4', subtitle: 'Informação detalhada do Card 4', texto: 'Informação detalhada do Card 4Informação detalhada do Card 4Informação detalhada do Card 4Informação detalhada do Card 4' },
    { id: 5, title: 'Card 4', subtitle: 'Informação detalhada do Card 4', texto: 'Informação detalhada do Card 4Informação detalhada do Card 4Informação detalhada do Card 4Informação detalhada do Card 4' },
    { id: 6, title: 'Card 4', subtitle: 'Informação detalhada do Card 4', texto: 'Informação detalhada do Card 4Informação detalhada do Card 4Informação detalhada do Card 4Informação detalhada do Card 4' },
    { id: 7, title: 'Card 4', subtitle: 'Informação detalhada do Card 4', texto: 'Informação detalhada do Card 4Informação detalhada do Card 4Informação detalhada do Card 4Informação detalhada do Card 4' },
];

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.6,
        staggerChildren: 1
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

const Cards = () => {
    const [selectedId, setSelectedId] = useState(null);

    return (
        <>
        {/* <div className="cards-container">
            {items.map(item => (
                <motion.div 
                    className="card" 
                    layoutId={item.id.toString()} 
                    onClick={() => setSelectedId(item.id)}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    key={item.id}
                >
                    <motion.h2>{item.title}</motion.h2>
                </motion.div>
            ))}

            <AnimatePresence>
                {selectedId && (
                    <motion.div 
                        className="expanded-card" 
                        layoutId={selectedId.toString()} 
                        initial={{ opacity: 0.9 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{duration: 0.5}}
                    >
                        {items.filter(item => item.id === selectedId).map(item => (
                            <div key={item.id}>
                                <motion.h5>{item.subtitle}</motion.h5>
                                <motion.h2>{item.title}</motion.h2>
                                <motion.p>{item.texto}</motion.p>
                                <motion.button onClick={() => setSelectedId(null)}>Close</motion.button>
                            </div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div> */}

        <div className="cards-container">
            <motion.ul
             variants={container}
             initial="hidden"
             animate="visible"
            >
                {items.map((item) => (
                   <motion.li variants={i}>{item.title}</motion.li>
                ))}
                
            </motion.ul>
        </div>
        </>
    );
};

export default Cards;
