
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/zoom"
import "swiper/css/navigation"
import { Zoom, Navigation } from "swiper/modules"

import img1 from "../assets/software-engineer-girl.jpg"
import img2 from "../assets/software-girl-ai.jpg"
import { X } from "lucide-react"

const images = [img1, img2, img1, img2, img1, img2]

function ImageModal({ photoIndex, setIsOpen }) {
    return (
        <div className="w-full h-full fixed top-0 left-0 p-4 pb-0 bg-black/50 flex justify-center items-center z-50">
            <div className="max-w-full max-h-[80%] w-full h-full">
                <Swiper
                    zoom={true}
                    navigation={true}
                    modules={[Zoom, Navigation]}
                    initialSlide={photoIndex}
                    className="h-full"
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={index}>
                            <div className="swiper-zoom-container">
                                <img
                                    src={img}
                                    alt={`Image ${index + 1}`}
                                    className="object-contain w-full h-full"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="absolute top-4 right-4">
                <div className="cursor-pointer">
                    <X onClick={() => setIsOpen(false)} className="text-white" />
                </div>
            </div>
        </div>
    )
}

export default ImageModal