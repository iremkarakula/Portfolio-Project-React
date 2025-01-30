import React from 'react'
import { useTheme } from '../context/ThemeContex'

function Header() {

    return (
        <header className='flex justify-center items-center fixed top-4 w-full z-50'>
            <nav className='flex flex-wrap justify-center gap-1 p-0.5 border border-white/20 md:rounded-full bg-white/80 dark:bg-white/10 backdrop-blur shadow-lg shadow-black/[0.1] dark:shadow-white/[0.1]'>
                <a href='#' className='nav-a dark:hover:bg-gray-200 dark:hover:bg-opacity-20'>Home</a>
                <a href='#' className='nav-a dark:hover:bg-gray-200 dark:hover:bg-opacity-20'>About</a>
                <a href='#' className='nav-a dark:hover:bg-gray-200 dark:hover:bg-opacity-20'>Skills</a>
                <a href='#' className='nav-a dark:hover:bg-gray-200 dark:hover:bg-opacity-20'>Projects</a>
                <a href='#' className='nav-a dark:hover:bg-gray-200 dark:hover:bg-opacity-20'>Contact</a>
            </nav>
        </header>
    )
}

export default Header