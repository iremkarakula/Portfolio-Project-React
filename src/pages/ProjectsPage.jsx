import React, { useState } from 'react'
import { projectsData, skillsData } from '../../data'
import ProjectPP from '../components/ProjectPP'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';


function ProjectsPage() {
    const [selectedTag, setSelectedTag] = useState([]);



    const handleTag = (tag) => {
        if (selectedTag.includes(tag)) {
            const tags = selectedTag.filter(t => t !== tag)
            setSelectedTag(tags)
        } else {
            setSelectedTag(pre => [...pre, tag])
        }

    }

    const filteredProjects = selectedTag.length > 0
        ? projectsData.filter(project => selectedTag.every(tag => project.tags.includes(tag)))
        : projectsData;

    return (
        <div>
            <ScrollToTop />
            <motion.div className='py-24 px-1.5 md:py-28'
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}>

                <div className='flex gap-4  fixed top-0 bg-purple-100/70 dark:bg-gray-500/20 backdrop-blur w-full p-3 justify-center shadow-md dark:shadow-white/20'>
                    <Link to="/" className='text-gray-800 dark:text-gray-100 hover:text-purple-900 dark:hover:text-purple-200 text-lg md:text-xl font-medium'>
                        Home
                    </Link>
                </div>

                <h1 className='main-title text-3xl md:text-5xl text-center mt-8'>
                    My Projects
                </h1>
                <ul className='flex flex-wrap gap-2 text-sm md:text-base  max-w-2xl justify-center m-auto mt-16 md:mt-20'>
                    {skillsData.map((tag, index) => {
                        return <li key={index}
                            className={` tag dark:tag-dark cursor-pointer text-sm md:text-base px-2.5 py-1.5 md:px-3.5 md:py-2
                        ${selectedTag.includes(tag) ? "bg-gray-700 text-white dark:bg-gray-200 dark:text-gray-900" : "bg-white dark:bg-white/10 text-gray-800 dark:text-white/80"}`}
                            onClick={() => handleTag(tag)}>
                            {tag}
                        </li>
                    })}
                </ul>



                <ul className='flex gap-4 justify-center items-stretch mt-16 flex-wrap'>
                    {filteredProjects.map((project, index) => {
                        return <li key={index}>
                            <ProjectPP project={project} />
                        </li>
                    })}
                </ul>

            </motion.div>
        </div>
    )
}

export default ProjectsPage