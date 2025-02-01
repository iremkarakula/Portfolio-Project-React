import { useState } from "react"

import img1 from "../assets/software-engineer-girl.jpg"
import img2 from "../assets/software-girl-ai.jpg"

import ImageModal from "./ImageModal"

const images = [img1, img2, img1, img2, img1, img2]

export function Images() {
    const [photoIndex, setPhotoIndex] = useState(0)
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="w-full">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {images.map((img, index) => (
                        <div key={index} className="aspect-square">
                            <img
                                src={img}
                                alt={`Image ${index + 1}`}
                                className="w-full h-full object-cover cursor-pointer"
                                onClick={() => {
                                    setPhotoIndex(index)
                                    setIsOpen(true)
                                }}
                            />
                        </div>
                    ))}
                </div>
                {
                    isOpen &&
                    <ImageModal photoIndex={photoIndex} setIsOpen={setIsOpen} />
                }
            </div>
        </div>
    )
}
