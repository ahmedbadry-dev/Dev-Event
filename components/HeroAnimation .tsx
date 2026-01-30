'use client'

import Lottie from 'lottie-react'
import devAnimation from '@/public/lottie/LiveChatbot.json'

const HeroAnimation = () => {
    return (
        <div className="w-full min-h-[60vh] flex justify-center items-center">
            <div
                className="
          w-45
          sm:w-55
          md:w-75
          lg:w-95
          xl:w-112.5
        "
            >
                <Lottie
                    animationData={devAnimation}
                    loop
                    autoplay
                    className="w-full h-full"
                />
            </div>
        </div>
    )
}

export default HeroAnimation
