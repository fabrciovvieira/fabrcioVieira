import './App.scss'
import React from 'react'
import Contact from './components/contact/Contact'
import Hero from './components/hero/Hero'
import NavBar from './components/navbar/NavBar'
import Paralax from './components/paralax/Paralax'
import Portfolio from './components/portfolio/Portfolio'
import Services from './components/servicos/Services'
import { SpeedInsights } from '@vercel/speed-insights/react';
import Skills from './components/skills/Skills'
function App() {

  return (
    <>

     <section id='Início'>
        <NavBar />
        <Hero />
      </section>
      <section id='Services'>
        <Paralax type="services"/>
      </section>
      <section id='Serviços'>
        <Services />
      </section>
      <section><Paralax type="habilidades"/></section>
      <section id='Habilidades'>
        <Skills />
      </section>
        <Portfolio/>
      <section id='Contato'>
        <Contact />
      </section>

      <SpeedInsights />
    </>
  )
}

export default App
