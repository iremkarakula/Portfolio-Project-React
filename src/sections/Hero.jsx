import React from 'react'
import emoji from "../assets/emoji.png"
import { ArrowRight, Github, Linkedin } from 'lucide-react'
import Circle from '../components/Circle'


function Hero() {
    return (
        <div className='py-32 px-1.5 md:py-48 lg:py-60'>
            <div className='container'>
                <div className='flex flex-col items-center'>
                    <img src={emoji} className='w-[120px] h-[120px] translate-y-1.5' />
                    <div className='flex items-center bg-gray-50 dark:bg-gray-800 inline-flex items-center gap-3 py-2 px-4 border border-gray-400/50 dark:border-gray-700 rounded-lg shadow-md shadow-black/[0.1] dark:shadow-white/[0.05]'>

                        <Circle />
                        <div className='text-base font-normal'>Available for new projects</div>
                        <Circle />
                    </div>
                </div>
                <div className='max-w-lg mx-auto'>
                    <h1 className='font-calistoga text-3xl md:text-5xl text-center mt-8 tracking-wide leading-8'>Crafting Code  for <br />Software Solutions</h1>
                    <p className='text-center mt-4 text-gray-900 text-opacity-70 dark:text-white/70 md:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quidem nemo veniam beatae soluta officiis labore ab accusamus corrupti, perspiciatis, ex nostrum aperiam reprehenderit, commodi quos voluptas minima in facilis.</p>
                </div>

                <div className='flex flex-col md:flex-row justify-center items-center gap-4 mt-8'>
                    <button className='flex items-center gap-2 border border-white/20 px-6 h-12 rounded-lg 
                    bg-gray-800 text-white'>
                        <span className='font-medium '>Explore My Works</span>
                        <span><ArrowRight size={20} /></span>

                    </button>
                    <div className='flex gap-2'>
                        <button className='flex justify-center items-center border border-gray-100 dark:border-white/20 w-12 h-12 rounded-full bg-gray-50 dark:bg-gray-900 shadow-lg shadow-black/[0.1] dark:shadow-white/[0.05]'>
                            <Linkedin />
                        </button>
                        <button className='flex justify-center items-center border border-gray-100 dark:border-white/20 w-12 h-12 rounded-full bg-gray-50 dark:bg-gray-900 shadow-lg shadow-black/[0.1] dark:shadow-white/[0.05]'>
                            <Github />
                        </button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Hero