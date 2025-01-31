import { ArrowRight } from 'lucide-react'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from "framer-motion"

function Project({ project }) {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.2 1"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])
    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])

    return (
        <motion.div className="bg-gray-100 border border-black/10 rounded-lg overflow-hidden relative hover:bg-gray-200   dark:bg-white/10 dark:hover:bg-white/20 p-6 "
            style={{
                scale: scale,
                opacity: opacity,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
                duration: 3,
                ease: "easeOut",
            }}
            ref={ref}
        >
            <div className="grid lg:grid-cols-3 gap-3 h-60 max-w-[700px]">

                <div className="flex flex-col justify-between col-span-2">
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-medium  text-purple-900 dark:text-purple-400">{project.category}</span>
                            <span className="text-sm text-purple-900 dark:text-purple-400">•</span>
                            <span className="text-sm text-purple-900 dark:text-purple-400">{project.year}</span>
                        </div>

                        <h2 className="text-lg mt-2">{project.title}</h2>
                        <ul className='mt-2 flex flex-wrap gap-1.5'>
                            {project.tags.map(tag => {
                                return <li className='font-medium text-xs py-2 px-3 bg-white border border-gray-300 dark:border-gray-700
                            rounded-full  dark:bg-gray-800'>{tag}</li>
                            })}

                        </ul>


                    </div>


                    <button className="w-fit flex items-center gap-2 border border-white/20 px-3 py-2 rounded-lg 
                    bg-gray-800 text-white text-sm ">
                        <span className=''>Explore Project</span>
                        <span><ArrowRight size={18} /></span>
                    </button>
                </div>


                <div className="relative w-full col-span-1 hidden lg:block">
                    <img
                        src={project.images[0]}
                        className="absolute right-0 top-0 w-full h-full object-cover rounded-xl"
                    />
                </div>
            </div>
        </motion.div>
    )
}

export default Project