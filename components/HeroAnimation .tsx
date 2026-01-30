'use client'

import Lottie from 'lottie-react'
import devAnimation from '@/public/lottie/LiveChatbot.json'

const HeroAnimation = () => {
    return (
        <div className="w-full flex justify-center items-center">
            <Lottie
                animationData={devAnimation}
                loop
                autoplay
            />
        </div>
    )
}

export default HeroAnimation
