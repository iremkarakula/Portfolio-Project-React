import React from 'react'
import Hero from '../sections/Hero'
import About from '../sections/About';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Experience from '../sections/Experience';
import Contact from '../sections/Contact';

function HomePage() {
    return (
        <div>
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