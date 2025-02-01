import { ArrowRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

function ProjectPP({ project }) {
    return (
        <div className="flex flex-col justify-between border border-gray-700 rounded-xl md:h-56 p-4 w-80">
            <div>
                <div className="flex items-center gap-2">
                    <span className="text-sm font-medium  text-purple-900 dark:text-purple-400">{project.category}</span>
                    <span className="text-sm text-purple-900 dark:text-purple-400">•</span>
                    <span className="text-sm text-purple-900 dark:text-purple-400">{project.year}</span>
                </div>

                <h2 className="text-lg mt-2 text-gray-900 dark:text-gray-100">{project.title}</h2>
                <ul className='mt-2 mb-3 flex flex-wrap gap-1.5 text-gray-900 dark:text-gray-100'>
                    {project.tags.map(tag => {
                        return <li className='font-medium text-xs py-1 lg:py-2 px-2 lg:px-3 bg-white border border-gray-300 dark:border-gray-700
                            rounded-full  dark:bg-gray-800'>{tag}</li>
                    })}

                </ul>


            </div>
            <Link to={`/projects/${project.id}`}>
                <button className="w-fit flex items-center gap-2 border border-white/20 px-3 py-2 rounded-lg text-white text-sm  bg-gradient-to-r from-gray-800  to-purple-800">
                    <span className=''>Project</span>
                    <span><ArrowRight size={18} /></span>
                </button>
            </Link>


        </div>
    )
}

export default ProjectPP