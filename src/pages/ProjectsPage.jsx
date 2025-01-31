import React, { useState } from 'react'
import { projectsData, skillsData } from '../../data'
import ProjectPP from '../components/ProjectPP'
import { motion } from 'framer-motion';


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
        <motion.div className='py-32 px-1.5 md:py-36'
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}>

            <h1 className='font-calistoga text-3xl md:text-5xl text-center mt-8 tracking-wide leading-8'>
                My Projects
            </h1>
            <ul className='flex flex-wrap gap-2 text-sm md:text-base  max-w-2xl justify-center m-auto mt-20'>
                {skillsData.map((tag, index) => {
                    return <li key={index}
                        className={` border border-black/20 rounded-xl px-2 py-1.5 md:px-3 md:py-2  cursor-pointer
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
    )
}

export default ProjectsPage