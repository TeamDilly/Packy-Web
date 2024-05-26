import ProgressCircle from '@/components/icon/ProgressCircle'

export default function Loading() {
  return (
    <div className='flex h-dvh w-screen animate-spin items-center justify-center'>
      <ProgressCircle />
    </div>
  )
}
