import React, { useEffect } from 'react'
import Hero from '../sections/Hero'
import About from '../sections/About';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Experience from '../sections/Experience';
import Contact from '../sections/Contact';
import Header from '../sections/Header';

function HomePage() {

    return (
        <div className='text-gray-900 dark:text-gray-100'>
            <Header />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
        </div>
    )
}

export default HomePage