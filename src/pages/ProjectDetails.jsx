import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { projectsData } from '../../data';
import { motion } from "framer-motion"
import { Images } from '@/components/Images';
import ScrollToTop from '../components/ScrollToTop';



function ProjectDetails() {
    const { id } = useParams();
    const foundProjects = projectsData.find(p => p.id === Number(id));


    return (
        <motion.div className='py-24 px-1.5 md:py-28'
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
        >
            <ScrollToTop />
            <div className='flex gap-4 absolute top-0 bg-purple-100/70 dark:bg-gray-500/20 backdrop-blur w-full p-3 justify-center shadow-md dark:shadow-white/20'>
                <Link to="/" className='text-gray-800 dark:text-gray-100 hover:text-purple-900 dark:hover:text-purple-200 text-lg md:text-xl font-medium'>
                    Home
                </Link>
                <Link to="/projects" className='text-gray-800 dark:text-gray-100 hover:text-purple-900 dark:hover:text-purple-200 text-lg md:text-xl font-medium'>
                    Projects
                </Link>
            </div>

            <div className='text-gray-900 dark:text-gray-100 '>

                <div className='container flex flex-col gap-6 pb-14'>
                    <h1 className='main-title text-3xl md:text-5xl text-center mt-8 mb-4'>
                        {foundProjects.title}
                    </h1>
                    <p className='text-lg font-medium space-x-1.5'>
                        <span>{foundProjects.category}</span>
                        <span>|</span>
                        <span>{foundProjects.year}</span>
                    </p>
                    <p className=''>
                        {foundProjects.longDesciption}
                    </p>
                    <div>
                        <h2 className='text-xl font-medium mb-3'>
                            Key Features
                        </h2>
                        <ul className='list-none p-0 m-0'>
                            {
                                foundProjects.features.map((item) => {
                                    const idx = item.indexOf(":");

                                    return <li className='mb-4'>
                                        <span className='font-semibold'>{item.substring(0, idx + 1)}</span>
                                        {item.substring(idx + 1)}
                                    </li>
                                })
                            }
                        </ul>

                    </div>
                    <div>
                        <h2 className='text-xl font-medium mb-3'>
                            Technologies
                        </h2>
                        <ul className='flex gap-2 list-none p-0 m-0'>
                            {
                                foundProjects.tags.map((tag) => {


                                    return <li className="tag dark:tag-dark px-3 py-1.5 md:px-3.5 md:py-2">
                                        {tag}
                                    </li>
                                })
                            }
                        </ul>

                    </div>
                </div>

                <Images />

            </div>

        </motion.div >
    )
}

export default ProjectDetails