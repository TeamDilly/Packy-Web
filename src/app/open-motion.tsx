import Lottie from 'lottie-react'
import { AnimationEventHandler } from 'react'
import { cn } from '@/lib/util'

type OpenMotion = {
  lottieData: JSON
  onComplete: AnimationEventHandler
  opened: 'opening' | 'fading'
}

export default function OpenMotion({ lottieData, onComplete, opened }: OpenMotion) {
  return (
    <div
      className={cn(
        { 'item-fadein': opened === 'fading' },
        'container absolute flex h-[calc(100dvh-4rem)] items-center justify-center overflow-visible',
      )}
    >
      <Lottie animationData={lottieData} loop={false} onComplete={onComplete} style={{ width: '100%' }} />
    </div>
  )
}
