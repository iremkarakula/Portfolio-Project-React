import React from 'react'
import { projectsData } from '../../data'
import Project from '../components/Project'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function Projects() {

    return (
        <section className=' px-2' id='projects'>
            <div className='container'>
                <h2 className="tracking-wider font-semibold text-xl md:text-2xl  text-center
            bg-gradient-to-r from-gray-700 via-gray-600 via-purple-700 to-purple-800 
            text-transparent bg-clip-text
                dark:from-purple-500 dark:via-purple-400 dark:via-purple-350 dark:to-purple-300  mb-8">
                    Projects
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {projectsData.map((project) => {
                        return <Project project={project} />
                    })}
                </div>
                <Link to="/projects">
                    <button className="w-fit flex items-center gap-2 border border-white/20 px-3 py-2 rounded-lg 
                    bg-gray-800 text-white text-sm m-auto my-12">
                        <span className=''> Explore All Projects</span>
                        <span><ArrowRight size={18} /></span>
                    </button>
                </Link>


            </div>
        </section>
    )
}

export default Projects