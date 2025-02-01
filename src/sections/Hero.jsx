import React from 'react'
import emoji from "../assets/emoji.png"
import { ArrowRight, Github, Linkedin } from 'lucide-react'
import Circle from '../components/Circle'
import { motion } from "framer-motion"
import Star from '../components/Star'
import OrbitStar from '../components/OrbitStar'

function Hero() {
    return (
        <section className='py-32 px-1.5 md:py-48 lg:py-60 relative z-0 overflow-x-clip' id='home'>
            <div className='w-[620px] h-[620px] orbit dark:orbit-dark '></div>
            <div className='w-[820px] h-[820px] orbit dark:orbit-dark'></div>
            <div className='w-[1020px] h-[1020px] orbit dark:orbit-dark '></div>
            <div className='w-[1220px] h-[1220px] orbit dark:orbit-dark'></div>
            <div className='w-[1420px] h-[1420px] orbit dark:orbit-dark '></div>
            <div className='w-[1620px] h-[1620px] orbit dark:orbit-dark '></div>

            <OrbitStar orbitSize="800" starSize="w-4 h-4" rotation="-72">
                <Star color="#978897" />
            </OrbitStar>
            <OrbitStar orbitSize="550" starSize="w-6 h-6" rotation="20">
                <Star color="#978897" />
            </OrbitStar>
            <OrbitStar orbitSize="590" starSize="w-8 h-8" rotation="98">
                <Star color="#978897" />
            </OrbitStar>
            <OrbitStar orbitSize="430" starSize="w-8 h-8" rotation="-14">
                <Star color="#978897" />
            </OrbitStar>
            <OrbitStar orbitSize="440" starSize="w-5 h-5" rotation="79">
                <Star color="#978897" />
            </OrbitStar>
            <OrbitStar orbitSize="530" starSize="w-4 h-4" rotation="178">
                <Star color="#978897" />
            </OrbitStar>
            <OrbitStar orbitSize="710" starSize="w-2 h-2" rotation="144">
                <Star color="#978897" />
            </OrbitStar>
            <OrbitStar orbitSize="720" starSize="w-3 h-3" rotation="85">
                <Star color="#978897" />
            </OrbitStar>
            <OrbitStar orbitSize="520" starSize="w-2 h-2" rotation="-41">
                <Star color="#978897" />
            </OrbitStar>
            <OrbitStar orbitSize="650" starSize="w-2 h-2" rotation="-5">
                <Star color="#978897" />
            </OrbitStar>
            <OrbitStar orbitSize="610" starSize="w-6 h-6" rotation="-85">
                <Star color="#978897" />
            </OrbitStar>
            <OrbitStar orbitSize="570" starSize="w-8 h-8" rotation="-110">
                <Star color="#978897" />
            </OrbitStar>
            <OrbitStar orbitSize="700" starSize="w-5 h-5" rotation="-130">
                <Star color="#978897" />
            </OrbitStar>
            <OrbitStar orbitSize="670" starSize="w-5 h-5" rotation="-160">
                <Star color="#978897" />
            </OrbitStar>
            <OrbitStar orbitSize="800" starSize="w-5 h-5" rotation="-30">
                <Star color="#978897" />
            </OrbitStar>
            <OrbitStar orbitSize="800" starSize="w-5 h-5" rotation="120">
                <Star color="#978897" />
            </OrbitStar>

            <div className='container'>
                <div className='flex flex-col items-center'>
                    <motion.img src={emoji} className='w-[120px] h-[120px] translate-y-1.5'
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                    />
                    <motion.div className='flex items-center bg-gray-50 dark:bg-gray-800 inline-flex items-center gap-3 py-2 px-4 border border-gray-400/50 dark:border-gray-700 rounded-lg shadow-md shadow-black/[0.1] dark:shadow-white/[0.05]'
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.2 }}>

                        <Circle />
                        <div className='text-base font-normal'>Available for new projects</div>
                        <Circle />
                    </motion.div>
                </div>
                <div className='max-w-lg mx-auto'>
                    <motion.h1 className='main-title text-3xl md:text-5xl text-center mt-8'
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.3 }}>Crafting Code  for <br />Software Solutions</motion.h1>
                    <motion.p className='text-center mt-4 text dark:text-dark'
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.4 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quidem nemo veniam beatae soluta officiis labore ab accusamus corrupti, perspiciatis, ex nostrum aperiam reprehenderit, commodi quos voluptas minima in facilis.</motion.p>
                </div>

                <motion.div className='flex flex-col md:flex-row justify-center items-center gap-4 mt-8'
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 }}>
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

                </motion.div>
            </div>

        </section>
    )
}

export default Hero