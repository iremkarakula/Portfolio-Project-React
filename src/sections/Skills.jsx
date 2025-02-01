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
        <section className='py-48 px-2' id='skills'>
            <div className='container space-y-8 flex flex-col items-center'>
                <h2 className="sub-title dark:sub-title-dark text-center ">
                    Skills
                </h2>
                <ul className="flex flex-wrap justify-center gap-2 max-w-3xl">
                    {skillsData.map((skill, index) => {
                        return <motion.li
                            key={index}
                            className="tag dark:tag-dark"
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