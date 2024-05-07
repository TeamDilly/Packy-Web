import BoxOpen1 from '@/lottie/Box_motion_arr_1.json'
import Lottie from 'lottie-react'
import { AnimationEventHandler } from 'react'

type OpenMotion = {
  onComplete: AnimationEventHandler
}

export default function OpenMotion({ onComplete }: OpenMotion) {
  return (
    <div className='container relative h-[calc(100dvh-4rem)] overflow-hidden'>
      <Lottie
        animationData={BoxOpen1}
        loop={false}
        onComplete={onComplete}
        style={{ position: 'absolute', top: '-1rem', left: 0, width: '100%' }}
      />
    </div>
  )
}
