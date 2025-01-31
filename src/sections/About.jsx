import React from 'react'
import photo from "../assets/software-girl-ai.jpg"



function About() {
    return (
        <section className='px-3' id='about'>
            <div className='container flex flex-col lg:flex-row space-y-12 justify-center items-center '>
                <div className='max-w-xl'>
                    <h2 className="tracking-wider font-semibold text-xl md:text-2xl bg-gradient-to-r from-gray-700 via-gray-600 via-purple-700 to-purple-800 text-transparent bg-clip-text
                    dark:from-purple-500 dark:via-purple-400 dark:via-purple-350 dark:to-purple-300 ">
                        About me
                    </h2>

                    <h3 className="font-calistoga text-2xl md:text-4xl tracking-wide mt-4 ">Know who I am</h3>

                    <h4 className="mt-4 text-gray-900 text-opacity-70 dark:text-white/70 md:text-lg">My journey in few words</h4>

                    <p className="mt-3 text-gray-900 text-opacity-70 dark:text-white/70 md:text-lg ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
                    </p>
                </div>

                <div className="w-[260px] h-[360px] m-auto sm:w-72 sm:h-[400px] p-4  shadow-lg 
                transform rotate-3 hover:rotate-0 transition-transform duration-300 
                 bg-gradient-to-r from-gray-300 via-purple-500/40 to-purple-700/40 
                 dark:from-gray-300/40 dark:via-purple-400/20 dark:to-purple-900/40">

                    <img
                        src={photo}

                        className="w-full h-[280px] sm:h-[300px] object-cover "
                    />

                </div>

            </div>

        </section>
    )
}

export default About

