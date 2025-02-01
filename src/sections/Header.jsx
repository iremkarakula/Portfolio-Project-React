import React from 'react'
import { motion } from "framer-motion"

function Header() {

    return (
        <header className='flex justify-center items-center fixed top-4 w-full z-50'>
            <motion.nav className='flex flex-wrap justify-center gap-1 p-0.5 border border-white/20 md:rounded-full bg-white/80 dark:bg-white/10 backdrop-blur shadow-lg shadow-black/[0.1] dark:shadow-white/[0.1]'
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}>
                <a href='/' className='nav-a dark:nav-a-dark'>Home</a>
                <a href='#about' className='nav-a dark:nav-a-dark'>About</a>
                <a href='#skills' className='nav-a dark:nav-a-dark'>Skills</a>
                <a href='#projects' className='nav-a dark:nav-a-dark'>Projects</a>
                <a href='#experiences' className='nav-a dark:nav-a-dark'>Experiences
                </a>
                <a href='#contact' className='nav-a dark:nav-a-dark'>Contact</a>
            </motion.nav>
        </header>
    )
}

export default Header