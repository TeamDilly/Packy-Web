import BoxOpen1 from '@/lottie/Box_motion_arr_1.json'
import Lottie from 'lottie-react'
import { AnimationEventHandler } from 'react'

type OpenMotion = {
  onComplete: AnimationEventHandler
}

export default function OpenMotion({ onComplete }: OpenMotion) {
  return (
    <div className='container absolute flex h-[calc(100dvh-4rem)] items-center justify-center overflow-visible'>
      <Lottie animationData={BoxOpen1} loop={false} onComplete={onComplete} style={{ width: '100%' }} />
    </div>
  )
}
