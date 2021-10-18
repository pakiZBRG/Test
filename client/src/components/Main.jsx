import React from 'react'
import About from './About/About'
import Contact from './Contact/Contact'
import FAQ from './FAQ/FAQ'
import Footer from './Footer/Footer'
import Hero from './Hero/Hero'
import Team from './Team/Team'
import Newsletter from './Newsletter/Newsletter'
import Project from './Project/Project'

export const Main = ({switchModal}) => {
    return (
        <div className='content'>
            <Hero switchModal={switchModal}/>
            <About />
            <Team />
            <Project />
            <Newsletter />
            <FAQ />
            <Contact />
            <Footer />
        </div>
    )
}
