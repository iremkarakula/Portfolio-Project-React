import { Send } from 'lucide-react'
import React from 'react'

function Contact() {
    return (
        <section className='px-2 pb-24' id='contact'>
            <h2 className="sub-title dark:sub-title-dark text-center  ">
                Contact Me
            </h2>
            <p className='text-center text dark:text-dark mt-4'>
                Please contact me directly at {" "}
                <a className="underline" href="mailto:">
                    x@gmail.com
                </a> {" "}
                or through this form.
            </p>
            <form className='flex flex-col justify-center max-w-xl mx-auto'>
                <input
                    className="h-14 px-4 rounded-lg bg-gray-100/50 border border-gray-400 focus:outline focus:outline-gray-400 focus:bg-white mt-16
                    dark:text-gray-900 dark:bg-gray-200 dark:focus:bg-white dark:outline-none"
                    name="email"
                    type="email"
                    required
                    maxLength={500}
                    placeholder="Your email"
                />
                <textarea
                    className="h-52 my-3 rounded-lg p-4 bg-gray-100/50 border border-gray-400 focus:outline focus:outline-gray-400 focus:bg-white
                    dark:text-gray-900 dark:bg-gray-200 dark:focus:bg-white dark:outline-none"
                    name="message"
                    placeholder="Your message"
                    required
                    maxLength={5000}
                />
                <button type='submit' className='w-fit flex items-center gap-2 border border-white/20 px-3 py-2 rounded-lg bg-gray-800 text-white text-sm '>
                    Submit <Send size={13} />
                </button>
            </form>
        </section>
    )
}

export default Contact