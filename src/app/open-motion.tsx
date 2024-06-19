import Lottie from 'lottie-react'
import { AnimationEventHandler } from 'react'

type OpenMotion = {
  lottieData: JSON
  onComplete: AnimationEventHandler
}

export default function OpenMotion({ lottieData, onComplete }: OpenMotion) {
  return (
    <div className='container absolute flex h-[calc(100dvh-4rem)] items-center justify-center overflow-visible'>
      <Lottie animationData={lottieData} loop={false} onComplete={onComplete} style={{ width: '100%' }} />
    </div>
  )
}
