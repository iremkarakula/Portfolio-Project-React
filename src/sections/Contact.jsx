import React from 'react'

function Contact() {
    return (
        <section className='px-2 pb-24' id='contact'>
            <h2 className="tracking-wider font-semibold text-xl md:text-2xl  text-center
                bg-gradient-to-r from-gray-700 via-gray-600 via-purple-700 to-purple-800 
                text-transparent bg-clip-text
                    dark:from-purple-500 dark:via-purple-400 dark:via-purple-350 dark:to-purple-300  ">
                Contact Me
            </h2>
            <p className='text-center text-gray-900/70 dark:text-white/70 md:text-lg mt-4'>
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
            </form>
        </section>
    )
}

export default Contact