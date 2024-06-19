import { BoxStatus, DataResponseDtoGiftBoxResponse } from '@/lib/types'
import { useLottie } from '@/lib/fetchers'
import dynamic from 'next/dynamic'
import Loading from '@/app/loading'

type BoxContainerProps = {
  data: DataResponseDtoGiftBoxResponse
  opened: BoxStatus
  onOpenClick: () => void
  onOpenComplete: () => void
}

const BoxDetail = dynamic(() => import('@/app/detail'))
const Banner = dynamic(() => import('@/app/banner'))
const Timer = dynamic(() => import('@/app/timer'))
const BoxArr = dynamic(() => import('@/app/arr'))
const OpenMotion = dynamic(() => import('@/app/open-motion'))

export default function BoxContainer({ data, opened, onOpenClick, onOpenComplete }: BoxContainerProps) {
  if (data.data?.box?.boxLottie === undefined) throw new Error()
  const urlObj = new URL(data.data.box.boxLottie)
  const path = urlObj.pathname
  const { data: lottieData, error: lottieError, isLoading: lottieLoading } = useLottie(path)

  if (data.data === undefined || data.data.box === undefined) throw new Error()
  if (lottieLoading) return <Loading />
  if (lottieError || !lottieData) throw new Error('Failed to load lottie data')

  return (
    <>
      {opened === 'opened' && <Timer />}
      <Banner />
      {opened === 'opened' && <BoxDetail box={data.data} />}
      {(opened === 'opening' || opened === 'fading') && (
        <OpenMotion lottieData={lottieData} onComplete={onOpenComplete} />
      )}
      {(opened === 'closed' || opened === 'fading') && data && (
        <BoxArr box={data.data} onOpenClick={onOpenClick} opened={opened} />
      )}
    </>
  )
}
