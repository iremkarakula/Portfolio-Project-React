import React from 'react'
import { skillsData } from '../../data'
import { motion } from "framer-motion"

const skillAnimation = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
};


function Skills() {
    return (
        <section className='py-48 px-2'>
            <div className='container space-y-8 flex flex-col items-center'>
                <h2 className="tracking-wider font-semibold text-xl md:text-2xl  text-center
                bg-gradient-to-r from-gray-700 via-gray-600 via-purple-700 to-purple-800 
                text-transparent bg-clip-text
                    dark:from-purple-500 dark:via-purple-400 dark:via-purple-350 dark:to-purple-300  ">
                    Skills
                </h2>
                <ul className="flex flex-wrap justify-center gap-2 text-base md:text-lg text-gray-800 max-w-3xl">
                    {skillsData.map((skill, index) => {
                        return <motion.li
                            key={index}
                            className="bg-white border border-black/20 rounded-xl px-3.5 py-2 md:px-5 md:py-3 dark:bg-white/10 dark:text-white/80"
                            variants={skillAnimation}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                                once: true,
                            }}
                            custom={index}>
                            {skill}
                        </motion.li>
                    })}
                </ul>
            </div>
        </section>
    )
}

export default Skills