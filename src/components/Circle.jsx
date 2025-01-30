import React from 'react'
import { motion } from 'framer-motion';

function Circle() {
    return (
        <div className="relative w-3 h-3">
            <motion.div
                className="absolute inset-0 bg-purple-600 rounded-full shadow-[0_0_8px_3px_rgba(147,51,234,0.4)] z-10"
                initial={{ scale: 1, opacity: 0.8 }}
                animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.8, 0.3, 0.8],
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.5, 1],
                    repeat: Number.POSITIVE_INFINITY,
                }}
            />
            <motion.div
                className="absolute inset-0 bg-blue-400 rounded-full blur-[2px]"
                initial={{ scale: 1, opacity: 0.3 }}
                animate={{
                    scale: [1, 1.8, 1],
                    opacity: [0.3, 0, 0.3],
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.5, 1],
                    repeat: Number.POSITIVE_INFINITY,
                }}
            />
            <div className="absolute inset-0 bg-purple-600 rounded-full shadow-[0_0_4px_1px_rgba(147,51,234,0.4)] z-20" />
        </div>
    )
}

export default Circle