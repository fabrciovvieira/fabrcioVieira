import React, {useState, useEffect, useRef} from 'react';
import {motion, useScroll, useSpring, useTransform} from 'framer-motion'
import { gql, GraphQLClient } from 'graphql-request';
import './Portfolio.scss'


const projetos = [
    {
        id: 1,
        title: "Projeto Para Delivery",
        img: "https://images.pexels.com/photos/18023659/pexels-photo-18023659/free-photo-of-a-table-with-chairs-under-an-umbrella-on-a-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem iure repudiandae, est id eligendi ipsam illum minus sequi ipsa, obcaecati provident optio eos accusamus voluptatibus molestias reprehenderit perspiciatis, voluptate temporibus!"
    },
    {
        id: 2,
        title: "Projeto Para Barbearia",
        img: "https://images.pexels.com/photos/23193135/pexels-photo-23193135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem iure repudiandae, est id eligendi ipsam illum minus sequi ipsa, obcaecati provident optio eos accusamus voluptatibus molestias reprehenderit perspiciatis, voluptate temporibus!"
    },
    {
        id: 3,
        title: "Projeto Para Personal Trainer",
        img: "https://images.pexels.com/photos/20419408/pexels-photo-20419408/free-photo-of-a-black-camera-sitting-on-top-of-a-red-box.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem iure repudiandae, est id eligendi ipsam illum minus sequi ipsa, obcaecati provident optio eos accusamus voluptatibus molestias reprehenderit perspiciatis, voluptate temporibus!"
    },
    {
        id: 4,
        title: "Projeto Para Social Media",
        img: "https://images.pexels.com/photos/15154326/pexels-photo-15154326/free-photo-of-red-armchairs-in-the-ferry-boat.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem iure repudiandae, est id eligendi ipsam illum minus sequi ipsa, obcaecati provident optio eos accusamus voluptatibus molestias reprehenderit perspiciatis, voluptate temporibus!"
    },
    {
        id: 5,
        title: "Meu Portfólio",
        img: "https://images.pexels.com/photos/15329526/pexels-photo-15329526/free-photo-of-man-on-a-field-covered-with-fog.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem iure repudiandae, est id eligendi ipsam illum minus sequi ipsa, obcaecati provident optio eos accusamus voluptatibus molestias reprehenderit perspiciatis, voluptate temporibus!"
    },
]

const Single = ({projeto}) => {
    const ref = useRef()

    console.log(projeto)

    const {scrollYProgress} = useScroll({target: ref,
        // offset: ['start start', 'end start']
    })

    
        const y = useTransform(scrollYProgress, [0,1], [-500, 500])

    return (
        <section  id="Projetos" style={{zIndex: -1}}> 
           <div className="container">
            <div className="wrapper">
                <div className="imageContainer" ref={ref}>
                    <img src={projeto.image.url} alt={projeto.title} />
                </div>
                <motion.div className="textContainer" style={{y}}>
                    <h2 >{projeto.title}</h2>
                    <p>{projeto.descricao}</p>
                    <a href={projeto.urlsite} target='_blank'><motion.button whileHover={{scale: 1.1, transition: {duration: 0.4}}}>Ver Aplicação</motion.button></a>
                </motion.div>
            </div>
           </div>
        </section>
    )
}




const Portfolio = () => {
    const ref = useRef()
    const [dados, setDados] = useState([])


    const query = gql`
    query {
        allProjetos {
            id
            title
            descricao
            urlsite
            image {
              id
              url
            }
          }
    }
  `;

  useEffect(() => {
    const meusProjetos = async () => {
      const endpoint = import.meta.env.VITE_API_ENDPOINT;
      const client = new GraphQLClient(endpoint, {
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`
        }
      });

      try {
        const allMyProjects = await client.request(query);
        setDados(allMyProjects.allProjetos);
        console.log(allMyProjects.allProjetos)
      } catch (error) {
        console.error('Error fetching projects mensagem:', error);
      }
    };

    meusProjetos();
    console.log(meusProjetos())
  }, []);


    const {scrollYProgress} = useScroll({target: ref,
         ofsset: ['end end', 'start start']})

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    })    

  return (
    <div className='portfolio' ref={ref}>
        <div className="progress">
            <h1>Meus Projetos</h1>
            <motion.div className="progressBar" style={{scaleX}}></motion.div>
        </div>
        {dados.map((projeto) => (
            <Single projeto={projeto} key={projeto.id}/>
        ))}
    </div>
  )
}

export default Portfolio